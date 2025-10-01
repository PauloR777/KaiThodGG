"use client"

import Link from "next/link"
import { useState } from "react"
import AuthGuard from "../../../components/AuthGuard"

export default function AddMoneyPage() {
  const [amount, setAmount] = useState(0)
  const [method, setMethod] = useState("credit")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert(`เติมเงิน ${amount} บาท ผ่าน ${method}`)
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">เติมเงิน</h1>
            <Link href="/" className="text-sm text-blue-400">↩ กลับหน้าหลัก</Link>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow">
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block text-sm">จำนวนเงิน (บาท)</label>
              <input type="number" value={amount === 0 ? "" : amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full p-3 rounded bg-gray-800" placeholder="เช่น 100" required />

              <label className="block text-sm">ช่องทางชำระ</label>
              <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full p-3 rounded bg-gray-800">
                <option value="credit">บัตรเครดิต/เดบิต</option>
                <option value="truemoney">TrueMoney</option>
                <option value="bank">โอนธนาคาร</option>
              </select>

              <div className="flex justify-end">
                <button type="submit" className="px-4 py-2 bg-red-600 rounded">เติมเงิน</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
