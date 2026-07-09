import {
  Award,
  ShieldCheck,
  Clock3,
  HeartHandshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Luxury event planning with exceptional attention to every detail.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Professionals",
      description:
        "A dedicated team committed to delivering unforgettable experiences.",
    },
    {
      icon: Clock3,
      title: "On-Time Execution",
      description:
        "Every event is planned and executed with precision and punctuality.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Service",
      description:
        "Every celebration is customized to reflect your vision and style.",
    },
  ];

  return (
    <section 
    id="why-choose-us"
    className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Why Choose Valente
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Excellence in Every Detail
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            We combine creativity, professionalism and precision to create
            unforgettable experiences for every occasion.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <reason.icon
                size={44}
                strokeWidth={1.8}
                className="text-orange-500 mb-6"
              />

              <h3 className="text-2xl font-semibold">
                {reason.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {reason.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
