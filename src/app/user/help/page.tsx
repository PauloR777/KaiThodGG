"use client";

import { useState } from "react";

export default function ReportForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      alert("กรุณากรอกข้อความก่อนส่ง 🚨");
      return;
    }

    // ตรงนี้คุณสามารถต่อ API / Backend เองได้
    console.log("ข้อความที่รายงาน:", message);

    alert("ส่งรายงานเรียบร้อย ✅");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          📢 รายงานปัญหา / ข้อเสนอแนะ
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              ข้อความรายงาน
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none p-3 text-gray-700"
              placeholder="กรุณากรอกปัญหาหรือข้อความของคุณที่นี่..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ส่งรายงาน
          </button>
        </form>
      </div>
    </div>
  );
}
