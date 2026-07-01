export default function Gallery() {
  const gallery = [
    {
      title: "Luxury Wedding",
      image: "/gallery/wedding.jpg",
    },
    {
      title: "Corporate Event",
      image: "/gallery/corporate.jpg",
    },
    {
      title: "Birthday Celebration",
      image: "/gallery/birthday.jpg",
    },
    {
      title: "Stage & Lighting",
      image: "/gallery/stage.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            Our Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Moments We've Created
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Every event tells a story. Here's a glimpse of the unforgettable
            experiences we create.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {gallery.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

