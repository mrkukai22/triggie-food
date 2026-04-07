"use client";
import { motion } from "framer-motion";

const menuData = [
  {
    category: "Signature Dimsum",
    items: [
      { name: "Dimsum Kukus", desc: "Isi 4 pcs", price: 12000 },
      { name: "Dimsum Goreng Mix", desc: "Isi 4 pcs", price: 13000 },
      { name: "Dimsum Frozen", desc: "Isi 25 / 50 pcs", price: "75K / 130K" },
      { name: "Dimsum Mentai", desc: "Isi 4 pcs", price: 20000 },
      { name: "Dimsum Mentai New Topping", desc: "Isi 4 pcs", price: 24000 },
      { name: "Dimsum Mentai Isi 6", desc: "Lebih puas", price: 26000 },
      { name: "Dimsum Mentai Isi 6 New Topping", desc: "Full topping", price: 30000 },
      { name: "Dimsum Mentai + Keju Slice", desc: "Isi 6 pcs", price: 30000 },
      { name: "Dimsum Keju Lumer", desc: "Isi 3 pcs", price: 14000 },
      { name: "Dimsum Kentang Mentai", desc: "Creamy & unik", price: 18000 },
      { name: "Kentang Mentai", desc: "Simple creamy", price: 15000 },
    ],
  },

  {
    category: "Baso Aci & Snack",
    items: [
      { name: "Baso Aci", desc: "Original", price: 15000 },
      { name: "Baso Aci Cida", desc: "Lebih mantap", price: 18000 },
      { name: "Baso Aci Komplit", desc: "Isi lengkap", price: 20000 },
      { name: "Mie Sakura", desc: "Simple & enak", price: 4000 },
      { name: "Indomie Goreng / Kuah", desc: "Favorit semua orang", price: 6000 },
      { name: "Nuget Goreng", desc: "Isi 4 pcs", price: 5000 },
      { name: "Otak Otak Goreng", desc: "Isi 4 pcs", price: 5000 },
      { name: "Sosis Besar", desc: "Snack cepat", price: 5000 },
    ],
  },

  {
    category: "Paket & Special",
    items: [
      { name: "Box Isi 16", desc: "Dimsum mentai box", price: 75000 },
      { name: "Paket Mukbang", desc: "Isi 40 pcs", price: 185000 },
      { name: "Hantaran Special", desc: "Isi 25 + tulisan", price: 160000 },
    ],
  },

  {
    category: "Minuman",
    items: [
      { name: "Tea Jus", desc: "Segar", price: 2000 },
      { name: "Es Teh Tarik", desc: "Manis creamy", price: 5000 },
      { name: "Es Good Day", desc: "Kopi susu dingin", price: 5000 },
      { name: "Kopi Hitam", desc: "Strong", price: 4000 },
    ],
  },

  {
    category: "Add On",
    items: [
      { name: "Chili Oil", price: 3000 },
      { name: "Extra Mentai", price: 3000 },
      { name: "Telur", price: 5000 },
      { name: "Indomie", price: 5000 },
      { name: "Tahu Lidah", price: 2000 },
      { name: "Wadah + Sendok", price: 1000 },
      { name: "Topping Beef", price: 1000 },
      { name: "Keju Slice", price: 1000 },
      { name: "Tulisan Custom", price: 4000 },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 max-w-6xl mx-auto">
      
      <h2 className="text-3xl font-semibold text-center mb-16">
        Our Menu
      </h2>

      {menuData.map((cat, i) => (
        <div key={i} className="mb-16">

          <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-2">
            {cat.category}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {cat.items.map((item, j) => (
              <motion.div
                key={j}
                whileHover={{ y: -4 }}
                className="bg-[#1f2937] text-white rounded-xl p-5"
              >
                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                {item.desc && (
                  <p className="text-sm text-gray-400 mt-1">
                    {item.desc}
                  </p>
                )}

                <p className="mt-3 gold font-semibold text-yellow-400">
                  Rp {item.price}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      ))}
    </section>
  );
}