"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheck,
  FiChevronRight,
  FiClock,
  FiCreditCard,
  FiDollarSign,
  FiEdit3,
  FiHelpCircle,
  FiHome,
  FiInfo,
  FiLock,
  FiMapPin,
  FiShoppingBag,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import { GiCakeSlice, GiCupcake } from "react-icons/gi";

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

type FormErrors = Partial<Record<keyof FormValues, string>>;

const PICKUP_ADDRESS = {
  business: "Treat Trove",
  street: "2/46, Patrick Street",
  suburb: "Oakleigh East, VIC 3166",
  hours: "Pickup by confirmed appointment",
};

const DELIVERY_RATE_PER_KM = 5;
const SERVICE_FEE = 3;
const CUSTOM_CAKE_ESTIMATE = 120;

const cartItems = [
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
];

const timeOptions = [
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
  "1:00 PM – 3:00 PM",
  "3:00 PM – 5:00 PM",
  "5:00 PM – 7:00 PM",
];

const paymentOptions: {
  id: PaymentMethod;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "card",
    title: "Credit / Debit Card",
    subtitle: "Visa, Mastercard and Amex",
    icon: <FiCreditCard />,
  },
  {
    id: "payid",
    title: "PayID",
    subtitle: "Pay securely from your bank",
    icon: <span className="text-base font-black">iP</span>,
  },
  {
    id: "bank",
    title: "Bank Transfer",
    subtitle: "Direct bank transfer",
    icon: <FiDollarSign />,
  },
  {
    id: "afterpay",
    title: "Afterpay",
    subtitle: "Buy now, pay later",
    icon: <span className="text-sm font-black">A</span>,
  },
  {
    id: "cash",
    title: "Cash on Pickup",
    subtitle: "Available for pickup orders",
    icon: <FiShoppingBag />,
  },
];

export default function CheckoutPage() {
  const [fulfilmentMethod, setFulfilmentMethod] =
    useState<FulfilmentMethod>("pickup");

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("card");

  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [isEstimatingDelivery, setIsEstimatingDelivery] = useState(false);
  const [deliveryEstimateMessage, setDeliveryEstimateMessage] = useState("");

  const [formValues, setFormValues] = useState<FormValues>({
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
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const itemsSubtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    [],
  );

  const deliveryFee =
    fulfilmentMethod === "delivery" && distanceKm !== null
      ? distanceKm * DELIVERY_RATE_PER_KM
      : 0;

  const estimatedTotal =
    CUSTOM_CAKE_ESTIMATE +
    36 +
    SERVICE_FEE +
    deliveryFee;

  const availablePaymentOptions = paymentOptions.filter(
    (option) =>
      fulfilmentMethod === "pickup" || option.id !== "cash",
  );

  function handleFieldChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));

    if (
      [
        "streetAddress",
        "suburb",
        "postcode",
      ].includes(name)
    ) {
      setDistanceKm(null);
      setDeliveryEstimateMessage("");
    }
  }

  function selectFulfilment(method: FulfilmentMethod) {
    setFulfilmentMethod(method);
    setErrors({});
    setDeliveryEstimateMessage("");

    if (method === "pickup") {
      setDistanceKm(null);

      if (paymentMethod === "cash") {
        return;
      }
    }

    if (method === "delivery" && paymentMethod === "cash") {
      setPaymentMethod("card");
    }
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!formValues.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }

    if (!formValues.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }

    if (!formValues.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    }

    if (!formValues.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (fulfilmentMethod === "pickup") {
      if (!formValues.pickupDate) {
        nextErrors.pickupDate = "Select a pickup date.";
      }

      if (!formValues.pickupTime) {
        nextErrors.pickupTime = "Select a pickup time.";
      }
    }

    if (fulfilmentMethod === "delivery") {
      if (!formValues.streetAddress.trim()) {
        nextErrors.streetAddress =
          "Delivery street address is required.";
      }

      if (!formValues.suburb.trim()) {
        nextErrors.suburb = "Delivery suburb is required.";
      }

      if (!formValues.postcode.trim()) {
        nextErrors.postcode = "Postcode is required.";
      } else if (!/^\d{4}$/.test(formValues.postcode)) {
        nextErrors.postcode =
          "Enter a valid four-digit Australian postcode.";
      }

      if (!formValues.deliveryPhone.trim()) {
        nextErrors.deliveryPhone =
          "Delivery contact number is required.";
      }

      if (!formValues.deliveryDate) {
        nextErrors.deliveryDate =
          "Select a delivery date.";
      }

      if (!formValues.deliveryTime) {
        nextErrors.deliveryTime =
          "Select a preferred delivery time.";
      }

      if (distanceKm === null) {
        nextErrors.streetAddress =
          nextErrors.streetAddress ??
          "Calculate the delivery fee before continuing.";
      }
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function estimateDeliveryFee() {
    const addressComplete =
      formValues.streetAddress.trim() &&
      formValues.suburb.trim() &&
      /^\d{4}$/.test(formValues.postcode);

    if (!addressComplete) {
      setErrors((current) => ({
        ...current,
        streetAddress: !formValues.streetAddress.trim()
          ? "Enter the street address."
          : current.streetAddress,
        suburb: !formValues.suburb.trim()
          ? "Enter the suburb."
          : current.suburb,
        postcode: !/^\d{4}$/.test(formValues.postcode)
          ? "Enter a valid four-digit postcode."
          : current.postcode,
      }));

      setDeliveryEstimateMessage(
        "Enter the complete delivery address first.",
      );

      return;
    }

    setIsEstimatingDelivery(true);
    setDeliveryEstimateMessage("");

    /*
      Temporary front-end estimate.

      Replace this block with Google Maps Distance Matrix,
      Google Routes API, Mapbox or your delivery provider API.

      The current demo creates a consistent estimated distance
      from the postcode so the UI and calculations can be tested.
    */
    window.setTimeout(() => {
      const postcodeValue = Number(formValues.postcode);
      const calculatedDistance =
        4 + (postcodeValue % 13) + 0.5;

      setDistanceKm(calculatedDistance);
      setIsEstimatingDelivery(false);
      setDeliveryEstimateMessage(
        `Estimated distance: ${calculatedDistance.toFixed(
          1,
        )} km. Delivery is charged at $${DELIVERY_RATE_PER_KM.toFixed(
          2,
        )} per km.`,
      );
    }, 700);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    if (!validateForm()) {
      const firstErrorElement =
        document.querySelector("[data-error='true']");
  
      firstErrorElement?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  
      return;
    }
  
    const checkoutData = {
      fulfilmentMethod,
      paymentMethod,
      formValues,
      distanceKm,
      deliveryFee,
      serviceFee: SERVICE_FEE,
      subtotal: itemsSubtotal,
      estimatedTotal,
      cartItems,
    };
  
    localStorage.setItem(
      "treatTroveCheckout",
      JSON.stringify(checkoutData),
    );
  
    window.location.href = "/checkout/review";
  }
  return (
    <main className="min-h-screen bg-[#FFF8E7] px-4 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto max-w-[1450px]">
        {/* HEADER */}

        <div className="mb-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                <Link
                  href="/cart"
                  className="inline-flex items-center gap-2 transition hover:text-[#8B1E2D]"
                >
                  <FiArrowLeft />
                  Cart
                </Link>

                <FiChevronRight />

                <span className="text-[#8B1E2D]">
                  Checkout
                </span>
              </div>

              <h1 className="font-serif text-4xl text-[#1F1F1F] sm:text-5xl">
                Checkout
              </h1>

              <p className="mt-3 text-gray-600">
                Almost there! Complete your order details
                before reviewing your request.
              </p>
            </div>

            <div className="rounded-2xl border border-[#F0DDC8] bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0F2] text-xl text-[#8B1E2D]">
                  <FiCalendar />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D4A017]">
                    Estimated completion
                  </p>

                  <p className="mt-1 font-bold text-[#8B1E2D]">
                    Confirmed after chef review
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
            ].map(([number, label], index) => (
              <div
                key={label}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                    index === 0
                      ? "bg-[#8B1E2D] text-white"
                      : "border border-[#E2D4C4] bg-white text-gray-500"
                  }`}
                >
                  {number}
                </div>

                <p
                  className={`mt-2 text-xs font-semibold sm:text-sm ${
                    index === 0
                      ? "text-[#8B1E2D]"
                      : "text-gray-500"
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_410px]"
        >
          <div className="space-y-6">
            {/* CUSTOMER DETAILS */}

            <CheckoutCard
              number="1"
              title="Customer Details"
              icon={<FiUser />}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="First Name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleFieldChange}
                  placeholder="Enter first name"
                  required
                  error={errors.firstName}
                />

                <FormField
                  label="Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleFieldChange}
                  placeholder="Enter last name"
                  required
                  error={errors.lastName}
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={handleFieldChange}
                  placeholder="04XX XXX XXX"
                  required
                  error={errors.phone}
                  icon={<FiPhone />}
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleFieldChange}
                  placeholder="example@email.com"
                  required
                  error={errors.email}
                  icon={<FiMail />}
                />
              </div>
            </CheckoutCard>

            {/* FULFILMENT */}

            <CheckoutCard
              number="2"
              title="Pickup or Delivery"
              icon={<FiTruck />}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectionCard
                  selected={fulfilmentMethod === "pickup"}
                  onClick={() => selectFulfilment("pickup")}
                  icon={<FiShoppingBag />}
                  title="Pickup"
                  description="Collect from Treat Trove"
                />

                <SelectionCard
                  selected={fulfilmentMethod === "delivery"}
                  onClick={() => selectFulfilment("delivery")}
                  icon={<FiTruck />}
                  title="Delivery"
                  description="Delivery across selected Melbourne suburbs"
                />
              </div>

              {/* PICKUP CONTENT */}

              {fulfilmentMethod === "pickup" && (
                <div className="mt-6 animate-[fadeIn_0.25s_ease-out]">
                  <div className="rounded-2xl border border-[#F0DDC8] bg-[#FFF8E7] p-5">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl text-[#8B1E2D]">
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

                        <p className="mt-2 text-sm font-medium text-gray-600">
                          {PICKUP_ADDRESS.hours}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <DateField
                      label="Pickup Date"
                      name="pickupDate"
                      value={formValues.pickupDate}
                      onChange={handleFieldChange}
                      required
                      error={errors.pickupDate}
                    />

                    <SelectField
                      label="Pickup Time"
                      name="pickupTime"
                      value={formValues.pickupTime}
                      onChange={handleFieldChange}
                      options={timeOptions}
                      placeholder="Select pickup time"
                      required
                      error={errors.pickupTime}
                    />
                  </div>

                  <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#FFF4DD] p-4 text-sm text-gray-700">
                    <FiInfo className="mt-0.5 shrink-0 text-[#D4A017]" />

                    <p>
                      Please arrive within your confirmed
                      pickup time. The exact pickup address
                      will also appear in your order
                      confirmation.
                    </p>
                  </div>
                </div>
              )}

              {/* DELIVERY CONTENT */}

              {fulfilmentMethod === "delivery" && (
                <div className="mt-6 animate-[fadeIn_0.25s_ease-out]">
                  <div className="mb-5 rounded-xl border border-[#D4A017]/25 bg-[#FFF4DD] p-4">
                    <div className="flex gap-3">
                      <FiTruck className="mt-0.5 shrink-0 text-[#8B1E2D]" />

                      <div>
                        <p className="font-semibold text-[#8B1E2D]">
                          Delivery pricing
                        </p>

                        <p className="mt-1 text-sm leading-6 text-gray-700">
                          Delivery is estimated at{" "}
                          <strong>
                            ${DELIVERY_RATE_PER_KM.toFixed(2)}
                            /km
                          </strong>
                          . The final charge may be updated
                          when the real delivery route or
                          courier cost is confirmed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <FormField
                        label="Street Address"
                        name="streetAddress"
                        value={formValues.streetAddress}
                        onChange={handleFieldChange}
                        placeholder="Unit number and street address"
                        required
                        error={errors.streetAddress}
                        icon={<FiHome />}
                      />
                    </div>

                    <FormField
                      label="Suburb"
                      name="suburb"
                      value={formValues.suburb}
                      onChange={handleFieldChange}
                      placeholder="Enter suburb"
                      required
                      error={errors.suburb}
                    />

                    <FormField
                      label="Postcode"
                      name="postcode"
                      inputMode="numeric"
                      maxLength={4}
                      value={formValues.postcode}
                      onChange={handleFieldChange}
                      placeholder="Postcode"
                      required
                      error={errors.postcode}
                    />

                    <FormField
                      label="Delivery Contact Number"
                      name="deliveryPhone"
                      type="tel"
                      value={formValues.deliveryPhone}
                      onChange={handleFieldChange}
                      placeholder="04XX XXX XXX"
                      required
                      error={errors.deliveryPhone}
                      icon={<FiPhone />}
                    />

                    <DateField
                      label="Delivery Date"
                      name="deliveryDate"
                      value={formValues.deliveryDate}
                      onChange={handleFieldChange}
                      required
                      error={errors.deliveryDate}
                    />

                    <div className="sm:col-span-2">
                      <SelectField
                        label="Preferred Delivery Time"
                        name="deliveryTime"
                        value={formValues.deliveryTime}
                        onChange={handleFieldChange}
                        options={timeOptions}
                        placeholder="Select preferred time"
                        required
                        error={errors.deliveryTime}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="deliveryNotes"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Delivery Notes{" "}
                        <span className="font-normal text-gray-400">
                          (optional)
                        </span>
                      </label>

                      <textarea
                        id="deliveryNotes"
                        name="deliveryNotes"
                        rows={3}
                        value={formValues.deliveryNotes}
                        onChange={handleFieldChange}
                        placeholder="Apartment access, gate code, safe place or delivery instructions"
                        className="w-full resize-none rounded-xl border border-[#E7D7C5] bg-white px-4 py-3 text-base outline-none transition focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/10"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={estimateDeliveryFee}
                    disabled={isEstimatingDelivery}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-[#8B1E2D] px-5 py-3 font-semibold text-[#8B1E2D] transition hover:bg-[#8B1E2D] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <FiMapPin />

                    {isEstimatingDelivery
                      ? "Calculating..."
                      : "Calculate Delivery Fee"}
                  </button>

                  {deliveryEstimateMessage && (
                    <p
                      className={`mt-3 text-sm ${
                        distanceKm !== null
                          ? "text-green-700"
                          : "text-[#8B1E2D]"
                      }`}
                      aria-live="polite"
                    >
                      {deliveryEstimateMessage}
                    </p>
                  )}
                </div>
              )}
            </CheckoutCard>

            {/* PAYMENT */}

            <CheckoutCard
              number="3"
              title="Payment Method"
              icon={<FiCreditCard />}
            >
              <p className="mb-5 text-sm text-gray-500">
                Select your preferred payment method. Payment
                instructions will be confirmed after your
                custom cake review.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {availablePaymentOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() =>
                      setPaymentMethod(option.id)
                    }
                    className={`relative rounded-2xl border p-4 text-left transition ${
                      paymentMethod === option.id
                        ? "border-[#8B1E2D] bg-[#FFF5F6] shadow-sm"
                        : "border-[#E7D7C5] bg-white hover:border-[#8B1E2D]/50"
                    }`}
                  >
                    <span
                      className={`absolute left-3 top-3 h-3.5 w-3.5 rounded-full border ${
                        paymentMethod === option.id
                          ? "border-[#8B1E2D] bg-[#8B1E2D] ring-4 ring-[#8B1E2D]/10"
                          : "border-gray-300"
                      }`}
                    />

                    <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8E7] text-lg text-[#8B1E2D]">
                      {option.icon}
                    </div>

                    <p className="mt-3 text-sm font-bold text-[#1F1F1F]">
                      {option.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {option.subtitle}
                    </p>
                  </button>
                ))}
              </div>

              {fulfilmentMethod === "delivery" && (
                <p className="mt-4 text-sm text-gray-500">
                  Cash on pickup is unavailable because you
                  selected delivery.
                </p>
              )}

              <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#FFF8E7] p-4 text-sm text-gray-600">
                <FiLock className="text-[#D4A017]" />
                Your payment information is handled securely.
              </div>
            </CheckoutCard>

            {/* NOTES */}

            <CheckoutCard
              number="4"
              title="Order Notes"
              icon={<FiEdit3 />}
            >
              <label
                htmlFor="orderNotes"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Anything else you would like us to know?{" "}
                <span className="font-normal text-gray-400">
                  (optional)
                </span>
              </label>

              <textarea
                id="orderNotes"
                name="orderNotes"
                rows={5}
                maxLength={250}
                value={formValues.orderNotes}
                onChange={handleFieldChange}
                placeholder="Allergy information, special instructions, additional candles or other requests"
                className="w-full resize-none rounded-xl border border-[#E7D7C5] bg-white px-4 py-3 text-base outline-none transition focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/10"
              />

              <p className="mt-2 text-right text-xs text-gray-400">
                {formValues.orderNotes.length}/250
              </p>
            </CheckoutCard>
          </div>

          {/* ORDER SUMMARY */}

          <aside className="h-fit space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-md">
              <div className="flex items-center gap-3">
                <FiShoppingBag className="text-2xl text-[#8B1E2D]" />

                <h2 className="font-serif text-3xl text-[#8B1E2D]">
                  Order Summary
                </h2>
              </div>

              <div className="mt-6 divide-y divide-[#F0DDC8]">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 py-5 first:pt-0"
                  >
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#FFF8E7]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />

                      <span className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#8B1E2D] shadow">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-serif text-lg text-[#1F1F1F]">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs font-medium text-[#8B1E2D]">
                        {item.type}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>

                      <p className="mt-2 font-bold text-[#8B1E2D]">
                        {item.priceLabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-[#F0DDC8] pt-5 text-sm">
                <SummaryRow
                  label="Subtotal"
                  value={`$${itemsSubtotal.toFixed(2)}`}
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
                      : distanceKm === null
                        ? "Calculate after address"
                        : `$${deliveryFee.toFixed(2)}`
                  }
                />

                {fulfilmentMethod === "delivery" &&
                  distanceKm !== null && (
                    <SummaryRow
                      label="Estimated distance"
                      value={`${distanceKm.toFixed(1)} km`}
                    />
                  )}

                <SummaryRow
                  label="Service Fee"
                  value={`$${SERVICE_FEE.toFixed(2)}`}
                />
              </div>

              <div className="mt-5 flex items-end justify-between border-t border-[#F0DDC8] pt-5">
                <div>
                  <p className="font-bold text-[#8B1E2D]">
                    Estimated Total
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Final custom cake price is confirmed
                    after chef review.
                  </p>
                </div>

                <p className="text-3xl font-bold text-[#8B1E2D]">
                  ${estimatedTotal.toFixed(2)}
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#FFF1F2] p-5">
                <div className="flex items-center gap-2 font-bold text-[#8B1E2D]">
                  <GiCakeSlice />
                  Chef Review & Confirmation
                </div>

                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  {[
                    "Design and order details reviewed",
                    "Final custom cake price confirmed",
                    "Availability checked",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2"
                    >
                      <FiCheck className="mt-0.5 shrink-0 text-green-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#8B1E2D] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#651A24]"
              >
                <FiLock />
                Continue to Review
                <FiArrowRight />
              </button>

              <p className="mt-3 text-center text-xs text-gray-500">
                You can review all details before submitting
                your order.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#F0DDC8] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <FiHelpCircle className="text-2xl text-[#8B1E2D]" />

                <div>
                  <h3 className="font-serif text-2xl text-[#8B1E2D]">
                    Need Help?
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    We are here to assist with your order.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
  {/* WhatsApp */}
  <a
    href="https://wa.me/61426115694?text=Hi%20Treat%20Trove!%20I%20need%20help%20with%20my%20order."
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-[#FFF8E7] p-4 transition hover:bg-[#FFF0F2] hover:shadow-md"
  >
    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#25D366]">
      <FaWhatsapp />
    </span>

    <span className="mt-3 block text-sm font-semibold text-[#8B1E2D]">
      WhatsApp
    </span>

    <span className="mt-1 block text-xs text-gray-500">
      Fast reply
    </span>
  </a>

  {/* Call */}
  <a
    href="tel:+61426115694"
    className="rounded-xl bg-[#FFF8E7] p-4 transition hover:bg-[#FFF0F2] hover:shadow-md"
  >
    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#8B1E2D]">
      <FiPhone />
    </span>

    <span className="mt-3 block text-sm font-semibold text-[#8B1E2D]">
      Call Us
    </span>

    <span className="mt-1 block text-xs text-gray-500">
      +61 426 115 694
    </span>
  </a>

  {/* Email */}
  <a
    href="mailto:treattrove.au@gmail.com?subject=Treat%20Trove%20Order%20Enquiry"
    className="rounded-xl bg-[#FFF8E7] p-4 transition hover:bg-[#FFF0F2] hover:shadow-md"
  >
    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-[#8B1E2D]">
      <FiMail />
    </span>

    <span className="mt-3 block text-sm font-semibold text-[#8B1E2D]">
      Email Us
    </span>

    <span className="mt-1 block text-xs text-gray-500">
      24-hour response
    </span>
  </a>
</div>
            </div>
          </aside>
        </form>

        {/* TRUST */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <GiCupcake />,
              title: "Made Fresh Daily",
              subtitle: "Every order is freshly prepared",
            },
            {
              icon: <GiCakeSlice />,
              title: "Premium Ingredients",
              subtitle: "Carefully selected ingredients",
            },
            {
              icon: <FiLock />,
              title: "Secure Checkout",
              subtitle: "Your information is protected",
            },
            {
              icon: <FiTruck />,
              title: "Melbourne Delivery",
              subtitle: "Selected suburbs and dates",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-[#F0DDC8] bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF8E7] text-xl text-[#8B1E2D]">
                {item.icon}
              </div>

              <div>
                <p className="font-semibold text-[#1F1F1F]">
                  {item.title}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Reusable UI                                                                */
/* -------------------------------------------------------------------------- */

type CheckoutCardProps = {
  number: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

function CheckoutCard({
  number,
  title,
  icon,
  children,
}: CheckoutCardProps) {
  return (
    <section className="rounded-[28px] border border-[#F0DDC8] bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1E2D] text-sm font-bold text-white">
            {number}
          </span>

          <h2 className="font-serif text-2xl text-[#1F1F1F]">
            {title}
          </h2>
        </div>

        <span className="text-xl text-[#8B1E2D]">
          {icon}
        </span>
      </div>

      {children}
    </section>
  );
}

type SelectionCardProps = {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
};

function SelectionCard({
  selected,
  onClick,
  icon,
  title,
  description,
}: SelectionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative flex min-h-28 items-center gap-4 rounded-2xl border p-5 text-left transition ${
        selected
          ? "border-[#8B1E2D] bg-[#FFF7F7] shadow-sm"
          : "border-[#E7D7C5] bg-white hover:border-[#8B1E2D]/50"
      }`}
    >
      <span
        className={`absolute left-4 top-4 h-3.5 w-3.5 rounded-full border ${
          selected
            ? "border-[#8B1E2D] bg-[#8B1E2D] ring-4 ring-[#8B1E2D]/10"
            : "border-gray-300"
        }`}
      />

      <span className="ml-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF8E7] text-2xl text-[#8B1E2D]">
        {icon}
      </span>

      <span>
        <strong className="block text-[#1F1F1F]">
          {title}
        </strong>

        <span className="mt-1 block text-sm leading-5 text-gray-500">
          {description}
        </span>
      </span>
    </button>
  );
}

type FormFieldProps = {
  label: string;
  name: keyof FormValues;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode;
  inputMode?:
    | "text"
    | "tel"
    | "numeric"
    | "email"
    | "decimal"
    | "search"
    | "url";
  maxLength?: number;
};

function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
  icon,
  inputMode,
  maxLength,
}: FormFieldProps) {
  return (
    <div data-error={error ? "true" : "false"}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#8B1E2D]">*</span>
        )}
      </label>

      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}

        <input
          id={name}
          name={name}
          type={type}
          inputMode={inputMode}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-xl border bg-white py-3 pr-4 text-base outline-none transition ${
            icon ? "pl-11" : "pl-4"
          } ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-[#E7D7C5] focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/10"
          }`}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

type DateFieldProps = {
  label: string;
  name: keyof FormValues;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  required?: boolean;
  error?: string;
};

function DateField({
  label,
  name,
  value,
  onChange,
  required,
  error,
}: DateFieldProps) {
  return (
    <div data-error={error ? "true" : "false"}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#8B1E2D]">*</span>
        )}
      </label>

      <div
        className={`flex w-full min-w-0 items-center gap-3 rounded-xl border bg-white px-4 py-3 ${
          error
            ? "border-red-500"
            : "border-[#E7D7C5] focus-within:border-[#8B1E2D] focus-within:ring-2 focus-within:ring-[#8B1E2D]/10"
        }`}
      >
        <FiCalendar className="shrink-0 text-gray-400" />

        <input
          id={name}
          name={name}
          type="date"
          value={value}
          onChange={onChange}
          className="block w-full min-w-0 border-0 bg-transparent p-0 text-base outline-none"
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: keyof FormValues;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLSelectElement>,
  ) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
  error?: string;
};

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
  error,
}: SelectFieldProps) {
  return (
    <div data-error={error ? "true" : "false"}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#8B1E2D]">*</span>
        )}
      </label>

      <div className="relative">
        <FiClock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full appearance-none rounded-xl border bg-white py-3 pl-11 pr-10 text-base outline-none transition ${
            error
              ? "border-red-500"
              : "border-[#E7D7C5] focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/10"
          }`}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <FiChevronRight className="pointer-events-none absolute right-4 top-1/2 rotate-90 -translate-y-1/2 text-gray-400" />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
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