import { useState } from "react";
import { useFormStatus } from "react-dom";
import { subscribeToNewsletter } from "@/lib/newsletter";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark ${pending ? "opacity-70" : ""}`}
    >
      {pending ? "Subscribing..." : "Subscribe"}
    </button>
  );
}

export function NewsletterForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  async function handleSubmit(formData: FormData) {
    const email = formData.get("email") as string;
    const result = await subscribeToNewsletter(email);

    if (result.ok) {
      setMessage("Thanks for subscribing! Check your inbox for a confirmation.");
      setEmail("");
    } else {
      setMessage(result.error);
    }
  }

  return (
    <div className="mt-8 rounded-lg bg-surface p-6">
      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-steel-900">
        Get the latest parts news
      </h3>
      <p className="mt-2 text-sm text-steel-600">
        Heavy-duty parts tips, new arrivals, and exclusive offers.
      </p>

      <form action={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="flex-1 rounded-md border border-border bg-white px-4 py-3 text-sm text-steel-900 placeholder:text-steel-400 focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <SubmitButton />
      </form>

      {message && (
        <p className={`mt-2 text-sm ${message.includes("Thanks") ? "text-success" : "text-error"}`}>{
          message
        }</p>
      )}
    </div>
  );
}