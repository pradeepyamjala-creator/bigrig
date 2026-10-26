import type { Metadata } from "next";
import { PageShell } from "@/components/content/PageShell";
import { SITE } from "@/lib/site";
import Link from "next/link";
import { currentYear } from "@/lib/utils";

const privacyContent = {
  title: "Privacy Policy",
  description: "How Nova A to Z Parts collects, uses, and protects your information.",
  lastUpdated: `June ${currentYear}`,
  sections: [
    {
      title: "What We Collect",
      content: [
        "Account details you provide (name, email, password).",
        "Order and shipping information needed to fulfill purchases.",
        "Basic usage data to keep the site fast and secure.",
      ]
    },
    {
      title: "How We Use It",
      content: [
        "To process orders, returns, and support requests.",
        "To operate, secure, and improve the store.",
        "To communicate about your orders and account.",
      ]
    },
    {
      title: "What We Don't Do",
      content: [
        "We don't sell your personal information. Payment details are handled by our payment processor and never stored on our servers.",
      ]
    },
    {
      title: "Cookies & Tracking",
      content: [
        "We use cookies to remember your cart and preferences. You can disable cookies in your browser, but this may affect site functionality.",
      ]
    },
    {
      title: "Your Choices",
      content: [
        "You can update or delete your account information at any time. For privacy requests, contact us at " + SITE.email + ".",
        <Link key="unsubscribe" href="/unsubscribe">Unsubscribe from marketing emails</Link>,
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: privacyContent.title,
  description: privacyContent.description,
};

export default function PrivacyPage() {
  return (
    <PageShell title={privacyContent.title} subtitle={`Last updated ${privacyContent.lastUpdated}`}>
      <p>
        This policy explains what information {SITE.name} collects, how we use it,
        and the choices you have. We keep it short and plain.
      </p>

      {privacyContent.sections.map((section, index) => (
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