import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
  import { ServicePackageDisplay } from '@/components/services/ServicePackageDisplay';
  import { SERVICE_PACKAGE_GROUPS } from '@/lib/packages';

  export function PricingAccordions() {
    return (
        <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="Affordable SEO Packages"
      >
        {SERVICE_PACKAGE_GROUPS.map((group) => (
          <AccordionItem key={group.title} value={group.title}>
            <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
              <div className="flex items-center gap-3">
                <group.icon className="h-8 w-8 text-primary" />
                {group.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-6">
              <p className="text-center text-muted-foreground mb-8">
                {group.description}
              </p>
              <ServicePackageDisplay packages={group.packages} groupTitle={group.title.replace('Affordable ', '')} />
              {group.title.includes("Affordable") && (
                <p className="text-center text-muted-foreground mt-4">
                  Looking for even more affordable options? Our plans are designed to deliver maximum value without breaking the bank.
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }