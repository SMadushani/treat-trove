import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type GiftCollection = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const giftCollections: GiftCollection[] = [
  {
    title: "Cake + Flowers",
    description:
      "Elegant celebration cakes paired with beautiful fresh flowers.",
    image: "/images/gifts/collections/cake-flowers.jpg",
    href: "/gifts?collection=cake-flowers",
  },
  {
    title: "Cake + Teddy",
    description:
      "Handcrafted cakes combined with a soft teddy bear and gift wrapping.",
    image: "/images/gifts/collections/cake-teddy.jpg",
    href: "/gifts?collection=cake-teddy",
  },
  {
    title: "Dessert Gift Boxes",
    description:
      "A delicious selection of handcrafted desserts, beautifully presented.",
    image: "/images/gifts/collections/dessert-boxes.jpg",
    href: "/gifts?collection=dessert-boxes",
  },
  {
    title: "Cupcake Bouquets",
    description:
      "Beautifully arranged cupcakes designed to look like a floral bouquet.",
    image: "/images/gifts/collections/cupcake-bouquets.jpg",
    href: "/gifts?collection=cupcake-bouquets",
  },
  {
    title: "Traditional Dessert Gifts",
    description:
      "Watalappan, caramel pudding and traditional favourites made for gifting.",
    image: "/images/gifts/collections/traditional-desserts.jpg",
    href: "/gifts?collection=traditional-desserts",
  },
  {
    title: "Luxury Gift Hampers",
    description:
      "Premium cakes and desserts combined with thoughtful gift extras.",
    image: "/images/gifts/collections/luxury-hampers.jpg",
    href: "/gifts?collection=luxury-hampers",
  },
];

export default function GiftCollections() {
  return (
    <section className="bg-white px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
              Featured gift collections
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#1F1F1F] md:text-5xl">
              Shop Our Most Loved Gift Collections
              <span className="ml-2 text-[#8B1E2D]">♡</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Every collection begins with a handcrafted Treat Trove cake,
              cupcake box or dessert and is finished with thoughtful extras.
            </p>
          </div>

          <Link
            href="/gifts?collection=all"
            className="inline-flex w-fit items-center gap-2 font-semibold text-[#8B1E2D] transition hover:gap-3"
          >
            View all collections
            <FiArrowRight />
          </Link>
        </div>

        {/* Collection cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {giftCollections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group"
            >
              <article className="h-full overflow-hidden rounded-[26px] border border-[#F0DDC8] bg-[#FFF8E7] shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#8B1E2D] text-white shadow-md">
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="font-serif text-xl text-[#1F1F1F] transition group-hover:text-[#8B1E2D]">
                    {collection.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {collection.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8B1E2D]">
                    Explore collection
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}