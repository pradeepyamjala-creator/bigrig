import type { Metadata } from "next";
import { PageShell } from "@/components/content/PageShell";
import { SITE } from "@/lib/site";
import { currentYear } from "@/lib/utils";

const returnsContent = {
  title: "Returns & Refunds",
  description: "Our policy for returning or exchanging items you've purchased.",
  lastUpdated: `June ${currentYear}`,
  sections: [
    {
      title: "Return Policy",
      content: [
        "We accept returns within 30 days of delivery for a full refund.",
        "Items must be in their original condition with all packaging and tags intact.",
        "We cover the cost of return shipping unless the return is due to our error.",
      ]
    },
    {
      title: "RMA Process",
      content: [
        "To start a return, visit your account page and select 'Request Return'.",
        "You'll receive an RMA number and instructions for shipping the item back.",
        "Once we receive the item, we'll process your refund to the original payment method.",
      ]
    },
    {
      title: "Exceptions",
      content: [
        "We do not accept returns on custom orders or items marked as 'final sale'.",
        "Software and digital products are non-refundable once downloaded.",
      ]
    },
    {
      title: "Contact",
      content: [
        `Questions about returns? Email ${SITE.email} or call our support line at ${SITE.phone}.`,
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: returnsContent.title,
  description: returnsContent.description,
};

export default function ReturnsPage() {
  return (
    <PageShell title={returnsContent.title} subtitle={`Last updated ${returnsContent.lastUpdated}`}>
      <p>
        We want you to be happy with your purchase. If something isn't right,
        we'll make it right.
      </p>

      {returnsContent.sections.map((section, index) => (
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