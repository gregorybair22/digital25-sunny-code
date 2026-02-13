// src/components/ContactForm.jsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    website: "",
    message: "",
  });
  
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      const data = await res.json();
      
      if (res.status === 200) {
        setStatus("Form submitted successfully!");
        setForm({
          name: "",
          email: "",
          mobile: "",
          website: "",
          message: "",
        });
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div style={{
      flex: 1,
      minWidth: 320,
      maxWidth: 650,
      background: "#ffffff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 0 20px rgba(0,0,0,0.08)",
    }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="NAME*"
          value={form.name}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />

        <input
          type="email"
          name="email"
          placeholder="EMAIL*"
          value={form.email}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />

        <input
          type="tel"
          name="mobile"
          placeholder="MOBILE*"
          value={form.mobile}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />

        <input
          type="text"
          name="website"
          placeholder="WEBSITE*"
          value={form.website}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />

        <textarea
          name="message"
          placeholder="MESSAGE*"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="form-control mb-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="btn btn-black btn-rounded w-100"
          style={{ width: '100%' }}
        >
          {loading ? "Submitting..." : "SEND ME A PROPOSAL →"}
        </button>

        {status && (
          <p style={{ marginTop: 10, color: "#555" }}>{status}</p>
        )}
      </form>
    </div>
  );
}