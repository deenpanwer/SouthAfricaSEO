
import type { AutoDealerStateServiceItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AutoDealerStateServicesGridProps {
  headline: string;
  subheadline: string;
  services: AutoDealerStateServiceItem[];
  stateName: string;
}

export function AutoDealerStateServicesGrid({ headline, subheadline, services, stateName }: AutoDealerStateServicesGridProps) {
  return (
    <section className="py-12 md:py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-primary">{headline.replace('[StateName]', stateName)}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subheadline.replace('[StateName]', stateName)}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="flex items-start space-x-4 p-1">
              <div className="flex-shrink-0 mt-1">
                <service.icon className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-foreground">{service.title.replace('[StateName]', stateName)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description.replace('[StateName]', stateName)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
