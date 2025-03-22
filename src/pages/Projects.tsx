
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type ProjectCategory = 'all' | 'web' | 'app' | 'ai' | 'automation';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory[];
  client: string;
  tags: string[];
  color: 'blue' | 'purple' | 'green';
}

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform with product management, order processing, and payment integration.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      category: ['web', 'automation'],
      client: 'RetailTech Inc.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      description: 'A patient-focused healthcare application for appointment booking, medical records, and telemedicine.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      category: ['app'],
      client: 'MediCare Solutions',
      tags: ['React Native', 'Firebase', 'Telehealth API'],
      color: 'purple'
    },
    {
      id: 3,
      title: 'AI Customer Service Agent',
      description: 'An intelligent chatbot system that handles customer inquiries, processes refunds, and escalates complex issues.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      category: ['ai', 'automation'],
      client: 'Global Support Services',
      tags: ['NLP', 'Machine Learning', 'Python', 'Node.js'],
      color: 'green'
    },
    {
      id: 4,
      title: 'Inventory Management System',
      description: 'An automated inventory system with real-time tracking, predictive ordering, and supplier integration.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      category: ['web', 'automation'],
      client: 'LogiTech Enterprises',
      tags: ['React', 'GraphQL', 'PostgreSQL', 'Docker'],
      color: 'blue'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      description: 'A comprehensive fitness application with workout planning, progress tracking, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      category: ['app', 'ai'],
      client: 'FitLife International',
      tags: ['Flutter', 'Firebase', 'TensorFlow', 'Cloud Functions'],
      color: 'purple'
    },
    {
      id: 6,
      title: 'Real Estate Management Platform',
      description: 'A property management system with lease tracking, maintenance requests, and financial reporting.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      category: ['web', 'automation'],
      client: 'Prime Properties',
      tags: ['Vue.js', 'Express', 'MySQL', 'AWS'],
      color: 'green'
    },
    {
      id: 7,
      title: 'Smart Home Control System',
      description: 'An IoT-based home automation system with voice control, energy monitoring, and security features.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      category: ['app', 'ai', 'automation'],
      client: 'SmartLiving Technologies',
      tags: ['IoT', 'React Native', 'AWS IoT', 'Node.js'],
      color: 'blue'
    },
    {
      id: 8,
      title: 'Content Management System',
      description: 'A custom CMS for a media company with advanced content scheduling, analytics, and multi-platform publishing.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      category: ['web'],
      client: 'Media Nexus',
      tags: ['Next.js', 'Strapi', 'GraphQL', 'MySQL'],
      color: 'purple'
    }
  ];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category.includes(filter)));
    }
  }, [filter]);

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
              backgroundImage: 'radial-gradient(circle at 25% 75%, rgba(0, 255, 127, 0.3) 0%, rgba(0, 255, 127, 0) 50%), radial-gradient(circle at 75% 25%, rgba(138, 43, 226, 0.3) 0%, rgba(138, 43, 226, 0) 50%)',
            }}
          ></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="inline-block text-sm font-semibold text-taskuick-green px-3 py-1 border border-taskuick-green/30 rounded-full mb-3">OUR WORK</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-glow-green mb-6">Proven Success. Real Results.</h2>
              <p className="text-taskuick-gray text-lg md:text-xl mb-8">
                Browse our portfolio of successful projects that showcase our expertise in web development,
                app development, AI solutions, and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  as={Link} 
                  to="#projects-list" 
                  variant="accent" 
                  size="lg"
                >
                  Browse Projects
                </Button>
                
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="outline" 
                  size="lg"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects-list" className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { value: 'all', label: 'All Projects' },
                { value: 'web', label: 'Web Development' },
                { value: 'app', label: 'App Development' },
                { value: 'ai', label: 'AI Solutions' },
                { value: 'automation', label: 'Automation' }
              ].map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value as ProjectCategory)}
                  className={cn(
                    'px-5 py-2 rounded-full transition-all duration-300',
                    filter === category.value 
                      ? 'bg-taskuick-blue text-white shadow-[0_0_10px_rgba(0,123,255,0.5)]' 
                      : 'bg-white/5 text-taskuick-gray hover:bg-white/10 hover:text-white'
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-60 transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6">
                        <p className="text-taskuick-gray mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full text-taskuick-gray">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center text-taskuick-blue font-medium">
                          View Details <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-glow-blue">{project.title}</h3>
                    <p className="text-taskuick-gray text-sm">Client: {project.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Case Study */}
        <section className="py-16 md:py-24 px-6 relative bg-gradient-to-t from-black to-transparent">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="inline-block text-sm font-semibold text-taskuick-purple px-3 py-1 border border-taskuick-purple/30 rounded-full mb-3">FEATURED CASE STUDY</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">AI-Powered Customer Service Platform</h3>
                <p className="text-taskuick-gray text-lg mb-6 leading-relaxed">
                  We developed an advanced AI-powered customer service platform for a global enterprise, 
                  reducing response times by 70% and increasing customer satisfaction scores by 35%.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="inline-flex mr-2 mt-1 text-taskuick-purple">•</span>
                    <span className="text-taskuick-gray">Natural language processing for intent recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex mr-2 mt-1 text-taskuick-purple">•</span>
                    <span className="text-taskuick-gray">Integration with existing CRM and support systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex mr-2 mt-1 text-taskuick-purple">•</span>
                    <span className="text-taskuick-gray">Real-time analytics and performance dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex mr-2 mt-1 text-taskuick-purple">•</span>
                    <span className="text-taskuick-gray">Continuous learning model for improving response accuracy</span>
                  </li>
                </ul>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="flex items-center"
                >
                  Read Full Case Study
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-taskuick-purple/20 to-transparent rounded-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="AI Customer Service Platform" 
                  className="rounded-xl w-full shadow-xl relative z-10"
                />
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-green">Your Project Could Be Next</h2>
                <p className="text-taskuick-gray text-lg max-w-2xl mx-auto mb-8">
                  Ready to bring your ideas to life? Let's collaborate to create something amazing that drives real results for your business.
                </p>
                
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="accent" 
                  size="lg" 
                  glowEffect
                  className="mx-auto"
                >
                  Start Now
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

export default Projects;
