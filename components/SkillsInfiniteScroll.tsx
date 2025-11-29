"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import { skillIcons } from "@/constants/skillIcons";

// Danh sách skill
const skillTags = [
  "NestJS",
  "Express.js",
  "Socket.io",
  "PostgreSQL",
  "MongoDB",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Solidity",
  "Move",
  "Next.js",
  "React",
  "Redux Toolkit",
  "React Hook Form",
  "React Query",
  "MUI",
  "AntD",
  "Tailwind",
  "Shadcn UI",
  "GSAP",
  "threejs",
];

export default function SkillsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2;

    const anim = gsap.to(el, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    el.addEventListener("mouseenter", () => anim.pause());
    el.addEventListener("mouseleave", () => anim.play());

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full py-4">
      <div ref={marqueeRef} className="flex w-max gap-x-6">
        {/* Lặp 2 lần để chạy mượt */}
        {[...skillTags, ...skillTags].map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur text-sm whitespace-nowrap hover:bg-white/20 transition"
          >
            <Icon icon={skillIcons[s]} width={24} height={24} />
            <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
