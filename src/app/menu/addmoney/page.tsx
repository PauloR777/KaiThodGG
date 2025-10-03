"use client"

import Link from "next/link"
import { useState } from "react"
import AuthGuard from "../../../components/AuthGuard"
import { useHistoryStore } from "../../../store/historyStore"

export default function AddMoneyPage() {
  const { addHistory } = useHistoryStore()
  const [selectedGame, setSelectedGame] = useState<keyof typeof gameRates>("Valo")
  const [selectedRate, setSelectedRate] = useState<string>("1000")
  const [method, setMethod] = useState("Credit")

  const gameRates = {
    Valo: {
      name: "Valorant",
      currency: "VP",
      rates: {
        "1000": { baht: 1000, coin: 1000 },
        "2000": { baht: 2000, coin: 2050 },
        "3000": { baht: 3000, coin: 3150 },
        "5000": { baht: 5000, coin: 5350 },
        "10000": { baht: 10000, coin: 11000 },
      },
    },
    ROV: {
      name: "RoV",
      currency: "คูปอง",
      rates: {
        "50": { baht: 50, coin: 60 },
        "100": { baht: 100, coin: 130 },
        "500": { baht: 500, coin: 690 },
        "1000": { baht: 1000, coin: 1450 },
        "2000": { baht: 2000, coin: 3000 },
      },
    },
    PB: {
      name: "Point Blank",
      currency: "แคช",
      rates: {
        "100": { baht: 100, coin: 10000 },
        "300": { baht: 300, coin: 33000 },
        "500": { baht: 500, coin: 57000 },
        "1000": { baht: 1000, coin: 120000 },
        "3000": { baht: 3000, coin: 390000 },
      },
    },
  }

  function onSubmit(e: React.FormEvent) {
  e.preventDefault()
  const game = gameRates[selectedGame]
  const { baht, coin } = game.rates[selectedRate as keyof typeof game.rates]

  addHistory(`เติมเกม ${game.name} ผ่าน ${method} จำนวน ${baht} บาท ได้ ${coin} ${game.currency}`)
  alert(`เติมเงิน ${baht} บาท → ได้ ${coin} ${game.currency} ผ่าน ${method}`)
}


  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-indigo-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">เติมเงิน</h1>
            <Link href="/" className="text-sm text-blue-300 hover:underline">
              ↩ กลับหน้าหลัก
            </Link>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow">
            <form onSubmit={onSubmit} className="space-y-4">
              {/* เลือกเกม */}
              <label className="block text-sm">เลือกเกม</label>
              <select
                value={selectedGame}
                onChange={(e) => {
                  setSelectedGame(e.target.value as keyof typeof gameRates)
                  setSelectedRate(Object.keys(gameRates[e.target.value as keyof typeof gameRates].rates)[0]) // รีเซ็ต rate ให้ตรงกับเกม
                }}
                className="w-full p-3 rounded bg-gray-800"
              >
                {Object.keys(gameRates).map((key) => (
                  <option key={key} value={key}>
                    {gameRates[key as keyof typeof gameRates].name}
                  </option>
                ))}
              </select>

              {/* เลือกช่องทางชำระ */}
              <label className="block text-sm">ช่องทางชำระ</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full p-3 rounded bg-gray-800"
              >
                <option value="Credit">บัตรเครดิต/เดบิต</option>
                <option value="Truemoney">TrueMoney</option>
                <option value="Bank">โอนธนาคาร</option>
              </select>

              {/* เลือกจำนวนเงิน */}
              <label className="block text-sm">จำนวนเงิน</label>
              <select
                value={selectedRate}
                onChange={(e) => setSelectedRate(e.target.value)}
                className="w-full p-3 rounded bg-gray-800"
              >
                {Object.entries(gameRates[selectedGame].rates).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.baht} บาท → {val.coin} {gameRates[selectedGame].currency}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold"
              >
                เติมเงิน
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
