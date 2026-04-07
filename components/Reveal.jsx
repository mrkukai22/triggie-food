"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      scale: 0.96,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1], // smooth cinematic easing
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}