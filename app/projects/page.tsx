import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const cardSubtitle = "Designing a Crypto Wallet for Real Users";
  const cardDescription =
    "Simplifying onboarding, transactions, and portfolio tracking for everyday users.";
  const sampleProjectImage =
    "https://img.freepik.com/free-photo/project-management-planning-development-message-box-notification-graphic_53876-123902.jpg";

  const projects = [
    {
      slug: "prjectName",
      title: "prjectName",
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
                imageUrl={sampleProjectImage}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
