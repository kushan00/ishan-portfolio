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
    title: 'Project Name',
    selectedTitle: 'Whale Chance',
    subtitle: 'Designing a Crypto Wallet for Real Users',
    description:
      'Simplifying wallet onboarding, portfolio tracking for everyday crypto users.',
    fullDescription:
      'prjectName is a revolutionary crypto wallet designed for everyday users who want to manage their digital assets with confidence. We focused on simplifying the onboarding process, making portfolio tracking intuitive, and providing clear feedback at every step. The design emphasizes clarity, security, and accessibility.',
    gradient: 'from-zinc-200 via-zinc-100 to-zinc-300',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1516535541601-4dba8344ce5e?w=1200&h=675&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1633356713697-812ab3fb49f5?w=1200&h=675&fit=crop',
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

  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#eceeed] text-[#0d3b46]">
      <Header />

      <nav className="mx-auto mt-6 w-[min(1280px,calc(100%-2rem))]">
        <Link href="/projects" className="inline-flex items-center text-[0.62rem] font-medium text-[#1d464f] no-underline transition hover:text-[#0a3a44]">
          ← Home
        </Link>
      </nav>

      <div className="mx-auto mt-9 w-[min(1280px,calc(100%-2rem))]">
        <p className="m-0 inline-flex items-center gap-[0.35rem] text-[0.56rem] text-[#6e7d80]">
          <span>•</span> Case Studies
        </p>
        <h1 className="mt-[0.5rem] text-[3.2rem] leading-[0.9] tracking-[-0.01em] text-[#123f47]">
          {project.slug === 'prjectName' ? (
            <>
              <span className="font-normal text-[#123f47]">Project </span>
              <strong className="font-bold text-[#0a2f38]">Name</strong>
            </>
          ) : (
            <strong className="font-bold text-[#0a2f38]">{project.selectedTitle}</strong>
          )}
        </h1>
      </div>

      <div className="mx-auto mt-8 w-[min(1280px,calc(100%-2rem))]">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.2rem]">
          <Image
            src={project.image}
            alt={project.selectedTitle}
            fill
            loading="lazy"
            sizes="(max-width: 980px) 100vw, 980px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="mx-auto mb-12 mt-10 w-[min(1280px,calc(100%-2rem))]">
        <div className="max-w-[840px]">
          <h2 className="m-0 text-[1.8rem] font-semibold leading-[1.2] text-[#123f47]">{project.subtitle}</h2>
          <p className="mt-4 text-[0.95rem] leading-[1.6] text-[#617477]">{project.description}</p>
          <div className="mt-8 border-t border-[#d4dbda] pt-8">
            <p className="m-0 text-[0.9rem] leading-[1.8] text-[#677474]">{project.fullDescription}</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
