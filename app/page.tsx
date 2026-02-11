// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  const whatsappNumber = "91XXXXXXXXXX"; // TODO: replace with your WhatsApp number (countrycode+number, no +)
  const whatsappText = encodeURIComponent(
    "Hi Eventura! I want to plan an event. Please share packages and availability."
  );
  const waLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <main>
      {/* Top Bar */}
      <header className="topbar">
        <div className="wrap topbarInner">
          <a className="brand" href="#top" aria-label="Eventura Home">
            <span className="logoBox">
              <Image
                src="/logo.png"
                alt="Eventura"
                width={140}
                height={56}
                priority
                style={{ height: "auto", width: "140px" }}
              />
            </span>
          </a>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="actions">
            <a className="btn ghost" href="#contact">
              Get Quote
            </a>
            <a className="btn primary" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="hero">
        <div className="wrap heroGrid">
          <div>
            <p className="pill">EVENT PLANNING • DECOR • COORDINATION</p>
            <h1 className="h1">
              Events that speak your style — planned beautifully, executed smoothly.
            </h1>
            <p className="sub">
              Eventura helps you plan weddings, corporate events, and private celebrations with
              premium design + stress-free management.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#contact">
                Request a Quote
              </a>
              <a className="btn soft" href="#services">
                Explore Services
              </a>
            </div>

            <div className="trustRow">
              <div className="trustCard">
                <div className="trustTitle">Fast Response</div>
                <div className="trustText">We reply within 24 hours</div>
              </div>
              <div className="trustCard">
                <div className="trustTitle">Transparent Pricing</div>
                <div className="trustText">Clear packages, no surprises</div>
              </div>
              <div className="trustCard">
                <div className="trustTitle">End-to-End</div>
                <div className="trustText">From planning to execution</div>
              </div>
            </div>
          </div>

          <div className="heroCard">
            <div className="heroCardTop">
              <div>
                <div className="heroCardTitle">Quick Booking</div>
                <div className="heroCardSub">Tell us your date + city</div>
              </div>
              <span className="badge">Available Slots</span>
            </div>

            <div className="form">
              <label className="label">
                Your Name
                <input className="input" placeholder="Full name" />
              </label>

              <label className="label">
                City
                <input className="input" placeholder="Ahmedabad, Surat, Toronto..." />
              </label>

              <label className="label">
                Event Type
                <select className="input" defaultValue="Wedding">
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Corporate</option>
                  <option>Birthday / Private</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="label">
                Date (optional)
                <input className="input" placeholder="DD/MM/YYYY" />
              </label>

              <a className="btn primary full" href={waLink} target="_blank" rel="noreferrer">
                Send on WhatsApp
              </a>

              <p className="tiny">
                By messaging, you agree to be contacted about your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="wrap twoCol">
          <div className="card pad">
            <h2 className="h2">About Eventura</h2>
            <p className="p">
              We’re an event design & management team focused on clean execution, premium aesthetics,
              and a client experience that feels easy from day one.
            </p>
            <div className="miniGrid">
              <div className="mini">
                <div className="miniTitle">Planning</div>
                <div className="miniText">Timeline, vendors, budgeting</div>
              </div>
              <div className="mini">
                <div className="miniTitle">Design</div>
                <div className="miniText">Theme, decor, experience</div>
              </div>
              <div className="mini">
                <div className="miniTitle">Management</div>
                <div className="miniText">On-site coordination</div>
              </div>
              <div className="mini">
                <div className="miniTitle">Hospitality</div>
                <div className="miniText">Guests, logistics, comfort</div>
              </div>
            </div>
          </div>

          <div className="card pad">
            <h2 className="h2">What clients love</h2>
            <ul className="list">
              <li>Simple communication (WhatsApp-first)</li>
              <li>Clear plan + checklist, no confusion</li>
              <li>Premium look without chaos</li>
              <li>Vendor follow-ups handled by us</li>
            </ul>
            <div className="divider" />
            <p className="p">
              Want to see how it works? Check our process and request a quote.
            </p>
            <div className="row">
              <a className="btn soft" href="#process">
                Our Process
              </a>
              <a className="btn primary" href="#contact">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="h2">Services</h2>
            <p className="p">Choose what you need — we can handle full planning or specific parts.</p>
          </div>

          <div className="grid3">
            <article className="card pad">
              <h3 className="h3">Weddings</h3>
              <p className="p">Full planning, decor, vendors, timeline, guest experience.</p>
              <div className="tagRow">
                <span className="tag">Planning</span>
                <span className="tag">Decor</span>
                <span className="tag">Coordination</span>
              </div>
            </article>

            <article className="card pad">
              <h3 className="h3">Corporate Events</h3>
              <p className="p">Conferences, launches, team events with clean logistics.</p>
              <div className="tagRow">
                <span className="tag">AV</span>
                <span className="tag">Stage</span>
                <span className="tag">Logistics</span>
              </div>
            </article>

            <article className="card pad">
              <h3 className="h3">Private & Social</h3>
              <p className="p">Birthdays, anniversaries, intimate parties, proposals.</p>
              <div className="tagRow">
                <span className="tag">Themes</span>
                <span className="tag">Gifting</span>
                <span className="tag">Hospitality</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery (placeholders) */}
      <section id="gallery" className="section">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="h2">Gallery</h2>
            <p className="p">For now, these are placeholders — we’ll add real photos next.</p>
          </div>

          <div className="gallery">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="gItem" aria-label={`Gallery placeholder ${i + 1}`}>
                <div className="gTop" />
                <div className="gBottom">
                  <div className="gLine" />
                  <div className="gLine short" />
                </div>
              </div>
            ))}
          </div>

          <div className="row center">
            <a className="btn soft" href="#contact">
              Ask for Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="h2">Simple process</h2>
            <p className="p">Easy steps for clients — no complicated forms.</p>
          </div>

          <div className="grid4">
            <div className="card pad">
              <div className="stepNum">01</div>
              <h3 className="h3">Share details</h3>
              <p className="p">Date, city, budget range, style preference.</p>
            </div>
            <div className="card pad">
              <div className="stepNum">02</div>
              <h3 className="h3">Get proposal</h3>
              <p className="p">We send packages + timeline + next steps.</p>
            </div>
            <div className="card pad">
              <div className="stepNum">03</div>
              <h3 className="h3">Planning begins</h3>
              <p className="p">Vendors, decor, logistics, guest experience.</p>
            </div>
            <div className="card pad">
              <div className="stepNum">04</div>
              <h3 className="h3">Event day</h3>
              <p className="p">We coordinate everything while you enjoy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="wrap contactGrid">
          <div className="card pad">
            <h2 className="h2">Contact</h2>
            <p className="p">
              Fastest way: WhatsApp. Tell us your event type + city + date.
            </p>
            <div className="row">
              <a className="btn primary" href={waLink} target="_blank" rel="noreferrer">
                WhatsApp Now
              </a>
              <a className="btn ghost" href="mailto:hello@eventura.com">
                Email Us
              </a>
            </div>
            <div className="divider" />
            <div className="info">
              <div>
                <div className="infoLabel">Phone</div>
                <div className="infoValue">+91 XXXXX XXXXX</div>
              </div>
              <div>
                <div className="infoLabel">City</div>
                <div className="infoValue">Ahmedabad • Surat • Destination</div>
              </div>
            </div>
          </div>

          <div className="card pad">
            <h3 className="h3">Request a quote</h3>
            <p className="p">We’ll reply within 24 hours.</p>
            <div className="form">
              <label className="label">
                Name
                <input className="input" placeholder="Your name" />
              </label>
              <label className="label">
                Phone / WhatsApp
                <input className="input" placeholder="Number" />
              </label>
              <label className="label">
                Message
                <textarea className="input" rows={4} placeholder="Event type, city, date, budget" />
              </label>
              <a className="btn primary full" href={waLink} target="_blank" rel="noreferrer">
                Send Quote Request on WhatsApp
              </a>
              <p className="tiny">
                (This form is UI-only for now. Next step we can connect it to email/database.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap footerInner">
          <div className="footBrand">
            <Image
              src="/logo.png"
              alt="Eventura"
              width={120}
              height={48}
              style={{ height: "auto", width: "120px" }}
            />
            <div className="footText">Events that speak your style</div>
          </div>
          <div className="footLinks">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="copy">© {new Date().getFullYear()} Eventura</div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx global>{`
        :root {
          --bg: #0f2a2a;       /* deep green (matches your gold logo) */
          --surface: #0f3533;
          --surface2: #12403d;
          --text: #f5f2ea;     /* warm off-white */
          --muted: rgba(245, 242, 234, 0.75);
          --border: rgba(245, 242, 234, 0.12);

          --gold: #d7b86a;     /* classy gold */
          --gold2: #caa552;
          --cream: #f5f2ea;

          --shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
          --shadowSoft: 0 10px 28px rgba(0, 0, 0, 0.28);
          --radius: 18px;
        }

        html,
        body {
          padding: 0;
          margin: 0;
        }

        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          background: radial-gradient(900px 480px at 20% -10%, rgba(215, 184, 106, 0.20), transparent 55%),
            radial-gradient(700px 420px at 95% 10%, rgba(215, 184, 106, 0.14), transparent 55%),
            var(--bg);
          color: var(--text);
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .wrap {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 18px;
        }

        /* Header */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: rgba(15, 42, 42, 0.75);
          border-bottom: 1px solid var(--border);
        }

        .topbarInner {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 150px;
        }

        .logoBox {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .nav {
          display: flex;
          gap: 18px;
          align-items: center;
          justify-content: center;
        }

        .nav a {
          color: var(--muted);
          font-weight: 600;
          font-size: 14px;
          padding: 10px 10px;
          border-radius: 999px;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .nav a:hover {
          color: var(--text);
          background: rgba(245, 242, 234, 0.08);
        }

        .actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          padding: 0 16px;
          border-radius: 999px;
          font-weight: 800;
          letter-spacing: 0.2px;
          border: 1px solid transparent;
          transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease,
            border-color 0.12s ease;
          user-select: none;
        }

        .btn:active {
          transform: translateY(1px);
        }

        .btn.primary {
          background: linear-gradient(180deg, rgba(215, 184, 106, 0.95), rgba(202, 165, 82, 0.95));
          color: #1a1a1a;
          box-shadow: 0 16px 30px rgba(215, 184, 106, 0.18);
        }

        .btn.primary:hover {
          box-shadow: 0 18px 38px rgba(215, 184, 106, 0.22);
        }

        .btn.ghost {
          background: transparent;
          border-color: var(--border);
          color: var(--text);
        }

        .btn.ghost:hover {
          background: rgba(245, 242, 234, 0.08);
        }

        .btn.soft {
          background: rgba(245, 242, 234, 0.10);
          border-color: rgba(245, 242, 234, 0.14);
          color: var(--text);
        }

        .btn.soft:hover {
          background: rgba(245, 242, 234, 0.14);
        }

        .btn.full {
          width: 100%;
        }

        /* Hero */
        .hero {
          padding: 56px 0 22px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr;
          gap: 22px;
          align-items: start;
        }

        .pill {
          display: inline-flex;
          border: 1px solid rgba(245, 242, 234, 0.14);
          background: rgba(245, 242, 234, 0.08);
          padding: 10px 14px;
          border-radius: 999px;
          font-weight: 800;
          color: var(--muted);
          font-size: 12px;
          letter-spacing: 0.12em;
          margin: 0 0 14px;
        }

        .h1 {
          margin: 0 0 12px;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .sub {
          margin: 0 0 18px;
          color: var(--muted);
          font-size: 16px;
          max-width: 56ch;
        }

        .ctaRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .trustRow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .trustCard {
          border: 1px solid var(--border);
          background: rgba(15, 53, 51, 0.55);
          border-radius: var(--radius);
          padding: 14px;
          box-shadow: var(--shadowSoft);
        }

        .trustTitle {
          font-weight: 900;
          margin-bottom: 6px;
        }

        .trustText {
          color: var(--muted);
          font-weight: 600;
          font-size: 13px;
        }

        /* Cards */
        .card {
          border: 1px solid var(--border);
          background: rgba(15, 53, 51, 0.72);
          border-radius: var(--radius);
          box-shadow: var(--shadowSoft);
        }

        .pad {
          padding: 18px;
        }

        .heroCardTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .badge {
          border: 1px solid rgba(215, 184, 106, 0.40);
          background: rgba(215, 184, 106, 0.14);
          color: var(--cream);
          padding: 8px 12px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 12px;
        }

        .heroCardTitle {
          font-weight: 900;
          font-size: 18px;
        }

        .heroCardSub {
          color: var(--muted);
          font-weight: 600;
          font-size: 13px;
          margin-top: 4px;
        }

        .form {
          display: grid;
          gap: 12px;
        }

        .label {
          display: grid;
          gap: 8px;
          font-weight: 800;
          color: var(--text);
          font-size: 13px;
        }

        .input {
          width: 100%;
          background: rgba(18, 64, 61, 0.65);
          border: 1px solid rgba(245, 242, 234, 0.14);
          border-radius: 14px;
          padding: 12px 12px;
          color: var(--text);
          outline: none;
          font-weight: 650;
        }

        .input:focus {
          border-color: rgba(215, 184, 106, 0.55);
          box-shadow: 0 0 0 4px rgba(215, 184, 106, 0.14);
        }

        .tiny {
          margin: 0;
          color: rgba(245, 242, 234, 0.65);
          font-size: 12px;
        }

        /* Sections */
        .section {
          padding: 44px 0;
        }

        .twoCol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .h2 {
          margin: 0 0 10px;
          font-size: clamp(22px, 2.6vw, 30px);
          letter-spacing: -0.01em;
        }

        .h3 {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 900;
        }

        .p {
          margin: 0 0 12px;
          color: var(--muted);
          font-weight: 600;
        }

        .miniGrid {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .mini {
          border: 1px solid rgba(245, 242, 234, 0.12);
          background: rgba(18, 64, 61, 0.50);
          border-radius: 16px;
          padding: 12px;
        }

        .miniTitle {
          font-weight: 900;
          margin-bottom: 6px;
        }

        .miniText {
          color: var(--muted);
          font-weight: 650;
          font-size: 13px;
        }

        .list {
          margin: 0;
          padding-left: 18px;
          color: var(--muted);
          font-weight: 650;
          display: grid;
          gap: 8px;
        }

        .divider {
          height: 1px;
          background: var(--border);
          margin: 14px 0;
        }

        .row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }

        .row.center {
          justify-content: center;
        }

        .sectionHead {
          margin-bottom: 12px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .tagRow {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .tag {
          border: 1px solid rgba(215, 184, 106, 0.28);
          background: rgba(215, 184, 106, 0.12);
          padding: 8px 10px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 12px;
          color: var(--cream);
        }

        /* Gallery placeholders */
        .gallery {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 12px;
        }

        .gItem {
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          background: rgba(15, 53, 51, 0.72);
          box-shadow: var(--shadowSoft);
          min-height: 180px;
        }

        .gTop {
          height: 120px;
          background: radial-gradient(600px 200px at 30% 20%, rgba(215, 184, 106, 0.22), transparent 60%),
            rgba(18, 64, 61, 0.60);
        }

        .gBottom {
          padding: 12px;
        }

        .gLine {
          height: 10px;
          border-radius: 999px;
          background: rgba(245, 242, 234, 0.14);
          margin-bottom: 8px;
        }

        .gLine.short {
          width: 60%;
        }

        /* Process */
        .grid4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin-top: 12px;
        }

        .stepNum {
          font-weight: 950;
          color: rgba(215, 184, 106, 0.95);
          margin-bottom: 8px;
          font-size: 14px;
          letter-spacing: 0.12em;
        }

        /* Contact */
        .contactGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .infoLabel {
          color: rgba(245, 242, 234, 0.65);
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .infoValue {
          font-weight: 900;
        }

        /* Footer */
        .footer {
          border-top: 1px solid var(--border);
          background: rgba(15, 42, 42, 0.65);
          padding: 22px 0;
        }

        .footerInner {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 14px;
          align-items: center;
        }

        .footBrand {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footText {
          color: rgba(245, 242, 234, 0.70);
          font-weight: 700;
          font-size: 13px;
        }

        .footLinks {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footLinks a {
          color: var(--muted);
          font-weight: 700;
          font-size: 13px;
        }

        .footLinks a:hover {
          color: var(--text);
        }

        .copy {
          color: rgba(245, 242, 234, 0.60);
          font-weight: 700;
          font-size: 13px;
          text-align: right;
        }

        /* Responsive */
        @media (max-width: 980px) {
          .heroGrid {
            grid-template-columns: 1fr;
          }
          .trustRow {
            grid-template-columns: 1fr;
          }
          .grid3 {
            grid-template-columns: 1fr;
          }
          .grid4 {
            grid-template-columns: 1fr;
          }
          .twoCol {
            grid-template-columns: 1fr;
          }
          .contactGrid {
            grid-template-columns: 1fr;
          }
          .nav {
            display: none;
          }
          .footerInner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .copy {
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
