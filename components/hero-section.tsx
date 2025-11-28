"use client";

import gsap from "gsap"; // <-- import GSAP
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Hero3D } from "./models/hero-3d";

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
    <section className="relative z-10 xl:mt-20 mt-32 h-[80vh] flex xl:items-center items-start justify-center">
      <div className="md:w-full w-screen md:px-20 px-5 z-10">
        <h1 ref={title} className="text-4xl font-medium">
          Hi I&apos;m Kiet
        </h1>
        <div className="mt-6 text-5xl font-medium text-neutral-300">
          <p ref={description}>
            I specialize in <br />
            <span
              ref={textDynamic}
              className="text-6xl text-blue-500 font-bold"
            >
              {text}
            </span>{" "}
            <br /> web applications.
          </p>
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
        <div className="xl:w-[70%] w-full h-full min-h-[50vh] absolute xl:-top-10 top-24 xl:-right-20 right-0 rounded-xl overflow-hidden">
          <Hero3D />
        </div>
      </figure>
    </section>
  );
};
