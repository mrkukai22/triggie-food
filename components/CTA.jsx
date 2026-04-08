"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="order" className="py-24 text-center px-6 bg-base">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Laper? Jangan Ditahan!
      </h2>

      <p className="mt-4 max-w-xl mx-auto font-subtitle text-lg md:text-xl opacity-70 leading-relaxed">
        Klik sekarang dan rasain sendiri kenapa banyak yang ketagihan.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">

        {/* WHATSAPP */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/6289675821258?text=Halo%20saya%20mau%20order"
          className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg"
        >
          <Image
            src="/images/CTA/whatsapp.png"
            width={20}
            height={20}
            alt="WhatsApp"
          />
          Pesan di WhatsApp
        </motion.a>

        {/* GOFOOD / GOJEK */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://gofood.link/u/PjByx"
          className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg"
        >
          <Image
            src="/images/CTA/gojek.png"
            width={20}
            height={20}
            alt="GoFood"
          />
          Pesan di GoFood
        </motion.a>

      </div>

    </section>
  );
}