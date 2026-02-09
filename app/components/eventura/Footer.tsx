import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <div className="title">Eventura</div>
            <p className="p">
              Full-service event planning in Gujarat — venues, vendors, design,
              logistics, and flawless execution.
            </p>
          </div>

          <div>
            <div className="title">Explore</div>
            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              <Link className="muted" href="/gujarat">Gujarat</Link>
              <Link className="muted" href="/venues">Venues</Link>
              <Link className="muted" href="/services">Services</Link>
            </div>
          </div>

          <div>
            <div className="title">Company</div>
            <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
              <Link className="muted" href="/about">About</Link>
              <Link className="muted" href="/blogs">Blogs</Link>
              <Link className="muted" href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="title">Get in touch</div>
            <p className="p">
              Book a free consultation and we’ll send curated venues + a full plan.
            </p>
            <div className="small">
              WhatsApp:{" "}
              <a className="muted" href="https://wa.me/91XXXXXXXXXX">
                +91 XXXXXXXXXX
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,.1)" }}
             className="small">
          © {new Date().getFullYear()} Eventura. All rights reserved.
        </div>
      </div>
    </div>
  );
}
