import Image from "next/image";
import {
  FaFacebookF,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#8B1E2D] px-6 pt-12 pb-6 text-white">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Treat Trove Logo"
                width={70}
                height={70}
                className="rounded-full bg-white p-1"
              />

              <div>
                <h2 className="font-serif text-3xl">Treat Trove</h2>
                <p className="text-sm text-white/80">
                  Turning Ingredients to Happiness
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/75">
              Custom cakes, cupcakes and handcrafted desserts made fresh in
              Melbourne for birthdays, celebrations and special moments.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/share/1NVDB4MG8m/?mibextid=wwXIfr"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D4A017]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.tiktok.com/@treat.trove?_r=1&_t=ZS-97NxOz0Xr1U"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D4A017]"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
              <a href="/" className="hover:text-[#D4A017]">Home</a>
              <a href="/products" className="hover:text-[#D4A017]">Cakes</a>
              <a href="/gallery" className="hover:text-[#D4A017]">Gallery</a>
              <a href="/custom-cakes" className="hover:text-[#D4A017]">Custom Order</a>
              <a href="/track-order" className="hover:text-[#D4A017]">Track Order</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Customer Service</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
              <a href="/contact" className="hover:text-[#D4A017]">Contact Us</a>
              <a href="/custom-cakes" className="hover:text-[#D4A017]">How to Order</a>
              <a href="/products" className="hover:text-[#D4A017]">Dessert Menu</a>
              <a href="/reviews" className="hover:text-[#D4A017]">Reviews</a>
              <a href="/faq" className="hover:text-[#D4A017]">FAQs</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-white/75">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#D4A017]" />
                Melbourne, Victoria
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#D4A017]" />
                Add phone number
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4A017]" />
                Add email address
              </p>

              <p className="flex items-center gap-3">
                <FaClock className="text-[#D4A017]" />
                Pre-order required
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/70">
              Pick-up and delivery options available across selected Melbourne areas.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          © 2026 Treat Trove. All rights reserved. Made with love for every
          celebration.
        </div>
      </div>
    </footer>
  );
}