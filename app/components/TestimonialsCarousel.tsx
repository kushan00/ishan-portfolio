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
    name: "Sabreen Rezvie",
    role: "Founder & CEO, Drifting Desk",
    company: "Drifting Desk",
    initial: "S",
    avatarBg: "#1A6BFF",
    copy: "Peshala has been instrumental in helping us build multiple products, both for clients and internally. Working with him is a breeze—he understands products at a PO level and helps us build agile solutions efficiently. ",
  },
  {
    name: "Alol...",
    role: "Business Developer",
    company: "Hatch Works",
    initial: "A",
    avatarBg: "#444",
    copy: "I've known Peshala to be the go-to for design. What I like about him is that he takes the time to see the bigger picture and build in the real world.",
  },
  {
    name: "John Doe",
    role: "Founding Engineer",
    company: "Eth LLC",
    initial: "J",
    avatarBg: "#333",
    copy: "Bringing clarity to complex systems is where Ishan shines. He didn't just design screens; he helped us define the core product loops and user journeys that we still use today.",
  },
  {
    name: "John Doe 3",
    role: "Engineer",
    company: "QWE LLC",
    initial: "J",
    avatarBg: "#333",
    copy: "Bringing clarity to complex systems is where Ishan shines. He didn't just design screens; he helped us define the core product loops and user journeys that we still use today.",
  },
  {
    name: "John Doe 4",
    role: "Founder",
    company: "EDF LLC",
    initial: "J",
    avatarBg: "#333",
    copy: "Bringing clarity to complex systems is where Ishan shines. He didn't just design screens; he helped us define the core product loops and user journeys that we still use today.",
  },
  {
    name: "John Doe 5",
    role: "CEO",
    company: "ABC LLC",
    initial: "J",
    avatarBg: "#333",
    copy: "Bringing clarity to complex systems is where Ishan shines. He didn't just design screens; he helped us define the core product loops and user journeys that we still use today.",
  },
];

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

// How far the next card peeks from the right (in %)
const PEEK_WIDTH = "36%";

function getCardState(i: number, index: number): "past" | "active" | "next" | "hidden" {
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

  return (
    <section className="section-gap bg-brand-bg overflow-hidden" aria-label="Testimonials">
      <div className="main-container flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">

        {/* Left: title + navigation */}
        <div className="flex flex-col justify-center flex-shrink-0 lg:w-72 relative z-10">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-primary" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-widest text-brand-primary">Testimonials</span>
            </div>

            <h3 className="text-5xl font-bold leading-tight md:text-6xl text-brand-text">
              What <br /> <span className="font-normal opacity-70">People Say</span>
            </h3>

            <div className="mt-12 flex gap-4">
              <button
                onClick={prev}
                disabled={index === 0}
                className={`flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 transition-all ${
                  index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-zinc-50 active:scale-95 shadow-sm"
                }`}
                aria-label="Previous testimonial"
              >
                <span className="text-xl">←</span>
              </button>
              <button
                onClick={next}
                disabled={index === testimonials.length - 1}
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white transition-all ${
                  index === testimonials.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-zinc-800 active:scale-95 shadow-lg"
                }`}
                aria-label="Next testimonial"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Right: absolute-stacked cards — past cards sit under active, next peeks from right */}
        <div className="flex-1 min-w-0">
          {/* Height holder so the container doesn't collapse */}
          <div className="relative" style={{ height: "480px" }}>
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
                    x: state === "next" ? "calc(100% + 260px - " + PEEK_WIDTH + ")" : "0%",
                    opacity: state === "next" ? 0.5 : 1,
                    scale: state === "next" ? 0.97 : 1,
                    zIndex: state === "past" ? i : state === "active" ? 100 : 50,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  className="max-w-[640px] absolute inset-0 flex flex-col justify-between rounded-[2.5rem] text-white p-8 md:p-10 border border-white/5"
                  style={{
                    background: state === "active" ? "#1e2022" : "#2d2f31",
                    pointerEvents: state === "active" ? "auto" : "none",
                  }}
                >
                  <div className="relative">
                    <span className="text-5xl font-serif text-white/20 select-none">&ldquo;</span>
                    <p className="mt-4 text-lg font-normal leading-relaxed text-white/90 md:text-xl">
                      {testimonial.copy}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center gap-5">
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-xl font-bold overflow-hidden text-white border border-white/10"
                      style={{ background: testimonial.avatarBg ?? "#333" }}
                    >
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="text-xl font-semibold leading-tight text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/40 uppercase tracking-widest mt-1.5">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
