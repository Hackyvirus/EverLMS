"use client";

import { useState } from "react";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const userName = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, email, password, phoneNumber: 1234567890 }), // adjust as per backend
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to sign up");
      } else {
        alert("✅ User created successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto p-4 border rounded-lg shadow">
      <input name="name" placeholder="Name" className="border p-2 w-full" />
      <input name="email" type="email" placeholder="Email" className="border p-2 w-full" />
      <input name="password" type="password" placeholder="Password" className="border p-2 w-full" />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}
