import Image from "next/image";
import {
  GiCakeSlice,
  GiCupcake,
  GiDeliveryDrone,
  GiLeafSwirl,
} from "react-icons/gi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8E7]">
      <Image
        src="/images/hero-cake.png"
        alt="Treat Trove floral cake"
        fill
        priority
        className="hidden object-cover object-right lg:block"
      />

      <div className="absolute inset-0 hidden bg-gradient-to-r from-[#FFF8E7] via-[#FFF8E7]/90 to-transparent lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-5 font-serif text-2xl italic text-[#D4A017] md:text-3xl">
            Turning Ingredients to Happiness ♡
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight text-[#8B1E2D] md:text-7xl">
            Sweet Creations
            <br />
            For Every
            <br />
            <span className="italic text-[#D4A017]">Celebration</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-700">
            Custom cakes and handcrafted desserts designed to make your special
            moments even sweeter.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/products"
              className="rounded-xl bg-[#8B1E2D] px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-[#6E1723]"
            >
              Order Now →
            </a>

            <a
              href="/custom-cakes"
              className="rounded-xl border border-[#D4A017] px-8 py-4 text-center font-semibold text-[#8B1E2D] transition hover:bg-[#FFF3E0]"
            >
              Custom Design
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-10 text-sm">

          <div className="flex items-center gap-2">
            <GiLeafSwirl size={18} className="text-[#8B1E2D]" />
            <span className="text-[#555]">Premium Ingredients</span>
          </div>

          <div className="flex items-center gap-2">
            <GiCupcake size={18} className="text-[#8B1E2D]" />
            <span className="text-[#555]">Made Fresh to Order</span>
          </div>

          <div className="flex items-center gap-2">
            <GiDeliveryDrone size={18} className="text-[#8B1E2D]" />
            <span className="text-[#555]">Pickup & Delivery</span>
          </div>

        </div>
        </div>
      </div>

      <div className="relative block lg:hidden">
        <Image
          src="/images/hero-cake.png"
          alt="Treat Trove floral cake"
          width={900}
          height={700}
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}