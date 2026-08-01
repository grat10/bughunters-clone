import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import './index.css';

function App() {
  return (
    <div className="font-sans selection:bg-red-500/30">
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* Exact Service Routes matching bughunters.io structure */}
        <Route path="/qa-testing" element={<ServicePage />} />
        <Route path="/vapt" element={<ServicePage />} />
        <Route path="/cloud-backup-solutions" element={<ServicePage />} />
        
        {/* Dynamic Category Routes matching bughunters.io structure */}
        <Route path="/testing/:slug" element={<ServicePage />} />
        <Route path="/test-automation/:slug" element={<ServicePage />} />
        <Route path="/cyber-security/:slug" element={<ServicePage />} />
        <Route path="/ai-ml-testing/:slug" element={<ServicePage />} />
        <Route path="/compliance/:slug" element={<ServicePage />} />
        
        {/* Fallback for the generic slugs we generated earlier, just in case */}
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;
