import Link from "next/link";
import { GitBranch, ShieldCheck } from "lucide-react";
import { aiSecurity, lifecycle } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-12 sm:py-16" aria-labelledby="work-title">
      <div className="site-width">
        <h2 id="work-title" className="portfolio-heading">Work</h2>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-border bg-surface px-5 py-6 sm:px-7">
            <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
              <GitBranch className="size-5 shrink-0 text-accent" aria-hidden="true" />
              Agent Building
            </h3>
            <ol className="mt-4 divide-y divide-border">
              {lifecycle.map((stage) => (
                <li key={stage.title} className="py-4">
                  <h4 className="font-semibold">{stage.title}</h4>
                  <p className="mt-1 leading-relaxed text-muted">{stage.description}</p>
                </li>
              ))}
            </ol>
            <div className="mt-auto pt-4">
              <Link href="/blog/evaluating-an-enterprise-agent" className="text-sm font-medium text-accent hover:underline">
                Read the agent evaluation guide
              </Link>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-surface px-5 py-6 sm:px-7">
            <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
              <ShieldCheck className="size-5 shrink-0 text-accent" aria-hidden="true" />
              AI Security
            </h3>
            <ul className="mt-4 divide-y divide-border">
              {aiSecurity.map((area) => (
                <li key={area.title} className="py-4 last:pb-0">
                  <h4 className="font-semibold">{area.title}</h4>
                  <p className="mt-1 leading-relaxed text-muted">{area.description}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
