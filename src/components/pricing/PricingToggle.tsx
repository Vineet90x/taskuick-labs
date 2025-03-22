
import React from 'react';
import { cn } from '@/lib/utils';

interface PricingToggleProps {
  billingPeriod: 'monthly' | 'annual';
  toggleBillingPeriod: () => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ 
  billingPeriod, 
  toggleBillingPeriod 
}) => {
  return (
    <div className="flex items-center justify-center mb-16">
      <span className={billingPeriod === 'monthly' ? 'text-white mr-4' : 'text-taskuick-gray mr-4'}>
        Monthly
      </span>
      
      <button
        onClick={toggleBillingPeriod}
        className={cn(
          "relative w-16 h-8 rounded-full transition-all duration-300",
          billingPeriod === 'monthly' ? 'bg-taskuick-blue' : 'bg-taskuick-purple'
        )}
      >
        <span 
          className={cn(
            "absolute top-1 w-6 h-6 rounded-full bg-white transition-all duration-300",
            billingPeriod === 'monthly' ? 'left-1' : 'left-9'
          )}
        ></span>
      </button>
      
      <span className={billingPeriod === 'annual' ? 'text-white ml-4' : 'text-taskuick-gray ml-4'}>
        Annual <span className="bg-taskuick-green text-black text-xs px-2 py-0.5 rounded-full ml-1">Save 15%</span>
      </span>
    </div>
  );
};

export default PricingToggle;
