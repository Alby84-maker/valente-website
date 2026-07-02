interface Step4Props {
  vision: string;
  setVision: (value: string) => void;
}

export default function Step4({
  vision,
  setVision,
}: Step4Props) {
  return (
    <>
      <h2 className="text-4xl font-bold text-center">
        Tell Us About Your Vision
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        Share your ideas, preferred theme, special requests, or anything you'd
        like us to know about your event.
      </p>

      <textarea
        rows={10}
        value={vision}
        onChange={(e) => setVision(e.target.value)}
        placeholder="Example: We'd like a modern white and gold wedding with elegant floral decorations, live music, a grand entrance, and cinematic photography..."
        className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-lg outline-none transition focus:border-orange-500 resize-none"
      />

      <p className="mt-4 text-sm text-gray-500">
        The more details you provide, the better we can understand your vision.
      </p>
    </>
  );
}
