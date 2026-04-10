import { FaBehance, FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="contact-footer reveal-up delay-4" aria-label="Contact footer">
      <div className="contact-footer-inner">
        <div>
          <a className="contact-mail" href="mailto:ishankavinda88@gmail.com">
            ishankavinda88@gmail.com
          </a>
          <p className="copyright">&copy; 2023 All Right Reserved by Loopcore_studio</p>
        </div>

        <div className="socials" aria-label="Social links">
          <a href="#" aria-label="Instagram">
            <FaInstagram aria-hidden="true" focusable="false" />
          </a>
          <a href="#" aria-label="Behance">
            <FaBehance aria-hidden="true" focusable="false" />
          </a>
          <a href="#" aria-label="Dribbble">
            <FaDribbble aria-hidden="true" focusable="false" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </footer>
  );
}
