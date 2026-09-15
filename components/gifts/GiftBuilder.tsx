"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  FiCheck,
  FiGift,
  FiMinus,
  FiPlus,
  FiShoppingCart,
} from "react-icons/fi";

type MainItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type ExtraItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const mainItems: MainItem[] = [
  {
    id: "mini-cake",
    name: "Mini Celebration Cake",
    price: 55,
    image: "/images/gifts/builder/mini-cake.png",
  },
  {
    id: "cupcakes",
    name: "Cupcake Box",
    price: 36,
    image: "/images/gifts/builder/cupcake-box.png",
  },
  {
    id: "dessert-box",
    name: "Dessert Box",
    price: 42,
    image: "/images/gifts/builder/dessert-box.png",
  },
  {
    id: "watalappan",
    name: "Watalappan Box",
    price: 38,
    image: "/images/gifts/builder/watalappan-box.png",
  },
];

const extras: ExtraItem[] = [
  {
    id: "flowers",
    name: "Fresh Flowers",
    price: 35,
    image: "/images/gifts/builder/flowers.png",
  },
  {
    id: "teddy",
    name: "Teddy Bear",
    price: 22,
    image: "/images/gifts/builder/teddy.png",
  },
  {
    id: "candle",
    name: "Scented Candle",
    price: 18,
    image: "/images/gifts/builder/candle.png",
  },
  {
    id: "chocolates",
    name: "Chocolate Box",
    price: 24,
    image: "/images/gifts/builder/chocolates.png",
  },
  {
    id: "balloon",
    name: "Celebration Balloon",
    price: 12,
    image: "/images/gifts/builder/balloon.png",
  },
  {
    id: "card",
    name: "Greeting Card",
    price: 6,
    image: "/images/gifts/builder/card.png",
  },
];

export default function GiftBuilder() {
  const [selectedMain, setSelectedMain] = useState<MainItem>(mainItems[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([
    "flowers",
    "teddy",
  ]);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const selectedExtraItems = useMemo(
    () => extras.filter((item) => selectedExtras.includes(item.id)),
    [selectedExtras],
  );

  const extrasTotal = useMemo(
    () =>
      selectedExtraItems.reduce((sum, item) => sum + item.price, 0),
    [selectedExtraItems],
  );

  const total = useMemo(
    () => (selectedMain.price + extrasTotal) * quantity,
    [selectedMain.price, extrasTotal, quantity],
  );

  const toggleExtra = (id: string) => {
    setSelectedExtras((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  return (
    <section
  id="gift-builder"
  className="bg-[#FFF8E7] px-5 py-16 sm:px-6 lg:py-20"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
        Personalise every detail
      </p>

      <h2 className="mt-3 font-serif text-4xl text-[#1F1F1F] md:text-5xl">
        Create Your Own Gift Box
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        Start with a Treat Trove cake, cupcake box or dessert, then add your
        favourite gift extras and personalised message.
      </p>
    </div>

    <div className="overflow-hidden rounded-[34px] border border-[#F0DDC8] bg-white shadow-sm">
      {/* Progress */}
      <div className="grid border-b border-[#F0DDC8] bg-[#FFF0F2] md:grid-cols-4">
        {[
          "Choose Treat",
          "Add Extras",
          "Personalise",
          "Review & Add",
        ].map((step, index) => (
          <div
            key={step}
            className="flex items-center justify-center gap-3 border-b border-[#F0DDC8] px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1E2D] text-sm font-bold text-white">
              {index + 1}
            </span>

            <span className="font-semibold text-[#1F1F1F]">{step}</span>
          </div>
        ))}
      </div>

      {/* Step 1 */}
      <div className="border-b border-[#F0DDC8] p-6 lg:p-8">
        <h3 className="font-serif text-3xl text-[#1F1F1F]">
          1. Choose Your Treat Trove Item
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mainItems.map((item) => {
            const isSelected = selectedMain.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedMain(item)}
                className={`overflow-hidden rounded-2xl border bg-white text-left transition ${
                  isSelected
                    ? "border-[#8B1E2D] shadow-md"
                    : "border-[#F0DDC8] hover:border-[#8B1E2D]/50"
                }`}
              >
                <div className="relative h-44">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                  {isSelected && (
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1E2D] text-white">
                      <FiCheck />
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <p className="font-semibold text-[#1F1F1F]">{item.name}</p>
                  <p className="mt-2 font-bold text-[#8B1E2D]">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2 */}
      <div className="border-b border-[#F0DDC8] bg-[#FFF8F7] p-6 lg:p-8">
        <h3 className="font-serif text-3xl text-[#1F1F1F]">
          2. Add Gift Extras
        </h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {extras.map((item) => {
            const isSelected = selectedExtras.includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleExtra(item.id)}
                className={`relative overflow-hidden rounded-2xl border bg-white text-left transition ${
                  isSelected
                    ? "border-[#8B1E2D] shadow-md"
                    : "border-[#F0DDC8] hover:border-[#8B1E2D]/50"
                }`}
              >
                <div className="relative h-32">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3">
                  <p className="text-sm font-semibold text-[#1F1F1F]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#8B1E2D]">
                    +${item.price.toFixed(2)}
                  </p>
                </div>

                <span
                  className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full ${
                    isSelected
                      ? "bg-[#8B1E2D] text-white"
                      : "bg-white text-[#8B1E2D]"
                  }`}
                >
                  {isSelected ? <FiCheck /> : <FiPlus />}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3 + Summary */}
      <div className="grid gap-8 p-6 lg:grid-cols-[1fr_420px] lg:p-8">
        <div>
          <h3 className="font-serif text-3xl text-[#1F1F1F]">
            3. Personalise Your Gift
          </h3>

          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            maxLength={180}
            placeholder="Write a short message for the greeting card..."
            className="mt-5 w-full resize-none rounded-2xl border border-[#F0DDC8] bg-white px-4 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#8B1E2D]"
          />

          <p className="mt-2 text-right text-xs text-gray-500">
            {message.length}/180
          </p>

          <div className="mt-5 flex items-center rounded-xl border border-[#F0DDC8] bg-white">
            <button
              type="button"
              onClick={() =>
                setQuantity((current) => Math.max(1, current - 1))
              }
              className="flex h-12 w-12 items-center justify-center text-[#8B1E2D]"
            >
              <FiMinus />
            </button>

            <span className="min-w-12 text-center font-bold">{quantity}</span>

            <button
              type="button"
              onClick={() => setQuantity((current) => current + 1)}
              className="flex h-12 w-12 items-center justify-center text-[#8B1E2D]"
            >
              <FiPlus />
            </button>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#8B1E2D] p-6 text-white shadow-md">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Your Gift Summary
          </p>

          <h4 className="mt-3 font-serif text-2xl">{selectedMain.name}</h4>

          <div className="mt-5 space-y-3 border-b border-white/20 pb-5 text-sm">
            <div className="flex justify-between">
              <span className="text-white/70">Main item</span>
              <span>${selectedMain.price.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/70">Gift extras</span>
              <span>${extrasTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/70">Quantity</span>
              <span>{quantity}</span>
            </div>
          </div>

          <div className="mt-5 flex items-end justify-between">
            <span className="text-white/75">Total</span>
            <span className="text-3xl font-bold">${total.toFixed(2)}</span>
          </div>

          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-[#8B1E2D] transition hover:bg-[#FFF8E7]"
          >
            <FiShoppingCart />
            Add Gift to Cart
          </button>

          <p className="mt-3 text-center text-xs text-white/60">
            Gift wrapping included. Delivery calculated at checkout.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}