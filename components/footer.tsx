"use client";

import { Icon } from "@iconify/react";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: "logos:github",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: "logos:linkedin-icon",
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/yourusername",
    icon: "logos:twitter",
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div className="text-2xl font-bold">MyPortfolio</div>

        {/* Social links */}
        {/* <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-700 transition"
            >
              <Icon icon={link.icon} width={24} height={24} />
            </a>
          ))}
        </div> */}

        {/* Quick links */}
        <div className="flex gap-4 text-sm">
          <a href="#about" className="hover:text-indigo-500 transition">
            About
          </a>
          <a href="#skills" className="hover:text-indigo-500 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-indigo-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-indigo-500 transition">
            Contact
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ahkiet. All rights reserved.
      </div>
    </footer>
  );
}
