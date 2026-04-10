import Link from "next/link";

export default function Header() {
  return (
    <header className="top-nav reveal-up">
      <Link href="/">
        <p className="brand">Ishan.</p>
      </Link>
      <div className="top-actions">
        <button type="button" aria-label="Open Behance" className="icon-dot" />
        <button type="button" aria-label="Open Dribbble" className="icon-dot" />
        <span>Let&apos;s Work Together</span>
        <a href="mailto:ishan.kavinda@example.com">Copy Email</a>
      </div>
    </header>
  );
}
