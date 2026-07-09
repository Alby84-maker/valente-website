"use client";

import {
  Gem,
  BriefcaseBusiness,
  Camera,
  CarFront,
  Music4,
  PartyPopper,
} from "lucide-react";

const services = [
  {
    icon: Gem,
    title: "Luxury Weddings",
    description:
      "Elegant wedding planning designed around your vision.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Events",
    description:
      "Professional conferences, launches and company celebrations.",
  },
  {
    icon: PartyPopper,
    title: "Birthday Celebrations",
    description:
      "Luxury birthdays for children and adults with unforgettable themes.",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description:
      "Capture every unforgettable moment with premium photography and cinematic films.",
  },
  {
    icon: Music4,
    title: "Stage & Entertainment",
    description:
      "Professional lighting, sound systems and live entertainment for every occasion.",
  },
  {
    icon: CarFront,
    title: "Luxury Car Rental",
    description:
      "Premium wedding and VIP transportation with luxury vehicles.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-orange-500">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Crafted For Every Celebration
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            From intimate celebrations to luxury weddings and corporate
            experiences, Valente Events creates unforgettable moments with
            premium planning and flawless execution.
          </p>

        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-colors duration-300 group-hover:bg-orange-500">

                  <Icon
                    size={30}
                    className="text-orange-500 transition-colors duration-300 group-hover:text-white"
                  />

                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-gray-600">
                  {service.description}
                </p>

                {/* Button */}
                <button className="mt-8 font-semibold text-orange-500 transition-all duration-300 hover:translate-x-2 hover:text-orange-600">
                  Learn More →
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
