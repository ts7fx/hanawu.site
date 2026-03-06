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
            <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl tracking-wider mb-8">
              Let&apos;s Create
              <br />
              Together
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-md">
              Open to new opportunities in art direction, brand strategy, and
              creative design. Based in Shanghai, available worldwide.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-3">
                Email
              </p>
              <a
                href="mailto:hello@hanawu.site"
                className="text-sm text-white/70 hover:text-white transition-colors tracking-wider"
              >
                hello@hanawu.site
              </a>
            </div>
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
                <span className="text-sm text-white/70 hover:text-white transition-colors tracking-wider cursor-pointer">
                  LinkedIn
                </span>
                <span className="text-sm text-white/70 hover:text-white transition-colors tracking-wider cursor-pointer">
                  Instagram
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[10px] tracking-[0.2em] text-white/20">
            &copy; 2025 HANA WU. ALL RIGHTS RESERVED.
          </p>
          <p className="font-[family-name:var(--font-serif)] text-xs text-white/20 tracking-wider">
            吴雪莹
          </p>
        </motion.div>
      </div>
    </section>
  );
}
