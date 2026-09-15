"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiClock,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiSend,
  FiTruck,
} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { GiCakeSlice, GiCupcake } from "react-icons/gi";

const contactCards = [
  {
    icon: FiMapPin,
    title: "Our Location",
    main: "Melbourne, Victoria",
    sub: "Australia",
    link: "Get Directions",
  },
  {
    icon: FiPhone,
    title: "Phone",
    main: "0412 345 678",
    sub: "Mon – Sun, 9:00 AM – 7:00 PM",
  },
  {
    icon: FiMail,
    title: "Email",
    main: "hello@treattrove.com.au",
    sub: "We reply within 24 hours",
  },
  {
    icon: FiClock,
    title: "Opening Hours",
    main: "Monday – Sunday",
    sub: "9:00 AM – 7:00 PM",
  },
];

const faqs = [
  {
    question: "How far in advance should I place my order?",
    answer:
      "We recommend placing custom cake orders at least 5–7 days in advance. More notice may be required for detailed or large celebration cakes.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes. Delivery is available to selected Melbourne suburbs. The final delivery fee depends on the location and order size.",
  },
  {
    question: "Can I make changes to my order?",
    answer:
      "Changes may be possible before production begins. Please contact us as early as possible so we can review your request.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment options will be confirmed with your final quotation. Secure online payment options will be available before production begins.",
  },
  {
    question: "Do you cater for events and parties?",
    answer:
      "Yes. We offer cakes, cupcakes, dessert boxes and dessert selections for birthdays, weddings, baby showers and other special events.",
  },
  {
    question: "Do you have eggless or gluten-free options?",
    answer:
      "Some dietary options may be available depending on the product. Please include your requirements in the enquiry form.",
  },
];

const socialLinks = [
  {
    icon: FiFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1NVDB4MG8m/?mibextid=wwXIfr",
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    href: "https://www.tiktok.com/@treat.trove?_r=1&_t=ZS-97NxOz0Xr1U",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#FFF8E7]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[440px] md:h-[500px]">
          <Image
            src="/images/contact/contact-hero.png"
            alt="Treat Trove handcrafted cake and cupcakes"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E7] via-[#FFF8E7]/90 to-transparent" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
                Get in Touch
              </p>

              <h1 className="mt-4 font-serif text-5xl leading-tight text-[#1F1F1F] md:text-6xl">
                Let&apos;s Create
                <br />
                Something Sweet
                <br />
                <span className="italic text-[#8B1E2D]">Together ♡</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 md:text-lg md:leading-8">
                We&apos;d love to hear from you. Whether it&apos;s a custom
                cake, dessert box or special request, we&apos;re here to make
                it unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ icon: Icon, title, main, sub, link }) => (
            <div
              key={title}
              className="rounded-[26px] border border-[#F0DDC8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#8B1E2D] text-white">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-[#1F1F1F]">{title}</h3>
                  <p className="mt-2 font-semibold text-gray-700">{main}</p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{sub}</p>

                  {link && (
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Melbourne+Victoria+Australia"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-[#8B1E2D] hover:underline"
                    >
                      {link} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM + ORDER INFORMATION */}
      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_420px]">
          <div className="rounded-[30px] border border-[#F0DDC8] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-4xl text-[#1F1F1F]">
              Send Us a Message ♡
            </h2>

            <form
              className="mt-8 grid gap-5 md:grid-cols-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-[#1F1F1F]"
                >
                  Your Name <span className="text-[#8B1E2D]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#F0DDC8] px-4 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#8B1E2D]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-[#1F1F1F]"
                >
                  Email Address <span className="text-[#8B1E2D]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-[#F0DDC8] px-4 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#8B1E2D]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-[#1F1F1F]"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#F0DDC8] px-4 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#8B1E2D]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-[#1F1F1F]"
                >
                  Subject <span className="text-[#8B1E2D]">*</span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-[#F0DDC8] bg-white px-4 py-4 text-gray-700 outline-none focus:border-[#8B1E2D]"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="custom-cake">Custom Cake Order</option>
                  <option value="dessert-box">Dessert Box</option>
                  <option value="delivery">Delivery Question</option>
                  <option value="existing-order">Existing Order</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-[#1F1F1F]"
                >
                  Message <span className="text-[#8B1E2D]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="How can we help you?"
                  className="w-full resize-y rounded-xl border border-[#F0DDC8] px-4 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-[#8B1E2D]"
                />
              </div>

              <button
                type="submit"
                className="flex w-fit items-center gap-3 rounded-xl bg-[#8B1E2D] px-8 py-4 font-semibold text-white transition hover:bg-[#6E1723]"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>

          <aside className="rounded-[30px] border border-[#F0DDC8] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-3xl text-[#1F1F1F]">
              Order Information
            </h2>

            <div className="mt-8 space-y-8">
              {[
                {
                  icon: GiCakeSlice,
                  title: "Custom Cakes",
                  text: "We create unique handcrafted cakes for birthdays and special celebrations.",
                },
                {
                  icon: FiTruck,
                  title: "Delivery",
                  text: "Delivery is available across selected Melbourne suburbs.",
                },
                {
                  icon: GiCupcake,
                  title: "Pickup",
                  text: "Pickup is available for cakes, cupcakes and dessert boxes.",
                },
                {
                  icon: FiClock,
                  title: "Response Time",
                  text: "We typically respond to enquiries within 24 hours.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF0F2] text-[#8B1E2D]">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1F1F1F]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* SOCIAL + MAP */}
      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[360px_1fr]">
          <div className="rounded-[30px] border border-[#F0DDC8] bg-white p-8 text-gray-900 shadow-sm">
            <h2 className="font-serif text-3xl text-[#1F1F1F]">
              Follow Treat Trove ♡
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Stay connected for new creations, special offers and sweet
              moments.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noreferrer"}
                  className="group text-center"
                  aria-label={label}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B1E2D] text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#D4A017]">
                    <Icon size={24} />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[#8B1E2D]">
                    {label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#F0DDC8] bg-white shadow-sm">
            <iframe
              title="Treat Trove location map"
              src="https://www.google.com/maps?q=Melbourne%20Victoria%20Australia&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Helpful Information
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#1F1F1F]">
              Frequently Asked Questions ♡
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#F0DDC8] bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#1F1F1F]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <FiPlus
                      className={`shrink-0 text-[#8B1E2D] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <p className="border-t border-[#F0DDC8] px-5 py-4 text-sm leading-6 text-gray-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#FFF0F2] shadow-sm">
          {/* Left image */}
          <div className="absolute left-0 top-0 hidden h-full w-[34%] lg:block">
            <Image
              src="/images/contact/contact-cake-left.png"
              alt="Floral celebration cake"
              fill
              sizes="34vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF0F2]/20 to-[#FFF0F2]" />
          </div>

          {/* Right image */}
          <div className="absolute right-0 top-0 hidden h-full w-[34%] lg:block">
            <Image
              src="/images/contact/contact-cupcakes.jpg"
              alt="Decorated cupcakes"
              fill
              sizes="34vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FFF0F2]/20 to-[#FFF0F2]" />
          </div>

          {/* Soft centre glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-center px-8 py-16 text-center md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Ready to order your dream cake?
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#1F1F1F] md:text-5xl">
              Let&apos;s Make Your Celebration
              <br />
              <span className="italic text-[#8B1E2D]">Extra Sweet!</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg md:leading-8">
              Place your order today and let us create a beautiful handcrafted
              cake or dessert that makes your celebration unforgettable.
            </p>

            <Link
              href="/custom-cakes"
              className="mt-8 rounded-xl bg-[#8B1E2D] px-10 py-4 font-semibold text-white transition hover:bg-[#6E1723]"
            >
              Order Now ♡
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}