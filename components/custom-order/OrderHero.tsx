export default function OrderHero() {
    return (
      <section className="bg-[#FFF8E7] px-6 pt-16 pb-10">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
            Create Your Dream Cake
          </p>
  
          <h1 className="mt-4 font-serif text-5xl text-[#1F1F1F] lg:text-7xl">
            Custom Cake{" "}
            <span className="italic text-[#D4A017]">Order</span>
          </h1>
  
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Upload your inspiration, choose your cake details and tell us your
            design idea. We’ll create something special for your celebration.
          </p>
        </div>
      </section>
    );
  }