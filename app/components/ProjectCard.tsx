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
    <Link href={`/projects/${slug}`} className="text-inherit no-underline">
      <article className="flex flex-col gap-2" aria-label={title}>
        <div className={`relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br ${gradient} shadow-lg`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            loading="lazy"
            quality={75}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div>
          <h4 className="m-0 text-[0.54rem] font-medium leading-[1.2] text-[#0f3a44]">{subtitle}</h4>
          <p className="mt-[0.18rem] text-[0.42rem] leading-[1.35] text-[#6f7f83]">{description}</p>
        </div>
      </article>
    </Link>
  );
}
