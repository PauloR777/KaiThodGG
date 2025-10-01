"use client"

import { useEffect, useState } from "react"

export default function HelpButton() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const footer = document.getElementById("site-footer")
    if (!footer) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // hide the button when footer is intersecting
          setHidden(entry.isIntersecting)
        })
      },
      { root: null, threshold: 0.1 }
    )

    obs.observe(footer)

    return () => obs.disconnect()
  }, [])

  return (
    <button
      aria-label="แจ้งปัญหา"
      className={`fixed bottom-6 right-6 bg-red-600 p-4 rounded-full shadow-lg hover:bg-red-500 transition-transform duration-200 ${
        hidden ? "translate-y-24 opacity-0 pointer-events-none" : ""
      }`}
    >
      แจ้งปัญหา
    </button>
  )
}
