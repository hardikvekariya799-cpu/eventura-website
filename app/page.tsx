// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  const whatsappNumber = "917622856869"; // no "+"
  const whatsappText = encodeURIComponent(
    "Hi Eventura! I want to plan an event. Please share packages and availability."
  );
  const waLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  // Put your downloaded images here (in /public/events/)
  const GALLERY = [
    "/events/1.jpg",
    "/events/2.jpg",
    "/events/3.jpg",
    "/events/4.jpg",
    "/events/5.jpg",
    "/events/6.jpg",
    "/events/7.jpg",
    "/events/8.jpg",
    "/events/9.jpg",
  ];

  const TEAM = [
    { name: "Founder / Lead Planner", role: "Event Design & Direction", photo: "/team/founder.jpg" },
    { name: "Operations Lead", role: "Execution & Logistics", photo: "/team/ops.jpg" },
    { name: "Set & Decor Designer", role: "Styling & Decor", photo: "/team/designer.jpg" },
    { name: "Client Relations", role: "Bookings & Support", photo: "/team/support.jpg" },
  ];

  return (
    <div style={S.page}>
      {/* Top Menu */}
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
            <Link href="/client-ai" style={{ ...S.btn, ...S.btnSoft }}>
              AI Planner
            </Link>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnPrimary }}>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Banner (pastel, premium) */}
      <section style={S.banner}>
        <div style={S.bannerInner}>
          <div style={S.bannerLeft}>
            <div style={S.pill}>WEDDINGS • CORPORATE • SOCIAL EVENTS</div>
            <h1 style={S.h1}>
              Clean planning. Beautiful design. <span style={S.roseText}>Zero stress</span>.
            </h1>
            <p style={S.sub}>
              Eventura creates premium events with elegant styling, perfect timelines, and smooth coordination.
              Simple for clients, memorable for everyone.
            </p>
            <div style={S.ctaRow}>
              <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnPrimary }}>
                Get Quote on WhatsApp
              </a>
              <Link href="/services" style={{ ...S.btn, ...S.btnOutline }}>
                View Services
              </Link>
            </div>

            <div style={S.kpis}>
              <div style={S.kpi}>
                <div style={S.kpiTitle}>Fast Reply</div>
                <div style={S.kpiText}>Within 24 hours</div>
              </div>
              <div style={S.kpi}>
                <div style={S.kpiTitle}>Clear Packages</div>
                <div style={S.kpiText}>No confusion</div>
              </div>
              <div style={S.kpi}>
                <div style={S.kpiTitle}>End-to-End</div>
                <div style={S.kpiText}>We handle everything</div>
              </div>
            </div>
          </div>

          <div style={S.bannerRight}>
            <div style={S.quoteCard}>
              <div style={S.quoteTop}>
                <div>
                  <div style={S.quoteTitle}>Quick Booking</div>
                  <div style={S.quoteSub}>Send details on WhatsApp</div>
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

                <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnPrimary, width: "100%" }}>
                  Send on WhatsApp
                </a>

                <div style={S.note}>Tip: include guest count + budget for faster quote.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section style={S.section}>
        <div style={S.wrap}>
          <h2 style={S.h2}>Welcome to Eventura</h2>
          <p style={S.p}>
            We focus on a clean client experience: simple communication, clear planning, premium styling, and smooth
            execution — so you enjoy your day while we coordinate everything.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={S.sectionAlt}>
        <div style={S.wrap}>
          <div style={S.sectionHead}>
            <h2 style={S.h2}>What We Do</h2>
            <p style={S.p}>Choose full planning or only decor / coordination — we’ll tailor it to your needs.</p>
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
              <div style={S.cardTitle}>Corporate Events</div>
              <div style={S.cardText}>Launches, conferences, seminars, logistics & setup.</div>
              <div style={S.tags}>
                <span style={S.tag}>AV</span>
                <span style={S.tag}>Stage</span>
                <span style={S.tag}>Logistics</span>
              </div>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>Private & Social</div>
              <div style={S.cardText}>Birthdays, anniversaries, proposals, private parties.</div>
              <div style={S.tags}>
                <span style={S.tag}>Themes</span>
                <span style={S.tag}>Setup</span>
                <span style={S.tag}>Hospitality</span>
              </div>
            </div>
          </div>

          <div style={S.centerRow}>
            <Link href="/services" style={{ ...S.btn, ...S.btnOutline }}>
              See all services
            </Link>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnPrimary }}>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Gallery with REAL photos from /public/events */}
      <section style={S.section}>
        <div style={S.wrap}>
          <div style={S.sectionHead}>
            <h2 style={S.h2}>Event Gallery</h2>
            <p style={S.p}>
              Add your photos inside <b>/public/events/</b>. If an image is missing, we show a premium placeholder.
            </p>
          </div>

          <div style={S.gallery}>
            {GALLERY.map((src, i) => (
              <div key={i} style={S.gItem}>
                {/* Using <img> so no Next.js config needed (deploy-safe) */}
                <img
                  src={src}
                  alt={`Event photo ${i + 1}`}
                  style={S.gImg}
                  onError={(e) => {
                    // If file doesn't exist, hide broken image and show placeholder background
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div style={S.gOverlay} />
              </div>
            ))}
          </div>

          <div style={S.centerRow}>
            <Link href="/gallery" style={{ ...S.btn, ...S.btnSoft }}>
              Open Full Gallery
            </Link>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnPrimary }}>
              Book a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section style={S.sectionAlt}>
        <div style={S.wrap}>
          <div style={S.sectionHead}>
            <h2 style={S.h2}>Meet the Team</h2>
            <p style={S.p}>A detail-obsessed team that loves clean execution and premium looks.</p>
          </div>

          <div style={S.teamGrid}>
            {TEAM.map((m) => (
              <div key={m.name} style={S.teamCard}>
                <div style={S.teamPhotoWrap}>
                  <img
                    src={m.photo}
                    alt={m.name}
                    style={S.teamPhoto}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <div style={S.teamName}>{m.name}</div>
                  <div style={S.teamRole}>{m.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={S.centerRow}>
            <Link href="/team" style={{ ...S.btn, ...S.btnOutline }}>
              View Full Team
            </Link>
            <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnPrimary }}>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
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
              <a href={waLink} target="_blank" rel="noreferrer" style={{ ...S.btn, ...S.btnPrimary }}>
                WhatsApp +91 76228 56869
              </a>
              <Link href="/contact" style={{ ...S.btn, ...S.btnOutline }}>
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

/* ---------- Pastel Wedding Styles (clean + premium) ---------- */
const S: any = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1000px 520px at 20% -10%, rgba(225,29,72,0.10), transparent 55%), radial-gradient(900px 520px at 95% 0%, rgba(245,158,11,0.12), transparent 55%), #fff7f3",
    color: "#3b2f2f",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },

  wrap: { maxWidth: 1120, margin: "0 auto", padding: "0 18px" },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(255,247,243,0.80)",
    borderBottom: "1px solid rgba(59,47,47,0.10)",
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
  logo: { borderRadius: 14, border: "1px solid rgba(59,47,47,0.10)", background: "#fff" },
  brandTitle: { fontWeight: 950, letterSpacing: "0.10em", fontSize: 14 },
  brandSub: { color: "rgba(59,47,47,0.70)", fontWeight: 700, fontSize: 12, marginTop: 2 },

  nav: { display: "flex", gap: 14, alignItems: "center" },
  navLink: {
    color: "rgba(59,47,47,0.78)",
    fontWeight: 850,
    fontSize: 13,
    textDecoration: "none",
    padding: "10px 10px",
    borderRadius: 999,
  },

  headerCtas: { display: "flex", gap: 10, alignItems: "center" },

  banner: { padding: "40px 0 10px" },
  bannerInner: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "0 18px",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 18,
    alignItems: "start",
  },
  bannerLeft: {},
  bannerRight: {},

  pill: {
    display: "inline-flex",
    padding: "10px 14px",
    borderRadius: 999,
    border: "1px solid rgba(59,47,47,0.10)",
    background: "rgba(255,255,255,0.70)",
    fontWeight: 950,
    letterSpacing: "0.12em",
    fontSize: 12,
    color: "rgba(59,47,47,0.70)",
    marginBottom: 14,
  },

  h1: { margin: "0 0 12px", fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em" },
  roseText: { color: "#e11d48" },
  sub: { marginTop: 10, marginBottom: 16, maxWidth: 640, color: "rgba(59,47,47,0.72)", fontWeight: 650 },

  ctaRow: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 },

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
  btnPrimary: {
    background: "linear-gradient(180deg, rgba(225,29,72,0.95), rgba(190,18,60,0.95))",
    color: "#ffffff",
    boxShadow: "0 16px 30px rgba(225,29,72,0.18)",
  },
  btnOutline: {
    background: "rgba(255,255,255,0.70)",
    borderColor: "rgba(59,47,47,0.14)",
    color: "#3b2f2f",
  },
  btnSoft: {
    background: "rgba(245,158,11,0.10)",
    borderColor: "rgba(245,158,11,0.20)",
    color: "#3b2f2f",
  },

  kpis: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 },
  kpi: {
    border: "1px solid rgba(59,47,47,0.10)",
    background: "rgba(255,255,255,0.72)",
    borderRadius: 18,
    padding: 14,
    boxShadow: "0 10px 28px rgba(2,6,23,0.06)",
  },
  kpiTitle: { fontWeight: 950, marginBottom: 6 },
  kpiText: { color: "rgba(59,47,47,0.70)", fontWeight: 650, fontSize: 13 },

  quoteCard: {
    border: "1px solid rgba(59,47,47,0.10)",
    background: "rgba(255,255,255,0.82)",
    borderRadius: 20,
    boxShadow: "0 14px 34px rgba(2,6,23,0.08)",
    padding: 18,
  },
  quoteTop: { display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 12 },
  quoteTitle: { fontWeight: 950, fontSize: 18 },
  quoteSub: { color: "rgba(59,47,47,0.70)", fontWeight: 650, fontSize: 13, marginTop: 4 },
  badge: {
    borderRadius: 999,
    padding: "8px 12px",
    border: "1px solid rgba(245,158,11,0.32)",
    background: "rgba(245,158,11,0.10)",
    fontWeight: 950,
    fontSize: 12,
    color: "#3b2f2f",
    height: "fit-content",
  },

  form: { display: "grid", gap: 12 },
  label: { display: "grid", gap: 8, fontWeight: 900, fontSize: 13 },
  input: {
    width: "100%",
    background: "#ffffff",
    border: "1px solid rgba(59,47,47,0.14)",
    borderRadius: 14,
    padding: "12px 12px",
    color: "#3b2f2f",
    outline: "none",
    fontWeight: 650,
  },
  note: { color: "rgba(59,47,47,0.60)", fontWeight: 650, fontSize: 12 },

  section: { padding: "44px 0" },
  sectionAlt: {
    padding: "44px 0",
    background: "rgba(251,233,231,0.55)",
    borderTop: "1px solid rgba(59,47,47,0.08)",
    borderBottom: "1px solid rgba(59,47,47,0.08)",
  },
  sectionHead: { marginBottom: 12 },

  h2: { margin: "0 0 10px", fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.01em" },
  p: { margin: 0, maxWidth: 820, color: "rgba(59,47,47,0.72)", fontWeight: 650 },

  grid3: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 },
  card: {
    border: "1px solid rgba(59,47,47,0.10)",
    background: "rgba(255,255,255,0.80)",
    borderRadius: 20,
    padding: 18,
    boxShadow: "0 12px 30px rgba(2,6,23,0.06)",
  },
  cardTitle: { fontWeight: 950, fontSize: 18, marginBottom: 8 },
  cardText: { color: "rgba(59,47,47,0.70)", fontWeight: 650, marginBottom: 12, lineHeight: 1.55 },
  tags: { display: "flex", gap: 8, flexWrap: "wrap" },
  tag: {
    borderRadius: 999,
    padding: "8px 10px",
    border: "1px solid rgba(225,29,72,0.18)",
    background: "rgba(225,29,72,0.08)",
    fontWeight: 900,
    fontSize: 12,
    color: "#3b2f2f",
  },

  gallery: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 },
  gItem: {
    position: "relative",
    height: 180,
    borderRadius: 22,
    border: "1px solid rgba(59,47,47,0.10)",
    overflow: "hidden",
    background:
      "radial-gradient(800px 240px at 20% 15%, rgba(225,29,72,0.16), transparent 60%), radial-gradient(700px 220px at 90% 20%, rgba(245,158,11,0.16), transparent 55%), #ffffff",
    boxShadow: "0 12px 30px rgba(2,6,23,0.06)",
  },
  gImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  gOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.00) 55%, rgba(255,255,255,0.22) 100%)",
    pointerEvents: "none",
  },

  teamGrid: { marginTop: 14, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 },
  teamCard: {
    border: "1px solid rgba(59,47,47,0.10)",
    background: "rgba(255,255,255,0.78)",
    borderRadius: 20,
    padding: 14,
    display: "flex",
    gap: 12,
    alignItems: "center",
    boxShadow: "0 12px 30px rgba(2,6,23,0.05)",
  },
  teamPhotoWrap: {
    width: 64,
    height: 64,
    borderRadius: 18,
    overflow: "hidden",
    background:
      "radial-gradient(240px 120px at 20% 20%, rgba(225,29,72,0.18), transparent 60%), rgba(251,233,231,0.65)",
    border: "1px solid rgba(59,47,47,0.10)",
    flex: "0 0 auto",
  },
  teamPhoto: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  teamName: { fontWeight: 950, marginBottom: 4 },
  teamRole: { color: "rgba(59,47,47,0.70)", fontWeight: 650, fontSize: 13 },

  centerRow: { display: "flex", gap: 10, justifyContent: "center", marginTop: 16, flexWrap: "wrap" },

  contactCard: {
    border: "1px solid rgba(59,47,47,0.10)",
    background: "rgba(255,255,255,0.82)",
    borderRadius: 22,
    padding: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
    boxShadow: "0 14px 34px rgba(2,6,23,0.07)",
  },
  contactBtns: { display: "flex", gap: 10, flexWrap: "wrap" },

  footer: { borderTop: "1px solid rgba(59,47,47,0.10)", background: "rgba(255,247,243,0.85)", padding: "22px 0" },
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
  footerText: { color: "rgba(59,47,47,0.70)", fontWeight: 700, fontSize: 13 },
  footerLinks: { display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" },
  copy: { color: "rgba(59,47,47,0.60)", fontWeight: 700, fontSize: 13, textAlign: "right" },
};
