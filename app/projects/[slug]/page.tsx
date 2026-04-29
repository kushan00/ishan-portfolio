import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const projects = [
  {
    slug: 'prjectName',
    title: 'Whale Change',
    selectedTitle: 'WHALE CHANGE',
    subtitle: 'Designing a Crypto Wallet for Real Users',
    description:
      'Simplifying wallet onboarding and portfolio tracking for everyday crypto users.',
    fullDescription:
      'Whale Change is a crypto wallet case study focused on simplifying onboarding, clarifying transactions, and making portfolio tracking accessible for new users. The work includes a pared-back onboarding flow, clear hierarchy for balances and transactions, and a cohesive visual system that communicates trust and clarity.',
    gradient: 'from-zinc-200 via-zinc-100 to-zinc-300',
    image: '/pf1.png',
  },
  {
    slug: 'casino-xp',
    title: 'CASINO XP',
    selectedTitle: 'Casino XP',
    subtitle: 'Building a High-Engagement Casino Experience',
    description:
      'Designing fast, realtime game flows with clear feedback loops to increase retention.',
    fullDescription:
      'CASINO XP transforms online gaming with a modern, engaging interface. We redesigned the entire user flow to reduce friction, increase engagement, and provide real-time feedback that keeps players informed and entertained.',
    gradient: 'from-red-900 via-fuchsia-700 to-amber-400',
    image: '/cp1.png',
  },
  {
    slug: 'token-landing',
    title: 'TOKEN LANDING',
    selectedTitle: 'Token Landing',
    subtitle: 'Crafting High-Converting Token Landing Pages',
    description:
      'Creating visually engaging, performance-driven websites that turn visitors into community members.',
    fullDescription:
      'TOKEN LANDING showcases modern web design for blockchain projects. We created visually stunning landing pages that convert visitors into community members while maintaining fast performance and accessibility standards.',
    gradient: 'from-zinc-950 via-zinc-900 to-zinc-700',
    video: '/sample3.mp4',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=675&fit=crop',
  },
  {
    slug: 'data-console',
    title: 'DATA CONSOLE',
    selectedTitle: 'Data Console',
    subtitle: 'Designing Data-Heavy Dashboards That Make Sense',
    description:
      'Turning complex data into clear, actionable insights with structured layouts and smart hierarchy.',
    fullDescription:
      'DATA CONSOLE brings clarity to complex analytics. We designed comprehensive dashboards that help teams understand their data at a glance, with carefully structured information hierarchies and smart visualizations.',
    gradient: 'from-zinc-900 via-slate-800 to-slate-600',
    image: '/pp1.png',
  },
  {
    slug: 'analytics-hub',
    title: 'ANALYTICS HUB',
    selectedTitle: 'Analytics Hub',
    subtitle: 'Command Center for Real-Time Data',
    description:
      'Building intuitive analytics dashboards that empower teams to make data-driven decisions quickly.',
    fullDescription:
      'ANALYTICS HUB provides teams with real-time insights into their business metrics. The interface prioritizes speed and clarity, enabling users to make informed decisions faster.',
    gradient: 'from-purple-900 via-purple-700 to-blue-700',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=675&fit=crop',
  },
  {
    slug: 'mobile-banking',
    title: 'MOBILE BANKING',
    selectedTitle: 'Mobile Banking',
    subtitle: 'Seamless Financial Experience on Mobile',
    description:
      'Designing secure, user-friendly banking flows that make financial management accessible to everyone.',
    fullDescription:
      'MOBILE BANKING redesigns financial management for the modern user. We created secure, intuitive flows that handle complex banking operations with simplicity and confidence.',
    gradient: 'from-emerald-900 via-emerald-700 to-teal-700',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13cf712?w=1200&h=675&fit=crop',
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const isDataConsole = project?.slug === 'data-console';

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-white text-[#0d3b46]">
      <Header />

      <nav className="main-container mt-6">
        <Link
          href="/projects"
          className="inline-flex h-[24px] w-[45px] items-center gap-[4.58px] text-[16px] font-normal leading-[24px] text-[#1d464f] no-underline opacity-100 rotate-0 capitalize transition hover:text-[#0a3a44]"
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
      </nav>

      <div className="main-container mt-9">
        <p
          className="m-0 inline-flex items-center gap-[0.35rem] text-[16px] font-normal leading-[24px] text-[#6e7d80] opacity-100 rotate-0"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span>•</span> Case Studies
        </p>
        <h1
          className="mt-[0.5rem] h-[144px] w-[708px] text-[64px] leading-[72px] tracking-[-1.4px] text-[#002B31] opacity-100 rotate-0"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {project.slug === 'prjectName' ? (
            <>
              <span style={{ display: 'block', fontWeight: 400, fontStyle: 'normal' }}>WHALE</span>
              <strong style={{ display: 'block', fontWeight: 700, fontStyle: 'normal' }}>CHANGE</strong>
            </>
          ) : project.slug === 'casino-xp' ? (
            <>
              <span className="font-normal text-[#123f47]">Casino </span>
              <strong className="font-bold text-[#0a2f38]">XP</strong>
            </>
          ) : project.slug === 'token-landing' ? (
            <>
              <span className="font-normal text-[#123f47]">Token </span>
              <strong className="font-bold text-[#0a2f38]">Landing</strong>
            </>
          ) : project.slug === 'data-console' ? (
            <>
              <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '64px', lineHeight: '72px', letterSpacing: '-1.4px', color: '#002B31' }}>PAW</span>
              <strong style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontStyle: 'normal', fontSize: '64px', lineHeight: '72px', letterSpacing: '-1.4px', color: '#002B31' }}>CHAIN</strong>
            </>
          ) : (
            <strong className="font-bold text-[#0a2f38]">{project.selectedTitle}</strong>
          )}
        </h1>
      </div>

      {/* Subtitle/description for specific projects */}
      {project.slug === 'data-console' && (
        <div className="main-container mt-4">
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', lineHeight: '32px', color: '#002B31', margin: 0 }}>
            Designing a Crypto Wallet for Real Users
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '14px',
              lineHeight: '22px',
              letterSpacing: '0%',
              color: '#002B31',
              margin: '8px 0 0',
              maxWidth: '1280px',
            }}
          >
            Simplifying onboarding, transactions, and portfolio tracking for everyday users.
          </p>
        </div>
      )}

      <div className={isDataConsole ? "mx-auto mt-8 w-full max-w-[1280px] px-[6%] md:px-[4%] lg:px-0" : "main-container mt-8"}>
        <div className={isDataConsole ? "relative aspect-[1280/660] overflow-hidden rounded-[17.71px] bg-white" : "relative aspect-[16/9] overflow-hidden rounded-[1.2rem]"}>
          {project.video ? (
            <video
              src={project.video}
              className={isDataConsole ? "h-full w-full object-contain object-center" : "h-full w-full object-cover object-center"}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.selectedTitle}
              fill
              loading="lazy"
              sizes="(max-width: 980px) 100vw, 980px"
              className={isDataConsole ? "object-contain object-center" : "object-cover object-center"}
            />
          )}
        </div>
      </div>

      {/* subtitle/description removed as requested */}

      {/* Gallery: project-specific */}
      <div className="main-container mb-16 mt-8">
        {project.slug === 'casino-xp' ? (
          <div className="flex flex-col items-center gap-6">
                        <div className="relative h-[520px] w-full max-w-[1280px] overflow-hidden rounded-xl bg-[#f3f4f3]">
              <Image src="/cp2.png" alt="cp2" fill className="object-cover" />
            </div>
            <div className="relative h-[520px] w-full max-w-[1280px] overflow-hidden rounded-xl bg-[#f3f4f3]">
              <Image src="/cp3.png" alt="cp3" fill className="object-cover" />
            </div>
            <div className="relative h-[520px] w-full max-w-[1280px] overflow-hidden rounded-xl bg-[#f3f4f3]">
              <Image src="/cp4.png" alt="cp4" fill className="object-cover" />
            </div>
          </div>
        ) : project.slug === 'prjectName' ? (
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-[520px] w-full max-w-[1280px] overflow-hidden rounded-xl bg-[#f3f4f3]">
              <Image src="/pf1.png" alt="pf1" fill className="object-cover" />
            </div>
            <div className="relative h-[520px] w-full max-w-[1280px] overflow-hidden rounded-xl bg-[#f3f4f3]">
              <Image src="/fp5.png" alt="fp5" fill className="object-cover" />
            </div>
          </div>
        ) : project.slug === 'data-console' ? (
          <div className="flex flex-col items-center gap-6">
          
            <div className="relative h-[520px] w-full max-w-[1280px] overflow-hidden rounded-xl bg-[#f3f4f3]">
              <Image src="/pp2.png" alt="pp2" fill className="object-cover" />
            </div>
            <div className="relative h-[520px] w-full max-w-[1280px] overflow-hidden rounded-xl bg-[#f3f4f3]">
              <Image src="/pp3.png" alt="pp3" fill className="object-cover" />
            </div>
            <div className="relative h-[520px] w-full max-w-[1280px] overflow-hidden rounded-xl bg-[#f3f4f3]">
              <Image src="/pp4.png" alt="pp4" fill className="object-cover" />
            </div>
          </div>
        ) : (
          <div className="relative h-[520px] overflow-hidden rounded-xl bg-[#f3f4f3]">
            <Image src={project.image} alt={project.selectedTitle} fill className="object-cover" />
          </div>
        )}
      </div>


      {/* Site footer */}
      <Footer />
    </main>
  );
}
