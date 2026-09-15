import Image from "next/image";
import { FiImage, FiEdit3, FiCpu, FiCheckCircle } from "react-icons/fi";

const steps = [
  { number: "1", title: "Upload", subtitle: "Inspiration", icon: FiImage },
  { number: "2", title: "Cake", subtitle: "Details", icon: FiEdit3 },
  { number: "3", title: "AI", subtitle: "Preview", icon: FiCpu },
  { number: "4", title: "Confirm", subtitle: "Order", icon: FiCheckCircle },
];

export default function CustomOrderHero() {
  return (
    <section className="bg-[#FFF8E7]">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-6 py-16 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-5xl leading-tight text-[#8B1E2D] lg:text-7xl">
            Custom Cake Order
          </h1>

          <p className="mt-3 font-serif text-3xl italic text-[#D4A017]">
            Design it. Preview it. Love it. ♡
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Create a cake that is uniquely yours. Upload your inspiration and
            let our AI preview bring your dream cake to life.
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-[#8B1E2D]/10 bg-white/70 p-4 shadow-sm"
                >
                  <span className="absolute -top-3 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#8B1E2D] text-sm font-bold text-white">
                    {step.number}
                  </span>

                  <Icon className="text-[#8B1E2D]" size={28} />

                  <p className="mt-3 text-sm font-semibold text-[#1F1F1F]">
                    {step.title}
                  </p>

                  <p className="text-sm text-gray-600">{step.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden h-[420px] lg:block">
          <Image
            src="/images/cake/cakes-hero.png"
            alt="Custom cake order"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E7] via-[#FFF8E7]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}