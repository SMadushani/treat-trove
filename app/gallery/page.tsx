import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedGallery from "@/components/FeaturedGallery";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#FFF8E7] px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-[#8B1E2D]">
          Treat Trove Gallery
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Explore our recent cakes, dessert boxes and custom creations.
        </p>
      </section>

      <FeaturedGallery />

      <Footer />
    </>
  );
}