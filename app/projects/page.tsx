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
      title: "PS 01",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-200 via-zinc-100 to-zinc-300",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps1.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps1.png",
    },
    {
      title: "PS 02",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-red-900 via-fuchsia-700 to-amber-400",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps2.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps2.png",
    },
    {
      title: "PS 03",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-950 via-zinc-900 to-zinc-700",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps3.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps3.png",
    },
    {
      title: "PS 04",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-900 via-slate-800 to-slate-600",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps4.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps4.png",
    },
    {
      title: "PS 05",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-purple-900 via-purple-700 to-blue-700",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps5.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps5.png",
    },
    {
      title: "PS 06",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-emerald-900 via-emerald-700 to-teal-700",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps6.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps6.png",
    },
    {
      title: "PS 07",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-800 via-zinc-700 to-zinc-500",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps7.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps7.png",
    },
    {
      title: "PS 08",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-slate-900 via-slate-800 to-slate-600",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps8.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps8.png",
    },
    {
      title: "PS 09",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-cyan-900 via-cyan-700 to-blue-500",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps9.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps9.png",
    },
    {
      title: "PS 10",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-neutral-900 via-stone-800 to-stone-600",
      imageUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps10.png",
      posterUrl: "https://raw.githubusercontent.com/kushan00/ishan-portfolio/main/public/ps10.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
      <Header />

      <nav className="mx-auto mt-10 w-full max-w-[1200px] px-[6%] md:px-[4%] lg:px-0">
        <Reveal>
          <Link
            href="/"
            className="inline-flex h-[24px] items-center capitalize transition hover:opacity-70"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0', width: '75px', height: '24px', gap: '10px', opacity: 1, color: '#000000' }}
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

      <section className="overflow-hidden py-16 md:py-20 lg:py-[100px]">
        <div className="mx-auto w-full max-w-[1200px] px-[6%] md:px-[4%] lg:px-0">
          <div className="flex min-h-auto flex-col gap-6 pb-8 sm:gap-8 sm:pb-10 lg:min-h-[354px]">
            <Reveal>
              <div className="flex items-center gap-2 text-brand-text">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-widest text-brand-text-muted sm:text-sm">Showcase</span>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:items-start lg:gap-[54px] lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
              <Reveal delay={0.1}>
                <div style={{ width: '100%', opacity: 1 }}>
                  <h2 className="flex flex-col" style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px, 9vw, 64px)', lineHeight: '1.1', letterSpacing: '-1.4px', color: '#002B31' }}>
                    <span style={{ fontWeight: 400 }}>Selected</span>
                    <span style={{ fontWeight: 600 }}>Product Work</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div style={{ width: '100%', opacity: 1 }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(14px, 4vw, 18px)', lineHeight: '1.5', letterSpacing: '0', textAlign: 'left', color: '#4F5253', marginTop: '0.5rem' }} className="lg:text-right">
                    <span style={{ fontWeight: 400 }}>Not everything is </span>
                    <span style={{ fontWeight: 700 }}>visible at first glance.</span>
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <p
                className="w-full text-left font-normal tracking-[0] text-brand-text-muted"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(14px, 4vw, 18px)', lineHeight: '1.6' }}
              >
                A collection of product work, explorations, and design decisions across UI, crypto, and digital experiences.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-[6%] md:px-[4%] lg:px-0">
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-7 lg:gap-8 sm:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={`${project.imageUrl}-${index}`} delay={0.1 * (index % 2)}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  gradient={project.gradient}
                  imageUrl={project.imageUrl}
                  posterUrl={project.posterUrl}
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
