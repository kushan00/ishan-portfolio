"use client";

import Link from "next/link";
import { useState } from "react";
import { FaDribbble, FaLinkedinIn, FaInstagram, FaBehance, FaBars, FaTimes } from "react-icons/fa";

const socials = [
  { label: "Dribble", icon: FaDribbble, href: "https://dribbble.com", ariaLabel: "Open Dribbble" },
  { label: "Linkedin", icon: FaLinkedinIn, href: "https://www.linkedin.com", ariaLabel: "Open LinkedIn" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com", ariaLabel: "Open Instagram" },
  { label: "behance", icon: FaBehance, href: "https://www.behance.net", ariaLabel: "Open Behance" },
];

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-[6%] md:px-[4%] lg:px-0 sm:h-20">
          <Link
            href="/"
            className="text-2xl font-medium tracking-tighter text-brand-secondary"
          >
            Ishan<span className="text-[#57DC86]">.</span>
          </Link>

          {/* Desktop right side */}
          <div className="hidden sm:flex items-center gap-3">
            {socials.slice(0, 2).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.ariaLabel}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-secondary transition hover:text-brand-primary"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
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

          {/* Mobile right side */}
          <div className="flex items-center gap-1 sm:hidden">
            {socials.slice(0, 2).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.ariaLabel}
                className="flex h-9 w-9 items-center justify-center text-brand-secondary"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center text-brand-secondary"
            >
              <FaBars className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white sm:hidden">
          {/* Menu header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium tracking-tighter text-brand-secondary"
            >
              Ishan<span className="text-[#57DC86]">.</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-brand-secondary"
            >
              <FaTimes className="h-4 w-4" />
            </button>
          </div>

          {/* Social links */}
          <nav className="flex-1 px-6 py-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.ariaLabel}
                className="flex items-center gap-4 border-b border-gray-100 py-5 text-brand-secondary"
              >
                <s.icon className="h-5 w-5 shrink-0" />
                <span className="text-base font-normal">{s.label}</span>
              </a>
            ))}
          </nav>

          {/* Footer: Copy Email */}
          <div className="px-6 pb-10 pt-4">
            <p className="mb-3 text-sm text-brand-text-muted">Let&apos;s Work Together</p>
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`w-full rounded-full border py-3 text-sm font-medium transition ${
                isCopied
                  ? "border-brand-secondary bg-brand-secondary text-white"
                  : "border-[#a9b8b9] text-brand-secondary hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {isCopied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
