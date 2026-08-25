import Image from "next/image";
import Link from "next/link";
import { Handshake, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="deep footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" href="/" aria-label="SPiD home">
            <Image
              className="brand-logo"
              src="/brand/NEW LOGO SPID_043453 (1).png"
              width={2481}
              height={790}
              alt="SPiD"
            />
          </Link>
          <p>
            Locally led, youth-driven climate resilience across Nigeria and
            Africa.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/our-work/cpi4cg">CPI4CG</Link>
          <Link href="/our-work/ayede">AYEDE 4 Climate Action</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/get-involved">Get Involved</Link>
        </div>
        <div>
          <h2>Connect</h2>
          <Link href="/partners">Partners</Link>
          <Link className="footer-icon-link" href="/contact">
            <MessageCircle aria-hidden="true" /> Contact
          </Link>
          <Link className="footer-icon-link" href="/contact?type=partnership">
            <Handshake aria-hidden="true" /> Partner With Us
          </Link>
        </div>
        <div>
          <h2>Based in</h2>
          <span className="footer-icon-link">
            <MapPin aria-hidden="true" /> Nigeria
          </span>
          <span>Working Across Africa</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} Sustainable Participatory Development
          and Climate Resilience Initiative.
        </small>
      </div>
    </footer>
  );
}
