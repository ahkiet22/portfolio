"use client";

import { socialLinks } from "@/constants/soical";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const data = [
  {
    title: "About Me",
    items: ["Introduction", "Education", "Experience", "Hobbies"],
  },
  {
    title: "Projects",
    items: ["Portfolio", "FastE", "Pixelcred", "Donate to me"],
  },
  {
    title: "Skills",
    items: ["JavaScript", "React", "Next.js", "TypeScript"],
  },
];

export default function Footer() {
  const elementRef = useRef<HTMLDivElement>(null);
  const imageSpiderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const imageSpider = imageSpiderRef.current;

    if (element && imageSpider) {
      gsap.set(imageSpider, { top: 0, right: 0, opacity: 0 });

      element.addEventListener("mouseenter", () => {
        gsap.fromTo(
          imageSpider,
          { top: 0, right: -10, opacity: 0 },
          { top: 100, right: -10, opacity: 1, duration: 0.3 }
        );
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(imageSpider, { top: 0, right: 0, opacity: 0, duration: 0.3 });
      });
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <footer className="text-white w-full">
      <div className="container-layout grid grid-cols-12 relative">
        <div className="absolute" ref={imageSpiderRef}>
          <Image
            width={100}
            height={100}
            src={"./VP957 Baby Spider man SVG.svg"}
            alt="Spider"
          />
        </div>
        <div className="grid col-span-12 lg:col-span-6 grid-rows-2">
          <div className="border-2 border-b-0 border-dashed border-black overflow-hidden lg:flex-row">
            <div className="flex">
              {data.map((section, index) => (
                <div
                  key={index}
                  className="flex-1 border-r-2 border-dashed border-black last:border-r-0 flex flex-col"
                >
                  <div className="text-md md:text-xl uppercase mb-4 border-b-2 border-dashed border-black p-2">
                    {section.title}
                  </div>
                  <div className="flex flex-col space-y-2">
                    {section.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="border-b border-dashed border-black last:border-b-0 p-2"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-around border-2 border-dashed border-black">
            <h2 className="font-pixel text-center text-8xl stroke-text">
              MY PORTFOLIO
            </h2>
            <div className="border-b-2 border-dashed border-black"></div>
            <div className="flex items-center justify-between px-4">
              <div className="uppercase">
                © {new Date().getFullYear()} ahkiet. All rights reserved.
              </div>
              <div className="uppercase">license</div>
            </div>
          </div>
        </div>

        <div className="grid col-span-12 lg:col-span-6 grid-rows-[3fr_1fr] mt-4 lg:mt-0 lg:border-l-0 border-l-2 border-t-2 border-r-2 border-b-2 border-dashed border-black">
          <div
            className="flex flex-col justify-between p-4 border-b-2 border-dashed border-black bg-gradient-animation"
            ref={elementRef}
          >
            <div className="font-pixel text-black text-5xl md:text-6xl">
              SUBSCRIBE
            </div>
            <div className="flex justify-between items-center">
              <div className="uppercase">Thanks for checking this out!</div>
              <div
                className="bg-black w-10 h-10 flex justify-center items-center cursor-pointer group p-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Icon
                  icon="gis:north-arrow"
                  width={24}
                  height={24}
                  className="text-white transition-transform duration-300 ease-in-out group-hover:scale-125"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around">
            {socialLinks.map((item, index) => (
              <Link
                href={item.href}
                target="_blank"
                key={index}
                className={`${
                  index < socialLinks.length - 1
                    ? "border-r-2 border-dashed border-black flex-center"
                    : " flex-center"
                } hover:bg-white hover:text-black w-full h-full cursor-pointer p-2 duration-300 transform transition-all`}
              >
                <Icon icon={item.icon} width={38} height={38} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
