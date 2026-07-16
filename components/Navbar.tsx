import Link from "next/link";
import { socials } from "@/data/socialData";

const navs = [
  { text: "Consortium Members", link: "/consortium-members" },
  { text: "Walk Weekend", link: "/walk-weekend" },
  { text: "Photo Gallery", link: "/photo-gallery" },
  { text: "About Us", link: "/about-us" }
];

export default function Navbar({ position }: { position: string; }) {
  return (
    <header className={`${position} top-0 inset-x-0 z-1 bg-white/95 backdrop-blur-md border-b border-border`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-7xl mx-auto px-6">
        <div className="h-16 flex justify-between items-center">
          <Link href="/" className="font-display text-lg font-semibold text-primary">DKMC</Link>
          <i className="ri-menu-line text-xl md:hidden"></i>
        </div>
        <nav className="hidden md:flex gap-6 lg:gap-8 font-medium">
          {navs.map((n, index) => (
            <Link key={index} href={n.link} className="tiny text-foreground-light hover:text-primary transition-colors">{n.text}</Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-3">
          {socials.map((s, index) => (
            <a key={index} href={s.link} className="text-foreground-light hover:text-primary transition-colors">
              <i className={`${s.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}