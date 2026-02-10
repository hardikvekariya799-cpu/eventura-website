// app/page.tsx
import Link from "next/link";
import { CITIES } from "./lib/cities";

export default function HomePage() {
  return (
    <div style={S.page}>
      <header style={S.header}>
        <div style={S.headerInner}>
          <Link href="/" style={S.brand}>
            <img src="/logo.png" alt="Eventura" width={40} height={40} style={S.logo} />
            <div>
              <div style={S.brandTitle}>Eventura</div>
              <div style={S.brandSub}>Events that speak your style</div>
            </div>
          </Link>

          <nav style={S.nav}>
            <Link href="/venues" style={S.btn}>Venues</Link>
            <Link href="/cities" style={S.btn}>Cities</Link>
            <Link href="/services" style={S.btn}>Services</Link>
            <Link href="/book" style={{ ...S.btn, ...S.btnSolid }}>Book</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section style={S.heroWrap}>
          <div style={S.hero}>
            <div style={S.heroLeft}>
              <div style={S.kicker}>GUJARAT • FULL PLANNING SERVICE</div>
              <h1 style={S.h1}>Premium event planning that feels effortless.</h1>
              <p style={S.lead}>
                Weddings, engagements, receptions and corporate events — venue sourcing, decor, vendors,
                timelines and on-ground execution handled end-to-end.
              </p>

              <div style={S.ctaRow}>
                <Link href="/book" style={{ ...S.btn, ...S.btnSolid, padding: "12px 16px" }}>
                  Book on WhatsApp
                </Link>
                <Link href="/venues" style={{ ...S.btn, padding: "12px 16px" }}>
                  Browse Venues
                </Link>
              </div>

              <div style={S.badges}>
                <Badge title="End-to-End Planning" desc="Concept → execution" />
                <Badge title="Trusted Vendors" desc="Photography • Decor • Catering" />
                <Badge title="Transparent Process" desc="Clear timeline & scope" />
              </div>
            </div>

            <div style={S.heroRight}>
              <div style={S.panel}>
                <div style={S.panelTitle}>Quick Enquiry</div>
                <div style={S.panelText}>Get a shortlist + quote on WhatsApp in minutes.</div>

                <a
                  href="https://wa.me/917622856869"
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...S.btn, ...S.btnSolid, width: "100%", textAlign: "center", padding: "12px 16px" }}
                >
                  Message on WhatsApp
                </a>

                <div style={S.panelMini}>
                  Tip: share your city, date, guest count and budget range for faster quote.
                </div>
              </div>

              <div style={S.stats}>
                <Stat k="5+" v="Key cities covered" />
                <Stat k="100%" v="Custom planning" />
                <Stat k="A-Z" v="Vendor coordination" />
              </div>
            </div>
          </div>
        </section>

        {/* CITIES */}
        <section style={S.section}>
          <div style={S.sectionHead}>
            <h2 style={S.h2}>Event Planner by City</h2>
            <Link href="/cities" style={S.linkSoft}>View all →</Link>
          </div>

          <div style={S.grid}>
            {CITIES.slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/cities/${c.slug}`} style={S.card}>
                <div style={S.cardTitle}>{c.name}</div>
                <div style={S.cardText}>{c.seoDesc}</div>
                <div style={S.cardCta}>Explore →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section style={S.section}>
          <div style={S.sectionHead}>
            <h2 style={S.h2}>What we handle</h2>
            <Link href="/services" style={S.linkSoft}>Full services →</Link>
          </div>

          <div style={S.grid}>
            <Box title="Venue Sourcing" text="Shortlist premium venues by guest count + budget." />
            <Box title="Decor & Theme" text="Stage, floral, lighting, styling and custom concepts." />
            <Box title="Vendor Management" text="Catering, photo/video, makeup, entertainment, logistics." />
            <Box title="On-Ground Execution" text="Timelines, coordination, team management on event day." />
          </div>
        </section>

        {/* FOOTER */}
        <footer style={S.footer}>
          <div style={S.footerInner}>
            <div style={{ fontWeight: 950 }}>Eventura</div>
            <div style={{ opacity: 0.7, marginTop: 6 }}>Gujarat • Full Planning Service</div>
            <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/about" style={S.linkSoft}>About</Link>
              <Link href="/testimonials" style={S.linkSoft}>Testimonials</Link>
              <Link href="/book" style={S.linkSoft}>Book</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Badge({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={S.badge}>
      <div style={S.badgeTitle}>{title}</div>
      <div style={S.badgeDesc}>{desc}</div>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div style={S.stat}>
      <div style={S.statK}>{k}</div>
      <div style={S.statV}>{v}</div>
    </div>
  );
}

function Box({ title, text }: { title: string; text: string }) {
  return (
    <div style={S.box}>
      <div style={S.boxTitle}>{title}</div>
      <div style={S.boxText}>{text}</div>
    </div>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#07070a", color: "white" },

  header: { position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(10px)", background: "rgba(7,7,10,.72)", borderBottom: "1px solid rgba(255,255,255,.10)" },
  headerInner: { maxWidth: 1100, margin: "0 auto", padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 },

  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "white" },
  logo: { borderRadius: 12, border: "1px solid rgba(255,255,255,.16)", objectFit: "cover" },
  brandTitle: { fontWeight: 950 },
  brandSub: { fontSize: 12, opacity: 0.65, marginTop: 2 },

  nav: { display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" },

  btn: {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,.18)",
    color: "white",
    background: "transparent",
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 13,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnSolid: { background: "white", color: "black", borderColor: "rgba(255,255,255,.9)" },

  heroWrap: { padding: "26px 16px" },
  hero: { maxWidth: 1100, margin: "0 auto", display: "grid", gap: 14, gridTemplateColumns: "1.35fr .85fr" },

  heroLeft: { padding: 18, borderRadius: 18, border: "1px solid rgba(255,255,255,.10)", background: "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))" },
  kicker: { fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.7, fontWeight: 900 },
  h1: { fontSize: 44, margin: "10px 0 0", fontWeight: 980, letterSpacing: "-0.03em" },
  lead: { marginTop: 10, opacity: 0.78, lineHeight: 1.75, fontSize: 16 },

  ctaRow: { marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" },

  badges: { marginTop: 16, display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" },
  badge: { padding: 12, borderRadius: 14, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.05)" },
  badgeTitle: { fontWeight: 950 },
  badgeDesc: { marginTop: 4, opacity: 0.7, fontSize: 13 },

  heroRight: { display: "grid", gap: 12 },
  panel: { padding: 16, borderRadius: 18, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.06)" },
  panelTitle: { fontWeight: 980, fontSize: 16 },
  panelText: { opacity: 0.75, marginTop: 6, lineHeight: 1.6 },
  panelMini: { opacity: 0.65, marginTop: 10, fontSize: 12, lineHeight: 1.5 },

  stats: { display: "grid", gap: 10, gridTemplateColumns: "repeat(3, 1fr)" },
  stat: { padding: 12, borderRadius: 16, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)" },
  statK: { fontWeight: 980, fontSize: 18 },
  statV: { opacity: 0.72, marginTop: 4, fontSize: 12 },

  section: { padding: "18px 16px 26px" },
  sectionHead: { maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, flexWrap: "wrap" },
  h2: { margin: 0, fontSize: 22, fontWeight: 980, letterSpacing: "-0.02em" },
  linkSoft: { color: "white", opacity: 0.75, textDecoration: "none" },

  grid: { maxWidth: 1100, margin: "12px auto 0", display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" },
  card: { padding: 16, borderRadius: 16, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.05)", color: "white", textDecoration: "none" },
  cardTitle: { fontWeight: 980, fontSize: 18 },
  cardText: { marginTop: 6, opacity: 0.72, lineHeight: 1.6 },
  cardCta: { marginTop: 10, fontWeight: 950, opacity: 0.9 },

  box: { padding: 16, borderRadius: 16, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.05)" },
  boxTitle: { fontWeight: 980, fontSize: 16 },
  boxText: { marginTop: 6, opacity: 0.72, lineHeight: 1.6 },

  footer: { borderTop: "1px solid rgba(255,255,255,.10)", padding: "22px 16px", marginTop: 10 },
  footerInner: { maxWidth: 1100, margin: "0 auto" },
};
