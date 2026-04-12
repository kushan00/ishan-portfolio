import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const shell = "mx-auto w-[min(1280px,calc(100%-2rem))]";
  const cardSubtitle = "Designing a Crypto Wallet for Real Users";
  const cardDescription = "Simplifying onboarding, transactions, and portfolio tracking for everyday users.";
  const sampleProjectImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=max&auto=format&q=85";

  const projects = [
    { slug: "prjectName", title: "prjectName", subtitle: cardSubtitle, description: cardDescription, gradient: "from-zinc-200 via-zinc-100 to-zinc-300" },
    { slug: "casino-xp", title: "CASINO XP", subtitle: cardSubtitle, description: cardDescription, gradient: "from-red-900 via-fuchsia-700 to-amber-400" },
    { slug: "token-landing", title: "TOKEN LANDING", subtitle: cardSubtitle, description: cardDescription, gradient: "from-zinc-950 via-zinc-900 to-zinc-700" },
    { slug: "data-console", title: "DATA CONSOLE", subtitle: cardSubtitle, description: cardDescription, gradient: "from-zinc-900 via-slate-800 to-slate-600" },
    { slug: "analytics-hub", title: "ANALYTICS HUB", subtitle: cardSubtitle, description: cardDescription, gradient: "from-purple-900 via-purple-700 to-blue-700" },
    { slug: "mobile-banking", title: "MOBILE BANKING", subtitle: cardSubtitle, description: cardDescription, gradient: "from-emerald-900 via-emerald-700 to-teal-700" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#eceeed] text-[#0d3b46]">
      <Header />

      <nav className={`${shell} mt-6`}>
        <Link href="/" className="inline-flex items-center text-[0.62rem] font-medium text-[#1d464f] no-underline transition hover:text-[#0a3a44]">
          ← Home
        </Link>
      </nav>

      <section className={`${shell} mt-4`}>
        <p className="m-0 inline-flex items-center gap-[0.35rem] text-[0.66rem] text-[#6e7d80]">
          <span className="text-[0.7rem] leading-none text-[#123f47]" aria-hidden="true">•</span>
          Showcase
        </p>
        <div className="mt-[0.32rem] flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
          <h2 className="m-0 text-[clamp(2.15rem,4.3vw,3.35rem)] leading-[0.95] tracking-[-0.01em] text-[#123f47]">
            <span className="font-normal">Selected</span>
            <br />
            <strong className="font-bold text-[#0a2f38]">Product Work</strong>
          </h2>
          <p className="m-0 max-w-[14ch] text-right text-[0.72rem] leading-[1.35] text-[#5f7074]">
            Not everything is visible at first glance
          </p>
        </div>
        <p className="mt-[0.9rem] max-w-[74ch] text-[0.72rem] leading-[1.6] text-[#6c7a7e]">
          A collection of product work, explorations, and design decisions across UI, crypto, and digital experiences.
        </p>
      </section>

      <section className={`${shell} mt-6`}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              slug={project.slug}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              gradient={project.gradient}
              imageUrl={sampleProjectImage}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
