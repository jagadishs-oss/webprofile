import { skills } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface py-12 sm:py-16" aria-labelledby="skills-title">
      <div className="site-width">
        <h2 id="skills-title" className="portfolio-heading">Skills</h2>
        <div className="mt-7 grid gap-x-8 gap-y-7 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-base font-semibold">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => <li key={item} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
