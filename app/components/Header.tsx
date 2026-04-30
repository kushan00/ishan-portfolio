"use client";

import Link from "next/link";
import { useState } from "react";
import { FaDribbble, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = "ishan.kavinda@example.com";

    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-1 border-gray-200 bg-white opacity-100 rotate-0">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-[6%] md:px-[4%] lg:px-0 sm:h-20">
        <Link
          href="/"
          className="text-2xl font-medium tracking-tighter text-brand-secondary"
        >
          Ishan<span className="text-[#57DC86]">.</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Dribbble"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-secondary transition"
            >
              <FaDribbble className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-secondary transition"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-brand-accent md:inline">
              Let&apos;s Work Together
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                isCopied
                  ? "border-brand-secondary bg-brand-secondary text-white"
                  : "border-[#a9b8b9] text-brand-secondary hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {isCopied ? "Copied" : "Copy Email"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
