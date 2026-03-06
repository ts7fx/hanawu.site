"use client";

import { motion } from "framer-motion";

interface Props {
  number: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  gradient: string;
  index: number;
}

export default function ProjectCard({
  number,
  year,
  title,
  subtitle,
  description,
  responsibilities,
  achievements,
  gradient,
  index,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group"
    >
      {/* Project header with number */}
      <div className="flex items-start gap-4 mb-6">
        <span className="font-[family-name:var(--font-serif)] text-accent/40 text-sm italic">
          /{number}
        </span>
        <span className="text-xs text-text-light tracking-wider">{year}</span>
      </div>

      {/* Image placeholder with gradient */}
      <div
        className={`relative w-full aspect-[16/10] rounded-sm overflow-hidden mb-8 ${gradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl tracking-wider text-white/90 text-center px-6">
            {title}
          </h3>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      {/* Project info */}
      <div className="space-y-4">
        <p className="text-xs tracking-[0.2em] uppercase text-accent">
          {subtitle}
        </p>

        <p className="text-sm text-text-secondary leading-relaxed max-w-lg">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {responsibilities.map((r) => (
            <span
              key={r}
              className="text-[10px] px-2.5 py-1 border border-text-light/20 text-text-light tracking-wider uppercase"
            >
              {r}
            </span>
          ))}
        </div>

        {achievements && achievements.length > 0 && (
          <div className="pt-2">
            {achievements.map((a) => (
              <p key={a} className="text-xs text-accent/80 leading-relaxed">
                {a}
              </p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
