"use client";

import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import Navigation from "@/components/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;

    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return null;
  }
  return (
    <div className="relative w-full mx-auto px-6 sm:px-4 md:p-0 container">
      <Header onThemeToggle={toggleTheme} isDark={isDark} />
      <main className="transition-colors duration-500">
        <HeroSection />
      </main>
    </div>
  );
}
