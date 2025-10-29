import React from 'react';
import { BookOpen, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-white">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 ring-1 ring-white/25 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-amber-300"></span>
          <span className="text-xs tracking-wide uppercase text-white/80">Bhagavad Gita · Personal Guidance</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
        >
          Seek Clarity from Krishna
          <span className="block bg-gradient-to-r from-amber-200 via-pink-200 to-indigo-200 bg-clip-text text-transparent">for your everyday life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl text-lg text-white/80"
        >
          Ask heartfelt questions and receive practical wisdom rooted in the Gita. Build habits with gamified daily challenges and watch your avatar evolve like Arjuna guided by Krishna.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a
            id="ask"
            href="#ask"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400/90 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-amber-500/25 ring-1 ring-amber-300 hover:bg-amber-300 transition"
          >
            <MessageCircle className="h-5 w-5" /> Ask Krishna
          </a>
          <a
            id="gita"
            href="#gita"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20 transition"
          >
            <BookOpen className="h-5 w-5" /> Read the Gita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
