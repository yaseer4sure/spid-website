import Link from "next/link";

export function EmptyState({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="alert">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
export function ErrorState() {
  return (
    <div className="alert">
      <h2>Something went wrong</h2>
      <p>
        Try again, or return to the <Link href="/">homepage</Link>.
      </p>
    </div>
  );
}
