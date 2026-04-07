"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center px-6 bg-base">
      
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Social Media
        </h2>

        {/* <p className="opacity-70 mb-12">
          Hubungi kami sekarang dan rasakan dimsum mentai viral.
        </p> */}

        {/* LOGO ONLY */}
        <div className="flex justify-center gap-10 items-center">

          {/* WHATSAPP */}
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://wa.me/6289675821258"
          >
            <Image
              src="/images/sosmed/whatsapp.png"
              width={60}
              height={60}
              alt="WhatsApp"
            />
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="https://www.instagram.com/triggie_food/"
          >
            <Image
              src="/images/sosmed/instagram.png"
              width={60}
              height={60}
              alt="Instagram"
            />
          </motion.a>

        </div>

      </div>

    </section>
  );
}