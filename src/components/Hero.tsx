"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-light to-cream" />

      {/* Decorative water drop shapes - inspired by portfolio aesthetic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 right-[15%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute bottom-32 left-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-text-secondary/10 to-transparent blur-sm"
      />

      <div className="relative z-10 text-center px-6">
        {/* Year range */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-text-light text-xs tracking-[0.4em] uppercase mb-6"
        >
          2017 — 2025
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-8xl tracking-wide text-text-primary mb-4"
        >
          Hana Wu
        </motion.h1>

        {/* Chinese name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-[family-name:var(--font-serif)] text-xl md:text-2xl text-text-secondary mb-8"
        >
          吴雪莹
        </motion.p>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-[0.2em] uppercase text-text-light"
        >
          <span>Senior Art Director</span>
          <span className="text-accent">·</span>
          <span>Brand Strategist</span>
          <span className="text-accent">·</span>
          <span>Designer</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-text-light">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-text-light to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
