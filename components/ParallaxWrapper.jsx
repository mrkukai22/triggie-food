"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxWrapper({ children }) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}