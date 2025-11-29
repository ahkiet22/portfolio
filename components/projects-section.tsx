"use client";

import Link from "next/link";
import { Divider } from "./Divider";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with Next.js, TailwindCSS, GSAP animations and three.js.",
    techs: ["Next.js", "Tailwind", "GSAP", "three.js"],
    link: "https://github.com/ahkiet22/portfolio",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with NestJS backend and Next.js frontend.",
    techs: ["NestJS", "Next.js", "PostgreSQL"],
    link: "https://github.com/FastE2",
  },
  {
    title: "Blockchain App",
    description:
      "A dApp built with Solidity smart contracts, integrating Web3 wallet.",
    techs: ["Solidity", "Web3"],
    link: "https://github.com/ahkiet22/donate-to-me",
  },
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".project-card");
    if (!cards) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    cards.forEach((card, index) => {
      tl.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
      });
    });
  }, []);
  return (
    <section className="container-layout projects-section text-white mb-20">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <Divider />

      <div className="flex flex-col gap-y-8 mt-10 max-w-4xl mx-auto px-4 md:px-0">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project-card flex flex-col md:flex-row w-full bg-background/10 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-shadow"
          >
            {/* Text content */}
            <div className="group flex flex-col p-6 md:w-[60%]">
              <div className="flex items-center gap-x-2 mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="material-symbols:link" width="24" height="24" />
                </Link>
              </div>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center md:flex-1 p-2">
              <div className="w-full md:max-w-sm aspect-video relative">
                <Image
                  src="/nftt.png"
                  alt="Example"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
