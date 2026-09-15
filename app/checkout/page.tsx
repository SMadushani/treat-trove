import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import CheckoutPage from "@/components/checkout/CheckoutPage";

export const metadata = {
  title: "Checkout | Treat Trove",
  description:
    "Complete your Treat Trove custom cake, dessert and gift order.",
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <CheckoutPage />
      <Footer />
    </>
  );
}