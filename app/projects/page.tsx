import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "WHALECHANCE",
      subtitle: "Designing a Crypto Wallet for Real Users",
      description:
        "Simplifying wallet onboarding, portfolio tracking for everyday crypto users.",
      gradient: "from-zinc-200 via-zinc-100 to-zinc-300",
    },
    {
      title: "CASINO XP",
      subtitle: "Building a High-Engagement Casino Experience",
      description:
        "Designing fast, realtime game flows with clear feedback loops to increase retention.",
      gradient: "from-red-900 via-fuchsia-700 to-amber-400",
    },
    {
      title: "TOKEN LANDING",
      subtitle: "Crafting High-Converting Token Landing Pages",
      description:
        "Creating visually engaging, performance-driven websites that turn visitors into community members.",
      gradient: "from-zinc-950 via-zinc-900 to-zinc-700",
    },
    {
      title: "DATA CONSOLE",
      subtitle: "Designing Data-Heavy Dashboards That Make Sense",
      description:
        "Turning complex data into clear, actionable insights with structured layouts and smart hierarchy.",
      gradient: "from-zinc-900 via-slate-800 to-slate-600",
    },
    {
      title: "ANALYTICS HUB",
      subtitle: "Command Center for Real-Time Data",
      description:
        "Building intuitive analytics dashboards that empower teams to make data-driven decisions quickly.",
      gradient: "from-purple-900 via-purple-700 to-blue-700",
    },
    {
      title: "MOBILE BANKING",
      subtitle: "Seamless Financial Experience on Mobile",
      description:
        "Designing secure, user-friendly banking flows that make financial management accessible to everyone.",
      gradient: "from-emerald-900 via-emerald-700 to-teal-700",
    },
  ];

  return (
    <main className="portfolio-page">
      <header className="top-nav reveal-up">
        <Link href="/">
          <p className="brand">Ishan.</p>
        </Link>
        <div className="top-actions">
          <button type="button" aria-label="Open Behance" className="icon-dot" />
          <button type="button" aria-label="Open Dribbble" className="icon-dot" />
          <span>Let&apos;s Work Together</span>
          <a href="mailto:ishan.kavinda@example.com">Copy Email</a>
        </div>
      </header>

      <section className="showcase-head reveal-up delay-2">
        <p className="showcase-label">Projects</p>
        <div className="showcase-row">
          <h2>
            <strong>Selected</strong>
            <br />
            Product Work
          </h2>
        </div>
      </section>

      <section className="reveal-up delay-3 mt-10 px-[clamp(0.2rem,8vw,8rem)]">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
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
