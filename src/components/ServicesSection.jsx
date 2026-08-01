import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

const ServicesSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-[#0a0a0a]">
      <div className="text-center mb-24 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore our comprehensive range of quality engineering, cybersecurity, and next-gen testing services.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {Object.entries(servicesData).map(([category, items], idx) => (
          <div key={idx} className="flex flex-col">
            {/* Category Header */}
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-3xl font-bold text-white tracking-tight shrink-0">{category}</h3>
              <div className="h-[1px] bg-gray-800 flex-1"></div>
            </div>
            
            {/* Image Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item, index) => {
                const number = (index + 1).toString().padStart(2, '0');
                return (
                  <Link 
                    key={index} 
                    to={item.path}
                    className="group relative overflow-hidden rounded-2xl h-[320px] cursor-pointer bg-gray-900 border border-gray-800 hover:border-gray-500 transition-colors duration-300 block"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-80"
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                    
                    {/* Overlay Gradient - Ensures text is always readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/30 opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* Top Right Watermark Number */}
                    <div className="absolute top-4 right-6 text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors duration-300 pointer-events-none">
                      {number}
                    </div>

                    {/* Content Container - Always visible to match standard Framer cards */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                      <div className="flex flex-col gap-3">
                        <h4 className="text-xl font-bold text-white tracking-wide group-hover:text-red-500 transition-colors flex items-start gap-2 drop-shadow-md min-h-[56px] line-clamp-2">
                          <span className="text-red-500 text-sm font-bold mt-1 shrink-0">{number}.</span> 
                          <span>{item.title}</span>
                        </h4>
                        <p className="text-[15px] text-gray-200 leading-relaxed drop-shadow min-h-[70px] line-clamp-3">
                          {item.desc}
                        </p>
                        
                        <div className="flex items-center text-red-500 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300 gap-2 drop-shadow-md mt-1">
                          <span>Explore</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
