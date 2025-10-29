import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AvatarsShowcase from './components/AvatarsShowcase';
import BackgroundKrishna from './components/BackgroundKrishna';

function App() {
  return (
    <div className="relative min-h-screen font-['Inter',_'Manrope',_'Geist',system-ui,sans-serif]">
      {/* Background */}
      <BackgroundKrishna />

      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <AvatarsShowcase />
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-slate-950/60 to-transparent" />
    </div>
  );
}

export default App;
