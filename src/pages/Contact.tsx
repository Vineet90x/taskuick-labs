
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission (would be replaced with actual API call)
    setTimeout(() => {
      setFormSubmitted(true);
      setFormError(null);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    'Web Development',
    'App Development',
    'AI Agents',
    'Automation Solutions',
    'UI/UX Design',
    'Other'
  ];

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
              backgroundImage: 'radial-gradient(circle at 25% 75%, rgba(0, 255, 127, 0.3) 0%, rgba(0, 255, 127, 0) 50%), radial-gradient(circle at 75% 25%, rgba(138, 43, 226, 0.3) 0%, rgba(138, 43, 226, 0) 50%)',
            }}
          ></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="inline-block text-sm font-semibold text-taskuick-green px-3 py-1 border border-taskuick-green/30 rounded-full mb-3">CONTACT US</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-glow-green mb-6">Let's Build Something Great Together!</h2>
              <p className="text-taskuick-gray text-lg md:text-xl mb-8">
                Have a project in mind? Fill out the form below, and we'll get back to you within 24 hours.
              </p>
              
              <Button 
                as="a" 
                href="#contact-form" 
                variant="accent" 
                size="lg"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info Section */}
        <section id="contact-form" className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="relative bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-xl p-8 overflow-hidden">
                  {/* Glow effects */}
                  <div className="absolute -top-40 -left-40 w-80 h-80 bg-taskuick-green opacity-10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-taskuick-blue opacity-10 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                    
                    {formSubmitted ? (
                      <div className="bg-taskuick-green/20 border border-taskuick-green/30 rounded-lg p-6 text-center">
                        <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                        <p className="text-taskuick-gray">
                          Your message has been sent successfully. We'll get back to you shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {formError && (
                          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                            {formError}
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-taskuick-gray mb-2 text-sm">
                              Full Name <span className="text-taskuick-green">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-taskuick-green/50 focus:border-transparent transition-all duration-300"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-taskuick-gray mb-2 text-sm">
                              Email Address <span className="text-taskuick-green">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-taskuick-green/50 focus:border-transparent transition-all duration-300"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-taskuick-gray mb-2 text-sm">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-taskuick-green/50 focus:border-transparent transition-all duration-300"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="service" className="block text-taskuick-gray mb-2 text-sm">
                              Service Interested In
                            </label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-taskuick-green/50 focus:border-transparent transition-all duration-300"
                            >
                              <option value="">Select a service</option>
                              {services.map((service) => (
                                <option key={service} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-taskuick-gray mb-2 text-sm">
                            Your Message <span className="text-taskuick-green">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-taskuick-green/50 focus:border-transparent transition-all duration-300"
                            required
                          ></textarea>
                        </div>
                        
                        <Button 
                          type="submit" 
                          variant="accent" 
                          size="lg" 
                          fullWidth
                          className="flex items-center justify-center"
                        >
                          Send Message
                          <Send size={18} className="ml-2" />
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg mr-4 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10">
                      <MapPin className="h-6 w-6 text-taskuick-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
                      <p className="text-taskuick-gray">
                        123 Tech Avenue<br />
                        Innovation City, 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg mr-4 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10">
                      <Phone className="h-6 w-6 text-taskuick-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
                      <p className="text-taskuick-gray">+1 (555) 123-4567</p>
                      <p className="text-taskuick-gray">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg mr-4 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10">
                      <Mail className="h-6 w-6 text-taskuick-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
                      <p className="text-taskuick-gray">info@taskuick.com</p>
                      <p className="text-taskuick-gray">support@taskuick.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Map or Image Placeholder */}
                <div className="relative rounded-xl overflow-hidden h-64 border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-taskuick-gray">Interactive Map Placeholder</p>
                  </div>
                </div>
                
                {/* Live Chat Button */}
                <div className="fixed bottom-6 right-6 z-50">
                  <button className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110",
                    "bg-gradient-to-r from-taskuick-blue to-taskuick-purple shadow-[0_0_15px_rgba(0,123,255,0.5)]"
                  )}>
                    <MessageSquare className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="inline-block text-sm font-semibold text-taskuick-blue px-3 py-1 border border-taskuick-blue/30 rounded-full mb-3">FAQ</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              <p className="text-taskuick-gray text-lg">
                Find answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: 'What is the typical timeline for a web development project?',
                    answer: 'Project timelines vary depending on complexity, but a typical website takes 4-6 weeks, while more complex web applications may take 8-12 weeks. We provide detailed timelines during the initial consultation.'
                  },
                  {
                    question: 'Do you offer ongoing maintenance and support?',
                    answer: 'Yes, we offer various maintenance and support packages to ensure your application continues to run smoothly after launch. These can be tailored to your specific needs and budget.'
                  },
                  {
                    question: 'How do you handle project pricing?',
                    answer: 'We provide custom quotes based on project requirements. After an initial consultation, we\'ll provide a detailed proposal outlining all costs and deliverables. We offer both fixed-price and time-and-materials pricing models.'
                  },
                  {
                    question: 'What technologies do you specialize in?',
                    answer: 'We specialize in modern technologies like React, Angular, Vue.js, Node.js, Python, Flutter, React Native, AWS, Google Cloud, and various AI/ML frameworks. We select the best technology stack based on your specific project needs.'
                  },
                  {
                    question: 'Can you work with our existing development team?',
                    answer: 'Absolutely! We often collaborate with in-house teams, providing specialized expertise or additional resources as needed. We're flexible in our approach to ensure seamless integration with your existing workflows.'
                  }
                ].map((faq, index) => (
                  <details 
                    key={index}
                    className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-6">
                      <h4 className="text-lg font-semibold text-white pr-6">{faq.question}</h4>
                      <span className="flex-shrink-0 w-5 h-5 border-l-2 border-t-2 border-taskuick-blue transform rotate-45 group-open:rotate-225 transition-transform duration-300"></span>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
