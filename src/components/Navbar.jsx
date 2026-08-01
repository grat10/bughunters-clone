import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/services';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Quality Engineering');
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'SERVICES', href: isHome ? '#services' : '/#services', hasDropdown: true },
    { name: 'COMPLIANCE', href: isHome ? '#compliance' : '/#compliance', hasDropdown: true },
    { name: 'SOLUTIONS', href: isHome ? '#solutions' : '/#solutions', hasDropdown: true },
    { name: 'COMPANY', href: isHome ? '#company' : '/#company', hasDropdown: true },
    { name: 'CERT-In Empanelment', href: isHome ? '#cert-in' : '/#cert-in', hasDropdown: false },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-xl group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-300">
              BH
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative h-20 flex items-center"
                onMouseEnter={() => link.name === 'SERVICES' && setIsServicesHovered(true)}
                onMouseLeave={() => link.name === 'SERVICES' && setIsServicesHovered(false)}
              >
                {/* Use normal a tags for hash links to work smoothly or fallback to /# if not home */}
                <a
                  href={link.href}
                  className="text-sm font-semibold text-gray-200 hover:text-white transition-colors duration-300 flex items-center gap-1 uppercase tracking-wide group"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                  )}
                </a>

                {/* Mega Menu Dropdown */}
                {link.name === 'SERVICES' && isServicesHovered && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] bg-[#111] rounded-b-3xl rounded-tl-3xl shadow-2xl overflow-hidden border border-gray-800 animate-in fade-in slide-in-from-top-4 duration-200 flex">
                    
                    {/* Sidebar */}
                    <div className="w-[300px] bg-[#0a0a0a] p-4 flex flex-col gap-2 border-r border-gray-800">
                      {Object.keys(servicesData).map((tab) => (
                        <button
                          key={tab}
                          onMouseEnter={() => setActiveTab(tab)}
                          className={`flex items-center justify-between w-full px-6 py-4 rounded-xl text-left font-semibold transition-all duration-200 ${
                            activeTab === tab 
                              ? 'bg-[#1a1a1a] text-red-500 shadow-md' 
                              : 'text-gray-400 hover:bg-[#1a1a1a]/50 hover:text-gray-200'
                          }`}
                        >
                          {tab}
                          {activeTab === tab ? (
                            <ChevronRight size={18} className="text-red-800" />
                          ) : (
                            <ChevronDown size={18} className="text-gray-500 -rotate-90" />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-10 bg-[#111] grid grid-cols-3 gap-x-8 gap-y-10 content-start">
                      {servicesData[activeTab].map((item, idx) => {
                        const number = (idx + 1).toString().padStart(2, '0');
                        return (
                          <Link 
                            to={item.path}
                            key={idx} 
                            className="flex flex-col gap-2 group cursor-pointer"
                            onClick={() => setIsServicesHovered(false)}
                          >
                            <h4 className="text-[15px] font-semibold text-gray-200 group-hover:text-red-500 transition-colors flex items-center gap-2">
                              <span className="text-red-500 font-bold opacity-70">{number}.</span> {item.title}
                            </h4>
                            <p className="text-[13px] leading-relaxed text-gray-500">
                              {item.desc}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 group">
              Contact Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a1a1a] border-b border-gray-800 overflow-y-auto max-h-[80vh]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-semibold border-b border-gray-800/50"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full text-center mt-6 bg-white text-black px-6 py-3 rounded-full font-bold">
              Contact Us →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
