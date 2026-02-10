import Link from "next/link";
import { CITIES } from "./lib/cities";

export default function HomePage() {
  return (
    <div style={S.page}>
      <header style={S.header}>
        <div style={S.headerInner}>
          <Link href="/" style={S.brand}>
            <img src="/logo.png" alt="Eventura" width={44} height={44} style={S.logo} />
            <div>
              <div style={S.brandTitle}>Eventura</div>
              <div style={S.brandSub}>Events that speak your style</div>
            </div>
          </Link>

          <nav style={S.nav}>
            <Link href="/gallery" style={S.btn}>Gallery</Link>
            <Link href="/cities" style={S.btn}>Cities</Link>
            <Link href="/services" style={S.btn}>Services</Link>
            <Link href="/client-ai" style={{ ...S.btn, ...S.btnGold }}>AI Planner</Link>
            <Link href="/book" style={{ ...S.btn, ...S.btnSolid }}>Book</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section style={S.heroWrap}>
          <div style={S.hero}>
            <div style={S.heroLeft}>
              <div style={S.kicker}>LUXURY EVENT PLANNING • GUJARAT</div>
              <h1 style={S.h1}>
                Premium weddings & events —
                <span style={{ color: "var(--gold)" }}> planned perfectly.</span>
              </h1>
              <p style={S.lead}>
                Venue shortlisting, decor concepts, vendor coordination, timelines and execution —
                with a premium experience from first call to final event.
              </p>

              <div style={S.ctaRow}>
                <Link href="/client-ai" style={{ ...S.btn, ...S.btnGold, padding: "12px 16px" }}>
                  Try AI Planner
                </Link>
                <Link href="/book" style={{ ...S.btn, ...S.btnSolid, padding: "12px 16px" }}>
                  Book on WhatsApp
                </Link>
                <Link href="/gallery" style={{ ...S.btn, padding: "12px 16px" }}>
                  View Gallery
                </Link>
              </div>

              <div style={S.trustRow}>
                <Trust title="Full planning" desc="Concept → execution" />
                <Trust title="Premium style" desc="Luxury decor & flow" />
                <Trust title="Smooth coordination" desc="Vendor + timeline control" />
              </div>
            </div>

            <div style={S.heroRight}>
              <div style={S.glassCard}>
                <div style={S.cardTitle}>Quick Enquiry</div>
                <div style={S.cardText}>Message us and get a quote + shortlist.</div>

                <a
                  href="https://wa.me/917622856869"
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...S.btn, ...S.btnSolid, width: "100%", padding: "12px 16px" }}
                >
                  WhatsApp Now
                </a>

                <div style={S.cardMini}>
                  Share: city • date • guest count • budget range
                </div>
              </div>

              <div style={S.miniGrid}>
                <Mini title="Signature Themes" desc="Modern • Royal • Minimal" />
                <Mini title="Luxury Details" desc="Lighting • Florals • Stage" />
                <Mini title="Smart Planning" desc="AI checklist + budget split" />
              </div>
            </div>
          </div>
        </section>

        {/* PHOTO STRIP (uses your real images later) */}
        <section style={S.photoStripWrap}>
          <div style={S.photoStrip}>
            <Photo src="/gallery/1.jpg" />
            <Photo src="/gallery/2.jpg" />
            <Photo src="/gallery/3.jpg" />
          </div>
          <div style={S.stripNote}>
            Add your real photos in <b>public/gallery</b> as 1.jpg, 2.jpg, 3.jpg…
          </div>
        </section>

        {/* CITIES */}
        <section style={S.section}>
          <div style={S.sectionHead}>
            <h2 style={S.h2}>Cities we cover</h2>
            <Link href="/cities" style={S.linkSoft}>See all →</Link>
          </div>

          <div style={S.grid}>
            {CITIES.slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/cities/${c.slug}`} style={S.card}>
                <div style={S.cardTitle2}>{c.name}</div>
                <div style={S.cardText2}>{c.seoDesc}</div>
                <div style={S.cardCta}>Explore →</div>
              </Link>
            ))}
          </div>
        </section>

        {/* UNIQUE FEATURES */}
        <section style={S.section}>
          <div style={S.sectionHead}>
            <h2 style={S.h2}>Unique client features</h2>
            <Link href="/client-ai" style={S.linkSoft}>Open AI Planner →</Link>
          </div>

          <div style={S.grid}>
            <Feature title="AI Wedding Planner" text="Answer a few questions and get a complete plan: timeline, budget split, checklist." />
            <Feature title="Budget Split Calculator" text="Smart category split based on guest count and event type." />
            <Feature title="Vendor Checklist" text="Auto-generated checklist so nothing is missed." />
            <Feature title="Premium Moodboard" text="Style direction: modern, royal, minimal, floral, luxe glam." />
          </div>
        </section>

        <footer style={S.footer}>
          <div style={S.footerInner}>
            <div style={{ fontWeight: 950 }}>Eventura</div>
            <div style={{ opacity: 0.7, marginTop: 6 }}>Premium planning across Gujarat</div>
            <div style={{ marginTop: 10, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/about" style={S.linkSoft}>About</Link>
              <Link href="/services" style={S.linkSoft}>Services</Link>
              <Link href="/gallery" style={S.linkSoft}>Gallery</Link>
              <Link href="/client-ai" style={S.linkSoft}>AI Planner</Link>
              <Link href="/book" style={S.linkSoft}>Book</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Trust({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={S.trust}>
      <div style={S.trustT}>{title}</div>
      <div style={S.trustD}>{desc}</div>
    </div>
  );
}

function Mini({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={S.mini}>
      <div style={S.miniT}>{title}</div>
      <div style={S.miniD}>{desc}</div>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div style={S.feature}>
      <div style={S.featureT}>{title}</div>
      <div style={S.featureD}>{text}</div>
    </div>
  );
}

function Photo({ src }: { src: string }) {
  return (
    <div style={S.photo}>
      <img src={src} alt="Eventura gallery" style={S.photoImg} />
    </div>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh" },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(7,7,10,.72)",
    borderBottom: "1px solid var(--border)",
  },
  headerInner: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: 14,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" },
  logo: { borderRadius: 14, border: "1px solid var(--border)" },
  brandTitle: { fontWeight: 980 },
  brandSub: { fontSize: 12, opacity: 0.65, marginTop: 2 },

  nav: { display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" },

  btn: {
    padding: "10px 14px",
    borderRadius: 14,
    border: "1px solid var(--border)",
    color: "var(--text)",
    background: "transparent",
    textDecoration: "none",
    fontWeight: 900,
    fontSize: 13,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnSolid: { background: "white", color: "black", borderColor: "rgba(255,255,255,.85)" },
  btnGold: {
    background: "linear-gradient(180deg, rgba(201,162,74,.95), rgba(201,162,74,.65))",
    color: "#120f08",
    borderColor: "rgba(201,162,74,.55)",
  },

  heroWrap: { padding: "28px 16px 12px" },
  hero: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gap: 14,
    gridTemplateColumns: "1.35fr .85fr",
  },
  heroLeft: {
    padding: 18,
    borderRadius: 22,
    border: "1px solid var(--border)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))",
  },
  kicker: { fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.7, fontWeight: 900 },
  h1: { fontSize: 46, margin: "10px 0 0", fontWeight: 990, letterSpacing: "-0.04em", lineHeight: 1.08 },
  lead: { marginTop: 12, opacity: 0.78, lineHeight: 1.75, fontSize: 16 },

  ctaRow: { marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" },

  trustRow: { marginTop: 16, display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" },
  trust: { padding: 12, borderRadius: 16, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)" },
  trustT: { fontWeight: 980 },
  trustD: { opacity: 0.7, marginTop: 4, fontSize: 13 },

  heroRight: { display: "grid", gap: 12 },
  glassCard: { padding: 16, borderRadius: 22, border: "1px solid var(--border)", background: "rgba(255,255,255,.06)" },
  cardTitle: { fontWeight: 990, fontSize: 16 },
  cardText: { opacity: 0.75, marginTop: 6, lineHeight: 1.6 },
  cardMini: { opacity: 0.65, marginTop: 10, fontSize: 12, lineHeight: 1.5 },

  miniGrid: { display: "grid", gap: 10, gridTemplateColumns: "repeat(3, 1fr)" },
  mini: { padding: 12, borderRadius: 18, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)" },
  miniT: { fontWeight: 980, fontSize: 13 },
  miniD: { opacity: 0.7, marginTop: 4, fontSize: 12, lineHeight: 1.4 },

  photoStripWrap: { padding: "10px 16px 0" },
  photoStrip: { maxWidth: 1180, margin: "0 auto", display: "grid", gap: 12, gridTemplateColumns: "repeat(3, 1fr)" },
  photo: { borderRadius: 18, overflow: "hidden", border: "1px solid rgba(255,255,255,.12)", background: "rgba(255,255,255,.04)", aspectRatio: "4/3" as any },
  photoImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  stripNote: { maxWidth: 1180, margin: "10px auto 0", opacity: 0.6, fontSize: 12 },

  section: { padding: "18px 16px 26px" },
  sectionHead: { maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, flexWrap: "wrap" },
  h2: { margin: 0, fontSize: 22, fontWeight: 990, letterSpacing: "-0.02em" },
  linkSoft: { color: "var(--text)", opacity: 0.75, textDecoration: "none" },

  grid: { maxWidth: 1180, margin: "12px auto 0", display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" },
  card: { padding: 16, borderRadius: 18, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.05)", color: "white", textDecoration: "none" },
  cardTitle2: { fontWeight: 990, fontSize: 18 },
  cardText2: { marginTop: 6, opacity: 0.72, lineHeight: 1.6 },
  cardCta: { marginTop: 10, fontWeight: 950, opacity: 0.92 },

  feature: { padding: 16, borderRadius: 18, border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.05)" },
  featureT: { fontWeight: 990, fontSize: 16 },
  featureD: { marginTop: 6, opacity: 0.72, lineHeight: 1.6 },

  footer: { borderTop: "1px solid rgba(255,255,255,.10)", padding: "22px 16px", marginTop: 10 },
  footerInner: { maxWidth: 1180, margin: "0 auto" },
};
