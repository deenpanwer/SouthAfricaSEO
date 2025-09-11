
"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Home, ChevronRight, CreditCard, Truck, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const checkoutSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid Pakistani phone number (e.g., 03001234567)." }).regex(/^03\d{9}$/, "Invalid Pakistani mobile number format."),
  address: z.string().min(10, { message: "Address must be at least 10 characters." }),
  city: z.string().min(3, { message: "City is required." }),
  paymentMethod: z.enum(['card', 'cod'], { required_error: "Please select a payment method." }),
  cardNumber: z.string().optional(),
  expiryDate: z.string().optional(),
  cvv: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const PAKISTAN_CITIES = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Hyderabad", "Gujranwala", "Sialkot", "Other"];

export default function CheckoutPage() {
  const { items, getCartTotal, clearCart } = useCart();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isNavigatingPostCheckout, setIsNavigatingPostCheckout] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      address: "",
      city: "",
      paymentMethod: undefined,
    },
  });

  const subtotal = getCartTotal();
  const shippingCost = subtotal > 0 ? 500 : 0;
  const total = subtotal + shippingCost;

  const onSubmit: SubmitHandler<CheckoutFormValues> = async (data) => {
    setIsLoading(true); // For button visual state
    console.log("Checkout data:", data);
    toast({
      title: "Order Processing...",
      description: `Thank you, ${data.fullName}. Your order for SaphireFans is being processed. Payment method: ${data.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card (Simulated)'}.`,
      duration: 7000, // Duration can be adjusted
    });

    setIsNavigatingPostCheckout(true); // Signal that we are proceeding to thank-you page

    clearCart(); // This will trigger the useEffect if not handled
    router.push('/saphirefans/thank-you');
    // setIsLoading(false); // Not strictly needed as component will unmount
  };

  useEffect(() => {
    // Redirect to cart if it's empty AND we are not in the process of navigating post-checkout
    if (!isNavigatingPostCheckout && items.length === 0 && subtotal === 0 && typeof window !== 'undefined') {
      router.replace('/saphirefans/cart');
    }
    // This effect should not depend on `isNavigatingPostCheckout` directly in its re-trigger logic
    // if we only want it to run on item/subtotal changes.
    // However, including it ensures that if `isNavigatingPostCheckout` changes, the condition is re-evaluated.
  }, [items, subtotal, router, isNavigatingPostCheckout]);

  if (items.length === 0 && subtotal === 0 && !isNavigatingPostCheckout) {
    return <div className="text-center py-10">Redirecting to cart...</div>;
  }

  return (
    <div className="space-y-8 py-10">
      <nav className="text-sm text-slate-600 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex items-center space-x-2">
          <li><Link href="/saphirefans" className="hover:text-sky-600 flex items-center"><Home className="h-4 w-4 mr-1.5" />Home</Link></li>
          <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
          <li><Link href="/saphirefans/cart" className="hover:text-sky-600">Cart</Link></li>
          <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
          <li className="font-medium text-sky-700" aria-current="page">Checkout</li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-700">Checkout</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3">Shipping Information (Pakistan)</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="e.g. Ahmed Khan" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number (for delivery)</FormLabel>
                    <FormControl><Input type="tel" placeholder="03001234567" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Address (Street, Area)</FormLabel>
                  <FormControl><Textarea placeholder="House #, Street, Block/Sector, Area Name" {...field} rows={3} disabled={isLoading} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City (Pakistan)</FormLabel>
                  <FormControl>
                    <select {...field} disabled={isLoading} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select City</option>
                      {PAKISTAN_CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3 pt-4">Payment Method</h2>
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 p-3 border rounded-md hover:border-sky-500 cursor-pointer has-[input:checked]:border-sky-600 has-[input:checked]:bg-sky-50">
                        <FormControl><RadioGroupItem value="cod" id="cod" /></FormControl>
                        <Label htmlFor="cod" className="font-medium flex items-center cursor-pointer">
                          <Truck className="h-5 w-5 mr-2 text-sky-600"/>Cash on Delivery (COD)
                        </Label>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 p-3 border rounded-md hover:border-sky-500 cursor-pointer has-[input:checked]:border-sky-600 has-[input:checked]:bg-sky-50">
                        <FormControl><RadioGroupItem value="card" id="card" /></FormControl>
                        <Label htmlFor="card" className="font-medium flex items-center cursor-pointer">
                          <CreditCard className="h-5 w-5 mr-2 text-sky-600"/>Credit/Debit Card (Online Payment - Simulated)
                        </Label>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch('paymentMethod') === 'card' && (
              <div className="space-y-4 p-4 border rounded-md bg-slate-50">
                <p className="text-sm text-slate-600">This is a simulated card payment form. No real transaction will occur.</p>
                 <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl><Input placeholder="XXXX XXXX XXXX XXXX" {...field} disabled={isLoading} /></FormControl>
                    </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Expiry Date</FormLabel>
                            <FormControl><Input placeholder="MM/YY" {...field} disabled={isLoading} /></FormControl>
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="cvv"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>CVV</FormLabel>
                            <FormControl><Input placeholder="XXX" {...field} disabled={isLoading} /></FormControl>
                        </FormItem>
                        )}
                    />
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md space-y-4 h-fit sticky top-24">
            <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3">Order Summary</h2>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-start text-sm border-b border-slate-200 py-2">
                  <div className="flex items-start">
                    <Image src={item.imageUrl} alt={item.name} width={40} height={40} className="rounded mr-2 border"/>
                    <div>
                      <p className="font-medium text-slate-700 line-clamp-1">{item.name}</p>
                      <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-slate-600">PKR {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-1">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>PKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping (Pakistan)</span>
                <span>PKR {shippingCost.toLocaleString()}</span>
              </div>
              <div className="pt-2 flex justify-between text-xl font-bold text-slate-800">
                <span>Total</span>
                <span>PKR {total.toLocaleString()}</span>
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full bg-sky-600 hover:bg-sky-700 text-white mt-4" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Placing Order...
                </>
              ) : (
                "Place Order"
              )}
            </Button>
            <p className="text-xs text-slate-500 text-center">By placing your order, you agree to our terms and conditions.</p>
          </div>
        </form>
      </Form>
    </div>
  );
}

    