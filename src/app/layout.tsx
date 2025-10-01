import "./globals.css"
import type { Metadata } from "next"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AuthGuard from "../components/AuthGuard"

export const metadata: Metadata = {
  title: "Game Giveaway",
  description: "แจก Key Mortal Kombat 11 ฟรี",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <AuthGuard>{children}</AuthGuard>
        </main>

        <Footer />
      </body>
    </html>
  )
}
