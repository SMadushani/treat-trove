import Image from "next/image";

const galleryImages = [
  "/images/cake/bdcj5f.jpeg",
  "/images/cake/BDGC 21.jpeg",
  "/images/cake/bdck8.jpeg",
  "/images/cake/bdcr5.jpeg",
];

export default function FeaturedGallery() {
  return (
    <section className="bg-[#FFF8E7] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-[#8B1E2D]">
          Recent Creations
        </h2>

        <p className="mt-4 text-center text-gray-600">
          A little taste of what we create for our lovely customers.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <Image
                src={image}
                alt="Treat Trove cake creation"
                width={400}
                height={400}
                className="h-72 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}