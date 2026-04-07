"use client";
import ScrollReveal from "./ScrollReveal";

export default function Story() {
  return (
    <ScrollReveal>
      <section className="py-32 bg-white text-black text-center px-6">
        <h2 className="text-5xl font-light mb-6">
          Bukan Sekadar Dimsum
        </h2>

        <p className="max-w-xl mx-auto opacity-70">
          Ini pengalaman rasa yang bikin kamu balik lagi.
        </p>
      </section>
    </ScrollReveal>
  );
}