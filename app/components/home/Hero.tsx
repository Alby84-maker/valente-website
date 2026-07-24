"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-20">

        <div className="grid w-full items-center gap-28 lg:grid-cols-2">

          {/* LEFT */}
          <div className="max-w-xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-orange-600">
              ValenteEvents
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-neutral-900 lg:text-6xl xl:text-7xl">

              Crafting

              <span className="block">
                Extraordinary
              </span>

              <span className="block text-orange-600">
                Celebrations.
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-neutral-600">

              Luxury weddings, destination celebrations,
              corporate events and unforgettable experiences
              designed with elegance, precision and timeless
              attention to detail.

            </p>

            <div className="mt-12 flex items-center gap-8">

              <Link
                href="/plan-your-event"
                className="rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Plan Your Event
              </Link>

              <Link
                href="#services"
                className="font-medium text-neutral-700 transition-colors duration-300 hover:text-orange-600"
              >
                Explore Services →
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="relative h-[720px] overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/hero.png"
                alt="Luxury Wedding by ValenteEvents"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
