
import React from 'react';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0, 123, 255, 0.4) 0%, rgba(0, 123, 255, 0) 50%), radial-gradient(circle at 75% 75%, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0) 50%)',
        }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="inline-block text-sm font-semibold text-taskuick-blue px-3 py-1 border border-taskuick-blue/30 rounded-full mb-3">PRICING</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-glow-blue mb-6">Simple, Transparent, and Fair Pricing</h2>
          <p className="text-taskuick-gray text-lg md:text-xl mb-8">
            Choose the plan that fits your needs. Not sure which one is right for you? Contact us for a custom quote.
          </p>
          
          <Button 
            as="a" 
            href="#pricing-plans" 
            variant="primary" 
            size="lg"
          >
            View Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
