"use client";

import Link from "next/link";
import { useState } from "react";

export default function BookPage() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const msg = `
New Eventura Enquiry
Name: ${fd.get("name")}
Phone: ${fd.get("phone")}
City: ${fd.get("city")}
Event: ${fd.get("eventType")}
Start: ${fd.get("startDate")}
End: ${fd.get("endDate")}
Guests: ${fd.get("guests")}
Message: ${fd.get("message")}
`.trim();

    const url = `https://wa.me/917622856869?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setLoading(false);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 900 }}>Eventura</Link>
          <nav style={{ display: "flex", gap: 10 }}>
            <Link href="/venues" style={btn}>Venues</Link>
            <Link href="/book" style={{ ...btn, ...btnSolid }}>Book</Link>
          </nav>
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h1>Book a Free Consultation</h1>
          <p style={{ opacity: .75, lineHeight: 1.7 }}>Fill the form and WhatsApp will open with your enquiry.</p>

          <form onSubmit={onSubmit} style={{ marginTop: 14, display: "grid", gap: 10 }}>
            <input name="name" placeholder="Your name" required style={input} />
            <input name="phone" placeholder="Phone number" required style={input} />
            <select name="city" required style={input}>
              {["Ahmedabad","Surat","Vadodara","Rajkot","Gandhinagar","Jamnagar"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select name="eventType" required style={input}>
              {["Wedding","Engagement","Reception","Corporate","Birthday","Other"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <input name="startDate" type="date" style={input} />
            <input name="endDate" type="date" style={input} />
            <input name="guests" placeholder="Guests" style={input} />
            <textarea name="message" placeholder="Any special request?" rows={4} style={{ ...input, height: "auto", paddingTop: 10 }} />

            <button disabled={loading} style={{ ...btn, ...btnSolid, width: "100%" }}>
              {loading ? "Opening WhatsApp..." : "Send on WhatsApp"}
            </button>
          </form>

          <div style={{ marginTop: 12 }}>
            <a href="https://wa.me/917622856869" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "underline", opacity: .8 }}>
              Or open WhatsApp directly
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

const input: React.CSSProperties = {
  padding: "12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,.2)",
  background: "rgba(0,0,0,.4)",
  color: "white",
};

const btn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.2)",
  color: "white",
  background: "transparent",
  textDecoration: "none",
  fontWeight: 900,
};

const btnSolid: React.CSSProperties = {
  background: "white",
  color: "black",
};
