"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AboutSection } from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { on } from "events";

const alphabetFull: string[] = [
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
  "threejs"
]

// const alphabetFull: string[] = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];


const colors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
];

export default function Home() {
  const textRef = useRef<Array<HTMLDivElement | null>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const distanceThreshold = 100;
  const lastX = useRef(0);
  const lastY = useRef(0);
  const z = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX.current;
      const dy = e.clientY - lastY.current;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < distanceThreshold) return;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
      const el = textRef.current[currentRef.current];
      if (!el) return;

      currentRef.current = (currentRef.current + 1) % textRef.current.length;
      z.current++;

      gsap.set(el, {
        x: e.clientX - el.offsetWidth / 2,
        y: e.clientY - el.offsetHeight / 2,
        zIndex: z.current,
        position: "absolute",
        display: "block",
      });

      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        onComplete: () => {
          gsap.to(el, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            delay: 0.5,
            onComplete: () => {
              gsap.set(el, { display: "none" });
            },
          });
        },
      });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <Header />
      <main className="transition-colors duration-500">
        {/* alphabet letters hidden initially */}
        <div className="flex gap-x-10">
          {alphabetFull.map((char, idx) => (
            <div
              key={idx}
              ref={(el) => {
                textRef.current[idx] = el;
              }}
              className={`
                hidden font-bold text-xl pointer-events-none select-none w-8 h-2
                ${colors[idx % colors.length]}
              `}
            >
              {char}
            </div>
          ))}
        </div>

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
