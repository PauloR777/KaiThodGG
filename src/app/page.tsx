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
            <button className="px-6 py-3 bg-red-600 rounded-xl hover:bg-blue-600 transition duration-300">
              🛒 ดูโปรโมชั่นพิเศษ
            </button>
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
              <button className="mt-3 px-4 py-2 bg-red-600 rounded-lg hover:bg-blue-600 transition duration-300">
                🛒 เติมเลย
              </button>
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
              <button className="mt-3 px-4 py-2 bg-red-600 rounded-lg hover:bg-blue-600 transition duration-300">
                🛒 เติมเลย
              </button>
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
            { name: "Valorant", discount: "-10%", img: "https://img2.tapimg.net/post/images/Fn7uPA0Bb_AL-QX60nnI9W6jgOxo.png?imageMogr2/thumbnail/360x9999%3E/quality/80/format/jpg/interlace/1/meta-keep-list/VXNlckNvbW1lbnQ%3D/ignore-error/1&t=1" }, { name: "ROV", img: "https://cdn-bgp.bluestacks.com/BGP/th/gametiles_com.garena.game.kgth.jpg" },
            { name: " Roblox", img: "https://play-lh.googleusercontent.com/7cIIPlWm4m7AGqVpEsIfyL-HW4cQla4ucXnfalMft1TMIYQIlf2vqgmthlZgbNAQoaQ" },
            { name: "PUBG ", img: "https://play-lh.googleusercontent.com/bqliWUqt7QfpSC4EybIXMT_QZclpYN9ANItoMTXltshu8v0HTnFdfU_pboHzz7Zs7pqX1AfLE7eFVU8S0aSI" },
            { name: "FREE FIRE", discount: "-99%", img: "data:image/png;base64,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" },


          ].map((game, i) => (
            <div
              key={i}
              className="bg-gray-900 p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
            >
              <img src={game.img} alt={game.name} className="rounded mb-3 h-48 w-full object-cover" />
              <p className="text-lg font-semibold">{game.name}</p>
              <button className="mt-3 px-4 py-2 bg-red-600 rounded-lg hover:bg-blue-600 transition duration-300">
                🛒 เติมเลย
              </button>
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
