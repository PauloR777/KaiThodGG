"use client"

import Link from "next/link"
import { useState } from "react"
import { z } from "zod"
import AuthGuard from "../../../components/AuthGuard"
import { useHistoryStore } from "../../../store/historyStore"

// Zod schema สำหรับ validate ไฟล์หลักฐาน
const paymentProofSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 5_000_000, "ไฟล์ต้องไม่เกิน 5MB") // max 5MB
    .refine(
      (file) => ["image/jpeg", "image/png", "image/jpg"].includes(file.type),
      "ไฟล์ต้องเป็น JPG หรือ PNG"
    ),
})

export default function AddMoneyPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [selectedGame, setSelectedGame] = useState<keyof typeof gameRates>("Choose")
  const [selectedRate, setSelectedRate] = useState<string>("0")
  const [method, setMethod] = useState("ชำระเงิน")
  const { addHistory } = useHistoryStore()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const gameRates = {
    Choose: { name: "--เลือกเกม--", currency: "จำนวน", rates: { "0": { baht: 0, coin: 0 } } },
    Valo: { name: "Valorant", currency: "VP", rates: { "1000": { baht: 1000, coin: 1000 }, "2000": { baht: 2000, coin: 2050 }, "3000": { baht: 3000, coin: 3150 }, "5000": { baht: 5000, coin: 5350 }, "10000": { baht: 10000, coin: 11000 } } },
    ROV: { name: "RoV", currency: "คูปอง", rates: { "50": { baht: 50, coin: 605 }, "100": { baht: 100, coin: 1302 }, "500": { baht: 500, coin: 6902 }, "1000": { baht: 1000, coin: 14505 }, "2000": { baht: 2000, coin: 30002 } } },
    PUBG: { name: "PUBG", currency: "UC", rates: { "100": { baht: 100, coin: 10000 }, "300": { baht: 300, coin: 33000 }, "500": { baht: 500, coin: 57000 }, "1000": { baht: 1000, coin: 120000 }, "3000": { baht: 3000, coin: 390000 } } },
    ROBLOX: { name: "Roblox", currency: "Robux", rates: { "50": { baht: 50, coin: 604 }, "100": { baht: 100, coin: 1302 }, "500": { baht: 500, coin: 6901 }, "1000": { baht: 1000, coin: 14502 }, "2000": { baht: 2000, coin: 30007 } } },
    Honkai: { name: "Honkai StarRail", currency: "Oneiric Shard", rates: { "50": { baht: 50, coin: 603 }, "100": { baht: 100, coin: 1303 }, "500": { baht: 500, coin: 6902 }, "1000": { baht: 1000, coin: 14501 }, "2000": { baht: 2000, coin: 30000 } } },
    Identity: { name: "Identity V", currency: "กระดุมแดง", rates: { "50": { baht: 50, coin: 60 }, "100": { baht: 100, coin: 130 }, "500": { baht: 500, coin: 690 }, "1000": { baht: 1000, coin: 1450 }, "2000": { baht: 2000, coin: 3000 } } },
    FF: { name: "FREE FIRE", currency: "เพชร", rates: { "50": { baht: 50, coin: 602 }, "100": { baht: 100, coin: 1305 }, "500": { baht: 500, coin: 6905 }, "1000": { baht: 1000, coin: 14504 }, "2000": { baht: 2000, coin: 30005 } } },
    Genshin: { name: "Genshin Impact", currency: "Genesis Crystal", rates: { "50": { baht: 50, coin: 606 }, "100": { baht: 100, coin: 1304 }, "500": { baht: 500, coin: 6908 }, "1000": { baht: 1000, coin: 14502 }, "2000": { baht: 2000, coin: 30001 } } },
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      alert("กรุณาแนบหลักฐานการชำระเงิน")
      return
    }

    // Validate file ด้วย Zod
    try {
      paymentProofSchema.parse({ file })
    } catch (err: any) {
      alert(err.errors ? err.errors.map((e: any) => e.message).join("\n") : "ไฟล์ไม่ถูกต้อง")
      return
    }

    const game = gameRates[selectedGame]
    const { baht, coin } = game.rates[selectedRate as keyof typeof game.rates]

    addHistory(`เติมเกม ${game.name} ผ่าน ${method} จำนวน ${baht} บาท`)
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
                  setSelectedRate(Object.keys(gameRates[e.target.value as keyof typeof gameRates].rates)[0])
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
                <option value="ชำระเงิน">เลือกช่องทางชำระ</option>
                <option value="เลขบัญชี">บัญชีธนาคาร</option>
                <option value="Truemoney">TrueMoney</option>
                <option value="QRCode">QR Code</option>
              </select>

              {/* แสดงรายละเอียดช่องทาง */}
              {method === "เลขบัญชี" && (
                <div className="shadow-xl rounded-3xl p-6 w-full max-w-xs mx-auto text-center border border-gray-300 bg-white transition-transform transform hover:scale-105">
                  <p className="mb-4 text-2xl font-semibold text-gray-800">หมายเลขบัญชีธนาคาร กสิกร</p>
                  <p className="mb-2 text-lg text-gray-600">196-xxxxx-xxxxx</p>
                </div>
              )}
              {method === "Truemoney" && (
                <div className="shadow-xl rounded-3xl p-6 w-full max-w-xs mx-auto text-center border border-gray-300 bg-white transition-transform transform hover:scale-105">
                  <p className="mb-4 text-2xl font-semibold text-gray-800">โอนเงินไปที่เบอร์</p>
                  <p className="mb-2 text-lg text-gray-600">088-xxx-xxxx</p>
                </div>
              )}
              {method === "QRCode" && (
                <div className="mt-4 w-full max-w-xs mx-auto text-center bg-white rounded-3xl shadow-xl p-6 border border-gray-300 transition-transform transform hover:scale-105">
                  <p className="mb-6 text-2xl font-semibold text-gray-800">สแกน QR เพื่อโอนเงิน</p>
                  <img
                    src="https://play-lh.googleusercontent.com/x2tHgxlwNJArFrjSzd4stJo2TEP3WsEQfz5B5MZdT7SioP51LXWKuPqeL49IUs4PjMYi"
                    alt="Bank QR Code"
                    className="mx-auto w-48 h-48 rounded-xl shadow-lg border border-gray-200"
                  />
                  <p className="mt-4 text-gray-600 text-sm">สแกนแล้วระบบจะโอนเงินอัตโนมัติ</p>
                </div>
              )}

              {/* แนบหลักฐานการชำระเงิน */}
              <div>
                <label className="block text-base mb-3">แนบหลักฐานการชำระเงิน</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-300 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:text-base file:font-semibold file:bg-pink-500 file:text-white hover:file:bg-pink-600"
                />
                {preview && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-400 mb-2">ตัวอย่างหลักฐาน:</p>
                    <img
                      src={preview}
                      alt="Preview"
                      className="mx-auto w-56 h-56 rounded-lg border border-gray-700 shadow-md object-cover"
                    />
                  </div>
                )}
              </div>

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
