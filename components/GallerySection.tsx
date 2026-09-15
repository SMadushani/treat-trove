import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="bg-[#FFF8E7] px-6 py-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          {/* LEFT TEXT */}
          <div className="rounded-[28px] bg-white p-8 shadow-md">
            <h2 className="font-serif text-4xl text-[#1F1F1F]">
              Our <span className="italic text-[#D4A017]">Gallery</span>
            </h2>

            <p className="mt-4 text-gray-600">
              A glimpse of our beautiful custom cakes, cupcakes and desserts
              crafted for special celebrations.
            </p>

            <a
              href="/gallery"
              className="mt-8 inline-block rounded-xl bg-[#8B1E2D] px-7 py-3 font-semibold text-white transition hover:bg-[#6E1723]"
            >
              Explore Gallery →
            </a>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr_0.7fr]">
            <div className="overflow-hidden rounded-[28px] shadow-md">
              <Image
                src="/images/cake/bdcj5f.jpeg"
                alt="Treat Trove birthday cake"
                width={600}
                height={700}
                className="h-[550px] w-full object-cover transition-all duration-300 hover:brightness-105"
              />
            </div>

            <div className="overflow-hidden rounded-[28px] shadow-md">
              <Image
                src="/images/cake/bdcr2.png"
                alt="Treat Trove car theme cake"
                width={600}
                height={700}
                className="h-[550px] w-full object-cover transition-all duration-300 hover:brightness-105"
              />
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[24px] shadow-md">
                <Image
                  src="/images/cake/bdcd35.png"
                  alt="Treat Trove cupcake bouquet"
                  width={400}
                  height={300}
                  className="h-[265px] w-full object-cover transition-all duration-300 hover:brightness-105"
                />
              </div>

              <div className="overflow-hidden rounded-[24px] shadow-md">
                <Image
                  src="/images/cake/bdcr5.jpeg"
                  alt="Treat Trove princess cake"
                  width={400}
                  height={300}
                  className="h-[265px] w-full object-cover transition-all duration-300 hover:brightness-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}