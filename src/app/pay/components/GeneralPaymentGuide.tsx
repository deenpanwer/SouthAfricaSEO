
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, ShieldCheck, HandCoins, FileText } from "lucide-react";

const guideSteps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Step 1: Carefully Review Your Service Agreement & Invoice",
    content: "Before making any payment, thoroughly review the service agreement and the invoice provided by your digital marketing agency. Ensure the services listed, costs, and payment terms match your understanding. Look for clarity on deliverables, timelines, and any recurring charges."
  },
  {
    icon: <HandCoins className="h-8 w-8 text-primary" />,
    title: "Step 2: Understand Common Payment Methods in the USA",
    content: "Agencies in the USA typically offer several payment options. Credit/Debit cards offer convenience and speed. Bank Transfers (ACH/Wire) are common for larger or recurring payments and are highly secure. Digital wallets like PayPal provide an additional layer of security and ease of use."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Step 3: Ensure a Secure Transaction",
    content: "Always use a secure method to pay. Reputable agencies will provide a secure payment portal for card transactions. Never send your full credit card details over email. For bank transfers, double-check the account details provided by the agency before initiating the payment."
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-primary" />,
    title: "Step 4: Confirm Payment & Retain Records",
    content: "After completing the payment, you should receive an immediate confirmation receipt. Keep a copy of this receipt and the original invoice for your financial records. This documentation is crucial for accounting and serves as proof of payment."
  }
];

export default function GeneralPaymentGuide() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guideSteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
