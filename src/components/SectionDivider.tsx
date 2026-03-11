"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="h-px bg-text-primary/15 origin-left"
        />
      </div>
    </div>
  );
}
