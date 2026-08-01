import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Helper to generate a nice readable title from the pathname
const generateTitle = (pathname) => {
  if (pathname === '/qa-testing') return 'QA & Testing';
  if (pathname === '/vapt') return 'Penetration Testing (VAPT)';
  if (pathname === '/cloud-backup-solutions') return 'Cloud Backup Solutions';
  
  const parts = pathname.split('/').filter(Boolean);
  const lastSegment = parts[parts.length - 1];
  
  if (!lastSegment) return 'Service Not Found';
  
  return lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Generate dynamic content based on the title so every page looks unique
const generateDynamicContent = (title, path) => {
  // If it's the exact QA Testing page, use the reference copy
  if (path === '/qa-testing') {
    return {
      label: '/ QA & Testing /',
      headline: 'End-to-End Software Testing for Startups, Scaleups & Enterprises',
      description: 'At Bug Hunters, we help businesses launch confidently with tailored QA strategies—ensuring functionality, performance, security, and faster release cycles.',
      stats: [
        { value: '150+', label: 'Experienced Software Quality Engineers' },
        { value: '24/7', label: 'On-demand QA support across global time zones' },
        { value: '40%', label: 'Cost savings through AI-powered testing solutions' }
      ],
      features: [
        {
          title: 'AI-Powered Test Case Writing & Execution',
          desc: 'Our advanced AI-driven testing solutions generate optimized test cases that reduce manual effort and improve test coverage, ensuring faster releases with greater accuracy.'
        },
        {
          title: 'Self-Healing Test Automation',
          desc: 'Eliminate maintenance overhead with automation scripts that automatically adapt to UI changes, keeping your test pipelines green and robust.'
        },
        {
          title: 'End-to-End Test Coverage',
          desc: 'We provide comprehensive testing across web, mobile, and APIs to ensure every user journey functions flawlessly before it hits production.'
        },
        {
          title: 'Performance & Load Testing',
          desc: 'Identify bottlenecks and ensure your application scales gracefully under extreme traffic spikes and heavy user loads.'
        }
      ]
    };
  }

  // Dynamic generic content for all other pages
  return {
    label: `/ ${title} /`,
    headline: `Advanced ${title} Solutions for Modern Enterprises`,
    description: `Accelerate your digital transformation with our industry-leading ${title.toLowerCase()} services. We deliver robust, scalable, and secure implementations tailored to your business goals.`,
    stats: [
      { value: '99%', label: 'Client Satisfaction Rate' },
      { value: '10x', label: 'Faster Time to Market' },
      { value: '24/7', label: 'Continuous Monitoring & Support' }
    ],
    features: [
      {
        title: `Comprehensive ${title} Strategy`,
        desc: `We build a customized blueprint for your ${title.toLowerCase()} needs, ensuring alignment with your strategic business objectives and technical requirements.`
      },
      {
        title: 'Seamless Integration',
        desc: 'Our solutions are designed to plug directly into your existing infrastructure, minimizing downtime and maximizing immediate ROI.'
      },
      {
        title: 'Enterprise-Grade Security',
        desc: 'Security is at the core of everything we do. We ensure strict compliance with global data protection standards.'
      },
      {
        title: 'Scalable Architecture',
        desc: 'Future-proof your business with solutions that grow seamlessly as your user base and data requirements expand.'
      }
    ]
  };
};

const ServicePage = () => {
  const location = useLocation();
  const path = location.pathname;

  // Scroll to top when navigating to a new service page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const title = generateTitle(path);
  const content = generateDynamicContent(title, path);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col text-gray-200">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-32 pb-24">
        {/* Service Hero */}
        <section className="relative px-4 md:px-8 max-w-[1200px] mx-auto w-full mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent rounded-3xl -z-10 pointer-events-none"></div>
          
          <div className="max-w-4xl space-y-6">
            <div className="inline-block border border-gray-700/50 rounded-full px-4 py-1.5 text-sm font-medium tracking-widest uppercase text-gray-400 bg-gray-900/50">
              {content.label}
            </div>
            
            <h1 className="text-5xl md:text-[80px] leading-[1.1] font-bold tracking-tight text-white">
              {content.headline}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl pt-4">
              {content.description}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 md:px-8 max-w-[1200px] mx-auto w-full mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#111] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between h-[200px] hover:border-gray-700 transition-colors">
                <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-gray-400 font-medium text-lg leading-snug max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 md:px-8 max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col gap-6">
            {content.features.map((feature, idx) => {
              const number = (idx + 1).toString().padStart(2, '0');
              return (
                <div 
                  key={idx} 
                  className="group bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start hover:bg-[#151515] hover:border-gray-700 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-700 group-hover:text-red-600 transition-colors shrink-0">
                    {number}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
