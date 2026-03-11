"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "花笙笙品牌设计",
    role: "创始人 & 设计总监",
    period: "2024 — Present",
    desc: "独立品牌设计工作室",
  },
  {
    company: "百威亚太 Budweiser APAC",
    role: "资深品牌设计师",
    period: "2022 — 2024",
    desc: "全球领先啤酒集团",
  },
  {
    company: "THE WIZ",
    role: "资深美术指导",
    period: "2020 — 2022",
    desc: "广告公司",
  },
  {
    company: "罗德传播 Ruder Finn",
    role: "美术指导",
    period: "2017 — 2020",
    desc: "全球Top 10独立公关公司",
  },
];

const skills = [
  "品牌视觉体系搭建",
  "Campaign 主视觉",
  "跨品牌视觉管理",
  "社媒视觉运营",
  "包装与工艺设计",
  "UI / 小程序设计",
];

const clients = [
  "Michael Kors",
  "ba&sh",
  "ETRO",
  "Dom Pérignon",
  "Van Cleef & Arpels",
  "Buccellati",
  "Hennessy",
  "Budweiser",
  "Corona",
  "Pepsi",
  "Bausch+Lomb",
  "VOSS",
  "上下 SHANGXIA",
  "Tiffany & Co",
  "Versace",
  "Saint Laurent",
  "Moose Knuckles",
  "GUESS",
  "Cindy Chao",
  "Chaumet",
  "Valextra",
  "Harbin Beer",
];

const skillContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-16 h-px bg-text-primary" />
            <span className="text-sm text-text-secondary tracking-wider">
              关于我
            </span>
            <div className="w-16 h-px bg-text-primary" />
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
              }}
              className="font-display text-3xl md:text-4xl tracking-wider text-text-primary mb-4"
            >
              ABOUT ME
            </motion.h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-1">
                <p className="text-sm tracking-wider">
                  <span className="text-accent font-medium">资深品牌视觉设计师</span>{" "}
                  <span className="text-text-light">· 9年经验 · 上海</span>
                </p>
              </div>

              <blockquote className="border-l-2 border-accent pl-6 text-text-secondary leading-relaxed text-sm">
                每一次设计，都从理解品牌真正的需求开始。
              </blockquote>

              <p className="text-sm text-text-secondary leading-loose">
                9年品牌视觉设计经验。先后服务于国际公关乙方（罗德传播）与全球快消甲方（百威亚太），
                现独立运营品牌设计工作室。服务客户涵盖奢侈品珠宝、国际时装、快消酒饮、美妆个护等领域。
                设计颗粒度从单件产品包装到完整品牌视觉体系。
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                  Education
                </h3>
                <p className="text-sm text-text-primary font-medium">
                  Savannah College of Art & Design
                </p>
                <p className="text-xs text-text-light mt-1">
                  BFA Graphic Design · 2017
                </p>
              </div>

              <div>
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                  Tools
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Adobe Creative Suite<br />
                  Figma / Sketch<br />
                  Midjourney / AI辅助
                </p>
              </div>

              <div className="sm:col-span-2">
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                  Experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="text-sm text-text-primary font-medium">
                          {exp.company}
                        </p>
                        <p className="text-[10px] text-text-light whitespace-nowrap">
                          {exp.period}
                        </p>
                      </div>
                      <p className="text-xs text-text-light">
                        {exp.role} · {exp.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <h3 className="text-accent text-xs tracking-[0.2em] uppercase mb-4 font-medium">
                  Core Skills
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={skillContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillItemVariants}
                      className="text-xs px-3 py-1.5 border border-text-light/30 text-text-secondary rounded-full hover:border-accent hover:text-accent transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

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

        <AnimatedSection delay={0.3} className="mt-24">
          <p className="text-[10px] tracking-[0.3em] uppercase text-text-light text-center mb-8">
            30+ Brands Served
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />
            <div className="marquee-track">
              {[...clients, ...clients].map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="text-xs tracking-wider text-text-light/60 hover:text-text-primary transition-colors cursor-default whitespace-nowrap px-6"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
