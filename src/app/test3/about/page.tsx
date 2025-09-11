
import Image from 'next/image';
import { Leaf, Users, Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about EnviroPainting\'s mission to provide beautiful, high-quality painting services with an eco-friendly focus. Meet our team and discover our commitment to quality and sustainability.',
};

export default function AboutPage() {
  const teamMembers = [
    { name: 'Tayne Sinclair', role: 'Co-Owner | Lead Painter', imageUrl: 'https://static.wixstatic.com/media/3ec430_ffda54d427b441a3ac78da5b7a02acc8~mv2.jpg/v1/fill/w_235,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tayne_Headshot.jpg' },
    { name: 'Lisa Sinclair', role: 'Co-Owner | Office Manager', imageUrl: 'https://static.wixstatic.com/media/3ec430_9a5f95557d0e462cb421d3c7ad8d9a6c~mv2.jpg/v1/fill/w_235,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lisa_Headshot_2.jpg' },
    { name: 'Jordan Sinclair', role: 'Job Coordinator', imageUrl: 'https://static.wixstatic.com/media/3ec430_1065410371bc487db2fa8767da48f100~mv2.jpg/v1/crop/x_0,y_287,w_1147,h_1147/fill/w_235,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jordan_Headshot_2.jpg' },
    { name: 'Mason', role: 'Head of Security', imageUrl: 'https://static.wixstatic.com/media/3ec430_63c8c57f628e4df3b8e171cea37b0373~mv2.jpg/v1/fill/w_235,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/mason5.jpg' },
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
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://static.wixstatic.com/media/3ec430_be631561fc4e47f089c561985999f803~mv2.jpg/v1/fill/w_402,h_566,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3ec430_be631561fc4e47f089c561985999f803~mv2.jpg"
              alt="The EnviroPainting founders"
              layout="fill"
              objectFit="cover"
              data-ai-hint="team founders portrait"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" />
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
