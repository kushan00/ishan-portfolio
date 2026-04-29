"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

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

export default function ProjectsPage() {
  const cardSubtitle = "Designing a Crypto Wallet for Real Users";
  const cardDescription = "Simplifying onboarding, transactions, and portfolio tracking for everyday users.";

  const projects = [
    {
      slug: "prjectName",
      title: "PROJECTNAME",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-200 via-zinc-100 to-zinc-300",
      imageUrl: "/ishan.png",
      videoUrl: "/sample1.mp4",
    },
    {
      slug: "casino-xp",
      title: "CASINO XP",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-red-900 via-fuchsia-700 to-amber-400",
      imageUrl: "/ishan.png",
      videoUrl: "/sample2.mp4",
    },
    {
      slug: "token-landing",
      title: "TOKEN LANDING",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-950 via-zinc-900 to-zinc-700",
      imageUrl: "/ishan.png",
      videoUrl: "/sample3.mp4",
    },
    {
      slug: "data-console",
      title: "DATA CONSOLE",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-900 via-slate-800 to-slate-600",
      imageUrl: "/ishan.png",
      videoUrl: "/sample4.mp4",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
      <Header />

      <nav className="main-container mt-10">
        <Reveal>
          <Link
            href="/"
            className="inline-flex h-[24px] w-[45px] items-center gap-[4.58px] capitalize text-[16px] font-normal leading-[24px] text-brand-text-muted transition hover:text-brand-primary"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 12 10"
              className="h-[10px] w-[11.25px] shrink-0"
            >
              <path
                d="M11 5H1.8M1.8 5L5.8 1M1.8 5L5.8 9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Home
          </Link>
        </Reveal>
      </nav>

      <section className="section-gap overflow-hidden">
        <div className="main-container">
          <div className="flex flex-col gap-12 border-b border-[#F0F0F0] pb-16">
            <Reveal>
              <div className="flex items-center gap-2 text-brand-text">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                <span className="text-sm font-medium uppercase tracking-widest text-brand-text-muted">Showcase</span>
              </div>
            </Reveal>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
              <Reveal delay={0.1}>
                <h2 className="flex flex-col text-6xl font-bold leading-tight tracking-tighter text-brand-primary md:text-[80px]">
                  <span>Selected</span>
                  <span className="font-normal opacity-70">Product Work</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
              <p className="ml-auto max-w-[217px] justify-self-end text-right font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[0] text-[#4F5253]">
                  Not everything is <strong className="font-bold text-[#4F5253]">visible at first glance.</strong>
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <p className="max-w-3xl text-xl leading-relaxed text-brand-text-muted">
                A collection of product work, explorations, and design decisions across UI, crypto, and digital experiences.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="main-container mt-24">
          <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={`${project.slug}-${index}`} delay={0.1 * (index % 2)}>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  gradient={project.gradient}
                  imageUrl={project.imageUrl}
                  videoUrl={project.videoUrl}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
