"use client";

import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="relative w-full mx-auto px-6 sm:px-4 md:p-0 container">
      <Header />
      <main className="transition-colors duration-500">
        <HeroSection />
      </main>
    </div>
  );
}
