"use client";

import { useMemo, useState } from "react";
import { SITE, btnPrimary } from "../lib/site";

const INITIAL = {
  name: "",
  email: "",
  company: "",
  intent: "call",
  message: "",
  website: "",
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const intentLabel = useMemo(
    () =>
      values.intent === "walkthrough"
        ? "Video walkthrough of the live Bid-to-Cash system"
        : "15-minute workflow call",
    [values.intent]
  );

  function update(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!values.email.trim()) next.email = "Enter your email.";
    else if (!isValidEmail(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Tell us briefly what you need.";
    return next;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (values.website) return;

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const subject =
      values.intent === "walkthrough"
        ? "TekTagma video walkthrough request"
        : "TekTagma 15-minute workflow call";
    const body = [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Company / trade: ${values.company.trim() || "Not provided"}`,
      `Request: ${intentLabel}`,
      "",
      values.message.trim(),
    ].join("\n");
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      window.location.href = mailto;
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        `We could not open your email app. Write us directly at ${SITE.email}.`
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm"
        role="status"
        aria-live="polite"
      >
        <h2 className="text-2xl font-bold text-navy">Request ready to send</h2>
        <p className="mt-3 text-muted leading-7">
          Your email app should open with a prefilled message to{" "}
          <a className="font-medium text-navy underline underline-offset-4" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          . If it does not, send the same details there and we will follow up.
        </p>
        <button
          type="button"
          className={`${btnPrimary} mt-6`}
          onClick={() => {
            setValues(INITIAL);
            setErrors({});
            setStatus("idle");
          }}
        >
          Send another request
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 text-body outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8"
      aria-busy={status === "loading"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Name
          <input
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            disabled={status === "loading"}
          />
          {errors.name ? <p className="mt-1 text-sm text-red-700">{errors.name}</p> : null}
        </label>
        <label className="block text-sm font-medium text-navy">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            disabled={status === "loading"}
          />
          {errors.email ? <p className="mt-1 text-sm text-red-700">{errors.email}</p> : null}
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-navy">
        Company / trade
        <input
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          className={fieldClass}
          disabled={status === "loading"}
        />
      </label>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium text-navy">What would you like?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-md border border-navy/15 p-3 has-[:checked]:border-amber has-[:checked]:bg-amber/10">
            <input
              type="radio"
              name="intent"
              value="call"
              checked={values.intent === "call"}
              onChange={() => update("intent", "call")}
              disabled={status === "loading"}
              className="mt-1"
            />
            <span>
              <span className="block font-semibold text-navy">15-minute workflow call</span>
              <span className="text-sm text-muted">Book a free diagnostic conversation.</span>
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 rounded-md border border-navy/15 p-3 has-[:checked]:border-amber has-[:checked]:bg-amber/10">
            <input
              type="radio"
              name="intent"
              value="walkthrough"
              checked={values.intent === "walkthrough"}
              onChange={() => update("intent", "walkthrough")}
              disabled={status === "loading"}
              className="mt-1"
            />
            <span>
              <span className="block font-semibold text-navy">Video walkthrough</span>
              <span className="text-sm text-muted">See the live Bid-to-Cash system.</span>
            </span>
          </label>
        </div>
      </fieldset>

      <label className="mt-5 block text-sm font-medium text-navy">
        Message
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={fieldClass}
          aria-invalid={Boolean(errors.message)}
          disabled={status === "loading"}
          placeholder="Jobs, tools, or bottlenecks you want us to look at."
        />
        {errors.message ? <p className="mt-1 text-sm text-red-700">{errors.message}</p> : null}
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      {status === "error" ? (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button type="submit" className={`${btnPrimary} mt-6 w-full sm:w-auto`} disabled={status === "loading"}>
        {status === "loading" ? "Preparing request…" : "Book a Workflow Call"}
      </button>
      <p className="mt-3 text-sm text-muted">
        Submissions go to{" "}
        <a className="font-medium text-navy underline underline-offset-4" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        .
      </p>
    </form>
  );
}
