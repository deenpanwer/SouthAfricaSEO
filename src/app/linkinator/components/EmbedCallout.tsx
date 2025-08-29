// src/app/linkinator/components/EmbedCallout.tsx
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EmbedCallout() {
  return (
    <Card className="bg-primary-orange text-white text-center p-6">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-4">Want to embed Linkinator on your site?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-6">
          Offer a powerful link checking tool directly to your users, for free!
        </p>
        <Link href="/linkinator/embed" passHref>
          <Button className="bg-white text-primary-orange hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg">
            Learn How to Embed
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
