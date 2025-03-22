
import React from 'react';
import { Zap, Clock, Shield, Settings, Lightbulb, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
  delay: number;
}

const Feature = ({ icon, title, description, iconColor, delay }: FeatureProps) => {
  return (
    <div 
      className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-6 group hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards' 
      }}
    >
      <div className="flex">
        <div className={cn(
          'flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg mr-4',
          'bg-gradient-to-br from-black/60 to-black/20 border border-white/10',
          iconColor
        )}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-glow-blue">{title}</h3>
          <p className="text-taskuick-gray text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Ultra-Fast Delivery',
      description: 'We prioritize efficiency without compromising quality, delivering your projects ahead of schedule.',
      iconColor: 'text-taskuick-blue',
      delay: 100,
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure & Reliable',
      description: 'We implement industry-leading security practices to protect your data and ensure reliability.',
      iconColor: 'text-taskuick-purple',
      delay: 200,
    },
    {
      icon: <Settings size={24} />,
      title: 'Scalable Technology',
      description: 'Our solutions are built to grow with your business, adapting to your evolving needs.',
      iconColor: 'text-taskuick-green',
      delay: 300,
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Support',
      description: 'Our dedicated team is always available to address any issues and provide assistance.',
      iconColor: 'text-taskuick-blue',
      delay: 400,
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovative Approach',
      description: 'We stay ahead of the curve by employing the latest technologies and methodologies.',
      iconColor: 'text-taskuick-purple',
      delay: 500,
    },
    {
      icon: <Users size={24} />,
      title: 'Dedicated Team',
      description: 'Our experts collaborate closely with you to understand your vision and deliver exceptional results.',
      iconColor: 'text-taskuick-green',
      delay: 600,
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-black/50 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      <div className="container mx-auto z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block text-sm font-semibold text-taskuick-purple px-3 py-1 border border-taskuick-purple/30 rounded-full mb-3">WHY CHOOSE US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Excellence at Every Step</h3>
          <p className="text-taskuick-gray text-lg">We combine technical expertise with a client-focused approach to deliver outstanding results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
