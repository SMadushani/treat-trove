"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiGift,
  FiHeart,
  FiShoppingCart,
  FiTruck,
} from "react-icons/fi";
import { GiCupcake, GiLeafSwirl } from "react-icons/gi";

const dessertTabs = [
  "All Desserts",
  "Tiramisu",
  "Watalappan",
  "Puddings",
  "Cheesecakes",
  "Dessert Cups",
  "Dessert Boxes",
  
];

const desserts = [
  {
    name: "Classic Tiramisu",
    category: "Tiramisu",
    image: "/images/desserts/tiramisu.webp",
    price: "$12.00",
    text: "Rich Italian coffee dessert with mascarpone cream.",
  },
  {
    name: "Watalappan",
    category: "Watalappan",
    image: "/images/desserts/watalappan.jpg",
    price: "$9.50",
    text: "Traditional Sri Lankan favourite with coconut and spices.",
  },
  {
    name: "Caramel Pudding",
    category: "Puddings",
    image: "/images/desserts/caramel pudding.jpg",
    price: "$8.50",
    text: "Silky smooth caramel pudding perfection.",
  },
  {
    name: "Cheesecake Slice",
    category: "Cheesecakes",
    image: "/images/desserts/cheesecake.webp",
    price: "$11.00",
    text: "Creamy cheesecake with fresh toppings.",
  },
  {
    name: "Dessert Cup",
    category: "Dessert Cups",
    image: "/images/desserts/Dessert-cups.jpg",
    price: "$10.00",
    text: "Individual tiramisu cup with soft cream layers.",
  },
  {
    name: "Dessert Gift Box",
    category: "Dessert Boxes",
    image: "/images/desserts/dessert-box.png",
    price: "$35.00",
    text: "Mixed dessert box perfect for gifting.",
  },
];

const bestSellers = desserts.slice(0, 4);

export default function DessertsPage() {
  const [activeTab, setActiveTab] = useState("All Desserts");

  const filteredDesserts = useMemo(() => {
    if (activeTab === "All Desserts") return desserts;
    return desserts.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <main className="bg-[#FFF8E7]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[430px] w-full">
          <Image
            src="/images/desserts/dessert-hero.png"
            alt="Handcrafted desserts"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E7] via-[#FFF8E7]/85 to-transparent" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
            <div className="max-w-xl">
              <h1 className="font-serif text-6xl font-bold leading-tight text-[#8B1E2D]">
                Handcrafted
                <br />
                Desserts
              </h1>

              <p className="mt-5 font-serif text-2xl italic text-[#D4A017]">
                Freshly prepared for every celebration.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#featured-desserts"
                  className="flex items-center gap-3 rounded-xl bg-[#8B1E2D] px-7 py-4 font-semibold text-white shadow-md transition hover:bg-[#6E1723]"
                >
                  Order Desserts <FiShoppingCart />
                </Link>

                <Link
                  href="#dessert-box"
                  className="flex items-center gap-3 rounded-xl border border-[#D4A017] bg-white/80 px-7 py-4 font-semibold text-[#8B1E2D] transition hover:bg-white"
                >
                  Build Dessert Box <FiGift />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {dessertTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-8 py-4 font-semibold shadow-sm transition ${
                  activeTab === tab
                    ? "bg-[#8B1E2D] text-white"
                    : "bg-white text-[#8B1E2D] hover:bg-[#FFF3E0]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESSERTS */}
      <section id="featured-desserts" className="scroll-mt-32 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-4xl text-[#1F1F1F]">
                {activeTab === "All Desserts"
                  ? "Featured Desserts"
                  : activeTab}
              </h2>
              <p className="mt-2 text-gray-600">
                Freshly handcrafted favourites made for every celebration.
              </p>
            </div>

            <button className="hidden rounded-full border border-[#8B1E2D] px-6 py-3 font-semibold text-[#8B1E2D] md:block">
              View All
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredDesserts.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-[28px] bg-white p-5 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={360}
                  className="h-64 w-full rounded-2xl object-cover"
                />

                <div className="pt-5">
                  <p className="text-sm text-[#D4A017]">★★★★★</p>

                  <h3 className="mt-2 text-2xl font-bold text-[#8B1E2D]">
                    {item.name}
                  </h3>

                  <p className="mt-3 min-h-[52px] text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#1F1F1F]">
                      From {item.price}
                    </span>

                    <button className="flex items-center gap-2 rounded-full bg-[#8B1E2D] px-5 py-3 text-sm font-semibold text-white">
                      Add <FiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESSERT BOX BUILDER */}
      <section id="dessert-box" className="scroll-mt-32 px-6 py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#FFF0F2] shadow-md">
          <div className="grid lg:grid-cols-[0.45fr_0.55fr]">
            <div className="relative min-h-[520px]">
              <Image
                src="/images/desserts/dessert-box.png"
                alt="Dessert box"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
                Create your perfect box
              </p>

              <h2 className="mt-3 font-serif text-5xl text-[#8B1E2D]">
                Build Your Dessert Box ♡
              </h2>

              <p className="mt-4 text-gray-600">
                Mix your favourite desserts and create a beautiful gift box for
                birthdays, family gatherings or celebrations.
              </p>

              <p className="mt-8 font-semibold text-[#1F1F1F]">
                1. Choose Your Desserts
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Watalappan",
                  "Tiramisu Cup",
                  "Biscuit Pudding",
                  "Caramel Pudding",
                  "Jelly",
                  "Jelly Mousse",
                  "Tres Leches Cup",
                  "Chocolate Mousse",
                ].map((item) => (
                  <button
                    key={item}
                    className="rounded-xl border border-[#F0DDC8] bg-white px-4 py-3 text-left text-gray-700 transition hover:border-[#8B1E2D] hover:text-[#8B1E2D]"
                  >
                    🍮 {item}
                  </button>
                ))}
              </div>

              <p className="mt-8 font-semibold text-[#1F1F1F]">
                2. Choose Quantity
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {["6 Pieces", "12 Pieces", "24 Pieces"].map((qty, index) => (
                  <button
                    key={qty}
                    className={`rounded-xl border px-4 py-4 font-semibold ${
                      index === 0
                        ? "bg-[#8B1E2D] text-white"
                        : "bg-white text-[#8B1E2D]"
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-4 font-semibold text-[#8B1E2D]">
                  <FiGift /> Gift Wrap
                </button>

                <button className="rounded-xl bg-white px-4 py-4 font-semibold text-[#8B1E2D]">
                  ✉️ Greeting Card
                </button>
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#8B1E2D] py-4 font-semibold text-white">
                Add Box to Cart <FiShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
                Most loved
              </p>

              <h2 className="mt-2 font-serif text-4xl text-[#1F1F1F]">
                Best Sellers
              </h2>
            </div>

            <button className="hidden rounded-full border border-[#8B1E2D] px-6 py-3 font-semibold text-[#8B1E2D] md:block">
              View All
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-[26px] bg-white p-4 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={420}
                  height={300}
                  className="h-56 w-full rounded-2xl object-cover"
                />

                <h3 className="mt-4 text-xl font-bold text-[#8B1E2D]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-[#D4A017]">★★★★★</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-[#1F1F1F]">
                    From {item.price}
                  </span>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B1E2D] text-white">
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-[34px] bg-white p-8 shadow-md">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Customer Love
            </p>

            <h2 className="mt-2 font-serif text-4xl text-[#1F1F1F]">
              What Our Customers Say ♡
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "The best watalappan in Melbourne!",
              "Everyone loved the dessert box.",
              "Tastes absolutely amazing!",
            ].map((review) => (
              <div
                key={review}
                className="rounded-2xl bg-[#FFF8E7] p-6 text-center text-gray-700"
              >
                <p className="text-[#D4A017]">★★★★★</p>
                <p className="mt-3 italic">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + CTA */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="grid gap-4 rounded-[28px] bg-white p-6 shadow-sm md:grid-cols-4">
            {[
              [GiLeafSwirl, "Premium Ingredients", "Always high quality"],
              [GiCupcake, "Made Fresh to Order", "Prepared just for you"],
              [FiTruck, "Pickup & Delivery", "Convenient for you"],
              [FiHeart, "Handcrafted with Love", "Made by our chefs"],
            ].map(([Icon, title, text]: any) => (
              <div key={title} className="text-center">
                <Icon className="mx-auto text-4xl text-[#8B1E2D]" />
                <p className="mt-3 font-semibold text-[#8B1E2D]">{title}</p>
                <p className="mt-1 text-sm text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] bg-[#8B1E2D] p-8 text-white shadow-sm">
            <h2 className="font-serif text-3xl">Need desserts for a party?</h2>
            <p className="mt-2 text-white/80">Build Your Dessert Box</p>

            <Link
              href="#dessert-box"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#FFF8E7] px-6 py-3 font-semibold text-[#8B1E2D]"
            >
              Start Building <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}