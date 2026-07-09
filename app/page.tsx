"use client";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Gallery from "./components/home/Gallery";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar />

      <Hero />

      <Services />

      <WhyChooseUs />

      <Gallery />

      <Footer />
    </main>
  );
}
