import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiEdit3,
  FiGift,
  FiLock,
  FiMinus,
  FiPlus,
  FiShield,
  FiShoppingBag,
  FiTrash2,
  FiTruck,
} from "react-icons/fi";
import { GiCakeSlice, GiCupcake } from "react-icons/gi";

const customCake = {
  name: "Floral Birthday Cake",
  image: "/images/cake/cakes-hero.png",
  inspiration: "/images/cake/cakes-hero.png",
  priceRange: "$120 – $150",
  details: [
    ["Shape", "Round"],
    ["Layers", "Two Tier"],
    ["Servings", "20 Portions"],
    ["Flavour", "Chocolate"],
    ["Filling", "Chocolate Ganache"],
    ["Colour Theme", "Pink"],
    ["Pickup Date", "24 July 2026"],
    ["Special Message", "Happy Birthday Emma"],
  ],
};

const desserts = [
  {
    id: 1,
    name: "Vanilla Cupcakes",
    image: "/images/cake/bdcd35.png",
    price: 36,
    qty: 1,
    details: [
      ["Flavour", "Vanilla"],
      ["Decoration", "Buttercream Flowers"],
      ["Packaging", "Gift Box"],
    ],
  },
];

export default function CartPage() {
  const dessertTotal = desserts.reduce((sum, item) => sum + item.price * item.qty, 0);
  const customCakeEstimated = 120;
  const serviceFee = 3;
  const estimatedTotal = customCakeEstimated + dessertTotal + serviceFee;

  return (
    <main className="bg-[#FFF8E7] px-6 py-14">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-[#8B1E2D]">Home</Link>
              <span>›</span>
              <span className="text-[#8B1E2D]">Cart</span>
            </div>

            <h1 className="font-serif text-5xl text-[#1F1F1F]">
              Shopping <span className="italic text-[#D4A017]">Cart</span>
            </h1>

            <p className="mt-3 text-gray-600">
              Review your cake request and desserts before continuing.
            </p>
          </div>

          <Link
            href="/cakes"
            className="hidden rounded-xl border border-[#8B1E2D] px-5 py-3 font-semibold text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white md:block"
          >
            ← Continue Shopping
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_430px]">
          <section className="space-y-6">
            <div className="rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-md">
              <div className="grid gap-6 xl:grid-cols-[280px_1fr_220px]">
                <div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={customCake.image}
                      alt={customCake.name}
                      width={320}
                      height={260}
                      className="h-[230px] w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[#D4A017] px-3 py-1 text-xs font-bold text-white">
                      AI PREVIEW
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="overflow-hidden rounded-xl border bg-[#FFF8E7]">
                      <Image
                        src={customCake.inspiration}
                        alt="Uploaded inspiration"
                        width={130}
                        height={90}
                        className="h-[90px] w-full object-cover"
                      />
                      <p className="py-2 text-center text-xs text-gray-600">
                        Inspiration
                      </p>
                    </div>

                    <button className="rounded-xl border border-[#F0DDC8] text-sm font-semibold text-[#8B1E2D] transition hover:bg-[#FFF8E7]">
                      View Full
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-serif text-2xl text-[#1F1F1F]">
                      {customCake.name}
                    </h2>
                    <span className="rounded-full bg-[#FFF0EA] px-3 py-1 text-xs font-bold text-[#8B1E2D]">
                      Custom Cake
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                    {customCake.details.map(([label, value]) => (
                      <div key={label} className="flex gap-2">
                        <GiCakeSlice className="mt-1 text-[#8B1E2D]" />
                        <p>
                          <span className="font-semibold text-gray-700">{label}: </span>
                          <span className="text-gray-600">{value}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FFF8E7] px-4 py-3 text-sm font-semibold text-[#8B1E2D]">
                    <FiShield />
                    Chef Review Required
                  </div>
                </div>

                <div className="flex flex-col justify-between border-l border-[#F0DDC8] pl-6">
                  <div>
                    <p className="text-sm text-gray-500">Estimated Price</p>
                    <p className="mt-2 text-3xl font-bold text-[#8B1E2D]">
                      {customCake.priceRange}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <button className="flex items-center gap-2 font-semibold text-[#8B1E2D]">
                      <FiEdit3 /> Edit Design
                    </button>

                    <button className="flex items-center gap-2 font-semibold text-[#8B1E2D]">
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {desserts.map((item) => (
              <div
                key={item.id}
                className="rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-md"
              >
                <div className="grid gap-6 md:grid-cols-[230px_1fr_170px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={240}
                    height={180}
                    className="h-[170px] w-full rounded-2xl object-cover"
                  />

                  <div>
                    <h2 className="font-serif text-2xl text-[#1F1F1F]">
                      {item.name}
                    </h2>

                    <div className="mt-4 space-y-2 text-sm">
                      {item.details.map(([label, value]) => (
                        <p key={label} className="flex gap-2 text-gray-600">
                          <GiCupcake className="mt-1 text-[#8B1E2D]" />
                          <span>
                            <strong>{label}:</strong> {value}
                          </span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <p className="text-2xl font-bold text-[#1F1F1F]">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center rounded-xl border border-[#F0DDC8]">
                      <button className="px-4 py-3 text-[#8B1E2D]">
                        <FiMinus />
                      </button>
                      <span className="border-x px-5 py-2 font-semibold">
                        {item.qty}
                      </span>
                      <button className="px-4 py-3 text-[#8B1E2D]">
                        <FiPlus />
                      </button>
                    </div>

                    <button className="flex items-center gap-2 font-semibold text-[#8B1E2D]">
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/custom-cakes"
                className="rounded-2xl border border-dashed border-[#D4A017] bg-white p-6 text-center font-semibold text-[#8B1E2D] transition hover:bg-[#FFF8E7]"
              >
                + Add Another Custom Cake
              </Link>

              <Link
                href="/desserts"
                className="rounded-2xl border border-dashed border-[#D4A017] bg-white p-6 text-center font-semibold text-[#8B1E2D] transition hover:bg-[#FFF8E7]"
              >
                + Add Desserts
              </Link>

              <button className="rounded-2xl border border-[#F0DDC8] bg-white p-6 text-center font-semibold text-[#8B1E2D] transition hover:bg-[#FFF8E7]">
                <FiGift className="mx-auto mb-2 text-2xl" />
                Add Gift Message
              </button>
            </div>
          </section>

          <aside className="h-fit rounded-[28px] border border-[#F0DDC8] bg-white p-7 shadow-md lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl text-[#1F1F1F]">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>Custom Cakes (1)</span>
                <span>${customCakeEstimated.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Desserts (1)</span>
                <span>${dessertTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>After address</span>
              </div>

              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between border-t border-[#F0DDC8] pt-5 text-2xl font-bold text-[#8B1E2D]">
              <span>Total</span>
              <span>${estimatedTotal.toFixed(2)}</span>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Final custom cake price confirmed after chef review.
            </p>

            <div className="mt-6 rounded-2xl bg-[#FFF8E7] p-5 text-sm text-gray-700">
              <p className="font-semibold text-[#8B1E2D]">
                Custom cake pricing may change after review based on:
              </p>

              <ul className="mt-3 space-y-2">
                <li>✓ Design complexity</li>
                <li>✓ Decorations and toppers</li>
                <li>✓ Delivery suburb</li>
                <li>✓ Final design discussion</li>
              </ul>
            </div>

            <Link
              href="/checkout"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#8B1E2D] py-4 text-lg font-semibold text-white transition hover:bg-[#6E1723]"
            >
              <FiLock /> Continue
            </Link>

            <div className="mt-6 border-t border-[#F0DDC8] pt-5">
              <p className="mb-4 font-semibold text-[#1F1F1F]">Next Steps</p>

              <div className="grid grid-cols-4 gap-3 text-center text-xs text-gray-600">
                <div>
                  <FiShoppingBag className="mx-auto text-xl text-[#8B1E2D]" />
                  <p className="mt-2">Details</p>
                </div>

                <div>
                  <GiCakeSlice className="mx-auto text-xl text-[#8B1E2D]" />
                  <p className="mt-2">Review</p>
                </div>

                <div>
                  <FiEdit3 className="mx-auto text-xl text-[#8B1E2D]" />
                  <p className="mt-2">Quote</p>
                </div>

                <div>
                  <FiLock className="mx-auto text-xl text-[#8B1E2D]" />
                  <p className="mt-2">Payment</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 rounded-[28px] bg-white p-6 shadow-sm md:grid-cols-5">
          {[
            ["Made Fresh", "To Order"],
            ["Premium", "Ingredients"],
            ["Secure", "Checkout"],
            ["Pickup &", "Delivery"],
            ["Satisfaction", "Guaranteed"],
          ].map(([title, subtitle]) => (
            <div key={title} className="text-center text-[#8B1E2D]">
              <FiTruck className="mx-auto mb-2 text-2xl" />
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}