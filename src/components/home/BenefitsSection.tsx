
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { BUSINESS_BENEFITS } from '@/lib/constants.tsx'; // Updated constant name

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Unlock Your Business Potential
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            At {APP_NAME}, we're not just another consultancy. We are specialists in crafting bespoke strategies that elevate your business. Our mission is to empower companies like yours to achieve top performance, attract high-value clients, and significantly boost your return on investment. With a deep understanding of market dynamics and consumer behavior, we develop solutions that deliver real, measurable results.
          </p>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how expert strategies can transform your online presence and drive tangible results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_BENEFITS.map((benefit, index) => ( // Using BUSINESS_BENEFITS
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <benefit.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
