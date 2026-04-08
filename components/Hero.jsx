"use client";

import Reveal from "./Reveal";
import Stagger from "./Stagger";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full max-w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* BACKGROUND FULL */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/background/bg-dimsum.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 max-w-2xl mx-auto">

        <Stagger>

          {/* TITLE */}
          <Reveal direction="up">
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Trigie Food
            </h1>
          </Reveal>

          {/* SUBTITLE */}
          <Reveal direction="up" delay={0.2}>
            <p className="mt-4 text-white/90 text-base md:text-xl font-light">
              Lumer, creamy, dan bikin nagih.  
              Sekali coba, langsung repeat order.
            </p>
          </Reveal>

        </Stagger>

      </div>

      {/* GRADIENT */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}