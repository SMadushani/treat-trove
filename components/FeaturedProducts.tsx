const products = [
    {
      title: "Custom Cakes",
      description: "Personalised cakes for birthdays, weddings and special events.",
    },
    {
      title: "Dessert Boxes",
      description: "Beautiful sweet boxes for gifting, parties and celebrations.",
    },
    {
      title: "Cupcakes",
      description: "Soft, fresh cupcakes with custom colours and decorations.",
    },
    {
      title: "Party Desserts",
      description: "Mini desserts, puddings and treats for your event table.",
    },
  ];
  
  export default function FeaturedProducts() {
    return (
      <section className="bg-[#FFF8E7] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-[#8B1E2D]">
            What We Create
          </h2>
  
          <p className="mt-4 text-gray-600">
            Freshly made cakes and desserts for every celebration.
          </p>
  
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-2xl border border-[#8B1E2D]/20 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#8B1E2D]">
                  {product.title}
                </h3>
  
                <p className="mt-3 text-sm text-gray-600">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }