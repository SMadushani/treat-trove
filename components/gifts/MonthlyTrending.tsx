"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { FiArrowRight, FiShoppingCart } from "react-icons/fi";

type GiftProduct = {
  name: string;
  image: string;
  price: number;
  category: string;
};

type MonthlyCampaign = {
  title: string;
  subtitle: string;
  href: string;
  products: GiftProduct[];
};

const monthlyCampaigns: Record<number, MonthlyCampaign> = {
  0: {
    title: "New Year Gifts",
    subtitle: "Fresh starts, thank-you gifts and thoughtful surprises.",
    href: "/gifts?campaign=new-year",
    products: [
      {
        name: "Celebration Dessert Box",
        image: "/images/gifts/trending/celebration-dessert-box.jpg",
        price: 79,
        category: "Dessert Box",
      },
      {
        name: "Thank You Hamper",
        image: "/images/gifts/trending/thank-you-hamper.jpg",
        price: 99,
        category: "Gift Hamper",
      },
      {
        name: "New Beginnings Cake",
        image: "/images/gifts/trending/new-beginnings-cake.jpg",
        price: 115,
        category: "Cake",
      },
      {
        name: "Fresh Start Gift Box",
        image: "/images/gifts/trending/fresh-start-box.jpg",
        price: 89,
        category: "Gift Box",
      },
    ],
  },

  1: {
    title: "Valentine’s Day Gifts",
    subtitle: "Romantic cakes, roses and gifts for someone special.",
    href: "/gifts?campaign=valentines",
    products: [
      {
        name: "Love You Cake Box",
        image: "/images/gifts/trending/love-cake-box.jpg",
        price: 129,
        category: "Cake & Gift",
      },
      {
        name: "Roses & Chocolate Box",
        image: "/images/gifts/trending/roses-chocolate-box.jpg",
        price: 109,
        category: "Romantic Gift",
      },
      {
        name: "Sweetheart Dessert Box",
        image: "/images/gifts/trending/sweetheart-dessert-box.jpg",
        price: 89,
        category: "Dessert Box",
      },
      {
        name: "Romantic Teddy Hamper",
        image: "/images/gifts/trending/romantic-teddy-hamper.jpg",
        price: 139,
        category: "Gift Hamper",
      },
    ],
  },

  2: {
    title: "Gifts for Her",
    subtitle: "Beautiful gifts for the women who inspire you.",
    href: "/gifts?recipient=for-her",
    products: [
      {
        name: "Floral Cake & Roses",
        image: "/images/gifts/trending/floral-cake-roses.jpg",
        price: 129,
        category: "Cake & Flowers",
      },
      {
        name: "Luxury Dessert Hamper",
        image: "/images/gifts/trending/luxury-dessert-hamper.jpg",
        price: 119,
        category: "Gift Hamper",
      },
      {
        name: "Pink Blossom Gift Box",
        image: "/images/gifts/trending/pink-blossom-box.jpg",
        price: 95,
        category: "Gift Box",
      },
      {
        name: "Flowers & Candle Set",
        image: "/images/gifts/trending/flowers-candle-set.jpg",
        price: 84,
        category: "Gift Set",
      },
    ],
  },

  3: {
    title: "Easter Treats",
    subtitle: "Chocolate, cupcakes and family dessert boxes.",
    href: "/gifts?campaign=easter",
    products: [
      {
        name: "Easter Dessert Box",
        image: "/images/gifts/trending/easter-dessert-box.jpg",
        price: 79,
        category: "Dessert Box",
      },
      {
        name: "Chocolate Celebration Box",
        image: "/images/gifts/trending/chocolate-celebration-box.jpg",
        price: 69,
        category: "Chocolate Box",
      },
      {
        name: "Easter Cupcake Set",
        image: "/images/gifts/trending/easter-cupcakes.jpg",
        price: 48,
        category: "Cupcakes",
      },
      {
        name: "Family Easter Hamper",
        image: "/images/gifts/trending/family-easter-hamper.jpg",
        price: 115,
        category: "Gift Hamper",
      },
    ],
  },

  4: {
    title: "Mother’s Day",
    subtitle: "Handcrafted gifts made especially for Mum.",
    href: "/gifts?campaign=mothers-day",
    products: [
      {
        name: "Floral Cake & Dessert Box",
        image: "/images/gifts/trending/mum-floral-cake-box.jpg",
        price: 129,
        category: "Cake & Dessert",
      },
      {
        name: "Mum’s Pamper Hamper",
        image: "/images/gifts/trending/mums-pamper-hamper.jpg",
        price: 139,
        category: "Gift Hamper",
      },
      {
        name: "Cupcake Bouquet for Mum",
        image: "/images/gifts/trending/mum-cupcake-bouquet.jpg",
        price: 79,
        category: "Cupcake Bouquet",
      },
      {
        name: "Luxury Dessert Box",
        image: "/images/gifts/trending/luxury-dessert-box.jpg",
        price: 89,
        category: "Dessert Box",
      },
      {
        name: "Flowers & Candle Gift Set",
        image: "/images/gifts/trending/mum-flowers-candle.jpg",
        price: 74,
        category: "Gift Set",
      },
      {
        name: "Afternoon Tea Gift Box",
        image: "/images/gifts/trending/afternoon-tea-box.jpg",
        price: 99,
        category: "Gift Box",
      },
    ],
  },

  5: {
    title: "Graduation Gifts",
    subtitle: "Celebrate every achievement with a thoughtful gift.",
    href: "/gifts?campaign=graduation",
    products: [
      {
        name: "Graduation Cake Box",
        image: "/images/gifts/trending/graduation-cake-box.jpg",
        price: 119,
        category: "Cake & Gift",
      },
      {
        name: "Graduate Teddy Hamper",
        image: "/images/gifts/trending/graduate-teddy-hamper.jpg",
        price: 109,
        category: "Gift Hamper",
      },
      {
        name: "Congratulations Dessert Box",
        image: "/images/gifts/trending/congratulations-box.jpg",
        price: 79,
        category: "Dessert Box",
      },
      {
        name: "Flowers & Celebration Set",
        image: "/images/gifts/trending/graduation-flowers.jpg",
        price: 95,
        category: "Flowers & Gift",
      },
    ],
  },

  6: {
    title: "Winter Comfort Gifts",
    subtitle: "Cosy boxes, chocolate treats and warm surprises.",
    href: "/gifts?campaign=winter",
    products: [
      {
        name: "Winter Dessert Box",
        image: "/images/gifts/trending/winter-dessert-box.png",
        price: 75,
        category: "Dessert Box",
      },
      {
        name: "Hot Chocolate Gift Set",
        image: "/images/gifts/trending/hot-chocolate-set.png",
        price: 69,
        category: "Gift Set",
      },
      {
        name: "Cosy Candle Hamper",
        image: "/images/gifts/trending/cosy-candle-hamper.png",
        price: 89,
        category: "Gift Hamper",
      },
      {
        name: "Chocolate Comfort Box",
        image: "/images/gifts/trending/chocolate-comfort-box.png",
        price: 72,
        category: "Chocolate Box",
      },
    ],
  },

  7: {
    title: "Father’s Day",
    subtitle: "Premium cakes, chocolate boxes and gifts for Dad.",
    href: "/gifts?campaign=fathers-day",
    products: [
      {
        name: "Dad’s Chocolate Cake Box",
        image: "/images/gifts/trending/dad-chocolate-cake.jpg",
        price: 119,
        category: "Cake & Chocolate",
      },
      {
        name: "Coffee Lover Hamper",
        image: "/images/gifts/trending/coffee-lover-hamper.jpg",
        price: 99,
        category: "Gift Hamper",
      },
      {
        name: "Father’s Day Dessert Box",
        image: "/images/gifts/trending/fathers-day-dessert-box.jpg",
        price: 79,
        category: "Dessert Box",
      },
      {
        name: "Dad’s Premium Gift Set",
        image: "/images/gifts/trending/dads-premium-gift.jpg",
        price: 129,
        category: "Gift Set",
      },
    ],
  },

  8: {
    title: "Spring Gifts",
    subtitle: "Fresh flowers, floral cakes and bright gift boxes.",
    href: "/gifts?campaign=spring",
    products: [
      {
        name: "Spring Floral Cake",
        image: "/images/gifts/trending/spring-floral-cake.jpg",
        price: 115,
        category: "Cake",
      },
      {
        name: "Fresh Flower Gift Box",
        image: "/images/gifts/trending/spring-flower-box.jpg",
        price: 99,
        category: "Flowers",
      },
      {
        name: "Spring Dessert Collection",
        image: "/images/gifts/trending/spring-dessert-box.jpg",
        price: 75,
        category: "Dessert Box",
      },
      {
        name: "Bloom & Candle Set",
        image: "/images/gifts/trending/bloom-candle-set.jpg",
        price: 84,
        category: "Gift Set",
      },
    ],
  },

  9: {
    title: "Halloween Treats",
    subtitle: "Fun cakes, cupcakes and sweet party boxes.",
    href: "/gifts?campaign=halloween",
    products: [
      {
        name: "Halloween Cupcake Box",
        image: "/images/gifts/trending/halloween-cupcakes.jpg",
        price: 55,
        category: "Cupcakes",
      },
      {
        name: "Spooky Dessert Box",
        image: "/images/gifts/trending/spooky-dessert-box.jpg",
        price: 69,
        category: "Dessert Box",
      },
      {
        name: "Halloween Party Cake",
        image: "/images/gifts/trending/halloween-cake.jpg",
        price: 105,
        category: "Cake",
      },
      {
        name: "Trick or Treat Gift Box",
        image: "/images/gifts/trending/trick-or-treat-box.jpg",
        price: 65,
        category: "Gift Box",
      },
    ],
  },

  10: {
    title: "Christmas Pre-Orders",
    subtitle: "Festive hampers, corporate gifts and family treats.",
    href: "/gifts?campaign=christmas",
    products: [
      {
        name: "Christmas Dessert Hamper",
        image: "/images/gifts/trending/christmas-dessert-hamper.jpg",
        price: 119,
        category: "Gift Hamper",
      },
      {
        name: "Corporate Gift Box",
        image: "/images/gifts/trending/corporate-gift-box.jpg",
        price: 95,
        category: "Corporate Gift",
      },
      {
        name: "Festive Cake Collection",
        image: "/images/gifts/trending/festive-cake.jpg",
        price: 129,
        category: "Cake",
      },
      {
        name: "Christmas Family Box",
        image: "/images/gifts/trending/christmas-family-box.jpg",
        price: 109,
        category: "Gift Box",
      },
    ],
  },

  11: {
    title: "Christmas Gifts",
    subtitle: "Premium festive gifts made for sharing.",
    href: "/gifts?campaign=christmas",
    products: [
      {
        name: "Luxury Christmas Hamper",
        image: "/images/gifts/trending/luxury-christmas-hamper.jpg",
        price: 149,
        category: "Gift Hamper",
      },
      {
        name: "Christmas Cake & Dessert Box",
        image: "/images/gifts/trending/christmas-cake-box.jpg",
        price: 139,
        category: "Cake & Dessert",
      },
      {
        name: "Festive Chocolate Box",
        image: "/images/gifts/trending/festive-chocolate-box.jpg",
        price: 79,
        category: "Chocolate Box",
      },
      {
        name: "Family Celebration Hamper",
        image: "/images/gifts/trending/family-celebration-hamper.jpg",
        price: 129,
        category: "Gift Hamper",
      },
    ],
  },
};

export default function MonthlyTrending() {
  const campaign = useMemo(() => {
    const currentMonth = new Date().getMonth();
    return monthlyCampaigns[currentMonth];
  }, []);

  return (
    <section className="bg-white px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
              Popular right now
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#1F1F1F] md:text-5xl">
              Trending This Month
              <span className="text-[#8B1E2D]"> — {campaign.title}</span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              {campaign.subtitle}
            </p>
          </div>

          <Link
            href={campaign.href}
            className="inline-flex w-fit items-center gap-2 font-semibold text-[#8B1E2D] transition hover:gap-3"
          >
            View full collection
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {campaign.products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[24px] border border-[#F0DDC8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={campaign.href} className="block">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#8B1E2D] shadow-sm backdrop-blur">
                    {product.category}
                  </span>
                </div>
              </Link>

              <div className="p-4">
                <h3 className="min-h-[48px] font-semibold leading-6 text-[#1F1F1F]">
                  {product.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-[#8B1E2D]">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B1E2D] text-white transition hover:bg-[#6E1723]"
                  >
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}   