
import Image from 'next/image';
import { Leaf, Users, Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about EnviroPainting\'s mission to provide beautiful, high-quality painting services with an eco-friendly focus. Meet our team and discover our commitment to quality and sustainability.',
};

export default function AboutPage() {
  const teamMembers = [
    { name: 'Jane Doe', role: 'Founder & Lead Painter', imageUrl: 'https://placehold.co/300x300.png', dataAiHint: 'professional woman portrait' },
    { name: 'John Smith', role: 'Project Manager', imageUrl: 'https://placehold.co/300x300.png', dataAiHint: 'professional man portrait' },
    { name: 'Emily White', role: 'Color Consultant', imageUrl: 'https://placehold.co/300x300.png', dataAiHint: 'creative person portrait' },
  ];

  return (
    <div className="bg-enviro-background text-enviro-text">
      <div className="container mx-auto px-6 py-16 md:py-24 space-y-20">
        
        {/* Our Story Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-enviro-green mb-4">Our Story: Painting with Purpose</h1>
          <p className="text-lg text-enviro-text/80">
            EnviroPainting was founded on a simple idea: that a beautiful home shouldn't come at the expense of a healthy planet. We wanted to create a painting company that delivered flawless results while prioritizing eco-friendly materials and sustainable practices. Today, we're proud to be a leader in conscious craftsmanship, transforming spaces with quality and care.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x450.png"
              alt="A team of painters working collaboratively"
              layout="fill"
              objectFit="cover"
              data-ai-hint="team painters work"
            />
          </div>
          <div>
            <Leaf className="w-12 h-12 text-enviro-green mb-4" />
            <h2 className="text-3xl font-bold text-enviro-green mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-enviro-text/80">
              Our mission is to deliver exceptional painting services that enhance the beauty and value of your space, while using sustainable products and methods that are safe for your family, pets, and the environment. We believe in quality, integrity, and a greener future, one brushstroke at a time.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-enviro-green">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-soft transition-shadow hover:shadow-lg">
              <Leaf className="w-10 h-10 text-enviro-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-enviro-green mb-2">Sustainability</h3>
              <p className="text-enviro-text/70">We exclusively use low-VOC or zero-VOC paints and eco-friendly materials to protect your health and the planet.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft transition-shadow hover:shadow-lg">
              <Users className="w-10 h-10 text-enviro-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-enviro-green mb-2">Craftsmanship</h3>
              <p className="text-enviro-text/70">Our team of experienced painters is dedicated to precision, quality, and meticulous attention to detail in every project.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-soft transition-shadow hover:shadow-lg">
              <Heart className="w-10 h-10 text-enviro-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-enviro-green mb-2">Customer Happiness</h3>
              <p className="text-enviro-text/70">We prioritize clear communication, transparency, and ensuring you are absolutely thrilled with the final result.</p>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-enviro-green">Meet the Team</h2>
            <p className="mt-2 text-lg text-enviro-text/80">The passionate people behind our quality work.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" data-ai-hint={member.dataAiHint} />
                </div>
                <h3 className="text-xl font-bold text-enviro-green">{member.name}</h3>
                <p className="text-enviro-pink font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
