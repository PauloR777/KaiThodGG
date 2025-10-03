"use client"

import Link from "next/link"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import AuthGuard from "@/components/AuthGuard"

export default function PaymentPage() {
  const searchParams = useSearchParams()
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

    alert(
      ` ทำรายการสำเร็จ! รอพนังงานเติมเงินเข้าสู่ระบบ\n\n สินค้า: ${title}\n ราคา: ${price} บาท\n ID ผู้เล่น: ${playerId}\n ช่องทาง: ${method}\n แนบหลักฐานเรียบร้อย`
    )
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
            <p className="text-pink-400 font-bold mt-3 text-xl"> {price} บาท</p>
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
                  src="data:image/png;base64,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"
                  alt="QR Code"
                  className="mx-auto w-56 h-56 rounded-lg shadow-lg border border-gray-700"
                />
              </div>
            )}

            {/* หลักฐานการชำระเงิน */}
            <div>
              <label className="block text-base mb-3"> แนบหลักฐานการชำระเงิน</label>
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

          {/* Footer */}
          <p className="text-sm text-center text-gray-400 mt-8">
            ระบบนี้เป็นการจำลองการชำระเงินเท่านั้น 
          </p>
        </div>
      </div>
    </AuthGuard>
  )
}
