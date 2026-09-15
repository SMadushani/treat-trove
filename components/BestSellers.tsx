import Image from "next/image";

const products = [
  {
    name: "Custom Birthday Cake",
    price: "Starting from $90",
    description: "Personalised cakes for birthdays and special celebrations.",
    image: "/images/cake/bdcj5f.jpeg",
  },
  {
    name: "Cupcakes Bouquet",
    price: "Starting from $35",
    description: "Beautifully decorated cupcakes made fresh to order.",
    image: "/images/cake/Cupcake-Flower-Bouquet.jpg",
  },
  {
    name: "Watalappan",
    price: "Starting from $8",
    description: "Traditional Sri Lankan coconut jaggery dessert.",
    image: "/images/desserts/watalappan.jpg",
  },
  {
    name: "Caramel Pudding",
    price: "Starting from $7",
    description: "Rich, creamy pudding topped with caramel glaze.",
    image: "/images/desserts/caramel pudding.jpg",
  },
];

export default function BestSellers() {
  return (
    <section className="bg-[#FFF8E7] px-6 py-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="font-serif text-4xl text-[#1F1F1F]">
            Customer{" "}
            <span className="italic text-[#8B1E2D]">Favorites</span>
          </h2>

          <a
            href="/products"
            className="rounded-full border border-[#8B1E2D] px-6 py-3 text-sm font-semibold text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white"
          >
            View All →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={350}
                className="h-64 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-[#8B1E2D]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>

                <p className="mt-3 text-sm font-semibold text-gray-800">
                  {product.price}
                </p>

                <a
                  href="/custom-cakes"
                  className="mt-5 inline-block rounded-lg bg-[#8B1E2D] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#6E1723]"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}