
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-12 overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-taskuick-green opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-taskuick-blue opacity-20 rounded-full blur-3xl"></div>
          
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(0,255,127,0.3)]"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-green">Need a Custom Quote?</h2>
            <p className="text-taskuick-gray text-lg max-w-2xl mx-auto mb-8">
              Not finding exactly what you need? Our team is ready to create a tailored solution that perfectly matches your requirements and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                as={Link} 
                to="/contact" 
                variant="accent" 
                size="lg" 
                glowEffect
              >
                Contact Us
              </Button>
              
              <Button 
                as="a" 
                href="tel:+15551234567" 
                variant="outline" 
                size="lg"
              >
                Call: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
