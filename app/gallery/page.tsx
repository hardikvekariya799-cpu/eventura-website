import Link from "next/link";

const IMAGES = [1,2,3,4,5,6].map((n) => `/gallery/${n}.jpg`);

export const metadata = {
  title: "Gallery | Eventura",
  description: "Luxury event planning gallery by Eventura. Weddings & premium decor in Gujarat.",
};

export default function GalleryPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#07070a", color: "white" }}>
      <header style={{ borderBottom: "1px solid rgba(255,255,255,.10)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16, display: "flex", justifyContent: "space-between" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 950 }}>Eventura</Link>
          <Link href="/book" style={btn}>Book</Link>
        </div>
      </header>

      <main style={{ padding: 16 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1>Gallery</h1>
          <p style={{ opacity: 0.75, lineHeight: 1.7 }}>
            Add real photos in <b>public/gallery</b> named <b>1.jpg, 2.jpg...</b>
          </p>

          <div style={grid}>
            {IMAGES.map((src) => (
              <div key={src} style={tile}>
                <img src={src} alt="Eventura" style={img} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const btn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.18)",
  color: "white",
  textDecoration: "none",
  fontWeight: 900,
};

const grid: React.CSSProperties = {
  marginTop: 14,
  display: "grid",
  gap: 12,
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
};

const tile: React.CSSProperties = {
  borderRadius: 18,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,.12)",
  background: "rgba(255,255,255,.05)",
  aspectRatio: "4/3" as any,
};

const img: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};
