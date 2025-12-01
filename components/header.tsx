"use client";

import Image from "next/image";
import Navigation from "./navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { div } from "three/tsl";
import Link from "next/link";

interface HeaderProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 2 }
    );
  }, []);

  return (
    <div className="container-layout sticky top-10 z-50">
      <header
        ref={headerRef}
        className="rounded-4xl px-6 bg-background/20 backdrop-blur-lg border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      >
        <div className="container-custom py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={
                "https://rarible.com/ethereum/items/0xc9154424b823b10579895ccbe442d41b9abd96ed:13349126132604652420931328155761151029331176567565362372852467676420281204738"
              }
              target="_blank"
              className="h-10 w-10 rounded-full overflow-hidden cursor-pointer"
            >
              <Image
                width={40}
                height={40}
                src="/avatar-nft.png"
                alt="ahkiet"
              />
            </Link>
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
    </div>
  );
}
