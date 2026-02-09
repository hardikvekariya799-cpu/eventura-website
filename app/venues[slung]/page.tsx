// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/logo.png"
              alt="Eventura"
              width={40}
              height={40}
              style={{ borderRadius: 10, border: "1px solid rgba(255,255,255,.2)" }}
            />
            <div>
              <div style={{ fontWeight: 900 }}>Eventura</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>Events that speak your style</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Link href="/venues" style={btn}>Venues</Link>
            <Link href="/book" style={{ ...btn, ...btnSolid }}>Free Consultation</Link>
          </div>
        </div>
      </header>

      <main>
        <section style={{ padding: "48px 16px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: 42, fontWeight: 900, margin: 0 }}>
              Premium Event Planning in Gujarat
            </h1>
            <p style={{ opacity: 0.75, marginTop: 12, lineHeight: 1.7 }}>
              We handle venues, vendors, decor, timelines and full execution. You enjoy your event.
            </p>

            <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" style={{ ...btn, ...btnSolid }}>Get Free Quote</Link>
              <Link href="/venues" style={btn}>Browse Venues</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const btn: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.2)",
  color: "white",
  textDecoration: "none",
  fontWeight: 800,
};

const btnSolid: React.CSSProperties = {
  background: "white",
  color: "black",
};
