"use client"

import Link from "next/link"
import AuthGuard from "../../../components/AuthGuard"

const history = [
  { id: 1, type: "เติมเงิน", detail: "เติม 100 บาท", date: "2025-09-30" },
  { id: 2, type: "ซื้อ", detail: "ซื้อ ชุดสกิน Limited", date: "2025-09-29" },
]

export default function HistoryPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-linear-gradient(135deg, #ff6b9d, #6a7efc) text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">ประวัติการชำระ</h1>
            <Link href="/" className="text-sm text-blue-400">↩ กลับหน้าหลัก</Link>
          </div>

          <div className="bg-gray-900 rounded-xl p-4 shadow">
            <ul className="space-y-3">
              {history.map((h) => (
                <li key={h.id} className="flex justify-between items-center p-3 bg-gray-800 rounded">
                  <div>
                    <div className="font-semibold">{h.type}</div>
                    <div className="text-sm text-gray-300">{h.detail}</div>
                  </div>
                  <div className="text-sm text-gray-400">{h.date}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
