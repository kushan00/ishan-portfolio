"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  imageUrl: string;
  videoUrl?: string;
}

export default function ProjectCard({ slug, title, subtitle, description, gradient, imageUrl, videoUrl }: ProjectCardProps) {
  const mediaRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (!videoUrl || !mediaRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "220px 0px" },
    );

    observer.observe(mediaRef.current);
    return () => observer.disconnect();
  }, [videoUrl]);

  return (
    <Link href={`/projects/${slug}`} className="group block no-underline">
      <article className="flex flex-col gap-6" aria-label={title}>
        <div className={`relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gradient-to-br ${gradient} shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:scale-[1.01]`}>
          {videoUrl && !videoError ? (
            <>
              <video
                ref={mediaRef}
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                muted
                loop
                autoPlay
                playsInline
                preload="none"
                poster={imageUrl}
                onError={() => setVideoError(true)}
              >
                {shouldLoadVideo ? <source src={videoUrl} type="video/mp4" /> : null}
              </video>
              {!shouldLoadVideo ? (
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
                />
              ) : null}
            </>
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              fill
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
            />
          )}
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
    </Link>
  );
}
