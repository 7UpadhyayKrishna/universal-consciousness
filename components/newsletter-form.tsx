"use client";

import { useState } from "react";

export function NewsletterForm({ open }: { open: boolean }) {
  const [message, setMessage] = useState(
    open
      ? "One idea, one practice, and one question, once a week."
      : "Subscriptions are not open yet.",
  );
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!open) {
      setMessage("Subscriptions are not open yet.");
      return;
    }
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");
    setPending(true);
    try {
      const response = await fetch("/api/newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const payload = (await response.json()) as { ok?: boolean; reason?: string };
      if (payload.ok) {
        setMessage("You are on the list.");
        form.reset();
      } else if (payload.reason === "closed") {
        setMessage("Subscriptions are not open yet.");
      } else {
        setMessage("Enter a valid email address.");
      }
    } catch {
      setMessage("The form could not be sent. Try again later.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="newsletter" onSubmit={onSubmit}>
      <p>{message}</p>
      <div className="newsletter-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          disabled={!open || pending}
        />
        <button type="submit" disabled={!open || pending}>
          {open ? "Subscribe" : "Not open"}
        </button>
      </div>
    </form>
  );
}
