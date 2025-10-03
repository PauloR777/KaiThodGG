import Link from "next/link"
import Image from "next/image"

export default function HelpButton() {
  return (
    <button
      aria-label="แจ้งปัญหา"
      className={`
        fixed bottom-6 right-6 
        w-16 h-16
        bg-oklch(96.8% 0.007 247.896)
        rounded-full
        shadow-2xl hover:shadow-3xl
        hover:scale-110 active:scale-95
        transition-all duration-300 
        border-2 border-white/80
        hover:border-white
        animate-pulse hover:animate-none
        group
        z-50
        backdrop-blur-sm
        flex items-center justify-center
        overflow-hidden
      `}
    >
      <Link href="/user/help" className="flex items-center justify-center w-full h-full">
        {/* ใช้รูป PNG */}
        <Image
          src="/images/Help.png" // filename in public/images is 'Help.png' (case-sensitive)
          alt="แจ้งปัญหา"
          width={32}
          height={32}
          className="object-contain group-hover:scale-110 transition-transform duration-200"
        />
        
        {/* หรือใช้ไอคอน fallback ถ้ารูปไม่มี */}
        {/* <span className="text-2xl">🆘</span> */}
      </Link>
    </button>
  )
}