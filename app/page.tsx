import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestimonialsCarousel from "@/app/components/TestimonialsCarousel";

export default function Home() {
  const shell = "mx-auto w-[min(980px,calc(100%-0.4rem))]";

  const works = [
    { title: "Analytics Command Center", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop" },
    { title: "Workspace Planner", imageUrl: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=700&fit=crop" },
    { title: "Mobile Banking Flow", imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop" },
    { title: "SaaS Project Tracker", imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=700&fit=crop" },
    { title: "Fitness Product Suite", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=700&fit=crop" },
  ];

  const projects = [
    { title: "prjectName", subtitle: "Designing a Crypto Wallet for Real Users", description: "Simplifying wallet onboarding, portfolio tracking for everyday crypto users.", gradient: "from-zinc-200 via-zinc-100 to-zinc-300" },
    { title: "CASINO XP", subtitle: "Building a High-Engagement Casino Experience", description: "Designing fast, realtime game flows with clear feedback loops to increase retention.", gradient: "from-red-900 via-fuchsia-700 to-amber-400" },
    { title: "TOKEN LANDING", subtitle: "Crafting High-Converting Token Landing Pages", description: "Creating visually engaging, performance-driven websites that turn visitors into community members.", gradient: "from-zinc-950 via-zinc-900 to-zinc-700" },
    { title: "DATA CONSOLE", subtitle: "Designing Data-Heavy Dashboards That Make Sense", description: "Turning complex data into clear, actionable insights with structured layouts and smart hierarchy.", gradient: "from-zinc-900 via-slate-800 to-slate-600" },
  ];

  const experiences = [
    { year: "2021 - present", role: "UX Designer", company: "Botcalm (PVT) LTD" },
    { year: "2023 - 2026", role: "Creative Consultant", company: "Hatch Works" },
    { year: "2024 - 2026", role: "Crypto Designer", company: "Eth LLC" },
    { year: "2023 - 2024", role: "Graphic Designer", company: "Ford Australia" },
    { year: "2022 - 2023", role: "Creative Designer", company: "Mango Media" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#eceeed] text-[#0d3b46]">
      <Header />

      <section className={`${shell} mt-8 grid gap-6 md:grid-cols-[minmax(360px,1fr)_minmax(280px,360px)] md:items-center`}>
        <div>
          <h1 className="m-0 leading-[0.88] text-[#0a4a58]">
            <span className="block font-[var(--font-display)] text-[clamp(3rem,8.2vw,6rem)] font-normal">Ishan</span>
            <strong className="block font-[var(--font-body)] text-[clamp(2.7rem,5.8vw,4.75rem)] font-medium tracking-[-0.02em] text-[#083a44]">Kavinda</strong>
          </h1>

          <p className="mt-6 max-w-[30ch] text-[0.82rem] leading-[1.5] text-[#586869]">
            I design digital products that are <strong className="font-extrabold text-[#283f42]">simple, clear, &amp; effective.</strong>
          </p>

          <div className="mt-[1.1rem] flex flex-wrap gap-[0.45rem]">
            <Link href="/projects" className="rounded-[6px] border border-[#0f3a44] bg-[#0e1113] px-[0.76rem] py-[0.37rem] text-[0.6rem] font-semibold text-[#f2f4f5] no-underline">
              View My Work
            </Link>
            <button type="button" className="rounded-[6px] border border-[#0f3a44] bg-transparent px-[0.76rem] py-[0.37rem] text-[0.6rem] font-semibold text-[#294b51]">
              Let&apos;s Talk
            </button>
          </div>

          <p className="mt-[2.2rem] max-w-[32ch] text-[0.57rem] leading-[1.45] text-[#677474]">
            Helping <strong className="font-extrabold text-[#1f383d]">startups and businesses</strong> turn ideas into <br />
            <strong className="font-extrabold text-[#1f383d]">clean, usable experiences.</strong>
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[0.65rem] justify-self-start md:justify-self-end">
          <Image src="/pic1.jpg" alt="Ishan Kavinda portrait" fill loading="lazy" sizes="(max-width: 820px) 100vw, 360px" className="object-cover object-center" />
        </div>
      </section>

      <section className={`${shell} mt-5`}>
        <p className="m-0 inline-flex items-center gap-[0.35rem] text-[0.6rem] text-[#0f1416]">
          <span className="text-[0.7rem] leading-none" aria-hidden="true">•</span>
          Showcase
        </p>
        <div className="mt-[0.32rem] flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start">
          <h2 className="m-0 text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1] tracking-[-0.01em] text-[#123f47]">
            <strong className="font-semibold">Selected</strong>
            <br />
            <span className="font-medium">Product Work</span>
          </h2>
          <Link href="/projects" className="rounded-[12px] border border-[#262f33] px-[1.35rem] py-[0.58rem] text-[0.9rem] leading-none text-[#151b1e] no-underline">
            View Project -&gt;
          </Link>
        </div>
      </section>

      <section className={`${shell} mt-4 flex gap-[0.9rem] overflow-x-auto pb-[0.55rem]`} aria-label="Selected work gallery">
        {works.map((work) => (
          <article key={work.title} aria-label={work.title} className="w-[clamp(280px,29vw,360px)] shrink-0">
            <div className="relative h-[clamp(170px,20vw,230px)] overflow-hidden rounded-[0.78rem] bg-[#dfe5e6]">
              <Image src={work.imageUrl} alt={work.title} fill loading="lazy" quality={85} sizes="(max-width: 640px) 90vw, 360px" className="object-cover object-center" />
            </div>
          </article>
        ))}
      </section>

      <section className="mt-3 w-full bg-[#00181c] py-[2.55rem]" aria-label="Process section">
        <div className={shell}>
          <p className="m-0 inline-flex items-center gap-[0.42rem] text-[0.72rem] text-[#d2dee1]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#e6ecee]" aria-hidden="true" />
            My Process
          </p>
          <p className="mt-[0.55rem] max-w-[46ch] text-[2.06rem] leading-[1.2] text-[#e6eef0]">
            No unnecessary steps.
            <br />A simple process for complex products.
            <br />Focused on clarity, usability, and real impact.
          </p>

          <div className="mt-[2.35rem] grid overflow-hidden rounded-[0.65rem] border border-[#d3dbdc] bg-[#eff2f2] md:grid-cols-4">
            {[
              ["⌂", "Understand the Problem", "I start by understanding the user, the business, and the real problem to solve. Clear direction makes everything easier."],
              ["✣", "Simplify the Experience", "I break down complex flows into simple and clear screens, making each product easy to use and understand."],
              ["◌", "Design the Interface", "I design clean, modern interfaces that feel fast and smooth, using a structure my users can expect."],
              ["◎", "Test & Improve", "I refine the design based on feedback, ensuring the final product is functional for both users and business goals."],
            ].map(([icon, title, copy], index) => (
              <article
                key={title}
                className={`min-h-[148px] p-4 ${index < 3 ? "border-b border-[#d3dbdc] md:border-b-0 md:border-r" : ""}`}
              >
                <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[4px] bg-[#e4eaea] text-[0.66rem] text-[#60777c]" aria-hidden="true">
                  {icon}
                </span>
                <h4 className="mt-[0.62rem] text-[0.9rem] font-bold text-[#1f3f46]">{title}</h4>
                <p className="mt-[0.66rem] text-[0.8rem] leading-[1.45] text-[#5e7174]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${shell} mt-10`}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[220px_1fr] md:items-start">
          <div>
            <p className="text-[0.56rem] text-[#738487]">
              <span aria-hidden="true">• </span>
              Case Studies
            </p>
            <h3 className="mt-1 text-[2.7rem] leading-[0.9] text-[#133f47]">
              <strong>Project</strong> Breakdown
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[14px]">
                <div className={`relative aspect-[4/5] overflow-hidden rounded-[14px] bg-gradient-to-br ${project.gradient} shadow-[0_2px_12px_rgba(0,0,0,0.15)]`}>
                  <Image src="/project.jpg" alt={project.title} fill loading="lazy" quality={75} sizes="(max-width: 640px) 100vw, 50vw" className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-[2rem] font-semibold tracking-[0.01em] text-white/90">{project.title}</p>
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

      <section className="mt-6 w-full bg-[#00181d] py-[1.55rem]" aria-label="Where I have worked">
        <div className={`${shell} grid gap-8 md:grid-cols-[1fr_1.9fr]`}>
          <div>
            <p className="m-0 inline-flex items-center gap-[0.4rem] text-[0.58rem] text-[#9eb7bc]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#dbe8eb]" aria-hidden="true" />
              Experience
            </p>
            <h3 className="mt-[0.45rem] text-[2.95rem] leading-[0.9] tracking-[-0.01em] text-[#e6f2f4]">
              <strong>Where</strong>
              <br />
              I&apos;ve Worked
            </h3>
          </div>

          <div>
            {experiences.map((item) => (
              <article key={item.company + item.year} className="flex flex-col gap-1 border-b border-[#163840] py-[0.58rem] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="m-0 text-[0.86rem] font-medium text-[#e4f1f4]">{item.company}</p>
                  <p className="mt-[0.14rem] text-[0.46rem] uppercase tracking-[0.02em] text-[#7f9ca2]">{item.year}</p>
                </div>
                <p className="m-0 text-[0.78rem] text-[#dce9eb] sm:text-right">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eceeed] py-7" aria-label="Testimonials">
        <div className={`${shell} grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr] md:items-start`}>
          <div>
            <p className="m-0 inline-flex items-center gap-[0.36rem] text-[0.58rem] text-[#66797d]">
              <span aria-hidden="true">• </span>
              Testimonials
            </p>
            <h3 className="mt-[0.4rem] text-[2.8rem] leading-[0.95] tracking-[-0.01em] text-[#123f47]">
              <strong>What</strong>
              <br />
              People Say
            </h3>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="w-full border-t border-[#d2d8d8] bg-[#e4e6e6] py-[1.28rem]" aria-label="Contact call to action">
        <div className={`${shell} text-center`}>
          <p className="m-0 inline-flex items-center gap-[0.35rem] text-[0.56rem] text-[#6f8084]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#21363a]" aria-hidden="true" />
            Ready When You Are
          </p>
          <h3 className="mt-[0.55rem] text-[3.35rem] leading-[1.04] tracking-[-0.012em] text-[#14252a]">
            Let&apos;s build something simple and effective together.
          </h3>
          <a className="mt-[0.75rem] inline-block rounded-full bg-[#0b0f11] px-[0.66rem] py-[0.3rem] text-[0.5rem] text-[#f0f3f4] no-underline" href="mailto:ishan.kavinda@example.com">
            Book a Call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
