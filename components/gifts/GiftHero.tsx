"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiGift,
  FiHeart,
  FiPackage,
  FiTruck,
} from "react-icons/fi";

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
  badge?: string;
  announcement?: string;
};

const mainGiftSlide: HeroSlide = {
  id: "main-gifts",
  eyebrow: "Thoughtful gifts, beautifully made",
  title: "Gifts for Every",
  highlightedTitle: "Special Moment",
  description:
    "Discover handcrafted cakes, cupcake boxes, desserts and personalised gift hampers made for the people who matter most.",
  buttonText: "Explore Gifts",
  buttonHref: "#gift-collections",
  image: "/images/gifts/hero/main-gift-hero.png",
  badge: "Treat Trove Gifts",
};

const monthlyCampaigns: Record<number, HeroSlide> = {
  0: {
    id: "january",
    eyebrow: "New Year gifting",
    title: "Start the Year",
    highlightedTitle: "With Something Sweet",
    description:
      "Celebrate new beginnings with cake gift boxes, dessert hampers and thoughtful thank-you gifts.",
    buttonText: "Shop January Gifts",
    buttonHref: "/gifts?campaign=new-year",
    image: "/images/gifts/hero/new-year-gifts.png",
    badge: "New Year Collection",
    announcement:
      "New Year gifting is available across selected Melbourne suburbs.",
  },

  1: {
    id: "february",
    eyebrow: "Made for someone special",
    title: "Valentine’s Day",
    highlightedTitle: "Gift Collection",
    description:
      "Romantic cakes, cupcake boxes, flowers and personalised desserts for someone special.",
    buttonText: "Shop Valentine’s Gifts",
    buttonHref: "/gifts?campaign=valentines",
    image: "/images/gifts/hero/valentines-gifts.png",
    badge: "Limited Valentine’s Collection",
    announcement: "Valentine’s Day pre-orders are now open.",
  },

  2: {
    id: "march",
    eyebrow: "Celebrate and appreciate",
    title: "Gifts for",
    highlightedTitle: "Inspiring Women",
    description:
      "Beautiful cakes, flowers and dessert gift boxes for the women who inspire you.",
    buttonText: "Explore Gifts for Her",
    buttonHref: "/gifts?recipient=for-her",
    image: "/images/gifts/hero/womens-day-gifts.png",
    badge: "March Collection",
    announcement:
      "Celebrate International Women’s Day with something handcrafted.",
  },

  3: {
    id: "april",
    eyebrow: "A sweet Easter celebration",
    title: "Easter Treats",
    highlightedTitle: "For the Whole Family",
    description:
      "Discover Easter cakes, cupcake boxes, chocolate desserts and family favourites.",
    buttonText: "Shop Easter Gifts",
    buttonHref: "/gifts?campaign=easter",
    image: "/images/gifts/hero/easter-gifts.png",
    badge: "Easter Collection",
    announcement:
      "Easter orders are available for pickup and selected delivery.",
  },

  4: {
    id: "may",
    eyebrow: "Celebrate Mum with love",
    title: "Mother’s Day",
    highlightedTitle: "Collection",
    description:
      "Handcrafted cakes, dessert boxes, flowers and beautifully wrapped gifts made especially for Mum.",
    buttonText: "Shop Mother’s Day Gifts",
    buttonHref: "/gifts?campaign=mothers-day",
    image: "/images/gifts/hero/mothers-day-gifts.png",
    badge: "Limited Time Only",
    announcement: "Mother’s Day pre-orders are now open across Melbourne.",
  },

  5: {
    id: "june",
    eyebrow: "Celebrate every achievement",
    title: "Graduation &",
    highlightedTitle: "Thank-You Gifts",
    description:
      "Mark a proud milestone with celebration cakes, cupcake gifts and personalised dessert hampers.",
    buttonText: "Shop Graduation Gifts",
    buttonHref: "/gifts?campaign=graduation",
    image: "/images/gifts/hero/graduation-gifts.png",
    badge: "Graduation Season",
    announcement: "Celebrate graduates with a personalised Treat Trove gift.",
  },

  6: {
    id: "july",
    eyebrow: "Warm gifts for winter",
    title: "Winter Comfort",
    highlightedTitle: "Gift Collection",
    description:
      "Cosy cake boxes, cupcakes, brownies, candles and comforting dessert hampers for winter.",
    buttonText: "Shop Winter Gifts",
    buttonHref: "/gifts?campaign=winter",
    image: "/images/gifts/hero/winter-gifts.png",
    badge: "Winter Collection",
    announcement: "Warm up winter with handcrafted cakes and desserts.",
  },

  7: {
    id: "august",
    eyebrow: "Something special for Dad",
    title: "Father’s Day",
    highlightedTitle: "Gift Collection",
    description:
      "Chocolate cakes, dessert boxes, coffee treats and premium hampers made for Dad.",
    buttonText: "Shop Father’s Day Gifts",
    buttonHref: "/gifts?campaign=fathers-day",
    image: "/images/gifts/hero/fathers-day-gifts.png",
    badge: "Father’s Day Pre-Orders",
    announcement:
      "Father’s Day orders are open for Melbourne pickup and selected delivery.",
  },

  8: {
    id: "september",
    eyebrow: "Fresh gifts for spring",
    title: "Spring Blooms",
    highlightedTitle: "Gift Collection",
    description:
      "Floral cakes, cupcake bouquets and bright dessert boxes inspired by spring.",
    buttonText: "Explore Spring Gifts",
    buttonHref: "/gifts?campaign=spring",
    image: "/images/gifts/hero/spring-gifts.png",
    badge: "Spring Collection",
    announcement: "Discover fresh spring cake and dessert combinations.",
  },

  9: {
    id: "october",
    eyebrow: "Sweet and spooky",
    title: "Halloween",
    highlightedTitle: "Treat Collection",
    description:
      "Fun cakes, cupcakes and dessert boxes for Halloween parties and family celebrations.",
    buttonText: "Shop Halloween Treats",
    buttonHref: "/gifts?campaign=halloween",
    image: "/images/gifts/hero/halloween-gifts.png",
    badge: "Halloween Collection",
    announcement: "Halloween treat boxes are available for pre-order.",
  },

  10: {
    id: "november",
    eyebrow: "Festive gifting starts here",
    title: "Christmas",
    highlightedTitle: "Pre-Orders Are Open",
    description:
      "Plan ahead with festive cakes, dessert hampers, corporate boxes and Christmas treats.",
    buttonText: "Pre-Order Christmas Gifts",
    buttonHref: "/gifts?campaign=christmas",
    image: "/images/gifts/hero/christmas-preorders.png",
    badge: "Christmas Pre-Orders",
    announcement:
      "Christmas and corporate Treat Trove gift pre-orders are now open.",
  },

  11: {
    id: "december",
    eyebrow: "Celebrate the festive season",
    title: "Christmas Gifts",
    highlightedTitle: "Made for Sharing",
    description:
      "Bring family and friends together with premium cakes, dessert boxes and festive hampers.",
    buttonText: "Shop Christmas Gifts",
    buttonHref: "/gifts?campaign=christmas",
    image: "/images/gifts/hero/christmas-gifts.png",
    badge: "Festive Collection",
    announcement: "Christmas delivery and pickup dates are filling quickly.",
  },
};

const benefits = [
  {
    icon: FiHeart,
    title: "Handcrafted",
    text: "Made fresh with love",
  },
  {
    icon: FiGift,
    title: "Personalised",
    text: "Created for your recipient",
  },
  {
    icon: FiPackage,
    title: "Gift Wrapped",
    text: "Beautifully presented",
  },
  {
    icon: FiTruck,
    title: "Melbourne Delivery",
    text: "Selected suburbs",
  },
];

export default function GiftHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo(() => {
    const currentMonth = new Date().getMonth();
    return [mainGiftSlide, monthlyCampaigns[currentMonth]];
  }, []);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const showPreviousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  };

  return (
    <section
      className="bg-[#FFF8E7]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[520px] overflow-hidden sm:min-h-[560px] lg:min-h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              activeSlide === index
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none translate-x-8 opacity-0"
            }`}
            aria-hidden={activeSlide !== index}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E7] via-[#FFF8E7]/90 to-[#FFF8E7]/5" />

            <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-14 sm:min-h-[560px] lg:min-h-[600px] lg:py-16">
              <div className="max-w-2xl">
                {slide.announcement && (
                  <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#D4A017]/25 bg-white/90 px-4 py-2 text-xs font-semibold text-[#8B1E2D] shadow-sm backdrop-blur sm:text-sm">
                    <FiGift className="shrink-0 text-[#D4A017]" />
                    <span>{slide.announcement}</span>
                  </div>
                )}

                {slide.badge && (
                  <span className="inline-flex rounded-full border border-[#D4A017]/30 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D4A017] shadow-sm backdrop-blur">
                    {slide.badge}
                  </span>
                )}

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A017] sm:text-sm sm:tracking-[0.28em]">
                  {slide.eyebrow}
                </p>

                <h1 className="mt-4 font-serif text-4xl leading-[1.05] text-[#8B1E2D] sm:text-6xl lg:text-7xl">
                  {slide.title}

                  {slide.highlightedTitle && (
                    <>
                      <br />
                      <span className="italic text-[#D4A017]">
                        {slide.highlightedTitle}
                      </span>
                    </>
                  )}
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 md:text-lg md:leading-8">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    href={slide.buttonHref}
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#8B1E2D] px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#6E1723]"
                  >
                    {slide.buttonText}
                    <FiArrowRight />
                  </Link>

                  <Link
                    href="#gift-builder"
                    className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#D4A017] bg-white/85 px-7 py-4 font-semibold text-[#8B1E2D] backdrop-blur transition hover:bg-white"
                  >
                    Create Your Gift Box
                    <FiGift />
                  </Link>
                </div>

                <div className="mt-9 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                  {benefits.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 sm:border-r sm:border-[#8B1E2D]/10 sm:last:border-r-0"
                    >
                      <Icon className="mt-1 shrink-0 text-xl text-[#8B1E2D]" />

                      <div>
                        <p className="text-sm font-semibold text-[#1F1F1F]">
                          {title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-gray-600">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={showPreviousSlide}
          className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#8B1E2D] shadow-md backdrop-blur transition hover:bg-[#8B1E2D] hover:text-white md:flex"
          aria-label="Previous gift banner"
        >
          <FiArrowLeft />
        </button>

        <button
          type="button"
          onClick={showNextSlide}
          className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#8B1E2D] shadow-md backdrop-blur transition hover:bg-[#8B1E2D] hover:text-white md:flex"
          aria-label="Next gift banner"
        >
          <FiArrowRight />
        </button>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/85 px-4 py-3 shadow-md backdrop-blur">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index
                  ? "w-8 bg-[#8B1E2D]"
                  : "w-2.5 bg-[#8B1E2D]/30 hover:bg-[#8B1E2D]/60"
              }`}
              aria-label={`Show ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}