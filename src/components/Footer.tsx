import React from "react";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">KaiThodGG</h2>
          <p className="text-sm leading-relaxed mb-3">
            No.1 เรื่องเติมเกม ต้องนึกถึง KaiThodGG ร้านบริการเติมเกมออนไลน์ชั้นนำ พร้อมบัตรเติมเกมต่างๆ ครบทุกเกม
          </p>
          <p className="text-sm leading-relaxed mb-3">
            ROV, Valorant, Genshin, Honkai, PUBG Mobile, FreeFire และอื่น ๆ รวมถึง Razer Gold, Riot Card, Roblox Gift Card, Steam Wallet
          </p>
          <p className="text-sm leading-relaxed">
            บริการ 24 ชั่วโมง เติมไว ราคาถูก ปลอดภัย เชื่อถือได้ พร้อมทีมงานดูแลตลอดเวลา
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 justify-center">CONTACT</h2>
          <ul className="space-y-2 text-sm">
            <li>
              Line:{" "}
              <a
                href="https://line.me/R/ti/p/@"
                className="text-yellow-400 hover:text-yellow-500 transition-colors"
              >
                @KaiThodGG
              </a>
            </li>
            <li>เปิดให้บริการ 24 ชั่วโมง</li>
            <li>
              <a
                className="text-yellow-400 hover:text-yellow-500 transition-colors"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="text-yellow-400 hover:text-yellow-500 transition-colors"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Extra Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">FOLLOW US</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <a
              href="https://www.facebook.com/"
              target="_blank"   // เปิดหน้าใหม่
              rel="noopener noreferrer" // ป้องกัน security risk
              className="hover:text-blue-500 transition-colors"
            >             Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"   // เปิดหน้าใหม่
              rel="noopener noreferrer" // ป้องกัน security risk
              className="hover:text-pink-500 transition-colors"
            >             Instagram
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"   // เปิดหน้าใหม่
              rel="noopener noreferrer" // ป้องกัน security risk
              className="hover:text-red-500 transition-colors"
            >             Youtube
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            เติมเกมง่าย สะดวก รวดเร็ว ปลอดภัยทุกขั้นตอน
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
        &copy; {year} KaiThodGG Entertainment Group Co.,Ltd. All Rights Reserved. | Line: @KaiThodGG
      </div>
    </footer>
  );
};

export default Footer;
