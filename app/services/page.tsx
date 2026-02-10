import Link from "next/link";

export default function ServicesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between" }}>
          <Link href="/" style={brand}>Eventura</Link>
          <nav style={{ display: "flex", gap: 10 }}>
            <Link href="/about" style={btn}>About</Link>
            <Link href="/book" style={{ ...btn, ...btnSolid }}>Consultation</Link>
          </nav>
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1>Our Services</h1>

          <div style={grid}>
            <Card title="Full Wedding Planning" desc="Complete planning from concept to execution, including venues, decor, vendors, timelines and on-day coordination." />
            <Card title="Venue Sourcing" desc="Shortlisting premium venues across Gujarat based on your budget and guest count." />
            <Card title="Decor & Theme" desc="Customized themes, floral decor, stage design, lighting and styling." />
            <Card title="Vendor Management" desc="Trusted photographers, caterers, makeup artists, entertainment & logistics." />
            <Card title="Corporate Events" desc="Conferences, product launches, annual meets & corporate celebrations." />
            <Card title="Private Events" desc="Engagements, birthdays, anniversaries & intimate celebrations." />
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ padding: 16, borderRadius: 14, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.06)" }}>
      <h3>{title}</h3>
      <p style={{ opacity: .75, lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

const brand: React.CSSProperties = { color: "white", textDecoration: "none", fontWeight: 900 };
const btn: React.CSSProperties = { padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", color: "white", textDecoration: "none", fontWeight: 900 };
const btnSolid: React.CSSProperties = { background: "white", color: "black" };
const grid: React.CSSProperties = { marginTop: 16, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" };
