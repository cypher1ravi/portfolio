import { nav, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60">
      <div className="mx-auto max-w-6xl border-t border-cream/10 px-5 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <a href="#home" className="font-display text-2xl font-semibold text-cream">
            Ravindra<span className="text-orange">.</span>
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="transition hover:text-orange-soft">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-sm">
          © 2026 {site.name}. Designed &amp; built with Next.js.
        </p>
      </div>
    </footer>
  );
}
