import { education } from "@/content/education";

export function Education() {
  return (
    <section id="education" className="site-width py-12 sm:py-16" aria-labelledby="education-title">
      <h2 id="education-title" className="portfolio-heading">Education</h2>
      <ul className="mt-5 divide-y divide-border">
        {education.map((item) => (
          <li key={item.degree} className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2 py-4">
            <div>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-muted">{item.school}</p>
            </div>
            <p className="text-sm text-muted">{item.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
