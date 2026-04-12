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
    <Link href={`/projects/${slug}`} className="text-inherit no-underline">
      <article className="flex flex-col gap-2" aria-label={title}>
        <div className={`relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br ${gradient} shadow-lg`}>
          {videoUrl && !videoError ? (
            <>
              <video
                ref={mediaRef}
                className="absolute inset-0 h-full w-full object-cover object-center"
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
                  quality={75}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              ) : null}
            </>
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              fill
              loading="lazy"
              quality={75}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-center"
            />
          )}
        </div>
        <div>
          <h4
            className="m-0 h-[32px] w-full max-w-[588px] text-[24px] font-normal leading-[32px] text-[#002B31] opacity-100 rotate-0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {subtitle}
          </h4>
          <p
            className="m-0 mt-1 h-[22px] w-full max-w-[588px] text-[14px] font-normal leading-[22px] text-[#002B31] opacity-100 rotate-0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </p>
        </div>
      </article>
    </Link>
  );
}
