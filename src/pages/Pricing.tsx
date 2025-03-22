
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, X, HelpCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface PricingOption {
  name: string;
  description: string;
  price: string;
  period: string;
  features: Array<{ text: string; included: boolean }>;
  color: 'blue' | 'purple' | 'green';
  popular?: boolean;
}

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  
  const pricingOptions: PricingOption[] = [
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
              <h1 className="inline-block text-sm font-semibold text-taskuick-blue px-3 py-1 border border-taskuick-blue/30 rounded-full mb-3">PRICING</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-glow-blue mb-6">Simple, Transparent, and Fair Pricing</h2>
              <p className="text-taskuick-gray text-lg md:text-xl mb-8">
                Choose the plan that fits your needs. Not sure which one is right for you? Contact us for a custom quote.
              </p>
              
              <Button 
                as="a" 
                href="#pricing-plans" 
                variant="primary" 
                size="lg"
              >
                View Plans
              </Button>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing-plans" className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            {/* Billing Period Toggle */}
            <div className="flex items-center justify-center mb-16">
              <span className={billingPeriod === 'monthly' ? 'text-white mr-4' : 'text-taskuick-gray mr-4'}>Monthly</span>
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
              <span className={billingPeriod === 'annual' ? 'text-white ml-4' : 'text-taskuick-gray ml-4'}>Annual <span className="bg-taskuick-green text-black text-xs px-2 py-0.5 rounded-full ml-1">Save 15%</span></span>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => {
                const colorClasses = {
                  blue: {
                    border: 'hover:border-taskuick-blue/50',
                    shadow: 'hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]',
                    button: 'bg-taskuick-blue hover:shadow-[0_0_10px_rgba(0,123,255,0.7)]',
                    badge: 'bg-taskuick-blue'
                  },
                  purple: {
                    border: 'hover:border-taskuick-purple/50',
                    shadow: 'hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]',
                    button: 'bg-taskuick-purple hover:shadow-[0_0_10px_rgba(138,43,226,0.7)]',
                    badge: 'bg-taskuick-purple'
                  },
                  green: {
                    border: 'hover:border-taskuick-green/50',
                    shadow: 'hover:shadow-[0_0_20px_rgba(0,255,127,0.4)]',
                    button: 'bg-taskuick-green hover:text-taskuick-black hover:shadow-[0_0_10px_rgba(0,255,127,0.7)]',
                    badge: 'bg-taskuick-green'
                  }
                };
                
                return (
                  <div 
                    key={index}
                    className={cn(
                      "relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all duration-500",
                      option.popular ? 'transform scale-105 z-10 shadow-xl' : 'transform hover:scale-105',
                      colorClasses[option.color].border,
                      colorClasses[option.color].shadow
                    )}
                  >
                    {option.popular && (
                      <div className={`absolute top-0 right-0 ${colorClasses[option.color].badge} text-white text-xs px-4 py-1 rounded-bl-lg rounded-tr-lg font-medium tracking-wide`}>
                        POPULAR
                      </div>
                    )}
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{option.name}</h3>
                      <p className="text-taskuick-gray mb-6">{option.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">{option.price}</span>
                        <span className="text-taskuick-gray ml-2">{option.period}</span>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {option.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            {feature.included ? (
                              <Check className={`h-5 w-5 ${option.color === 'blue' ? 'text-taskuick-blue' : option.color === 'purple' ? 'text-taskuick-purple' : 'text-taskuick-green'} mr-3 flex-shrink-0`} />
                            ) : (
                              <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                            )}
                            <span className={feature.included ? 'text-taskuick-gray' : 'text-gray-500'}>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link to="/contact">
                        <button className={`w-full py-3 rounded-lg font-medium text-white transition-all duration-300 ${colorClasses[option.color].button}`}>
                          {option.popular ? 'Choose Professional' : `Choose ${option.name}`}
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Custom Solution */}
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
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="inline-block text-sm font-semibold text-taskuick-purple px-3 py-1 border border-taskuick-purple/30 rounded-full mb-3">FAQ</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pricing Questions</h3>
              <p className="text-taskuick-gray text-lg">
                Find answers to common questions about our pricing and packages.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
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
                ].map((faq, index) => (
                  <details 
                    key={index}
                    className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-6">
                      <h4 className="text-lg font-semibold text-white pr-6">{faq.question}</h4>
                      <span className="flex-shrink-0 w-5 h-5 border-l-2 border-t-2 border-taskuick-purple transform rotate-45 group-open:rotate-225 transition-transform duration-300"></span>
                    </summary>
                    <div className="p-6 pt-0">
                      <p className="text-taskuick-gray">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-12 overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-taskuick-green opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-taskuick-blue opacity-20 rounded-full blur-3xl"></div>
              
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(0,255,127,0.3)]"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-green">Need a Custom Quote?</h2>
                <p className="text-taskuick-gray text-lg max-w-2xl mx-auto mb-8">
                  Not finding exactly what you need? Our team is ready to create a tailored solution that perfectly matches your requirements and budget.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="accent" 
                    size="lg" 
                    glowEffect
                  >
                    Contact Us
                  </Button>
                  
                  <Button 
                    as="a" 
                    href="tel:+15551234567" 
                    variant="outline" 
                    size="lg"
                  >
                    Call: (555) 123-4567
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
