"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LazyProjectVideo from "./components/LazyProjectVideo";
import HeroVideo from "./components/HeroVideo";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
const works = [
  { 
    title: "Analytics Command Center", 
    videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/3d%20tool%20demo%20small.mp4" 
  },
  { 
    title: "Apple Mini Recreation", 
    videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/AppleMini.mp4" 
  },
  { 
    title: "Oversized CTA Exploration", 
    videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/cat.mp4" 
  },
  { 
    title: "Casino XP Experience", 
    videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/IsometricAnim.mp4" 
  },
  { 
    title: "Token Landing Scroll", 
    videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/plantApp.mp4" 
  },
];

  const projects = [
    { title: "PRJECTNAME", subtitle: "Designing a Crypto Wallet for Real Users", description: "Simplifying onboarding, transactions, and portfolio tracking for everyday users entering crypto.", gradient: "from-[#000000] via-[#000000] to-[#000000]", videoSrc: "/sample1.mp4" },
    { title: "CASINO XP", subtitle: "Building a High-Engagement Casino Experience", description: "Designing fast, realtime game flows with clear feedback loops to increase retention.", gradient: "from-red-900 via-fuchsia-700 to-amber-400", videoSrc: "/sample2.mp4" },
    { title: "TOKEN LANDING", subtitle: "Crafting High-Converting Token Landing Pages", description: "Creating visually engaging, performance-driven websites that turn visitors into community members.", gradient: "from-zinc-950 via-zinc-900 to-zinc-700", videoSrc: "/sample1.mp4" },
    { title: "DATA CONSOLE", subtitle: "Designing Data-Heavy Dashboards That Make Sense", description: "Turning complex data into clear, actionable insights with structured layouts and smart hierarchy.", gradient: "from-zinc-900 via-slate-800 to-slate-600", videoSrc: "/sample2.mp4" },
  ];

  const experiences = [
    { year: "2025 - Present", role: "UX Designer", company: "Botcalm (PVT) LTD" },
    { year: "2025 - 2026", role: "Creative Consultant", company: "Hatch Works" },
    { year: "2024 - 2026", role: "Crypto Designer", company: "Eth LLC" },
    { year: "2023 - 2024", role: "Graphic Designer", company: "Ford Australia" },
    { year: "2022 - 2023", role: "Creative Designer", company: "Mango Media" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
      <Header />

      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden pt-2 pb-8" aria-label="Hero section">
        <div className="main-container grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <h1 className="flex flex-col text-brand-text">
                <span className="font-[var(--font-signature)] text-8xl md:text-[140px] italic leading-[0.85] tracking-tight">
                  Ishan
                </span>
                <strong className="font-[var(--font-name)] text-7xl md:text-[110px] uppercase leading-[0.85] tracking-tight">
                  Kavinda
                </strong>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-xl leading-relaxed text-brand-text-muted md:text-2xl">
                I design digital products that are <strong className="font-bold text-brand-accent">simple, clear, & effective.</strong>
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/projects" className="inline-flex h-[52px] w-[158px] items-center justify-center rounded-2xl bg-[#0e1113] px-6 py-[14px] text-base font-medium text-white opacity-100 rotate-0 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  View My Work
                </Link>
                <button type="button" className="inline-flex h-[52px] w-[158px] items-center justify-center rounded-2xl border border-brand-primary bg-white px-6 py-[14px] text-base font-medium text-brand-primary opacity-100 rotate-0 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Let&apos;s Talk
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-12 text-base leading-relaxed text-brand-text">
                Helping <strong className="font-bold text-[#1f383d]">startups and businesses</strong> turn ideas into <br className="hidden sm:block" />
                <strong className="font-bold text-[#1f383d]">clean, usable experiences.</strong>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.5}>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.02]">
              <HeroVideo src="/intro.mp4" poster="/ishan.png" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="section-gap overflow-hidden bg-white pt-6 pb-4 md:pb-4 lg:pb-4" aria-label="Selected Product Work section">
        <div className="main-container mb-12">
          <Reveal>
            <div className="flex items-end justify-between pb-12">
              <div className="max-w-xl">
                <p className="mb-4 flex items-center gap-2 text-brand-text">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                  <span className="text-sm font-medium uppercase tracking-widest text-brand-text-muted">Showcase</span>
                </p>
                <h2 className="text-5xl font-bold leading-tight md:text-6xl text-brand-primary">
                  Selected <br /> <span className="font-normal opacity-70">Product Work</span>
                </h2>
              </div>
              <Link href="/projects" className="group hidden items-center gap-2 rounded-xl border border-brand-secondary px-6 py-3 text-sm font-medium transition hover:bg-brand-secondary hover:text-white sm:flex">
                View Project
                <span className="transition-transform group-hover:translate-x-1">-&gt;</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div 
            className="marquee-container cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsMarqueePaused(true)}
            onMouseLeave={() => setIsMarqueePaused(false)}
          >
            <motion.div
              className="flex w-max items-center gap-8 bg-white px-4"
              animate={isMarqueePaused ? {} : { x: "-50%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              drag="x"
              dragConstraints={{ left: -5000, right: 0 }}
              dragElastic={0.1}
              whileTap={{ cursor: "grabbing" }}
            >
              {[...works, ...works, ...works, ...works].map((work, index) => (
                <div 
                  key={`${work.title}-${index}`} 
                  className="marquee-item"
                >
                  <LazyProjectVideo src={work.videoSrc} className="h-full w-full flex items-center justify-center overflow-hidden bg-white" />
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* Process Section */}
      <section className="section-gap bg-brand-primary text-white" aria-label="Process section">
        <div className="main-container flex flex-col justify-between w-[1340px] h-[486px]">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d2dee1]" aria-hidden="true" />
                <span className="h-[24px] w-[88px] align-middle font-[var(--font-inter)] text-base font-normal leading-6 tracking-[0] text-[#d2dee1] capitalize opacity-100 rotate-0">My process</span>
              </p>
              <h2 className="h-[96px] w-[514px] align-middle font-[var(--font-inter)] text-[24px] font-medium leading-[32px] tracking-[0] text-[#e6eef0] opacity-100 rotate-0">
                No unnecessary steps.<br />
                Simple processes for complex products.<br />
                Focused on clarity, usability, and real impact.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4 bg-[#FFFFFF] rounded-[16px] pt-[36px] pr-[30px] pb-[36px] pl-[30px] w-[1340px] h-[320px]">
            {[
              { icon: "⌂", iconSrc: "/Item.png", title: "Understand the Problem", copy: "I start by understanding the user, the\nproduct, and the real problem we’re solving.\nClear direction makes everything easier.", delay: 0 },
              { icon: "✣", iconSrc: "/Item2.png", title: "Simplify the Experience", copy: "I break down complex ideas into simple and\nclear flows, making the product easy to use\nand understand.", delay: 0.1 },
              { icon: "◌", iconSrc: "/Item3.png", title: "Design the Interface", copy: "I design clean, modern interfaces that focus\non usability, clarity, and consistency across\nthe product.", delay: 0.2 },
              { icon: "◎", iconSrc: "/Item4.png", title: "Test & Improve", copy: "I refine the design based on feedback,\nensuring the final product works well for both\nusers and business goals.", delay: 0.3 },
            ].map((step, index) => (
              <Reveal key={step.title} delay={step.delay}>
                <article className="flex h-full flex-col p-4">
                  <div className="bg-[#F8F9F7] mb-6 flex h-14 w-14 items-center justify-center rounded-xl  text-2xl text-[#002B31] backdrop-blur-sm">
                    {step.iconSrc ? (
                      <Image src={step.iconSrc} alt="Process icon" width={28} height={28} className="h-7 w-7 object-contain" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className={index === 0 || index === 1 || index === 2 || index === 3 ? "flex h-[106px] w-[302px] flex-col gap-4" : ""}>
                    <h4 className={index === 0 ? "h-[24px] w-[187px] align-middle font-[var(--font-inter)] text-[16px] font-medium leading-6 tracking-[0] text-[#002B31] opacity-100 rotate-0" : index === 1 ? "h-[24px] w-[181px] align-middle font-[var(--font-inter)] text-[16px] font-medium leading-6 tracking-[0] text-[#002B31] opacity-100 rotate-0" : index === 2 ? "h-[24px] w-[156px] align-middle font-[var(--font-inter)] text-[16px] font-medium leading-6 tracking-[0] text-[#002B31] opacity-100 rotate-0" : index === 3 ? "h-[24px] w-[114px] align-middle font-[var(--font-inter)] text-[16px] font-medium leading-6 tracking-[0] text-[#002B31] opacity-100 rotate-0" : "text-[#002B31] mb-3 text-xl font-semibold"}>{step.title}</h4>
                    <p className={index === 0 || index === 1 || index === 2 || index === 3 ? "h-[66px] w-[302px] align-middle whitespace-pre-line font-[var(--font-inter)] text-[14px] font-normal leading-[22px] tracking-[0] text-[#002B31] opacity-100 rotate-0" : "text-[#002B31] text-base leading-relaxed"}>{step.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Breakdown (Sticky Header effect simulation) */}
      <section className="section-gap" aria-label="Project Breakdown section">
        <div className="main-container grid gap-20 lg:grid-cols-[280px_1fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <p className="mb-4 flex items-center gap-2 text-brand-text">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                <span className="text-sm font-medium uppercase tracking-widest text-brand-text-muted">Case Studies</span>
              </p>
              <h3 className="text-5xl font-bold leading-[0.9] text-brand-primary md:text-6xl">
                Project <br /> <span className="font-normal opacity-70">Breakdown</span>
              </h3>
            </Reveal>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={project.title} className={index % 2 === 1 ? "md:mt-24" : ""}>
                <Reveal delay={0.1 * index}>
                  <article className="group">
                    <div className={`relative h-120 md:h-120 lg:h-[520px] overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} shadow-lg transition-all duration-500 group-hover:shadow-2xl`}>
                      <LazyProjectVideo src={project.videoSrc} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-10" />
                      <div className="absolute bottom-8 left-8">
                        <p className="text-2xl font-bold tracking-tight text-white">{project.title}</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold text-brand-primary">{project.subtitle}</h4>
                      <p className="mt-3 text-lg leading-relaxed text-brand-text-muted">{project.description}</p>
                    </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-brand-primary py-10 text-white md:py-12 lg:py-14" aria-label="Where I have worked">
        <div className="main-container grid gap-20 lg:grid-cols-[280px_1fr]">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <p className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#dbe8eb]" aria-hidden="true" />
                <span className="text-sm font-medium uppercase tracking-widest text-[#dbe8eb]">Experience</span>
              </p>
              <h3 className="h-[124px] w-[364px] align-middle font-[var(--font-inter)] text-[54px] font-semibold leading-[62px] tracking-[0] text-white opacity-100 rotate-0">
                Where <br /> <span className="align-middle font-[var(--font-inter)] text-[54px] font-normal leading-[62px] tracking-[0] text-white opacity-100 rotate-0">I&apos;ve Worked</span>
              </h3>
            </Reveal>
          </div>

          <div className="divide-y divide-white/10">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} delay={0.1 * index}>
                <article className="flex flex-col justify-between py-10 transition-colors hover:bg-white/5 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-2xl font-medium text-white">{experience.company}</p>
                    <p className="mt-1 text-sm text-[#7f9ca2] uppercase tracking-wider">{experience.year}</p>
                  </div>
                  <p className="mt-4 text-xl font-medium text-[#dce9eb] sm:mt-0">{experience.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Contact CTA */}
      <section className="section-gap bg-[#F8F9F7]" aria-label="Contact call to action">
        <div className="main-container flex flex-col items-center text-center">
          <Reveal>
            <p className="mb-4 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-widest text-brand-text-muted">Ready When You Are</span>
            </p>
            <h3 className="text-xl font-semibold leading-snug md:text-4xl text-brand-primary">
              Let&apos;s build something simple and effective together.
            </h3>
            <a
              href="mailto:ishan.kavinda@example.com"
              className="w-full md:w-[50%] lg:w-[25%] mt-10 inline-flex items-center justify-center rounded-2xl bg-[#000000] px-8 py-4 text-lg font-medium text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              Book a Call
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
