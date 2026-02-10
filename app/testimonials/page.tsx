import Link from "next/link";

export default function TestimonialsPage() {
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
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1>Client Testimonials</h1>

          <div style={grid}>
            <Quote name="Riya & Kunal, Ahmedabad" text="Eventura handled everything perfectly. We didn’t have to worry about vendors or timelines at all." />
            <Quote name="Neha, Surat" text="The decor and venue selection were beautiful. Very professional team and smooth execution." />
            <Quote name="Amit, Vadodara" text="Great coordination and transparent pricing. Highly recommend for weddings in Gujarat." />
          </div>
        </div>
      </main>
    </div>
  );
}

function Quote({ name, text }: { name: string; text: string }) {
  return (
    <div style={{ padding: 16, borderRadius: 14, border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.06)" }}>
      <p style={{ fontStyle: "italic", opacity: .85 }}>"{text}"</p>
      <div style={{ marginTop: 8, fontWeight: 900 }}>{name}</div>
    </div>
  );
}

const brand: React.CSSProperties = { color: "white", textDecoration: "none", fontWeight: 900 };
const btn: React.CSSProperties = { padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", color: "white", textDecoration: "none", fontWeight: 900 };
const btnSolid: React.CSSProperties = { background: "white", color: "black" };
const grid: React.CSSProperties = { marginTop: 16, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" };
