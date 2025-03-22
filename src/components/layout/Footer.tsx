
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-0">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white text-glow-blue">Taskuick</h2>
            <p className="text-taskuick-gray max-w-xs">
              We deliver high-quality web and app development, AI agents, and automation solutions quickly and efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  Automation Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-taskuick-gray hover:text-taskuick-blue transition-colors duration-300">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-taskuick-blue mr-3 mt-0.5" />
                <span className="text-taskuick-gray">
                  123 Tech Avenue, Innovation City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-taskuick-blue mr-3" />
                <span className="text-taskuick-gray">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-taskuick-blue mr-3" />
                <span className="text-taskuick-gray">info@taskuick.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 px-6 md:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-between text-taskuick-gray text-sm">
            <p>&copy; {new Date().getFullYear()} Taskuick. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/privacy-policy" className="hover:text-taskuick-blue transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-taskuick-blue transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
