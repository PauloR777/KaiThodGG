export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="site-footer" className="bg-gray-900 text-gray-400 py-6 mt-12 border-t border-gray-800">
      {/* sentinel for more robust intersection checks */}
      <div id="footer-sentinel" className="h-2" />
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {year} Game Giveaway. All rights reserved.</p>

        <div className="flex gap-6 text-sm">
          <a href="/privacy" className="hover:text-white">นโยบายความเป็นส่วนตัว</a>
          <a href="/terms" className="hover:text-white">ข้อตกลงการใช้งาน</a>
          <a href="/support" className="hover:text-white">ศูนย์ช่วยเหลือ</a>
        </div>
      </div>
    </footer>
  )
}
