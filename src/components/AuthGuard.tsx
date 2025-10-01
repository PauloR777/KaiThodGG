"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("auth_token")
    const onAuthPage = pathname?.startsWith("/login") || pathname?.startsWith("/register")

    if (!token && !onAuthPage) {
      router.replace("/login")
      return
    }

    setChecked(true)
  }, [pathname, router])

  if (!checked) return null
  return <>{children}</>
}
