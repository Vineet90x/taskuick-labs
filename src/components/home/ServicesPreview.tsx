
import React from 'react';
import { Code, Smartphone, Cpu, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'purple' | 'green';
  delay: number;
}

const ServiceCard = ({ icon, title, description, color, delay }: ServiceCardProps) => {
  const glowColor = {
    blue: 'before:bg-taskuick-blue/10 before:shadow-[0_0_15px_rgba(0,123,255,0.3)]',
    purple: 'before:bg-taskuick-purple/10 before:shadow-[0_0_15px_rgba(138,43,226,0.3)]',
    green: 'before:bg-taskuick-green/10 before:shadow-[0_0_15px_rgba(0,255,127,0.3)]',
  };
  
  const iconColor = {
    blue: 'text-taskuick-blue',
    purple: 'text-taskuick-purple',
    green: 'text-taskuick-green',
  };

  return (
    <div 
      className={cn(
        'relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-xl p-6 group',
        'hover:border-white/20 transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1',
        'before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity',
        'before:duration-500 hover:before:opacity-100 overflow-hidden',
        glowColor[color]
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards' 
      }}
    >
      <div className="relative z-10">
        <div className={cn(
          'w-14 h-14 flex items-center justify-center rounded-lg mb-5 transition-all duration-300 group-hover:scale-110',
          'bg-gradient-to-br from-black/60 to-black/20 border border-white/10',
          iconColor[color]
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow-blue">{title}</h3>
        <p className="text-taskuick-gray leading-relaxed mb-4">{description}</p>
        <Link 
          to="/services" 
          className={cn(
            'inline-flex items-center text-sm font-medium transition-all duration-300',
            iconColor[color]
          )}
        >
          Learn More <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
        </Link>
      </div>
    </div>
  );
};

const ServicesPreview = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies and modern design principles.',
      color: 'blue' as const,
      delay: 100,
    },
    {
      icon: <Smartphone size={28} />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      color: 'purple' as const,
      delay: 200,
    },
    {
      icon: <Cpu size={28} />,
      title: 'AI Agents',
      description: 'Intelligent AI solutions that automate tasks, provide insights, and enhance customer interactions.',
      color: 'green' as const,
      delay: 300,
    },
    {
      icon: <Zap size={28} />,
      title: 'Automation Solutions',
      description: 'Custom workflow automation tools that streamline processes and boost productivity for your business.',
      color: 'blue' as const,
      delay: 400,
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-taskuick-blue/5 to-transparent opacity-50"></div>
      <div className="container mx-auto z-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block text-sm font-semibold text-taskuick-blue px-3 py-1 border border-taskuick-blue/30 rounded-full mb-3">OUR SERVICES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Innovative Solutions for Modern Challenges</h3>
          <p className="text-taskuick-gray text-lg">We deliver cutting-edge technology solutions tailored to your specific needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            as={Link} 
            to="/services" 
            variant="primary" 
            size="lg" 
            className="mx-auto"
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
