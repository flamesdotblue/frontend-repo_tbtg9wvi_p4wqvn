import React from 'react';

const BackgroundKrishna = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1600628421055-9f39d51ed245?auto=format&fit=crop&w=2400&q=80"
        alt="Lord Krishna art background"
        className="h-full w-full object-cover object-center"
      />

      {/* Soft radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-fuchsia-900/30 to-amber-900/40 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(99,102,241,0.35),transparent_45%),radial-gradient(circle_at_70%_10%,rgba(236,72,153,0.3),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(251,191,36,0.25),transparent_45%)]" />
      {/* Subtle noise for texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.6\\'/></svg>')" }} />
    </div>
  );
};

export default BackgroundKrishna;
