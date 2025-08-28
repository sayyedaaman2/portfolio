"use client";

import { useState, FormEvent } from "react";
type Form = {
  name: string,
  email: string,
  message?: string,
}
export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({
    nameError: "",
    emailError: "",
  })
  const [submitButton,setSubmitButton] = useState({
    content : "Submit Message",
    isLoading: false,

  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }
  function handleOnLeave(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    if (name === "name") {
      if (!value.trim()) {
        setFormError((prev) => ({ ...prev, nameError: "Name is required" }));
      } else {
        setFormError((prev) => ({ ...prev, nameError: "" }));
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        setFormError((prev) => ({ ...prev, emailError: "Email is required" }));
      } else if (!emailRegex.test(value)) {
        setFormError((prev) => ({ ...prev, emailError: "Enter a valid email" }));
      } else {
        setFormError((prev) => ({ ...prev, emailError: "" }));
      }
    }
  }

  async function onSubmitHandle(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // Start loading state
  setSubmitButton(() => ({ content: "Sending...", isLoading: true }));

  // Validate before sending
  if (formError.nameError || formError.emailError || !form.name.trim() || !form.email.trim()) {
    alert("Please fix errors before submitting");
    setSubmitButton(() => ({ content: "Submit Message", isLoading: false }));
    return;
  }

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setSubmitButton(() => ({
        content: "Message submitted successfully ✅",
        isLoading: false,
      }));
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", message: "" });

      // Reset button after 5 sec
      setTimeout(
        () =>
          setSubmitButton(() => ({ content: "Submit Message", isLoading: false })),
        5000
      );
    } else {
      throw new Error("Failed response from server");
    }
  } catch (error) {
    console.error(error);
    setSubmitButton(() => ({
      content: "Failed to send the message ❌",
      isLoading: false,
    }));
    alert("Failed to send the message!");
    setTimeout(
      () =>
        setSubmitButton(() => ({ content: "Submit Message", isLoading: false })),
      5000
    );
  }
}

  return (
    <form onSubmit={onSubmitHandle} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        onBlur={handleOnLeave}

        className="p-3 border border-gray-300 rounded-md"
      />{formError.nameError && (
        <p className="text-red-500 text-sm">{formError.nameError}</p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        onBlur={handleOnLeave}

        className="p-3 border border-gray-300 rounded-md"
      />

      {formError.emailError && (
        <p className="text-red-500 text-sm">{formError.emailError}</p>
      )}
      <textarea
        name="message"
        rows={4}
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="p-3 border border-gray-300 rounded-md"
      />
      <button type="submit" disabled={submitButton.isLoading} className="disabled:bg-slate-50 bg-slate-600 text-white py-2 rounded-md">
        {submitButton.content}
      </button>
    </form>
  );
}
