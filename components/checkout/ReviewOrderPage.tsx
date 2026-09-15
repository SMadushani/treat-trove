"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChangeEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiCreditCard,
  FiEdit3,
  FiFileText,
  FiHome,
  FiInfo,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShoppingBag,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";

type FulfilmentMethod = "pickup" | "delivery";

type PaymentMethod =
  | "card"
  | "payid"
  | "bank"
  | "afterpay"
  | "cash";

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;

  streetAddress: string;
  suburb: string;
  postcode: string;
  deliveryPhone: string;
  deliveryDate: string;
  deliveryTime: string;
  deliveryNotes: string;

  pickupDate: string;
  pickupTime: string;

  orderNotes: string;
};

type CartItem = {
  id: number;
  type: string;
  name: string;
  image: string;
  description: string;
  priceLabel: string;
  price: number;
  quantity: number;
};

type CheckoutData = {
  fulfilmentMethod: FulfilmentMethod;
  paymentMethod: PaymentMethod;
  formValues: FormValues;
  distanceKm: number | null;
  deliveryFee: number;
  serviceFee: number;
  subtotal: number;
  estimatedTotal: number;
  cartItems: CartItem[];
};

type ConfirmationValues = {
  detailsCorrect: boolean;
  handmadeVariation: boolean;
  termsAccepted: boolean;
};

const PICKUP_ADDRESS = {
  business: "Treat Trove",
  street: "2/46 Patrick Street",
  suburb: "Oakleigh East, VIC 3166",
};

const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  card: "Credit / Debit Card",
  payid: "PayID",
  bank: "Bank Transfer",
  afterpay: "Afterpay",
  cash: "Cash on Pickup",
};

const fallbackCheckoutData: CheckoutData = {
  fulfilmentMethod: "pickup",
  paymentMethod: "card",

  formValues: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",

    streetAddress: "",
    suburb: "",
    postcode: "",
    deliveryPhone: "",
    deliveryDate: "",
    deliveryTime: "",
    deliveryNotes: "",

    pickupDate: "",
    pickupTime: "",

    orderNotes: "",
  },

  distanceKm: null,
  deliveryFee: 0,
  serviceFee: 3,
  subtotal: 156,
  estimatedTotal: 159,

  cartItems: [
    {
      id: 1,
      type: "Custom Cake",
      name: "Floral Birthday Cake",
      image: "/images/cake/cakes-hero.png",
      description: "Serves 20",
      priceLabel: "$120.00 – $150.00",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      type: "Dessert",
      name: "Vanilla Cupcakes",
      image: "/images/cake/bdcd35.png",
      description: "Gift box of 6",
      priceLabel: "$36.00",
      price: 36,
      quantity: 1,
    },
  ],
};

export default function ReviewOrderPage() {
  const [checkoutData, setCheckoutData] =
    useState<CheckoutData | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [confirmations, setConfirmations] =
    useState<ConfirmationValues>({
      detailsCorrect: false,
      handmadeVariation: false,
      termsAccepted: false,
    });

  const [confirmationError, setConfirmationError] =
    useState("");

  useEffect(() => {
    try {
      const storedCheckoutData = localStorage.getItem(
        "treatTroveCheckout",
      );

      if (storedCheckoutData) {
        const parsedData = JSON.parse(
          storedCheckoutData,
        ) as CheckoutData;

        setCheckoutData(parsedData);
      } else {
        setCheckoutData(fallbackCheckoutData);
      }
    } catch (error) {
      console.error(
        "Unable to read checkout information:",
        error,
      );

      setCheckoutData(fallbackCheckoutData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const allConfirmationsAccepted = useMemo(
    () =>
      confirmations.detailsCorrect &&
      confirmations.handmadeVariation &&
      confirmations.termsAccepted,
    [confirmations],
  );

  function handleConfirmationChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const { name, checked } = event.target;

    setConfirmations((current) => ({
      ...current,
      [name]: checked,
    }));

    setConfirmationError("");
  }

  function formatDate(value: string) {
    if (!value) {
      return "Not selected";
    }

    const date = new Date(`${value}T00:00:00`);

    return new Intl.DateTimeFormat("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  function createOrderNumber() {
    const year = new Date().getFullYear();
    const randomNumber = Math.floor(
      10000 + Math.random() * 90000,
    );

    return `TT-${year}-${randomNumber}`;
  }

  function handleSubmitOrder() {
    if (!allConfirmationsAccepted) {
      setConfirmationError(
        "Please accept all confirmations before submitting your order.",
      );

      document
        .getElementById("order-confirmations")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

      return;
    }

    if (!checkoutData) {
      return;
    }

    setIsSubmitting(true);

    const orderNumber = createOrderNumber();

    const submittedOrder = {
      ...checkoutData,
      orderNumber,
      submittedAt: new Date().toISOString(),
      orderStatus: "Pending chef review",
    };

    localStorage.setItem(
      "treatTroveSubmittedOrder",
      JSON.stringify(submittedOrder),
    );

    window.setTimeout(() => {
      window.location.href = `/checkout/success?order=${orderNumber}`;
    }, 700);
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#FFF8E7] px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-[#F0DDC8] bg-white p-10 text-center shadow-sm">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#F0DDC8] border-t-[#8B1E2D]" />

          <p className="mt-4 text-gray-600">
            Loading your order...
          </p>
        </div>
      </main>
    );
  }

  if (!checkoutData) {
    return (
      <main className="min-h-screen bg-[#FFF8E7] px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-[#F0DDC8] bg-white p-10 text-center shadow-sm">
          <FiAlertCircle className="mx-auto text-5xl text-[#8B1E2D]" />

          <h1 className="mt-5 font-serif text-4xl text-[#8B1E2D]">
            No checkout details found
          </h1>

          <p className="mt-3 text-gray-600">
            Please return to your cart and complete checkout
            before reviewing your order.
          </p>

          <Link
            href="/cart"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#8B1E2D] px-6 py-3 font-semibold text-white transition hover:bg-[#651A24]"
          >
            <FiArrowLeft />
            Return to Cart
          </Link>
        </div>
      </main>
    );
  }

  const {
    fulfilmentMethod,
    paymentMethod,
    formValues,
    distanceKm,
    deliveryFee,
    serviceFee,
    subtotal,
    estimatedTotal,
    cartItems,
  } = checkoutData;

  return (
    <main className="min-h-screen bg-[#FFF8E7] px-4 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-[1450px]">
        {/* PAGE HEADER */}

        <div className="mb-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <Link
                  href="/cart"
                  className="transition hover:text-[#8B1E2D]"
                >
                  Cart
                </Link>

                <FiChevronRight />

                <Link
                  href="/checkout"
                  className="transition hover:text-[#8B1E2D]"
                >
                  Checkout
                </Link>

                <FiChevronRight />

                <span className="font-medium text-[#8B1E2D]">
                  Review Order
                </span>
              </div>

              <h1 className="font-serif text-4xl text-[#1F1F1F] sm:text-5xl">
                Review Your Order
              </h1>

              <p className="mt-3 max-w-2xl text-gray-600">
                Check your contact details, fulfilment
                information, products and payment selection
                before submitting your order request.
              </p>
            </div>

            <div className="rounded-2xl border border-[#F0DDC8] bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0F2] text-xl text-[#8B1E2D]">
                  <FiCheckCircle />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4A017]">
                    Final check
                  </p>

                  <p className="mt-1 font-bold text-[#8B1E2D]">
                    Nothing is submitted yet
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PROGRESS */}

          <div className="mt-8 grid grid-cols-4 gap-2 rounded-2xl border border-[#F0DDC8] bg-white p-3 shadow-sm">
            {[
              ["1", "Checkout"],
              ["2", "Review"],
              ["3", "Quote"],
              ["4", "Payment"],
            ].map(([number, label], index) => {
              const completed = index === 0;
              const active = index === 1;

              return (
                <div
                  key={label}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                      completed
                        ? "bg-green-700 text-white"
                        : active
                          ? "bg-[#8B1E2D] text-white"
                          : "border border-[#E2D4C4] bg-white text-gray-500"
                    }`}
                  >
                    {completed ? <FiCheck /> : number}
                  </div>

                  <p
                    className={`mt-2 text-xs font-semibold sm:text-sm ${
                      active
                        ? "text-[#8B1E2D]"
                        : completed
                          ? "text-green-700"
                          : "text-gray-500"
                    }`}
                  >
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_410px]">
          <div className="space-y-6">
            {/* CUSTOMER DETAILS */}

            <ReviewCard
              title="Customer Details"
              icon={<FiUser />}
              editHref="/checkout"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <ReviewDetail
                  label="Customer Name"
                  value={`${formValues.firstName} ${formValues.lastName}`.trim()}
                  icon={<FiUser />}
                />

                <ReviewDetail
                  label="Phone Number"
                  value={formValues.phone}
                  icon={<FiPhone />}
                />

                <ReviewDetail
                  label="Email Address"
                  value={formValues.email}
                  icon={<FiMail />}
                  className="sm:col-span-2"
                />
              </div>
            </ReviewCard>

            {/* FULFILMENT */}

            <ReviewCard
              title={
                fulfilmentMethod === "pickup"
                  ? "Pickup Details"
                  : "Delivery Details"
              }
              icon={
                fulfilmentMethod === "pickup" ? (
                  <FiShoppingBag />
                ) : (
                  <FiTruck />
                )
              }
              editHref="/checkout"
            >
              {fulfilmentMethod === "pickup" ? (
                <div className="space-y-5">
                  <div className="rounded-2xl border border-[#F0DDC8] bg-[#FFF8E7] p-5">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg text-[#8B1E2D]">
                        <FiMapPin />
                      </div>

                      <div>
                        <p className="font-bold text-[#8B1E2D]">
                          {PICKUP_ADDRESS.business}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-gray-700">
                          {PICKUP_ADDRESS.street}
                          <br />
                          {PICKUP_ADDRESS.suburb}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <ReviewDetail
                      label="Pickup Date"
                      value={formatDate(
                        formValues.pickupDate,
                      )}
                      icon={<FiCalendar />}
                    />

                    <ReviewDetail
                      label="Pickup Time"
                      value={
                        formValues.pickupTime ||
                        "Not selected"
                      }
                      icon={<FiClock />}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="rounded-2xl border border-[#F0DDC8] bg-[#FFF8E7] p-5">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg text-[#8B1E2D]">
                        <FiHome />
                      </div>

                      <div>
                        <p className="font-bold text-[#8B1E2D]">
                          Delivery Address
                        </p>

                        <p className="mt-2 text-sm leading-6 text-gray-700">
                          {formValues.streetAddress}
                          <br />
                          {formValues.suburb},{" "}
                          {formValues.postcode}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <ReviewDetail
                      label="Delivery Date"
                      value={formatDate(
                        formValues.deliveryDate,
                      )}
                      icon={<FiCalendar />}
                    />

                    <ReviewDetail
                      label="Preferred Time"
                      value={
                        formValues.deliveryTime ||
                        "Not selected"
                      }
                      icon={<FiClock />}
                    />

                    <ReviewDetail
                      label="Delivery Contact"
                      value={
                        formValues.deliveryPhone ||
                        formValues.phone
                      }
                      icon={<FiPhone />}
                    />

                    <ReviewDetail
                      label="Estimated Distance"
                      value={
                        distanceKm !== null
                          ? `${distanceKm.toFixed(1)} km`
                          : "Not calculated"
                      }
                      icon={<FiTruck />}
                    />
                  </div>

                  {formValues.deliveryNotes && (
                    <ReviewNote
                      title="Delivery Notes"
                      value={formValues.deliveryNotes}
                    />
                  )}
                </div>
              )}
            </ReviewCard>

            {/* ORDER ITEMS */}

            <ReviewCard
              title="Order Items"
              icon={<FiShoppingBag />}
              editHref="/cart"
            >
              <div className="divide-y divide-[#F0DDC8]">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 py-5 first:pt-0 last:pb-0 sm:flex-row"
                  >
                    <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-2xl bg-[#FFF8E7] sm:h-28 sm:w-28">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />

                      <span className="absolute right-2 top-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-white px-2 text-xs font-bold text-[#8B1E2D] shadow-sm">
                        ×{item.quantity}
                      </span>
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D4A017]">
                          {item.type}
                        </p>

                        <h3 className="mt-1 font-serif text-xl text-[#1F1F1F]">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>

                      <p className="mt-3 font-bold text-[#8B1E2D]">
                        {item.priceLabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ReviewCard>

            {/* PAYMENT */}

            <ReviewCard
              title="Payment Method"
              icon={<FiCreditCard />}
              editHref="/checkout"
            >
              <div className="flex items-center gap-4 rounded-2xl border border-[#F0DDC8] bg-[#FFF8E7] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#8B1E2D]">
                  <FiCreditCard />
                </div>

                <div>
                  <p className="font-bold text-[#1F1F1F]">
                    {PAYMENT_LABELS[paymentMethod]}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Payment instructions will be provided
                    after your order and final quote are
                    confirmed.
                  </p>
                </div>
              </div>
            </ReviewCard>

            {/* ORDER NOTES */}

            {formValues.orderNotes && (
              <ReviewCard
                title="Order Notes"
                icon={<FiFileText />}
                editHref="/checkout"
              >
                <ReviewNote
                  title="Your instructions"
                  value={formValues.orderNotes}
                />
              </ReviewCard>
            )}

            {/* CONFIRMATIONS */}

            <section
              id="order-confirmations"
              className="rounded-[28px] border border-[#F0DDC8] bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0F2] text-xl text-[#8B1E2D]">
                  <FiCheckCircle />
                </span>

                <div>
                  <h2 className="font-serif text-2xl text-[#1F1F1F]">
                    Confirm Your Order
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Please confirm each statement before
                    submitting.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <ConfirmationCheckbox
                  name="detailsCorrect"
                  checked={confirmations.detailsCorrect}
                  onChange={handleConfirmationChange}
                >
                  I confirm that all names, dates, contact
                  information, quantities and order details
                  shown above are correct.
                </ConfirmationCheckbox>

                <ConfirmationCheckbox
                  name="handmadeVariation"
                  checked={confirmations.handmadeVariation}
                  onChange={handleConfirmationChange}
                >
                  I understand that Treat Trove products are
                  handmade and that colours, decorations and
                  final appearance may vary slightly.
                </ConfirmationCheckbox>

                <ConfirmationCheckbox
                  name="termsAccepted"
                  checked={confirmations.termsAccepted}
                  onChange={handleConfirmationChange}
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    target="_blank"
                    className="font-semibold text-[#8B1E2D] underline underline-offset-2"
                  >
                    Treat Trove Terms and Conditions
                  </Link>
                  .
                </ConfirmationCheckbox>
              </div>

              {confirmationError && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <FiAlertCircle className="mt-0.5 shrink-0" />
                  {confirmationError}
                </div>
              )}
            </section>
          </div>

          {/* SUMMARY SIDEBAR */}

          <aside className="h-fit space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-md">
              <div className="flex items-center gap-3">
                <GiCakeSlice className="text-2xl text-[#8B1E2D]" />

                <h2 className="font-serif text-3xl text-[#8B1E2D]">
                  Order Summary
                </h2>
              </div>

              <div className="mt-6 space-y-4 border-b border-[#F0DDC8] pb-5 text-sm">
                <SummaryRow
                  label="Subtotal"
                  value={`$${subtotal.toFixed(2)}`}
                />

                <SummaryRow
                  label={
                    fulfilmentMethod === "pickup"
                      ? "Pickup"
                      : "Delivery"
                  }
                  value={
                    fulfilmentMethod === "pickup"
                      ? "Free"
                      : `$${deliveryFee.toFixed(2)}`
                  }
                />

                {fulfilmentMethod === "delivery" &&
                  distanceKm !== null && (
                    <SummaryRow
                      label="Distance"
                      value={`${distanceKm.toFixed(1)} km`}
                    />
                  )}

                <SummaryRow
                  label="Service Fee"
                  value={`$${serviceFee.toFixed(2)}`}
                />
              </div>

              <div className="mt-5 flex items-end justify-between gap-5">
                <div>
                  <p className="font-bold text-[#8B1E2D]">
                    Estimated Total
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your final custom cake price is confirmed
                    following chef review.
                  </p>
                </div>

                <p className="shrink-0 text-3xl font-bold text-[#8B1E2D]">
                  ${estimatedTotal.toFixed(2)}
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#FFF4DD] p-5">
                <div className="flex items-start gap-3">
                  <FiInfo className="mt-0.5 shrink-0 text-[#D4A017]" />

                  <p className="text-sm leading-6 text-gray-700">
                    Submitting this order sends a request to
                    Treat Trove. Your order is confirmed only
                    after availability, design and final
                    pricing are approved.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmitOrder}
                disabled={isSubmitting}
                className={`mt-6 flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-lg font-semibold text-white transition ${
                  allConfirmationsAccepted
                    ? "bg-[#8B1E2D] hover:bg-[#651A24]"
                    : "cursor-not-allowed bg-[#B78A91]"
                } disabled:cursor-wait disabled:opacity-70`}
              >
                <FiLock />

                {isSubmitting
                  ? "Submitting Order..."
                  : "Submit Order"}

                {!isSubmitting && <FiArrowRight />}
              </button>

              {!allConfirmationsAccepted && (
                <p className="mt-3 text-center text-xs text-gray-500">
                  Accept all confirmations to submit your
                  order.
                </p>
              )}

              <Link
                href="/checkout"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#8B1E2D] px-5 py-3 font-semibold text-[#8B1E2D] transition hover:bg-[#FFF0F2]"
              >
                <FiArrowLeft />
                Back to Checkout
              </Link>
            </div>

            {/* HELP CARD */}

            <div className="rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-2xl text-[#8B1E2D]">
                Need to confirm something?
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Contact Treat Trove before submitting your
                order.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <a
                  href="https://wa.me/61426115694?text=Hi%20Treat%20Trove!%20I%20need%20help%20reviewing%20my%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#FFF8E7] p-3 transition hover:bg-[#FFF0F2]"
                >
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#25D366]">
                    <FaWhatsapp />
                  </span>

                  <span className="mt-2 block text-xs font-semibold text-[#8B1E2D] sm:text-sm">
                    WhatsApp
                  </span>
                </a>

                <a
                  href="tel:+61426115694"
                  className="rounded-xl bg-[#FFF8E7] p-3 transition hover:bg-[#FFF0F2]"
                >
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#8B1E2D]">
                    <FiPhone />
                  </span>

                  <span className="mt-2 block text-xs font-semibold text-[#8B1E2D] sm:text-sm">
                    Call
                  </span>
                </a>

                <a
                  href="mailto:orders@treattrove.com.au?subject=Treat%20Trove%20Order%20Review"
                  className="rounded-xl bg-[#FFF8E7] p-3 transition hover:bg-[#FFF0F2]"
                >
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#8B1E2D]">
                    <FiMail />
                  </span>

                  <span className="mt-2 block text-xs font-semibold text-[#8B1E2D] sm:text-sm">
                    Email
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable components                                                        */
/* -------------------------------------------------------------------------- */

type ReviewCardProps = {
  title: string;
  icon: ReactNode;
  editHref?: string;
  children: ReactNode;
};

function ReviewCard({
  title,
  icon,
  editHref,
  children,
}: ReviewCardProps) {
  return (
    <section className="rounded-[28px] border border-[#F0DDC8] bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0F2] text-xl text-[#8B1E2D]">
            {icon}
          </span>

          <h2 className="font-serif text-2xl text-[#1F1F1F]">
            {title}
          </h2>
        </div>

        {editHref && (
          <Link
            href={editHref}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#8B1E2D] transition hover:bg-[#FFF0F2]"
          >
            <FiEdit3 />
            Edit
          </Link>
        )}
      </div>

      {children}
    </section>
  );
}

type ReviewDetailProps = {
  label: string;
  value: string;
  icon: ReactNode;
  className?: string;
};

function ReviewDetail({
  label,
  value,
  icon,
  className = "",
}: ReviewDetailProps) {
  return (
    <div
      className={`rounded-2xl border border-[#F0DDC8] bg-[#FFFDF8] p-4 ${className}`}
    >
      <div className="flex gap-3">
        <span className="mt-0.5 text-[#8B1E2D]">
          {icon}
        </span>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
            {label}
          </p>

          <p className="mt-2 break-words font-medium text-gray-800">
            {value || "Not provided"}
          </p>
        </div>
      </div>
    </div>
  );
}

function ReviewNote({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[#F0DDC8] bg-[#FFF8E7] p-5">
      <p className="text-sm font-semibold text-[#8B1E2D]">
        {title}
      </p>

      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-700">
        {value}
      </p>
    </div>
  );
}

type ConfirmationCheckboxProps = {
  name: keyof ConfirmationValues;
  checked: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  children: ReactNode;
};

function ConfirmationCheckbox({
  name,
  checked,
  onChange,
  children,
}: ConfirmationCheckboxProps) {
  return (
    <label
      htmlFor={name}
      className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition ${
        checked
          ? "border-[#8B1E2D] bg-[#FFF5F6]"
          : "border-[#E7D7C5] bg-white hover:border-[#8B1E2D]/50"
      }`}
    >
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-5 w-5 shrink-0 accent-[#8B1E2D]"
      />

      <span className="text-sm leading-6 text-gray-700">
        {children}
      </span>
    </label>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-gray-600">{label}</span>

      <span className="text-right font-medium text-gray-800">
        {value}
      </span>
    </div>
  );
}