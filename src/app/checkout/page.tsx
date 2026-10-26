import type { Metadata } from "next";
import { PageShell } from "@/components/content/PageShell";
import { SITE } from "@/lib/site";
import { currentYear } from "@/lib/utils";

const checkoutContent = {
  title: "Checkout Information",
  description: "Information about our checkout process and payment options.",
  lastUpdated: `June ${currentYear}`,
  sections: [
    {
      title: "Payment Options",
      content: [
        "We accept Visa, Mastercard, American Express, Discover, and PayPal.",
        "We also accept purchase orders for commercial customers.",
      ]
    },
    {
      title: "Order Processing",
      content: [
        "Orders are processed within 1-2 business days.",
        "You'll receive an order confirmation email with tracking information.",
      ]
    },
    {
      title: "Shipping",
      content: [
        "We offer standard and expedited shipping options.",
        "Shipping costs are calculated at checkout based on your location.",
      ]
    },
    {
      title: "Contact",
      content: [
        `Questions about checkout? Email ${SITE.email} or call our support line at ${SITE.phone}.`,
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: checkoutContent.title,
  description: checkoutContent.description,
};

export default function CheckoutPage() {
  return (
    <PageShell title={checkoutContent.title} subtitle={`Last updated ${checkoutContent.lastUpdated}`}>
      <p>
        Our checkout process is designed to be simple and secure.
      </p>

      {checkoutContent.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <ul>
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </PageShell>
  );
}