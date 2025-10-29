import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/30 backdrop-blur">
            <Sparkles className="h-5 w-5 text-amber-300" />
          </div>
          <div className="text-white/90">
            <p className="font-semibold tracking-wide">GitaGuide</p>
            <p className="text-xs text-white/70">Wisdom of Krishna</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#ask" className="text-sm text-white/80 hover:text-white transition">Ask Krishna</a>
          <a href="#gita" className="text-sm text-white/80 hover:text-white transition">Read Gita</a>
          <a href="#challenges" className="text-sm text-white/80 hover:text-white transition">Daily Challenges</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
