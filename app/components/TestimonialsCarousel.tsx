"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
      "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
    theme: "dark",
  },
  {
    company: "Hatch Works",
    role: "Product Designer",
    copy:
      "Ishan helped us turn a dense workflow into something that felt obvious and calm. The product became easier to understand and a lot faster to use.",
    theme: "light",
  },
  {
    company: "Eth LLC",
    role: "Founder",
    copy:
      "The designs were clear, practical, and very easy to hand off. We saw a real improvement in how users moved through the product.",
    theme: "dark",
  },
  {
    company: "Ford Australia",
    role: "Creative Director",
    copy:
      "Ishan quickly understood the problem and translated it into a cleaner experience. The final result felt modern, direct, and usable.",
    theme: "light",
  },
  {
    company: "Mango Media",
    role: "Manager",
    copy:
      "We valued the structured thinking and the attention to detail. Every step of the experience was simplified without losing clarity.",
    theme: "dark",
  },
  {
    company: "Loopcore Studio",
    role: "Lead Designer",
    copy:
      "The carousel work was thoughtful and refined. It made the page feel much more polished and easy to scan.",
    theme: "light",
  },
];

export default function TestimonialsCarousel() {
  const items = useMemo(() => testimonials, []);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const orderedItems = useMemo(
    () => items.map((_, index) => items[(startIndex + index) % items.length]),
    [items, startIndex],
  );

  const scrollToStart = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollTo({ left: 0, behavior: "smooth" });
  };

  const goPrevious = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  useEffect(() => {
    scrollToStart();
  }, [startIndex]);

  return (
    <section className="mx-auto h-[709px] w-full max-w-[1920px] bg-[#eceeed] opacity-100 rotate-0" aria-label="Testimonials">
      <div className="mx-auto grid h-full w-full max-w-[1920px] content-center gap-6 px-[clamp(1rem,10vw,320px)] md:grid-cols-[284px_1fr] md:items-start">
        <div className="flex h-[160px] w-[284px] flex-col gap-[12px] opacity-100 rotate-0">
          <p
            className="m-0 inline-flex h-[24px] w-[83px] items-center whitespace-nowrap text-[14px] font-normal leading-[24px] tracking-[0] text-[#000000]"
            style={{ fontFamily: "Inter, sans-serif", fontStyle: "normal" }}
          >
            <span className="mr-[6px]" aria-hidden="true">•</span>
            Testimonials
          </p>
          <h3 className="m-0 h-[124px] w-[284px] text-[#123f47] opacity-100 rotate-0" style={{ fontFamily: "Inter, sans-serif" }}>
            <strong className="block text-[54px] font-semibold leading-[62px]">What</strong>
            <span className="block text-[54px] font-normal leading-[62px]">People Say</span>
          </h3>

          <div className="mt-[18px] flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#eceeed] bg-[#f8f9f7] text-[#8c8c8c] transition hover:border-[#2E2E2E] hover:text-[#2E2E2E]"
              onClick={goPrevious}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#eceeed] bg-[#011214] text-[#ffffff] transition hover:bg-[#2E2E2E]"
              onClick={goNext}
            >
              →
            </button>
          </div>
        </div>

        <div className="flex w-full items-start justify-end">
          <div
            ref={trackRef}
            className="flex w-full gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Testimonials carousel"
          >
            {orderedItems.map((item, index) => {
              return (
                <article
                  key={item.company + item.role + index}
                  className={`relative h-[538px] w-[738px] shrink-0 rounded-[28px] px-[24px] py-[86px] text-[#ffffff] opacity-100 rotate-0 transition-colors duration-300 ${
                    index === 0 ? "bg-[#2E2E2E]" : "bg-[#8C8C8C]"
                  }`}
                  aria-label={`${item.company} testimonial`}
                  onClick={() => setStartIndex((prev) => (prev + index) % items.length)}
                >
                  <p className="m-0 text-[64px] leading-none text-[#ffffff]" aria-hidden="true" style={{ fontFamily: "Inter, sans-serif" }}>
                    &ldquo;
                  </p>

                  <p
                    className="mt-[22px] max-w-[690px] text-[24px] font-normal leading-[32px] tracking-[0] text-[#ffffff]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.copy}
                  </p>

                  <footer className="absolute bottom-[24px] left-[24px] flex items-center gap-[10px]">
                    <span
                      className="inline-flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#011214] text-[0.9rem] font-medium text-[#f8f9f7]"
                      aria-hidden="true"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.company.charAt(0)}
                    </span>
                    <div>
                      <p className="m-0 h-[32px] w-[164px] text-[24px] font-normal leading-[32px] text-[#ffffff]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {item.company}
                      </p>
                      <p className="m-0 text-[14px] leading-[24px] text-[#d8d8d8]" style={{ fontFamily: "Inter, sans-serif" }}>
                        {item.role}
                      </p>
                    </div>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
