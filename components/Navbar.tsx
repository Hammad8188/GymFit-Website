import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Memberships", "/memberships"],
  ["Classes", "/classes"],
  ["Trainers", "/trainers"],
  ["Programs", "/programs"],
  ["Results", "/results"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-black tracking-wide text-brand-500">GymFit</Link>
        <ul className="hidden gap-5 text-sm md:flex">
          {links.map(([label, href]) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
        </ul>
        <Link href="/contact" className="rounded bg-brand-500 px-3 py-2 text-sm font-semibold">Book Free Trial</Link>
      </nav>
    </header>
  );
}
