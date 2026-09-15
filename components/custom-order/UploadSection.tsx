import { FiUploadCloud } from "react-icons/fi";

export default function UploadSection() {
  return (
    <section className="bg-[#FFF8E7] px-6 pb-10">
      <div className="mx-auto max-w-[1100px] rounded-[32px] bg-white p-8 shadow-md">
        <h2 className="font-serif text-3xl text-[#1F1F1F]">
          Upload Inspiration Image
        </h2>

        <p className="mt-2 text-gray-600">
          Add a cake design, colour theme or inspiration photo.
        </p>

        <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#8B1E2D]/30 bg-[#FFF8E7] px-6 py-14 text-center transition hover:border-[#8B1E2D]">
          <FiUploadCloud size={48} className="text-[#8B1E2D]" />

          <p className="mt-4 font-semibold text-[#8B1E2D]">
            Click to upload image
          </p>

          <p className="mt-2 text-sm text-gray-500">
            PNG, JPG or JPEG accepted
          </p>

          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>
    </section>
  );
}