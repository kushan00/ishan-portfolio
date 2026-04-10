import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
    <main className="portfolio-page">
      <Header />

      <nav className="project-breadcrumb">
        <Link href="/projects" className="breadcrumb-back">
          ← Home
        </Link>
      </nav>

      <div className="project-header">
        <p className="project-kicker">
          <span>•</span> Case Studies
        </p>
        <h1 className="project-title">
          {project.slug === 'prjectName' ? (
            <>
              <span>Project </span>
              <strong>Name</strong>
            </>
          ) : (
            <strong>{project.selectedTitle}</strong>
          )}
        </h1>
      </div>

      <div className="project-hero">
        <img
          src={project.image}
          alt={project.selectedTitle}
          className="project-hero-image"
        />
      </div>

      <div className="project-content">
        <div className="project-content-inner">
          <h2 className="project-subtitle">{project.subtitle}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-full-description">
            <p>{project.fullDescription}</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
