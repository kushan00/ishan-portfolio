import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
}

export default function ProjectCard({ slug, title, subtitle, description, gradient }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="project-card-link">
      <article className="project-card-showcase" aria-label={title}>
        <div
          className={`project-card-visual aspect-video rounded-lg bg-gradient-to-br ${gradient} shadow-lg`}
        />
        <div className="project-card-copy">
          <h4 className="project-card-title">{subtitle}</h4>
          <p className="project-card-description">{description}</p>
        </div>
      </article>
    </Link>
  );
}
