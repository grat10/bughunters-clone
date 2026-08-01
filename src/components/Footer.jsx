import React from 'react';
import { MessageCircle, Briefcase, Code2, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold text-xl text-white">Skillvix</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Empowering businesses with AI-driven quality assurance and intelligent security solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Briefcase size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Code2 size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Software Testing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@skillvix.demo" className="hover:text-white transition-colors">hello@skillvix.demo</a>
              </li>
              <li>123 Tech Hub, Innovation District</li>
              <li>San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Skillvix Clone. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
