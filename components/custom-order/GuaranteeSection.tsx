import {
    FiCheckCircle,
    FiClock,
    FiGift,
    FiShield,
    FiTruck,
  } from "react-icons/fi";
  
  const guarantees = [
    {
      icon: FiCheckCircle,
      title: "Made Fresh",
      text: "Every order is prepared fresh for your celebration.",
    },
    {
      icon: FiShield,
      title: "Premium Ingredients",
      text: "Quality ingredients for beautiful taste and texture.",
    },
    {
      icon: FiGift,
      title: "Custom Design",
      text: "Your colours, theme and message are carefully matched.",
    },
    {
      icon: FiTruck,
      title: "Pickup & Delivery",
      text: "Pickup and selected Melbourne delivery options available.",
    },
    {
      icon: FiClock,
      title: "Advance Orders",
      text: "Please order early so we can prepare everything perfectly.",
    },
  ];
  
  export default function GuaranteeSection() {
    return (
      <section className="bg-[#FFF8E7] px-6 pb-20">
        <div className="mx-auto max-w-[1500px] rounded-[32px] bg-[#FFF3F0] p-8 shadow-md">
          <h2 className="text-center font-serif text-4xl text-[#1F1F1F]">
            Our Promise To{" "}
            <span className="italic text-[#D4A017]">You</span>
          </h2>
  
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {guarantees.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <Icon className="mx-auto text-[#8B1E2D]" size={34} />
  
                  <h3 className="mt-4 font-semibold text-[#8B1E2D]">
                    {item.title}
                  </h3>
  
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }