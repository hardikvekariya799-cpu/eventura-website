import Link from "next/link";
import { CITIES } from "../lib/cities";

export const metadata = {
  title: "Event Planner in Gujarat | Eventura",
  description:
    "Find premium event planning services across Gujarat. Weddings, venues, decor & full planning by Eventura.",
};

export default function CitiesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between" }}>
          <Link href="/" style={brand}>Eventura</Link>
          <Link href="/book" style={{ ...btn, ...btnSolid }}>Consultation</Link>
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1>Event Planner in Gujarat</h1>
          <p style={{ opacity: .75, lineHeight: 1.7 }}>
            Choose your city to explore venues and full-service event planning by Eventura.
          </p>

          <div style={grid}>
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/cities/${c.slug}`} style={card}>
                <h3>{c.name}</h3>
                <p style={{ opacity: .7 }}>{c.seoDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const brand: React.CSSProperties = { color: "white", textDecoration: "none", fontWeight: 900 };
const btn: React.CSSProperties = { padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", color: "white", textDecoration: "none", fontWeight: 900 };
const btnSolid: React.CSSProperties = { background: "white", color: "black" };
const grid: React.CSSProperties = { marginTop: 16, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" };
const card: React.CSSProperties = {
  padding: 16,
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(255,255,255,.06)",
  color: "white",
  textDecoration: "none",
};
