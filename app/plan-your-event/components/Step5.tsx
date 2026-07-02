interface Step5Props {
  name: string;
  setName: (value: string) => void;

  phone: string;
  setPhone: (value: string) => void;

  email: string;
  setEmail: (value: string) => void;

  contactMethod: string;
  setContactMethod: (value: string) => void;
}

export default function Step5({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  contactMethod,
  setContactMethod,
}: Step5Props) {
  return (
    <>
      <h2 className="text-4xl font-bold text-center">
        Your Contact Details
      </h2>

      <p className="text-gray-400 text-center mt-4 mb-12">
        You're almost done! Tell us how we can reach you.
      </p>

      <div className="space-y-8">

        <div>
          <label className="block mb-2 font-semibold">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Phone Number
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Preferred Contact Method
          </label>

          <select
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-orange-500"
          >
            <option value="">Select</option>
            <option>WhatsApp</option>
            <option>Phone Call</option>
            <option>Email</option>
          </select>
        </div>

      </div>
    </>
  );
}
