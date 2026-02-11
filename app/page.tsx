// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  // WhatsApp format MUST be: countrycode + number, NO "+" sign
  const whatsappNumber = "917622856869";
  const whatsappText = encodeURIComponent(
    "Hi Eventura! I want to plan an event. Please share packages and availability."
  );
  const waLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div style={S.page}>
      {/* Header */}
      <header style={S.header}>
        <div style={S.headerInner}>
          <Link href="/" style={S.brand}>
            <img
              src="/logo.png"
              alt="Eventura"
              width={52}
              height={52}
              style={S.logo}
            />
            <div>
              <div style={S.brandTitle}>EVENTURA</div>
              <div style={S.brandSub}>Events that speak your style</div>
            </div>
          </Link>

          <nav style={S.nav}>
            <Link href="/services" style={S.navLink}>
              Services
            </Link>
            <Link href="/gallery" style={S.navLink}>
              Gallery
            </Link>
            <Link href="/cities" style={S.navLink}>
              Cities
            </Link>
            <Link href="/client-ai" style={{ ...S.navBtn, ...S.navBtnGold }}>
              AI Planner
            </Link>
            <Link href="/book" style={{ ...S.navBtn, ...S.navBtnSolid }}>
              Book
            </Link>
          </nav>

          {/* Mobile CTA (nav hides on small screens) */}
          <div style={S.mobileCta}>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.navBtn, ...S.navBtnSolid }}>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={S.hero}>
        <div style={S.wrap}>
          <div style={S.heroGrid}>
            <div>
              <div style={S.pill}>WEDDINGS • CORPORATE • PRIVATE EVENTS</div>

              <h1 style={S.h1}>
                Clean planning. Premium design. <span style={S.gold}>Stress-free</span> execution.
              </h1>

              <p style={S.sub}>
                Eventura creates memorable events with beautiful decor, clear timelines, and smooth coordination.
                Simple for clients, premium in results.
              </p>

              <div style={S.ctaRow}>
                <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid }}>
                  WhatsApp for Quote
                </a>

                <Link href="/services" style={{ ...S.btn, ...S.btnGhost }}>
                  View Services
                </Link>

                <Link href="/book" style={{ ...S.btn, ...S.btnSoft }}>
                  Book a Call
                </Link>
              </div>

              <div style={S.kpis}>
                <div style={S.kpiCard}>
                  <div style={S.kpiTitle}>Fast reply</div>
                  <div style={S.kpiText}>Within 24 hours</div>
                </div>
                <div style={S.kpiCard}>
                  <div style={S.kpiTitle}>Clear packages</div>
                  <div style={S.kpiText}>No confusion</div>
                </div>
                <div style={S.kpiCard}>
                  <div style={S.kpiTitle}>End-to-end</div>
                  <div style={S.kpiText}>We handle it all</div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div style={S.heroCard}>
              <div style={S.heroCardTop}>
                <div>
                  <div style={S.heroCardTitle}>Quick Booking</div>
                  <div style={S.heroCardSub}>Send details on WhatsApp</div>
                </div>
                <div style={S.badge}>Available</div>
              </div>

              <div style={S.form}>
                <label style={S.label}>
                  Name
                  <input style={S.input} placeholder="Your full name" />
                </label>

                <label style={S.label}>
                  City
                  <input style={S.input} placeholder="Ahmedabad, Surat, Toronto..." />
                </label>

                <label style={S.label}>
                  Event Type
                  <select style={S.input} defaultValue="Wedding">
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Corporate</option>
                    <option>Birthday / Private</option>
                    <option>Other</option>
                  </select>
                </label>

                <label style={S.label}>
                  Date (optional)
                  <input style={S.input} placeholder="DD/MM/YYYY" />
                </label>

                <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid, width: "100%" }}>
                  Send on WhatsApp
                </a>

                <div style={S.note}>
                  Tip: message your budget range + guest count for faster quotes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Sections */}
      <section style={S.section}>
        <div style={S.wrap}>
          <div style={S.sectionHead}>
            <h2 style={S.h2}>Services</h2>
            <p style={S.p}>Choose what you need — full planning or only decor/coordination.</p>
          </div>

          <div style={S.grid3}>
            <div style={S.card}>
              <div style={S.cardTitle}>Weddings</div>
              <div style={S.cardText}>Planning, decor, vendors, timeline, guest experience.</div>
              <div style={S.tags}>
                <span style={S.tag}>Planning</span>
                <span style={S.tag}>Decor</span>
                <span style={S.tag}>Coordination</span>
              </div>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>Corporate</div>
              <div style={S.cardText}>Conferences, launches, team events, logistics.</div>
              <div style={S.tags}>
                <span style={S.tag}>AV</span>
                <span style={S.tag}>Stage</span>
                <span style={S.tag}>Logistics</span>
              </div>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>Private Events</div>
              <div style={S.cardText}>Birthdays, anniversaries, proposals, intimate parties.</div>
              <div style={S.tags}>
                <span style={S.tag}>Themes</span>
                <span style={S.tag}>Setup</span>
                <span style={S.tag}>Hospitality</span>
              </div>
            </div>
          </div>

          <div style={S.centerRow}>
            <Link href="/services" style={{ ...S.btn, ...S.btnSoft }}>
              See all services
            </Link>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid }}>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={S.footer}>
        <div style={S.wrap}>
          <div style={S.footerInner}>
            <div style={S.footerBrand}>
              <img src="/logo.png" alt="Eventura" width={120} height={48} style={{ height: "auto" }} />
              <div style={S.footerText}>Events that speak your style</div>
            </div>

            <div style={S.footerLinks}>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/cities">Cities</Link>
              <Link href="/book">Book</Link>
            </div>

            <div style={S.copy}>© {new Date().getFullYear()} Eventura</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Styles (no CSS file needed) ---------- */
const S: any = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(900px 480px at 20% -10%, rgba(215,184,106,0.18), transparent 55%), radial-gradient(700px 420px at 95% 10%, rgba(215,184,106,0.12), transparent 55%), #0f2a2a",
    color: "#f5f2ea",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },

  wrap: { maxWidth: 1120, margin: "0 auto", padding: "0 18px" },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(15,42,42,0.75)",
    borderBottom: "1px solid rgba(245,242,234,0.12)",
  },
  headerInner: {
    height: 74,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 18px",
  },

  brand: { display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" },
  logo: { borderRadius: 12, border: "1px solid rgba(245,242,234,0.16)" },
  brandTitle: { fontWeight: 950, letterSpacing: "0.10em", fontSize: 14 },
  brandSub: { color: "rgba(245,242,234,0.70)", fontWeight: 700, fontSize: 12, marginTop: 2 },

  nav: { display: "flex", alignItems: "center", gap: 10 },
  navLink: {
    color: "rgba(245,242,234,0.75)",
    fontWeight: 800,
    fontSize: 13,
    padding: "10px 10px",
    borderRadius: 999,
    textDecoration: "none",
  },
  navBtn: {
    height: 42,
    display: "inlineFlex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 14px",
    borderRadius: 999,
    fontWeight: 950,
    fontSize: 13,
    textDecoration: "none",
    border: "1px solid transparent",
    userSelect: "none",
  },
  navBtnGold: {
    background: "rgba(215,184,106,0.14)",
    borderColor: "rgba(215,184,106,0.28)",
    color: "#f5f2ea",
  },
  navBtnSolid: {
    background: "linear-gradient(180deg, rgba(215,184,106,0.95), rgba(202,165,82,0.95))",
    color: "#1a1a1a",
    boxShadow: "0 16px 30px rgba(215,184,106,0.18)",
  },

  mobileCta: { display: "none" },

  hero: { padding: "56px 0 18px" },
  heroGrid: { display: "grid", gridTemplateColumns: "1.2fr 0.9fr", gap: 22, alignItems: "start" },

  pill: {
    display: "inline-flex",
    padding: "10px 14px",
    borderRadius: 999,
    border: "1px solid rgba(245,242,234,0.14)",
    background: "rgba(245,242,234,0.08)",
    fontWeight: 950,
    letterSpacing: "0.12em",
    fontSize: 12,
    color: "rgba(245,242,234,0.75)",
    marginBottom: 14,
  },

  h1: { margin: "0 0 12px", fontSize: "clamp(30px, 4vw, 50px)", lineHeight: 1.08, letterSpacing: "-0.02em" },
  gold: { color: "#d7b86a" },
  sub: { margin: "0 0 18px", color: "rgba(245,242,234,0.78)", fontWeight: 650, fontSize: 16, maxWidth: 560 },

  ctaRow: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 },

  btn: {
    height: 46,
    padding: "0 16px",
    borderRadius: 999,
    fontWeight: 950,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid transparent",
  },
  btnSolid: {
    background: "linear-gradient(180deg, rgba(215,184,106,0.95), rgba(202,165,82,0.95))",
    color: "#1a1a1a",
    boxShadow: "0 16px 30px rgba(215,184,106,0.18)",
  },
  btnGhost: {
    background: "transparent",
    borderColor: "rgba(245,242,234,0.14)",
    color: "#f5f2ea",
  },
  btnSoft: {
    background: "rgba(245,242,234,0.10)",
    borderColor: "rgba(245,242,234,0.16)",
    color: "#f5f2ea",
  },

  kpis: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 },
  kpiCard: {
    border: "1px solid rgba(245,242,234,0.12)",
    background: "rgba(15,53,51,0.55)",
    borderRadius: 18,
    padding: 14,
    boxShadow: "0 10px 28px rgba(0,0,0,0.26)",
  },
  kpiTitle: { fontWeight: 950, marginBottom: 6 },
  kpiText: { color: "rgba(245,242,234,0.75)", fontWeight: 650, fontSize: 13 },

  heroCard: {
    border: "1px solid rgba(245,242,234,0.12)",
    background: "rgba(15,53,51,0.72)",
    borderRadius: 18,
    boxShadow: "0 12px 32px rgba(0,0,0,0.30)",
    padding: 18,
  },
  heroCardTop: { display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 12 },
  heroCardTitle: { fontWeight: 950, fontSize: 18 },
  heroCardSub: { color: "rgba(245,242,234,0.70)", fontWeight: 650, fontSize: 13, marginTop: 4 },
  badge: {
    borderRadius: 999,
    padding: "8px 12px",
    border: "1px solid rgba(215,184,106,0.40)",
    background: "rgba(215,184,106,0.14)",
    fontWeight: 950,
    fontSize: 12,
    color: "#f5f2ea",
    height: "fit-content",
  },

  form: { display: "grid", gap: 12 },
  label: { display: "grid", gap: 8, fontWeight: 900, fontSize: 13 },
  input: {
    width: "100%",
    background: "rgba(18,64,61,0.65)",
    border: "1px solid rgba(245,242,234,0.14)",
    borderRadius: 14,
    padding: "12px 12px",
    color: "#f5f2ea",
    outline: "none",
    fontWeight: 650,
  },
  note: { color: "rgba(245,242,234,0.65)", fontWeight: 650, fontSize: 12 },

  section: { padding: "44px 0" },
  sectionHead: { marginBottom: 12 },
  h2: { margin: "0 0 8px", fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.01em" },
  p: { margin: 0, color: "rgba(245,242,234,0.75)", fontWeight: 650 },

  grid3: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 },
  card: {
    border: "1px solid rgba(245,242,234,0.12)",
    background: "rgba(15,53,51,0.60)",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 10px 28px rgba(0,0,0,0.24)",
  },
  cardTitle: { fontWeight: 950, fontSize: 18, marginBottom: 8 },
  cardText: { color: "rgba(245,242,234,0.75)", fontWeight: 650, marginBottom: 12 },
  tags: { display: "flex", gap: 8, flexWrap: "wrap" },
  tag: {
    borderRadius: 999,
    padding: "8px 10px",
    border: "1px solid rgba(215,184,106,0.26)",
    background: "rgba(215,184,106,0.12)",
    fontWeight: 900,
    fontSize: 12,
  },

  centerRow: { display: "flex", gap: 10, justifyContent: "center", marginTop: 16, flexWrap: "wrap" },

  footer: {
    borderTop: "1px solid rgba(245,242,234,0.12)",
    background: "rgba(15,42,42,0.65)",
    padding: "22px 0",
  },
  footerInner: {
    display: "grid",
    gridTemplateColumns: "1fr auto auto",
    gap: 14,
    alignItems: "center",
  },
  footerBrand: { display: "flex", flexDirection: "column", gap: 8 },
  footerText: { color: "rgba(245,242,234,0.70)", fontWeight: 700, fontSize: 13 },
  footerLinks: { display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" },
  copy: { color: "rgba(245,242,234,0.60)", fontWeight: 700, fontSize: 13, textAlign: "right" },
};

/* Responsive (simple) */
if (typeof window !== "undefined") {
  // no-op (keeps file deploy-safe)
}
