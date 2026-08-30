"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <SectionHeading
        eyebrow="Career"
        title="Professional Experience"
        description="Where I've worked and what I've focused on."
      />

      <div className="mx-auto mt-16 max-w-3xl space-y-6">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {item.role} · {item.company}
              </h3>
              <span className="text-sm text-muted">{item.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-muted">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
