"use client";

import Image from "next/image";
import { FiMaximize2 } from "react-icons/fi";

type PreviewCakeProps = {
  uploadedImage: string | null;
  generatedImage: string | null;
  shape: string;
  tiers: string;
  size: string;
  colour: string;
  isGenerating: boolean;
  previewGenerated: boolean;
  onZoom: () => void;
};

export default function PreviewCake({
  uploadedImage,
  generatedImage,
  shape,
  tiers,
  size,
  colour,
  isGenerating,
  previewGenerated,
  onZoom,
}: PreviewCakeProps) {
  return (
    <>
      <div className="mt-6 grid gap-5 xl:grid-cols-[105px_1fr]">
        <div className="hidden space-y-3 xl:block">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex h-[88px] items-center justify-center overflow-hidden rounded-xl border border-[#8B1E2D]/20 bg-[#FFF8E7] text-xs text-gray-400"
            >
              {generatedImage && item === 1 ? (
                <Image
                  src={generatedImage}
                  alt="AI preview thumbnail"
                  width={105}
                  height={88}
                  className="h-full w-full object-cover"
                />
              ) : (
                `View ${item}`
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={onZoom}
            disabled={!generatedImage}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#8B1E2D] px-3 py-3 text-xs font-semibold text-[#8B1E2D] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Full <FiMaximize2 />
          </button>
        </div>

        <button
          type="button"
          onClick={onZoom}
          disabled={!generatedImage}
          className="relative block w-full overflow-hidden rounded-2xl bg-[#FFF8E7]"
        >
          {generatedImage ? (
            <Image
              src={generatedImage}
              alt="AI cake preview"
              width={1000}
              height={620}
              className="h-[360px] w-full rounded-2xl object-cover"
            />
          ) : (
            <div className="flex h-[360px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#8B1E2D]/20 px-8 text-center">
              <p className="font-semibold text-[#8B1E2D]">
                AI Preview will appear here
              </p>

              <p className="mt-2 max-w-md text-sm text-gray-500">
                Upload an inspiration image, select cake details and click
                Generate AI Preview.
              </p>
            </div>
          )}

          {generatedImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition hover:bg-black/30 hover:opacity-100">
              <FiMaximize2 className="mr-2" />
              View full image
            </div>
          )}
        </button>
      </div>

      <div className="mt-4 rounded-xl bg-[#FFF8E7] p-3 text-center text-sm text-gray-600">
        <strong className="text-[#8B1E2D]">AI direction:</strong>{" "}
        {shape || "Shape"}, {tiers || "tiers"}, {size || "servings"}, with{" "}
        {colour || "colour theme"}.
      </div>

      {uploadedImage && (
        <div className="mt-3 text-center text-xs text-gray-500">
          Inspiration image uploaded and used as reference.
        </div>
      )}

      {isGenerating && (
        <div className="mt-4 rounded-xl bg-[#FFF8E7] p-4 text-center text-sm text-[#8B1E2D]">
          Creating your cake preview...
        </div>
      )}

      {previewGenerated && (
        <div className="mt-4 rounded-xl bg-green-50 p-4 text-center text-sm text-green-700">
          AI preview generated successfully.
        </div>
      )}
    </>
  );
}