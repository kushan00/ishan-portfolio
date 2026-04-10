import Link from "next/link";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <header className="top-nav reveal-up">
      <Link href="/">
        <p className="brand">Ishan.</p>
      </Link>
      <div className="top-actions">
        <a
          href="https://www.behance.net"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Behance"
          className="icon-dot"
        >
          <FaBehance aria-hidden="true" focusable="false" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Open LinkedIn"
          className="icon-dot"
        >
          <FaLinkedinIn aria-hidden="true" focusable="false" />
        </a>
        <span>Let&apos;s Work Together</span>
        <a className="email-action" href="mailto:ishan.kavinda@example.com">Copy Email</a>
      </div>
    </header>
  );
}
