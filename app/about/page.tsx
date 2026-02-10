import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between" }}>
          <Link href="/" style={brand}>Eventura</Link>
          <nav style={{ display: "flex", gap: 10 }}>
            <Link href="/services" style={btn}>Services</Link>
            <Link href="/book" style={{ ...btn, ...btnSolid }}>Consultation</Link>
          </nav>
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1>About Eventura</h1>
          <p style={p}>
            Eventura is a premium event planning company based in Gujarat. We specialize in full-service wedding
            planning, venue sourcing, decor, vendor management, and end-to-end execution.
          </p>

          <h2>Our Approach</h2>
          <p style={p}>
            We believe every event should reflect your personality and style. Our team handles planning, timelines,
            coordination, and on-ground management so you can enjoy your celebration stress-free.
          </p>

          <h2>Why Clients Choose Us</h2>
          <ul style={ul}>
            <li>End-to-end planning & execution</li>
            <li>Trusted venue & vendor network across Gujarat</li>
            <li>Transparent pricing & clear timelines</li>
            <li>Personalized themes & decor concepts</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

const brand: React.CSSProperties = { color: "white", textDecoration: "none", fontWeight: 900 };
const btn: React.CSSProperties = { padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", color: "white", textDecoration: "none", fontWeight: 900 };
const btnSolid: React.CSSProperties = { background: "white", color: "black" };
const p: React.CSSProperties = { opacity: .8, lineHeight: 1.8 };
const ul: React.CSSProperties = { opacity: .8, lineHeight: 1.8 };
