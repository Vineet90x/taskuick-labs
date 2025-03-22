
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-taskuick-blue/20 to-taskuick-purple/20 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0, 123, 255, 0.4) 0%, rgba(0, 123, 255, 0) 50%), radial-gradient(circle at 75% 75%, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0) 50%)',
        }}
      ></div>
      
      <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-12 overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-taskuick-blue opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-taskuick-purple opacity-20 rounded-full blur-3xl"></div>
        
        {/* Glow border effect */}
        <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(0,123,255,0.3)]"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-blue">Ready to Transform Your Ideas into Reality?</h2>
          <p className="text-taskuick-gray text-lg max-w-2xl mx-auto mb-8">
            Whether you need a cutting-edge web application, a custom mobile app, AI solutions, or automation tools,
            our team is ready to bring your vision to life with precision and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              as={Link} 
              to="/contact" 
              variant="primary" 
              size="lg" 
              glowEffect
            >
              Start Your Project
            </Button>
            
            <Button 
              as={Link} 
              to="/services" 
              variant="outline" 
              size="lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
