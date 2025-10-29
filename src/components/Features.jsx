import React from 'react';
import { Award, Heart, MessageSquare, BookOpen } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Ask Krishna',
    desc: 'Pose life questions and receive compassionate, practical guidance aligned with the Gita.',
    accent: 'from-indigo-300/30 to-fuchsia-300/30',
  },
  {
    icon: Award,
    title: 'Daily Challenges',
    desc: 'Build steady habits with gamified tasks rooted in dharma, bhakti, and mindfulness.',
    accent: 'from-amber-300/30 to-rose-300/30',
  },
  {
    icon: BookOpen,
    title: 'Read the Gita',
    desc: 'Explore verses, meanings, and context with a serene reading mode and gentle commentary.',
    accent: 'from-emerald-300/30 to-cyan-300/30',
  },
  {
    icon: Heart,
    title: 'Evolving Avatar',
    desc: 'Grow alongside Arjuna and Krishna—your avatar flourishes as your practice deepens.',
    accent: 'from-violet-300/30 to-pink-300/30',
  },
];

const Features = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16" id="challenges">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl bg-white/10 p-5 ring-1 ring-white/25 backdrop-blur hover:bg-white/15 transition"
          >
            <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${f.accent} p-3 ring-1 ring-white/30`}>
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
