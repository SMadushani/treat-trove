import Image from "next/image";
import {
  FiImage,
  FiCalendar,
  FiCpu,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  { icon: FiImage, title: "Upload Inspiration" },
  { icon: FiCalendar, title: "Select Details" },
  { icon: FiCpu, title: "AI Preview" },
  { icon: FiCheckCircle, title: "Confirm Order" },
];

export default function AIPreviewSection() {
  return (
    <section className="bg-[#FFF8E7] px-6 py-20">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 rounded-[32px] bg-gradient-to-r from-[#FFF1F1] to-white p-8 shadow-md lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A017]">
            Make it uniquely yours
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight text-[#1F1F1F]">
            Design Your
            <br />
            <span className="italic text-[#D4A017]">Dream Cake</span>
          </h2>

          <p className="mt-6 max-w-md text-gray-600">
            Upload your inspiration, choose your preferences and preview your
            cake idea before placing your order.
          </p>

          <a
            href="/custom-cakes"
            className="mt-8 inline-block rounded-xl bg-[#8B1E2D] px-7 py-4 font-semibold text-white transition hover:bg-[#6E1723]"
          >
            Start Custom Order →
          </a>
        </div>

        <div>
        <div className="mb-8 grid gap-4 sm:grid-cols-4">
        {steps.map((step, index) => {
            const Icon = step.icon;

            return (
            <div key={step.title} className="relative text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#8B1E2D] shadow-sm">
                <Icon size={24} />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A017] text-xs font-bold text-white">
                    {index + 1}
                </span>
                </div>

                <p className="mt-3 text-sm font-semibold text-gray-800">
                {step.title}
                </p>
            </div>
            );
        })}
        </div>

          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <p className="mb-3 text-center text-sm font-semibold text-[#8B1E2D]">
                Your Inspiration
              </p>
              <Image
                src="/images/cake/bdck8f.jpeg"
                alt="Cake inspiration"
                width={400}
                height={260}
                className="h-56 w-full rounded-xl object-contain bg-[#FFF8E7]"
              />
            </div>

            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4A017] bg-white text-center font-serif text-[#D4A017] shadow-sm">
                AI
                <br />
                Preview
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-md">
              <p className="mb-3 text-center text-sm font-semibold text-[#8B1E2D]">
                AI Preview
              </p>
              <Image
                src="/images/cake/AI View.png"
                alt="AI cake preview"
                width={400}
                height={260}
                className="h-56 w-full rounded-xl object-contain bg-[#FFF8E7]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}