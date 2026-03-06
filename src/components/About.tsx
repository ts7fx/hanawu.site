"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "Budweiser",
    role: "Senior Art Director",
    period: "2022 — Present",
  },
  {
    company: "The Wiz",
    role: "Senior Art Director",
    period: "2020 — 2021",
  },
  {
    company: "Ruder Finn",
    role: "Art Director",
    period: "2017 — 2020",
  },
];

const skills = [
  "Art Direction",
  "UI Design",
  "Typography",
  "Packaging Design",
  "Motion Design",
  "Web Design",
  "Photography",
  "Brand Strategy",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-16 h-px bg-text-primary" />
            <span className="text-sm text-text-secondary tracking-wider">
              关于我
            </span>
            <div className="w-16 h-px bg-text-primary" />
          </div>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl tracking-wider text-text-primary mb-4">
            ABOUT ME
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Left: Bio */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              {/* Roles */}
              <div className="flex items-start gap-6">
                <span className="text-accent font-[family-name:var(--font-serif)] text-lg">
                  I AM
                </span>
                <div className="space-y-1">
                  <p className="text-sm tracking-wider">
                    <span className="text-accent font-medium">
                      GRAPHIC DESIGNER
                    </span>{" "}
                    <span className="text-text-light">平面设计师</span>
                  </p>
                  <p className="text-sm tracking-wider">
                    <span className="text-accent font-medium">CREATIVE</span>{" "}
                    <span className="text-text-light">品牌创意策划</span>
                  </p>
                  <p className="text-sm tracking-wider">
                    <span className="text-accent font-medium">
                      PHOTOGRAPHER
                    </span>{" "}
                    <span className="text-text-light">摄影爱好者</span>
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-2 border-accent pl-6 text-text-secondary leading-relaxed">
                「相信我做的每一份努力，都在悄悄让世界发生改变。」
              </blockquote>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-loose">
                擅长以别致的视角解构品牌需求，深入了解品牌发声渠道和各平台优势，
                已实现视觉统一和创意传播最优解。在数年的工作中服务于不同领域的客户，
                掌握不同设计风格，并且能从品牌角度对执行的项目质量品控，
                赋予品牌在大众的记忆度与认同感。
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Details */}
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Education */}
              <div>
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                  Education
                </h3>
                <p className="text-sm text-text-primary font-medium">
                  Savannah College of Art & Design
                </p>
                <p className="text-xs text-text-light mt-1">
                  BFA Graphic Design
                </p>
                <p className="text-xs text-text-light">2012 — 2016</p>
              </div>

              {/* Work */}
              <div>
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                  Experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <div key={exp.company}>
                      <p className="text-sm text-text-primary font-medium">
                        {exp.company}
                      </p>
                      <p className="text-xs text-text-light">{exp.role}</p>
                      <p className="text-xs text-text-light">{exp.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="sm:col-span-2">
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 border border-text-light/30 text-text-secondary rounded-full hover:border-accent hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="sm:col-span-2">
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                  Languages
                </h3>
                <div className="flex gap-6 text-sm text-text-secondary">
                  <span>粤语</span>
                  <span>普通话</span>
                  <span>English</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Clients marquee */}
        <AnimatedSection delay={0.3} className="mt-24">
          <p className="text-[10px] tracking-[0.3em] uppercase text-text-light text-center mb-8">
            Selected Clients
          </p>
          <motion.div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              "Bausch+Lomb",
              "Budweiser",
              "Tiffany & Co",
              "Versace",
              "Buccellati",
              "Cindy Chao",
              "Van Cleef & Arpels",
              "Michael Kors",
              "Pepsi",
              "Chaumet",
              "ETRO",
              "Valextra",
              "VOSS",
              "Harbin Beer",
            ].map((client, i) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-xs tracking-wider text-text-light/60 hover:text-text-primary transition-colors cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
