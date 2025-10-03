"use client"

import Link from "next/link"
import AuthGuard from "../../../components/AuthGuard"
import React from "react"
import { useHistoryStore } from "../../../store/historyStore"

export default function HistoryPage() {
  const { history} = useHistoryStore()

  return (
    <AuthGuard>
      <div className="min-h-screen bg-linear-gradient(135deg, #ff6b9d, #6a7efc) text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold">📜 ประวัติการชำระ</h1>
            <div className="flex gap-4">
              <Link href="/" className="text-sm text-blue-400 hover:underline">↩ กลับหน้าหลัก</Link>
            </div>
          </div>

          {/* History List */}
          <div className="bg-gray-900 rounded-xl p-4 shadow max-h-[500px] overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-gray-400 text-center py-10">ยังไม่มีประวัติการทำรายการ</p>
            ) : (
              <ul className="space-y-3">
                {history.map((h) => (
                  <li 
                    key={h.id} 
                    className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition flex justify-between items-center"
                  >
                    <span>{h.action}</span>
                    <span className="text-gray-400 text-sm">{new Date(h.timestamp).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
