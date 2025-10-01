"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password || !name) return
    // demo: just set token
    localStorage.setItem("auth_token", "demo-token")
    localStorage.setItem("user_name", name)
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">สมัครสมาชิก</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อผู้ใช้" className="w-full p-3 rounded bg-gray-800" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="อีเมล" className="w-full p-3 rounded bg-gray-800" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="รหัสผ่าน" className="w-full p-3 rounded bg-gray-800" />
          <div className="flex justify-between items-center">
            <button type="submit" className="px-4 py-2 bg-red-600 rounded">สมัคร</button>
            <a href="/login" className="text-sm text-blue-400">มีบัญชีอยู่แล้ว?</a>
          </div>
        </form>
      </div>
    </div>
  )
}
