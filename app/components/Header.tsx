"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

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
    <header className="mx-auto h-[81px] w-full max-w-[1920px] border-b border-b-[1px] border-[#F0F0F0] opacity-100 rotate-0">
      <div className="mx-auto flex h-[80px] w-full max-w-[1280px] items-center justify-between opacity-100 rotate-0">
        <Link
          href="/"
          className="relative -top-[3px] left-[7px] inline-flex h-[24px] w-[64px] items-center text-[24px] font-medium leading-[24px] tracking-[-1px] text-[#0d3b46] no-underline opacity-100 rotate-0"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Ishan.
        </Link>
        <div className="flex items-center gap-[0.45rem] text-[0.58rem] text-[#2f555d]">
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Behance"
            className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#d4dbda] bg-[#f4f6f5] text-[#1d464f] transition hover:border-[#a9b8b9]"
          >
            <FaBehance aria-hidden="true" focusable="false" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn"
            className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#d4dbda] bg-[#f4f6f5] text-[#1d464f] transition hover:border-[#a9b8b9]"
          >
            <FaLinkedinIn aria-hidden="true" focusable="false" />
          </a>
          <span className="ml-1 inline-flex h-[22px] w-[132px] items-center text-[14px] font-normal leading-[22px] text-[#002B31] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
            Let&apos;s Work Together
          </span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`rounded-full border px-[0.55rem] py-[0.26rem] no-underline transition ${
              isCopied
                ? "border-[#0b0f11] bg-[#0b0f11] text-[#f2f4f5]"
                : "border-[#a9b8b9] text-[#1d464f] hover:border-[#0f3a44] hover:text-[#0f3a44]"
            }`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="inline-flex h-[22px] w-[75px] items-center justify-center text-center text-[14px] font-medium leading-[22px] opacity-100 rotate-0">
              {isCopied ? "Copied" : "Copy Email"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
