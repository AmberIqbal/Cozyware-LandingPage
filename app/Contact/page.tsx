
"use client";
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}! We'll get back to you soon.`);
    // Here you can add API call to backend or email service
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4 font-bold text-pink-600">Contact Us</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Send
      </button>
    </form>
  );
}
