import React from "react";

type Props = {
  priceId: string;                // e.g. price_123 from Stripe
  quantity?: number;              // defaults to 1
  successPath?: string;           // defaults to /success
  cancelPath?: string;            // defaults to /cancel
  className?: string;
  children?: React.ReactNode;
};

export default function CheckoutButton({
  priceId,
  quantity = 1,
  successPath = "/success",
  cancelPath = "/cancel",
  className,
  children = "Buy now",
}: Props) {
  const onClick = async () => {
    const resp = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        priceId,
        quantity,
        successUrl: window.location.origin + successPath,
        cancelUrl: window.location.origin + cancelPath,
      }),
    });

    if (!resp.ok) {
      console.error("Checkout session error:", await resp.text());
      alert("Something went wrong starting checkout.");
      return;
    }

    const data = await resp.json();
    // If your server returns { url }, redirect:
    if (data?.url) {
      window.location.href = data.url;
      return;
    }
    // If your server returns { id }, you could instead use Stripe.js redirectToCheckout with sessionId
  };

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
