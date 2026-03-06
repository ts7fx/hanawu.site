"use client";

import { motion } from "framer-motion";

interface Props {
  chinese: string;
  english: string;
  items?: { num: string; label: string }[];
}

export default function SectionTitle({ chinese, english, items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24"
    >
      <div>
        <div className="flex items-center gap-4 mb-3">
          <div className="w-16 h-px bg-text-primary" />
          <span className="text-sm text-text-secondary tracking-wider">
            {chinese}
          </span>
          <div className="w-16 h-px bg-text-primary" />
        </div>
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl tracking-wider text-accent">
          {english}
        </h2>
      </div>

      {items && (
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item.num}
              className="flex items-center gap-4 text-sm tracking-wider"
            >
              <span className="text-accent">{item.num}</span>
              <span className="text-text-secondary uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
