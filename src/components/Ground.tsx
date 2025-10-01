// components/Background.tsx
export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      {/* overlay ให้สีมืดลงเพื่อให้ text อ่านง่าย */}
      <div className="min-h-screen bg-black/50">
        {children}
      </div>
    </div>
  )
}
