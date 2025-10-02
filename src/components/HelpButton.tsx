import Link from "next/link"

export default function HelpButton() {

  return (
    <button
      aria-label="แจ้งปัญหา"
      className={`fixed bottom-6 right-6 bg-red-600 p-4 rounded-full shadow-lg hover:bg-red-500 transition-transform duration-200 `}
    >
      <Link href="/user/help" className="hover:text-red-400">🆘 แจ้งปัญหา</Link>
    </button>
  )
}

