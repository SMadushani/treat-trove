import Image from "next/image";

const desserts = [
  {
    name: "Watalappan",
    image: "/images/desserts/watalappan1.jpg",
  },
  {
    name: "Caramel Pudding",
    image: "/images/desserts/caramel pudding.jpg",
  },
  {
    name: "Tiramisu",
    image: "/images/desserts/tiramisu.webp",
  },
  {
    name: "Tres Leches",
    image: "/images/desserts/tres-leches.jpg",
  },
  {
    name: "Biscuit Pudding",
    image: "/images/desserts/biscuit-pudding.jpg",
  },
  {
    name: "Jelly Mousse",
    image: "/images/desserts/jelly-mousse.jpg",
  },
];

export default function DessertsSection() {
  return (
    <section className="bg-[#FFF8E7] px-6 pt-6 pb-16">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="font-serif text-4xl text-[#1F1F1F]">
          Our Delicious{" "}
          <span className="italic text-[#D4A017]">Desserts</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {desserts.map((dessert) => (
            <div
              key={dessert.name}
              className="group cursor-pointer text-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                <Image
                  src={dessert.image}
                  alt={dessert.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-4 font-semibold text-[#1F1F1F] group-hover:text-[#8B1E2D]">
                {dessert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}