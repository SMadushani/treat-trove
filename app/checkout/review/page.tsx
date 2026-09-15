import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import ReviewOrderPage from "@/components/checkout/ReviewOrderPage";

export const metadata = {
  title: "Review Order | Treat Trove",
  description:
    "Review your Treat Trove order before submitting your request.",
};

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ReviewOrderPage />
      <Footer />
    </>
  );
}