"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  company: string;
  role: string;
  name: string;
  copy: string;
  initial: string;
  avatarBg?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "ABC Company",
    role: "Product Manager",
    company: "ABC Company",
    initial: "S",
    avatarBg: "#1A6BFF",
    copy: "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
  },
  {
    name: "Alol...",
    role: "Business Developer",
    company: "Hatch Works",
    initial: "A",
    avatarBg: "#444",
    copy: "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
  },
  {
    name: "John Doe",
    role: "Founding Engineer",
    company: "Eth LLC",
    initial: "J",
    avatarBg: "#333",
    copy: "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
  },
  {
    name: "John Doe 3",
    role: "Engineer",
    company: "QWE LLC",
    initial: "J",
    avatarBg: "#333",
    copy: "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
  },
  {
    name: "John Doe 4",
    role: "Founder",
    company: "EDF LLC",
    initial: "J",
    avatarBg: "#333",
    copy: "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
  },
  {
    name: "John Doe 5",
    role: "CEO",
    company: "ABC LLC",
    initial: "J",
    avatarBg: "#333",
    copy: "Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use. Ishan simplified complex workflows and made our product much easier to use.",
  },
];

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

// How far the next card peeks from the right (in %)
const PEEK_WIDTH = "36%";

function getCardState(
  i: number,
  index: number,
): "past" | "active" | "next" | "hidden" {
  if (i < index) return "past";
  if (i === index) return "active";
  if (i === index + 1) return "next";
  return "hidden";
}

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goTo = (targetIndex: number) => {
    setIndex(targetIndex);
  };

  return (
    <section
      className="overflow-hidden bg-brand-bg py-16 md:py-20 lg:py-[100px]"
      aria-label="Testimonials"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[10px] px-[6%] md:gap-16 md:px-[4%] lg:flex-row lg:items-center lg:gap-20 lg:px-0">
        {/* Left: title + navigation */}
        <div className="relative z-10 flex flex-shrink-0 flex-col justify-center lg:w-72">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-[#002B31]"
                aria-hidden="true"
              />
              <span className="h-[24px] w-[83px] align-middle font-[var(--font-inter)] text-[14px] font-normal leading-[24px] tracking-[0] text-[#000000]">
                Testimonials
              </span>
            </div>

            <h3 className="text-5xl font-bold leading-tight md:text-6xl text-[#002B31]">
              What <br />{" "}
              <span className="font-normal text-[#002B31]">People Say</span>
            </h3>

            <div className="mt-12 flex h-16 gap-[10px] hidden md:flex">
              <button
                onClick={prev}
                disabled={index === 0}
                className={`flex h-16 w-16 items-center cursor-pointer justify-center rounded-full bg-[#F8F9F7] text-brand-secondary transition-all ${
                  index === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "active:scale-95 shadow-sm"
                }`}
                aria-label="Previous testimonial"
              >
                <span className="h-5 w-5 flex items-center justify-center text-lg rotate-180">
                  →
                </span>
              </button>
              <button
                onClick={next}
                disabled={index === testimonials.length - 1}
                className={`flex h-16 w-16 items-center cursor-pointer justify-center rounded-full bg-[#002B31] text-white transition-all ${
                  index === testimonials.length - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "active:scale-95 shadow-lg"
                }`}
                aria-label="Next testimonial"
              >
                <span className="h-5 w-5 flex items-center justify-center text-lg">
                  →
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right: absolute-stacked cards — past cards sit under active, next peeks from right */}
        <div className="flex-1 min-w-0">
          {/* Height holder so the container doesn't collapse - mobile sized box (398x554) */}
          <div className="relative mx-auto h-[554px] w-full max-w-[398px] md:h-[480px] md:max-w-none md:w-auto">
            {testimonials.map((testimonial, i) => {
              const state = getCardState(i, index);
              if (state === "hidden") return null;

              return (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    // past: sits right at x:0 under the active card
                    // active: sits at x:0, on top
                    // next: offset to the right, peeking
                    x:
                      state === "next"
                        ? "calc(100% + 260px - " + PEEK_WIDTH + ")"
                        : "0%",
                    opacity: state === "next" ? 0.5 : 1,
                    scale: state === "next" ? 0.97 : 1,
                    zIndex:
                      state === "past" ? i : state === "active" ? 100 : 50,
                  }}
                  transition={{ type: "spring", stiffness: 140, damping: 34 }}
                  className="absolute inset-0 flex flex-col justify-between rounded-[2.5rem] text-white p-8 md:p-10 border border-white/5 md:max-w-[640px]"
                  style={{
                    background: state === "active" ? "#1e2022" : "#2d2f31",
                    pointerEvents: state === "active" ? "auto" : "none",
                  }}
                >
                  <div className="relative">
                    <span className="text-5xl font-serif text-white/20 select-none">
                      &ldquo;
                    </span>
                    <p className="mt-4 text-[14px] leading-[32px] font-normal text-white/90 md:text-lg md:leading-relaxed max-w-[350px] h-[224px] mx-auto md:mx-0 overflow-hidden md:overflow-visible">
                      {testimonial.copy}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-5">
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-xl font-bold overflow-hidden text-white border border-white/10"
                      style={{ background: "#002B31" }}
                    >
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="text-xl font-semibold leading-tight text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-white/40 uppercase tracking-widest mt-1.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2" aria-label="Testimonials pagination">
            {testimonials.map((testimonial, i) => {
              const isActive = i === index;
              return (
                <button
                  key={`testimonial-dot-${testimonial.name}-${i}`}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-[#3A3C3E]" : "w-2 bg-[#C7CECF] hover:bg-[#A8B2B4]"
                  }`}
                />
              );
            })}
          </div>
        </div>

        <div className="flex h-6 gap-2.5 w-full md:hidden mt-8 justify-center">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`flex h-16 w-16 items-center cursor-pointer justify-center rounded-full bg-[#F8F9F7] text-brand-secondary transition-all ${
              index === 0
                ? "opacity-30 cursor-not-allowed"
                : "active:scale-95 shadow-sm"
            }`}
            aria-label="Previous testimonial"
          >
            <span className="h-5 w-5 flex items-center justify-center text-lg rotate-180">
              →
            </span>
          </button>
          <button
            onClick={next}
            disabled={index === testimonials.length - 1}
            className={`flex h-16 w-16 items-center cursor-pointer justify-center rounded-full bg-[#002B31] text-white transition-all ${
              index === testimonials.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "active:scale-95 shadow-lg"
            }`}
            aria-label="Next testimonial"
          >
            <span className="h-5 w-5 flex items-center justify-center text-lg">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
