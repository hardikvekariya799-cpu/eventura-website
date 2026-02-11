// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  // WhatsApp must be countrycode+number WITHOUT "+"
  const whatsappNumber = "917622856869";
  const whatsappText = encodeURIComponent(
    "Hi Eventura! I want to plan an event. Please share packages and availability."
  );
  const waLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div style={S.page}>
      {/* Top Menu (simple like reference) */}
      <header style={S.header}>
        <div style={S.headerInner}>
          <Link href="/" style={S.brand}>
            <img src="/logo.png" alt="Eventura" width={56} height={56} style={S.logo} />
            <div style={{ lineHeight: 1.1 }}>
              <div style={S.brandTitle}>EVENTURA</div>
              <div style={S.brandSub}>Events that speak your style</div>
            </div>
          </Link>

          <nav style={S.nav}>
            <Link href="/" style={S.navLink}>Home</Link>
            <Link href="/services" style={S.navLink}>Services</Link>
            <Link href="/gallery" style={S.navLink}>Gallery</Link>
            <Link href="/team" style={S.navLink}>Team</Link>
            <Link href="/contact" style={S.navLink}>Contact</Link>
          </nav>

          <div style={S.headerCtas}>
            <Link href="/client-ai" style={{ ...S.btn, ...S.btnGold }}>AI Planner</Link>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid }}>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Banner (like that big image section) */}
      <section style={S.banner}>
        {/* Optional: put a real image at /public/hero.jpg later (not required for build) */}
        <img
          src="/hero.jpg"
          alt="Eventura events"
          style={S.bannerImg}
        />
        <div style={S.bannerOverlay} />
        <div style={S.bannerContent}>
          <h1 style={S.h1}>Event Design & Management</h1>
          <p style={S.sub}>
            Weddings • Corporate • Social Events — planned cleanly, delivered beautifully.
          </p>
          <div style={S.ctaRow}>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid }}>
              Get Quote on WhatsApp
            </a>
            <Link href="/services" style={{ ...S.btn, ...S.btnGhost }}>
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* About section (title + paragraph like reference page) */}
      <section style={S.section}>
        <div style={S.wrap}>
          <h2 style={S.h2}>Welcome to Eventura</h2>
          <p style={S.p}>
            We are a passionate team focused on making your event smooth from start to finish —
            planning, design, vendors, logistics, and on-day coordination.
          </p>
        </div>
      </section>

      {/* Services row (simple cards) */}
      <section style={S.sectionAlt}>
        <div style={S.wrap}>
          <h2 style={S.h2}>What We Do</h2>
          <div style={S.grid3}>
            <div style={S.card}>
              <div style={S.cardTitle}>Wedding Events</div>
              <div style={S.cardText}>Full planning, decor, vendors, timelines, guest experience.</div>
              <Link href="/services" style={{ ...S.btn, ...S.btnSoft }}>See More</Link>
            </div>
            <div style={S.card}>
              <div style={S.cardTitle}>Corporate Events</div>
              <div style={S.cardText}>Launches, conferences, seminars, team events, logistics.</div>
              <Link href="/services" style={{ ...S.btn, ...S.btnSoft }}>See More</Link>
            </div>
            <div style={S.card}>
              <div style={S.cardTitle}>Social Events</div>
              <div style={S.cardText}>Birthdays, anniversaries, private parties, proposals.</div>
              <Link href="/services" style={{ ...S.btn, ...S.btnSoft }}>See More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team preview (matches “Team blocks” style) */}
      <section style={S.section}>
        <div style={S.wrap}>
          <h2 style={S.h2}>Meet the Team</h2>
          <p style={S.p}>
            A friendly team that loves details, design, and flawless execution — available for destination events too.
          </p>

          <div style={S.teamGrid}>
            {TEAM.map((m) => (
              <div key={m.name} style={S.teamCard}>
                {/* Optional photos: put files in /public/team/ and update src.
                    If image missing, it won’t break deployment (just shows broken image). */}
                <img src={m.photo} alt={m.name} style={S.teamPhoto} />
                <div>
                  <div style={S.teamName}>{m.name}</div>
                  <div style={S.teamRole}>{m.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.centerRow}>
            <Link href="/team" style={{ ...S.btn, ...S.btnGhost }}>View Full Team</Link>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid }}>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Gallery preview (simple placeholders) */}
      <section style={S.sectionAlt}>
        <div style={S.wrap}>
          <h2 style={S.h2}>Gallery</h2>
          <div style={S.gallery}>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} style={S.gItem} aria-label={`Gallery placeholder ${i + 1}`} />
            ))}
          </div>
          <div style={S.centerRow}>
            <Link href="/gallery" style={{ ...S.btn, ...S.btnGold }}>Open Gallery</Link>
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section style={S.section}>
        <div style={S.wrap}>
          <div style={S.contactCard}>
            <div>
              <h2 style={{ ...S.h2, marginBottom: 6 }}>Contact</h2>
              <p style={S.p}>
                Fastest response: WhatsApp. Share city + date + guest count + budget range.
              </p>
            </div>
            <div style={S.contactBtns}>
              <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnSolid }}>
                WhatsApp +91 76228 56869
              </a>
              <Link href="/contact" style={{ ...S.btn, ...S.btnGhost }}>
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={S.footer}>
        <div style={S.wrapFooter}>
          <div style={S.footerLeft}>
            <img src="/logo.png" alt="Eventura" width={110} height={44} style={{ height: "auto" }} />
            <div style={S.footerText}>Events that speak your style</div>
          </div>
          <div style={S.footerLinks}>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div style={S.copy}>© {new Date().getFullYear()} Eventura</div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Data (edit later) ---------- */
const TEAM = [
  { name: "Founder / Lead Planner", role: "Event Design & Direction", photo: "/team/founder.jpg" },
  { name: "Operations Lead", role: "Execution & Logistics", photo: "/team/ops.jpg" },
  { name: "Set & Decor Designer", role: "Styling & Decor", photo: "/team/designer.jpg" },
  { name: "Client Relations", role: "Bookings & Support", photo: "/team/support.jpg" },
];

/* ---------- Styles (deploy-safe, no CSS file needed) ---------- */
const S: any = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(900px 480px at 20% -10%, rgba(215,184,106,0.18), transparent 55%), radial-gradient(700px 420px at 95% 10%, rgba(215,184,106,0.12), transparent 55%), #0f2a2a",
    color: "#f5f2ea",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(15,42,42,0.80)",
    borderBottom: "1px solid rgba(245,242,234,0.12)",
  },
  headerInner: {
    height: 76,
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  brand: { display: "flex", gap: 12, alignItems: "center", textDecoration: "none", color: "inherit" },
  logo: { borderRadius: 12, border: "1px solid rgba(245,242,234,0.16)" },
  brandTitle: { fontWeight: 950, letterSpacing: "0.10em", fontSize: 14 },
  brandSub: { color: "rgba(245,242,234,0.70)", fontWeight: 700, fontSize: 12, marginTop: 2 },

  nav: { display: "flex", gap: 14, alignItems: "center" },
  navLink: {
    color: "rgba(245,242,234,0.78)",
    fontWeight: 800,
    fontSize: 13,
    textDecoration: "none",
    padding: "10px 10px",
    borderRadius: 999,
  },

  headerCtas: { display: "flex", gap: 10, alignItems: "center" },

  banner: { position: "relative", height: 420, overflow: "hidden" },
  bannerImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "saturate(1.05) contrast(1.02)",
  },
  bannerOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(15,42,42,0.92) 0%, rgba(15,42,42,0.62) 45%, rgba(15,42,42,0.25) 100%)",
  },
  bannerContent: {
    position: "absolute",
    inset: 0,
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  wrap: { maxWidth: 1120, margin: "0 auto", padding: "0 18px" },

  h1: { margin: 0, fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" },
  sub: { marginTop: 10, marginBottom: 16, maxWidth: 620, color: "rgba(245,242,234,0.80)", fontWeight: 650 },
  ctaRow: { display: "flex", gap: 10, flexWrap: "wrap" },

  section: { padding: "44px 0" },
  sectionAlt: { padding: "44px 0", background: "rgba(15,53,51,0.35)", borderTop: "1px solid rgba(245,242,234,0.10)", borderBottom: "1px solid rgba(245,242,234,0.10)" },

  h2: { margin: "0 0 10px", fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.01em" },
  p: { margin: 0, maxWidth: 820, color: "rgba(245,242,234,0.76)", fontWeight: 650 },

  grid3: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 },

  card: {
    border: "1px solid rgba(245,242,234,0.12)",
    background: "rgba(15,53,51,0.68)",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 10px 28px rgba(0,0,0,0.24)",
  },
  cardTitle: { fontWeight: 950, fontSize: 18, marginBottom: 8 },
  cardText: { color: "rgba(245,242,234,0.75)", fontWeight: 650, marginBottom: 12, lineHeight: 1.55 },

  teamGrid: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 },
  teamCard: {
    border: "1px solid rgba(245,242,234,0.12)",
    background: "rgba(15,53,51,0.62)",
    borderRadius: 18,
    padding: 14,
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  teamPhoto: {
    width: 64,
    height: 64,
    borderRadius: 16,
    objectFit: "cover",
    border: "1px solid rgba(245,242,234,0.12)",
    background: "rgba(245,242,234,0.08)",
  },
  teamName: { fontWeight: 950, marginBottom: 4 },
  teamRole: { color: "rgba(245,242,234,0.72)", fontWeight: 650, fontSize: 13 },

  gallery: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 },
  gItem: {
    height: 160,
    borderRadius: 18,
    border: "1px solid rgba(245,242,234,0.12)",
    background:
      "radial-gradient(600px 200px at 30% 20%, rgba(215,184,106,0.18), transparent 60%), rgba(18,64,61,0.55)",
    boxShadow: "0 10px 28px rgba(0,0,0,0.22)",
  },

  contactCard: {
    border: "1px solid rgba(245,242,234,0.12)",
    background: "rgba(15,53,51,0.72)",
    borderRadius: 18,
    padding: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },
  contactBtns: { display: "flex", gap: 10, flexWrap: "wrap" },

  centerRow: { display: "flex", gap: 10, justifyContent: "center", marginTop: 16, flexWrap: "wrap" },

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
    userSelect: "none",
  },
  btnSolid: {
    background: "linear-gradient(180deg, rgba(215,184,106,0.95), rgba(202,165,82,0.95))",
    color: "#1a1a1a",
    boxShadow: "0 16px 30px rgba(215,184,106,0.18)",
  },
  btnGold: {
    background: "rgba(215,184,106,0.14)",
    borderColor: "rgba(215,184,106,0.28)",
    color: "#f5f2ea",
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

  footer: { borderTop: "1px solid rgba(245,242,234,0.12)", background: "rgba(15,42,42,0.65)", padding: "22px 0" },
  wrapFooter: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 18px",
    display: "grid",
    gridTemplateColumns: "1fr auto auto",
    gap: 14,
    alignItems: "center",
  },
  footerLeft: { display: "flex", flexDirection: "column", gap: 8 },
  footerText: { color: "rgba(245,242,234,0.70)", fontWeight: 700, fontSize: 13 },
  footerLinks: { display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" },
  copy: { color: "rgba(245,242,234,0.60)", fontWeight: 700, fontSize: 13, textAlign: "right" },
};
