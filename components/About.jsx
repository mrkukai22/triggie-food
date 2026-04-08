"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function About() {
  const images = [
    "/images/gallery/galeri1.jpg",
    "/images/gallery/galeri2.jpg",
    "/images/gallery/galeri3.jpg",
  ];

  const [[index, direction], setIndex] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const paginate = (newDirection) => {
    setIndex(([prev]) => [
      (prev + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  const swipeConfidenceThreshold = 100;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="about" className="py-32 bg-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* SLIDER */}
        <Reveal direction="left">
          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <Image
                  src={images[index]}
                  fill
                  className="object-cover"
                  alt=""
                />
              </motion.div>
            </AnimatePresence>

            {/* DOT */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    i === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

          </div>
        </Reveal>

        {/* TEXT */}
        <Reveal direction="right" delay={0.2}>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Tentang Trigie Food
            </h2>

            <p className="opacity-70 mb-6 font-subtitle text-xl leading-relaxed">
              Trigie Food hadir dengan konsep street food modern dengan rasa premium.
              Dimsum mentai kami dibuat fresh setiap hari dengan topping melimpah dan rasa yang bikin nagih.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}