"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-black to-[#120600]" />

      {/* Orange Glow */}
      <div className="absolute left-1/2 top-[35%] h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500 opacity-20 blur-[120px]" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-orange-500/20 z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <img
            src="/logo.png"
            className="w-14"
          />

          <div className="hidden md:flex gap-10">

            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

          </div>

          <button className="bg-orange-500 px-6 py-3 rounded-full shadow-lg shadow-orange-500/40 hover:scale-105 transition">
            Book Now
          </button>

        </div>

      </nav>

      {/* Hero */}

      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">

        <motion.img
          src="/logo.png"
          className="w-[360px] md:w-[460px]"
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h2
          className="text-3xl italic text-gray-300 mt-8"
          initial={{ opacity:0,y:30 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.5 }}
        >
          Where Every Moment Matters
        </motion.h2>

        <motion.button
          whileHover={{ scale:1.08 }}
          whileTap={{ scale:.95 }}
          className="mt-12 bg-orange-500 px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-orange-500/40"
        >
          Book Your Event
        </motion.button>

      </section>

    </main>
  );
}



