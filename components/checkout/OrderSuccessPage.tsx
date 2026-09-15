"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiHome,
  FiMail,
  FiMapPin,
  FiPackage,
  FiPhone,
  FiShoppingBag,
  FiTruck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";

type SubmittedOrder = {
  orderNumber: string;
  submittedAt: string;
  orderStatus: string;

  fulfilmentMethod: "pickup" | "delivery";
  paymentMethod:
    | "card"
    | "payid"
    | "bank"
    | "afterpay"
    | "cash";

  estimatedTotal: number;
  deliveryFee: number;
  serviceFee: number;
  subtotal: number;

  formValues: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;

    streetAddress: string;
    suburb: string;
    postcode: string;

    deliveryDate: string;
    deliveryTime: string;

    pickupDate: string;
    pickupTime: string;
  };
};

const PAYMENT_LABELS = {
  card: "Credit / Debit Card",
  payid: "PayID",
  bank: "Bank Transfer",
  afterpay: "Afterpay",
  cash: "Cash on Pickup",
};

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<SubmittedOrder | null>(
    null,
  );

  useEffect(() => {
    try {
      const savedOrder = localStorage.getItem(
        "treatTroveSubmittedOrder",
      );

      if (savedOrder) {
        setOrder(JSON.parse(savedOrder));
      }
    } catch (error) {
      console.error("Unable to load submitted order", error);
    }
  }, []);

  if (!order) {
    return (
      <main className="min-h-[70vh] bg-[#FFF8E7] px-5 py-16">
        <div className="mx-auto max-w-2xl rounded-[32px] border border-[#F0DDC8] bg-white p-8 text-center shadow-sm sm:p-12">
          <GiCakeSlice className="mx-auto text-5xl text-[#8B1E2D]" />

          <h1 className="mt-5 font-serif text-4xl text-[#1F1F1F]">
            Order Details Unavailable
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-7 text-gray-600">
            We couldn't find the order details for this
            session. You can return to the shop or contact
            Treat Trove for assistance.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-xl bg-[#8B1E2D] px-7 py-4 font-semibold text-white"
          >
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  const customerName =
    `${order.formValues.firstName} ${order.formValues.lastName}`.trim();

  const isPickup = order.fulfilmentMethod === "pickup";

  const selectedDate = isPickup
    ? order.formValues.pickupDate
    : order.formValues.deliveryDate;

  const selectedTime = isPickup
    ? order.formValues.pickupTime
    : order.formValues.deliveryTime;

  function formatDate(value: string) {
    if (!value) return "To be confirmed";

    const date = new Date(`${value}T00:00:00`);

    return new Intl.DateTimeFormat("en-AU", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  return (
    <main className="min-h-screen bg-[#FFF8E7] px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto max-w-6xl">
        {/* SUCCESS HERO */}

        <section className="overflow-hidden rounded-[36px] border border-[#F0DDC8] bg-white shadow-sm">
          <div className="bg-[#8B1E2D] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl text-[#8B1E2D] shadow-lg">
              <FiCheck />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#F5D57A]">
              Thank you, {order.formValues.firstName}!
            </p>

            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
              Order Request Received ♡
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
              Your order has been successfully sent to Treat
              Trove. We'll review your design, availability
              and final pricing before confirming your order.
            </p>
          </div>

          {/* ORDER NUMBER */}

          <div className="grid gap-0 border-b border-[#F0DDC8] sm:grid-cols-3">
            <InfoBox
              label="Order Number"
              value={order.orderNumber}
            />

            <InfoBox
              label="Current Status"
              value="Pending Chef Review"
            />

            <InfoBox
              label="Estimated Response"
              value="Within 24 Hours"
            />
          </div>

          {/* NEXT STEPS */}

          <div className="p-6 sm:p-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A017]">
                What happens next?
              </p>

              <h2 className="mt-2 font-serif text-3xl text-[#1F1F1F]">
                Your Order Journey
              </h2>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-4">
              <JourneyStep
                number="01"
                icon={<FiCheckCircle />}
                title="Request Received"
                description="We've received your order details."
                active
              />

              <JourneyStep
                number="02"
                icon={<GiCakeSlice />}
                title="Chef Review"
                description="We'll check design, pricing and availability."
              />

              <JourneyStep
                number="03"
                icon={<FiCreditCard />}
                title="Quote & Payment"
                description="You'll receive your final price and payment instructions."
              />

              <JourneyStep
                number="04"
                icon={<FiPackage />}
                title="Order Confirmed"
                description="Production begins after your order is confirmed."
              />
            </div>
          </div>
        </section>

        {/* ORDER INFORMATION */}

        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6">
            {/* FULFILMENT */}

            <section className="rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0F2] text-xl text-[#8B1E2D]">
                  {isPickup ? <FiShoppingBag /> : <FiTruck />}
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4A017]">
                    {isPickup ? "Pickup" : "Delivery"}
                  </p>

                  <h2 className="font-serif text-2xl text-[#1F1F1F]">
                    {isPickup
                      ? "Pickup Information"
                      : "Delivery Information"}
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <DetailCard
                  icon={<FiClock />}
                  label={
                    isPickup ? "Pickup Time" : "Delivery Time"
                  }
                  value={selectedTime || "To be confirmed"}
                />

                <DetailCard
                  icon={<FiPackage />}
                  label="Date"
                  value={formatDate(selectedDate)}
                />

                {isPickup ? (
                  <DetailCard
                    icon={<FiMapPin />}
                    label="Pickup Location"
                    value="Treat Trove, Mount Waverley VIC"
                  />
                ) : (
                  <DetailCard
                    icon={<FiHome />}
                    label="Delivery Address"
                    value={`${order.formValues.streetAddress}, ${order.formValues.suburb} VIC ${order.formValues.postcode}`}
                  />
                )}

                <DetailCard
                  icon={<FiPhone />}
                  label="Contact"
                  value={order.formValues.phone}
                />
              </div>
            </section>

            {/* CUSTOMER */}

            <section className="rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl text-[#1F1F1F]">
                Confirmation Details
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                We'll use these details to contact you about
                your order.
              </p>

              <div className="mt-5 space-y-3">
                <SummaryLine
                  label="Customer"
                  value={customerName}
                />

                <SummaryLine
                  label="Email"
                  value={order.formValues.email}
                />

                <SummaryLine
                  label="Phone"
                  value={order.formValues.phone}
                />

                <SummaryLine
                  label="Payment"
                  value={PAYMENT_LABELS[order.paymentMethod]}
                />
              </div>
            </section>
          </div>

          {/* PRICE */}

          <aside className="h-fit rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4A017]">
              Order Estimate
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#8B1E2D]">
              Your Order
            </h2>

            <div className="mt-6 space-y-4 border-b border-[#F0DDC8] pb-5 text-sm">
              <SummaryLine
                label="Subtotal"
                value={`$${order.subtotal.toFixed(2)}`}
              />

              <SummaryLine
                label={isPickup ? "Pickup" : "Delivery"}
                value={
                  isPickup
                    ? "Free"
                    : `$${order.deliveryFee.toFixed(2)}`
                }
              />

              <SummaryLine
                label="Service Fee"
                value={`$${order.serviceFee.toFixed(2)}`}
              />
            </div>

            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-semibold text-[#8B1E2D]">
                  Estimated Total
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Subject to final chef review.
                </p>
              </div>

              <strong className="text-3xl text-[#8B1E2D]">
                ${order.estimatedTotal.toFixed(2)}
              </strong>
            </div>

            <div className="mt-6 rounded-2xl bg-[#FFF4DD] p-4">
              <p className="text-sm leading-6 text-gray-700">
                <strong>This is not your final invoice.</strong>{" "}
                Treat Trove will confirm the final custom cake
                price before payment.
              </p>
            </div>

            <Link
              href={`/track-order?order=${order.orderNumber}`}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#8B1E2D] px-6 py-4 font-semibold text-white transition hover:bg-[#651A24]"
            >
              Track My Order
              <FiArrowRight />
            </Link>

            <Link
              href="/"
              className="mt-3 flex w-full items-center justify-center rounded-xl border border-[#8B1E2D] px-6 py-3 font-semibold text-[#8B1E2D] transition hover:bg-[#FFF0F2]"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>

        {/* CONTACT */}

        <section className="mt-7 rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-2xl text-[#1F1F1F]">
                Need to change something?
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Contact us as soon as possible and include
                order number{" "}
                <strong className="text-[#8B1E2D]">
                  {order.orderNumber}
                </strong>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/61426115694?text=${encodeURIComponent(
                  `Hi Treat Trove! I need help with order ${order.orderNumber}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="tel:+61426115694"
                className="inline-flex items-center gap-2 rounded-xl border border-[#8B1E2D] px-5 py-3 font-semibold text-[#8B1E2D]"
              >
                <FiPhone />
                Call
              </a>

              <a
                href={`mailto:orders@treattrove.com.au?subject=${encodeURIComponent(
                  `Treat Trove Order ${order.orderNumber}`,
                )}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[#8B1E2D] px-5 py-3 font-semibold text-[#8B1E2D]"
              >
                <FiMail />
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-[#F0DDC8] p-5 text-center sm:border-r sm:last:border-r-0">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
        {label}
      </p>

      <p className="mt-2 font-bold text-[#8B1E2D]">
        {value}
      </p>
    </div>
  );
}

function JourneyStep({
  number,
  icon,
  title,
  description,
  active = false,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <article
      className={`rounded-2xl border p-5 ${
        active
          ? "border-[#8B1E2D] bg-[#FFF5F6]"
          : "border-[#F0DDC8] bg-[#FFFDF8]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full text-xl ${
            active
              ? "bg-[#8B1E2D] text-white"
              : "bg-white text-[#8B1E2D]"
          }`}
        >
          {icon}
        </span>

        <span className="text-xs font-bold text-[#D4A017]">
          {number}
        </span>
      </div>

      <h3 className="mt-4 font-semibold text-[#1F1F1F]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {description}
      </p>
    </article>
  );
}

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#F0DDC8] bg-[#FFFDF8] p-4">
      <div className="flex gap-3">
        <span className="mt-0.5 text-[#8B1E2D]">
          {icon}
        </span>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
            {label}
          </p>

          <p className="mt-2 text-sm font-medium leading-6 text-gray-800">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function SummaryLine({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-5 text-sm">
      <span className="text-gray-500">{label}</span>

      <span className="text-right font-semibold text-gray-800">
        {value}
      </span>
    </div>
  );
}