import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <Image
  src="/logo.png"
  alt="Valente Events"
  width={800}
  height={800}
  priority
  className="w-[380px] h-auto mb-8"
/>

      <p className="text-2xl text-gray-300 italic text-center">
        Where Every Moment Matters
      </p>

      <button className="mt-12 px-8 py-4 bg-orange-600 text-white rounded-full text-lg font-semibold hover:bg-orange-500 transition duration-300 shadow-lg">
        Book Your Event
      </button>

    </main>
  );
}
