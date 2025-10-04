"use client"

import Link from "next/link"
import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import AuthGuard from "@/components/AuthGuard"
import { useHistoryStore } from "@/store/historyStore"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { addHistory } = useHistoryStore()

  const title = searchParams.get("title") || "ไม่ระบุสินค้า"
  const price = searchParams.get("price") || "0"
  const id = searchParams.get("id") || "-"

  const [playerId, setPlayerId] = useState("")
  const [method, setMethod] = useState("ชำระเงิน")
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setPreview(URL.createObjectURL(selectedFile))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!playerId) {
      alert("⚠ กรุณากรอก ID ผู้เล่น ก่อนทำรายการ")
      return
    }
    if (!file) {
      alert("⚠ กรุณาแนบหลักฐานการชำระเงิน")
      return
    }

    // ✅ เก็บ history ลง Zustand
    addHistory(
      `ซื้อPackage ${title} ราคา ${price} บาท ผ่าน ${method}`
    )
    alert("✅ ส่งข้อมูลชำระเงินเรียบร้อย!")
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-pink-500 to-indigo-700 flex items-center justify-center px-6 py-16">
        <div className="bg-gray-900 text-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold"> ชำระเงิน</h2>
            <Link
              href="/menu/shop"
              className="text-base text-blue-400 hover:underline"
            >
              ↩ กลับร้านค้า
            </Link>
          </div>

          {/* รายละเอียดสินค้า */}
          <div className="mb-8 bg-gray-800 p-6 rounded-2xl">
            <p className="text-gray-400 text-base mb-2">รหัสสินค้า: {id}</p>
            <h3 className="font-semibold text-2xl">{title}</h3>
            <p className="text-pink-400 font-bold mt-3 text-xl">{price} บาท</p>
          </div>

          {/* ฟอร์มกรอกข้อมูล */}
          <form onSubmit={handleSubmit} className="space-y-6 text-lg">
            {/* ไอดีผู้เล่น */}
            <div>
              <label className="block text-base mb-3"> ID ผู้เล่น</label>
              <input
                type="text"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
                placeholder="เช่น 123456789 หรือชื่อในเกม"
                className="w-full px-5 py-3 text-lg rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>

            {/* ช่องทางการชำระเงิน */}
            <div>
              <label className="block text-base mb-3"> ช่องทางชำระ</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full px-5 py-3 text-lg rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              >
                <option value="ชำระเงิน">เลือกช่องทางชำระ</option>
                <option value="บัญชีธนาคาร">บัญชีธนาคาร</option>
                <option value="Truemoney">TrueMoney</option>
                <option value="QRCode">สแกนจ่าย</option>
              </select>
            </div>

            {/* แสดงรายละเอียดตามช่องทาง */}
            {method === "บัญชีธนาคาร" && (
              <div className="bg-gray-800 p-6 rounded-2xl text-center border border-gray-700">
                <p className="text-lg font-semibold mb-2"> บัญชีธนาคาร กสิกร</p>
                <p className="text-pink-400 font-bold text-2xl">196-xxx-xxxx</p>
              </div>
            )}

            {method === "Truemoney" && (
              <div className="bg-gray-800 p-6 rounded-2xl text-center border border-gray-700">
                <p className="text-lg font-semibold mb-2"> โอนเงินไปที่เบอร์</p>
                <p className="text-pink-400 font-bold text-2xl">088-xxx-xxxx</p>
              </div>
            )}

            {method === "QRCode" && (
              <div className="bg-gray-800 p-6 rounded-2xl text-center border border-gray-700">
                <p className="text-lg font-semibold mb-4"> สแกน QR เพื่อโอนเงิน</p>
                <img
                  src="https://play-lh.googleusercontent.com/x2tHgxlwNJArFrjSzd4stJo2TEP3WsEQfz5B5MZdT7SioP51LXWKuPqeL49IUs4PjMYi"
                  alt="QR Code"
                  className="mx-auto w-56 h-56 rounded-lg shadow-lg border border-gray-700"
                />
              </div>
            )}

            {/* หลักฐานการชำระเงิน */}
            <div>
              <label className="block text-base mb-3">
                แนบหลักฐานการชำระเงิน
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-300 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:text-base file:font-semibold file:bg-pink-500 file:text-white hover:file:bg-pink-600"
              />
              {preview && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-400 mb-2"> ตัวอย่างหลักฐาน:</p>
                  <img
                    src={preview}
                    alt="Preview"
                    className="mx-auto w-56 h-56 rounded-lg border border-gray-700 shadow-md object-cover"
                  />
                </div>
              )}
            </div>

            {/* สรุปยอด */}
            <div className="bg-gray-800 p-6 rounded-2xl text-center">
              <p className="text-gray-400 text-base">ยอดชำระทั้งหมด</p>
              <p className="text-3xl font-bold text-pink-400">{price} บาท</p>
            </div>

            {/* ปุ่มยืนยัน */}
            <button
              type="submit"
              className="w-full py-4 bg-red-600 hover:bg-blue-600 rounded-2xl font-semibold text-xl transition duration-300"
            >
              ✅ ยืนยันการชำระเงิน
            </button>
          </form>
        </div>
      </div>
    </AuthGuard>
  )
}
