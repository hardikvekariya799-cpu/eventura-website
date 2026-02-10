"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function AIPlannerPage() {
  const [city, setCity] = useState("Ahmedabad");
  const [eventType, setEventType] = useState("Wedding");
  const [guests, setGuests] = useState(250);
  const [budget, setBudget] = useState(800000);
  const [style, setStyle] = useState("Luxury Royal");
  const [days, setDays] = useState(2);

  const plan = useMemo(() => {
    const perGuest = budget / Math.max(guests, 1);
    const tier =
      perGuest > 4500 ? "Ultra Luxury" :
      perGuest > 2500 ? "Luxury" :
      perGuest > 1500 ? "Premium" : "Budget Smart";

    const split = [
      ["Venue + Catering", Math.round(budget * 0.45)],
      ["Decor + Lighting", Math.round(budget * 0.18)],
      ["Photo + Video", Math.round(budget * 0.08)],
      ["Makeup + Styling", Math.round(budget * 0.06)],
      ["Entertainment", Math.round(budget * 0.06)],
      ["Logistics", Math.round(budget * 0.05)],
      ["Gifts + Misc", Math.round(budget * 0.07)],
      ["Buffer", Math.max(0, budget - Math.round(budget * 0.95))],
    ];

    const timeline =
      days === 1
        ? ["Welcome & Guest Check-in", "Main Function", "Dinner Service", "After-party / DJ"]
        : days === 2
        ? ["Day 1: Welcome + Mehendi / Sangeet", "Day 2: Wedding Ceremony + Reception"]
        : ["Day 1: Welcome", "Day 2: Main Ceremony", "Day 3: Reception + Wrap-up"];

    const checklist = [
      "Finalize guest count & budget range",
      "Shortlist 3 venues (capacity + location)",
      "Lock date & venue booking",
      "Choose decor moodboard & color palette",
      "Book photo/video & makeup",
      "Finalize catering menu & tasting",
      "Create function-wise timeline",
      "Confirm logistics: transport, entry, parking, rooms",
      "Final rehearsal + event-day coordination plan",
    ];

    return { tier, split, timeline, checklist };
  }, [budget, guests, days]);

  const waText = encodeURIComponent(
    `Hi Eventura! AI Planner Summary:\nCity: ${city}\nEvent: ${eventType}\nGuests: ${guests}\nDays: ${days}\nBudget: ₹${budget}\nStyle: ${style}\nPlease share a quote + next steps.`
  );

  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white", padding: 16 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 950 }}>Eventura</Link>
          <Link href="/book" style={btn}>Book</Link>
        </header>

        <h1 style={{ marginTop: 18 }}>AI Event Planner</h1>
        <p style={{ opacity: 0.75, lineHeight: 1.7 }}>
          Instant budget split + checklist + timeline. Then message us on WhatsApp to confirm details.
        </p>

        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr", marginTop: 12 }}>
          <div style={panel}>
            <div style={{ fontWeight: 950, marginBottom: 10 }}>Your inputs</div>

            <Label text="City" />
            <select value={city} onChange={(e) => setCity(e.target.value)} style={input}>
              {["Ahmedabad","Surat","Vadodara","Rajkot","Gandhinagar"].map((c) => <option key={c}>{c}</option>)}
            </select>

            <Label text="Event type" />
            <select value={eventType} onChange={(e) => setEventType(e.target.value)} style={input}>
              {["Wedding","Engagement","Reception","Corporate","Birthday","Other"].map((t) => <option key={t}>{t}</option>)}
            </select>

            <Label text="Guests" />
            <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value || 0))} style={input} />

            <Label text="Budget (₹)" />
            <input type="number" value={budget} onChange={(e) => setBudget(Number(e.target.value || 0))} style={input} />

            <Label text="Event days" />
            <select value={days} onChange={(e) => setDays(Number(e.target.value))} style={input}>
              <option value={1}>1 Day</option>
              <option value={2}>2 Days</option>
              <option value={3}>3 Days</option>
            </select>

            <Label text="Style" />
            <select value={style} onChange={(e) => setStyle(e.target.value)} style={input}>
              {["Luxury Royal","Modern Minimal","Floral Elegant","Luxe Glam","Traditional Gujarati"].map((s) => <option key={s}>{s}</option>)}
            </select>

            <a
              href={`https://wa.me/917622856869?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              style={{ ...btn, background: "white", color: "black", width: "100%", marginTop: 12, justifyContent: "center" }}
            >
              Send plan to WhatsApp
            </a>
          </div>

          <div style={panel}>
            <div style={{ fontWeight: 950, marginBottom: 10 }}>Your plan</div>

            <div style={{ padding: 10, borderRadius: 999, border: "1px solid rgba(201,162,74,.35)", background: "rgba(201,162,74,.12)" }}>
              Planning tier: <b>{plan.tier}</b>
            </div>

            <h3 style={{ marginTop: 14 }}>Budget split</h3>
            <ul style={{ opacity: 0.82, lineHeight: 1.8 }}>
              {plan.split.map(([k, v]) => (
                <li key={k}>
                  <b>{k}</b>: ₹{Number(v).toLocaleString()}
                </li>
              ))}
            </ul>

            <h3>Timeline</h3>
            <ul style={{ opacity: 0.82, lineHeight: 1.8 }}>
              {plan.timeline.map((t) => <li key={t}>{t}</li>)}
            </ul>

            <h3>Checklist</h3>
            <ul style={{ opacity: 0.82, lineHeight: 1.8 }}>
              {plan.checklist.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ text }: { text: string }) {
  return <div style={{ marginTop: 10, opacity: 0.7, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>{text}</div>;
}

const panel: React.CSSProperties = {
  padding: 16,
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(255,255,255,.05)",
};

const input: React.CSSProperties = {
  width: "100%",
  height: 44,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.18)",
  background: "rgba(0,0,0,.35)",
  color: "white",
  padding: "0 12px",
  marginTop: 6,
};

const btn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.18)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};
