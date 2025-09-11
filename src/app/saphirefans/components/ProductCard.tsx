
import Image from 'next/image';
import Link from 'next/link';
import type { SaphireProduct } from '../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: SaphireProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-sky-300/50 transition-all duration-300 h-full border-slate-300 hover:border-sky-500">
      <Link href={`/saphirefans/product/${product.slug}`} className="block">
        <div className="relative w-full aspect-square bg-slate-200">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="contain" // Use contain for product images to show full item
            className="p-2"
          />
        </div>
      </Link>
      <CardHeader className="pb-2 pt-4">
        <Link href={`/saphirefans/product/${product.slug}`}>
          <CardTitle className="text-md font-semibold text-sky-700 hover:text-sky-600 line-clamp-2 h-12">{product.name}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow py-1">
        <CardDescription className="text-sm text-slate-600 line-clamp-3 h-16">{product.shortDescription}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-3 pb-4 px-4">
        <p className="text-lg font-bold text-slate-700">PKR {product.price.toLocaleString()}</p>
        <Button variant="outline" size="sm" asChild className="border-sky-600 text-sky-600 hover:bg-sky-50 hover:text-sky-700">
          <Link href={`/saphirefans/product/${product.slug}`}>
            <span className="flex items-center">
              <Eye className="mr-1 h-4 w-4" /> View
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
