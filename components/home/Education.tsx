"use client";

import { motion } from "framer-motion";
import { education } from "@/content/education";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <SectionHeading eyebrow="Background" title="Education" />

      <div className="mx-auto mt-16 max-w-3xl space-y-4">
        {education.map((item, index) => (
          <motion.div
            key={`${item.degree}-${item.school}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex flex-wrap items-baseline justify-between gap-2 rounded-2xl border border-border bg-surface p-6"
          >
            <div>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-muted">{item.school}</p>
              {item.details && <p className="mt-1 text-sm text-muted">{item.details}</p>}
            </div>
            <span className="text-sm text-muted">{item.period}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
