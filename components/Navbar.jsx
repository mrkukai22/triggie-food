"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo/logo-triggie.png"
            width={48}
            height={48}
            alt="logo"
          />

          <span
            className={`font-semibold text-base md:text-lg transition duration-300 ${
              scrolled ? "!text-black" : "!text-white"
            }`}
          >
            Triggie Food
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-base md:text-lg font-medium">

          {[
            { name: "Home", link: "#home" },
            { name: "About Us", link: "#about" },
            { name: "Menu", link: "#menu" },
            // { name: "Contact", link: "#contact" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={`relative transition duration-300 ${
                scrolled ? "!text-black" : "!text-white"
              } hover:opacity-70`}
            >
              {item.name}
            </a>
          ))}

          {/* ORDER BUTTON */}
          <a
            href="https://wa.me/6289675821258"
            className="bg-primary text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Order
          </a>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white text-black px-6 py-6 flex flex-col gap-4"
          >
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <a
              href="https://wa.me/6289675821258"
              className="bg-primary text-black px-6 py-3 rounded-full text-center font-semibold mt-2"
            >
              Order Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}