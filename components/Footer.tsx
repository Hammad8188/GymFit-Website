import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 py-10 text-sm text-zinc-400">
      <div className="container grid gap-4 md:grid-cols-3">
        <div><p className="text-white font-semibold">GymFit</p><p>Open 24/7 • +1 555-000-9000</p></div>
        <div className="space-x-3">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/waiver">Waiver</Link>
        </div>
        <a href="https://wa.me/15550009000" className="text-brand-500">WhatsApp Us</a>
      </div>
    </footer>
  );
}
