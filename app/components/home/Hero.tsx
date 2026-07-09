"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-white" />

      {/* Very Light Background Glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-100 opacity-10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-24 lg:flex-row">

        {/* LEFT */}
        <div className="w-full lg:w-[46%] text-center lg:text-left">

          <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
            Luxury Event Management
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] text-gray-900 md:text-7xl xl:text-8xl">
            Creating

            <span className="block text-orange-500">
              Extraordinary
            </span>

            Moments
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-600 lg:mx-0">
            Weddings, corporate events, birthdays, luxury celebrations and
            unforgettable experiences crafted with elegance across Kerala.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row lg:justify-start">

            <Link
              href="/plan-your-event"
              className="rounded-full bg-orange-500 px-9 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600"
            >
              Plan Your Event →
            </Link>

            <Link
              href="#services"
              className="rounded-full border border-orange-300 px-9 py-4 font-semibold text-orange-600 transition duration-300 hover:bg-orange-50"
            >
              Explore Services
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                Premium
              </h3>
              <p className="mt-2 text-gray-500">
                Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                Kerala
              </h3>
              <p className="mt-2 text-gray-500">
                Based
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-500">
                100%
              </h3>
              <p className="mt-2 text-gray-500">
                Client Focus
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex w-full justify-center lg:w-[54%]">

          <div className="relative flex items-center justify-center">

            {/* Premium White Glow */}
            <div
              className="absolute h-[430px] w-[430px] rounded-full"
              style={{
                boxShadow: "0 0 140px rgba(249,115,22,0.12)",
              }}
            />

            <img
              src="/logo.png"
              alt="Valente Events"
              className="relative w-[24rem] drop-shadow-2xl transition duration-700 hover:scale-105 lg:w-[650px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
