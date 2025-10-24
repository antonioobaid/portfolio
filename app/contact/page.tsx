"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔹 Fyll i din egna info här
    emailjs
      .send(
        "service_id", // t.ex. service_abc123
        "template_id", // t.ex. template_xyz789
        formData,
        "public_key" // t.ex. JH6A5bP_qXz123
      )
      .then(() => {
        setStatus("✅ Meddelandet har skickats!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("❌ Något gick fel, försök igen."));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Kontakta mig</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Namn</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">E-post</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Meddelande</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white p-2"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Skicka
        </button>

        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
}
