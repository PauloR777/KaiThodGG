"use client"

import Link from "next/link"
import AuthGuard from "../../../components/AuthGuard"

const items = [
  { id: 1, title: "ชุดสกิน Limited", price: 199 },
  { id: 2, title: "โค้ดเกมยอดนิยม", price: 299 },
  { id: 3, title: "แพ็กคุ้มค่า", price: 499 },
]

export default function ShopPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">ร้านค้า</h1>
            <Link href="/" className="text-sm text-blue-400">↩ กลับหน้าหลัก</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {items.map((it) => (
              <div key={it.id} className="bg-gray-900 rounded-xl p-4 shadow">
                <h3 className="font-semibold mb-2">{it.title}</h3>
                <p className="text-sm mb-4">ราคา {it.price} บาท</p>
                <button className="px-4 py-2 bg-red-600 rounded">ซื้อเลย</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
