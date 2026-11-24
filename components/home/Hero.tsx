import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import portrait from "@/public/jagadish-cutout.webp";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-background border-b border-border" aria-labelledby="hero-title">
      <div className="site-width grid items-center gap-9 pt-12 pb-14 sm:pt-16 sm:pb-18 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10 lg:gap-16">
        <div className="md:col-start-2 md:row-start-1">
          <p className="mb-5 text-sm font-semibold tracking-[0.14em] text-muted uppercase">{siteConfig.name}</p>
          <h1 id="hero-title" className="text-[clamp(2.55rem,5.35vw,4.85rem)] leading-[1.01] font-semibold tracking-[-0.062em]">
            Enterprise AI agents, <span className="block text-accent">from design to operations.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">{siteConfig.bio}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/#projects" className="portfolio-button portfolio-button-primary">Explore my work</Link>
            <Link href="/contact" className="portfolio-button">Get in touch</Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {siteConfig.location}
          </p>
        </div>

        <Image
          src={portrait}
          alt={siteConfig.name}
          sizes="(min-width: 1200px) 480px, (min-width: 768px) 42vw, min(100vw - 3rem, 480px)"
          preload
          className="hero-portrait mx-auto h-auto w-full max-w-[30rem] md:col-start-1 md:row-start-1"
        />
      </div>
    </section>
  );
}
