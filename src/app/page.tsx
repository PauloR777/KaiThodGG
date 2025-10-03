import Link from "next/link";

export default function HomePage() {
  return (

    <main className="flex flex-col items-center justify-center p-6 space-y-2 linear-gradient(135deg, #ff6b9d, #6a7efc) text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-[#ff6b9d] to-[#6a7efc] text-white py-3 overflow-hidden rounded-2xl shadow-lg border-2 border-white/20">
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, index) => (
              <span key={index} className="mx-8 inline-block font-medium text-sm sm:text-base">
                🎮 อัพเดททุกสัปดาห์! • ✨ โปรโมชั่นพิเศษสำหรับสมาชิก • 🏆 รับสิทธิ์พิเศษมากมาย • 🎯 ลดราคาเพียบ!
              </span>
            ))}
          </div>

          {/* Gradient overlay เพื่อให้ข้อความค่อยๆ จาง */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#ff6b9d] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#6a7efc] to-transparent z-10"></div>
        </div>
      </div>
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-800 rounded-2xl p-10 max-w-6xl shadow-lg mt-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Text */}
          <div>
            <h1 className="text-4xl font-extrabold mb-4">🎮 แนะนำเกมน่าเล่นประจำสัปดาห์ </h1>
            <p className="text-lg mb-6">
              อัปเดตเกมใหม่ล่าสุด พร้อมโปรโมชั่นและกิจกรรมพิเศษสำหรับคอเกม
            </p>
            <Link href={`/menu/shop`}>
              <button className="px-6 py-3 bg-red-600 rounded-xl hover:bg-blue-600 transition duration-300">
                🛒 ดูโปรโมชั่นพิเศษ
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://photos5.appleinsider.com/gallery/40883-79111-B3840B94-33C9-4304-96D9-2BEBF83ECBAD-xl.jpg"
              alt="Roblox"
              className="rounded-xl shadow-lg max-h-80"
            />
          </div>
        </div>
      </div>

      {/* Sale Section */}
      <section className="max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-6">🔥 FLASH SALE % </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Honkai StarRail", discount: "ลดทุกแพ็ค -5%", img: "https://image.api.playstation.com/vulcan/ap/rnd/202308/1103/8c3ce3611a4bb187418bb5e24924a055ba33d3046a7aaacb.png" },
            { name: "Genshin Impact", discount: "ลดทุกแพ็ค -7%", img: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2602/30935168a0f21b6710dc2bd7bb37c23ed937fb9fa747d84c.png" },
            { name: "Valorant", discount: "ลดทุกแพ็ค -10%", img: "https://img2.tapimg.net/post/images/Fn7uPA0Bb_AL-QX60nnI9W6jgOxo.png?imageMogr2/thumbnail/360x9999%3E/quality/80/format/jpg/interlace/1/meta-keep-list/VXNlckNvbW1lbnQ%3D/ignore-error/1&t=1" },
            { name: "FREE FIRE", discount: "ลดทุกแพ็ค -99%", img: "data:image/png;base64,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" },
          ].map((game, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded-xl shadow hover:bg-gray-700 transition"
            >
              <img src={game.img} alt={game.name} className="rounded mb-3 h-48 w-full object-cover" />
              <p className="text-lg font-bold">{game.name}</p>
              <p className="text-red-400 mt-2 text-xl">{game.discount}</p>
              <Link href={`/menu/shop`}>
                <button className="mt-3 px-4 py-2 bg-red-600 rounded-lg hover:bg-blue-600 transition duration-300">
                  🛒 เติมเลย
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* New Release */}
      <section className="max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-6">✨ เกมยอดนิยม </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "PUBG ", img: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-19vwb.jpg" },
            { name: "ROV", img: "https://img.4gamers.com.tw/ckfinder-th/images/RoV%20New%20Era%20(9)_Logo.jpg?versionId=bSvtBAoNjSe4qGuPzGD2trTodhXgh0if" },
            { name: " Roblox", img: "https://photos5.appleinsider.com/gallery/40883-79111-B3840B94-33C9-4304-96D9-2BEBF83ECBAD-xl.jpg" },
          ].map((game, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl shadow hover:scale-105 transition"
            >
              <img src={game.img} alt={game.name} className="rounded mb-3 h-48 w-full object-cover" />
              <p className="text-lg font-bold">{game.name}</p>
              <Link href={`/menu/addmoney`}>
                <button className="mt-3 px-4 py-2 bg-red-600 rounded-lg hover:bg-blue-600 transition duration-300">
                  🛒 เติมเลย
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Games */}
      <section className="max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-6">💸 เกมทั้งหมด</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Honkai StarRail", img: "https://image.api.playstation.com/vulcan/ap/rnd/202308/1103/8c3ce3611a4bb187418bb5e24924a055ba33d3046a7aaacb.png" },
            { name: "Identity V", img: "https://play-lh.googleusercontent.com/8-SniYIRaeki791FyNlRggRuIjlxBpYM9k6F7q1UL75FW7IEUSWridDbrXmX5DkTokRq" },
            { name: "Genshin Impact", img: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2602/30935168a0f21b6710dc2bd7bb37c23ed937fb9fa747d84c.png" },
            { name: "Valorant", discount: "-10%", img: "https://img2.tapimg.net/post/images/Fn7uPA0Bb_AL-QX60nnI9W6jgOxo.png?imageMogr2/thumbnail/360x9999%3E/quality/80/format/jpg/interlace/1/meta-keep-list/VXNlckNvbW1lbnQ%3D/ignore-error/1&t=1" },
            { name: "Rov", discount: "-10%", img: "data:image/jpeg;base64,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" },
            { name: "Roblox", img: "https://play-lh.googleusercontent.com/7cIIPlWm4m7AGqVpEsIfyL-HW4cQla4ucXnfalMft1TMIYQIlf2vqgmthlZgbNAQoaQ" },
            { name: "PUBG ", img: "https://play-lh.googleusercontent.com/bqliWUqt7QfpSC4EybIXMT_QZclpYN9ANItoMTXltshu8v0HTnFdfU_pboHzz7Zs7pqX1AfLE7eFVU8S0aSI" },
            { name: "FREE FIRE", discount: "-99%", img: "data:image/png;base64,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" },


          ].map((game, i) => (
            <div
              key={i}
              className="bg-gray-900 p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
            >
              <img src={game.img} alt={game.name} className="rounded mb-3 h-48 w-full object-cover" />
              <p className="text-lg font-semibold">{game.name}</p>
              <Link href={`/menu/addmoney`}>
                <button className="mt-3 px-4 py-2 bg-red-600 rounded-lg hover:bg-blue-600 transition duration-300">
                  🛒 เติมเลย
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-4xl text-center mb-40">
        <h2 className="text-3xl font-bold mb-4">📢 ข่าวสารล่าสุด 📢</h2>
        <p>
          ติดตามข่าวสาร อัปเดตเกมใหม่ และกิจกรรมพิเศษได้ที่เพจและดิสคอร์ดของเรา
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 rounded-xl hover:bg-blue-600 transition duration-300">
          📌 ติดตามเพิ่มเติม
        </button>
      </section>

    </main>
  )
}
