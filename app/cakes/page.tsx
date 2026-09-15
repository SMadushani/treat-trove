"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CakesHero from "@/components/CakesHero";
import CategoryFilter from "@/components/CategoryFilter";
import ProductGrid from "@/components/cakes/ProductGrid";

export default function CakesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Cakes");

  return (
    <>
      <Navbar />
      <CakesHero />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid selectedCategory={selectedCategory} />
      <Footer />
    </>
  );
}