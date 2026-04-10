"use client";

import { useState } from "react";

type Testimonial = {
  company: string;
  role: string;
  copy: string;
  theme: "dark" | "light";
};

const testimonials: Testimonial[] = [
  {
    company: "ABC Company",
    role: "Product Manager",
    copy:
      "Ishan simplified complex workflows and made our product much easier to use. The new UX reduced support requests and improved onboarding speed.",
    theme: "dark",
  },
  {
    company: "Hatch Works",
    role: "Design Lead",
    copy:
      "From research to final UI, every decision was intentional. The final experience feels polished, fast, and much more understandable for users.",
    theme: "light",
  },
  {
    company: "Eth LLC",
    role: "Founder",
    copy:
      "Our dashboard was confusing before. Ishan brought clarity to information hierarchy and made key actions obvious, which boosted daily engagement.",
    theme: "dark",
  },
  {
    company: "Ford Australia",
    role: "Creative Director",
    copy:
      "Great collaboration and very strong design thinking. The final product shipped faster because the flows were clear and implementation-ready.",
    theme: "light",
  },
  {
    company: "Mango Media",
    role: "Operations Manager",
    copy:
      "The redesign made complex tasks simple for our team. We saw fewer user errors and better completion rates within the first week.",
    theme: "dark",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <>
      <div className="testimonial-nav">
        <button
          type="button"
          className="nav-dot"
          onClick={goPrevious}
          aria-label="Previous testimonial"
        >
          &lt;
        </button>
        <button
          type="button"
          className="nav-dot active"
          onClick={goNext}
          aria-label="Next testimonial"
        >
          &gt;
        </button>
      </div>

      <div className="testimonials-track" aria-live="polite">
        <div
          className="testimonials-rail"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((item) => (
            <article
              key={item.company + item.role}
              className={`testimonial-card ${item.theme}`}
            >
              <p className="quote-mark">&ldquo;</p>
              <p className="testimonial-copy">{item.copy}</p>
              <footer>
                <span className="avatar" aria-hidden="true" />
                <div>
                  <p>{item.company}</p>
                  <small>{item.role}</small>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
