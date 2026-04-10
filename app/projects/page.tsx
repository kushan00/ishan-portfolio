import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import Header from "../components/Header";

export default function ProjectsPage() {
  const cardSubtitle = "Designing a Crypto Wallet for Real Users";
  const cardDescription =
    "Simplifying onboarding, transactions, and portfolio tracking for everyday users.";

  const projects = [
    {
      slug: "whalechance",
      title: "WHALECHANCE",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-200 via-zinc-100 to-zinc-300",
    },
    {
      slug: "casino-xp",
      title: "CASINO XP",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-red-900 via-fuchsia-700 to-amber-400",
    },
    {
      slug: "token-landing",
      title: "TOKEN LANDING",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-950 via-zinc-900 to-zinc-700",
    },
    {
      slug: "data-console",
      title: "DATA CONSOLE",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-zinc-900 via-slate-800 to-slate-600",
    },
    {
      slug: "analytics-hub",
      title: "ANALYTICS HUB",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-purple-900 via-purple-700 to-blue-700",
    },
    {
      slug: "mobile-banking",
      title: "MOBILE BANKING",
      subtitle: cardSubtitle,
      description: cardDescription,
      gradient: "from-emerald-900 via-emerald-700 to-teal-700",
    },
  ];

  return (
    <main className="portfolio-page">
      <Header />

      <nav className="project-breadcrumb reveal-up delay-1">
        <Link href="/" className="breadcrumb-back">
          ← Home
        </Link>
      </nav>

      <section className="showcase-head projects-page-head reveal-up delay-2">
        <p className="showcase-label">
          <span className="showcase-bullet" aria-hidden="true">•</span>
          Showcase
        </p>
        <div className="showcase-row projects-title-row">
          <h2>
            <span className="projects-selected-light">Selected</span>
            <br />
            <strong>Product Work</strong>
          </h2>
          <p className="projects-side-note">Not everything is visible at first glance</p>
        </div>
        <p className="projects-intro">A collection of product work, explorations, and design decisions across UI, crypto, and digital experiences.</p>
      </section>

      <section className="reveal-up delay-3 projects-grid-section">
        <div className="projects-grid-shell">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                slug={project.slug}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                gradient={project.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="contact-footer reveal-up delay-4" aria-label="Contact footer">
        <div className="contact-footer-inner">
          <div>
            <a className="contact-mail" href="mailto:ishankavinda88@gmail.com">
              ishankavinda88@gmail.com
            </a>
            <p className="copyright">&copy; 2023 All Right Reserved by Loopcore_studio</p>
          </div>

          <div className="socials" aria-label="Social links">
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Behance">be</a>
            <a href="#" aria-label="Dribbble">dr</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
