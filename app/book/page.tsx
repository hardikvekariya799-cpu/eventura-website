// app/book/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function BookPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const presetVenue = typeof searchParams?.venue === "string" ? searchParams.venue : "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Ahmedabad");
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("200");
  const [budget, setBudget] = useState("5,00,000");
  const [venue, setVenue] = useState(presetVenue);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const whatsappHref = useMemo(() => {
    // ✅ Replace with your real WhatsApp number (no + sign)
    const to = "91XXXXXXXXXX";

    const msg =
      `Hello Eventura 👋%0A` +
      `I want full planning service.%0A%0A` +
      `Name: ${encodeURIComponent(name || "-")}%0A` +
      `Phone: ${encodeURIComponent(phone || "-")}%0A` +
      `City: ${encodeURIComponent(city)}%0A` +
      `Event: ${encodeURIComponent(eventType)}%0A` +
      `Date: ${encodeURIComponent(eventDate || "-")}%0A` +
      `Guests: ${encodeURIComponent(guests || "-")}%0A` +
      `Budget: ${encodeURIComponent(budget || "-")}%0A` +
      `Venue preference: ${encodeURIComponent(venue || "-")}%0A` +
      `Notes: ${encodeURIComponent(notes || "-")}`;

    return `https://wa.me/${to}?text=${msg}`;
  }, [name, phone, city, eventType, eventDate, guests, budget, venue, notes]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={S.page}>
      <TopNav />

      <div style={S.sectionNoBorder}>
        <div style={S.container}>
          <div style={S.eyebrow}>Free consultation</div>
          <div style={S.h2}>Get your full planning quote</div>
          <div style={S.desc}>
            Fill this form and click WhatsApp to send your details instantly. (No database yet — deploy-safe.)
          </div>

          <div style={S.grid2}>
            {/* Form */}
            <div style={{ ...S.card, padding: 18 }}>
              {submitted ? (
                <div>
                  <div style={{ ...S.h2, fontSize: 20 }}>Submitted ✅</div>
                  <div style={{ ...S.p, marginTop: 8 }}>
                    Now click below to send your request to WhatsApp.
                  </div>

                  <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
                    <a href={whatsappHref} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid }}>
                      Send on WhatsApp
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={S.btn}
                    >
                      Edit details
                    </button>
                    <Link href="/" style={S.btn}>
                      ← Back to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
                  <Field label="Your name">
                    <input
                      style={S.input}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Hardik"
                      required
                    />
                  </Field>

                  <Field label="Phone number">
                    <input
                      style={S.input}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      required
                    />
                  </Field>

                  <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
                    <Field label="City">
                      <select style={S.input} value={city} onChange={(e) => setCity(e.target.value)}>
                        {["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Jamnagar"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Event type">
                      <select style={S.input} value={eventType} onChange={(e) => setEventType(e.target.value)}>
                        {["Wedding", "Engagement", "Reception", "Corporate", "Birthday", "Other"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
                    <Field label="Event date">
                      <input style={S.input} type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
                    </Field>

                    <Field label="Guests">
                      <input style={S.input} value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="e.g. 200" />
                    </Field>
                  </div>

                  <Field label="Approx budget (INR)">
                    <input style={S.input} value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="e.g. 5,00,000" />
                  </Field>

                  <Field label="Venue preference (optional)">
                    <input
                      style={S.input}
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      placeholder="e.g. Skyline Banquet & Lawn"
                    />
                  </Field>

                  <Field label="Notes (style, functions, requirements)">
                    <textarea
                      style={{ ...S.input, height: 110, paddingTop: 10 }}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. 2-day wedding, mehendi + sangeet, premium décor, 250 guests..."
                    />
                  </Field>

                  <button type="submit" style={{ ...S.btn, ...S.btnSolid }}>
                    Continue
                  </button>

                  <div style={S.small}>
                    Next step: we can store leads in a database (Google Sheets / Firebase / Supabase) after deployment is stable.
                  </div>
                </form>
              )}
            </div>

            {/* Right: what you get */}
            <div style={{ display: "grid", gap: 12 }}>
              <div style={{ ...S.card, padding: 18 }}>
                <div style={S.title}>What’s included in full planning</div>
                <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
                  <div style={S.muted}>• Venue shortlisting + negotiation</div>
                  <div style={S.muted}>• Vendor sourcing (decor, photo, catering, DJ)</div>
                  <div style={S.muted}>• Budget plan + timeline</div>
                  <div style={S.muted}>• Logistics + on-day coordination</div>
                </div>
              </div>

              <div style={{ ...S.card, padding: 18 }}>
                <div style={S.title}>Fast contact</div>
                <div style={{ ...S.small, marginTop: 6 }}>
                  Replace your WhatsApp number inside this file: <b>to = "91XXXXXXXXXX"</b>
                </div>
                <a href={whatsappHref} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid, marginTop: 12 }}>
                  Chat on WhatsApp
                </a>
                <Link href="/venues" style={{ ...S.btn, marginTop: 10 }}>
                  Browse venues
                </Link>
              </div>

              <div style={{ ...S.card, padding: 18 }}>
                <div style={S.title}>Deploy-safe</div>
                <div style={{ ...S.small, marginTop: 6 }}>
                  This form does not require a database yet, so Vercel build stays clean.
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <Link href="/" style={S.btn}>← Back to Home</Link>
          </div>
        </div>
      </div>

      <FooterMini />
      <WhatsAppMini />
    </div>
  );
}

/* ---------- Small UI helpers inside this single file ---------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={S.label}>{label}</span>
      {children}
    </label>
  );
}

function TopNav() {
  return (
    <div style={S.navWrap}>
      <div style={S.container}>
        <div style={S.nav}>
          <Link href="/" style={S.brand}>
            <div style={S.logo}>E</div>
            <div>
              <div style={S.brandTitle}>Eventura</div>
              <div style={S.brandSub}>Gujarat • Full Planning</div>
            </div>
          </Link>

          <div style={S.navRight}>
            <Link href="/venues" style={S.btn}>Venues</Link>
            <Link href="/book" style={{ ...S.btn, ...S.btnSolid }}>Free Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterMini() {
  return (
    <div style={S.footer}>
      <div style={S.container}>
        <div style={S.small}>© {new Date().getFullYear()} Eventura. All rights reserved.</div>
      </div>
    </div>
  );
}

function WhatsAppMini() {
  return (
    <a
      href="https://wa.me/917622856869"
      target="_blank"
      rel="noreferrer"
      style={S.wa}
      aria-label="Chat on WhatsApp"
    >
      <span style={S.waIcon}>W</span>
      WhatsApp
    </a>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#000", color: "rgba(255,255,255,.92)" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },

  navWrap: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(0,0,0,.65)",
    borderBottom: "1px solid rgba(255,255,255,.12)",
  },
  nav: { height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 },
  brand: { display: "flex", gap: 10, alignItems: "center", textDecoration: "none" },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    fontWeight: 900,
    color: "rgba(255,255,255,.92)",
  },
  brandTitle: { fontWeight: 900, fontSize: 14, lineHeight: 1.1, color: "rgba(255,255,255,.92)" },
  brandSub: { fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 2 },

  navRight: { display: "flex", gap: 10, alignItems: "center" },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.12)",
    background: "transparent",
    color: "rgba(255,255,255,.92)",
    fontSize: 13,
    fontWeight: 800,
    textDecoration: "none",
  },
  btnSolid: { background: "#fff", color: "#000", borderColor: "rgba(255,255,255,.9)" },

  sectionNoBorder: { padding: "34px 0" },
  eyebrow: { fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", fontWeight: 900, marginBottom: 6 },
  h2: { fontSize: 26, fontWeight: 900, letterSpacing: "-0.02em" },
  desc: { color: "rgba(255,255,255,.68)", fontSize: 14, marginTop: 8 },

  card: {
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    borderRadius: 18,
    boxShadow: "0 16px 40px rgba(0,0,0,.45)",
  },

  grid2: {
    marginTop: 14,
    display: "grid",
    gap: 12,
    gridTemplateColumns: "1.2fr .8fr",
  },

  label: { fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", fontWeight: 900 },
  input: {
    height: 44,
    width: "100%",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(0,0,0,.35)",
    color: "rgba(255,255,255,.92)",
    padding: "0 12px",
    outline: "none",
    fontFamily: "inherit",
  },

  title: { fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,.92)" },
  p: { marginTop: 10, color: "rgba(255,255,255,.68)", fontSize: 15, lineHeight: 1.6 },
  muted: { color: "rgba(255,255,255,.68)", fontSize: 14 },
  small: { fontSize: 12, color: "rgba(255,255,255,.55)", marginTop: 10 },

  footer: { borderTop: "1px solid rgba(255,255,255,.12)", padding: "22px 0", marginTop: 24 },

  wa: {
    position: "fixed",
    right: 16,
    bottom: 16,
    zIndex: 60,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.10)",
    backdropFilter: "blur(8px)",
    color: "rgba(255,255,255,.92)",
    textDecoration: "none",
    boxShadow: "0 16px 40px rgba(0,0,0,.45)",
    fontWeight: 900,
    fontSize: 13,
  },
  waIcon: {
    width: 34,
    height: 34,
    borderRadius: 999,
    display: "grid",
    placeItems: "center",
    background: "#fff",
    color: "#000",
    fontWeight: 900,
  },
};
