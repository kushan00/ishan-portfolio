import { FaBehance, FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-primary py-12 text-white" aria-label="Contact footer">
      <div className="main-container flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <a className="text-lg font-medium tracking-tight transition hover:text-[#7f9ca2]" href="mailto:ishankavinda88@gmail.com">
            ishankavinda88@gmail.com
          </a>
          <p className="text-xs tracking-wider text-[#6e8388] uppercase">
            &copy; {new Date().getFullYear()} All Rights Reserved by Loopcore Studio
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
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white text-lg text-[#7a7a7a] transition hover:bg-[#f2f2f2] hover:text-[#5f5f5f]"
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
