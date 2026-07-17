import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { socials } from "@/data/socialData";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"]
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Dupont Kalorama Museum Consortium Concept Redesign",
  description: "A concept redesign for the Dupont Kalorama Museum Consortium (DKMC) website, not affiliated or commissioned by DKMC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="bg-foreground-dark mt-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] gap-8 py-14">
              <div className="max-w-xs space-y-4">
                <h3 className="text-white font-semibold text-2xl">Dupont-Kalorama<br/>Museums Consortium</h3>
                <p className="text-white/50 text-sm">Promoting "off the Mall" museums and our neighborhoods since 1983.</p>
              </div>
              <div className="sm:text-right lg:text-center space-y-5">
                <h3 className="tiny font-semibold text-white/60">Connect</h3>
                <div className="flex sm:justify-end lg:justify-center gap-3">
                  {socials.map((s, index) => (
                    <a key={index} href={s.link} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-colors duration-300">
                      <i className={`${s.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
                <a href="mailto:dupontkaloramamc@gmail.com" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"><i className="ri-mail-line text-xs"></i>dupontkaloramamc@gmail.com</a>
              </div>
              <div className="hidden lg:block space-y-4 justify-self-end">
                <h3 className="tiny font-semibold text-white/60">Disclaimer</h3>
                <p className="text-white/40 text-sm max-w-sm">This is an independent redesign concept created for portfolio purposes. I am not affiliated with Dupont-Kalorama Museums Consortium. Website content and photographs belong to the company or online.</p>
              </div>
            </div>
            <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row text-white/40 text-xs text-center justify-center items-center gap-2">
              <p>&copy; 2026 Dupont-Kalorama Museums Consortium Concept Redesign</p>
              <span className="hidden sm:inline-block">|</span>
              <p>Made by <a href="https://karlydev.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">karly.dev</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
