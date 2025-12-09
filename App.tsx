import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define Window interface for Facebook Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Optional: Track ViewContent when app mounts
    if (window.fbq) {
      window.fbq('track', 'ViewContent');
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Hero />
      <About />
      <Schedule />
      <Features />
      <Pricing />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;