"use client";

import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const brandingProjects = [
  {
    number: "01",
    year: "2021",
    title: "LACELLE × XUZHI",
    subtitle: "蕾丝系列品牌升级",
    description:
      "博士伦LACELLE携手时尚设计师徐序之XU ZHI跨界打造蕾丝高定系列。协助客户找准产品定位，升级品牌icon以及统一品牌视觉语言，全面负责产品设计，从镜片花纹到产品包装设计。",
    responsibilities: [
      "Branding Strategy",
      "Product Design",
      "Packaging",
      "Pattern Design",
    ],
    gradient: "bg-gradient-to-br from-purple-200/60 via-pink-100/40 to-teal-100/30",
  },
  {
    number: "02",
    year: "2024",
    title: "VOSS × BASAO",
    subtitle: "联名礼盒包装设计",
    description:
      "VOSS与BASAO联合呈现，天生纯粹。以木作时间的容器，在双旦之际来信，送你慵懒的悠然，暮色与月光。",
    responsibilities: [
      "Packaging Design",
      "Art Direction",
      "Gift Box",
      "Illustration",
    ],
    gradient: "bg-gradient-to-br from-amber-100/50 via-stone-200/40 to-amber-50/30",
  },
  {
    number: "03",
    year: "2024",
    title: "HARBIN 1900",
    subtitle: "哈尔滨啤酒百年臻藏礼盒",
    description:
      "以哈尔滨城市地标与哥特式教堂花窗为灵感，打造百年品牌的高端臻藏礼盒。",
    responsibilities: [
      "Packaging Design",
      "Art Direction",
      "Premium Gift Box",
    ],
    gradient: "bg-gradient-to-br from-emerald-900/70 via-emerald-800/50 to-teal-900/60",
  },
];

const creativeProjects = [
  {
    number: "01",
    year: "2020",
    title: "LACELLE × BLYTHE",
    subtitle: "博士伦LACELLE IP合作",
    description:
      "将Blythe娃娃大眼的特点与彩片benefit作为沟通点，打造「大眼新宠 脸大无所畏」核心创意。负责TVC后期美术监制、视频动效美术、KV和公关照、礼盒包装设计。",
    responsibilities: [
      "Creative Strategy",
      "TVC Art Direction",
      "Packaging",
      "Visual Design",
    ],
    gradient: "bg-gradient-to-br from-cyan-100/50 via-purple-100/30 to-pink-100/40",
  },
  {
    number: "02",
    year: "2022",
    title: "TIFFANY & CO × AYAYI",
    subtitle: "KNOT系列创意提案",
    description:
      "融合绳结于钻石系列的Knot系列，与虚拟人Ayayi的联名，跨界合作元宇宙冲破次元，优雅游走于不止城市之间。负责创意策划、视频策划、小红书demo、线下策划。",
    responsibilities: [
      "Creative Strategy",
      "Video Planning",
      "Social Content",
      "Event Design",
    ],
    gradient: "bg-gradient-to-br from-cyan-200/40 via-cyan-100/30 to-white/20",
  },
  {
    number: "03",
    year: "2019",
    title: "VERSACE",
    subtitle: "V Fusion, Classy CNY Campaign",
    description:
      "将中国非物质文化遗产（点翠、景泰蓝、漆器）与Versace品牌元素融合，创作3件艺术品。应用于CNY礼盒、H5互动、精品店展示。",
    responsibilities: [
      "Creative Concept",
      "H5 UI Design",
      "Poster Design",
      "Cultural Strategy",
    ],
    gradient: "bg-gradient-to-br from-red-900/60 via-amber-900/40 to-blue-900/50",
  },
];

const designProjects = [
  {
    number: "01",
    year: "2018–2020",
    title: "BUCCELLATI · CINDY CHAO · CHAUMET",
    subtitle: "高端珠宝品牌平面设计",
    description:
      "为多个顶级珠宝品牌提供微信长图文设计、H5设计、海报设计、手册排版、包装设计以及infographic。将商业和艺术结合，用平面美学进行视觉沟通与传达。",
    responsibilities: [
      "WeChat Design",
      "H5 Design",
      "Poster",
      "Print",
      "Infographic",
    ],
    gradient: "bg-gradient-to-br from-slate-900/70 via-blue-900/40 to-slate-800/60",
  },
  {
    number: "02",
    year: "2022",
    title: "VAN CLEEF & ARPELS",
    subtitle: "七夕情人节系列微信长图文",
    description:
      "为梵克雅宝七夕情人节系列设计微信长图文，融合品牌花卉珠宝元素，打造浪漫东方美学视觉。",
    responsibilities: [
      "WeChat Post Design",
      "Visual Identity",
      "Illustration",
    ],
    gradient: "bg-gradient-to-br from-rose-200/50 via-teal-700/30 to-pink-200/40",
  },
  {
    number: "03",
    year: "2020",
    title: "PEPSI WITH MEAL",
    subtitle: "百事可乐佐餐Campaign",
    description:
      "「地不地道，问了才知道」核心创意。主导social视频美术、campaign视觉指导、H5设计。微博转评赞数据突出，5条视频播放量达608.7万+。",
    responsibilities: [
      "Social Video Art",
      "Campaign Visual",
      "H5 Design",
    ],
    achievements: ["微博视频播放量 608.7万+", "网友微博互动总数达 93.1万+"],
    gradient: "bg-gradient-to-br from-blue-700/60 via-blue-500/40 to-red-500/30",
  },
];

const uiProjects = [
  {
    number: "01",
    year: "2020",
    title: "ULTRA ONE DAY WEBSITE",
    subtitle: "博士伦 Global Website",
    description:
      "博士伦global全新网站设计，以Ultra One Day的水润舒适为传播点，整个网站通过水的元素从视觉层面强化水润舒适的认知。负责设计执行、UI设计和交互动效设计。",
    responsibilities: [
      "UI Design",
      "Interaction Design",
      "Motion Design",
      "Frontend Collab",
    ],
    gradient: "bg-gradient-to-br from-blue-400/40 via-slate-200/30 to-blue-300/20",
  },
  {
    number: "02",
    year: "2017",
    title: "VALEXTRA MINI APP",
    subtitle: "微信商场小程序设计",
    description:
      "为意大利皮革品牌Valextra搭建符合品牌调性的线上精品店微信小程序，实现官方品牌传播和消费转化一体。",
    responsibilities: ["Mini App UI", "E-commerce UX", "Brand Digital"],
    gradient: "bg-gradient-to-br from-stone-300/50 via-stone-200/30 to-stone-100/20",
  },
];

export default function PortfolioSections() {
  return (
    <>
      {/* Branding */}
      <section id="branding" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            chinese="品牌设计"
            english="BRANDING"
            items={[
              { num: "01", label: "Lacelle × Xuzhi" },
              { num: "02", label: "VOSS × BASAO" },
              { num: "03", label: "Harbin 1900" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {brandingProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Creative */}
      <section id="creative" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            chinese="创意策划"
            english="CREATIVE"
            items={[
              { num: "01", label: "Lacelle × Blythe" },
              { num: "02", label: "Tiffany & Co" },
              { num: "03", label: "Versace" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {creativeProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design */}
      <section id="design" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            chinese="平面设计"
            english="GRAPHIC DESIGN"
            items={[
              { num: "01", label: "Buccellati · Cindy Chao · Chaumet" },
              { num: "02", label: "Van Cleef & Arpels" },
              { num: "03", label: "Pepsi" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {designProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* UI Design */}
      <section id="ui" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            chinese="界面设计"
            english="UI DESIGN"
            items={[
              { num: "01", label: "Bausch+Lomb Ultra One Day" },
              { num: "02", label: "Valextra Mini App" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-4xl">
            {uiProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
