import { init } from "next/dist/compiled/webpack/webpack";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold tracking-widest">
        VALENTE EVENTS
      </h1>

      <p className="mt-6 text-2xl text-gray-300 italic">
        Where Every Moment Matters
      </p>

      <button className="mt-12 px-8 py-4 bg-yellow-500 text-black rounded-full text-lg font-semibold hover:bg-yellow-400 transition">
        Book Your Event
      </button>
    </main>
  );
}
