import { Check } from "lucide-react";

interface Step3Props {
  services: string[];
  setServices: (services: string[]) => void;
}

const serviceList = [
  {
    title: "Photography",
    icon: "📸",
    description: "Capture every memorable moment.",
  },
  {
    title: "Videography",
    icon: "🎥",
    description: "Cinematic event coverage.",
  },
  {
    title: "Decoration",
    icon: "🌸",
    description: "Elegant venue styling.",
  },
  {
    title: "Stage & Lighting",
    icon: "💡",
    description: "Professional stage production.",
  },
  {
    title: "Entertainment",
    icon: "🎤",
    description: "DJs, bands and performers.",
  },
  {
    title: "Catering",
    icon: "🍽",
    description: "Premium dining experience.",
  },
  {
    title: "Luxury Car",
    icon: "🚗",
    description: "Luxury transportation.",
  },
  {
    title: "Other",
    icon: "✨",
    description: "Tell us your requirements.",
  },
];

export default function Step3({
  services,
  setServices,
}: Step3Props) {
  function toggle(service: string) {
    if (services.includes(service)) {
      setServices(
        services.filter((item) => item !== service)
      );
    } else {
      setServices([...services, service]);
    }
  }

  return (
    <>
      <h2 className="text-4xl font-bold text-center">
        Services Required
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Select all the services you require.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {serviceList.map((service) => (
          <button
            key={service.title}
            onClick={() => toggle(service.title)}
            className={`relative rounded-3xl border p-8 text-left transition-all duration-300 ${
              services.includes(service.title)
                ? "border-orange-500 bg-orange-500/10 shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                : "border-white/10 bg-white/5 hover:border-orange-500/40"
            }`}
          >
            {services.includes(service.title) && (
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg">
                <Check size={18} strokeWidth={3} />
              </div>
            )}

            <div className="text-5xl">
              {service.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {service.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {service.description}
            </p>
          </button>
        ))}
      </div>
    </>
  );
}
