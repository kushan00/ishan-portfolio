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

  const projects: { slug: string; title: string; subtitle: string; description: string; gradient: string; imageSrc?: string; videoSrc?: string }[] = [
    { slug: "prjectName", title: "PRJECTNAME", subtitle: "Designing a Crypto Wallet for Real Users", description: "Simplifying onboarding, transactions, and portfolio tracking for everyday users entering crypto.", gradient: "from-[#000000] via-[#000000] to-[#000000]", imageSrc: "/Background.png" },
    { slug: "casino-xp", title: "CASINO XP", subtitle: "Building a High-Engagement Casino Experience", description: "Designing fast, realtime game flows with clear feedback loops to increase retention.", gradient: "from-red-900 via-fuchsia-700 to-amber-400", imageSrc: "/Frame1.png" },
    { slug: "token-landing", title: "TOKEN LANDING", subtitle: "Crafting High-Converting Token Landing Pages", description: "Creating visually engaging, performance-driven websites that turn visitors into community members.", gradient: "from-zinc-950 via-zinc-900 to-zinc-700", imageSrc: "/frame3.png" },
    { slug: "paw-chain", title: "PAW CHAIN", subtitle: "Designing Data-Heavy Dashboards That Make Sense", description: "Turning complex data into clear, actionable insights with structured layouts and smart hierarchy.", gradient: "from-zinc-900 via-slate-800 to-slate-600", imageSrc: "/frame4.png" },
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
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden pt-4 pb-12 sm:pt-6 lg:pt-2" aria-label="Hero section">
        <div className="main-container grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <h1 style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: 565,
                height: 'auto',
                opacity: 1,
                margin: 0,
                padding: 0,
              }}>
                <span style={{
                  fontFamily: 'Satisfy, serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: 'clamp(72px, 18vw, 150px)',
                  lineHeight: '0.9',
                  letterSpacing: '-1.4px',
                  verticalAlign: 'middle',
                  color: '#002B31',
                  margin: 0,
                  padding: 0,
                }}>
                  Ishan
                </span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: 0,
                  padding: 0,
                }}>
                  <strong style={{
                    fontFamily: 'Satisfy, serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: 'clamp(56px, 14vw, 120px)',
                    lineHeight: '0.9',
                    letterSpacing: '-1.4px',
                    verticalAlign: 'middle',
                    color: '#002B31',
                    margin: 0,
                    padding: 0,
                  }}>
                    Kavinda
                  </strong>
                  <span style={{
                    fontFamily: 'Satisfy, serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: 'clamp(56px, 14vw, 120px)',
                    lineHeight: '0.9',
                    letterSpacing: '-10.4px',
                    verticalAlign: 'middle',
                    color: '#002B31',
                    margin: 0,
                    padding: 0,
                  }}>
                    .
                  </span>
                </div>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{
                width: '100%',
                maxWidth: 565,
                opacity: 1,
              }}>
                <p style={{
                  margin: 0,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  lineHeight: '28px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#4F5253',
                }}>
                  I design digital products that are <strong style={{ fontWeight: 700 }}>simple, clear,</strong>
                </p>
                <p style={{
                  margin: 0,
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '28px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  color: '#4F5253',
                }}>
                  &amp; <strong style={{ fontWeight: 700 }}>effective.</strong>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href="/projects" className="inline-flex h-[52px] w-full items-center justify-center rounded-2xl bg-[#0e1113] px-6 py-[14px] text-base font-medium text-white opacity-100 rotate-0 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-[158px]">
                  View My Work
                </Link>
                <button type="button" className="inline-flex h-[52px] w-full items-center justify-center rounded-2xl border border-brand-primary bg-white px-6 py-[14px] text-base font-medium text-brand-primary opacity-100 rotate-0 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-[158px]">
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
            <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.02] sm:max-w-sm lg:max-w-md">
              <HeroVideo src="/intro.mp4" poster="/ishan.png" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="section-gap overflow-hidden bg-white pt-6 pb-4 md:pb-4 lg:pb-4" aria-label="Selected Product Work section">
        <div className="main-container mb-8 sm:mb-12">
          <Reveal>
            <div className="flex flex-col gap-6 pb-8 lg:flex-row lg:items-end lg:justify-between lg:pb-12">
              <div className="max-w-xl">
                <p className="mb-4 flex items-center gap-2 text-brand-text">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                  <span className="h-[24px] w-[78px] align-middle font-[var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-[0] text-brand-text-muted">Showcase</span>
                </p>
                <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-tight text-brand-primary">
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
        <div className="mx-auto w-[1280px] flex flex-col justify-between h-[568px]">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d2dee1]" aria-hidden="true" />
                <span className="h-[24px] w-[88px] align-middle font-[var(--font-inter)] text-base font-normal leading-6 tracking-[0] text-[#d2dee1] capitalize opacity-100 rotate-0">My process</span>
              </p>
              <h2 className="h-[96px] w-[514px] align-middle font-[var(--font-inter)] text-[24px] font-medium leading-[32px] tracking-[0] text-[#e6eef0] opacity-100 rotate-0">
                No unnecessary steps.<br />
                A Simple processes for complex products.<br />
                Focused on clarity, usability, and real impact.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 rounded-[16px] bg-[#FFFFFF] p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-4 lg:p-8">
            {[
              { icon: "⌂", iconSrc: "/Item.png", title: "Understand the Problem", copy: "I start by understanding the user, the\nproduct, and the real problem we’re solving.\nClear direction makes everything easier.", delay: 0 },
              { icon: "✣", iconSrc: "/Item2.png", title: "Simplify the Experience", copy: "I break down complex ideas into simple and\nclear flows, making the product easy to use\nand understand.", delay: 0.1 },
              { icon: "◌", iconSrc: "/Item3.png", title: "Design the Interface", copy: "I design clean, modern interfaces that focus\non usability, clarity, and consistency across\nthe product.", delay: 0.2 },
              { icon: "◎", iconSrc: "/Item4.png", title: "Test & Improve", copy: "I refine the design based on feedback,\nensuring the final product works well for both\nusers and business goals.", delay: 0.3 },
            ].map((step, index) => (
              <Reveal key={step.title} delay={step.delay}>
                <article className="flex h-full flex-col p-2 sm:p-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F9F7] text-xl text-[#002B31] backdrop-blur-sm sm:mb-6 sm:h-14 sm:w-14 sm:text-2xl">
                    {step.iconSrc ? (
                      <Image src={step.iconSrc} alt="Process icon" width={28} height={28} className="h-7 w-7 object-contain" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-[var(--font-inter)] text-base font-medium leading-6 tracking-[0] text-[#002B31] sm:text-lg">{step.title}</h4>
                    <p className="whitespace-pre-line font-[var(--font-inter)] text-sm font-normal leading-[22px] tracking-[0] text-[#002B31] sm:text-[14px]">{step.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Breakdown (Sticky Header effect simulation) */}
      <section className="section-gap" aria-label="Project Breakdown section">
        <div className="main-container grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <p className="mb-4 flex items-center gap-2 text-brand-text">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                <span className="h-[24px] w-[88px] align-middle font-[var(--font-inter)] text-[14px] font-normal leading-[24px] tracking-[0] text-[#000000]">Case Studies</span>
              </p>
              <h3 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[0.95] text-brand-primary">
                Project <br /> <span className="font-normal opacity-70">Breakdown</span>
              </h3>
            </Reveal>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            {projects.map((project, index) => (
              <div key={project.title} className={index % 2 === 1 ? "md:mt-24" : ""}>
                <Reveal delay={0.1 * index}>
                  <Link href={`/projects/${project.slug ?? project.title}`} className="group block">
                    <article className="group">
                    <div className={`relative h-[clamp(260px,70vw,520px)] overflow-hidden rounded-3xl ${index === 0 ? "bg-transparent shadow-none" : `bg-gradient-to-br ${project.gradient} shadow-lg`} transition-all duration-500 group-hover:shadow-2xl`}>
                      {project.imageSrc ? (
                        <Image
                          src={project.imageSrc}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : project.videoSrc ? (
                        <LazyProjectVideo src={project.videoSrc} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : null}
                      {index !== 0 && <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-10" />}
                      {index !== 0 && index !== 1 && index !== 2 && index !== 3 && (
                        <div className="absolute bottom-8 left-8">
                          <p className="text-2xl font-bold tracking-tight text-white">{project.title}</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-8">
                      <h4
                        className={
                          "max-w-full font-[var(--font-inter)] text-[clamp(1.25rem,4vw,1.5rem)] font-normal leading-[1.33] tracking-[0] text-[#002B31]"
                        }
                      >
                        {project.subtitle}
                      </h4>
                      <p
                        className={
                          "mt-3 max-w-full font-[var(--font-inter)] text-sm font-normal leading-[22px] tracking-[0] text-[#002B31]"
                        }
                      >
                        {project.description}
                      </p>
                    </div>
                    </article>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-brand-primary py-10 text-white md:py-12 lg:py-14" aria-label="Where I have worked">
        <div className="main-container grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <p className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#dbe8eb]" aria-hidden="true" />
                <span className="h-[24px] w-[84px] align-middle font-[var(--font-inter)] text-[16px] font-normal leading-[24px] tracking-[0] text-[#dbe8eb]">Experience</span>
              </p>
              <h3 className="max-w-[364px] align-middle font-[var(--font-inter)] text-[clamp(2.5rem,8vw,3.375rem)] font-semibold leading-[1.05] tracking-[0] text-white opacity-100 rotate-0">
                Where <br /> <span className="align-middle font-[var(--font-inter)] text-[54px] font-normal leading-[62px] tracking-[0] text-white opacity-100 rotate-0">I&apos;ve Worked</span>
              </h3>
            </Reveal>
          </div>

          <div className="divide-y divide-white/10">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} delay={0.1 * index}>
                <article className="flex flex-col justify-between gap-2 py-6 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:py-10">
                  <div>
                    <p className="text-xl font-medium text-white sm:text-2xl">{experience.company}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-[#7f9ca2] sm:text-sm">{experience.year}</p>
                  </div>
                  <p className="mt-2 text-lg font-medium text-[#dce9eb] sm:mt-0 sm:text-xl">{experience.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Contact CTA */}
      <section className="flex w-full items-center bg-[#F8F9F7] py-12 sm:py-16" aria-label="Contact call to action">
        <div className="main-container flex flex-col items-center text-center">
          <Reveal>
            <p className="mb-4 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
              <span className="font-[var(--font-inter)] text-[14px] font-normal leading-[24px] tracking-[0] text-brand-text-muted">
                Ready When You Are
              </span>
            </p>
            <h3 className="max-w-2xl text-[clamp(1.5rem,5vw,2.5rem)] font-semibold leading-snug text-brand-primary">
              Let&apos;s build something simple and effective together.
            </h3>
            <a
              href="mailto:ishan.kavinda@example.com"
              className="mt-8 inline-flex h-[52px] w-full items-center justify-center rounded-[16px] bg-[#000000] px-[24px] py-[14px] text-sm font-medium text-white shadow-xl transition-transform hover:scale-105 active:scale-95 sm:w-[134px]"
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
