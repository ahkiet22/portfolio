"use client";
export default function Navigation() {
  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="container-custom py-6 hidden md:flex items-center justify-center gap-12">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
