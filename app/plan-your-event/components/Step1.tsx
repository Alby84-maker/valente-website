interface Step1Props {
  selected: string;
  onSelect: (value: string) => void;
}

const events = [
  {
    emoji: "💍",
    title: "Wedding",
    description: "Luxury weddings planned to perfection.",
  },
  {
    emoji: "🏢",
    title: "Corporate Event",
    description: "Professional conferences and launches.",
  },
  {
    emoji: "🎂",
    title: "Birthday",
    description: "Memorable birthday celebrations.",
  },
  {
    emoji: "🤝",
    title: "Engagement",
    description: "Elegant engagement ceremonies.",
  },
  {
    emoji: "🏠",
    title: "Housewarming",
    description: "Warm celebrations for new beginnings.",
  },
  {
    emoji: "🎭",
    title: "Stage Show",
    description: "Professional productions and performances.",
  },
  {
    emoji: "✨",
    title: "Other",
    description: "Tell us about your unique event.",
  },
];

export default function Step1({
  selected,
  onSelect,
}: Step1Props) {
  return (
    <>
      <h2 className="text-4xl font-bold text-center">
        What type of event are you planning?
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Choose the option that best matches your event.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <button
            key={event.title}
            onClick={() => onSelect(event.title)}
            className={`rounded-3xl border p-8 text-left transition-all duration-300 ${
              selected === event.title
                ? "border-orange-500 bg-orange-500/10"
                : "border-white/10 bg-white/5 hover:border-orange-500/50"
            }`}
          >
            <div className="text-5xl">{event.emoji}</div>

            <h3 className="text-2xl font-bold mt-6">
              {event.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {event.description}
            </p>
          </button>
        ))}
      </div>
    </>
  );
}

