"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import CakeDetailModal from "./CakeDetailModal";

type Cake = {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  featured?: boolean;
  rating?: number;
  description: string;
  sizes: string[];
};

interface CakeCardProps {
  cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden">
          {cake.featured && (
            <div className="absolute left-3 top-3 z-10 rounded-full bg-[#D4A017] px-3 py-1 text-xs font-bold uppercase text-white shadow">
              Best Seller
            </div>
          )}

          <Image
            src={cake.image}
            alt={cake.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-3 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
            {cake.category}
          </p>

          <h3 className="text-xl font-semibold text-[#8B1E2D]">
            {cake.name}
          </h3>

          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-sm ${
                  star <= (cake.rating ?? 5)
                    ? "text-[#D4A017]"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="font-bold text-gray-700">
            Starting from ${cake.price}
          </p>

          <div className="space-y-3 pt-2">
            <Link
              href="/custom-cakes"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#8B1E2D] py-3 font-semibold text-white transition hover:bg-[#6E1723]"
            >
              Order Now
              <FaShoppingBag />
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="w-full rounded-xl border border-[#8B1E2D] py-3 font-semibold text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <CakeDetailModal
          cake={cake}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}