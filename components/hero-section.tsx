"use client";

import gsap from "gsap"; // <-- import GSAP
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Hero3D } from "./models/hero-3d";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.cjs";
import { socialLinks } from "@/constants/soical";

export const HeroSection = () => {
  const description = useRef<HTMLParagraphElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const textDynamic = useRef<HTMLHeadingElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [text, setText] = useState("Secure");

  const messages = ["Secure", "Modern", "Scalable"];
  

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      imagesRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.5 }
    );
    gsap.fromTo(
      title.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      description.current,
      { opacity: 0, translateX: 50 },
      { opacity: 1, translateX: 0, duration: 2, delay: 1 }
    );
  }, []);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      gsap.to(textDynamic.current, { opacity: 0, duration: 1.5 });

      setTimeout(() => {
        setText(messages[index]);
        index = (index + 1) % messages.length;

        gsap.to(textDynamic.current, {
          opacity: 1,
          duration: 1.5,
        });
      }, 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container-layout relative z-10 xl:mt-20 mt-30 h-[83vh] flex xl:items-center items-start justify-center">
      <div className="md:w-full w-screen md:px-20 px-5 z-10">
        <h1 ref={title} className="text-4xl font-medium max-md:text-center max-md:text-3xl">
          Hi I&apos;m Kiet
        </h1>
        <div className="mt-6 text-5xl font-medium text-neutral-300 max-md:text-center max-md:text-4xl">
          <p ref={description}>
            I specialize in <br />
            <span
              ref={textDynamic}
              className="text-6xl text-blue-500 font-bold max-md:text-5xl"
            >
              {text}
            </span>{" "}
            <br /> web applications.
          </p>
        </div>
        <div className="flex max-md:justify-center gap-x-2 mt-6">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center justify-center
                w-10 h-10 rounded-full
                transition-all duration-300
                hover:bg-black/20 hover:scale-110
              "
            >
              <Icon
                icon={link.icon}
                width="30"
                height="30"
                className="text-white transition-colors duration-300"
              />
            </Link>
          ))}
        </div>
        {/* <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
            >
              <Image
                src={"/nftt.png"}
                alt={`${index}`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div> */}
      </div>
      <figure>
        <div className="md:w-[70%] w-full h-full min-h-[50vh] absolute xl:-top-10 md:-top-30 top-30 right-0 rounded-xl overflow-hidden">
          <Hero3D />
        </div>
      </figure>
    </section>
  );
};
