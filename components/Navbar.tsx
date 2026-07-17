"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { socials } from "@/data/socialData";

const navs = [
  { text: "Consortium Members", link: "/consortium-members" },
  { text: "Walk Weekend", link: "/walk-weekend" },
  { text: "Photo Gallery", link: "/photo-gallery" },
  { text: "About Us", link: "/about-us" }
];

export default function Navbar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false); 

  return (
    <header className={`sticky top-0 inset-x-0 z-1 bg-white/95 backdrop-blur-md border-b border-border shadow-sm`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-6 max-w-7xl mx-auto md:px-6">
        <div className="h-16 flex justify-between items-center px-6 md:px-0">
          <Link href="/" className="font-display text-lg font-semibold text-primary-dark">DKMC</Link>
          <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-xl md:hidden`} onClick={() => setOpen(!open)}></i>
        </div>
        <nav className={`${open ? "flex" : "hidden md:flex"} flex-col md:flex-row gap-6 lg:gap-8 font-medium p-6 md:p-0 border-t md:border-t-0 border-border`}>
          {navs.map((n, index) => (
            <Link key={index} href={n.link} className={`tiny ${pathname === n.link ? "text-primary-dark" : "text-foreground-light hover:text-primary-dark transition-colors"}`}>{n.text}</Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-3">
          {socials.map((s, index) => (
            <a key={index} href={s.link} className="text-foreground-light hover:text-primary-dark transition-colors">
              <i className={`${s.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}