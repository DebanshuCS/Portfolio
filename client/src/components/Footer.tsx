export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="container flex h-14 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Debanshu Das. All rights reserved.
        </p>
      </div>
    </footer>
  )
}