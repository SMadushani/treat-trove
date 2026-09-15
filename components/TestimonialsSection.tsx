"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Senani Muthukumarana",
    title: "Verified Customer",
    review:
      "Loved the birthday cake done for my daughter's 5th birthday! It was done exactly as per our request and tasted amazing. Wonderful service and great attention to detail. Highly recommend.",
  },
  {
    name: "Birthday Cake Customer",
    title: "Custom Cake Order",
    review:
      "The cake design was exactly what we imagined and everyone loved the taste.",
  },
  {
    name: "Dessert Customer",
    title: "Dessert Order",
    review:
      "Beautiful presentation, fresh ingredients and excellent customer service.",
  },
  {
    name: "Cupcake Customer",
    title: "Cupcakes Order",
    review:
      "The cupcakes looked beautiful and tasted fresh. Perfect for our celebration.",
  },
  {
    name: "Returning Customer",
    title: "Repeat Order",
    review:
      "Very friendly service and the order was prepared with great care.",
  },
  {
    name: "Melbourne Customer",
    title: "Celebration Cake",
    review:
      "The cake was fresh, soft and beautifully decorated. Highly recommended.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const totalSlides = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const visibleTestimonials = testimonials.slice(active * 2, active * 2 + 2);

  return (
    <section className="bg-[#FFF8E7] px-6 py-14">
      <div className="mx-auto max-w-[1500px] rounded-[32px] bg-[#FFF3F0] p-8 shadow-md">
        <h2 className="text-center font-serif text-4xl text-[#1F1F1F]">
          What Our Customers{" "}
          <span className="italic text-[#D4A017]">Say</span>
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {visibleTestimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[26px] bg-white p-7 shadow-sm"
            >
              <div className="text-4xl text-[#8B1E2D]">❝</div>

              <div className="mt-2 text-xl text-[#D4A017]">★★★★★</div>

              <p className="mt-5 min-h-[90px] leading-7 text-gray-700">
                {item.review}
              </p>

              <div className="mt-6 border-t pt-4">
                <h4 className="font-semibold text-[#8B1E2D]">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                active === index ? "bg-[#8B1E2D]" : "bg-[#8B1E2D]/30"
              }`}
              aria-label={`View testimonial slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}