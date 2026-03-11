"use client";

import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import SectionDivider from "./SectionDivider";

const brandingProjects = [
  {
    number: "01",
    year: "2025",
    title: "BA&SH",
    subtitle: "法国时装品牌全年社媒视觉运营",
    description:
      "从提案阶段即介入视觉定调规划，中标后将视觉规范落地至全年执行。围绕年度重点活动节点输出创意概念，统筹摄影师与AIGC视频供应商交付质量。成功塑造「身边的法式时髦闺蜜」品牌人设。",
    responsibilities: [
      "Visual System",
      "Social Content",
      "Supplier Management",
      "Creative Direction",
    ],
    achievements: ["小红书互动 +308%", "曝光 +199%"],
    gradient: "bg-gradient-to-br from-rose-100/60 via-stone-100/40 to-rose-50/30",
  },
  {
    number: "02",
    year: "2020",
    title: "LACELLE × XUZHI",
    subtitle: "博士伦蕾丝高定系列 · 产品视觉与包装工艺",
    description:
      "作为项目唯一设计执行者，独立完成12款镜片花纹设计，使三个系列（明眸/闪眸/炫眸）在统一的蕾丝语言下呈现明确性格差异。主导烫金、击凸等特殊工艺的设计规范输出。",
    responsibilities: [
      "Pattern Design",
      "Packaging",
      "Print Production",
      "KV Design",
    ],
    achievements: ["系列自2021年上市沿用至今，成为主销款与长期视觉资产"],
    gradient: "bg-gradient-to-br from-purple-200/60 via-pink-100/40 to-teal-100/30",
  },
  {
    number: "03",
    year: "2024",
    title: "ROOTS 餐厅",
    subtitle: "从0到1品牌视觉体系构建",
    description:
      "为全新餐厅品牌提供完整视觉体系搭建，涵盖logo设计、品牌字体与色彩规范、辅助图形系统、菜单系统、门头及应用物料延展。",
    responsibilities: [
      "Brand Identity",
      "Logo Design",
      "Menu System",
      "Spatial Design",
    ],
    gradient: "bg-gradient-to-br from-emerald-800/50 via-stone-700/30 to-emerald-900/40",
  },
];

const creativeProjects = [
  {
    number: "01",
    year: "2024",
    title: "MICHAEL KORS × BASDBAN",
    subtitle: "跨界联名全套物料视觉设计",
    description:
      "根据MK丹宁新品包袋打造专属插画，贯穿全套联名物料。线下出餐包装、KOL邀请函、门店邀请函、线上Social平台物料、校园传播物料。联名超大纸袋被多位博主主动拍摄传播。",
    responsibilities: [
      "Illustration",
      "Packaging",
      "Social Visual",
      "Event Design",
    ],
    achievements: ["小红书曝光超 300w"],
    gradient: "bg-gradient-to-br from-amber-200/50 via-stone-200/30 to-amber-100/40",
  },
  {
    number: "02",
    year: "2022–2023",
    title: "CORONA SUNSET",
    subtitle: "科罗娜「日落」品牌视觉 · 小程序 + 线下装置",
    description:
      "主导日落声起音乐节小程序UI设计，涵盖首页、积分抽奖、演出预约、积分任务四大模块，作为连接五个渠道的中心枢纽。同时负责落日贩卖机装置视觉与交互界面设计。",
    responsibilities: [
      "Mini App UI",
      "Campaign KV",
      "Installation Design",
      "Social Content",
    ],
    achievements: [
      "小程序累计访问 983.7万",
      "互动 127.8万（13%转化率）",
      "复访率 42%",
    ],
    gradient: "bg-gradient-to-br from-orange-300/50 via-amber-200/30 to-yellow-100/30",
  },
  {
    number: "03",
    year: "2020",
    title: "PEPSI WITH MEAL",
    subtitle: "百事可乐佐餐 Campaign",
    description:
      "「地不地道，问了才知道」核心创意。主导social视频美术、campaign视觉指导、H5设计。项目入围金瞳奖。",
    responsibilities: [
      "TVC Art Direction",
      "Campaign Visual",
      "H5 Design",
    ],
    achievements: ["视频播放量 608.7万+", "微博互动 93.1万+", "入围金瞳奖"],
    gradient: "bg-gradient-to-br from-blue-700/60 via-blue-500/40 to-red-500/30",
  },
];

const packagingProjects = [
  {
    number: "01",
    year: "2024",
    title: "VOSS × BASAO",
    subtitle: "联名礼盒包装设计",
    description:
      "VOSS与BASAO联合呈现，天生纯粹。以木作时间的容器，信封式手工纸质感包装，手绘风景邮票式内衬。在双旦之际来信，送你慵懒的悠然，暮色与月光。",
    responsibilities: [
      "Packaging Design",
      "Art Direction",
      "Illustration",
    ],
    gradient: "bg-gradient-to-br from-amber-100/50 via-stone-200/40 to-amber-50/30",
  },
  {
    number: "02",
    year: "2024",
    title: "HARBIN 1900",
    subtitle: "哈尔滨啤酒百年臻藏礼盒",
    description:
      "以哈尔滨城市地标与哥特式教堂玫瑰窗为灵感，墨绿色主调，打造百年品牌的高端臻藏礼盒。",
    responsibilities: [
      "Packaging Design",
      "Art Direction",
      "Premium Gift Box",
    ],
    gradient: "bg-gradient-to-br from-emerald-900/70 via-emerald-800/50 to-teal-900/60",
  },
  {
    number: "03",
    year: "2024",
    title: "ETRO 成都限定",
    subtitle: "熊猫 × 竹子主题插画全套物料",
    description:
      "为ETRO成都限定活动创作熊猫与竹子主题插画，延展至全套线下物料设计。",
    responsibilities: [
      "Illustration",
      "Event Visual",
      "Print Design",
    ],
    gradient: "bg-gradient-to-br from-cyan-100/50 via-emerald-100/30 to-stone-100/40",
  },
];

const digitalProjects = [
  {
    number: "01",
    year: "2022–2023",
    title: "CORONA SUNSET HUB",
    subtitle: "科罗娜日落声起小程序",
    description:
      "微信小程序UI设计，涵盖首页、积分抽奖、演出预约、积分任务四大模块。在统一的「日落」视觉语言下兼顾多种功能场景的用户体验。",
    responsibilities: [
      "UI Design",
      "Interaction Design",
      "Visual System",
    ],
    gradient: "bg-gradient-to-br from-orange-400/40 via-amber-200/30 to-orange-300/20",
  },
  {
    number: "02",
    year: "2020",
    title: "ULTRA ONE DAY WEBSITE",
    subtitle: "博士伦 Global Website",
    description:
      "博士伦global全新网站设计，以Ultra One Day的水润舒适为传播点，通过水的元素从视觉层面强化水润舒适的认知。对接英国网站团队实现交互与设计稿还原。",
    responsibilities: [
      "UI Design",
      "Interaction Design",
      "Motion Design",
    ],
    gradient: "bg-gradient-to-br from-blue-400/40 via-slate-200/30 to-blue-300/20",
  },
  {
    number: "03",
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
      <SectionDivider />

      <section id="branding" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            chinese="品牌视觉"
            english="BRAND IDENTITY"
            items={[
              { num: "01", label: "ba&sh" },
              { num: "02", label: "Lacelle × Xuzhi" },
              { num: "03", label: "ROOTS" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {brandingProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="creative" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            chinese="创意策划"
            english="CREATIVE CAMPAIGN"
            items={[
              { num: "01", label: "Michael Kors × BAsdBAN" },
              { num: "02", label: "Corona Sunset" },
              { num: "03", label: "Pepsi" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {creativeProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="packaging" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            chinese="包装设计"
            english="PACKAGING"
            items={[
              { num: "01", label: "VOSS × BASAO" },
              { num: "02", label: "Harbin 1900" },
              { num: "03", label: "ETRO 成都" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {packagingProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="digital" className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            chinese="数字设计"
            english="DIGITAL"
            items={[
              { num: "01", label: "Corona Sunset Hub" },
              { num: "02", label: "Bausch+Lomb Ultra" },
              { num: "03", label: "Valextra Mini App" },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {digitalProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
