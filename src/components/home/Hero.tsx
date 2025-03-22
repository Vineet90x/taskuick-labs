
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const xOffset = (x - 0.5) * 20;
      const yOffset = (y - 0.5) * 20;
      
      heroRef.current.style.setProperty('--x-offset', `${xOffset}px`);
      heroRef.current.style.setProperty('--y-offset', `${yOffset}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ 
        background: 'radial-gradient(circle at center, rgba(0,123,255,0.15) 0%, rgba(0,0,0,0) 70%)',
        "--x-offset": "0px",
        "--y-offset": "0px",
      } as React.CSSProperties}
    >
      {/* Background elements */}
      <div className="absolute inset-0 circuit-bg opacity-20"></div>
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0) 50%), radial-gradient(circle at 80% 80%, rgba(0, 255, 127, 0.4) 0%, rgba(0, 255, 127, 0) 50%)',
        }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute h-32 w-32 rounded-full bg-taskuick-blue/20 blur-3xl animate-float" 
           style={{top: '15%', right: '10%', animationDelay: '0s', transform: 'translate(calc(var(--x-offset) * -0.2), calc(var(--y-offset) * -0.2))'}}></div>
      <div className="absolute h-24 w-24 rounded-full bg-taskuick-purple/20 blur-3xl animate-float" 
           style={{bottom: '20%', left: '15%', animationDelay: '1s', transform: 'translate(calc(var(--x-offset) * -0.15), calc(var(--y-offset) * -0.15))'}}></div>
      <div className="absolute h-40 w-40 rounded-full bg-taskuick-green/10 blur-3xl animate-float" 
           style={{top: '40%', left: '5%', animationDelay: '2s', transform: 'translate(calc(var(--x-offset) * -0.1), calc(var(--y-offset) * -0.1))'}}></div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-block bg-taskuick-blue/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <span className="text-taskuick-gray font-medium text-sm">Innovate. Create. Automate.</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-glow-blue animate-glow tracking-tight leading-tight">
            Speed. Innovation. <span className="text-taskuick-blue">Precision.</span>
          </h1>
          
          <p className="text-taskuick-gray text-lg md:text-xl max-w-2xl leading-relaxed mt-4">
            We build cutting-edge web applications, mobile apps, AI agents, and automation solutions 
            that transform businesses and deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
            <Button 
              as={Link} 
              to="/contact" 
              variant="primary" 
              size="lg" 
              glowEffect 
              className="group flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              as={Link} 
              to="/projects" 
              variant="outline" 
              size="lg"
            >
              See Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-taskuick-gray/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-taskuick-blue rounded-full mt-2 animate-bounce delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
