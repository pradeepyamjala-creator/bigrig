import { db } from "./db";
import * as s from "@/db/schema";
import { eq } from "drizzle-orm";

interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
}

export async function subscribeToNewsletter(email: string): Promise<{ ok: true } | { ok: false; error: string }> {
  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  try {
    // Check if email already exists
    const existing = await db
      .select()
      .from(s.newsletterSubscribers)
      .where(eq(s.newsletterSubscribers.email, email))
      .limit(1);

    if (existing.length > 0) {
      return { ok: false, error: "This email is already subscribed." };
    }

    // Insert new subscriber
    await db.insert(s.newsletterSubscribers).values({
      email,
      subscribedAt: new Date(),
    });

    // In a real app, you would also send a confirmation email here
    // sendConfirmationEmail(email);

    return { ok: true };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return { ok: false, error: "Failed to subscribe. Please try again later." };
  }
}