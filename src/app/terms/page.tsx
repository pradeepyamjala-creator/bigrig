import type { Metadata } from "next";
import { PageShell } from "@/components/content/PageShell";
import { SITE } from "@/lib/site";

const currentYear = new Date().getFullYear();

const termsContent = {
  title: "Terms of Service",
  description: "The terms that govern your use of Nova A to Z Parts.",
  lastUpdated: `June ${currentYear}`,
  sections: [
    {
      title: "Orders & Pricing",
      content: [
        "We work hard to keep pricing and availability accurate, but errors can happen.",
        "We reserve the right to correct errors and to cancel orders affected by them, with a full refund."
      ]
    },
    {
      title: "Fitment",
      content: [
        "Fitment data is provided to help you choose the right part, but you are responsible for confirming compatibility for your specific application."
      ]
    },
    {
      title: "Accounts",
      content: [
        "You're responsible for keeping your account credentials secure and for activity under your account."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        `To the extent permitted by law, ${SITE.name} is not liable for indirect or consequential damages arising from use of the site or products purchased.`
      ]
    },
    {
      title: "Contact",
      content: [
        `Questions about these terms? Email ${SITE.email}.`
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: termsContent.title,
  description: termsContent.description,
};

export default function TermsPage() {
  return (
    <PageShell title={termsContent.title} subtitle={`Last updated ${termsContent.lastUpdated}`}>
      <p>
        By using {SITE.name}, you agree to these terms. Please read them. If you don't agree, please don't use the site.
      </p>

      {termsContent.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          {section.content.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
        </div>
      ))}
    </PageShell>
  );
}