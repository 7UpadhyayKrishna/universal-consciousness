import Link from "next/link";
import { MobileNav } from "./mobile-nav";

const links = [
  { href: "/topics/meditation/", label: "Meditation" },
  { href: "/topics/consciousness/", label: "Consciousness" },
  { href: "/topics/yoga/", label: "Yoga" },
  { href: "/glossary/", label: "Glossary" },
  { href: "/questions/", label: "Questions" },
  { href: "/about/", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="header-bar">
        <Link className="wordmark" href="/">
          <span>Universal</span> Consciousness
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileNav links={links} />
      </div>
    </header>
  );
}
