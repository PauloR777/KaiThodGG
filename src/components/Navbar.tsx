"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import useUserStore from "../store/userStore"

export default function Navbar() {
  const name = useUserStore((s) => s.name)
  const logoutStore = useUserStore((s) => s.logout)
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  function logout() {
    localStorage.removeItem("auth_token")
    logoutStore()
    router.push("/login")
  }

  const isActive = (path: string) => pathname === path

  const NavLink = ({ href, children, icon }: { href: string; children: string; icon: string }) => (
    <Link 
      href={href} 
      className={`group relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
        isActive(href) 
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50" 
          : "hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:text-purple-300"
      }`}
    >
      <span className="text-xl group-hover:scale-125 transition-transform duration-300">{icon}</span>
      <span className="font-semibold">{children}</span>
      {!isActive(href) && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
      )}
    </Link>
  )

  const menuLinks = (
    <>
      <NavLink href="/" icon="🏠">หน้าหลัก</NavLink>
      <NavLink href="/menu/shop" icon="🛒">ร้านค้า</NavLink>
      <NavLink href="/menu/addmoney" icon="💰">เติมเงิน</NavLink>
      <NavLink href="/menu/history" icon="📜">ประวัติ</NavLink>
      {name ? (
        <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-600/20 rounded-xl border border-purple-400/30 backdrop-blur-sm shadow-lg">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
              {name.charAt(0).toUpperCase()}
            </div>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-sm bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">{name}</span>
            <span className="text-xs text-purple-300">✨ ออนไลน์</span>
          </div>
          <button 
            onClick={logout} 
            className="ml-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105 text-white"
          >
            ออกจากระบบ
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link 
            href="/login" 
            className="px-5 py-2 rounded-xl border-2 border-purple-400 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            ➡ เข้าสู่ระบบ
          </Link>
          <Link 
            href="/register" 
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-400 hover:via-pink-400 hover:to-blue-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-500/50 hover:scale-110 hover:shadow-xl"
          >
            ✨ สมัครสมาชิก
          </Link>
        </div>
      )}
    </>
  )

  return (
    <header className="bg-gradient-to-r from-gray-900 via-purple-900/50 to-blue-900/50 border-b-2 border-purple-500/30 backdrop-blur-md sticky top-0 z-50 shadow-2xl shadow-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/KaiThodGG.svg" 
                  alt="Logo" 
                  className="h-12 cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                  KaiThodGG
                </span>
                <span className="text-xs text-purple-300 font-medium">✨ Gaming Package</span>
              </div>
            </Link>
          </div>

          {/* desktop nav */}
          <nav className="hidden lg:flex gap-2 items-center">
            {menuLinks}
          </nav>

          {/* mobile button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 border-2 border-purple-400/50 rounded-xl text-sm font-semibold hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 hover:border-purple-400 transition-all duration-300 flex items-center gap-2 text-purple-300"
            >
              <span className="text-xl">{isOpen ? "✖" : "☰"}</span>
              <span>{isOpen ? "ปิด" : "เมนู"}</span>
            </button>
          </div>
        </div>

        {/* mobile dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-2 bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-blue-900/95 backdrop-blur-xl p-4 rounded-2xl border-2 border-purple-500/30 shadow-2xl shadow-purple-900/50 animate-fadeIn">
            {menuLinks}
          </div>
        )}
      </div>
    </header>
  )
}