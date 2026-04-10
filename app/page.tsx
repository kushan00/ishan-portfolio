import Image from "next/image";
import Link from "next/link";
import HeroText from "./components/HeroText";
import TestimonialsCarousel from "@/app/components/TestimonialsCarousel";

export default function Home() {
  const works = [
    "Analytics Command Center",
    "Workspace Planner",
    "Mobile Banking Flow",
    "SaaS Project Tracker",
    "Fitness Product Suite",
  ];

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
  ];

  const experiences = [
    { year: "2021 - present", role: "UX Designer", company: "Botcalm (PVT) LTD" },
    { year: "2023 - 2026", role: "Creative Consultant", company: "Hatch Works" },
    { year: "2024 - 2026", role: "Crypto Designer", company: "Eth LLC" },
    { year: "2023 - 2024", role: "Graphic Designer", company: "Ford Australia" },
    { year: "2022 - 2023", role: "Creative Designer", company: "Mango Media" },
  ];

  return (
    <main className="portfolio-page">
      <header className="top-nav reveal-up">
        <p className="brand">Ishan.</p>
        <div className="top-actions">
          <button type="button" aria-label="Open Behance" className="icon-dot" />
          <button type="button" aria-label="Open Dribbble" className="icon-dot" />
          <span>Let&apos;s Work Together</span>
          <a href="mailto:ishan.kavinda@example.com">Copy Email</a>
        </div>
      </header>

      <section className="hero reveal-up delay-1">
        <div>
          <h1 className="hero-name">
            <span>Ishan</span>
            <strong>Kavinda</strong>
          </h1>

          <p className="hero-copy">
            I design digital products that are simple, clear, & effective.
          </p>

          <div className="hero-buttons">
            <Link href="/projects">
              <button type="button" className="btn-primary">
                View My Work
              </button>
            </Link>
            <button type="button" className="btn-outline">
              Let&apos;s Talk
            </button>
          </div>

          <p className="hero-note">
            Helping <strong>startups and businesses</strong> turn ideas into <br />
            <strong>clean, usable experiences.</strong>
          </p>
        </div>

        <div className="profile-photo" aria-label="Ishan Kavinda portrait">
          <Image
            src="/pic1.jpg"
            alt="Ishan Kavinda portrait"
            fill
            loading="lazy"
            sizes="(max-width: 820px) 100vw, 360px"
            className="profile-photo-img"
          />
        </div>
      </section>

      <section className="showcase-head reveal-up delay-2">
        <p className="showcase-label">
          <span className="showcase-bullet" aria-hidden="true">•</span>
          Showcase
        </p>
        <div className="showcase-row">
          <h2>
            <strong>Selected</strong>
            <br />
            Product Work
          </h2>
          <button type="button" className="btn-outline slim">
            View Project -&gt;
          </button>
        </div>
      </section>

      <section className="showcase-strip reveal-up delay-3" aria-label="Selected work gallery">
        {works.map((title) => (
          <article key={title} className="work-item" aria-label={title}>
            <div className="work-image" />
          </article>
        ))}
      </section>

      <section className="process-band reveal-up delay-3" aria-label="Process section">
        <div className="process-inner">
          <p className="process-kicker">
            <span className="process-dot" aria-hidden="true" />
            My Process
          </p>
          <p className="process-title">
            No unnecessary steps.
            <br />A simple process for complex products.
            <br />Focused on clarity, usability, and real impact.
          </p>

          <div className="process-grid">
            <article className="process-item">
              <span className="process-icon" aria-hidden="true">⌂</span>
              <h4>Understand the Problem</h4>
              <p>
                I start by understanding the user, the business, and the real problem to solve.
                Clear direction makes everything easier.
              </p>
            </article>

            <article className="process-item">
              <span className="process-icon" aria-hidden="true">✣</span>
              <h4>Simplify the Experience</h4>
              <p>
                I break down complex flows into simple and clear screens, making each product easy
                to use and understand.
              </p>
            </article>

            <article className="process-item">
              <span className="process-icon" aria-hidden="true">◌</span>
              <h4>Design the Interface</h4>
              <p>
                I design clean, modern interfaces that feel fast and smooth, using a structure my
                users can expect.
              </p>
            </article>

            <article className="process-item">
              <span className="process-icon" aria-hidden="true">◎</span>
              <h4>Test &amp; Improve</h4>
              <p>
                I refine the design based on feedback, ensuring the final product is functional for
                both users and business goals.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="reveal-up delay-3 mt-10 px-[clamp(0.2rem,8vw,8rem)]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[220px_1fr] md:items-start">
          <div>
            <p className="text-[0.56rem] text-[#738487]">
              <span aria-hidden="true">• </span>
              Case Studies
            </p>
            <h3 className="mt-1 text-[2.7rem] leading-[0.9] text-[#133f47]"><strong>Project</strong> Breakdown</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[14px]">
                <div
                  className={`aspect-[4/5] rounded-[14px] bg-gradient-to-br ${project.gradient} shadow-[0_2px_12px_rgba(0,0,0,0.15)]`}
                >
                  <div className="flex h-full items-end rounded-[14px] bg-gradient-to-t from-black/30 via-transparent to-transparent p-4">
                    <p className="text-[2rem] font-semibold tracking-[0.01em] text-white/90">{project.title}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-[1rem] font-semibold leading-tight text-[#173f46]">{project.subtitle}</h4>
                  <p className="mt-1 text-[0.68rem] leading-relaxed text-[#617477]">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-band reveal-up delay-4" aria-label="Where I have worked">
        <div className="experience-inner">
          <div className="experience-head">
            <p className="experience-kicker">
              <span className="experience-dot" aria-hidden="true" />
              Experience
            </p>
            <h3>
              <strong>Where</strong>
              <br />
              I&apos;ve Worked
            </h3>
          </div>

          <div className="experience-table">
            {experiences.map((item) => (
              <article key={item.company + item.year} className="experience-row">
                <div>
                  <p className="experience-company">{item.company}</p>
                  <p className="experience-year">{item.year}</p>
                </div>
                <p className="experience-role">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-band reveal-up delay-4" aria-label="Testimonials">
        <div className="testimonials-inner">
          <div className="testimonials-head">
            <p className="testimonials-kicker">
              <span aria-hidden="true">• </span>
              Testimonials
            </p>
            <h3>
              <strong>What</strong>
              <br />
              People Say
            </h3>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="cta-band reveal-up delay-4" aria-label="Contact call to action">
        <div className="cta-inner">
          <p className="cta-kicker">
            <span className="cta-dot" aria-hidden="true" />
            Ready When You Are
          </p>
          <h3>Let&apos;s build something simple and effective together.</h3>
          <a href="mailto:ishan.kavinda@example.com">Book a Call</a>
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
