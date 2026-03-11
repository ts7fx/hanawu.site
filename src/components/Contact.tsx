"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-40 px-6 md:px-12 bg-dark text-white"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
              Get in Touch
            </p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
                className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mb-8"
              >
                Let&apos;s Create
                <br />
                Together
              </motion.h2>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-md">
              Open to new opportunities in brand visual design, creative direction,
              and packaging design. Based in Shanghai, available worldwide.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <a
            href="mailto:hello@hanawu.site"
            className="group inline-flex items-center gap-4 mb-16"
          >
            <span className="font-display text-2xl md:text-4xl tracking-wider text-white/80 group-hover:text-white transition-colors duration-500">
              hello@hanawu.site
            </span>
            <motion.span
              className="inline-block text-accent text-2xl md:text-3xl"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              &rarr;
            </motion.span>
          </a>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            className="h-px bg-white/10 origin-left mb-12"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
                Location
              </p>
              <p className="text-sm text-white/70 tracking-wider">
                Shanghai, China
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
                Social
              </p>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors tracking-wider"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors tracking-wider"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[10px] tracking-[0.2em] text-white/20">
            &copy; {new Date().getFullYear()} HANA WU. ALL RIGHTS RESERVED.
          </p>
          <p className="font-display text-xs text-white/20 tracking-wider">
            吴雪莹
          </p>
        </motion.div>
      </div>
    </section>
  );
}
