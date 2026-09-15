const features = [
    {
      title: "Custom Designs",
      description: "Every cake is designed to match your celebration perfectly.",
    },
    {
      title: "Premium Ingredients",
      description: "Fresh ingredients and quality products in every creation.",
    },
    {
      title: "Pickup & Delivery",
      description: "Convenient pickup or delivery across Melbourne.",
    },
    {
      title: "Made With Love",
      description: "Handcrafted desserts made with passion and attention to detail.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#8B1E2D]">
            Why Choose Treat Trove?
          </h2>
  
          <p className="text-center text-gray-600 mt-4">
            Making every celebration sweeter.
          </p>
  
          <div className="grid md:grid-cols-4 gap-8 mt-14">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl shadow-sm border"
              >
                <h3 className="text-xl font-semibold text-[#8B1E2D]">
                  {feature.title}
                </h3>
  
                <p className="text-gray-600 mt-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }