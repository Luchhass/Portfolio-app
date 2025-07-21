import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/contact">contact</Link>
        <Link href="/projects">projects</Link>
        <Link href="/referances">referances</Link>
      </nav>
    </header>
  );
}
