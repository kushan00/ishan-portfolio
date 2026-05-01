"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type HeroVideoProps = {
  src: string;
  poster?: string;
};

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative h-full w-full bg-[#0e1113] group overflow-hidden rounded-2xl">
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20"
          >
            {poster && (
              <Image
                src={poster}
                alt="Video poster"
                fill
                className="object-cover opacity-60"
              />
            )}
            <button
              onClick={handlePlay}
              className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full bg-brand-primary text-white transition-transform duration-300 hover:scale-110 active:scale-95"
              aria-label="Play video"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="ml-1 h-10 w-10"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      <video
        ref={videoRef}
        src={basePath + src}
        className={`h-full w-full object-cover transition-all duration-700 ${isPlaying ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        playsInline
        loop
        muted={false}
        controls={true}
      />
    </div>
  );
}
