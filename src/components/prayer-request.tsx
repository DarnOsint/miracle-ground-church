"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui";
import { HeartIcon, MailIcon } from "@/components/icons";

export function PrayerRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", request: "" });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("Prayer Request — " + (form.name || "Anonymous"));
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nPrayer Request:\n${form.request}\n\nThis prayer request was submitted through the Miracle Ground website.\nFrom: ${siteConfig.name}, Juba, South Sudan`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section
      id="prayer"
      className="relative scroll-mt-24 overflow-hidden bg-cream-50 py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(212,175,55,0.12),transparent_45%)]" />
      <Container className="relative max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-night-900/10 bg-white shadow-xl">
          <div className="flex flex-col gap-10 bg-night-950 p-8 text-center text-cream-50 sm:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15">
              <HeartIcon className="h-6 w-6 text-gold-400" />
            </span>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              We Would Love to Pray With You
            </h2>
            <p className="mx-auto max-w-xl text-cream-50/80">
              Share your prayer request with us. Our prayer team stands in
              faith with you — every request is held in total confidentiality.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center sm:p-12">
              <p className="font-serif text-2xl font-semibold text-night-900">
                Thank You — Request Received
              </p>
              <p className="mx-auto mt-3 max-w-md text-night-900/70">
                Your email is ready to send. Check your email app and press
                send, and our team will begin praying with you.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 rounded-full border border-night-900/15 px-6 py-3 text-sm font-semibold text-night-900 transition-colors hover:border-gold-600/50 hover:text-gold-600"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 p-8 sm:p-12">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-night-900">
                  Your Name
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name (optional)"
                    className="rounded-xl border border-night-900/15 bg-cream-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-600"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-night-900">
                  Your Email
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="you@example.com (optional)"
                    className="rounded-xl border border-night-900/15 bg-cream-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-600"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium text-night-900">
                Prayer Request
                <textarea
                  required
                  value={form.request}
                  onChange={(e) =>
                    setForm({ ...form, request: e.target.value })
                  }
                  rows={5}
                  placeholder="How can we pray for you today?"
                  className="resize-none rounded-xl border border-night-900/15 bg-cream-50 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-600"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-night-950 shadow-md shadow-gold-500/25 transition-all hover:-translate-y-0.5 hover:bg-gold-400 sm:justify-self-start"
              >
                <MailIcon className="h-4 w-4" />
                Send Prayer Request
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}