import Image from "next/image";

export default function CakesHero() {
  return (
    <section className="bg-[#FFF8E7]">
    <div className="mx-auto max-w-[1500px]">
        <div className="grid items-center lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="z-10 px-8 py-20 lg:px-12">
            <span className="text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
            Treat Trove Collection
            </span>

            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1F1F1F] lg:text-7xl">
              Our
              <span className="ml-3 italic text-[#D4A017]">
                Cakes
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-xl leading-relaxed text-gray-600">
            Explore our range of custom cakes, cupcakes and handcrafted desserts
            made with love.
            </p>

            <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-[#8B1E2D] px-8 py-4 font-semibold text-white transition hover:bg-[#6E1723]">
                Order Now →
              </button>

              <button className="rounded-xl border border-[#D4A017] px-8 py-4 font-semibold text-[#8B1E2D] transition hover:bg-[#D4A017] hover:text-white">
                Custom Design
              </button>
            </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[500px]">

            <Image
            src="/images/cake/cakes-hero.png"
            alt="Treat Trove Cakes"
            fill
            priority
            className="object-cover"
            />

            {/* Soft blend overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E7] via-[#FFF8E7]/70 to-transparent" />
        </div>

        </div>
    </div>
    </section>
  );
}