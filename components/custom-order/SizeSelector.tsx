const sizes = [
    "1kg",
    "2kg",
    "3kg",
    "4kg+",
    "Serves 10",
    "Serves 20",
  ];
  
  export default function SizeSelector() {
    return (
      <section className="bg-[#FFF8E7] px-6 pb-10">
        <div className="mx-auto max-w-[1100px] rounded-[32px] bg-white p-8 shadow-md">
          <h2 className="font-serif text-3xl text-[#1F1F1F]">
            Cake Size
          </h2>
  
          <p className="mt-2 text-gray-600">
            Choose by weight or number of servings.
          </p>
  
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {sizes.map((size) => (
              <button
                key={size}
                className="rounded-2xl border border-[#8B1E2D]/20 bg-[#FFF8E7] px-5 py-4 font-semibold text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }