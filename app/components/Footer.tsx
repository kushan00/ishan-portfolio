import { FaBehance, FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto h-[240px] w-full max-w-[1920px] bg-[#011214] opacity-100 rotate-0" aria-label="Contact footer">
      <div className="mx-auto mt-[100px] flex h-[40px] w-[1280px] items-center justify-between opacity-100 rotate-0">
        <div className="flex items-center gap-4">
          <a className="text-[0.84rem] tracking-[0.01em] text-[#f2f6f7] no-underline" href="mailto:ishankavinda88@gmail.com">
            ishankavinda88@gmail.com
          </a>
          <p className="text-[0.68rem] tracking-[0.02em] text-[#6e8388]">
            &copy; 2023 All Right Reserved by Loopcore_studio
          </p>
        </div>

        <div className="flex gap-2" aria-label="Social links">
          <a className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] border border-[#d8e1e3] bg-[#f2f5f6] text-[0.42rem] font-bold text-[#0f2f35] no-underline" href="#" aria-label="Instagram">
            <FaInstagram aria-hidden="true" focusable="false" />
          </a>
          <a className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] border border-[#d8e1e3] bg-[#f2f5f6] text-[0.42rem] font-bold text-[#0f2f35] no-underline" href="#" aria-label="Behance">
            <FaBehance aria-hidden="true" focusable="false" />
          </a>
          <a className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] border border-[#d8e1e3] bg-[#f2f5f6] text-[0.42rem] font-bold text-[#0f2f35] no-underline" href="#" aria-label="Dribbble">
            <FaDribbble aria-hidden="true" focusable="false" />
          </a>
          <a className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] border border-[#d8e1e3] bg-[#f2f5f6] text-[0.42rem] font-bold text-[#0f2f35] no-underline" href="#" aria-label="LinkedIn">
            <FaLinkedinIn aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </footer>
  );
}
