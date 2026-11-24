import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import portrait from "@/public/jagadish.jpg";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="hero-background border-b border-border" aria-labelledby="hero-title">
      <div className="site-width grid items-center gap-10 pt-12 pb-14 sm:pt-20 sm:pb-20 md:grid-cols-[1.5fr_1fr] md:gap-12 lg:gap-24">
        <div>
          <p className="mb-5 text-sm font-medium tracking-[0.15em] text-accent uppercase">
            {siteConfig.name}
          </p>
          <h1 id="hero-title" className="max-w-2xl text-[clamp(2.75rem,5.7vw,5.15rem)] leading-[0.99] font-semibold tracking-[-0.065em]">
            Enterprise AI agents, <span className="text-accent">from design to operations.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">{siteConfig.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#projects" className="portfolio-button portfolio-button-primary">Explore my work</Link>
            <Link href="/contact" className="portfolio-button">Get in touch</Link>
          </div>
        </div>

        <figure className="portrait-frame w-full max-w-80 overflow-hidden rounded-2xl border border-border md:justify-self-end">
          <Image src={portrait} alt={siteConfig.name} sizes="(max-width: 360px) 100vw, 320px" preload className="aspect-square h-auto w-full object-cover" />
          <figcaption className="flex items-center gap-2.5 border-t border-border bg-surface px-4 py-3.5 text-sm text-muted">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {siteConfig.location}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
