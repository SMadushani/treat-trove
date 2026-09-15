import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import OrderSuccessPage from "@/components/checkout/OrderSuccessPage";

export const metadata = {
  title: "Order Received | Treat Trove",
  description:
    "Your Treat Trove order request has been successfully submitted.",
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <OrderSuccessPage />
      <Footer />
    </>
  );
}