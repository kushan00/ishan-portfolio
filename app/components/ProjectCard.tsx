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
      <div className={`relative aspect-[5/4] overflow-hidden rounded-lg bg-gradient-to-br ${gradient} shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:scale-[1.01] sm:rounded-2xl sm:shadow-md sm:group-hover:shadow-xl`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          loading="lazy"
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/5" />
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
