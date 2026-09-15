import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import BestSellers from "@/components/BestSellers";
import AIPreviewSection from "@/components/AIPreviewSection";
import DessertsSection from "@/components/DessertsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <FeatureCards />
      <BestSellers />
      <AIPreviewSection />
      <DessertsSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}