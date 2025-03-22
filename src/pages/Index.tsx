
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CallToAction from '@/components/home/CallToAction';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-taskuick-black overflow-x-hidden">
      <Header />
      <main className="page-transition">
        <Hero />
        <ServicesPreview />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
