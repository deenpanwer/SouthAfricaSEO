import type { Metadata } from "next";

import "./automations.css"; // Import specific styles for the automations subsite
import { AutomationHeader } from "@/components/automations/AutomationHeader";
import { AutomationFooter } from "@/components/automations/AutomationFooter";

export const metadata: Metadata = {
  title: "Automations - Pakistan's #1 AI Research Lab & Agency",
  description: "Leading AI research and development for government, military, and enterprises in Pakistan.",
};

export default function AutomationsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AutomationHeader />
      <main>{children}</main>
      <AutomationFooter />
    </>
  );
}