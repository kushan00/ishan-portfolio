import { FaBehance, FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-primary py-12 text-white sm:py-16" aria-label="Contact footer">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-8 px-[6%] md:flex-row md:px-[4%] lg:px-0">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <a className="text-lg font-medium tracking-tight transition hover:text-[#7f9ca2]" href="mailto:ishankavinda88@gmail.com">
            ishankavinda88@gmail.com
          </a>
          <p className="font-['Inter'] text-[14px] font-light not-italic leading-[22px] tracking-normal align-middle text-[#757575]">
            &copy; 2026 All Rights Reserved – by Loopmint_Studio
          </p>
        </div>

        <div className="flex gap-4" aria-label="Social links">
          {[
            { icon: <FaInstagram />, label: "Instagram" },
            { icon: <FaBehance />, label: "Behance" },
            { icon: <FaDribbble />, label: "Dribbble" },
            { icon: <FaLinkedinIn />, label: "LinkedIn" },
          ].map((social) => (
            <a
              key={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-[#002B31] bg-white text-lg text-[#002B31] transition hover:bg-[#eaf4f5] hover:text-[#002B31]"
              href="#"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
