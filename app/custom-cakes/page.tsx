import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomOrderHero from "@/components/custom-order/CustomOrderHero";
import CustomOrderForm from "@/components/custom-order/CustomOrderForm";
import GuaranteeSection from "@/components/custom-order/GuaranteeSection";

export default function CustomCakesPage() {
  return (
    <>
      <Navbar />
      <CustomOrderHero />
      <CustomOrderForm />
      <GuaranteeSection />
      <Footer />
    </>
  );
}