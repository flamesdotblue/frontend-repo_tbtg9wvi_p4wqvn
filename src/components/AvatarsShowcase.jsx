import React from 'react';

const AvatarCard = ({ name, description, progress, image }) => {
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-white/25 bg-white/10 backdrop-blur">
      <div className="relative h-48 w-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-white font-semibold drop-shadow">{name}</h4>
          <p className="text-white/85 text-xs drop-shadow">{description}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between text-xs text-white/70">
          <span>Evolution</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20">
          <div className="h-full bg-gradient-to-r from-amber-300 via-pink-300 to-indigo-300" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

const AvatarsShowcase = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Evolving 3D Avatars</h3>
          <p className="mt-2 max-w-2xl text-white/80">Progress through daily practice and watch your Arjuna and Krishna avatars blossom with grace and valor.</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <AvatarCard
          name="Krishna"
          description="Guiding presence—compassion, wisdom, and divine charm."
          progress={72}
          image="https://images.unsplash.com/photo-1620651409361-1e9cfa493545?auto=format&fit=crop&w=1200&q=80"
        />
        <AvatarCard
          name="Arjuna"
          description="Steadfast seeker—courage, discipline, and clarity in action."
          progress={49}
          image="https://images.unsplash.com/photo-1615814208518-4fc2b3dbb3b3?auto=format&fit=crop&w=1200&q=80"
        />
      </div>
    </section>
  );
};

export default AvatarsShowcase;
