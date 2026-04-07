"use client";

import Reveal from "./Reveal";
import Stagger from "./Stagger";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* BACKGROUND (STATIC) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/background/bg-dimsum.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        <Stagger>

          {/* TITLE */}
          <Reveal direction="up">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">Triggie Food</h1>
          </Reveal>

          {/* SUBTITLE */}
          <Reveal direction="up" delay={0.2}>
            <p className="opacity-88 mt-6 text-white/90 text-xl md:text-2xl font-light">
              Lumer, creamy, dan bikin nagih.  
              Sekali coba, langsung repeat order.
            </p>
          </Reveal>



        </Stagger>

      </div>

      {/* GRADIENT BAWAH */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}