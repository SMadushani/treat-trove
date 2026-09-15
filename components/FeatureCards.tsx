import {
    GiArtificialIntelligence,
    GiCakeSlice,
    GiCalendar,
    GiDeliveryDrone,
    GiDiamondHard,
    GiHearts,
  } from "react-icons/gi";
  
  const features = [
    {
      icon: GiCakeSlice,
      title: "Custom Designs",
      text: "Your vision, beautifully crafted",
    },
    {
      icon: GiDiamondHard,
      title: "Premium Quality",
      text: "The finest ingredients for the best taste",
    },
    {
      icon: GiDeliveryDrone,
      title: "Delivery Available",
      text: "Safe & timely delivery across Melbourne",
    },
    {
      icon: GiCalendar,
      title: "Advance Booking",
      text: "Book in advance for your special day",
    },
    {
      icon: GiArtificialIntelligence,
      title: "AI Cake Preview",
      text: "See your cake come to life before order",
    },
    {
      icon: GiHearts,
      title: "Made With Love",
      text: "Every cake is baked with passion",
    },
  ];
  
  export default function FeatureCards() {
    return (
      <section className="bg-[#FFF8E7] px-6 py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_rgba(0,0,0,0.10)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="flex min-h-[150px] flex-col items-center justify-center px-5 py-6 text-center lg:border-r lg:border-[#8B1E2D]/10 last:border-r-0"
                >
                  <Icon className="text-[#8B1E2D]" size={34} />
  
                  <h3 className="mt-3 text-sm font-bold text-[#8B1E2D]">
                    {feature.title}
                  </h3>
  
                  <p className="mt-2 max-w-[150px] text-xs leading-5 text-gray-600">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  
  }