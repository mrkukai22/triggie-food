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

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* 🔥 FIX: FULL WIDTH (HAPUS max-w + mx-auto) */}
        <div className="w-full flex justify-between items-center px-6 md:px-16 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-triggie.png"
              width={40}
              height={40}
              alt="logo"
            />

            <span
              className={`font-semibold text-lg md:text-xl ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Trigie Food
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-12 font-medium">

            {[
              { name: "Home", link: "#home" },
              { name: "About Us", link: "#about" },
              { name: "Menu", link: "#menu" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className={`text-lg transition ${
                  scrolled ? "text-black" : "text-white"
                } hover:opacity-70`}
              >
                {item.name}
              </a>
            ))}

            {/* BUTTON */}
            <a
              href="https://wa.me/6289675821258"
              className="bg-primary text-black px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition"
            >
              Order
            </a>
          </div>

          {/* 🔥 HAMBURGER PREMIUM */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden fixed top-5 right-4 z-[99999] flex flex-col justify-center items-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md"
          >
            <span
              className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white my-1 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-[9998]"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="md:hidden fixed top-0 left-0 w-full bg-white text-black px-6 py-10 flex flex-col gap-6 z-[9999]"
            >
              <a href="#home" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#menu" onClick={() => setOpen(false)}>Menu</a>

              <a
                href="https://wa.me/6289675821258"
                className="bg-primary text-black px-6 py-3 rounded-full text-center font-semibold mt-4"
              >
                Order Sekarang
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}