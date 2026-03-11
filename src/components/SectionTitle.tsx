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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-3"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="w-16 h-px bg-text-primary origin-left"
          />
          <span className="text-sm text-text-secondary tracking-wider">
            {chinese}
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="w-16 h-px bg-text-primary origin-right"
          />
        </motion.div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider text-accent"
          >
            {english}
          </motion.h2>
        </div>
      </div>

      {items && (
        <div className="flex flex-col gap-2">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4 text-sm tracking-wider"
            >
              <span className="text-accent">{item.num}</span>
              <span className="text-text-secondary uppercase">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
