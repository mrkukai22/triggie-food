"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingSocial() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">

      {/* WHATSAPP */}
      <motion.a
        href="https://wa.me/6289675821258"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="/images/sosmed/whatsapp.png"
          width={40}
          height={40}
          alt="WhatsApp"
        />
      </motion.a>

      {/* INSTAGRAM */}
      <motion.a
        href="https://www.instagram.com/trigie_food/"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Image
          src="/images/sosmed/instagram.png"
          width={40}
          height={40}
          alt="Instagram"
        />
      </motion.a>

    </div>
  );
}