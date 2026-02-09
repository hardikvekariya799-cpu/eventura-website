// app/venues/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

type City =
  | "Ahmedabad"
  | "Surat"
  | "Vadodara"
  | "Rajkot"
  | "Gandhinagar"
  | "Jamnagar";

type Venue = {
  slug: string;
  name: string;
  city: City;
  tags: string[];
  capacity: { min: number; max: number };
  startingFromINR: number;
  image: string;
  highlights: string[];
  description: string;
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
    highlights: ["Indoor + outdoor options", "Valet parking", "Luxury décor-ready"],
    description:
      "A versatile premium venue with banquet + lawn formats, ideal for large weddings and receptions.",
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
    highlights: ["Poolside events", "Stay rooms available", "Photography-friendly"],
    description:
      "Resort-style vibe for wedding functions and intimate destination celebrations within Gujarat.",
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
    highlights: ["Royal-style setting", "Stage-ready courtyard", "Premium catering partners"],
    description:
      "A heritage-inspired courtyard with a luxury aesthetic—perfect for classic Gujarati wedding themes.",
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
    highlights: ["Huge capacity", "AC indoor comfort", "LED + sound options"],
    description:
      "Massive indoor hall for large gatherings and corporate conferences with controlled climate comfort.",
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
    highlights: ["Conference-ready", "Garden functions", "Easy access"],
    description:
      "A modern venue suitable for corporate events and wedding receptions with garden options.",
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
    highlights: ["Intimate luxury", "Stay + functions", "Great for pre-wedding shoots"],
    description:
      "A boutique villa retreat for smaller premium celebrations—ideal for engagement, mehendi and private parties.",
  },
];

function formatINR(amount: number) {
  const s = Math.round(amount).toString();
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const withCommas = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹${rest ? withCommas + "," : ""}${last3}`;
}

export default function VenueDetail({ params }: { params: { slug: string } }) {
  const venue = VENUES.find((v) => v.slug === params.slug);
  if (!venue) return notFound();

  return (
    <div style={S.page}>
      <TopNav />

      <div style={S.sectionNoBorder}>
        <div style={S.container}>
          <div style={S.small}>
            <Link href="/venues" style={{ color: "rgba(255,255,255,.68)", textDecoration: "none" }}>
              Venues
            </Link>{" "}
            <span style={{ color: "rgba(255,255,255,.55)" }}>/</span> {venue.name}
          </div>

          <div style={S.detailGrid}>
            <div>
              <div style={S.card}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={venue.image} alt={venue.name} style={{ ...S.venueImg, height: 340 }} />
              </div>

              <div style={{ ...S.card, padding: 18, marginTop: 14 }}>
                <div style={S.title}>About</div>
                <div style={S.p}>{venue.description}</div>

                <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                  {venue.highlights.map((h) => (
                    <div key={h} style={{ color: "rgba(255,255,255,.68)" }}>
                      • {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div style={{ ...S.card, padding: 18 }}>
                <div style={{ ...S.h2, fontSize: 22 }}>{venue.name}</div>
                <div style={S.small}>{venue.city}, Gujarat</div>

                <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  <span style={S.pill}>
                    {venue.capacity.min}–{venue.capacity.max} guests
                  </span>
                  {venue.tags.map((t) => (
                    <span key={t} style={S.pill}>{t}</span>
                  ))}
                </div>

                <div style={{ ...S.card, padding: 14, marginTop: 14, background: "rgba(0,0,0,.25)" }}>
                  <div style={S.small}>Starting from</div>
                  <div style={{ ...S.title, fontSize: 20 }}>{formatINR(venue.startingFromINR)}</div>
                  <div style={{ ...S.small, marginTop: 6 }}>
                    Final cost depends on dates, guest count, décor & vendors.
                  </div>
                </div>

                <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
                  <Link href={`/book?venue=${encodeURIComponent(venue.name)}`} style={{ ...S.btn, ...S.btnSolid }}>
                    Request quote
                  </Link>
                  <Link href="/book" style={S.btn}>
                    Get full planning package
                  </Link>
                  <Link href="/" style={S.btn}>
                    ← Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <FooterMini />
      <WhatsAppMini />
    </div>
  );
}

/* ---------- Shared mini UI ---------- */

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
    fontWeight: 800,
    textDecoration: "none",
  },
  btnSolid: { background: "#fff", color: "#000", borderColor: "rgba(255,255,255,.9)" },

  sectionNoBorder: { padding: "34px 0" },
  small: { fontSize: 12, color: "rgba(255,255,255,.55)", marginTop: 8 },

  card: {
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(255,255,255,.06)",
    borderRadius: 18,
    boxShadow: "0 16px 40px rgba(0,0,0,.45)",
  },

  h2: { fontSize: 26, fontWeight: 900, letterSpacing: "-0.02em" },
  title: { fontWeight: 900, fontSize: 16, color: "rgba(255,255,255,.92)" },
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

  detailGrid: {
    marginTop: 12,
    display: "grid",
    gap: 14,
    gridTemplateColumns: "1.6fr 1fr",
  },

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
    fontWeight: 900,
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
