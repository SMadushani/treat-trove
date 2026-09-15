"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import {
  FiUploadCloud,
  FiTruck,
  FiHeart,
  FiCalendar,
  FiInfo,
  FiLock,
} from "react-icons/fi";
import PreviewCake from "./PreviewCake";

const colours = [
  { name: "Blush Pink", value: "#F4A6B8" },
  { name: "Soft Pink", value: "#F7B6C2" },
  { name: "Lavender", value: "#B98BD9" },
  { name: "Sky Blue", value: "#5B9BD5" },
  { name: "Mint", value: "#91D0A8" },
  { name: "Gold", value: "#D4A017" },
  { name: "Ivory", value: "#EFE3CE" },
];

export default function CustomOrderForm() {
  const [shape, setShape] = useState("");
  const [tiers, setTiers] = useState("");
  const [size, setSize] = useState("");
  const [flavour, setFlavour] = useState("");
  const [filling, setFilling] = useState("");
  const [colour, setColour] = useState("");
  const [date, setDate] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewGenerated, setPreviewGenerated] = useState(false);

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const getMinimumOrderDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().split("T")[0];
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
  
    setUploadedFile(file);
    setUploadedImage(URL.createObjectURL(file));
  };

  const canGeneratePreview = uploadedImage && shape && tiers && size && colour;

  const handleGeneratePreview = async () => {
    if (!canGeneratePreview) return;
  
    setIsGenerating(true);
    setPreviewGenerated(false);
  
    const formData = new FormData();
  
    if (uploadedFile) {
      formData.append("image", uploadedFile);
    }
  
    formData.append("shape", shape);
    formData.append("tiers", tiers);
    formData.append("size", size);
    formData.append("flavour", flavour);
    formData.append("filling", filling);
    formData.append("colour", colour);
    formData.append("message", message);
    formData.append("notes", notes);
  
    const response = await fetch("/api/generate-cake-preview", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
  
    if (data.success) {
      setGeneratedImage(data.image);
      setPreviewGenerated(true);
    }
  
    setIsGenerating(false);
  };

  const canSubmitRequest =
  shape && tiers && size && flavour && filling && colour && date && deliveryMethod;

  const basePrice =
    size === "8–10 Portions"
      ? 85
      : size === "15–20 Portions"
      ? 110
      : size === "25–30 Portions"
      ? 145
      : size === "35–40 Portions"
      ? 180
      : size === "50+ Portions"
      ? 240
      : 0;

  const tierPrice =
    tiers === "Two Tier" ? 25 : tiers === "Three Tier" ? 50 : 0;

  const fillingPrice = filling ? 10 : 0;
  const decorationPrice = notes || colour ? 20 : 0;
  const deliveryPrice = deliveryMethod === "Delivery" ? 15 : 0;

  const estimatedTotal =
    basePrice + tierPrice + fillingPrice + decorationPrice + deliveryPrice;
    
  return (
    <section className="bg-[#FFF8E7] px-6 pb-20">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-[28px] bg-white p-8 shadow-md">
          <label className="mb-3 block text-sm font-bold text-[#1F1F1F]">
            1. Upload Inspiration (Optional)
          </label>

          {!uploadedImage ? (
            <label className="flex h-[130px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#8B1E2D]/30 bg-white px-6 text-center">
              <FiUploadCloud size={38} className="text-[#8B1E2D]" />
              <p className="mt-3 font-semibold text-[#8B1E2D]">
                Drag & drop an image here
              </p>
              <p className="text-sm text-gray-500">or click to browse</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          ) : (
            <div className="flex items-center gap-5 rounded-2xl border-2 border-dashed border-[#8B1E2D]/30 bg-white p-4">
              <Image
                src={uploadedImage}
                alt="Uploaded inspiration"
                width={100}
                height={100}
                className="h-24 w-24 rounded-xl object-cover"
              />
              <div>
                <p className="font-semibold text-[#8B1E2D]">
                  Inspiration uploaded ✓
                </p>
                <p className="text-sm text-gray-500">
                  Replace image if you want another reference.
                </p>
                <label className="mt-3 inline-block cursor-pointer rounded-lg border border-[#8B1E2D] px-4 py-2 text-sm font-semibold text-[#8B1E2D]">
                  Replace Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                label: "2. Cake Shape",
                value: shape,
                setValue: setShape,
                placeholder: "Select Cake Shape",
                options: ["Round", "Square", "Heart", "Rectangle"],
              },
              {
                label: "3. Layers / Tiers",
                value: tiers,
                setValue: setTiers,
                placeholder: "Select Layers / Tiers",
                options: ["Single Layer", "Two Tier", "Three Tier"],
              },
              {
                label: "4. Servings / Portions",
                value: size,
                setValue: setSize,
                placeholder: "Select Servings / Portions",
                options: [
                  "8–10 Portions",
                  "15–20 Portions",
                  "25–30 Portions",
                  "35–40 Portions",
                  "50+ Portions",
                ],
              },
              {
                label: "5. Cake Flavour",
                value: flavour,
                setValue: setFlavour,
                placeholder: "Select Cake Flavour",
                options: [
                  "Chocolate",
                  "Vanilla",
                  "Red Velvet",
                  "Butter Cake",
                  "Coffee",
                ],
              },
              {
                label: "6. Cake Filling",
                value: filling,
                setValue: setFilling,
                placeholder: "Select Cake Filling",
                options: [
                  "Chocolate Ganache",
                  "Vanilla Cream",
                  "Buttercream",
                  "Fresh Cream",
                ],
              },
            ].map((field) => (
              <div key={field.label}>
                <label className="mb-2 block text-sm font-bold text-[#1F1F1F]">
                  {field.label}
                </label>
                <select
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  className={`w-full rounded-lg border px-4 py-3 ${
                    field.value ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}

            <div>
              <label className="mb-2 block text-sm font-bold text-[#1F1F1F]">
                7. Colour Theme
              </label>

              <div className="flex flex-wrap items-center gap-3">
                {colours.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setColour(item.name)}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition ${
                      colour === item.name
                        ? "scale-110 border-[#8B1E2D] ring-2 ring-[#8B1E2D]/20"
                        : "border-white shadow"
                    }`}
                    style={{ backgroundColor: item.value }}
                    title={item.name}
                  >
                    {colour === item.name && (
                      <span className="text-sm font-bold text-white">✓</span>
                    )}
                  </button>
                ))}

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-xs leading-none text-gray-600"
                >
                  +<br />
                  More
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-bold text-[#1F1F1F]">
              8. Message on Cake (Optional)
            </label>
            <div className="relative">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={40}
                className="w-full rounded-lg border px-4 py-3 pr-14 text-gray-700 placeholder:text-gray-400"
                placeholder="Happy Birthday..."
              />
              <span className="absolute right-4 top-3 text-sm text-gray-500">
                {message.length}/40
              </span>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-bold text-[#1F1F1F]">
              9. Special Notes (Optional)
            </label>
            <div className="relative">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                maxLength={300}
                className="w-full rounded-lg border px-4 py-3 pr-16 text-gray-700 placeholder:text-gray-400"
                placeholder="Flowers, toppers, macarons, specific design ideas, delivery instructions..."
              />
              <span className="absolute bottom-4 right-4 text-sm text-gray-500">
                {notes.length}/300
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {["Pickup", "Delivery"].map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => setDeliveryMethod(method)}
                className={`rounded-xl border px-5 py-4 text-left ${
                  deliveryMethod === method
                    ? "border-[#8B1E2D] bg-[#FFF8E7] text-[#8B1E2D]"
                    : "border-[#8B1E2D]/20 text-[#8B1E2D]"
                }`}
              >
                {method === "Pickup" ? (
                  <FiHeart className="mb-2" />
                ) : (
                  <FiTruck className="mb-2" />
                )}
                <strong>{method}</strong>
                <p className="text-sm text-gray-500">
                  {method === "Pickup"
                    ? "Collect from us"
                    : "Delivery to your location"}
                </p>
              </button>
            ))}
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-gray-600">
            <FiCalendar />
            Order at least 2 days in advance
          </p>

          <input
            type="date"
            value={date}
            min={getMinimumOrderDate()}
            onChange={(e) => setDate(e.target.value)}
            className={`mt-2 w-full rounded-lg border px-4 py-3 ${
              date ? "text-gray-700" : "text-gray-400"
            }`}
          />

          <button
            type="button"
            onClick={handleGeneratePreview}
            disabled={!canGeneratePreview || isGenerating}
            className={`mt-5 w-full rounded-xl py-4 font-semibold text-white transition ${
              canGeneratePreview
                ? "bg-[#8B1E2D] hover:bg-[#6E1723]"
                : "cursor-not-allowed bg-gray-300"
            }`}
          >
            {isGenerating ? "Generating Preview..." : "✨ Generate AI Preview"}
          </button>

          {!canGeneratePreview && (
            <p className="mt-3 text-center text-sm text-gray-500">
              Upload image and select shape, tiers, servings and colour to
              generate preview.
            </p>
          )}
        </div>

        <div className="rounded-[28px] bg-white p-8 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h2 className="font-serif text-3xl text-[#1F1F1F]">
                AI Cake Preview
              </h2>
              <span className="rounded-full bg-[#FFF0EA] px-4 py-2 text-sm font-semibold text-[#8B1E2D]">
                Powered by AI ✨
              </span>
            </div>
          </div>

          <PreviewCake
            uploadedImage={uploadedImage}
            generatedImage={generatedImage}
            shape={shape}
            tiers={tiers}
            size={size}
            colour={colour}
            isGenerating={isGenerating}
            previewGenerated={previewGenerated}
            onZoom={() => generatedImage && setZoomImage(generatedImage)}
          />

          <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-bold text-[#8B1E2D]">
                Preview Details
              </h3>

              <div className="mt-5 grid gap-4 text-sm text-black sm:grid-cols-2">
                <p><strong>Shape:</strong> {shape || "Not selected"}</p>
                <p><strong>Colour:</strong> {colour || "Not selected"}</p>
                <p><strong>Layers:</strong> {tiers || "Not selected"}</p>
                <p><strong>Date:</strong> {date || "Not selected"}</p>
                <p><strong>Servings:</strong> {size || "Not selected"}</p>
                <p><strong>Method:</strong> {deliveryMethod || "Not selected"}</p>
                <p><strong>Flavour:</strong> {flavour || "Not selected"}</p>
                <p><strong>Message:</strong> {message || "No message yet"}</p>
                <p><strong>Filling:</strong> {filling || "Not selected"}</p>
                <p><strong>Notes:</strong> {notes ? "Added" : "Pending"}</p>
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-bold text-[#8B1E2D]">
                Order Summary
              </h3>

              <div className="mt-5 space-y-3 text-sm text-gray-700">
                <div className="flex justify-between gap-4">
                  <span>Base Cake</span>
                  <span>${basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Tier Upgrade</span>
                  <span>${tierPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Filling</span>
                  <span>${fillingPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Decorations</span>
                  <span>${decorationPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Delivery</span>
                  <span>${deliveryPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-5 flex justify-between border-t pt-4 text-lg font-bold text-[#8B1E2D]">
                <span>Estimated Total</span>
                <span>${estimatedTotal.toFixed(2)}</span>
              </div>

              <div className="mt-5 rounded-xl bg-[#FFF8E7] p-4 text-center text-sm text-gray-700">
                <p className="font-semibold text-[#8B1E2D]">
                  This is an estimated cost.
                </p>
                <p>Final price may change after chef review.</p>
              </div>

              <button
                type="button"
                disabled={!canSubmitRequest}
                className={`mt-5 w-full rounded-xl py-4 font-semibold text-white transition ${
                  canSubmitRequest
                    ? "bg-[#8B1E2D] hover:bg-[#6E1723]"
                    : "cursor-not-allowed bg-gray-300"
                }`}
              >
                Submit for Chef Review →
              </button>

              {!canSubmitRequest && (
                <p className="mt-3 text-center text-sm text-gray-500">
                  Please complete cake details, date, and pickup/delivery method before submitting.
                </p>
              )}

              <p className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
                <FiLock /> No payment required yet
              </p>
            </div>
          </div>
        </div>
      </div>

      {zoomImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
          onClick={() => setZoomImage(null)}
        >
          <button
            onClick={() => setZoomImage(null)}
            className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 font-bold text-[#8B1E2D]"
          >
            ✕
          </button>

          <Image
            src={zoomImage}
            alt="Full AI preview"
            width={1200}
            height={900}
            className="max-h-[90vh] w-auto rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}