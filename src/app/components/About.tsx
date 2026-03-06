import { Heart, Sparkles, Star, Palette } from "lucide-react";
import profileImage from "figma:asset/d77d8a654621dcb61bb0ab4e8eff7cc8efb1335b.png";

export default function About() {
  const skills = [
    { name: "周邊商品設計", level: 95, icon: "✨" },
    { name: "各項視覺設計", level: 90, icon: "🌟" },
    { name: "展覽視覺規劃", level: 88, icon: "💫" },
    { name: "角色插畫", level: 85, icon: "🎨" },
    { name: "影音編輯", level: 80, icon: "🎬" },
  ];

  const tools = [
    "Procreate",
    "Adobe Illustrator",
    "Photoshop",
    "Clip Studio Paint",
    "Figma",
    "Premiere",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-gray-800 mb-6">關於我</h1>
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full border border-[#F8D7DA]/60 shadow-[0_4px_20px_rgb(232,161,166,0.15)]">
            <span className="text-sm text-[#D88A8F] font-light">🌸</span>
            <p className="text-base text-[#C67378] font-light">
              松花沐玲 Murin Matsuhana🌸
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgb(232,161,166,0.4)] bg-[#F8D7DA]">
              <img
                src={profileImage}
                alt="松花沐玲形象圖"
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full opacity-60 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300 rounded-full opacity-60 blur-3xl"></div>
            <Heart className="absolute top-4 right-4 w-8 h-8 text-white fill-white drop-shadow-[0_4px_15px_rgba(232,161,166,0.6)] animate-pulse" />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#F8D7DA]">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl text-gray-800">嗨！你好</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                我是松花沐玲，一位專注於插畫創作與視覺設計的創作者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                擅長角色插畫、品牌視覺設計與商品設計開發，<br />
                亦參與展覽主題氛圍與視覺規劃。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                創作產量穩定，風格多元，<br />
                能依專案需求調整視覺語言與表現形式。<br />
                畫面細膩精準，重視整體氛圍與一致性。
              </p>
              <p className="text-gray-700 leading-relaxed">
                誠邀品牌合作與展覽專案邀約✨<br />
                murinhanamaru@gmail.com
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F8D7DA] rounded-xl p-4 border border-[#E5A4A9]">
                <div className="text-3xl mb-2">🌸</div>
                <div className="text-sm text-gray-600">專長</div>
                <div className="text-gray-800">插畫 / 設計</div>
              </div>
              <div className="bg-[#F5E6E8] rounded-xl p-4 border border-[#E5A4A9]">
                <div className="text-3xl mb-2">🍡</div>
                <div className="text-sm text-gray-600">特色</div>
                <div className="text-gray-800">柔和溫暖，風格多元</div>
              </div>
              <div className="bg-[#F0DFE1] rounded-xl p-4 border border-[#E5A4A9]">
                <div className="text-3xl mb-2">🍵</div>
                <div className="text-sm text-gray-600">製作</div>
                <div className="text-gray-800">細火慢煎，結構清晰</div>
              </div>
              <div className="bg-[#FAE3E5] rounded-xl p-4 border border-[#E5A4A9]">
                <div className="text-3xl mb-2">🎐</div>
                <div className="text-sm text-gray-600">長期合作</div>
                <div className="text-gray-800">品牌與主題展覽</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F8D7DA] mb-4">
              <Palette className="w-4 h-4 text-[#D88A8F]" />
              <span className="text-sm text-[#C67378]">專業技能</span>
            </div>
            <h2 className="text-3xl text-gray-800">設計插畫</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#F8D7DA]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-lg text-gray-800">{skill.name}</h3>
                </div>
                <div className="relative h-3 bg-[#F8D7DA] rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#E5A4A9] to-[#D88A8F] rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2 text-sm text-gray-600">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F8D7DA] mb-4">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-[#C67378]">創作工具</span>
            </div>
            <h2 className="text-3xl text-gray-800">常用軟體</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-[#F8D7DA] text-gray-700 hover:bg-[#F8D7DA] hover:scale-105 transition-all"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#F8D7DA] via-[#F5E6E8] to-[#F0DFE1] rounded-3xl p-12">
          <Heart className="w-12 h-12 text-[#D88A8F] fill-[#D88A8F] mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl text-gray-800 mb-4">
            誠邀品牌合作與展覽專案邀約
          </h2>
          <p className="text-gray-600 mb-6">
            歡迎與我討論您的委託需求！
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D88A8F] text-white px-8 py-3 rounded-full hover:bg-[#C67378] transition-all hover:scale-105"
          >
            聯絡我
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}