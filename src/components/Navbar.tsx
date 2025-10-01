"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import useUserStore from "../store/userStore"

export default function Navbar() {
  const name = useUserStore((s) => s.name)
  const logoutStore = useUserStore((s) => s.logout)
  const router = useRouter()

  function logout() {
    // clear token if you use it
    localStorage.removeItem("auth_token")
    logoutStore()
    router.push("/login")
  }

  return (
    <header className="bg-gradient-to-r from-black via-red-800 to-black p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/file.svg" alt="Logo" className="h-10" />
          <span className="font-bold">Game Giveaway</span>
        </div>

        <nav className="hidden sm:flex gap-6 text-sm font-semibold items-center">
          <Link href="#" className="hover:text-red-400">🏠 หน้าหลัก</Link>
          <Link href="#" className="hover:text-red-400">🛒 ร้านค้า</Link>
          <Link href="#" className="hover:text-red-400">🔧 บริการอื่นๆ</Link>

          {name ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-semibold">{name.charAt(0).toUpperCase()}</div>
              <span className="hidden md:inline">{name}</span>
              <button onClick={logout} className="ml-2 px-3 py-1 bg-gray-800 rounded">ออกจากระบบ</button>
            </div>
          ) : (
            <>
              <Link href="/login" className="hover:text-red-400">➡ เข้าสู่ระบบ</Link>
              <Link href="/register" className="hover:text-red-400">➕ สมัครสมาชิก</Link>
            </>
          )}
        </nav>

        <div className="sm:hidden">
          <button className="px-3 py-2 border rounded text-sm">เมนู</button>
        </div>
      </div>
    </header>
  )
}
