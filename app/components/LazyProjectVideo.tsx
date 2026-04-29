"use client";

import { useEffect, useRef, useState } from "react";

type LazyProjectVideoProps = {
  src: string;
  className?: string;
};

export default function LazyProjectVideo({ src, className }: LazyProjectVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-white ${className}`}>
      {shouldLoad ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          muted
          playsInline
          loop
          autoPlay
          preload="none"
        />
      ) : (
        <div className="h-full w-full bg-white" />
      )}
    </div>
  );
}