
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Cpu, Zap, Server, Palette, ArrowRight, Monitor, LineChart, Layers } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: 'blue' | 'purple' | 'green';
}

const ServiceCard = ({ icon, title, description, features, color }: ServiceCardProps) => {
  const colorClasses = {
    blue: {
      border: 'group-hover:border-taskuick-blue/50',
      shadow: 'group-hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]',
      icon: 'text-taskuick-blue',
      button: 'bg-taskuick-blue hover:shadow-[0_0_10px_rgba(0,123,255,0.7)]'
    },
    purple: {
      border: 'group-hover:border-taskuick-purple/50',
      shadow: 'group-hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]',
      icon: 'text-taskuick-purple',
      button: 'bg-taskuick-purple hover:shadow-[0_0_10px_rgba(138,43,226,0.7)]'
    },
    green: {
      border: 'group-hover:border-taskuick-green/50',
      shadow: 'group-hover:shadow-[0_0_20px_rgba(0,255,127,0.4)]',
      icon: 'text-taskuick-green',
      button: 'bg-taskuick-green hover:text-taskuick-black hover:shadow-[0_0_10px_rgba(0,255,127,0.7)]'
    }
  };

  return (
    <div className={`bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-8 group transition-all duration-500 hover:-translate-y-2 ${colorClasses[color].border} ${colorClasses[color].shadow}`}>
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-black/60 to-black/20 border border-white/10 ${colorClasses[color].icon}`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-taskuick-gray mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`inline-flex mr-2 mt-1 ${colorClasses[color].icon}`}>•</span>
            <span className="text-taskuick-gray">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link to="/contact">
        <button className={`w-full py-3 rounded-lg font-medium text-white transition-all duration-300 ${colorClasses[color].button} flex items-center justify-center`}>
          Get Started <ArrowRight size={18} className="ml-2" />
        </button>
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: [
        'Custom web application development',
        'E-commerce solutions',
        'SaaS platforms',
        'Progressive Web Apps (PWAs)',
        'API development and integration'
      ],
      color: 'blue' as const
    },
    {
      icon: <Smartphone size={32} />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform development',
        'App maintenance and updates',
        'App Store optimization'
      ],
      color: 'purple' as const
    },
    {
      icon: <Cpu size={32} />,
      title: 'AI Agents',
      description: 'Intelligent AI solutions that automate tasks and enhance customer interactions.',
      features: [
        'Custom AI assistants',
        'Natural language processing',
        'Predictive analytics',
        'Machine learning models',
        'Conversational interfaces'
      ],
      color: 'green' as const
    },
    {
      icon: <Zap size={32} />,
      title: 'Automation Solutions',
      description: 'Custom workflow automation tools that streamline processes and boost productivity.',
      features: [
        'Business process automation',
        'Workflow optimization',
        'Integration with existing systems',
        'Custom automation scripts',
        'Automated testing and QA'
      ],
      color: 'blue' as const
    },
    {
      icon: <Server size={32} />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure designed for reliability and performance.',
      features: [
        'Cloud architecture design',
        'Cloud migration services',
        'Serverless applications',
        'DevOps automation',
        'Cloud optimization'
      ],
      color: 'purple' as const
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user interfaces that enhance user experience and drive engagement.',
      features: [
        'User interface design',
        'User experience research',
        'Prototyping and wireframing',
        'Design systems',
        'Usability testing'
      ],
      color: 'green' as const
    },
    {
      icon: <Monitor size={32} />,
      title: 'CMS Development',
      description: 'Customized content management systems that make content updates simple and efficient.',
      features: [
        'Custom CMS development',
        'CMS integration',
        'Content strategy',
        'Migration services',
        'Training and support'
      ],
      color: 'blue' as const
    },
    {
      icon: <LineChart size={32} />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics solutions that provide actionable insights for your business.',
      features: [
        'Data visualization',
        'Custom dashboards',
        'Real-time reporting',
        'KPI tracking',
        'Business intelligence'
      ],
      color: 'purple' as const
    },
    {
      icon: <Layers size={32} />,
      title: 'Consulting Services',
      description: 'Expert guidance on technology strategy, product development, and digital transformation.',
      features: [
        'Technology strategy',
        'Digital transformation',
        'Product roadmapping',
        'Technical audits',
        'Staff augmentation'
      ],
      color: 'green' as const
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-taskuick-black overflow-x-hidden">
      <Header />
      
      <main className="pt-24 page-transition">
        {/* Hero Section */}
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
              <h1 className="inline-block text-sm font-semibold text-taskuick-blue px-3 py-1 border border-taskuick-blue/30 rounded-full mb-3">OUR SERVICES</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-glow-blue mb-6">Smart Solutions, Built for You</h2>
              <p className="text-taskuick-gray text-lg md:text-xl mb-8">
                We deliver innovative technology solutions tailored to your specific needs, 
                helping you achieve your business goals with efficiency and precision.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  as={Link} 
                  to="#services-list" 
                  variant="primary" 
                  size="lg"
                >
                  Explore Services
                </Button>
                
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="outline" 
                  size="lg"
                >
                  Get a Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Grid Section */}
        <section id="services-list" className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  color={service.color}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 relative bg-gradient-to-t from-black to-transparent">
          <div className="container mx-auto">
            <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-12 overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-taskuick-blue opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-taskuick-purple opacity-20 rounded-full blur-3xl"></div>
              
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(0,123,255,0.3)]"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-blue">Ready to Transform Your Business?</h2>
                <p className="text-taskuick-gray text-lg max-w-2xl mx-auto mb-8">
                  Let's discuss how our services can help you achieve your goals and take your business to the next level.
                </p>
                
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  size="lg" 
                  glowEffect
                  className="mx-auto"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
