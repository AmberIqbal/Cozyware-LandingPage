"use client";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert(`Thanks for signing up, ${form.email}!`);
    // Add backend registration logic here
    setForm({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl mb-4 font-bold text-pink-600">Sign Up</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
      >
        Register
      </button>
    </form>
  );
}
