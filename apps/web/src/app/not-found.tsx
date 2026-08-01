import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <p className="eyebrow">404</p>
        <h1 className="h1">Page not found</h1>
        <p>The page may have moved or may not be published.</p>
        <p>
          <Link href="/">Home</Link> · <Link href="/our-work">Our Work</Link> ·{" "}
          <Link href="/insights">Insights</Link> ·{" "}
          <Link href="/contact">Contact</Link>
        </p>
      </div>
    </section>
  );
}
