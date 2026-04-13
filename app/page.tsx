import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LazyProjectVideo from "./components/LazyProjectVideo";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

export default function Home() {
  const shell = "mx-auto w-[min(1280px,calc(100%-2rem))]";

  const works = [
    { title: "Analytics Command Center", videoSrc: "/sample3.mp4" },
    { title: "Workspace Planner", videoSrc: "/sample4.mp4" },
    { title: "Mobile Banking Flow", videoSrc: "/sample3.mp4" },
    { title: "SaaS Project Tracker", videoSrc: "/sample4.mp4" },
    { title: "Fitness Product Suite", videoSrc: "/sample3.mp4" },
  ];
  const scrollingWorks = [...works, ...works];

  const projects = [
    { title: "prjectName", subtitle: "Designing a Crypto Wallet for Real Users", description: "Simplifying onboarding, transactions, and portfolio tracking for everyday users entering crypto.", gradient: "from-[#000000] via-[#000000] to-[#000000]", videoSrc: "/sample1.mp4" },
    { title: "CASINO XP", subtitle: "Building a High-Engagement Casino Experience", description: "Designing fast, realtime game flows with clear feedback loops to increase retention.", gradient: "from-red-900 via-fuchsia-700 to-amber-400", videoSrc: "/sample2.mp4" },
    { title: "TOKEN LANDING", subtitle: "Crafting High-Converting Token Landing Pages", description: "Creating visually engaging, performance-driven websites that turn visitors into community members.", gradient: "from-zinc-950 via-zinc-900 to-zinc-700", videoSrc: "/sample1.mp4" },
    { title: "DATA CONSOLE", subtitle: "Designing Data-Heavy Dashboards That Make Sense", description: "Turning complex data into clear, actionable insights with structured layouts and smart hierarchy.", gradient: "from-zinc-900 via-slate-800 to-slate-600", videoSrc: "/sample2.mp4" },
  ];
  const projectColumns = [
    [projects[0], projects[2]],
    [projects[1], projects[3]],
  ];

  const experiences = [
    { year: "2025 - Present", role: "UX Designer", company: "Botcalm (PVT) LTD" },
    { year: "2025 - 2026", role: "Creative Consultant", company: "Hatch Works" },
    { year: "2024 - 2026", role: "Crypto Designer", company: "Eth LLC" },
    { year: "2023 - 2024", role: "Graphic Designer", company: "Ford Australia" },
    { year: "2022 - 2023", role: "Creative Designer", company: "Mango Media" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#eceeed] text-[#0d3b46]">
      <Header />

      <section className="mx-auto h-[809px] w-full max-w-[1920px] opacity-100 rotate-0" aria-label="Hero section">
        <div className="mx-auto mt-[144px] flex h-[665px] w-[min(1280px,calc(100%-2rem))] justify-between opacity-100 rotate-0">
        <div className="max-w-[565px]">
          <h1 className="m-0 h-[245px] w-[565px] text-[#053b45] opacity-100 rotate-0">
            <span className="block font-[var(--font-signature)] text-[150px] font-normal leading-[127.2px] tracking-[-1.4px]" style={{ fontStyle: "italic" }}>
              Ishan
            </span>
            <strong className="block font-[var(--font-name)] text-[120px] font-normal leading-[127.2px] tracking-[-1.4px] text-[#053b45]">Kavinda</strong>
          </h1>

          <p className="mt-6 h-[56px] w-[565px] text-[20px] font-normal leading-[28px] text-[#586869] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
            I design digital products that are <strong className="text-[20px] font-bold leading-[28px] text-[#283f42]" style={{ fontFamily: "Inter, sans-serif" }}>simple, clear,</strong>
            <br />
            <strong className="text-[20px] font-bold leading-[28px] text-[#283f42]" style={{ fontFamily: "Inter, sans-serif" }}> &amp; effective</strong>
          </p>

          <div className="mt-5 flex h-[52px] w-[328px] gap-[12px] opacity-100 rotate-0">
            <Link href="/projects" className="inline-flex h-[52px] w-[158px] items-center justify-center rounded-[16px] border border-[#0f3a44] bg-[#0e1113] px-[24px] py-[14px] no-underline opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="inline-flex h-[24px] w-[110px] items-center justify-center text-center text-[16px] font-medium leading-[24px] text-[#f2f4f5] opacity-100 rotate-0">
                View My Work
              </span>
            </Link>
            <button type="button" className="inline-flex h-[52px] w-[158px] items-center justify-center rounded-[16px] border border-[#002B31] bg-white px-[24px] py-[14px] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="inline-flex h-[24px] w-[71px] items-center justify-center text-center text-[16px] font-medium leading-[24px] text-[#002B31]">
                Let&apos;s Talk
              </span>
            </button>
          </div>

          <p className="mt-10 h-[48px] w-[390px] text-[16px] font-normal leading-[24px] text-[#677474] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
            Helping <strong className="text-[16px] font-bold leading-[24px] text-[#1f383d]" style={{ fontFamily: "Inter, sans-serif" }}>startups and businesses</strong> turn ideas into <br />
            <strong className="text-[16px] font-bold leading-[24px] text-[#1f383d]" style={{ fontFamily: "Inter, sans-serif" }}>clean, usable experiences.</strong>
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[0.65rem] self-start">
          <Image src="/pic1.jpg" alt="Ishan Kavinda portrait" fill loading="lazy" sizes="(max-width: 820px) 100vw, 360px" className="object-cover object-center" />
        </div>
        </div>
      </section>

      <section className="mx-auto h-[736px] w-full max-w-[1920px] opacity-100 rotate-0" aria-label="Selected Product Work section">
        <div className="mx-auto flex h-[160px] w-[min(1280px,calc(100%-2rem))] items-start justify-between pt-[24px] opacity-100 rotate-0">
          <div>
            <p className="m-0 inline-flex items-center gap-[0.35rem] text-[#0f1416]">
              <span className="text-[0.7rem] leading-none" aria-hidden="true">•</span>
              <span className="inline-flex h-[24px] w-[78px] items-center text-[16px] font-normal leading-[24px] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
                Showcase
              </span>
            </p>
            <h2 className="m-0 h-[124px] w-[364px] text-[#123f47] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
              <strong className="block text-[54px] font-semibold leading-[62px] tracking-[0%]">Selected</strong>
              <span className="block text-[54px] font-normal leading-[62px] tracking-[0%]">Product Work</span>
            </h2>
          </div>
          <div className="pt-[14px]">
            <Link href="/projects" className="rounded-[12px] border border-[#262f33] px-[1.35rem] py-[0.58rem] text-[0.9rem] leading-none text-[#151b1e] no-underline">
              View Project -&gt;
            </Link>
          </div>
        </div>

        <div
          className="mobileCarousel mx-auto mt-[128px] h-[425px] w-full max-w-[1920px] opacity-100 rotate-0"
          aria-label="Selected work gallery"
        >
          <div className="mobileTrack h-full gap-6 px-4">
            {scrollingWorks.map((work, index) => (
              <Link key={`${work.title}-${index}`} href="/projects/token-landing" aria-label={work.title} className="block h-full w-[380px] shrink-0 cursor-pointer">
                <article className="h-full w-full">
                  <div className="relative h-full overflow-hidden rounded-[16px] bg-[#dfe5e6]">
                    <LazyProjectVideo src={work.videoSrc} className="absolute inset-0" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-3 h-[606px] w-full max-w-[1920px] bg-[#011214] opacity-100 rotate-0" aria-label="Process section">
        <div className="mx-auto flex h-[486px] w-[min(1340px,calc(100%-2rem))] flex-col justify-between pt-[60px] opacity-100 rotate-0">
          <div className="flex h-[132px] w-[514px] flex-col gap-[12px] opacity-100 rotate-0">
            <p
              className="m-0 inline-flex h-[24px] w-auto items-center gap-[0.42rem] whitespace-nowrap text-[16px] font-normal leading-[24px] tracking-[0] capitalize text-[#d2dee1]"
              style={{ fontFamily: "Inter, sans-serif", fontStyle: "normal" }}
            >
              <span className="h-[7px] w-[7px] rounded-full bg-[#e6ecee]" aria-hidden="true" />
              My Process
            </p>
            <p className="m-0 h-[96px] w-[514px] text-[24px] font-medium leading-[32px] text-[#e6eef0]" style={{ fontFamily: "Inter, sans-serif" }}>
              No unnecessary steps.
              <br />A simple process for complex products.
              <br />Focused on clarity, usability, and real impact.
            </p>
          </div>

          <div className="grid h-[238px] w-[min(1340px,calc(100%-2rem))] gap-[24px] rounded-[16px] bg-[#ffffff] px-[30px] pt-[36px] pb-[36px] opacity-100 rotate-0 md:grid-cols-4">
            {[
              ["⌂", "Understand the Problem", "I start by understanding the user, the business, and the real problem to solve. Clear direction makes everything easier."],
              ["✣", "Simplify the Experience", "I break down complex flows into simple and clear screens, making each product easy to use and understand."],
              ["◌", "Design the Interface", "I design clean, modern interfaces that feel fast and smooth, using a structure my users can expect."],
              ["◎", "Test & Improve", "I refine the design based on feedback, ensuring the final product is functional for both users and business goals."],
            ].map(([icon, title, copy], index) => (
              <article
                key={title}
                className="flex h-full w-full max-w-[302px] flex-col gap-[12px]"
              >
                <span className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[8px] border-[1.25px] border-[#002B31] bg-white text-[0.9rem] text-[#002B31]" aria-hidden="true">
                  {index === 0 ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M2 6.3L7 2L12 6.3V12H2V6.3Z" stroke="#002B31" strokeWidth="1.25" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    icon
                  )}
                </span>
                <h4
                  className={index === 0 ? "m-0 h-[24px] w-[187px] text-[16px] font-medium leading-[24px] text-[#002B31]" : "m-0 text-[16px] font-medium leading-[24px] text-[#002B31]"}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {title}
                </h4>
                <p
                  className={index === 0 ? "m-0 h-[66px] w-[302px] text-[14px] font-normal leading-[22px] text-[#002B31]" : "m-0 text-[14px] font-normal leading-[22px] text-[#002B31]"}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] py-10 opacity-100 rotate-0" aria-label="Project Breakdown section">
        <div className={`${shell} grid gap-6 md:grid-cols-[220px_1fr] md:items-start`}>
          <div className="md:sticky md:top-24 md:self-start">
            <p
              className="m-0 inline-flex h-[24px] w-[88px] items-center whitespace-nowrap text-[14px] font-normal leading-[24px] tracking-[0] text-[#738487]"
              style={{ fontFamily: "Inter, sans-serif", fontStyle: "normal" }}
            >
              <span className="mr-[6px]" aria-hidden="true">•</span>
              Case Studies
            </p>
            <h3 className="mt-1 text-[2.7rem] leading-[0.9] text-[#133f47]">
              <strong>Project</strong> Breakdown
            </h3>
          </div>

          <div className="grid h-[1015px] grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2">
            {[0, 1].map((column) => (
              <div key={column} className="projectColumn">
                <div className={`projectColumnTrack ${column === 1 ? "projectColumnTrackReverse" : ""}`}>
                  {[...projectColumns[column], ...projectColumns[column]].map((project, index) => {
                    const isPrimaryCard = project.title === "prjectName";

                    return (
                      <article key={`${column}-${project.title}-${index}`} className="w-full max-w-[442px] rounded-[14px]">
                        <div className={`relative h-[287px] overflow-hidden rounded-[14px] bg-gradient-to-br ${project.gradient} shadow-[0_2px_12px_rgba(0,0,0,0.15)]`}>
                          <LazyProjectVideo src={project.videoSrc} className="absolute inset-0" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                          <p className="absolute bottom-4 left-4 text-[2rem] font-semibold tracking-[0.01em] text-white/90">{project.title}</p>
                        </div>

                        <div className="mt-2">
                          <h4
                            className={isPrimaryCard ? "m-0 flex h-[64px] w-[442px] items-center text-[24px] font-normal leading-[32px] text-black" : "m-0 text-[24px] font-normal leading-[32px] text-[#133f47]"}
                            style={{ fontFamily: "Inter, sans-serif", fontStyle: "normal" }}
                          >
                            {project.subtitle}
                          </h4>
                          <p
                            className={isPrimaryCard ? "m-0 h-[44px] w-[442px] text-[14px] font-normal leading-[22px] text-black" : "m-0 mt-1 text-[14px] font-normal leading-[22px] text-[#617477]"}
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto h-[732px] w-full max-w-[1920px] bg-[#011214] opacity-100 rotate-0" aria-label="Where I have worked">
        <div className={`${shell} grid h-full content-start gap-8 pt-[24px] md:grid-cols-[1fr_1.9fr] md:items-start`}>
          <div className="flex h-[160px] w-[364px] flex-col gap-[12px]">
            <p className="m-0 inline-flex h-[24px] w-[84px] items-center gap-[0.4rem] text-[14px] font-normal leading-[24px] text-[#9eb7bc]" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="h-[6px] w-[6px] rounded-full bg-[#dbe8eb]" aria-hidden="true" />
              Experience
            </p>
            <h3 className="m-0 h-[124px] w-[364px] text-[#e6f2f4] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
              <strong className="block text-[54px] font-semibold leading-[62px] tracking-[0%]">Where</strong>
              <span className="block text-[54px] font-normal leading-[62px] tracking-[0%]">I&apos;ve Worked</span>
            </h3>
          </div>

          <div className="w-full max-w-[847px]">
            {experiences.map((item) => (
              <article key={item.company + item.year} className="flex h-[124px] items-center justify-between border-b border-[#163840] border-b-[1px] py-[30px]">
                <div>
                  <p className="m-0 text-[24px] font-medium leading-[32px] text-[#e4f1f4]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.company}
                  </p>
                  <p className="m-0 mt-[0.14rem] h-[22px] w-[84px] text-[14px] font-normal leading-[22px] tracking-[0%] text-[#7f9ca2]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.year}
                  </p>
                </div>
                <p className="m-0 text-[24px] font-medium leading-[32px] text-[#dce9eb]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="mx-auto h-[329px] w-full max-w-[1920px] bg-[#F8F9F7] opacity-100 rotate-0" aria-label="Contact call to action">
        <div className="mx-auto flex h-full w-[min(1350px,calc(100%-2rem))] flex-col items-center justify-center text-center opacity-100 rotate-0">
          <p
            className="m-0 inline-flex h-[24px] w-[139px] items-center justify-center whitespace-nowrap text-[14px] font-normal leading-[24px] tracking-[0] text-[#011214]"
            style={{ fontFamily: "Inter, sans-serif", fontStyle: "normal" }}
          >
            <span className="mr-[6px]" aria-hidden="true">•</span>
            Ready When You Are
          </p>
          <h3
            className="mt-[0.55rem] h-[62px] w-[min(1350px,100%)] text-[54px] font-medium leading-[62px] text-[#011214]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Let&apos;s build something simple and effective together.
          </h3>
          <a
            className="mt-[0.75rem] inline-flex h-[52px] w-[134px] items-center justify-center rounded-[16px] bg-[#0b0f11] px-[24px] py-[14px] text-[14px] font-medium leading-[24px] text-[#f0f3f4] no-underline opacity-100 rotate-0"
            style={{ fontFamily: "Inter, sans-serif" }}
            href="mailto:ishan.kavinda@example.com"
          >
            Book a Call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
