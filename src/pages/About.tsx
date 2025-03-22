
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Target, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400',
      description: 'Tech visionary with 15+ years of experience in software development and digital innovation.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400',
      description: 'Award-winning software architect specializing in AI and cloud technologies.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400',
      description: 'Full-stack developer with expertise in React, Node.js, and cloud infrastructure.'
    },
    {
      name: 'Emily Kim',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1551292831-023188e78222?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400',
      description: 'Creative designer focused on crafting beautiful and intuitive user experiences.'
    },
    {
      name: 'David Carter',
      role: 'AI Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400',
      description: 'PhD in Machine Learning with experience developing cutting-edge AI solutions.'
    },
    {
      name: 'Olivia Thompson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400',
      description: 'Certified project manager with a track record of delivering complex projects on time and budget.'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Taskuick was established with a mission to deliver high-quality development services with speed and precision.'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful e-commerce platform that exceeded expectations.'
    },
    {
      year: '2020',
      title: 'Expanded Services',
      description: 'Added AI and automation solutions to our service offerings, growing our team to 15 talented professionals.'
    },
    {
      year: '2021',
      title: 'Innovation Award',
      description: 'Recognized with the Regional Tech Innovation Award for our work on an AI-powered customer service platform.'
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Opened our first international office and began serving clients across Europe and Asia.'
    },
    {
      year: '2023',
      title: 'Strategic Partnerships',
      description: 'Formed strategic partnerships with leading technology providers to enhance our service capabilities.'
    }
  ];

  const values = [
    {
      icon: <Target className="h-10 w-10 text-taskuick-blue" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client communication.'
    },
    {
      icon: <Award className="h-10 w-10 text-taskuick-purple" />,
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Calendar className="h-10 w-10 text-taskuick-green" />,
      title: 'Efficiency',
      description: 'We value time and resources, delivering high-quality results without unnecessary delays.'
    }
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
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0, 123, 255, 0.4) 0%, rgba(0, 123, 255, 0) 50%), radial-gradient(circle at 75% 75%, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0) 50%)',
            }}
          ></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="inline-block text-sm font-semibold text-taskuick-blue px-3 py-1 border border-taskuick-blue/30 rounded-full mb-3">ABOUT US</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-white text-glow-blue mb-6">Who We Are & What Drives Us</h2>
              <p className="text-taskuick-gray text-lg md:text-xl mb-8">
                Taskuick is a team of passionate technologists dedicated to helping businesses thrive in the digital era 
                through innovative web applications, mobile apps, AI solutions, and automation tools.
              </p>
              
              <Button 
                as="a" 
                href="#team" 
                variant="primary" 
                size="lg"
              >
                Meet the Team
              </Button>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 md:py-24 px-6 relative">
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="inline-block text-sm font-semibold text-taskuick-purple px-3 py-1 border border-taskuick-purple/30 rounded-full mb-3">OUR STORY</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Journey to Excellence</h3>
              <p className="text-taskuick-gray text-lg">
                Since our founding, we've been on a mission to deliver exceptional technology solutions that help our clients achieve their goals.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-taskuick-blue via-taskuick-purple to-taskuick-green transform md:translate-x-[-0.5px]"></div>
              
              {/* Timeline items */}
              <div className="space-y-12 md:space-y-0">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 flex md:pl-8 md:pr-12 z-10">
                      <div className={`w-full ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                          <div className="mb-2 text-taskuick-blue font-bold">{milestone.year}</div>
                          <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                          <p className="text-taskuick-gray">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-taskuick-blue to-taskuick-purple border-2 border-black transform -translate-x-1.5 md:-translate-x-2 z-20"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="inline-block text-sm font-semibold text-taskuick-green px-3 py-1 border border-taskuick-green/30 rounded-full mb-3">CORE VALUES</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">What Guides Our Work</h3>
              <p className="text-taskuick-gray text-lg">
                These principles define our approach and shape every project we undertake.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-black/60 to-black/20 border border-white/10">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-taskuick-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="inline-block text-sm font-semibold text-taskuick-blue px-3 py-1 border border-taskuick-blue/30 rounded-full mb-3">OUR TEAM</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet the Experts</h3>
              <p className="text-taskuick-gray text-lg">
                Our talented team brings together diverse skills and expertise to deliver exceptional results for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <p className="text-taskuick-gray">{member.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                    <p className="text-taskuick-blue">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="container mx-auto">
            <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-12 overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-taskuick-blue opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-taskuick-purple opacity-20 rounded-full blur-3xl"></div>
              
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(0,123,255,0.3)]"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow-blue">Let's Innovate Together</h2>
                <p className="text-taskuick-gray text-lg max-w-2xl mx-auto mb-8">
                  Ready to bring your ideas to life? Our team is eager to collaborate with you on your next project.
                </p>
                
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  size="lg" 
                  glowEffect
                  className="mx-auto group flex items-center"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
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

export default About;
