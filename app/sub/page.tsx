"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import LazyProjectVideo from "../components/LazyProjectVideo";
import HeroVideo from "../components/HeroVideo";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const getAssetPath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return basePath ? `${basePath}${path}` : path;
};

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
      videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/3d%20tool%20demo%20small.mp4",
    },
    {
      title: "Apple Mini Recreation",
      videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/AppleMini.mp4",
    },
    {
      title: "Oversized CTA Exploration",
      videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/cat.mp4",
    },
    {
      title: "Casino XP Experience",
      videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/IsometricAnim.mp4",
    },
    {
      title: "Token Landing Scroll",
      videoSrc: "https://peshala-me-webflow.b-cdn.net/experiments/plantApp.mp4",
    },
  ];

  const projects: {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    gradient: string;
    imageSrc?: string;
    posterUrl?: string;
    videoSrc?: string;
  }[] = [
    {
      slug: "prjectName",
      title: "PRJECTNAME",
      subtitle: "Designing a Crypto Wallet for Real Users",
      description:
        "Simplifying onboarding, transactions, and portfolio tracking for everyday users entering crypto.",
      gradient: "from-[#000000] via-[#000000] to-[#000000]",
      imageSrc: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Background.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Background.png",
    },
    {
      slug: "casino-xp",
      title: "CASINO XP",
      subtitle: "Building a High-Engagement Casino Experience",
      description:
        "Designing fast, realtime game flows with clear feedback loops to increase retention.",
      gradient: "from-red-900 via-fuchsia-700 to-amber-400",
      imageSrc: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Frame1.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Frame1.png",
    },
    {
      slug: "token-landing",
      title: "TOKEN LANDING",
      subtitle: "Crafting High-Converting Token Landing Pages",
      description:
        "Creating visually engaging, performance-driven websites that turn visitors into community members.",
      gradient: "from-zinc-950 via-zinc-900 to-zinc-700",
      imageSrc: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/frame3.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/frame3.png",
    },
    {
      slug: "paw-chain",
      title: "PAW CHAIN",
      subtitle: "Designing Data-Heavy Dashboards That Make Sense",
      description:
        "Turning complex data into clear, actionable insights with structured layouts and smart hierarchy.",
      gradient: "from-zinc-900 via-slate-800 to-slate-600",
      imageSrc: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/frame4.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/frame4.png",
    },
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
      <section
        className="flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden py-12 lg:py-0"
        aria-label="Hero section"
      >
        <div className="mx-auto flex w-full  max-w-[1280px] flex-col items-start gap-10 px-[6%] md:flex-row md:items-center md:gap-14 md:px-[4%] lg:px-8">

          {/* Left — 50% */}
          <div className="w-full md:w-1/2">
            <Reveal>
              <h1 className="flex flex-col w-full">
                <div className="[font-family:var(--font-title)] italic text-[clamp(64px,9vw,108px)] leading-[0.88] tracking-[-1px] text-brand-text">
                  Ishan
                </div>
                <div className="flex items-center">
                  <strong className="font-normal text-[clamp(56px,8.5vw,100px)] leading-[0.92] tracking-[-1px] text-brand-text">
                    Kavinda
                  </strong>
                </div>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 w-full max-w-120">
                <p className="m-0 font-normal text-[clamp(15px,1.6vw,18px)] leading-7 text-[#4F5253]">
                  I design digital products that are{" "}
                  <strong className="font-bold">simple, clear,</strong>
                </p>
                <p className="m-0 font-bold text-[clamp(15px,1.6vw,18px)] leading-7 text-[#4F5253]">
                  &amp; <strong className="font-bold">effective.</strong>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link
                  href="/projects"
                  className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-[#0e1113] px-7 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                >
                  View My Work
                </Link>
                <button
                  type="button"
                  className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-[#002B31] bg-white px-7 text-sm font-medium text-brand-text transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-10 text-sm leading-relaxed text-brand-text">
                Helping{" "}
                <strong className="font-bold text-[#1f383d]">startups</strong> and{" "}
                <strong className="font-bold text-[#1f383d]">businesses</strong> turn ideas into{" "}
                <br className="hidden lg:block" />
                <strong className="font-bold text-[#1f383d]">clean, usable experiences.</strong>
              </p>
            </Reveal>
          </div>

          {/* Right — 50% */}
          <div className="flex w-full justify-center md:w-1/2 md:justify-end">
            <Reveal delay={0.5}>
              <div className="relative aspect-4/5 w-80 md:w-95 overflow-hidden rounded-3xl transition-transform duration-500 hover:scale-[1.02]">
                  <HeroVideo src="https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/intro.mp4" poster="https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ishan.png" />
                </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Showcase Section */}
      <section
        className="overflow-hidden bg-white pt-16 pb-6 md:pt-20 lg:pt-24"
        aria-label="Selected Product Work section"
      >
        <div className="mx-auto mb-8 w-full max-w-300 px-[6%] md:px-[4%] lg:mb-10 lg:px-0">
          <Reveal>
            <p className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
              <span className="text-sm font-normal text-brand-text-muted">Showcase</span>
            </p>
            <div className="flex items-end justify-between">
              <h2 className="text-[clamp(28px,3.2vw,42px)] leading-[1.15] text-brand-text">
                <span className="font-semibold">Selected</span>
                <br />
                <span className="font-normal">Product Work</span>
              </h2>
              <Link
                href="/projects"
                className="group flex shrink-0 items-center gap-1.5 rounded-xl border border-brand-secondary px-4 py-2 text-sm font-medium text-brand-secondary transition hover:bg-brand-secondary hover:text-white"
              >
                {"View Project"}{" "}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            className="w-full cursor-grab overflow-hidden whitespace-nowrap py-6 active:cursor-grabbing"
            onMouseEnter={() => setIsMarqueePaused(true)}
            onMouseLeave={() => setIsMarqueePaused(false)}
          >
            <motion.div
              className="flex w-max items-stretch gap-4 px-4"
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
                  className="relative h-65 w-95 shrink-0 overflow-hidden rounded-2xl bg-zinc-900"
                >
                  <LazyProjectVideo
                    src={work.videoSrc}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* Process Section */}
      <section
        className="py-16 bg-brand-primary text-white md:py-20 lg:py-25"
        aria-label="Process section"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-between gap-10 px-[6%] md:px-[4%] lg:min-h-[568px] lg:px-0">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d2dee1]" aria-hidden="true" />
                <span className="align-middle text-base font-normal leading-6 text-[#d2dee1] capitalize">
                  My process
                </span>
              </p>
              <h2 className="font-medium text-[clamp(18px,2.5vw,24px)] leading-[1.35] text-[#e6eef0] w-full max-w-128.5">
                No unnecessary steps.
                <br />
                A Simple processes for complex products.
                <br />
                Focused on clarity, usability, and real impact.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 rounded-[16px] bg-white p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-4 lg:p-8">
            {[
              {
                icon: "⌂",
                iconSrc: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Item.png",
                poster: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Item.png",
                title: "Understand the Problem",
                copy: "I start by understanding the user, the\nproduct, and the real problem we're solving.\nClear direction makes everything easier.",
                delay: 0,
              },
              {
                icon: "✣",
                iconSrc: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Item2.png",
                poster: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Item2.png",
                title: "Simplify the Experience",
                copy: "I break down complex ideas into simple and\nclear flows, making the product easy to use\nand understand.",
                delay: 0.1,
              },
              {
                icon: "◌",
                iconSrc: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Item3.png",
                poster: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Item3.png",
                title: "Design the Interface",
                copy: "I design clean, modern interfaces that focus\non usability, clarity, and consistency across\nthe product.",
                delay: 0.2,
              },
              {
                icon: "◎",
                iconSrc: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Item4.png",
                poster: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/Item4.png",
                title: "Test & Improve",
                copy: "I refine the design based on feedback,\nensuring the final product works well for both\nusers and business goals.",
                delay: 0.3,
              },
            ].map((step) => (
              <Reveal key={step.title} delay={step.delay}>
                <article className="flex h-full flex-col p-2 sm:p-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F9F7] text-xl text-brand-text backdrop-blur-sm sm:mb-6 sm:h-14 sm:w-14 sm:text-2xl">
                    {step.iconSrc ? (
                      <Image
                        src={step.iconSrc}
                        alt="Process icon"
                        width={28}
                        height={28}
                        loading="lazy"
                        quality={85}
                        className="h-7 w-7 object-contain"
                      />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-base font-medium leading-6 text-brand-text sm:text-lg">
                      {step.title}
                    </h4>
                    <p className="whitespace-pre-line font-normal text-xs leading-5 text-brand-text w-full">
                      {step.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Breakdown */}
      <section className="py-16 md:py-20 lg:py-25" aria-label="Project Breakdown section">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-[6%] md:px-[4%] lg:grid-cols-[280px_1fr] lg:gap-20 lg:px-0">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <p className="mb-4 flex items-center gap-2 text-brand-text">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                <span className="align-middle text-[14px] font-normal leading-6 text-[#000000]">
                  Case Studies
                </span>
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
                  <Link
                    href={`/projects/${project.slug ?? project.title}`}
                    className="group block"
                  >
                    <article className="group">
                      <div
                        className={`relative h-[clamp(260px,70vw,520px)] overflow-hidden rounded-3xl ${
                          index === 0
                            ? "bg-transparent shadow-none"
                            : `bg-linear-to-br ${project.gradient} shadow-lg`
                        } transition-all duration-500 group-hover:shadow-2xl`}
                      >
                        {project.imageSrc ? (
                          <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            loading="lazy"
                            quality={85}
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : project.videoSrc ? (
                          <LazyProjectVideo
                            src={project.videoSrc}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : null}
                        {index !== 0 && (
                          <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-10" />
                        )}
                        {index !== 0 && index !== 1 && index !== 2 && index !== 3 && (
                          <div className="absolute bottom-8 left-8">
                            <p className="text-2xl font-bold tracking-tight text-white">
                              {project.title}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="mt-8">
                        <h4 className="max-w-full text-[clamp(1.25rem,4vw,1.5rem)] font-normal leading-[1.33] text-brand-text">
                          {project.subtitle}
                        </h4>
                        <p className="mt-3 max-w-full text-sm font-normal leading-5.5 text-brand-text">
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
      <section
        className="bg-brand-primary py-10 text-white md:py-12 lg:py-14"
        aria-label="Where I have worked"
      >
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-[6%] md:px-[4%] lg:grid-cols-[320px_1fr] lg:gap-20 lg:px-0">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Reveal>
              <p className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#dbe8eb]" aria-hidden="true" />
                <span className="align-middle text-base font-normal leading-6 text-[#dbe8eb]">
                  Experience
                </span>
              </p>
              <h3 className="text-[clamp(28px,3.2vw,44px)] leading-[1.2] text-white w-full">
                <span className="font-semibold">Where</span>
                <br />
                <span className="font-normal">I&apos;ve Worked</span>
              </h3>
            </Reveal>
          </div>

          <div className="divide-y divide-white/10">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} delay={0.1 * index}>
                <article className="flex flex-col justify-between gap-2 py-6 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:py-10">
                  <div>
                    <p className="text-xl font-medium text-white sm:text-2xl">
                      {experience.company}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-[#7f9ca2] sm:text-sm">
                      {experience.year}
                    </p>
                  </div>
                  <p className="mt-2 text-lg font-medium text-[#dce9eb] sm:mt-0 sm:text-xl">
                    {experience.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Contact CTA */}
      <section
        className="flex w-full items-center bg-[#F8F9F7] py-12 sm:py-16"
        aria-label="Contact call to action"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-[6%] text-center md:px-[4%] lg:px-0">
          <Reveal>
            <p className="mb-4 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
              <span className="text-[14px] font-normal leading-6 text-brand-text-muted">
                Ready When You Are
              </span>
            </p>
            <h3 className="w-full  font-medium leading-tight text-brand-primary text-[clamp(24px,7vw,54px)] md:text-[54px] md:leading-15.5">
              Let&apos;s build something simple and effective together.
            </h3>
            <a
              href="mailto:ishan.kavinda@example.com"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-[16px] bg-[#000000] px-6 py-3.5 text-sm font-medium text-white shadow-xl transition-transform hover:scale-105 active:scale-95 sm:h-13 sm:w-33.5"
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
