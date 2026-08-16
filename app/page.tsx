"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  FileCheck2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Wrench,
} from "lucide-react"
import { motion, useInView, useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const motionValue = useMotionValue(0)
  const displayValue = useTransform(motionValue, (latest) =>
    Math.floor(latest).toLocaleString(),
  )

  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])

  return <motion.span>{displayValue}</motion.span>
}

function StatNumber({ text }: { text: string }) {
  const match = text.match(/\d+/)
  if (!match) return <span>{text}</span>

  const number = parseInt(match[0])
  const prefix = text.substring(0, match.index)
  const suffix = text.substring(match.index! + match[0].length)

  return (
    <span>
      {prefix}
      <AnimatedNumber value={number} />
      {suffix}
    </span>
  )
}

function ScrollInView({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

function HoverCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

export default function PersonalWebsite() {
  const experiences = [
    {
      period: "2026.04 - 2026.07",
      company: "重庆智鸿工程管理有限公司",
      role: "工程咨询",
      description: "参与国网配网及技改检修结算内审，围绕工程量、定额、主材限价、签证和其他费用开展核验。",
      highlights: ["完成 44 项结算内审", "送审金额 200 万元", "累计核减 20 万元，平均核减率 10%"],
    },
    {
      period: "2022.07 - 2025.03",
      company: "中国建筑第八工程局有限公司",
      role: "工程造价",
      description: "负责市政及土建工程算量、组价对量、分包招采与合同签约，并支持成本、申报和分供资源管理。",
      highlights: ["项目现金流动态跟踪", "分供成本核算与签证办理", "多方案经济效益分析"],
    },
    {
      period: "2026.01 - 2026.05",
      company: "Mercado Libre 美客多",
      role: "跨境电商运营",
      description: "独立运营百货、玩具、鞋履与洗护用品等品类的自发货店铺，建立选品、核算、优化和复盘流程。",
      highlights: ["3 个多月完成 700 单", "累计销售额 15,000 美元", "主图 A/B 测试与关键词优化"],
    },
  ]

  const projects = [
    {
      type: "个人项目",
      title: "轻量级上架工具",
      period: "2026.05 - 2026.07",
      description:
        "面向 Mercado Libre CBT 跨境店铺的本地半自动商品上架工具，串联浏览器采集、AI 生成、类目属性补全、人工校验、授权与发布。",
      points: [
        "独立开发 Chrome Manifest V3 插件，采集 Amazon、Mercado Libre 与 1688 商品内容和页面截图。",
        "基于 Node.js 搭建本地服务，提供商品、配置、图片缓存、发布预览和失败诊断接口。",
        "接入多模态 AI 与图片生成能力，完成标题、描述、属性和逐图提示词生成。",
        "对接 Mercado Libre OAuth 2.0 与发布接口，支持多店铺授权、令牌刷新和发布记录追踪。",
      ],
      tags: ["Node.js", "JavaScript", "Chrome MV3", "Mercado Libre API", "OAuth 2.0", "多模态 AI"],
    },
    {
      type: "工程项目",
      title: "万州北滨大道拓宽改造项目",
      period: "2022.12 - 2025.03",
      description: "承担合约预算管理工作，支持甲方预算对接、项目现金流追踪、分供合约签订与成本管理。",
      points: [
        "动态响应甲方预算需求，保障项目资金链良性运转。",
        "主导分供成本核算和签证基础工作，协同技术部门研判市场行情。",
        "通过施工方案比选和经济效应分析，为项目决策提供数据支持。",
      ],
      tags: ["合约预算", "成本管理", "现金流", "签证管理"],
    },
  ]

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#18221d]">
      <motion.header
        className="border-b border-[#dce2da] bg-[#f7f8f5]/95 backdrop-blur"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="主导航">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="#top" className="text-lg font-bold tracking-normal text-[#173b2d]">
              黄军峰 <span className="ml-1 text-sm font-normal text-[#607067]">产品与运营</span>
            </Link>
          </motion.div>
          <div className="hidden items-center gap-6 text-sm text-[#4b5c52] md:flex">
            {["个人概述", "工作经历", "项目经历", "能力"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={`#${item === "个人概述" ? "about" : item === "工作经历" ? "experience" : item === "项目经历" ? "projects" : "skills"}`}
                  className="transition-colors hover:text-[#18794e]"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild size="sm" className="bg-[#18794e] text-white hover:bg-[#12633f]">
              <Link href="#contact">联系我</Link>
            </Button>
          </motion.div>
        </nav>
      </motion.header>

      <section id="top" className="border-b border-[#dce2da] bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.45fr_.75fr] md:py-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="mb-5 flex items-center gap-2 text-sm font-medium text-[#18794e]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Sparkles className="h-4 w-4" />
              个人经历与作品
            </motion.p>
            <motion.h1
              className="max-w-3xl text-5xl font-bold leading-tight tracking-normal text-[#173b2d] md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              以数据与执行力，推动业务从想法走向落地。
            </motion.h1>
            <motion.p
              className="mt-7 max-w-2xl text-lg leading-8 text-[#526158]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              4 年工作经验，拥有工程成本管控、跨境电商实战与 AI 工具开发经历。擅长从复杂流程中梳理问题，用数据、工具和快速验证提升业务效率。
            </motion.p>
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-[#18794e] text-white hover:bg-[#12633f]">
                  <Link href="#projects">
                    查看项目 <ArrowDown className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-[#aebbb2] bg-white text-[#173b2d] hover:bg-[#eef4ef]">
                  <Link href="mailto:hjf5467@outlook.com">
                    邮件联系 <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.aside
            className="self-end border-l-4 border-[#e2b93b] bg-[#f3f6f0] p-7"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
          >
            <p className="text-sm font-medium text-[#607067]">核心标签</p>
            <p className="mt-3 text-2xl font-semibold leading-9 text-[#173b2d]">
              严谨数据思维
              <br />
              轻资产实战经验
              <br />
              抗压与持续学习
            </p>
          </motion.aside>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-20">
        <ScrollInView>
          <p className="text-sm font-semibold text-[#18794e]">个人概述</p>
        </ScrollInView>
        <div className="mt-4 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <ScrollInView delay={0.1}>
            <h2 className="text-3xl font-bold leading-tight text-[#173b2d] md:text-4xl">跨领域的业务理解，落在可验证的结果上。</h2>
          </ScrollInView>
          <ScrollInView delay={0.2}>
            <p className="text-lg leading-8 text-[#526158]">从工程造价审计中的成本核验，到美客多店铺的选品、利润测算与 Listing 优化，再到独立完成上架工具开发，我持续在实践中建立"发现问题 - 数据判断 - 快速交付 - 复盘迭代"的工作方式。</p>
          </ScrollInView>
        </div>
        <motion.div
          className="mt-12 grid border-y border-[#dce2da] py-7 sm:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { value: "4 年", label: "工作经验" },
            { value: "700 单", label: "跨境店铺累计订单" },
            { value: "20 万元", label: "内审累计核减金额" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="border-[#dce2da] py-4 text-center sm:border-r sm:last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-3xl font-bold text-[#173b2d]">
                <StatNumber text={item.value} />
              </p>
              <p className="mt-1 text-sm text-[#607067]">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="experience" className="bg-[#eaf0e9] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <ScrollInView>
            <p className="text-sm font-semibold text-[#18794e]">工作经历</p>
          </ScrollInView>
          <ScrollInView delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold text-[#173b2d] md:text-4xl">在成本、运营与流程中解决具体问题。</h2>
          </ScrollInView>
          <div className="mt-12 space-y-4">
            {experiences.map((item, i) => (
              <HoverCard key={`${item.company}-${item.period}`}>
                <ScrollInView delay={i * 0.1}>
                  <article className="grid gap-5 border border-[#d4ddd2] bg-white p-6 md:grid-cols-[180px_1fr] md:p-8 transition-all">
                    <p className="text-sm font-medium text-[#18794e]">{item.period}</p>
                    <div>
                      <p className="text-sm text-[#607067]">{item.company}</p>
                      <h3 className="mt-1 text-xl font-bold text-[#173b2d]">{item.role}</h3>
                      <p className="mt-3 leading-7 text-[#526158]">{item.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <Badge
                            key={highlight}
                            variant="secondary"
                            className="rounded-sm bg-[#eaf0e9] px-3 py-1 text-[#28533d]"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScrollInView>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
        <ScrollInView>
          <p className="text-sm font-semibold text-[#18794e]">项目经历</p>
        </ScrollInView>
        <ScrollInView delay={0.1}>
          <h2 className="mt-3 text-3xl font-bold text-[#173b2d] md:text-4xl">从业务流程出发，构建能真正使用的工具与方法。</h2>
        </ScrollInView>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <HoverCard key={project.title}>
              <ScrollInView delay={i * 0.15}>
                <Card className="rounded-none border-[#d4ddd2] bg-white shadow-none transition-all">
                  <CardContent className="p-7 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-[#18794e]">{project.type}</p>
                      <span className="text-sm text-[#607067]">{project.period}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-[#173b2d]">{project.title}</h3>
                    <p className="mt-4 leading-7 text-[#526158]">{project.description}</p>
                    <ul className="mt-6 space-y-3">
                      {project.points.map((point, idx) => (
                        <motion.li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-[#405047]"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.4 }}
                          viewport={{ once: true, margin: "-50px" }}
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#18794e]" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      className="mt-7 flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-sm border-[#b7c9bb] text-[#28533d]">
                          {tag}
                        </Badge>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </ScrollInView>
            </HoverCard>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-[#dce2da] bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <ScrollInView>
            <p className="text-sm font-semibold text-[#18794e]">专业能力</p>
          </ScrollInView>
          <ScrollInView delay={0.1}>
            <h2 className="mt-3 text-3xl font-bold text-[#173b2d] md:text-4xl">业务、数据与工具的组合能力。</h2>
          </ScrollInView>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: BarChart3,
                title: "业务分析与运营",
                items: ["跨境电商选品与利润核算", "Listing 优化与主图 A/B 测试", "成本管控与项目现金流跟踪"],
              },
              {
                icon: Code2,
                title: "产品与技术",
                items: ["AI Agent 自动化小型项目", "HTML、CSS、JavaScript 前端基础", "Node.js、Chrome MV3、OAuth 2.0"],
              },
              {
                icon: Wrench,
                title: "工程与通用工具",
                items: ["Excel、AutoCAD、广联达与 GCCP", "Revit、博微电网计价", "英语六级、计算机二级、C1 驾照"],
              },
            ].map((skill, i) => {
              const Icon = skill.icon
              return (
                <HoverCard key={skill.title}>
                  <ScrollInView delay={i * 0.15}>
                    <motion.div
                      className="border-t-4 border-[#e2b93b] bg-[#f7f8f5] p-7 transition-all"
                      whileHover={{ boxShadow: "0 8px 16px rgba(0,0,0,0.08)" }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-6 w-6 text-[#18794e]" />
                      </motion.div>
                      <h3 className="mt-5 text-xl font-bold text-[#173b2d]">{skill.title}</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-6 text-[#526158]">
                        {skill.items.map((item, idx) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            viewport={{ once: true, margin: "-50px" }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </ScrollInView>
                </HoverCard>
              )
            })}
          </div>
        </div>
      </section>

      <ScrollInView>
        <section className="mx-auto max-w-6xl px-5 py-20">
          <motion.div
            className="grid gap-9 border-l-4 border-[#18794e] bg-[#f3f6f0] p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12"
            whileHover={{ boxShadow: "0 12px 24px rgba(24, 121, 78, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <p className="text-sm font-semibold text-[#18794e]">教育背景</p>
              <h2 className="mt-3 text-2xl font-bold text-[#173b2d]">重庆大学 · 土木工程（建造与管理）</h2>
              <p className="mt-2 text-[#526158]">本科 · 2018 - 2022</p>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <GraduationCap className="h-12 w-12 text-[#e2b93b]" />
            </motion.div>
          </motion.div>
        </section>
      </ScrollInView>

      <motion.footer
        id="contact"
        className="bg-[#173b2d] py-16 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-5 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-sm font-medium text-[#b9d7bc]">联系我</p>
            <h2 className="mt-3 text-3xl font-bold">期待把复杂问题，做成清晰的结果。</h2>
          </motion.div>
          <motion.div
            className="grid gap-3 text-sm text-[#e2eee4]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { href: "mailto:hjf5467@outlook.com", icon: Mail, text: "hjf5467@outlook.com" },
              { href: "tel:15330335673", icon: Phone, text: "153 3033 5673" },
              { icon: MapPin, text: "重庆" },
            ].map((item, i) => {
              const Icon = item.icon
              const content = (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 transition-colors hover:text-[#e2b93b]"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="h-4 w-4" />
                  {item.text}
                  {item.href === "mailto:hjf5467@outlook.com" && (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </motion.div>
              )
              return item.href ? (
                <Link key={i} href={item.href}>
                  {content}
                </Link>
              ) : (
                <div key={i}>{content}</div>
              )
            })}
          </motion.div>
        </div>
      </motion.footer>
    </main>
  )
}
