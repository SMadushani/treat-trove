"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiHeart,
  FiTruck,
  FiGift,
  FiStar,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const benefits = [
  {
    icon: FiHeart,
    title: "Freshly Made",
    text: "Every cake and dessert is handcrafted to order.",
  },
  {
    icon: FiTruck,
    title: "Melbourne Delivery",
    text: "Pickup and delivery available across Melbourne.",
  },
  {
    icon: FiGift,
    title: "Premium Gift Wrapping",
    text: "Beautifully packaged and ready to gift.",
  },
  {
    icon: FiStar,
    title: "Made with Love",
    text: "Quality ingredients with attention to every detail.",
  },
];

const gallery = [
  "/images/gifts/collections/cake-flowers.jpg",
  "/images/gifts/collections/cake-teddy.jpg",
  "/images/gifts/trending/mum-cupcake-bouquet.jpg",
  "/images/gifts/collections/dessert-boxes.jpg",
  "/images/gifts/collections/luxury-hampers.jpg",
  "/images/gifts/collections/cupcake-bouquets.jpg",
];

export default function GiftFooterSection() {
  return (
    <section className="bg-[#FFF8E7] px-6 py-20">
      <div className="mx-auto max-w-7xl space-y-16">

        {/* WHY CHOOSE */}

        <div>

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Why Choose Treat Trove
            </p>

            <h2 className="mt-3 font-serif text-5xl text-[#1F1F1F]">
              Handmade Gifts They'll Love ♡
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {benefits.map((item)=>{

              const Icon=item.icon;

              return(

                <div
                key={item.title}
                className="rounded-[28px] border border-[#F0DDC8] bg-white p-8 text-center shadow-sm">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0F2] text-[#8B1E2D]">
                    <Icon size={28}/>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {item.text}
                  </p>

                </div>

              )

            })}

          </div>

        </div>

        {/* GALLERY */}

        <div>

          <div className="flex items-end justify-between">

            <div>

              <p className="text-sm uppercase tracking-[4px] text-[#D4A017]">
                Follow Our Sweet Moments
              </p>

              <h2 className="mt-3 font-serif text-5xl">
                @treat.trove
              </h2>

            </div>

            <div className="hidden gap-4 lg:flex">

              <Link href="#">
                <FaFacebookF/>
              </Link>

              <Link href="#">
                <FaInstagram/>
              </Link>

              <Link href="#">
                <FaTiktok/>
              </Link>

            </div>

          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

            {gallery.map((image)=>(
              <div
              key={image}
              className="group relative aspect-square overflow-hidden rounded-3xl">

                <Image
                src={image}
                fill
                alt=""
                className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>
            ))}

          </div>

        </div>

        {/* NEWSLETTER */}

        <div className="overflow-hidden rounded-[40px] bg-[#8B1E2D]">

          <div className="grid items-center gap-10 p-12 lg:grid-cols-2">

            <div>

              <p className="uppercase tracking-[4px] text-[#F7D58A]">
                Stay Connected
              </p>

              <h2 className="mt-3 font-serif text-5xl text-white">
                Never Miss
                <br/>
                New Collections
              </h2>

              <p className="mt-5 max-w-lg text-white/80">
                Be the first to know about seasonal gift collections,
                limited edition cakes and exclusive offers.
              </p>

            </div>

            <div>

              <div className="flex rounded-2xl bg-white p-2">

                <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl px-5 outline-none"/>

                <button className="rounded-xl bg-[#D4A017] px-8 py-4 font-semibold text-white">
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );

}