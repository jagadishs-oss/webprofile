"use client";

import { motion } from "framer-motion";
import { Blocks, Code2, Wrench } from "lucide-react";
import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  Languages: Code2,
  "Frameworks & Libraries": Blocks,
  "Tools & Platforms": Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <SectionHeading eyebrow="Toolbox" title="Skills & Tools" />

      <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = CATEGORY_ICONS[group.category] ?? Code2;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <Icon className="size-5 text-accent" />
              <h3 className="mt-3 font-semibold">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
