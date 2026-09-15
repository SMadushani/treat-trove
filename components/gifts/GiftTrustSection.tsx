import {
    FiCheckCircle,
    FiClock,
    FiGift,
    FiHeart,
    FiMapPin,
    FiMessageCircle,
    FiPackage,
    FiTruck,
  } from "react-icons/fi";
  
  const deliveryFeatures = [
    {
      icon: FiTruck,
      title: "Melbourne Delivery",
      description:
        "Delivery is available across selected Melbourne suburbs.",
    },
    {
      icon: FiMapPin,
      title: "Pickup Available",
      description:
        "Choose a convenient pickup time when completing your order.",
    },
    {
      icon: FiClock,
      title: "Made to Order",
      description:
        "Every cake, cupcake and dessert is prepared fresh for your order.",
    },
    {
      icon: FiGift,
      title: "Gift Ready",
      description:
        "Beautiful packaging and gift presentation are included.",
    },
  ];
  
  const reasons = [
    {
      icon: FiHeart,
      title: "Handcrafted With Love",
      description:
        "Every gift begins with a handcrafted Treat Trove cake, cupcake or dessert.",
    },
    {
      icon: FiPackage,
      title: "Premium Presentation",
      description:
        "Your order is carefully arranged and beautifully packaged for gifting.",
    },
    {
      icon: FiMessageCircle,
      title: "Personalised Message",
      description:
        "Add a thoughtful greeting-card message to make the gift more meaningful.",
    },
    {
      icon: FiCheckCircle,
      title: "Easy Customisation",
      description:
        "Choose your main treat, add extras and review the complete gift before checkout.",
    },
  ];
  
  export default function GiftTrustSection() {
    return (
      <section className="bg-white px-5 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[36px] border border-[#F0DDC8] bg-[#FFF8E7] shadow-sm lg:grid-cols-2">
            {/* DELIVERY INFORMATION */}
            <div className="border-b border-[#F0DDC8] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
                Ordering made simple
              </p>
  
              <h2 className="mt-3 font-serif text-4xl text-[#1F1F1F]">
                Pickup & Delivery
              </h2>
  
              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Choose pickup or selected Melbourne delivery when completing your
                gift order.
              </p>
  
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {deliveryFeatures.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="rounded-[24px] border border-[#F0DDC8] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0F2] text-[#8B1E2D]">
                      <Icon size={22} />
                    </div>
  
                    <h3 className="mt-4 font-semibold text-[#1F1F1F]">
                      {title}
                    </h3>
  
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
  
              <div className="mt-6 rounded-2xl border border-[#D4A017]/25 bg-[#FFF3E0] px-5 py-4">
                <p className="text-sm leading-6 text-gray-700">
                  Delivery availability and fees are confirmed after the suburb,
                  delivery date and order size are reviewed.
                </p>
              </div>
            </div>
  
            {/* WHY CHOOSE */}
            <div className="bg-[#FFF0F2] p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A017]">
                The Treat Trove difference
              </p>
  
              <h2 className="mt-3 font-serif text-4xl text-[#1F1F1F]">
                Why Choose Our Gifts? ♡
              </h2>
  
              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                Treat Trove gifts are designed to promote what we make best:
                handcrafted cakes, cupcakes and desserts.
              </p>
  
              <div className="mt-8 space-y-4">
                {reasons.map(({ icon: Icon, title, description }, index) => (
                  <article
                    key={title}
                    className="flex gap-4 rounded-[24px] border border-[#F0DDC8] bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8B1E2D] text-white">
                      <Icon size={21} />
                    </div>
  
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-semibold text-[#1F1F1F]">
                          {title}
                        </h3>
  
                        <span className="text-xs font-bold text-[#D4A017]">
                          0{index + 1}
                        </span>
                      </div>
  
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
  
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Freshly prepared",
                  "Personalised",
                  "Gift wrapped",
                  "Melbourne based",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[#8B1E2D]/15 bg-white px-4 py-2 text-xs font-semibold text-[#8B1E2D]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }