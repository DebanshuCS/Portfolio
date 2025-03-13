import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <Header />
      <main className="pt-16 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}