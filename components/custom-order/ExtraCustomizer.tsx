"use client";

interface Props {
  selected: string;
}

export default function ExtraCustomizer({
  selected,
}: Props) {
  if (!selected) return null;

  return (
    <section className="mt-8 rounded-[30px] bg-[#FFF9EF] p-8">

      <h2 className="font-serif text-4xl">

        Customise {selected}

      </h2>

      <p className="mt-2 text-gray-500">
        Select your preferred option
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-4">

        {[1,2,3,4].map((item)=>(

          <div
            key={item}
            className="overflow-hidden rounded-2xl border bg-white hover:shadow-lg"
          >

            <img
              src={`/images/extras/${selected}/${item}.jpg`}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <h3 className="font-semibold">
                Option {item}
              </h3>

              <p className="text-[#8B1E2D]">
                +$25
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}