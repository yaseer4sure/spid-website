import Link from "next/link";

export function Footer() {
  return (
    <footer className="deep footer">
      <div className="container footer-grid">
        <div>
          <strong className="footer-brand">SPiD</strong>
          <p>
            Locally led, youth-driven climate resilience across Nigeria and
            Africa.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/our-work/cpi4cg">CPI4CG</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/get-involved">Get Involved</Link>
        </div>
        <div>
          <h2>Connect</h2>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact?type=partnership">Partner With Us</Link>
        </div>
        <div>
          <h2>Legal</h2>
          <span aria-disabled="true">Privacy policy — draft</span>
          <span aria-disabled="true">Terms — draft</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>
          © {new Date().getFullYear()} SPiD. Legal pages remain unpublished
          pending approval.
        </small>
      </div>
    </footer>
  );
}
