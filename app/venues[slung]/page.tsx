// app/page.tsx
import Link from "next/link";

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
    <div style={S.page}>
      <Nav />

      <main>
        {/* Hero */}
        <section style={S.hero}>
          <div style={S.container}>
            <div style={S.heroGrid}>
              <div>
                <div style={S.pills}>
                  <span style={S.pill}>Gujarat Specialists</span>
                  <span style={S.pill}>Full Planning Service</span>
                  <span style={S.pill}>Venues • Vendors • Execution</span>
                </div>

                <h1 style={S.h1}>Eventura — events that speak your style.</h1>

                <p style={S.p}>
                  Premium end-to-end planning in Gujarat. We shortlist venues, manage vendors,
                  build timelines, and run your event smoothly—so you enjoy every moment.
                </p>

                <div style={S.ctaRow}>
                  <Link href="/book" style={{ ...S.btn, ...S.btnSolid }}>
                    Free Consultation
                  </Link>
                  <Link href="/venues" style={S.btn}>
                    Browse Venues
                  </Link>
                </div>

                <div style={S.trustRow}>
                  <TrustItem label="Planning" value="End-to-end" />
                  <TrustItem label="Cities" value="Across Gujarat" />
                  <TrustItem label="Response" value="Fast" />
                </div>
              </div>

              {/* Right card */}
              <div style={S.card}>
                <div style={S.cardPad}>
                  <div style={S.cardTitle}>Get a curated venue + plan</div>
                  <div style={S.small}>
                    Tell us the basics. We’ll share shortlists and a full planning quote.
                  </div>

                  <div style={{ height: 12 }} />
                  <QuickSearch />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section style={S.section}>
          <div style={S.container}>
            <div style={S.eyebrow}>Top Cities</div>
            <div style={S.h2}>We plan events across Gujarat</div>
            <div style={S.desc}>
              Select a city to explore venues and start planning.
            </div>

            <div style={S.grid3}>
              {CITIES.map((city) => (
                <Link
                  key={city}
                  href={`/venues?city=${encodeURIComponent(city)}`}
                  style={S.linkCard}
                >
                  <div style={S.cityCard}>
                    <div style={S.rowBetween}>
                      <div style={S.title}>{city}</div>
                      <div style={S.arrow}>→</div>
                    </div>
                    <div style={S.small}>Browse curated venues</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured venues */}
        <section style={S.section}>
          <div style={S.container}>
            <div style={S.eyebrow}>Featured</div>
            <div style={S.h2}>Popular venues in Gujarat</div>
            <div style={S.desc}>Explore options and request a full planning quote.</div>

            <div style={S.grid3}>
              {featured.map((v) => (
                <Link key={v.slug} href={`/venues/${v.slug}`} style={S.linkCard}>
                  <div style={S.venueCard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.image} alt={v.name} style={S.venueImg} />
                    <div style={S.cardPad}>
                      <div style={S.rowBetween}>
                        <div style={{ minWidth: 0 }}>
                          <div style={S.title}>{v.name}</div>
                          <div style={S.small}>{v.city}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={S.small}>Starting</div>
                          <div style={S.price}>{formatINR(v.startingFromINR)}</div>
                        </div>
                      </div>

                      <div style={S.tagRow}>
                        {v.tags.slice(0, 3).map((t) => (
                          <span key={t} style={S.tag}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 16 }}>
              <Link href="/venues" style={S.btn}>
                View all venues →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={S.footer}>
          <div style={S.container}>
            <div style={S.footerGrid}>
              <div>
                <div style={S.footerBrand}>Eventura</div>
                <div style={S.small}>
                  Full planning • Gujarat • Weddings • Corporate • Celebrations
                </div>
              </div>

              <div style={S.footerLinks}>
                <Link href="/venues" style={S.footerLink}>Venues</Link>
                <Link href="/book" style={S.footerLink}>Consultation</Link>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={S.small}>© {new Date().getFullYear()} Eventura</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Nav() {
  return (
    <div style={S.navWrap}>
      <div style={S.container}>
        <div style={S.nav}>
          <Link href="/" style={S.brand}>
            {/* If you added public/logo.png, it will show. If not, fallback circle shows. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Eventura"
              width={34}
              height={34}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
              style={S.logoImg}
            />
            <div style={S.logoFallback}>E</div>

            <div>
              <div style={S.brandTitle}>Eventura</div>
              <div style={S.brandSub}>Events that speak your style</div>
            </div>
          </Link>

          <div style={S.navRight}>
            <Link href="/venues" style={S.btn}>
              Venues
            </Link>
            <Link href="/book" style={{ ...S.btn, ...S.btnSolid }}>
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={S.trustItem}>
      <div style={S.small}>{label}</div>
      <div style={S.trustValue}>{value}</div>
    </div>
  );
}

function QuickSearch() {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <label style={S.field}>
        <span style={S.label}>City</span>
        <select style={S.input} defaultValue="Ahmedabad">
          {CITIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label style={S.field}>
        <span style={S.label}>Event type</span>
        <select style={S.input} defaultValue="Wedding">
          {["Wedding","Engagement","Reception","Corporate","Birthday","Other"].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
        <label style={S.field}>
          <span style={S.label}>Start</span>
          <input style={S.input} type="date" />
        </label>
        <label style={S.field}>
          <span style={S.label}>End</span>
          <input style={S.input} type="date" />
        </label>
      </div>

      <label style={S.field}>
        <span style={S.label}>Guests</span>
        <input style={S.input} defaultValue="200" />
      </label>

      <Link href="/book" style={{ ...S.btn, ...S.btnSolid, width: "100%" }}>
        Get Quote
      </Link>

      <div style={S.small}>
        We’ll reply with a shortlist + planning quote.
      </div>
    </div>
  );
}

const S: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh" },
  container: { maxWidth: 1120, margin: "0 auto", padding: "0 16px" },

  navWrap: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(7,7,10,.72)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,.10)",
  },
  nav: { height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 },
  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" },
  logoImg: { borderRadius: 12, border: "1px solid rgba(255,255,255,.14)" },
  logoFallback: {
    width: 34, height: 34, borderRadius: 12,
    display: "grid", placeItems: "center",
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.14)",
    fontWeight: 900,
  },
  brandTitle: { fontWeight: 900, fontSize: 14, lineHeight: 1.1 },
  brandSub: { fontSize: 11, color: "rgba(255,255,255,.58)", marginTop: 2 },

  navRight: { display: "flex", alignItems: "center", gap: 10 },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.14)",
    background: "transparent",
    color: "rgba(255,255,255,.92)",
    fontSize: 13,
    fontWeight: 800,
    textDecoration: "none",
  },
  btnSolid: {
    background: "#fff",
    color: "#000",
    borderColor: "rgba(255,255,255,.9)",
  },

  hero: { padding: "40px 0 26px" },
  heroGrid: { display: "grid", gap: 16, alignItems: "end", gridTemplateColumns: "1.15fr .85fr" },

  pills: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 },
  pill: {
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    fontSize: 12,
    color: "rgba(255,255,255,.70)",
    fontWeight: 700,
  },

  h1: { margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: "-0.02em", lineHeight: 1.08 },
  p: { marginTop: 10, color: "rgba(255,255,255,.72)", lineHeight: 1.7, fontSize: 15 },

  ctaRow: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 },

  trustRow: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 },
  trustItem: {
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.04)",
    minWidth: 140,
  },
  trustValue: { fontWeight: 900, marginTop: 3 },

  card: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    boxShadow: "0 18px 42px rgba(0,0,0,.45)",
  },
  cardPad: { padding: 18 },
  cardTitle: { fontWeight: 950, fontSize: 16 },

  field: { display: "grid", gap: 6 },
  label: { fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,.58)", fontWeight: 900 },
  input: {
    height: 44,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(0,0,0,.30)",
    color: "rgba(255,255,255,.92)",
    padding: "0 12px",
    outline: "none",
  },
  small: { fontSize: 12, color: "rgba(255,255,255,.58)", marginTop: 10 },

  section: { padding: "32px 0", borderTop: "1px solid rgba(255,255,255,.08)" },
  eyebrow: { fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.58)", fontWeight: 900, marginBottom: 6 },
  h2: { fontSize: 26, fontWeight: 950, letterSpacing: "-0.02em" },
  desc: { marginTop: 8, color: "rgba(255,255,255,.72)", fontSize: 14 },

  grid3: { marginTop: 14, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" },
  linkCard: { textDecoration: "none" },

  cityCard: {
    padding: 16,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
  },

  venueCard: {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    overflow: "hidden",
  },
  venueImg: { height: 175, width: "100%", objectFit: "cover", opacity: 0.95 },
  rowBetween: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 },
  title: { fontWeight: 950, fontSize: 16 },
  price: { fontWeight: 950 },

  tagRow: { marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 },
  tag: {
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.05)",
    fontSize: 12,
    color: "rgba(255,255,255,.70)",
    fontWeight: 700,
  },

  arrow: { color: "rgba(255,255,255,.65)", fontWeight: 900 },

  footer: { padding: "22px 0", borderTop: "1px solid rgba(255,255,255,.10)" },
  footerGrid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", gap: 12 },
  footerBrand: { fontWeight: 950 },
  footerLinks: { display: "flex", gap: 14, justifyContent: "center" },
  footerLink: { color: "rgba(255,255,255,.72)" },
};

