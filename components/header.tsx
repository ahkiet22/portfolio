"use client";

import Image from "next/image";
import Navigation from "./navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeaderProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export default function Header() {
  const headerRef = useRef<HTMLElement  | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);

  return (
    <header
      ref={headerRef}
      className="rounded-4xl px-4 sticky top-10 z-50 bg-background/20 backdrop-blur-lg border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image width={40} height={40} src="/avatar-nft.png" alt="ahkiet" />
          </div>
          <div>
            <h1 className="font-bold text-lg">ahkiet</h1>
            <p className="text-xs text-muted-foreground">
              Full Stack Developer
            </p>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
