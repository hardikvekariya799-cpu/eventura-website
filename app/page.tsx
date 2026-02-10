import Link from "next/link";
import { CITIES } from "../lib/cities";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const city = CITIES.find((c) => c.slug === params.slug);
  if (!city) return {};
  return {
    title: city.seoTitle,
    description: city.seoDesc,
    openGraph: {
      title: city.seoTitle,
      description: city.seoDesc,
    },
  };
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = CITIES.find((c) => c.slug === params.slug);
  if (!city) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between" }}>
          <Link href="/" style={brand}>Eventura</Link>
          <nav style={{ display: "flex", gap: 10 }}>
            <Link href="/cities" style={btn}>All Cities</Link>
            <Link href="/book" style={{ ...btn, ...btnSolid }}>Consultation</Link>
          </nav>
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1>Event Planner in {city.name}</h1>
          <p style={{ opacity: .8, lineHeight: 1.8 }}>
            Eventura offers premium event planning services in {city.name}. We handle venue sourcing,
            decor, vendor management and complete on-ground execution.
          </p>

          <h2>Popular areas we serve</h2>
          <ul>
            {city.areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <div style={{ marginTop: 16 }}>
            <Link href="/book" style={{ ...btn, ...btnSolid }}>Get Free Quote</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

const brand: React.CSSProperties = { color: "white", textDecoration: "none", fontWeight: 900 };
const btn: React.CSSProperties = { padding: "10px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,.2)", color: "white", textDecoration: "none", fontWeight: 900 };
const btnSolid: React.CSSProperties = { background: "white", color: "black" };
