import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navWrap">
      <div className="container">
        <div className="nav">
          <Link href="/" className="brand">
            <div className="logo">E</div>
            <div>
              <div className="brandTitle">Eventura</div>
              <div className="brandSub">Gujarat • Full Planning</div>
            </div>
          </Link>

          <div className="navLinks">
            <Link href="/gujarat">Gujarat</Link>
            <Link href="/venues">Venues</Link>
            <Link href="/services">Services</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="navRight">
            <Link className="btn btnSolid" href="/book">
              Free Consultation
            </Link>
            <Link className="btn hideSm" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
