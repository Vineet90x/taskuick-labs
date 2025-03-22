
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingOptionProps {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  color: 'blue' | 'purple' | 'green';
  popular?: boolean;
}

const PricingCard: React.FC<PricingOptionProps> = ({
  name,
  description,
  price,
  period,
  features,
  color,
  popular
}) => {
  const colorClasses = {
    blue: {
      border: 'hover:border-taskuick-blue/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]',
      button: 'bg-taskuick-blue hover:shadow-[0_0_10px_rgba(0,123,255,0.7)]',
      badge: 'bg-taskuick-blue',
      textColor: 'text-taskuick-blue'
    },
    purple: {
      border: 'hover:border-taskuick-purple/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]',
      button: 'bg-taskuick-purple hover:shadow-[0_0_10px_rgba(138,43,226,0.7)]',
      badge: 'bg-taskuick-purple',
      textColor: 'text-taskuick-purple'
    },
    green: {
      border: 'hover:border-taskuick-green/50',
      shadow: 'hover:shadow-[0_0_20px_rgba(0,255,127,0.4)]',
      button: 'bg-taskuick-green hover:text-taskuick-black hover:shadow-[0_0_10px_rgba(0,255,127,0.7)]',
      badge: 'bg-taskuick-green',
      textColor: 'text-taskuick-green'
    }
  };

  return (
    <div 
      className={cn(
        "relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-500",
        popular ? 'transform scale-105 z-10 shadow-xl' : 'transform hover:scale-105',
        colorClasses[color].border,
        colorClasses[color].shadow
      )}
    >
      {popular && (
        <div className={cn("absolute top-0 right-0 text-white text-xs px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium tracking-wide", colorClasses[color].badge)}>
          POPULAR
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-taskuick-gray mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-taskuick-gray ml-2">{period}</span>
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              {feature.included ? (
                <Check className={cn("h-5 w-5 mr-3 flex-shrink-0", colorClasses[color].textColor)} />
              ) : (
                <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-taskuick-gray' : 'text-gray-500'}>{feature.text}</span>
            </div>
          ))}
        </div>
        
        <Link to="/contact">
          <button className={cn("w-full py-3 rounded-lg font-medium text-white transition-all duration-300", colorClasses[color].button)}>
            {popular ? 'Choose Professional' : `Choose ${name}`}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
