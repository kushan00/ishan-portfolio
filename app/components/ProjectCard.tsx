"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  imageUrl: string;
  posterUrl?: string;
}

export default function ProjectCard({ title, subtitle, description, gradient, imageUrl, posterUrl }: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-4" aria-label={title} data-poster={posterUrl}>
      <div className={`relative aspect-[5/4]`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          loading="lazy"
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-fill"
        />
      </div>
      <div className="px-0 sm:px-2">
        <h4 className="text-lg font-semibold leading-snug text-brand-primary sm:text-2xl">
          {subtitle}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-brand-text-muted sm:mt-3 sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
