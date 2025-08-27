
import Image from 'next/image';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ABOUT_US_CONTENT, APP_NAME } from '@/lib/constants.tsx';
import Link from 'next/link';
import { CheckCircle, Users, Zap } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${APP_NAME}'s mission, expertise, and the dedicated team helping businesses succeed with strategic solutions.`,
};

export default function AboutUsPage() {
  const { title, introduction, mission, expertise, team } = ABOUT_US_CONTENT;

  const breadcrumbItems = [
    { name: 'TRAC', href: '/' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-24">
          <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">{title}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">{introduction}</p>
        </section>

        {/* Mission Section */}
        <section className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={mission.imageUrl}
                alt={mission.title}
                data-ai-hint={mission.dataAiHint}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{mission.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{mission.text}</p>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{expertise.title}</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging deep market knowledge and cutting-edge techniques for your success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.points.map((point, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <point.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
             <div className="order-last md:order-first">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Us for Your Business?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /><span><strong>Strategic Focus, Global Standards:</strong> We combine in-depth understanding of market dynamics with world-class practices.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /><span><strong>Results-Driven:</strong> Our strategies are designed to deliver measurable improvements in traffic, leads, and sales.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /><span><strong>Transparent Communication:</strong> We keep you informed every step of the way with clear reporting and proactive updates.</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" /><span><strong>Long-Term Partnerships:</strong> We aim to be an extension of your team, committed to your ongoing success.</span></li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
               <Image
                src={expertise.imageUrl}
                alt="Digital Strategy Session"
                data-ai-hint={expertise.dataAiHint}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
{/*
        <section className="mb-16 md:mb-24 bg-secondary/50 py-12 md:py-16 rounded-lg">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{team.title}</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">{team.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.members.map((member, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      data-ai-hint={member.dataAiHint}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4 border-4 border-primary/20"
                    />
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
*/}


        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Amplify Your Online Presence?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let our experts craft a winning strategy for your business.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
