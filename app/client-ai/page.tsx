"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Plan = {
  tier: string;
  budgetSplit: Array<[string, number]>;
  timeline: string[];
  checklist: string[];
  theme: {
    vibe: string;
    colors: string[];
    decorIdeas: string[];
  };
  guestPlan: string[];
};

export default function ClientAIPage() {
  const [city, setCity] = useState("Ahmedabad");
  const [eventType, setEventType] = useState("Wedding");
  const [days, setDays] = useState(2);
  const [guests, setGuests] = useState(250);
  const [budget, setBudget] = useState(800000);
  const [style, setStyle] = useState("Luxury Royal");
  const [priority, setPriority] = useState("Decor + Experience"); // what they care about most

  const plan: Plan = useMemo(() => {
    const perGuest = budget / Math.max(guests, 1);
    const tier =
      perGuest > 4500 ? "Ultra Luxury" :
      perGuest > 2500 ? "Luxury" :
      perGuest > 1500 ? "Premium" : "Budget Smart";

    // Budget split rules (client-facing)
    const base = [
      ["Venue + Catering", 0.45],
      ["Decor + Lighting", 0.18],
      ["Photo + Video", 0.08],
      ["Makeup + Styling", 0.06],
      ["Entertainment", 0.06],
      ["Logistics", 0.05],
      ["Gifts + Misc", 0.07],
      ["Buffer", 0.05],
    ] as Array<[string, number]>;

    // Adjust based on priority
    const adjust = (label: string, delta: number) => {
      const idx = base.findIndex((x) => x[0] === label);
      if (idx >= 0) base[idx] = [base[idx][0], Math.max(0.02, base[idx][1] + delta)];
    };

    if (priority === "Decor + Experience") {
      adjust("Decor + Lighting", +0.05);
      adjust("Venue + Catering", -0.03);
      adjust("Buffer", -0.02);
    } else if (priority === "Food + Hospitality") {
      adjust("Venue + Catering", +0.05);
      adjust("Decor + Lighting", -0.03);
      adjust("Buffer", -0.02);
    } else if (priority === "Photo + Film") {
      adjust("Photo + Video", +0.04);
      adjust("Decor + Lighting", -0.02);
      adjust("Buffer", -0.02);
    }

    // Normalize to 1.0
    const sum = base.reduce((a, b) => a + b[1], 0);
    const normalized = base.map(([k, w]) => [k, w / sum] as [string, number]);

    const budgetSplit = normalized.map(([k, w]) => [k, Math.round(budget * w)] as [string, number]);

    const timeline =
      days === 1
        ? [
            "Welcome & guest arrival",
            "Main function / ceremony",
            "Dinner service",
            "After party / DJ",
          ]
        : days === 2
        ? [
            "Day 1: Welcome + Mehendi / Sangeet",
            "Day 2: Ceremony + Reception",
          ]
        : [
            "Day 1: Welcome",
            "Day 2: Main ceremony",
            "Day 3: Reception + closing",
          ];

    const checklist = [
      "Set guest count, budget range, and event dates",
      "Choose style direction + color palette",
      "Shortlist venues (3 options) by capacity & location",
      "Book key vendors: decor, photo/video, makeup",
      "Finalize catering menu + tasting",
      "Create function-wise timeline & responsibilities",
      "Plan logistics: entry, parking, rooms, transport",
      "Confirm all vendors 7 days before event",
      "Final rehearsal + emergency backup plan",
    ];

    const theme = getTheme(style);

    const guestPlan = [
      "Break guests into groups: Family / Friends / Colleagues / VIP",
      "Estimate invites: 70% families + 30% friends (adjust as you like)",
      "Create a simple RSVP list: Name, side, phone, status",
      "For seating: plan 8–10 guests per table (banquet) or zones (lawn)",
      "VIP list: elders, close family, key guests for special seating",
    ];

    return { tier, budgetSplit, timeline, checklist, theme, guestPlan };
  }, [budget, guests, days, style, priority]);

  const shareText = encodeURIComponent(buildShareText({ city, eventType, days, guests, budget, style, priority, plan }));

  function copyPlan() {
    navigator.clipboard.writeText(decodeURIComponent(shareText)).catch(() => {});
    alert("Copied! You can paste this plan anywhere.");
  }

  return (
    <div style={S.page}>
      <header style={S.header}>
        <div style={S.headerInner}>
          <Link href="/" style={S.brand}>Eventura</Link>
          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/gallery" style={S.btn}>Gallery</Link>
            <Link href="/book" style={{ ...S.btn, ...S.btnSolid }}>Book</Link>
          </nav>
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h1 style={{ margin: "10px 0 6px" }}>Client AI Toolkit</h1>
          <p style={{ opacity: 0.75, lineHeight: 1.7, marginTop: 0 }}>
            Build your plan instantly: budget split, timeline, checklist, theme ideas — then share it with family.
            (No login needed.)
          </p>

          <div style={S.grid2}>
            {/* Inputs */}
            <div style={S.panel}>
              <div style={S.panelTitle}>Your details</div>

              <Label text="City" />
              <select value={city} onChange={(e) => setCity(e.target.value)} style={S.input}>
                {["Ahmedabad","Surat","Vadodara","Rajkot","Gandhinagar"].map((c) => <option key={c}>{c}</option>)}
              </select>

              <Label text="Event type" />
              <select value={eventType} onChange={(e) => setEventType(e.target.value)} style={S.input}>
                {["Wedding","Engagement","Reception","Corporate","Birthday","Other"].map((t) => <option key={t}>{t}</option>)}
              </select>

              <Label text="Event days" />
              <select value={days} onChange={(e) => setDays(Number(e.target.value))} style={S.input}>
                <option value={1}>1 Day</option>
                <option value={2}>2 Days</option>
                <option value={3}>3 Days</option>
              </select>

              <Label text="Guests" />
              <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value || 0))} style={S.input} />

              <Label text="Budget (₹)" />
              <input type="number" value={budget} onChange={(e) => setBudget(Number(e.target.value || 0))} style={S.input} />

              <Label text="Style" />
              <select value={style} onChange={(e) => setStyle(e.target.value)} style={S.input}>
                {["Luxury Royal","Modern Minimal","Floral Elegant","Luxe Glam","Traditional Gujarati"].map((s) => <option key={s}>{s}</option>)}
              </select>

              <Label text="Your priority" />
              <select value={priority} onChange={(e) => setPriority(e.target.value)} style={S.input}>
                {["Decor + Experience","Food + Hospitality","Photo + Film"].map((p) => <option key={p}>{p}</option>)}
              </select>

              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                <button onClick={copyPlan} style={{ ...S.btn, ...S.btnGold, width: "100%", justifyContent: "center" }}>
                  Copy plan
                </button>

                <a
                  href={`https://wa.me/?text=${shareText}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...S.btn, ...S.btnSolid, width: "100%", justifyContent: "center" }}
                >
                  Share on WhatsApp
                </a>
              </div>

              <div style={{ opacity: 0.65, fontSize: 12, marginTop: 10, lineHeight: 1.5 }}>
                Tip: use “Share on WhatsApp” to send this plan to family groups.
              </div>
            </div>

            {/* Output */}
            <div style={S.panel}>
              <div style={S.panelTitle}>Your plan</div>

              <div style={S.pill}>
                Planning tier: <b>{plan.tier}</b>
              </div>

              <h3 style={S.h3}>Budget split</h3>
              <ul style={S.ul}>
                {plan.budgetSplit.map(([k, v]) => (
                  <li key={k}><b>{k}</b>: ₹{v.toLocaleString()}</li>
                ))}
              </ul>

              <h3 style={S.h3}>Timeline</h3>
              <ul style={S.ul}>
                {plan.timeline.map((t) => <li key={t}>{t}</li>)}
              </ul>

              <h3 style={S.h3}>Checklist</h3>
              <ul style={S.ul}>
                {plan.checklist.map((t) => <li key={t}>{t}</li>)}
              </ul>

              <h3 style={S.h3}>Theme suggestions</h3>
              <div style={S.box}>
                <div><b>Vibe:</b> {plan.theme.vibe}</div>
                <div style={{ marginTop: 6 }}><b>Colors:</b> {plan.theme.colors.join(", ")}</div>
                <div style={{ marginTop: 6 }}><b>Decor ideas:</b></div>
                <ul style={S.ul}>
                  {plan.theme.decorIdeas.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>

              <h3 style={S.h3}>Guest plan</h3>
              <ul style={S.ul}>
                {plan.guestPlan.map((g) => <li key={g}>{g}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Label({ text }: { text: string }) {
  return <div style={S.label}>{text}</div>;
}

function getTheme(style: string) {
  if (style === "Luxury Royal") {
    return {
      vibe: "Royal luxury with warm lighting and statement florals",
      colors: ["Gold", "Ivory", "Maroon", "Emerald"],
      decorIdeas: ["Grand entrance arch", "Crystal chandeliers", "Velvet seating lounge", "Gold stage frames"],
    };
  }
  if (style === "Modern Minimal") {
    return {
      vibe: "Clean, modern, premium minimal with elegant accents",
      colors: ["White", "Black", "Champagne", "Greenery"],
      decorIdeas: ["Minimal stage with lines", "White florals + greenery", "Soft spot lighting", "Modern welcome signage"],
    };
  }
  if (style === "Floral Elegant") {
    return {
      vibe: "Soft florals, romantic lighting, pastel elegance",
      colors: ["Blush", "Peach", "Ivory", "Sage"],
      decorIdeas: ["Floral ceiling", "Pastel stage backdrop", "Candle-lit aisles", "Garden-style lounge"],
    };
  }
  if (style === "Luxe Glam") {
    return {
      vibe: "Bold glam with sparkle, mirror, and dramatic lighting",
      colors: ["Black", "Gold", "Rose Gold", "Red"],
      decorIdeas: ["Mirror walkway", "LED dance floor", "Spotlight entry", "Glam photo booth wall"],
    };
  }
  return {
    vibe: "Traditional Gujarati with rich colors and cultural detailing",
    colors: ["Red", "Gold", "Orange", "Ivory"],
    decorIdeas: ["Bandhani patterns", "Traditional mandap styling", "Marigold accents", "Dhol + folk vibe corner"],
  };
}

function buildShareText(opts: {
  city: string; eventType: string; days: number; guests: number; budget: number; style: string; priority: string; plan: Plan;
}) {
  const { city, eventType, days, guests, budget, style, priority, plan } = opts;
  const lines: string[] = [];
  lines.push("Event Plan (Client AI Toolkit)");
  lines.push(`City: ${city}`);
  lines.push(`Event: ${eventType} • Days: ${days}`);
  lines.push(`Guests: ${guests}`);
  lines.push(`Budget: ₹${budget.toLocaleString()}`);
  lines.push(`Style: ${style}`);
  lines.push(`Priority: ${priority}`);
  lines.push("");
  lines.push(`Tier: ${plan.tier}`);
  lines.push("");
  lines.push("Budget split:");
  for (const [k, v] of plan.budgetSplit) lines.push(`- ${k}: ₹${v.toLocaleString()}`);
  lines.push("");
  lines.push("Timeline:");
  for (const t of plan.timeline) lines.push(`- ${t}`);
  lines.push("");
  lines.push("Checklist:");
  for (const c of plan.checklist) lines.push(`- ${c}`);
  lines.push("");
  lines.push(`Theme vibe: ${plan.theme.vibe}`);
  lines.push(`Colors: ${plan.theme.colors.join(", ")}`);
  return lines.join("\n");
}

const S: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#07070a", color: "white" },
  header: { borderBottom: "1px solid rgba(255,255,255,.10)", background: "rgba(7,7,10,.85)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 50 },
  headerInner: { maxWidth: 1150, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center" },
  brand: { color: "white", textDecoration: "none", fontWeight: 950 },

  grid2: { marginTop: 14, display: "grid", gap: 12, gridTemplateColumns: "1fr 1.2fr" },
  panel: { padding: 16, borderRadius: 18, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.05)" },
  panelTitle: { fontWeight: 980, marginBottom: 10 },
  label: { display: "block", marginTop: 10, opacity: 0.7, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" },

  input: { width: "100%", height: 44, borderRadius: 12, border: "1px solid rgba(255,255,255,.18)", background: "rgba(0,0,0,.35)", color: "white", padding: "0 12px", marginTop: 6 },

  btn: { padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,.18)", color: "white", textDecoration: "none", fontWeight: 900, display: "inline-flex", alignItems: "center", gap: 8 },
  btnSolid: { background: "white", color: "black" },
  btnGold: { background: "linear-gradient(180deg, rgba(201,162,74,.95), rgba(201,162,74,.65))", color: "#120f08", borderColor: "rgba(201,162,74,.55)" },

  pill: { display: "inline-block", padding: "8px 10px", borderRadius: 999, border: "1px solid rgba(201,162,74,.35)", background: "rgba(201,162,74,.12)" },
  h3: { marginTop: 14, marginBottom: 6 },
  ul: { opacity: 0.82, lineHeight: 1.8 },
  box: { marginTop: 8, padding: 12, borderRadius: 14, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)" },
};
