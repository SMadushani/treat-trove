import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHeart, FiInstagram } from "react-icons/fi";

const moments = [
  {
    title: "Birthday Surprise",
    image: "/images/gifts/occasions/birthday.jpg",
    href: "/gifts?occasion=birthday",
  },
  {
    title: "Baby Welcome Gift",
    image: "/images/gifts/occasions/baby-welcome.jpg",
    href: "/gifts?occasion=baby-welcome",
  },
  {
    title: "Mother’s Day Gift",
    image: "/images/gifts/trending/mum-floral-cake-box.jpg",
    href: "/gifts?campaign=mothers-day",
  },
  {
    title: "Anniversary Gift",
    image: "/images/gifts/occasions/anniversary.jpg",
    href: "/gifts?occasion=anniversary",
  },
  {
    title: "Graduation Gift",
    image: "/images/gifts/occasions/graduation.jpg",
    href: "/gifts?occasion=graduation",
  },
  {
    title: "Housewarming Gift",
    image: "/images/gifts/occasions/housewarming.jpg",
    href: "/gifts?occasion=housewarming",
  },
  {
    title: "Cake & Flowers",
    image: "/images/gifts/collections/cake-flowers.jpg",
    href: "/gifts?collection=cake-flowers",
  },
  {
    title: "Luxury Dessert Hamper",
    image: "/images/gifts/collections/luxury-hampers.jpg",
    href: "/gifts?collection=luxury-hampers",
  },
];

export default function GiftMoments() {
  return (
    <section className="bg-[#FFF8E7] px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* CUSTOMER MOMENTS */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
              Shared with love
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#1F1F1F] md:text-5xl">
              Sweet Gift Moments ♡
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Explore cake, cupcake and dessert gifts created for meaningful
              celebrations across Melbourne.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex w-fit items-center gap-2 font-semibold text-[#8B1E2D] transition hover:gap-3"
          >
            View full gallery
            <FiArrowRight />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {moments.map((moment, index) => (
            <Link
              key={moment.title}
              href={moment.href}
              className={`group relative overflow-hidden rounded-[26px] shadow-sm ${
                index === 0 || index === 5
                  ? "row-span-2 min-h-[420px]"
                  : "min-h-[200px]"
              }`}
            >
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <FiHeart />
                  Treat Trove Gift
                </div>

                <h3 className="mt-2 font-serif text-xl md:text-2xl">
                  {moment.title}
                </h3>

                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold opacity-0 transition group-hover:opacity-100">
                  Explore
                  <FiArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="https://www.tiktok.com/@treat.trove"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[#8B1E2D]/20 bg-white px-6 py-3 font-semibold text-[#8B1E2D] shadow-sm transition hover:border-[#8B1E2D] hover:shadow-md"
          >
            <FiInstagram />
            Follow @treat.trove
          </Link>
        </div>

        {/* CUSTOM GIFT CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[38px] bg-[#8B1E2D] shadow-lg">
          <div className="grid items-center lg:grid-cols-[1fr_420px]">
            <div className="relative z-10 p-8 text-white sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F5D57A]">
                Made especially for them
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                Can’t Find the Perfect Gift?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
                Tell us about the celebration, recipient and budget. We’ll help
                you create a personalised cake or dessert gift they’ll love.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#gift-builder"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#FFF8E7] px-7 py-4 font-semibold text-[#8B1E2D] transition hover:bg-white"
                >
                  Build My Gift
                  <FiArrowRight />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/35 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Treat Trove
                </Link>
              </div>
            </div>

            <div className="relative hidden h-full min-h-[360px] lg:block">
              <Image
                src="/images/gifts/hero/main-gift-hero.png"
                alt="Treat Trove custom cake and dessert gift"
                fill
                sizes="420px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#8B1E2D] via-[#8B1E2D]/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}