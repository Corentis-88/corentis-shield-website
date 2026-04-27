"use client";

import { type FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";

const enquiryOptions = [
  "Book a conversation",
  "Discuss a design partnership",
  "Ask about Corentis Shield",
  "Funding or investor conversation",
];

type FormState = {
  name: string;
  email: string;
  organisation: string;
  enquiry: string;
  message: string;
  consent: boolean;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  organisation: "",
  enquiry: enquiryOptions[0],
  message: "",
  consent: false,
};

const inputClassName = [
  "mt-2 w-full rounded-lg border border-white/10 bg-ink px-4 py-3 text-white",
  "outline-none transition placeholder:text-slate-600 focus:border-cyanx",
].join(" ");

const errorInputClassName = "border-rose-300/70 focus:border-rose-300";

const submitClassName = [
  "mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-cyanx px-5 py-3",
  "text-sm font-semibold text-ink shadow-[0_12px_34px_rgba(48,213,255,0.18)]",
  "transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60",
].join(" ");

function validate(form: FormState) {
  const errors: ErrorState = {};

  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.organisation.trim()) errors.organisation = "Organisation is required.";
  if (!form.message.trim()) errors.message = "Please include a short message.";

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() ?? "";
  const endpointConfigured = endpoint.length > 0;

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    if (!endpointConfigured) {
      setStatus("error");
      setStatusMessage("The contact form is not configured yet. Please try again shortly.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const sourcePage =
        typeof window !== "undefined" ? `${window.location.pathname}${window.location.search}` : "";

      formData.set("name", form.name.trim());
      formData.set("email", form.email.trim());
      formData.set("organisation", form.organisation.trim());
      formData.set("enquiry_type", form.enquiry);
      formData.set("interest_type", form.enquiry);
      formData.set("message", form.message.trim());
      formData.set("consent", form.consent ? "yes" : "no");
      formData.set("source_page", sourcePage);
      formData.set("_subject", `Corentis website enquiry: ${form.enquiry}`);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        let message = "Something went wrong while sending your message. Please try again.";

        try {
          const data = (await response.json()) as { errors?: Array<{ message?: string }> };
          if (data.errors?.length) {
            message = data.errors
              .map((item) => item.message)
              .filter(Boolean)
              .join(" ");
          }
        } catch {
          // Keep the friendly fallback message.
        }

        throw new Error(message);
      }

      setForm(initialState);
      setErrors({});
      setStatus("success");
      setStatusMessage("Thank you. Your message has been sent to Corentis.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message. Please try again."
      );
    }
  }

  return (
    <form
      action={endpointConfigured ? endpoint : undefined}
      method="POST"
      noValidate
      onSubmit={handleSubmit}
      className="card-base card-premium p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={form.name}
          error={errors.name}
          onChange={(value) => updateField("name", value)}
          placeholder="Your name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(value) => updateField("email", value)}
          placeholder="you@example.com"
        />
      </div>

      <Field
        label="Organisation"
        name="organisation"
        value={form.organisation}
        error={errors.organisation}
        onChange={(value) => updateField("organisation", value)}
        placeholder="Company or organisation"
        className="mt-5"
      />

      <label className="mt-5 block text-sm font-medium text-slate-200">
        Enquiry type
        <select
          name="enquiry_type"
          className={inputClassName}
          value={form.enquiry}
          onChange={(event) => updateField("enquiry", event.target.value)}
        >
          {enquiryOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="mt-5 block text-sm font-medium text-slate-200">
        Message
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${inputClassName} ${errors.message ? errorInputClassName : ""}`}
          placeholder="Tell us about the AI workflow, pilot, funding conversation or partnership opportunity."
        />
        {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message}</p>}
      </label>

      <label className="mt-5 flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-ink text-cyanx"
        />
        <span>
          I agree that Corentis can use these details to respond to this enquiry and follow up about
          relevant product, pilot or partnership conversations.
        </span>
      </label>

      {!endpointConfigured && (
        <p className="mt-5 rounded-lg border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
          The contact form endpoint is not configured. Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to the
          Formspree endpoint.
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className={submitClassName}
          disabled={status === "submitting" || !endpointConfigured}
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle aria-hidden className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              <Send aria-hidden className="h-4 w-4" />
              Send message
            </>
          )}
        </button>

        {statusMessage && (
          <p
            className={`min-h-6 text-sm ${
              status === "success" ? "text-emerald-200" : "text-rose-200"
            }`}
          >
            {status === "success" && <CheckCircle2 className="mr-2 inline h-4 w-4" />}
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block text-sm font-medium text-slate-200 ${className}`}>
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClassName} ${error ? errorInputClassName : ""}`}
        placeholder={placeholder}
      />
      {error && <p className="mt-2 text-sm text-rose-300">{error}</p>}
    </label>
  );
}
