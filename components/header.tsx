"use client"


interface HeaderProps {
  onThemeToggle: () => void
  isDark: boolean
}

export default function Header({ onThemeToggle, isDark }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-custom py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3"
        >
          {/* <Avatar className="h-10 w-10">
            <AvatarImage src="/professional-avatar.png" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar> */}
          <div>
            <h1 className="font-bold text-lg">Your Name</h1>
            <p className="text-xs text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>

        {/* <button
          onClick={onThemeToggle}
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
        </button> */}
      </div>
    </header>
  )
}
