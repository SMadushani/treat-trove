"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cakes", href: "/cakes" },
  { name: "Desserts", href: "/desserts" },
  { name: "Gifts", href: "/gifts" },
  { name: "Gallery", href: "/gallery" },
  { name: "Custom Order", href: "/custom-cakes" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setShowSearch(false);
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Treat Trove Logo"
            width={75}
            height={75}
            priority
          />
          <div>
            <h2 className="text-2xl font-bold text-[#8B1E2D]">Treat Trove</h2>
            <p className="mt-1 text-sm italic text-[#D4A017]">
              Turning Ingredients to Happiness
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2 transition-all duration-300 ${
                isActive(link.href)
                  ? "bg-[#FFF3E0] font-semibold text-[#8B1E2D]"
                  : "text-gray-800 hover:bg-[#FFF3E0] hover:text-[#8B1E2D]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B1E2D]/20 text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white"
            aria-label="Search"
          >
            <FiSearch size={22} />
          </button>

          <Link
            href="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#8B1E2D]/20 text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white"
            aria-label="Cart"
          >
            <FiShoppingCart size={23} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A017] text-xs font-bold text-white">
              3
            </span>
          </Link>

          <Link
            href="/signin"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B1E2D]/20 text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white"
            aria-label="Sign in"
          >
            <FiUser size={22} />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#8B1E2D] lg:hidden"
          aria-label="Open menu"
        >
          {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 font-medium ${
                  isActive(link.href)
                    ? "bg-[#8B1E2D] text-white"
                    : "text-gray-800 hover:bg-[#FFF8E7] hover:text-[#8B1E2D]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setShowSearch(true);
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B1E2D]/20 text-[#8B1E2D]"
                aria-label="Search"
              >
                <FiSearch size={22} />
              </button>

              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#8B1E2D]/20 text-[#8B1E2D]"
                aria-label="Cart"
              >
                <FiShoppingCart size={23} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A017] text-xs font-bold text-white">
                  3
                </span>
              </Link>

              <Link
                href="/signin"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B1E2D]/20 text-[#8B1E2D]"
                aria-label="Sign in"
              >
                <FiUser size={22} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {showSearch && (
        <div className="fixed inset-0 z-[999] bg-black/40 px-6 pt-28">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl text-[#1F1F1F]">
                Search Treat Trove
              </h3>

              <button
                type="button"
                onClick={() => setShowSearch(false)}
                className="text-2xl text-[#8B1E2D]"
              >
                ×
              </button>
            </div>

            <div className="mt-5 flex gap-3">
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Search cakes, desserts, gifts..."
                className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-[#8B1E2D]"
              />

              <button
                type="button"
                onClick={handleSearch}
                className="rounded-xl bg-[#8B1E2D] px-6 py-3 font-semibold text-white"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}