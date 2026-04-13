import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const shell = "mx-auto w-[min(1280px,calc(100%-2rem))]";
  const cardSubtitle = "Designing a Crypto Wallet for Real Users";
  const cardDescription = "Simplifying onboarding, transactions, and portfolio tracking for everyday users.";
  const sampleProjectImage = "/blue-small.gif";

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
        <Link
          href="/"
          className="inline-flex h-[24px] w-[45px] items-center text-[16px] font-normal leading-[24px] tracking-[0] capitalize text-[#1d464f] no-underline opacity-100 transition hover:text-[#0a3a44]"
          style={{ fontFamily: "Inter, sans-serif", fontStyle: "normal" }}
        >
          Home
        </Link>
      </nav>

      <section className="mx-auto mt-4 w-full max-w-[1920px] opacity-100 rotate-0">
        <div className={`${shell} flex h-[276px] flex-col gap-[40px] opacity-100 rotate-0`}>
          <div>
            <p className="m-0 inline-flex items-center gap-[0.35rem] text-[0.66rem] text-[#6e7d80]">
              <span className="text-[0.7rem] leading-none text-[#123f47]" aria-hidden="true">•</span>
              <span className="inline-flex h-[24px] w-[78px] items-center text-[16px] font-normal leading-[24px] opacity-100 rotate-0 text-[#4F5253]" style={{ fontFamily: "Inter, sans-serif" }}>
                Showcase
              </span>
            </p>

            <div className="mt-[0.32rem] flex items-start justify-between">
              <h2 className="m-0 h-[144px] w-[708px] text-[#123f47] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="block text-[64px] font-normal leading-[72px] tracking-[-1.4px]">Selected</span>
                <strong className="block text-[64px] font-semibold leading-[72px] tracking-[-1.4px] text-[#0a2f38]">Product Work</strong>
              </h2>
              <p className="m-0 h-[56px] w-[217px] text-right text-[20px] font-normal leading-[28px] text-[#5f7074] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
                Not everything is <strong className="font-bold">visible at first glance</strong>
              </p>
            </div>
          </div>

          <p className="m-0 h-[28px] w-full max-w-[1280px] text-[20px] font-normal leading-[28px] text-[#4F5253] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
            A collection of product work, explorations, and design decisions across UI, crypto, and digital experiences.
          </p>
        </div>
      </section>

      <section className={`${shell} mt-6 mb-12`} aria-label="Selected project work grid">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.slug}-${index}`}
              slug="token-landing"
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
