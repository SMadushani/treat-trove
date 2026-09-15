"use client";

import Image from "next/image";
import Link from "next/link";
import { HiX } from "react-icons/hi";

type Cake = {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  featured?: boolean;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  flavours: string[];
  pickup: boolean;
  delivery: boolean;
  notice: string;
};

type CakeDetailModalProps = {
  cake: Cake;
  onClose: () => void;
};

export default function CakeDetailModal({
  cake,
  onClose,
}: CakeDetailModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 rounded-full bg-white p-2 text-[#8B1E2D] shadow-md"
        >
          <HiX size={24} />
        </button>

        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative h-[430px]">
            <Image
              src={cake.image}
              alt={cake.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#D4A017]">
              {cake.category}
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#1F1F1F]">
              {cake.name}
            </h2>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-lg text-[#D4A017]">
                {"★".repeat(cake.rating)}
              </span>
              <span className="text-sm text-gray-500">
                ({cake.reviews} Reviews)
              </span>
            </div>

            <p className="mt-4 text-lg font-bold text-[#8B1E2D]">
              Starting from ${cake.price}
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              {cake.description}
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-[#8B1E2D]">
                Available Sizes
              </h3>

              <div className="mt-3 flex flex-wrap gap-3">
                {cake.sizes.map((size, index) => (
                  <span
                    key={size}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      index === 0
                        ? "border-[#8B1E2D] bg-[#8B1E2D] text-white"
                        : "border-[#8B1E2D]/30 text-gray-700"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[#8B1E2D]">
                Available Flavours
              </h3>

              <div className="mt-3 flex flex-wrap gap-3">
                {cake.flavours.map((flavour) => (
                  <span
                    key={flavour}
                    className="rounded-full border border-[#D4A017] px-4 py-2 text-sm text-gray-700"
                  >
                    {flavour}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-2 text-gray-600">
              {cake.pickup && <p>✓ Pick-up Available</p>}
              {cake.delivery && <p>✓ Delivery Available</p>}
              <p>⏰ {cake.notice}</p>
            </div>

            <Link
              href="/custom-cakes"
              className="mt-8 block rounded-xl bg-[#8B1E2D] px-6 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#6E1723]"
            >
              Customize & Order →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}