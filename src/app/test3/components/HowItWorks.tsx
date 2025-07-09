
import { Search, Palette, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: '1. Consultation & Quote',
    description: "We start with a detailed consultation to understand your vision and provide a transparent, no-obligation quote."
  },
  {
    icon: Palette,
    title: '2. Prep & Paint',
    description: "Our meticulous team prepares your space and applies flawless coats of eco-friendly paint with expert precision."
  },
  {
    icon: Sparkles,
    title: '3. Final Walkthrough & Enjoy',
    description: "We conduct a final walkthrough to ensure perfection, leaving you with a beautiful, freshly painted space to enjoy."
  }
]

export function HowItWorks() {
  return (
    <section className="bg-enviro-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-enviro-green">A Simple, Stress-Free Process</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Dashed line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0">
            <svg width="100%" height="2" className="stroke-current text-enviro-green/20">
              <line x1="0" y1="1" x2="100%" y2="1" strokeWidth="2" strokeDasharray="8, 8"/>
            </svg>
          </div>
          
          {steps.map((step, index) => (
            <div key={step.title} className="text-center relative bg-enviro-background px-4">
              <div className="inline-block bg-white p-6 rounded-2xl shadow-soft mb-4 border border-enviro-green/5">
                <step.icon className="w-10 h-10 text-enviro-pink" />
              </div>
              <h3 className="text-xl font-bold text-enviro-green mb-2">{step.title}</h3>
              <p className="text-enviro-text/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
