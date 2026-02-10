// app/page.tsx
import Link from "next/link";
import { CITIES } from "./lib/cities";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: 16,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/logo.png"
              alt="Eventura"
              width={38}
              height={38}
              style={{ borderRadius: 10, border: "1px solid rgba(255,255,255,.18)" }}
            />
            <div>
              <div style={{ fontWeight: 950 }}>Eventura</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>Events that speak your style</div>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/venues" style={btn}>Venues</Link>
            <Link href="/cities" style={btn}>Cities</Link>
            <Link href="/book" style={{ ...btn, ...btnSolid }}>Consultation</Link>
          </nav>
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <section style={{ padding: "36px 0" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: 44, fontWeight: 950, margin: 0 }}>
              Premium Event Planning in Gujarat
            </h1>
            <p style={{ opacity: 0.75, marginTop: 12, lineHeight: 1.7 }}>
              Weddings • Engagements • Receptions • Corporate Events — venues, decor, vendors & complete execution.
            </p>

            <div style={{ marginTop: 16, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ ...btn, ...btnSolid }}>Book on WhatsApp</Link>
              <Link href="/venues" style={btn}>Browse Venues</Link>
              <Link href="/cities" style={btn}>Explore Cities</Link>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1100, margin: "0 auto", paddingBottom: 26 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
            <h2 style={{ margin: 0 }}>Event Planner by City</h2>
            <Link href="/cities" style={{ color: "white", opacity: 0.75 }}>View all →</Link>
          </div>

          <div style={grid}>
            {CITIES.slice(0, 3).map((c) => (
              <Link key={c.slug} href={`/cities/${c.slug}`} style={card}>
                <div style={{ fontWeight: 950, fontSize: 18 }}>{c.name}</div>
                <div style={{ opacity: 0.72, marginTop: 6, lineHeight: 1.6 }}>{c.seoDesc}</div>
                <div style={{ marginTop: 10, opacity: 0.9, fontWeight: 900 }}>Get quote →</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const btn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.2)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
};

const btnSolid: React.CSSProperties = {
  background: "white",
  color: "black",
  borderColor: "rgba(255,255,255,.9)",
};

const grid: React.CSSProperties = {
  marginTop: 12,
  display: "grid",
  gap: 12,
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
};

const card: React.CSSProperties = {
  padding: 16,
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(255,255,255,.06)",
  color: "white",
  textDecoration: "none",
};
