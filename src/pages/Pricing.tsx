
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PricingCard, { PricingFeature, PricingOptionProps } from '@/components/pricing/PricingCard';
import PricingToggle from '@/components/pricing/PricingToggle';
import FAQSection from '@/components/pricing/FAQSection';
import CTASection from '@/components/pricing/CTASection';
import CustomSolutionSection from '@/components/pricing/CustomSolutionSection';
import HeroSection from '@/components/pricing/HeroSection';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  const pricingOptions: PricingOptionProps[] = [
    {
      name: 'Basic',
      description: 'Essential services for small projects and startups.',
      price: billingPeriod === 'monthly' ? '$1,999' : '$19,999',
      period: billingPeriod === 'monthly' ? 'per project' : 'per year',
      features: [
        { text: 'Basic Web Development', included: true },
        { text: 'Up to 5 Pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Content Management System', included: true },
        { text: 'Basic SEO Setup', included: true },
        { text: 'Mobile App Development', included: false },
        { text: 'Custom Integrations', included: false },
        { text: 'AI Features', included: false },
        { text: 'Automation Solutions', included: false },
        { text: '24/7 Premium Support', included: false },
      ],
      color: 'blue'
    },
    {
      name: 'Professional',
      description: 'Advanced solutions for growing businesses.',
      price: billingPeriod === 'monthly' ? '$4,999' : '$49,999',
      period: billingPeriod === 'monthly' ? 'per project' : 'per year',
      features: [
        { text: 'Advanced Web Development', included: true },
        { text: 'Unlimited Pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Content Management System', included: true },
        { text: 'Comprehensive SEO Setup', included: true },
        { text: 'Basic Mobile App Development', included: true },
        { text: 'Custom Integrations', included: true },
        { text: 'Basic AI Features', included: true },
        { text: 'Automation Solutions', included: false },
        { text: '24/7 Premium Support', included: false },
      ],
      color: 'purple',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations.',
      price: billingPeriod === 'monthly' ? '$9,999' : '$99,999',
      period: billingPeriod === 'monthly' ? 'per project' : 'per year',
      features: [
        { text: 'Premium Web Development', included: true },
        { text: 'Unlimited Pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Advanced Content Management', included: true },
        { text: 'Enterprise SEO Strategy', included: true },
        { text: 'Advanced Mobile App Development', included: true },
        { text: 'Advanced Integrations', included: true },
        { text: 'Advanced AI Features', included: true },
        { text: 'Custom Automation Solutions', included: true },
        { text: '24/7 Premium Support', included: true },
      ],
      color: 'green'
    }
  ];

  const faqItems = [
    {
      question: 'Are there any hidden fees?',
      answer: 'No, we practice transparent pricing. The price we quote is the price you pay, with no surprise charges. Any potential additional costs will be clearly communicated upfront before work begins.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for larger projects. Typically, this involves an initial deposit followed by milestone-based payments throughout the project lifecycle.'
    },
    {
      question: 'What's included in the support and maintenance?',
      answer: 'Our support and maintenance includes bug fixes, security updates, performance monitoring, regular backups, and technical assistance. Premium support plans also include feature enhancements and 24/7 availability.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade your plan at any time. We'll simply prorate the difference based on your current plan's remaining value and apply it to your new plan.'
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact us to discuss your specific needs and eligibility.'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleBillingPeriod = () => {
    setBillingPeriod(prev => prev === 'monthly' ? 'annual' : 'monthly');
  };

  return (
    <div className="min-h-screen bg-taskuick-black overflow-x-hidden">
      <Header />
      
      <main className="pt-24 page-transition">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Pricing Section */}
        <section id="pricing-plans" className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            {/* Billing Period Toggle */}
            <PricingToggle 
              billingPeriod={billingPeriod} 
              toggleBillingPeriod={toggleBillingPeriod} 
            />
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <PricingCard key={index} {...option} />
              ))}
            </div>
            
            {/* Custom Solution */}
            <CustomSolutionSection />
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQSection faqs={faqItems} />
        
        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
