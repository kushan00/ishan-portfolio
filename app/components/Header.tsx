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
    <header className="fixed top-0 z-[999] w-full border-b-1 border-gray-200 bg-white opacity-100 rotate-0 sm:sticky">
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
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F9F7] text-brand-secondary transition hover:bg-[#E9ECE7]"
            >
              <FaDribbble className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F9F7] text-brand-secondary transition hover:bg-[#E9ECE7]"
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
              className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ease-out ${
                isCopied
                  ? "border-[#011214] bg-[#011214] text-white"
                  : "border-[#a9b8b9] text-brand-secondary hover:border-[#011214] hover:bg-[#011214] hover:text-white active:border-[#011214] active:bg-[#011214] active:text-white"
              }`}
            >
              {isCopied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
