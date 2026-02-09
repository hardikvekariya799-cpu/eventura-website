// app/page.tsx
import Link from "next/link";

/**
 * SINGLE-FILE SAFE HOME PAGE
 * - No "@/..." alias
 * - No external components needed
 * - No Tailwind required
 * - Deploy-safe
 *
 * Later we can split into components once your project structure is confirmed.
 */

type City =
  | "Ahmedabad"
  | "Surat"
  | "Vadodara"
  | "Rajkot"
  | "Gandhinagar"
  | "Jamnagar";

const CITIES: City[] = [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Gandhinagar",
  "Jamnagar",
];

type Venue = {
  slug: string;
  name: string;
  city: City;
  tags: string[];
  capacity: { min: number; max: number };
  startingFromINR: number;
  image: string;
};

const VENUES: Venue[] = [
  {
    slug: "skyline-banquet-ahmedabad",
    name: "Skyline Banquet & Lawn",
    city: "Ahmedabad",
    tags: ["Banquet", "Lawn", "Premium"],
    capacity: { min: 150, max: 900 },
    startingFromINR: 250000,
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "riverfront-resort-surat",
    name: "Riverfront Resort",
    city: "Surat",
    tags: ["Resort", "Poolside", "Destination"],
    capacity: { min: 80, max: 450 },
    startingFromINR: 320000,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "heritage-courtyard-vadodara",
    name: "Heritage Courtyard",
    city: "Vadodara",
    tags: ["Courtyard", "Heritage", "Luxury"],
    capacity: { min: 120, max: 600 },
    startingFromINR: 280000,
    image:
      "https://images.unsplash.com/photo-1529634897861-1f1d1e9f3a10?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "grand-dome-rajkot",
    name: "Grand Dome Hall",
    city: "Rajkot",
    tags: ["Indoor", "AC Hall", "Big Stage"],
    capacity: { min: 200, max: 1200 },
    startingFromINR: 220000,
    image:
      "https://images.unsplash.com/photo-1524777313293-86d2ab467344?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "capital-convention-gandhinagar",
    name: "Capital Convention & Garden",
    city: "Gandhinagar",
    tags: ["Convention", "Garden", "Corporate"],
    capacity: { min: 100, max: 800 },
    startingFromINR: 260000,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "coastal-villa-jamnagar",
    name: "Coastal Villa Retreat",
    city: "Jamnagar",
    tags: ["Villa", "Intimate", "Luxury"],
    capacity: { min: 40, max: 200 },
    startingFromINR: 180000,
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210a6?auto=format&fit=crop&w=1400&q=60",
  },
];

function formatINR(amount: number) {
  const s = Math.round(amount).toString();
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const withCommas = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹${rest ? withCommas + "," : ""}${last3}`;
}

export default function HomePage() {
  const featured = VENUES.slice(0, 6);

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <div style={styles.navWrap}>
        <div style={styles.container}>
          <div style={styles.nav}>
            <Link href="/" style={styles.brand}>
              <div style={styles.logo}>E</div>
              <div>
                <div style={styles.brandTitle}>Eventura</div>
                <div style={styles.brandSub}>Gujarat • Full Planning</div>
              </div>
            </Link>

            <div style={styles.navRight}>
              <Link href="/book" style={{ ...styles.btn, ...styles.btnSolid }}>
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.pills}>
                <span style={styles.pill}>Gujarat specialists</span>
                <span style={styles.pill}>Full planning service</span>
                <span style={styles.pill}>Venue + vendors + execution</span>
              </div>

              <h1 style={styles.h1}>
                Premium event planning in Gujarat — end-to-end, done right.
              </h1>

              <p style={styles.p}>
                Tell us your city, dates, and guest count. We’ll curate venues,
                build a plan, negotiate vendors, and manage your entire event —
                stress-free.
              </p>

              <div style={styles.ctaRow}>
                <Link href="/book" style={{ ...styles.btn, ...styles.btnSolid }}>
                  Get Free Consultation
                </Link>
                <Link href="/venues" style={styles.btn}>
                  Browse Venues
                </Link>
              </div>
            </div>

            {/* SIMPLE SEARCH CARD (static) */}
            <div style={{ ...styles.card, padding: 18 }}>
              <div style={styles.label}>City</div>
              <select style={styles.input} defaultValue="Ahmedabad">
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <div style={{ height: 10 }} />

              <div style={styles.label}>Event type</div>
              <select style={styles.input} defaultValue="Wedding">
                {["Wedding", "Engagement", "Reception", "Corporate", "Birthday", "Other"].map(
                  (t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  )
                )}
              </select>

              <div style={{ height: 10 }} />

              <div style={styles.label}>Dates</div>
              <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
                <input style={styles.input} type="date" />
                <input style={styles.input} type="date" />
              </div>

              <div style={{ height: 10 }} />

              <div style={styles.label}>Guests</div>
              <input style={styles.input} defaultValue="200" />

              <div style={{ height: 12 }} />

              <Link href="/venues" style={{ ...styles.btn, ...styles.btnSolid, width: "100%" }}>
                Check Availability
              </Link>

              <div style={styles.small}>
                Demo search (static). Next step: connect real inquiry form.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CITIES */}
      <div style={styles.section}>
        <div style={styles.container}>
          <div style={styles.eyebrow}>Top cities</div>
          <div style={styles.h2}>Gujarat destinations we plan in</div>
          <div style={styles.desc}>
            Start with a city — we’ll handle venues, vendors, design, and full execution.
          </div>

          <div style={styles.grid3}>
            {CITIES.map((city) => (
              <Link key={city} href={`/venues?city=${encodeURIComponent(city)}`} style={styles.linkCard}>
                <div style={{ ...styles.card, padding: 16 }}>
                  <div style={styles.rowBetween}>
                    <div style={styles.title}>{city}</div>
                    <div style={styles.small}>→</div>
                  </div>
                  <div style={{ ...styles.small, marginTop: 6 }}>
                    Explore venues and request a full plan.
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED VENUES */}
      <div style={styles.section}>
        <div style={styles.container}>
          <div style={styles.eyebrow}>Featured</div>
          <div style={styles.h2}>Popular venues in Gujarat</div>
          <div style={styles.desc}>
            Browse a curated list — then request a full planning quote.
          </div>

          <div style={styles.grid3}>
            {featured.map((v) => (
              <Link key={v.slug} href="/venues" style={styles.linkCard}>
                <div style={styles.card}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.image} alt={v.name} style={styles.venueImg} />
                  <div style={{ padding: 16 }}>
                    <div style={styles.rowBetween}>
                      <div style={{ minWidth: 0 }}>
                        <div style={styles.title}>{v.name}</div>
                        <div style={styles.small}>{v.city}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={styles.small}>Starting</div>
                        <div style={styles.title}>{formatINR(v.startingFromINR)}</div>
                      </div>
                    </div>
                    <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {v.tags.slice(0, 3).map((t) => (
                        <span key={t} style={styles.pill}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div style={styles.container}>
          <div style={{ display: "grid", gap: 14 }}>
            <div style={styles.title}>Eventura</div>
            <div style={styles.small}>
              Full-service event planning in Gujarat — venues, vendors, design, logistics,
              and flawless execution.
            </div>
            <div style={styles.small}>© {new Date().getFullYear()} Eventura. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#000", color: "rgba(255,255,255,.92)" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },

  navWrap: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(0,0,0,.65)",
    borderBottom: "1px solid rgba(255,255,255,.12)",
  },
  nav: { height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" },
  brand: { display: "flex", gap: 10, alignItems: "center" },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    fontWeight: 800,
  },
  brandTitle: { fontWeight: 800, fontSize: 14, lineHeight: 1.1 },
  brandSub: { fontSize: 11, color: "rgba(255,255,255,.55)", marginTop: 2 },

  navRight: { display: "flex", gap: 10, alignItems: "center" },
  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.12)",
    background: "transparent",
    color: "rgba(255,255,255,.92)",
    fontSize: 13,
    fontWeight: 700,
    textDecoration: "none",
  },
  btnSolid: { background: "#fff", color: "#000", borderColor: "rgba(255,255,255,.9)" },

  hero: { padding: "42px 0 26px" },
  heroGrid: { display: "grid", gap: 18, alignItems: "end" },

  pills: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 10px",
    fontSize: 12,
    color: "rgba(255,255,255,.68)",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    borderRadius: 999,
  },
  h1: { fontSize: 40, fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em", margin: 0 },
  p: { marginTop: 10, color: "rgba(255,255,255,.68)", fontSize: 15, lineHeight: 1.6 },
  ctaRow: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 },

  card: {
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    borderRadius: 18,
    boxShadow: "0 16px 40px rgba(0,0,0,.45)",
  },

  label: { fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", fontWeight: 800 },
  input: {
    height: 44,
    width: "100%",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(0,0,0,.35)",
    color: "rgba(255,255,255,.92)",
    padding: "0 12px",
    outline: "none",
  },
  small: { fontSize: 12, color: "rgba(255,255,255,.55)", marginTop: 10 },

  section: { padding: "34px 0", borderTop: "1px solid rgba(255,255,255,.08)" },
  eyebrow: { fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", fontWeight: 800, marginBottom: 6 },
  h2: { fontSize: 26, fontWeight: 900, letterSpacing: "-0.02em" },
  desc: { color: "rgba(255,255,255,.68)", fontSize: 14, marginTop: 8 },

  grid3: { marginTop: 14, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" },
  linkCard: { textDecoration: "none" },

  rowBetween: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 },
  title: { fontWeight: 900, fontSize: 16 },

  venueImg: { height: 175, width: "100%", objectFit: "cover", opacity: 0.92, borderTopLeftRadius: 18, borderTopRightRadius: 18 },

  footer: { borderTop: "1px solid rgba(255,255,255,.12)", padding: "28px 0" },
};
