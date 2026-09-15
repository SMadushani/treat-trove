import { GiCakeSlice, GiFlowerEmblem } from "react-icons/gi";

export default function CTASection() {
  return (
    <section className="bg-[#FFF8E7] px-6 pb-10">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[32px] shadow-xl">
        <div
          className="relative bg-cover bg-center px-8 py-16 text-white"
          style={{
            backgroundImage: "url('/images/CTASection.webp')",
          }}
        >
          <div className="absolute inset-0 bg-[#8B1E2D]/85" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Ready To Make Your
                <br />
                Celebration{" "}
                <span className="italic text-[#D4A017]">Sweeter?</span> ♡
              </h2>

              <p className="mt-4 max-w-xl text-white/85">
                From custom cakes to handcrafted desserts, we create sweet
                memories that last forever.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/custom-cakes"
                className="flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#8B1E2D]"
              >
                Order Now
                <GiCakeSlice size={22} />
              </a>

              <a
                href="/custom-cakes"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/60 px-8 py-4 font-semibold text-white"
              >
                Custom Design
                <GiFlowerEmblem size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}