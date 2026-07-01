"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
    id="home"
    className="relative flex flex-col items-center justify-center min-h-screen px-6">

      <motion.img
        src="/logo.png"
        className="w-[360px] md:w-[460px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h2
        className="text-3xl italic text-gray-300 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Where Every Moment Matters
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 bg-orange-500 px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-orange-500/40"
      >
        Book Your Event
      </motion.button>

    </section>
  );
}
