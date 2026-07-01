import {
  Gem,
  Building2,
  PartyPopper,
  Mic2,
  Camera,
  Car,
  Sparkles,
  Palette,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Gem,
      title: "Wedding Planning",
      description:
        "Luxury weddings planned from concept to completion with flawless execution.",
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description:
        "Professional conferences, exhibitions, product launches and executive events.",
    },
    {
      icon: PartyPopper,
      title: "Birthday Celebrations",
      description:
        "Creative birthday experiences with premium décor and entertainment.",
    },
    {
      icon: Mic2,
      title: "Stage & Lighting",
      description:
        "Professional sound systems, lighting, staging and LED walls.",
    },
    {
      icon: Camera,
      title: "Photography",
      description:
        "Capture every special moment with cinematic photography and videography.",
    },
    {
      icon: Car,
      title: "Luxury Car Rental",
      description:
        "Premium vehicles for weddings, VIP guests and executive transport.",
    },
    {
      icon: Sparkles,
      title: "Entertainment",
      description:
        "Live bands, DJs, dancers, emcees and customized performances.",
    },
    {
      icon: Palette,
      title: "Event Decoration",
      description:
        "Luxury floral arrangements, venue styling and elegant event décor.",
    },
  ];

  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Creating Unforgettable Experiences
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            From luxury weddings to corporate productions, Valente Events
            delivers world-class event management with creativity, elegance,
            and flawless execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/70 hover:shadow-[0_0_45px_rgba(249,115,22,0.35)]"
            >
              {/* Orange Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <service.icon
                    size={46}
                    strokeWidth={1.8}
                    className="text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 font-semibold text-orange-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-orange-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
