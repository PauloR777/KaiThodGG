"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { z } from "zod"
import useUserStore from "../../../src/store/userStore"

const loginSchema = z.object({
  name: z.string().min(1, "กรุณากรอกชื่อผู้ใช้"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  password: z.string().min(6, "รหัสผ่านต้องไม่น้อยกว่า 6 ตัวอักษร"),
})

export default function LoginPage() {
  const router = useRouter()
  const setNameStore = useUserStore.getState().setName
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = loginSchema.safeParse({ name, email, password })
    if (!result.success) {
      const err: Record<string, string> = {}
      result.error.issues.forEach((issue: z.ZodIssue) => {
        const key = String(issue.path[0] ?? "_")
        if (!err[key]) err[key] = issue.message
      })
      setErrors(err)
      return
    }

    // demo: accept valid credentials
    localStorage.setItem("auth_token", "demo-token")
    setNameStore(name)
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">เข้าสู่ระบบ</h2>
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <div>
            <input
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((s) => ({ ...s, name: "" })) }}
              placeholder="ชื่อผู้ใช้"
              className="w-full p-3 rounded bg-gray-800"
              aria-invalid={Boolean(errors.name)}
              aria-describedby="err-name"
            />
            {errors.name && <p id="err-name" className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((s) => ({ ...s, email: "" })) }}
              placeholder="อีเมล"
              className="w-full p-3 rounded bg-gray-800"
              aria-invalid={Boolean(errors.email)}
              aria-describedby="err-email"
            />
            {errors.email && <p id="err-email" className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setErrors((s) => ({ ...s, password: "" })) }}
              placeholder="รหัสผ่าน"
              className="w-full p-3 rounded bg-gray-800"
              aria-invalid={Boolean(errors.password)}
              aria-describedby="err-password"
            />
            {errors.password && <p id="err-password" className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="px-4 py-2 bg-red-600 rounded">เข้าสู่ระบบ</button>
            <a href="/register" className="text-sm text-blue-400">ยังไม่ได้สมัคร?</a>
          </div>
        </form>
      </div>
    </div>
  )
}
