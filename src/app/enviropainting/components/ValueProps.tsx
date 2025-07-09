
import { Leaf, Award, Smile } from 'lucide-react';
import { Card } from '@/components/ui/card';

const valueProps = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Materials',
    description: 'We use premium low-VOC and zero-VOC paints that are safe for your family, pets, and the environment.'
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Our team of skilled painters is committed to meticulous prep work and flawless application for a durable, beautiful finish.'
  },
  {
    icon: Smile,
    title: 'Hassle-Free Experience',
    description: 'From clear communication to a clean workspace, we ensure your painting project is smooth and stress-free from start to finish.'
  }
];

export function ValueProps() {
  return (
    <section className="bg-enviro-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-enviro-green">Quality Painting, Consciously Done.</h2>
           <p className="text-lg text-enviro-text/80 mt-4">We believe in a better way to paint. One that combines exceptional quality with a deep respect for your health and our planet.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop) => (
            <Card key={prop.title} className="bg-white p-8 text-center rounded-2xl shadow-soft transition-shadow hover:shadow-lg">
              <div className="inline-block bg-enviro-green/10 p-4 rounded-2xl mb-4">
                <prop.icon className="w-8 h-8 text-enviro-green" />
              </div>
              <h3 className="text-xl font-bold text-enviro-green mb-2">{prop.title}</h3>
              <p className="text-enviro-text/70">{prop.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
