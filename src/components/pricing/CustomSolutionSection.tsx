
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const CustomSolutionSection: React.FC = () => {
  return (
    <div className="mt-16 relative max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-taskuick-blue opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-taskuick-purple opacity-20 rounded-full blur-3xl"></div>
      
      {/* Glow border effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(0,123,255,0.3)]"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-taskuick-gray mb-6">
            Our team can create a tailored package specifically designed for your unique requirements.
          </p>
          <Button 
            as={Link} 
            to="/contact" 
            variant="primary" 
            size="lg" 
            className="group flex items-center"
          >
            Get a Custom Quote
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">What's Included:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-taskuick-blue mr-3 flex-shrink-0" />
              <span className="text-taskuick-gray">Personalized consultation</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-taskuick-blue mr-3 flex-shrink-0" />
              <span className="text-taskuick-gray">Custom requirements analysis</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-taskuick-blue mr-3 flex-shrink-0" />
              <span className="text-taskuick-gray">Tailored development plan</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-taskuick-blue mr-3 flex-shrink-0" />
              <span className="text-taskuick-gray">Flexible pricing options</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-taskuick-blue mr-3 flex-shrink-0" />
              <span className="text-taskuick-gray">Dedicated project manager</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutionSection;
