interface Step2Props {
  eventDate: string;
  setEventDate: (value: string) => void;

  location: string;
  setLocation: (value: string) => void;

  guests: string;
  setGuests: (value: string) => void;

  venue: string;
  setVenue: (value: string) => void;
}

export default function Step2({
  eventDate,
  setEventDate,
  location,
  setLocation,
  guests,
  setGuests,
  venue,
  setVenue,
}: Step2Props) {
  return (
    <>
      <h2 className="text-4xl font-bold text-center">
        Event Details
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Tell us a little about your event.
      </p>

      <div className="space-y-8">

        <div>
          <label className="block mb-2 font-semibold">
            Event Date
          </label>

          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Event Location
          </label>

          <input
            type="text"
            placeholder="Kochi, Trivandrum..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Estimated Guests
          </label>

          <input
            type="number"
            placeholder="250"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Venue Type
          </label>

          <select
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4"
          >
            <option value="">Select</option>
            <option>Indoor</option>
            <option>Outdoor</option>
            <option>Beach</option>
            <option>Hotel Ballroom</option>
            <option>Banquet Hall</option>
            <option>Private Property</option>
          </select>
        </div>

      </div>
    </>
  );
}
