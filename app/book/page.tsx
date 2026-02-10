"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import emailjs from "emailjs-com";

export default function BookPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const cfg = useMemo(() => {
    return {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    };
  }, []);

  const missing = !cfg.serviceId || !cfg.templateId || !cfg.publicKey;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);

    if (missing) {
      setErr("Email is not configured yet. Add EmailJS keys in Vercel (Production + Preview) and redeploy.");
      return;
    }

    setLoading(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const templateParams = {
        name: String(fd.get("name") || ""),
        phone: String(fd.get("phone") || ""),
        city: String(fd.get("city") || ""),
        eventType: String(fd.get("eventType") || ""),
        startDate: String(fd.get("startDate") || ""),
        endDate: String(fd.get("endDate") || ""),
        guests: String(fd.get("guests") || ""),
        message: String(fd.get("message") || ""),
      };

      await emailjs.send(cfg.serviceId, cfg.templateId, templateParams, cfg.publicKey);

      form.reset();
      setDone(true);
    } catch {
      setErr("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <p style={{ opacity: .75, lineHeight: 1.7 }}>Fill in the details and we’ll contact you with a shortlist + full planning quote.</p>

          {done && (
            <div style={{ padding: 12, borderRadius: 12, background: "rgba(0,255,140,.10)", border: "1px solid rgba(0,255,140,.25)" }}>
              ✅ Request sent successfully. We’ll contact you shortly.
            </div>
          )}

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

            {err ? <div style={{ padding: 10, borderRadius: 12, background: "rgba(255,70,70,.10)", border: "1px solid rgba(255,70,70,.25)" }}>❌ {err}</div> : null}

            <button disabled={loading} style={{ ...btn, ...btnSolid, width: "100%" }}>
              {loading ? "Sending..." : "Send Request"}
            </button>
          </form>

          <div style={{ marginTop: 14 }}>
            {/* Optional WhatsApp as extra (working link, no 404) */}
            <a href="https://wa.me/917622856869" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "underline", opacity: .8 }}>
              Or message us on WhatsApp
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
