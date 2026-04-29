"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  imageUrl: string;
}

export default function ProjectCard({ title, subtitle, description, gradient, imageUrl }: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-6" aria-label={title}>
      <div className={`relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gradient-to-br ${gradient} shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01]`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          loading="lazy"
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/5" />
      </div>
      <div className="px-2">
        <h4 className="text-2xl font-semibold leading-tight text-brand-primary">
          {subtitle}
        </h4>
        <p className="mt-3 text-base leading-relaxed text-brand-text-muted">
          {description}
        </p>
      </div>
    </article>
  );
}
