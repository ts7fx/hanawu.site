"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letterAnimation = {
  hidden: { y: 80, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.6 + i * 0.05,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const name = "Hana Wu";
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-light to-cream" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ y: decorY1 }}
        className="absolute top-20 right-[15%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        style={{ y: decorY2 }}
        className="absolute bottom-32 left-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-text-secondary/10 to-transparent blur-sm"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 3, delay: 1.2 }}
        style={{ y: decorY1 }}
        className="absolute top-[40%] left-[60%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-gradient-to-bl from-accent/15 to-transparent blur-md"
      />

      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-text-light text-xs tracking-[0.4em] uppercase mb-6"
        >
          9 Years in Brand Design
        </motion.p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide text-text-primary mb-4 overflow-hidden">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={char === " " ? { width: "0.3em" } : undefined}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-display text-xl md:text-2xl text-text-secondary mb-8"
        >
          吴雪莹
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-[0.2em] uppercase text-text-light"
        >
          {["Founder & Design Director", "Brand Visual Designer"].map(
            (role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + i * 0.15 }}
              >
                {i > 0 && <span className="text-accent mr-6">&middot;</span>}
                {role}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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
    </section>
  );
}
