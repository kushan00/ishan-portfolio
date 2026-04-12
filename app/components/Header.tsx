import Link from "next/link";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <header className="mx-auto flex w-[min(980px,calc(100%-0.4rem))] flex-col items-start justify-between gap-3 pt-4 sm:flex-row sm:items-center">
      <Link href="/" className="text-[0.72rem] font-bold tracking-[0.01em] text-[#0d3b46] no-underline">
        Ishan.
      </Link>
      <div className="flex w-full flex-wrap items-center gap-[0.45rem] text-[0.58rem] text-[#2f555d] sm:w-auto sm:justify-end">
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
        <span className="sm:ml-1">Let&apos;s Work Together</span>
        <a
          className="rounded-full border border-[#a9b8b9] px-[0.55rem] py-[0.26rem] text-[#1d464f] no-underline transition hover:border-[#0f3a44] hover:text-[#0f3a44]"
          href="mailto:ishan.kavinda@example.com"
        >
          Copy Email
        </a>
      </div>
    </header>
  );
}
