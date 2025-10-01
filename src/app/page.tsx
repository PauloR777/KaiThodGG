import HelpButton from "../components/HelpButton"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-6 space-y-20">
      {/* Banner */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 rounded-2xl p-6 max-w-4xl shadow-lg mt-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              แจกฟรี KEY <br /> แจกฟรี KEY <br /> แจกฟรี KEY
            </h2>
            <p className="text-lg">
              ร่วมกิจกรรมในดิสคอร์ด (DISCORD) <br />
              แบบแอดเข้าไอดีตัวเอง
            </p>
            <button className="mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-xl shadow hover:bg-red-500">
              🚀 เข้าห้อง GIVEAWAY
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/98/Mortal_Kombat_11_cover_art.png"
              alt="Mortal Kombat 11"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section className="max-w-4xl text-center">
        <h3 className="text-2xl font-bold mb-4">🔥 กิจกรรมอื่นๆ 🔥</h3>
        <p className="mb-10">
          เราจะมีกิจกรรมแจกเกมใหม่ๆ ทุกสัปดาห์ อย่าลืมติดตามนะ!
        </p>
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 shadow hover:bg-gray-700 transition"
            >
              เนื้อหา Section #{i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-4xl text-center">
        <h3 className="text-2xl font-bold mb-4">🎮 เกมแนะนำ 🎮</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Tekken 8", "Street Fighter 6", "Injustice 2"].map((game, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              {game}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="max-w-4xl text-center mb-40">
        <h3 className="text-2xl font-bold mb-4">📢 ข่าวสารล่าสุด 📢</h3>
        <p>
          ติดตามข่าวสารเกมและกิจกรรมใหม่ๆ ได้ที่เพจและดิสคอร์ดของเรา
        </p>
      </section>

      {/* Floating Help Button (hides when footer is visible) */}
      <HelpButton />
    </main>
  )
}
