import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiClock,
  FiMessageCircle,
  FiSearch,
  FiUploadCloud,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const timeline = [
  { title: "Request Submitted", done: true },
  { title: "Inspiration Received", done: true },
  { title: "Chef Reviewing", active: true },
  { title: "Quote Sent", done: false },
  { title: "Payment Pending", done: false },
  { title: "Baking", done: false },
  { title: "Ready", done: false },
  { title: "Completed", done: false },
];

export default function TrackOrderPage() {
  return (
    <main className="bg-[#FFF8E7] px-6 py-16">
      <div className="mx-auto max-w-[1450px]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
            Treat Trove Orders
          </p>

          <h1 className="mt-3 font-serif text-5xl text-[#1F1F1F]">
            Track Your <span className="italic text-[#D4A017]">Order</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Enter your request number to view chef review, quotation and order
            progress.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl gap-3 rounded-2xl bg-white p-3 shadow-md">
          <input
            placeholder="Enter order number e.g. TT-20260702-001"
            className="flex-1 rounded-xl px-4 outline-none"
          />
          <button className="flex items-center gap-2 rounded-xl bg-[#8B1E2D] px-6 py-3 font-semibold text-white">
            <FiSearch /> Track
          </button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px]">
          <section className="space-y-6">
            <div className="rounded-[28px] bg-white p-7 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    Request Number
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-[#8B1E2D]">
                    TT-20260702-001
                  </h2>
                </div>

                <span className="rounded-full bg-[#FFF8E7] px-5 py-2 font-semibold text-[#8B1E2D]">
                  Chef Reviewing
                </span>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-4">
                {[
                  ["Cake", "Floral Birthday Cake"],
                  ["Pickup", "24 July 2026"],
                  ["Time", "3:00 PM"],
                  ["Payment", "Pending"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#FFF8E7] p-4">
                    <p className="text-sm text-gray-500">{label}</p>
                    <p className="mt-1 font-semibold text-[#1F1F1F]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-7 shadow-md">
              <h2 className="font-serif text-3xl text-[#1F1F1F]">
                Order Timeline
              </h2>

              <div className="mt-8 space-y-6">
                {timeline.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          step.done
                            ? "bg-[#8B1E2D] text-white"
                            : step.active
                            ? "bg-[#D4A017] text-white"
                            : "bg-[#FFF8E7] text-gray-400"
                        }`}
                      >
                        {step.done ? <FiCheckCircle /> : <FiClock />}
                      </div>

                      {index !== timeline.length - 1 && (
                        <div className="mt-2 h-8 w-px bg-[#F0DDC8]" />
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-[#1F1F1F]">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {step.done
                          ? "Completed"
                          : step.active
                          ? "Currently in progress"
                          : "Pending"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-7 shadow-md">
              <h2 className="font-serif text-3xl text-[#1F1F1F]">
                Chef Messages
              </h2>

              <div className="mt-5 rounded-2xl bg-[#FFF8E7] p-5 text-gray-700">
                <p className="font-semibold text-[#8B1E2D]">
                  Treat Trove Chef
                </p>
                <p className="mt-2">
                  We are reviewing your cake design. If we need any changes, we
                  will send a message here before confirming the final quote.
                </p>
              </div>

              <textarea
                rows={4}
                placeholder="Write a reply..."
                className="mt-5 w-full rounded-xl border px-4 py-3 placeholder:text-gray-400"
              />

              <button className="mt-4 rounded-xl bg-[#8B1E2D] px-6 py-3 font-semibold text-white">
                Send Message
              </button>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[28px] bg-white p-7 shadow-md">
              <h2 className="font-serif text-3xl text-[#1F1F1F]">
                Cake Preview
              </h2>

              <Image
                src="/images/cake/cakes-hero.png"
                alt="Cake preview"
                width={420}
                height={300}
                className="mt-5 h-[260px] w-full rounded-2xl object-cover"
              />

              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Shape", "Round"],
                  ["Layers", "Two Tier"],
                  ["Servings", "20 Portions"],
                  ["Flavour", "Chocolate"],
                  ["Colour", "Pink"],
                  ["Method", "Pickup"],
                ].map(([label, value]) => (
                  <p key={label}>
                    <strong>{label}:</strong> {value}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-7 shadow-md">
              <h2 className="font-serif text-3xl text-[#1F1F1F]">Quote</h2>

              <div className="mt-5 rounded-2xl bg-[#FFF8E7] p-5">
                <p className="font-semibold text-[#8B1E2D]">Pending Review</p>
                <p className="mt-2 text-sm text-gray-600">
                  Your final quotation will appear here after chef approval.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-7 shadow-md">
              <h2 className="font-serif text-3xl text-[#1F1F1F]">
                More References
              </h2>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#8B1E2D] px-4 py-5 font-semibold text-[#8B1E2D]">
                <FiUploadCloud /> Upload More Images
              </button>
            </div>

            <div className="rounded-[28px] bg-white p-7 shadow-md">
              <h2 className="font-serif text-3xl text-[#1F1F1F]">Need Help?</h2>

              <div className="mt-5 space-y-3">
                <button className="flex w-full items-center gap-3 rounded-xl bg-[#FFF8E7] px-4 py-3 text-[#8B1E2D]">
                  <FiPhone /> Call Bakery
                </button>
                <button className="flex w-full items-center gap-3 rounded-xl bg-[#FFF8E7] px-4 py-3 text-[#8B1E2D]">
                  <FiMessageCircle /> WhatsApp
                </button>
                <button className="flex w-full items-center gap-3 rounded-xl bg-[#FFF8E7] px-4 py-3 text-[#8B1E2D]">
                  <FiMail /> Email
                </button>
              </div>
            </div>

            <Link
              href="/cakes"
              className="block rounded-xl bg-[#8B1E2D] py-4 text-center font-semibold text-white"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}