"use client";

const categories = [
  "All Cakes",
  "Birthday",
  "Wedding",
  "Anniversary",
  "Cupcakes",
  "Special Events",
];

type CategoryFilterProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <section className="bg-[#FFF8E7] px-6 pb-10">
      <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-6 py-3 font-medium transition ${
              selectedCategory === category
                ? "bg-[#8B1E2D] text-white"
                : "bg-white text-[#8B1E2D] shadow hover:bg-[#8B1E2D] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}