"use client";

import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

export default function PlanYourEvent() {
  const [step, setStep] = useState(1);

  // Step 1
  const [selectedEvent, setSelectedEvent] = useState("");

  // Step 2
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [venue, setVenue] = useState("");

  // Step 3
  const [services, setServices] = useState<string[]>([]);

  // Step 4
  const [vision, setVision] = useState("");

  // Step 5
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="border-b border-orange-500/20 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-orange-500">
            Plan Your Event
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Let's Create Something
            <span className="text-orange-500"> Extraordinary</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Tell us about your event and we'll craft a personalized
            experience that reflects your vision.
          </p>

        </div>
      </section>

      {/* Planner */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-10 backdrop-blur-xl">

            {/* Progress */}
            <h2 className="mb-8 text-3xl font-bold">
              Step {step} of 5
            </h2>

            <div className="mb-12 h-2 w-full rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-orange-500 transition-all duration-500"
                style={{
                  width: `${step * 20}%`,
                }}
              />
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <Step1
                selected={selectedEvent}
                onSelect={setSelectedEvent}
              />
            )}

            {/* Step 2 */}
            {step === 2 && (
              <Step2
                eventDate={eventDate}
                setEventDate={setEventDate}
                location={location}
                setLocation={setLocation}
                guests={guests}
                setGuests={setGuests}
                venue={venue}
                setVenue={setVenue}
              />
            )}

            {/* Step 3 */}
            {step === 3 && (
              <Step3
                services={services}
                setServices={setServices}
              />
            )}

            {/* Step 4 */}
            {step === 4 && (
              <Step4
                vision={vision}
                setVision={setVision}
              />
            )}

            {/* Step 5 */}
            {step === 5 && (
              <Step5
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                contactMethod={contactMethod}
                setContactMethod={setContactMethod}
              />
            )}

            {/* Navigation */}
            <div className="mt-16 flex justify-between">

              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className="rounded-xl border border-orange-500/30 px-8 py-3 transition hover:border-orange-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Back
              </button>

              <button
                onClick={() => {
                  if (step < 5) {
                    setStep(step + 1);
                  } else {
                    alert("Event request submitted!");
                  }
                }}
                disabled={
                  (step === 1 && !selectedEvent) ||
                  (step === 2 &&
                    (!eventDate ||
                      !location ||
                      !guests ||
                      !venue)) ||
                  (step === 3 && services.length === 0) ||
                  (step === 4 && vision.trim() === "") ||
                  (step === 5 &&
                    (!name ||
                      !phone ||
                      !email ||
                      !contactMethod))
                }
                className="rounded-xl bg-orange-500 px-8 py-3 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === 5
                  ? "✨ Request My Proposal"
                  : "Continue"}
              </button>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
