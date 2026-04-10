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
      "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
    theme: "dark",
  },
  {
    company: "Hatch Works",
    role: "Product Designer",
    copy:
      "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
    theme: "light",
  },
  {
    company: "Eth LLC",
    role: "Founder",
    copy:
      "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
    theme: "dark",
  },
  {
    company: "Ford Australia",
    role: "Creative Director",
    copy:
      "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
    theme: "light",
  },
  {
    company: "Mango Media",
    role: "Manager",
    copy:
      "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
    theme: "dark",
  },
];

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 2;
  const visibleItems = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="testimonials-carousel-wrapper">
      <div className="testimonials-track" aria-live="polite">
        {visibleItems.map((item, idx) => (
          <article
            key={item.company + item.role + idx}
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
    </div>
  );
}
