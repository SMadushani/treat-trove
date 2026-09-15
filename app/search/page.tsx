import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF8E7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-serif text-5xl text-[#1F1F1F]">
            Search Results
          </h1>

          <p className="mt-4 text-gray-600">
            Showing results for:{" "}
            <span className="font-semibold text-[#8B1E2D]">{query}</span>
          </p>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-md">
            <p className="text-gray-600">
              Search result cards will be added here next.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}