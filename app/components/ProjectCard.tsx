import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  imageUrl: string;
}

export default function ProjectCard({ slug, title, subtitle, description, gradient, imageUrl }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="project-card-link">
      <article className="project-card-showcase" aria-label={title}>
        <div className={`project-card-visual aspect-video rounded-lg bg-gradient-to-br ${gradient} shadow-lg`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            loading="lazy"
            quality={65}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="project-card-image"
          />
        </div>
        <div className="project-card-copy">
          <h4 className="project-card-title">{subtitle}</h4>
          <p className="project-card-description">{description}</p>
        </div>
      </article>
    </Link>
  );
}
