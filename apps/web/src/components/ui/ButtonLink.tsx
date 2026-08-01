import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "warm";
};
export function ButtonLink({ href, children, variant = "primary" }: Props) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      {children}
    </Link>
  );
}
