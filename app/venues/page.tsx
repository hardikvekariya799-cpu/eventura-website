// app/venues/page.tsx
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

export default function VenuesPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const city = typeof searchParams?.city === "string" ? searchParams.city : "";
  const guests = typeof searchParams?.guests === "string" ? searchParams.guests : "";
  const guestNum = guests ? Number(guests) : NaN;

  const filtered = VENUES.filter((v) => {
    const okCity = city ? v.city === city : true;
    const okGuests = Number.isFinite(guestNum) ? v.capacity.max >= guestNum : true;
    return okCity && okGuests;
  });

  return (
    <div style={S.page}>
      <TopNav />

      <div style={S.sectionNoBorder}>
        <div style={S.container}>
          <div style={S.eyebrow}>Browse</div>
          <div style={S.h2}>Venues in Gujarat</div>
          <div style={S.desc}>Filter by city and guest count — then request a full planning quote.</div>

          {/* Filters */}
          <div style={{ ...S.card, padding: 18, marginTop: 14 }}>
            <div style={{ ...S.rowBetween, flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={S.label}>City</div>
                <div style={S.filtersRow}>
                  <Link style={linkStyle(city === "")} href="/venues">All</Link>
                  {CITIES.map((c) => (
                    <Link
                      key={c}
                      style={linkStyle(city === c)}
                      href={`/venues?city=${encodeURIComponent(c)}${guests ? `&guests=${encodeURIComponent(guests)}` : ""}`}
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div style={S.label}>Guests</div>
                <div style={S.filtersRow}>
                  {["100", "200", "400", "800"].map((g) => (
                    <Link
                      key={g}
                      style={linkStyle(guests === g)}
                      href={`/venues?${new URLSearchParams({ ...(city ? { city } : {}), guests: g }).toString()}`}
                    >
                      {g}+
                    </Link>
                  ))}
                  <Link
                    style={linkStyle(false)}
                    href={`/venues?${new URLSearchParams({ ...(city ? { city } : {}) }).toString()}`}
                  >
                    Reset
                  </Link>
                </div>
              </div>

              <div>
                <Link href="/book" style={{ ...S.btn, ...S.btnSolid }}>
                  Request full plan
                </Link>
              </div>
            </div>
          </div>

          {/* Venue grid */}
          <div style={S.grid3}>
            {filtered.map((v) => (
              <Link key={v.slug} href={`/venues/${v.slug}`} style={S.linkCard}>
                <div style={S.card}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.image} alt={v.name} style={S.venueImg} />
                  <div style={{ padding: 16 }}>
                    <div style={S.rowBetween}>
                      <div style={{ minWidth: 0 }}>
                        <div style={S.title}>{v.name}</div>
                        <div style={S.small}>{v.city}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={S.small}>Starting</div>
                        <div style={S.title}>{formatINR(v.startingFromINR)}</div>
                      </div>
                    </div>

                    <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                      <span style={S.pill}>
                        {v.capacity.min}–{v.capacity.max} guests
                      </span>
                      {v.tags.slice(0, 2).map((t) => (
                        <span key={t} style={S.pill}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{ ...S.p, marginTop: 18 }}>
              No venues found for these filters. Try a different city/guest range.
            </div>
          ) : null}

          <div style={{ marginTop: 18 }}>
            <Link href="/" style={S.btn}>← Back to Home</Link>
          </div>
        </div>
      </div>

      <FooterMini />
      <WhatsAppMini />
    </div>
  );
}

/* ---------- Small shared UI (inside this single file) ---------- */

function TopNav() {
  return (
    <div style={S.navWrap}>
      <div style={S.container}>
        <div style={S.nav}>
          <Link href="/" style={S.brand}>
            <div style={S.logo}>E</div>
            <div>
              <div style={S.brandTitle}>Eventura</div>
              <div style={S.brandSub}>Gujarat • Full Planning</div>
            </div>
          </Link>

          <div style={S.navRight}>
            <Link href="/book" style={{ ...S.btn, ...S.btnSolid }}>
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterMini() {
  return (
    <div style={S.footer}>
      <div style={S.container}>
        <div style={S.small}>
          © {new Date().getFullYear()} Eventura. All rights reserved.
        </div>
      </div>
    </div>
  );
}

function WhatsAppMini() {
  return (
    <a
      href="https://wa.me/917622856869"
      target="_blank"
      rel="noreferrer"
      style={S.wa}
      aria-label="Chat on WhatsApp"
    >
      <span style={S.waIcon}>W</span>
      WhatsApp
    </a>
  );
}

function linkStyle(active: boolean): React.CSSProperties {
  return {
    color: active ? "rgba(255,255,255,.92)" : "rgba(255,255,255,.68)",
    fontWeight: active ? 800 : 600,
    textDecoration: "none",
  };
}

const S: Record<string, React.CSSProperties> = {
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
  brand: { display: "flex", gap: 10, alignItems: "center", textDecoration: "none" },
  logo: {
    width: 38,
    height: 38,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    fontWeight: 900,
    color: "rgba(255,255,255,.92)",
  },
  brandTitle: { fontWeight: 900, fontSize: 14, lineHeight: 1.1, color: "rgba(255,255,255,.92)" },
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

  sectionNoBorder: { padding: "34px 0" },
  eyebrow: { fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,.55)", fontWeight: 800, marginBottom: 6 },
  h2: { fontSize: 26, fontWeight: 900, letterSpacing: "-0.02em" },
  desc: { color: "rgba(255,255,255,.68)", fontSize: 14, marginTop: 8 },

  card: {
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    borderRadius: 18,
    boxShadow: "0 16px 40px rgba(0,0,0,.45)",
  },

  rowBetween: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 },

  filtersRow: { marginTop: 8, display: "flex", flexWrap: "wrap", gap: 12 },

  grid3: { marginTop: 14, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" },
  linkCard: { textDecoration: "none" },

  title: { fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,.92)" },
  small: { fontSize: 12, color: "rgba(255,255,255,.55)" },
  p: { marginTop: 10, color: "rgba(255,255,255,.68)", fontSize: 15, lineHeight: 1.6 },

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

  venueImg: { height: 175, width: "100%", objectFit: "cover", opacity: 0.92, borderTopLeftRadius: 18, borderTopRightRadius: 18 },

  footer: { borderTop: "1px solid rgba(255,255,255,.12)", padding: "22px 0", marginTop: 24 },

  wa: {
    position: "fixed",
    right: 16,
    bottom: 16,
    zIndex: 60,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 14px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.10)",
    backdropFilter: "blur(8px)",
    color: "rgba(255,255,255,.92)",
    textDecoration: "none",
    boxShadow: "0 16px 40px rgba(0,0,0,.45)",
    fontWeight: 800,
    fontSize: 13,
  },
  waIcon: {
    width: 34,
    height: 34,
    borderRadius: 999,
    display: "grid",
    placeItems: "center",
    background: "#fff",
    color: "#000",
    fontWeight: 900,
  },
};
