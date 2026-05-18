"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<FormState>;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  function validateForm() {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 20) {
      newErrors.message =
        "Message should be at least 20 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      setSubmitStatus("idle");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#9CA3AF] mb-2"
        >
          Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-[#0B0F19]
            px-5 py-4
            text-white
            placeholder:text-[#6B7280]
            focus:outline-none
            focus:border-[#3B82F6]
            transition-colors
          "
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#9CA3AF] mb-2"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-[#0B0F19]
            px-5 py-4
            text-white
            placeholder:text-[#6B7280]
            focus:outline-none
            focus:border-[#3B82F6]
            transition-colors
          "
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#9CA3AF] mb-2"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-[#0B0F19]
            px-5 py-4
            text-white
            placeholder:text-[#6B7280]
            focus:outline-none
            focus:border-[#3B82F6]
            transition-colors
            resize-none
          "
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full
          rounded-2xl
          bg-[#3B82F6]
          hover:bg-[#2563EB]
          disabled:opacity-50
          disabled:cursor-not-allowed
          px-6 py-4
          font-semibold
          text-white
          transition-all
        "
      >
        {isSubmitting
          ? "Sending..."
          : "Submit Message"}
      </button>

      {/* Status */}
      {submitStatus === "success" && (
        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-sm text-green-400">
          Message submitted successfully.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-400">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  );
}