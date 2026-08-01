import React from 'react';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      
      {/* Demo Home Section */}
      <section id="home" className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide">
          ✨ Welcome to Bug Hunters Clone
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
          Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Standards</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Scroll down to experience our highly professional Services section, cloned specifically to match premium industry designs.
        </p>
      </section>

      {/* Demo About Section */}
      <section id="about" className="py-20 bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">About Us</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            This is a placeholder for the About section. Our primary focus is delivering the finest Services page experience below, complete with advanced hover effects and modern UI patterns.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Demo Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to start?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            This Contact section is a placeholder. Get in touch with us to experience our premium services firsthand.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
