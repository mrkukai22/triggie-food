"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#6b6f4e] text-white py-12 px-6">

    {/* DESKTOP */}
    <div className="hidden md:grid w-full grid-cols-4 items-center px-10">

      {/* COL 1 — LOGO */}
      <div>
        <Image
          src="/images/logo/logo-triggie.png"
          width={150}
          height={150}
          alt="logo"
        />
      </div>

      {/* COL 2 — JADWAL + INFO */}
      <div className="opacity-88 mb-6 font-subtitle text-xl leading-relaxed">
        <p>Senin – Kamis: 05.00 – 19.00 </p>
        <p>Jumat – Minggu: 09.00 – 22.00</p>

        <p className="mt-3 text-xl">
          Jl. Raya Puri Pamulang No.4 <br />
          Tangerang Selatan 
        </p>

      </div>

      {/* COL 3 — SOCIAL */}
      <div className="flex flex-col items-center gap-3">
        {/* TITLE */}
        <h2 className="text-xl font-semibold tracking-wide opacity-90">
          Social Media
        </h2>

        {/* ICON (BERSAMPINGAN) */}
        <div className="flex items-center gap-4">
        <Image src="/images/sosmed/whatsapp.png" width={55} height={55} alt="" />
        <Image src="/images/sosmed/instagram.png" width={55} height={55} alt="" />
      </div>
      
      </div>

      {/* COL 4 — BUTTON */}
      <div className="flex justify-end">
        <a
          href="https://maps.app.goo.gl/qf4XPntQ2wW5XtVZ6"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold"
        >
          View on Google Map →
        </a>
      </div>

    </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col gap-6">

        {/* TOP ROW */}
        <div className="flex justify-between items-start">

          {/* LEFT: LOGO + SOCIAL (RAPAT) */}
          <div className="flex flex-col items-start gap-3">

            {/* LOGO BRAND (LEBIH BESAR) */}
            <Image
              src="/images/logo/logo-triggie.png"
              width={65}
              height={65}
              alt="logo"
            />

            {/* SOCIAL (TEPAT DI BAWAH LOGO) */}
            <div className="flex gap -2 mt-1">
              <Image
                src="/images/sosmed/whatsapp.png"
                width={44}
                height={44}
                alt="wa"
              />
              <Image
                src="/images/sosmed/instagram.png"
                width={44}
                height={44}
                alt="ig"
              />
            </div>

          </div>

          {/* RIGHT: INFO + BUTTON */}
          <div className="text-right text-sm leading-relaxed max-w-[65%]">

            <p>Open daily 7:00–23:00</p>
            <p>Breakfast 7:00–16:00</p>
            <p>Lunch & Dinner 12:00–22:00</p>

            <p className="mt-3">
              Jl. Raya Puri Pamulang No.4 <br />
              Tangerang Selatan
            </p>

            {/* BUTTON */}
            <a
              href="https://maps.app.goo.gl/qf4XPntQ2wW5XtVZ6"
              className="inline-block mt-4 bg-white text-black px-5 py-2 rounded-full font-semibold"
            >
              View on Google Map →
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}