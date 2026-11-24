import Link from "next/link";
import { ClipboardCheck, GitBranch, Radio } from "lucide-react";
import { lifecycle } from "@/content/projects";

const icons = [GitBranch, ClipboardCheck, Radio];

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-12 sm:py-16" aria-labelledby="work-title">
      <div className="site-width">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="work-title" className="portfolio-heading">Managing the agent lifecycle</h2>
          <Link href="/blog/evaluating-an-enterprise-agent" className="text-sm font-medium text-accent hover:underline">Read the evaluation guide</Link>
        </div>
        <ol className="mt-7 grid overflow-hidden rounded-2xl border border-border bg-surface sm:grid-cols-3 sm:divide-x sm:divide-border">
          {lifecycle.map((stage, index) => {
            const Icon = icons[index];
            return (
              <li key={stage.title} className="border-b border-border px-5 py-6 last:border-b-0 sm:border-b-0 lg:px-7 lg:py-7">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{stage.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{stage.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
