"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b] via-black to-[#120600]" />

      {/* Orange Glow */}
      <div className="absolute left-1/2 top-[35%] h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500 opacity-20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Footer />
      </div>
    </main>
  );
}
