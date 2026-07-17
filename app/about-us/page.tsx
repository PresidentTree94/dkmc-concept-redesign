import Link from "next/link";
import Navbar from "@/components/Navbar";
import Decor from "@/components/Decor";
import { socials } from "@/data/socialData";

const history = [
  { icon: 83, heading: "Foundation", text: `The Dupont-Kalorama Museums Consortium was founded in 1983 to promote museums and cultural institutions located "off the Mall" in Washington DC. The founding members recognized the need to bring attention to the rich cultural offerings in the Dupont Circle and Kalorama neighborhoods.` },
  { icon: "ri-walk-line", heading: "Museum Walk Weekend", text: "The signature Museum Walk Weekend event was established to bring the community together and showcase the unique offerings of each member institution. This annual event has grown to become one of the most anticipated cultural weekends in the city." },
  { icon: "ri-community-line", heading: "Community Impact", text: "Today, the consortium continues to foster collaboration among member institutions, promote cultural education, and create neighborhood experiences that benefit residents and visitors alike. The consortium represents a diverse range of cultural offerings from art collections to historic houses and contemporary exhibition spaces." }
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-card border-b border-border">
          <div className="max-w-5xl mx-auto py-14 px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-dark">About Us</h1>
            <Decor className="mt-3 mb-4" />
            <p className="text-foreground-light max-w-2xl mx-auto text-sm md:text-base">The Dupont-Kalorama Museums Consortium has been promoting cultural experiences in Washington DC since 1983.</p>
          </div>
        </section>
        <article className="space-y-16 md:!py-20">
          <section className="box">
            <h2 className="text-2xl font-semibold text-foreground-dark">Our Mission</h2>
            <div className="h-px w-16 bg-primary-light mt-2 mb-6"></div>
            <p className="mb-6 text-foreground-light">The mission of the Dupont Kalorama Museums Consortium (DKMC) is to mutually advance the member institutions and create neighborhood cultural experiences. DKMC was established in 1983 to promote our "off the Mall" museums and our neighborhoods.</p>
            <p className="text-foreground-light">The consortium currently consists of seven remarkable cultural institutions: Anderson House (Society of the Cincinnati), Dumbarton House, Dupont Underground, the National Museum of American Jewish Military History, O Museum in the Mansion, The Phillips Collection, and The President Woodrow Wilson House.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground-dark">Our History</h2>
            <div className="h-px w-16 bg-primary-light mt-2 mb-8"></div>
            <div className="space-y-8">
              {history.map((h, index) => (
                <div key={index} className="flex gap-5">
                  <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center text-white text-lg">
                    {typeof h.icon === "number" ? <span className="font-display font-semibold">{h.icon}</span> : <i className={h.icon}></i>}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-foreground-dark">{h.heading}</h3>
                    <p className="text-sm text-foreground-light">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground-dark">Contact Us</h2>
            <div className="h-px w-16 bg-primary-light mt-2 mb-8"></div>
            <div className="bg-card p-8 rounded-2xl border border-border/60 space-y-6">
              <p className="text-foreground-light">For more information about the Dupont-Kalorama Museums Consortium, Museum Walk Weekend, or any of our member institutions, please reach out to us.</p>
              <a href="mailto:dupontkaloramamc@gmail.com" className="flex items-center gap-2 text-sm text-foreground-light hover:text-primary-dark transition-colors"><i className="ri-mail-line text-sm"></i>dupontkaloramamc@gmail.com</a>
              <div className="flex items-center gap-3">
                {socials.map((s, index) => (
                  <a key={index} href={s.link} className="w-10 h-10 border border-foreground-light/25 rounded-full flex items-center justify-center text-foreground-light hover:text-primary-dark hover:border-primary-light transition-colors">
                    <i className={`${s.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/photo-gallery" className="border-2 border-primary-dark px-10 py-3.5 rounded-full text-sm uppercase font-semibold tracking-widest text-primary-dark hover:bg-primary-dark hover:text-white hover:-translate-y-0.5 inline-block transition-all duration-300">View Photo Gallery</Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}