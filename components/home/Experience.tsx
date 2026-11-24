import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="site-width py-14 sm:py-20" aria-labelledby="experience-title">
      <div className="grid gap-9 md:grid-cols-[1fr_2.1fr] md:gap-14">
        <div>
          <h2 id="experience-title" className="portfolio-heading">Experience</h2>
          <p className="mt-3 max-w-64 leading-relaxed text-muted">From infrastructure automation and MLOps to AI transformation and enterprise agents.</p>
        </div>
        <ol className="ms-2 border-s border-border">
          {experience.map((item) => (
            <li key={item.company} className="relative pb-9 ps-6 last:pb-0 sm:ps-8">
              <span className="absolute top-2 -left-[5px] size-[9px] rounded-full bg-accent ring-4 ring-background" aria-hidden="true" />
              <p className="text-sm font-medium text-accent">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{item.company}</h3>
              <p className="mt-1 text-sm font-medium text-foreground/80">{item.role}</p>
              <ul className="mt-3 space-y-2 text-base leading-relaxed text-muted">
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
