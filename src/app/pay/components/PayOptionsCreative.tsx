'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, CreditCard, Banknote, Wallet, Mail, Phone, FileText, Handshake, Lock } from 'lucide-react';
import Image from 'next/image';
import { CONTACT_DETAILS } from '@/lib/constants';

export default function PayOptionsCreative() {
  

  return (
    <>
      {/* Our Seamless Onboarding Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Seamless Onboarding Process</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-stretch space-y-8 md:space-y-0 md:space-x-8">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -z-10 mx-16"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-md flex-1">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Agreement & Invoice</h3>
            <p className="text-muted-foreground">Finalize service details and receive your transparent invoice.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-md flex-1">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
              <CreditCard className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Select Payment Method</h3>
            <p className="text-muted-foreground">Choose from our secure and convenient payment options.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-md flex-1">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
              <Lock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Secure Confirmation</h3>
            <p className="text-muted-foreground">Complete your payment with instant, secure confirmation.</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg shadow-md flex-1">
            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Service Commencement</h3>
            <p className="text-muted-foreground">Upon payment, your dedicated team begins work immediately.</p>
          </div>
        </div>
      </section>

      {/* Streamlined Payment Options Display */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Secure Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Method 1: Credit/Debit Card */}
          <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CreditCard className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-xl font-semibold mb-2">Credit/Debit Card</CardTitle>
            <CardContent className="text-muted-foreground text-sm">Secure Online Payments via Stripe</CardContent>
          </Card>

          {/* Method 2: Bank Transfer */}
          <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Banknote className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-xl font-semibold mb-2">Bank Transfer</CardTitle>
            <CardContent className="text-muted-foreground text-sm">Direct ACH/Wire Transfers</CardContent>
          </Card>

          {/* Method 3: PayPal */}
          <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Wallet className="h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-xl font-semibold mb-2">PayPal</CardTitle>
            <CardContent className="text-muted-foreground text-sm">Convenient Digital Wallet</CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Security & Support Section */}
      <section className="mb-12 py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-inner">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Your Peace of Mind, Our Priority.</h2>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-16">
            We are committed to providing a secure and transparent experience for all your transactions.
            Your trust is our greatest asset.
          </p>
          
            {/* Dedicated Support Block */}
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <div className="p-4 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                <Mail className="h-16 w-16" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Need Assistance? We're Here to Help.</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated support team is ready to assist with any questions regarding your invoices, payments, or service agreements.
                Reach out to us directly for prompt and friendly assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <Button size="lg" asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href={`mailto:${CONTACT_DETAILS.email}`}>
                    <Mail className="h-5 w-5 mr-2" /> Email Billing
                  </Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="flex-1 border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  <Link href={`tel:${CONTACT_DETAILS.phone}`}>
                    <Phone className="h-5 w-5 mr-2" /> Call Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
