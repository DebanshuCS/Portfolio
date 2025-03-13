import { ThemeToggle } from "./ui/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-xl font-bold">Debanshu Das</div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}