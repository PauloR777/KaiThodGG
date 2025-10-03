"use client"

import Link from "next/link"
import AuthGuard from "../../../components/AuthGuard"

const items = [
  { id: 1, title: "Valoran ที่ห้อยปืนและโปรไฟล์", price: 199, img: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/481466533_965206575748364_890515626701571344_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HVmazhAyLgcQ7kNvwGKs0Ex&_nc_oc=Adls2X5LhHrR9CyJ6KBOB_8YX-lhSmzLGp20H7CUd6UcMarzqFimkCJtyKl_58KLrJw&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=YJmTSP8Am5UEqGZkzuyfYA&oh=00_AfaljuBJlw19pvSQ8cKY6Q-Eu-cUM6_J0Dz1xz17MyyAqA&oe=68E2E2D3" },
  { id: 2, title: "Valorant Battle Pass", price: 399, img: "https://blix.gg/wp-content/uploads/2024/10/image_2024-10-27_205932222.png" },
  { id: 3, title: "Valoran เซ็ตปืน", price: 2499, img: "https://i.ytimg.com/vi/xOFv16NbvCU/maxresdefault.jpg" },
  { id: 4, title: "Genshin Impact Pass", price: 499, img: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/154517/Originals/battle-pass-genshin-impact%20(1).jpg" },
  { id: 5, title: "PUBG Royale Pass ซีซั่น 19", price: 199, img: "https://news.codashop.com/th/wp-content/uploads/sites/9/2021/05/PUBG-Mobile-Season-19-Royale-Pass.jpg" },  
  { id: 6, title: "ROV Valor Pass", price: 299, img: "https://i.ytimg.com/vi/nq8UvY2gTU4/maxresdefault.jpg" },
  { id: 7, title: "FREE FIRE Pass", price: 199, img: "https://www.gamepur.com/wp-content/uploads/2020/08/30082625/maxresdefault.jpg" },
  { id: 8, title: "Star Rail Pass", price: 199, img: "https://admin.esports.gg/wp-content/uploads/2023/04/Star-Pass-968x544.webp" },
  { id: 9, title: "Star Rail Special Pass", price: 499, img: "https://img.game8.co/3742905/dbbb06c93818ceb4e38ea360b5cd9caa.png/original" },
]

export default function ShopPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-linear-gradient(135deg, #ff6b9d, #6a7efc) text-white p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold tracking-wide">🎮 ร้านค้า แพ็คสุดคุ้นค่า</h1>
            <Link href="/" className="text-sm text-blue-400 hover:underline">↩ กลับหน้าหลัก</Link>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((it) => (
              <div key={it.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                <img src={it.img} alt={it.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">เติมเกมได้ง่ายและรวดเร็ว</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{it.price} บาท</span>
                    <Link href={`/menu/shop/package?id=${it.id}&title=${encodeURIComponent(it.title)}&price=${it.price}`}>
                    <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-blue-600 transition duration-300">
                    🛒 เติมเลย
                    </button>
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
