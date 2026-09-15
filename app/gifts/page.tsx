import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import GiftBuilder from "@/components/gifts/GiftBuilder";
import GiftCollections from "@/components/gifts/GiftCollections";
import GiftHero from "@/components/gifts/GiftHero";
import GiftMoments from "@/components/gifts/GiftMoments";
import GiftTrustSection from "@/components/gifts/GiftTrustSection";
import MonthlyTrending from "@/components/gifts/MonthlyTrending";

export const metadata = {
  title: "Cake & Dessert Gifts | Treat Trove",
  description:
    "Shop handcrafted cake gift boxes, cupcake hampers and dessert gifts across Melbourne.",
};

export default function GiftsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="bg-[#FFF8E7]">
        <GiftHero />
        <MonthlyTrending />
        <GiftBuilder />
        <GiftCollections />
        <GiftTrustSection />
        <GiftMoments />
      </main>

      <Footer />
    </>
  );
}