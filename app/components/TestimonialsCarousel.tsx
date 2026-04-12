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
  const [activeControl, setActiveControl] = useState<"prev" | "next">("next");
  const visibleItems = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  const goPrevious = () => {
    setActiveControl("prev");
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setActiveControl("next");
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex gap-3 overflow-hidden" aria-live="polite">
        {visibleItems.map((item, idx) => (
          <article
            key={item.company + item.role + idx}
            className={`flex min-h-[310px] w-[460px] flex-[0_0_460px] flex-col rounded-[18px] px-[1.15rem] pb-[0.95rem] pt-[1.1rem] ${
              item.theme === "dark"
                ? "bg-[#303236] text-[#f1f4f4]"
                : "bg-[#888a8d] text-[#f4f7f7]"
            }`}
          >
            <p className="m-0 text-[2.15rem] font-bold leading-none">&ldquo;</p>
            <p className="mt-[0.25rem] text-[0.77rem] leading-[1.35]">{item.copy}</p>
            <footer className="mt-auto flex items-center gap-[0.45rem] pt-[0.8rem]">
              <span className="h-[22px] w-[22px] rounded-full bg-[#004a56]" aria-hidden="true" />
              <div>
                <p className="m-0 text-[0.7rem]">{item.company}</p>
                <small className="text-[0.5rem] text-[#c7d0d1]">{item.role}</small>
              </div>
            </footer>
          </article>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          aria-pressed={activeControl === "prev"}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
            activeControl === "prev"
              ? "border-[#272e3f] bg-[#272e3f] text-white"
              : "border-[#d5dfe1] bg-[#eef2f3] text-[#4f666b] hover:border-[#272e3f] hover:text-[#272e3f]"
          }`}
          onClick={goPrevious}
          aria-label="Previous testimonial"
        >
          &lt;
        </button>
        <button
          type="button"
          aria-pressed={activeControl === "next"}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
            activeControl === "next"
              ? "border-[#272e3f] bg-[#272e3f] text-white"
              : "border-[#d5dfe1] bg-[#eef2f3] text-[#4f666b] hover:border-[#272e3f] hover:text-[#272e3f]"
          }`}
          onClick={goNext}
          aria-label="Next testimonial"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
