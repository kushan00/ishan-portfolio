import { FaBehance, FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-[#00161b] py-[1.08rem]" aria-label="Contact footer">
      <div className="mx-auto flex w-[min(940px,calc(100%-2rem))] flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <a className="text-[0.62rem] tracking-[0.01em] text-[#f2f6f7] no-underline" href="mailto:ishankavinda88@gmail.com">
            ishankavinda88@gmail.com
          </a>
          <p className="mt-2 text-[0.36rem] tracking-[0.02em] text-[#6e8388]">
            &copy; 2023 All Right Reserved by Loopcore_studio
          </p>
        </div>

        <div className="flex gap-1.5" aria-label="Social links">
          <a className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border border-[#d8e1e3] bg-[#f2f5f6] text-[0.34rem] font-bold text-[#0f2f35] no-underline" href="#" aria-label="Instagram">
            <FaInstagram aria-hidden="true" focusable="false" />
          </a>
          <a className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border border-[#d8e1e3] bg-[#f2f5f6] text-[0.34rem] font-bold text-[#0f2f35] no-underline" href="#" aria-label="Behance">
            <FaBehance aria-hidden="true" focusable="false" />
          </a>
          <a className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border border-[#d8e1e3] bg-[#f2f5f6] text-[0.34rem] font-bold text-[#0f2f35] no-underline" href="#" aria-label="Dribbble">
            <FaDribbble aria-hidden="true" focusable="false" />
          </a>
          <a className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border border-[#d8e1e3] bg-[#f2f5f6] text-[0.34rem] font-bold text-[#0f2f35] no-underline" href="#" aria-label="LinkedIn">
            <FaLinkedinIn aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </footer>
  );
}
