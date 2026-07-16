import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { museums } from "@/data/museumData";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-svh md:min-h-auto md:h-140 grid grid-cols-1 md:grid-cols-7">
        {museums.map((m, index) => (
          <div key={index} className="relative overflow-hidden group">
            <Image src={`/${m.link.toLowerCase().replace(/\s+/g, "-")}.png`} alt={m.title} fill sizes="100%" className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[oklch(0.37_0.07_157)]/50 group-hover:bg-[oklch(0.37_0.07_157)]/15 p-4 flex items-end justify-center transition-colors duration-300">
              <span className="hidden md:block text-xs font-medium text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{m.title}</span>
            </div>
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-4 pointer-events-none">
          <h1 className="text-white text-4xl md:text-5xl font-medium">Dupont Kalorama<br/>Museums Consortium</h1>
          <p className="tiny text-white/70">Promoting "off the Mall" museums and our neighborhoods</p>
        </div>
      </section>
      <Navbar position="sticky" />
      <article className="text-center max-w-5xl mx-auto py-14 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Welcome to the<br/>Dupont-Kalorama Museums Consortium</h2>
        <div className="flex items-center justify-center gap-3 mt-6 mb-10">
          <div className="h-px w-12 bg-[oklch(0.68_0.113_168)]"></div>
          <div className="w-2 h-2 rounded-full bg-[oklch(0.68_0.113_168)]"></div>
          <div className="h-px w-12 bg-[oklch(0.68_0.113_168)]"></div>
        </div>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-[oklch(0.45_0_0)]">The Dupont Kalorama Museums Consortium exists to mutually advance the member institutions and create neighborhood cultural experiences. DKMC was established in 1983 to promote "off the Mall" museums and their neighborhoods — seven unique institutions within walking distance in one of DC's most historic districts.</p>
        <div className="text-center mb-20 py-12 px-8 bg-[oklch(0.96_0.015_171)] rounded-2xl border border-[oklch(0.92_0.031_174)] mt-16 mb-20">
          <span className="tiny font-semibold text-[oklch(0.51_0_0)]">Upcoming Event</span>
          <Link href="/walk-weekend" className="font-display text-2xl md:text-3xl font-semibold mt-3 mb-2 block">Museum Walk Weekend</Link>
          <span className="text-sm font-medium text-[oklch(0.51_0_0)]">June 6 - 7, 2026</span>
          <p className="text-[oklch(0.45_0_0)] text-sm mt-1 mb-8">Free admission to all seven participating museums</p>
          <button className="bg-[oklch(0.54_0.066_160)] text-white text-sm font-semibold uppercase tracking-widest px-10 py-3.5 rounded-full">Register on Eventbrite</button>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[oklch(0.96_0.005_78)]"></div>
          <span className="font-display text-lg text-[oklch(0.62_0_0)] italic">Our Museums</span>
          <div className="h-px flex-1 bg-[oklch(0.96_0.005_78)]"></div>
        </div>
        <div className="space-y-6 my-12 text-left">
          {museums.map((m, index) => (
            <div key={index} className="bg-[oklch(0.98_0.003_85)] rounded-xl overflow-hidden flex flex-col sm:flex-row">
              <div className="relative aspect-video sm:aspect-auto sm:w-48">
                <Image src={`/${m.link}.png`} alt={m.title} fill sizes="100%" className="object-cover" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold text-[oklch(0.22_0_0)]">{m.title}</h3>
                <span className="tiny font-medium mt-1 mb-2 inline-block text-[oklch(0.59_0.063_161)]">{m.subtitle}</span>
                <p className="text-sm line-clamp-3 text-[oklch(0.51_0_0)]">{m.intro}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="/consortium-members" className="inline-flex font-medium items-center gap-2 text-sm text-[oklch(0.54_0.066_160)]">View all museums and details<i className="ri-arrow-right-line"></i></Link>
      </article>
    </main>
  );
}
