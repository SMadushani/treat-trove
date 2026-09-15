import CakeCard from "./CakeCard";
import { cakes } from "./ProductData";

type ProductGridProps = {
  selectedCategory: string;
};

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const filteredCakes =
    selectedCategory === "All Cakes"
      ? cakes
      : cakes.filter((cake) => cake.category === selectedCategory);

  return (
    <section className="bg-[#FFF8E7] px-6 pt-8 pb-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>

        {filteredCakes.length === 0 && (
          <p className="mt-10 text-center text-gray-600">
            No cakes available in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}