"use client";

import { extras } from "./extrasData";

interface Props {
  selected: string;
  setSelected: (id: string) => void;
}

export default function ExtrasSection({
  selected,
  setSelected,
}: Props) {
  return (
    <section className="mt-14 rounded-[30px] bg-white p-8 shadow-md">

      <div className="flex items-center gap-4 mb-8">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B1E2D] text-white font-bold">
          2
        </div>

        <div>
          <h2 className="font-serif text-5xl">
            Add Extra Touches
          </h2>

          <p className="text-gray-500">
            Optional customisations
          </p>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">

        {extras.map((extra) => (

          <button
            key={extra.id}
            onClick={() => setSelected(extra.id)}
            className={`rounded-2xl border p-6 transition

            ${
              selected === extra.id
                ? "border-[#8B1E2D] bg-[#FFF8EE]"
                : "border-gray-200 hover:border-[#8B1E2D]"
            }

            `}
          >

            <div className="text-5xl">
              {extra.icon}
            </div>

            <h3 className="mt-5 font-semibold">
              {extra.title}
            </h3>

            <p className="mt-1 text-[#8B1E2D]">
              From +${extra.price}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Click to customise
            </p>

          </button>

        ))}

      </div>

    </section>
  );
}