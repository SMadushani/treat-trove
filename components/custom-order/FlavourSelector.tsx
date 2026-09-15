const flavours = [
    "Chocolate",
    "Vanilla",
    "Butter Cake",
    "Red Velvet",
    "Coffee",
    "Strawberry",
    "Mocha",
    "Marble",
  ];
  
  export default function FlavourSelector() {
    return (
      <section className="bg-[#FFF8E7] px-6 pb-10">
        <div className="mx-auto max-w-[1100px] rounded-[32px] bg-white p-8 shadow-md">
          <h2 className="font-serif text-3xl text-[#1F1F1F]">
            Cake Flavour
          </h2>
  
          <p className="mt-2 text-gray-600">
            Select your preferred cake flavour.
          </p>
  
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {flavours.map((flavour) => (
              <button
                key={flavour}
                className="rounded-2xl border border-[#8B1E2D]/20 bg-[#FFF8E7] px-5 py-4 font-semibold text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white"
              >
                {flavour}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }