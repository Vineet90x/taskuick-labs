import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'web-development',
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      
      setFormState('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'web-development',
      });
      
      // Reset form state after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      setFormState('error');
      
      // Show error toast
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
      
      // Reset form state after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }
  };
  
  // Contact info data
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-taskuick-blue" />,
      title: 'Email',
      value: 'info@taskuick.com',
      link: 'mailto:info@taskuick.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-taskuick-purple" />,
      title: 'Phone',
      value: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="h-6 w-6 text-taskuick-green" />,
      title: 'Address',
      value: '123 Innovation Way, Tech City, TC 98765',
      link: 'https://maps.google.com'
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
              <h1 className="inline-block text-sm font-semibold text-taskuick-blue px-3 py-1 border border-taskuick-blue/30 rounded-full mb-3">CONTACT US</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-glow-blue mb-6">Let's Build Something Great Together</h2>
              <p className="text-taskuick-gray text-lg md:text-xl mb-8">
                Have a project in mind or need a custom solution? We're here to help! Reach out to us and let's discuss how we can bring your ideas to life.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-xl p-8 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-taskuick-blue/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-taskuick-blue/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-taskuick-blue/50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white mb-2">Company (Optional)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-taskuick-blue/50"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-white mb-2">Service You're Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-taskuick-blue/50"
                    >
                      <option value="web-development" className="bg-taskuick-black">Web Development</option>
                      <option value="app-development" className="bg-taskuick-black">App Development</option>
                      <option value="ai-solutions" className="bg-taskuick-black">AI Solutions</option>
                      <option value="automation" className="bg-taskuick-black">Automation</option>
                      <option value="other" className="bg-taskuick-black">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-taskuick-blue/50"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    glowEffect
                    className="flex items-center justify-center"
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'idle' && (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                    {formState === 'submitting' && (
                      <>
                        Sending...
                        <div className="ml-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </>
                    )}
                    {formState === 'success' && (
                      <>
                        Message Sent!
                        <CheckCircle className="ml-2 h-5 w-5" />
                      </>
                    )}
                    {formState === 'error' && (
                      <>
                        Try Again
                        <AlertCircle className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  <p className="text-taskuick-gray mb-8">
                    We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                  </p>
                </div>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      target={item.title === 'Address' ? '_blank' : undefined}
                      rel={item.title === 'Address' ? 'noopener noreferrer' : undefined}
                      className="flex items-start p-4 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:transform hover:translate-y-[-2px]"
                    >
                      <div className="flex-shrink-0 p-2 rounded-lg bg-white/5">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-taskuick-gray">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Social Media Links */}
                <div>
                  <h4 className="text-white font-medium mb-4">Follow Us</h4>
                  <div className="flex space-x-3">
                    {[
                      { name: 'Twitter', icon: '/path/to/twitter.svg', href: 'https://twitter.com' },
                      { name: 'LinkedIn', icon: '/path/to/linkedin.svg', href: 'https://linkedin.com' },
                      { name: 'GitHub', icon: '/path/to/github.svg', href: 'https://github.com' },
                      { name: 'Instagram', icon: '/path/to/instagram.svg', href: 'https://instagram.com' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-110"
                        aria-label={`Follow us on ${social.name}`}
                      >
                        {/* Replace with actual icons once available */}
                        <span className="text-white">{social.name.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-white mb-6">Our Location</h3>
              <p className="text-taskuick-gray">
                Visit our office or send us mail at this address.
              </p>
            </div>
            
            <div className="relative h-96 w-full rounded-xl overflow-hidden border border-white/10">
              {/* Placeholder for Google Maps or other map service */}
              <div className="absolute inset-0 bg-taskuick-blue/10 flex items-center justify-center">
                <p className="text-white text-lg">Interactive Map Will Be Displayed Here</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-12 overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-taskuick-purple opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-taskuick-blue opacity-20 rounded-full blur-3xl"></div>
              
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(138,43,226,0.3)]"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-purple">Ready to Start Your Project?</h2>
                <p className="text-taskuick-gray text-lg max-w-2xl mx-auto mb-8">
                  Schedule a free consultation with our experts and let's discuss how we can help you achieve your goals with our cutting-edge solutions.
                </p>
                
                <Button 
                  as="a" 
                  href="#" 
                  variant="secondary" 
                  size="lg" 
                  glowEffect
                >
                  Schedule a Consultation
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

export default Contact;
