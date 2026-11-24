import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="site-width py-14 sm:py-20" aria-labelledby="experience-title">
      <div className="mx-auto max-w-4xl">
        <header className="max-w-xl">
          <h2 id="experience-title" className="portfolio-heading">Experience</h2>
          <p className="mt-3 leading-relaxed text-muted">From infrastructure automation and MLOps to AI transformation and enterprise agents.</p>
        </header>
        <ol className="ms-2 mt-8 border-s border-border sm:mt-10">
          {experience.map((item) => (
            <li key={item.company} className="relative pb-4 ps-5 last:pb-0 sm:ps-8">
              <span className="absolute top-7 -left-[5px] size-[9px] rounded-full bg-accent ring-4 ring-background" aria-hidden="true" />
              <article className="rounded-2xl border border-border bg-surface px-5 py-5 sm:px-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">{item.company}</h3>
                  <p className="text-sm font-medium text-accent">{item.period}</p>
                </div>
                <p className="mt-1 font-medium text-foreground/80">{item.role}</p>
                <ul className="mt-3 list-outside list-disc space-y-2 ps-5 leading-relaxed text-muted marker:text-accent/65">
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
