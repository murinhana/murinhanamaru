import { useState } from "react";
import { Mail, MessageCircle, Sparkles, Heart, Copy, Check, DollarSign } from "lucide-react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactInfo = [
    {
      id: "email",
      icon: Mail,
      title: "電子郵件",
      value: "murinhanamaru@gmail.com",
      displayValue: "murinhanamaru@gmail.com",
      bgColor: "bg-[#F8D7DA]",
      bgGradient: "from-[#FFF5F6] to-[#F8D7DA]",
    },
    {
      id: "dc",
      icon: MessageCircle,
      title: "Discord",
      value: "@springrin",
      displayValue: "@springrin",
      bgColor: "bg-[#E5A4A9]",
      bgGradient: "from-[#FFF5F6] to-[#E5A4A9]",
    },
    {
      id: "plurk",
      icon: Heart,
      title: "Plurk",
      value: "@murinhanamaru",
      displayValue: "@murinhanamaru",
      bgColor: "bg-[#F5E6E8]",
      bgGradient: "from-[#FFF5F6] to-[#F5E6E8]",
    },
  ];

  const pricingData = [
    {
      category: "插畫創作",
      items: [
        { name: "Q版單人插畫", price: "NT$500 起" },
        { name: "Minecraft Skin", price: "NT$500 起" },
      ],
    },
    {
      category: "視覺設計",
      items: [
        { name: "LOGO設計", price: "NT$1,000 ~ 3,000" },
        { name: "海報設計", price: "NT$1,000 – 5,000" },
        { name: "活動主視覺設計整套規劃", price: "NT$20,000 – 40,000" },
      ],
    },
    {
      category: "商品設計",
      items: [
        { name: "單款商品圖樣", price: "NT$800 ~ 2,000" },
        { name: "系列商品設計", price: "依需求與數量估價" },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F8D7DA] mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-[#C67378]">Let's Work Together</span>
          </div>
          <h1 className="text-4xl sm:text-5xl text-gray-800 mb-6">
            我要委託
          </h1>
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full border border-[#F8D7DA]/60 shadow-[0_4px_20px_rgb(232,161,166,0.15)]">
            <span className="text-sm text-[#D88A8F] font-light">💌</span>
            <p className="text-base text-[#C67378] font-light">
              歡迎您透過以下方式與我聯繫
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const isCopied = copiedField === contact.id;
            
            return (
              <div
                key={contact.id}
                className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#F8D7DA] hover:border-[#E5A4A9] transition-all duration-300 hover:shadow-[0_20px_60px_rgb(232,161,166,0.3)] hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${contact.bgGradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_10px_30px_rgb(232,161,166,0.3)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 text-[#D88A8F]" />
                </div>

                {/* Title */}
                <h3 className="text-xl text-gray-800 text-center mb-4">
                  {contact.title}
                </h3>

                {/* Value */}
                <div className="bg-white rounded-xl px-4 py-3 mb-4 border border-[#F8D7DA]">
                  <p className="text-[#D88A8F] text-center break-all">
                    {contact.displayValue}
                  </p>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(contact.value, contact.id)}
                  className={`w-full py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    isCopied
                      ? "bg-[#E5A4A9] text-white"
                      : "bg-gradient-to-r from-[#F8D7DA] to-[#F5E6E8] text-[#D88A8F] hover:from-[#E5A4A9] hover:to-[#D88A8F] hover:text-white"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-medium">已複製！</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm font-medium">點擊複製</span>
                    </>
                  )}
                </button>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-[#E5A4A9] fill-[#E5A4A9] animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F8D7DA] mb-4">
              <DollarSign className="w-4 h-4 text-[#D88A8F]" />
              <span className="text-sm text-[#C67378]">歡迎洽詢</span>
            </div>
            <h2 className="text-3xl text-gray-800 mb-3">服務項目與價格參考</h2>
            <p className="text-gray-600 text-sm">※ 實際報價會依專案複雜度與需求調整</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingData.map((category, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#F8D7DA] hover:border-[#E5A4A9] hover:shadow-[0_20px_50px_rgb(232,161,166,0.3)] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-[#D88A8F] rounded-full"></div>
                  <h3 className="text-xl text-gray-800">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="pb-4 border-b border-[#F8D7DA] last:border-0 last:pb-0">
                      <div className="text-gray-700 mb-2">{item.name}</div>
                      <div className="text-[#D88A8F] font-medium">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Commission Notes */}
          <div className="bg-gradient-to-br from-[#F8D7DA]/40 via-[#F5E6E8]/40 to-[#F0DFE1]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#F8D7DA]">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📜</span>
              <h3 className="text-2xl text-gray-800">點單前的小提醒</h3>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>• 為保障雙方權益，確認委託後以 <span className="text-[#D88A8F] font-medium">全額付款</span> 或 <span className="text-[#D88A8F] font-medium">支付 50% 訂金</span>後安排製作</p>
              <p>• 如需急件，將酌收 <span className="text-[#D88A8F] font-medium">20%–30% 加急費</span></p>
              <p>• 商用案件會依使用範圍與授權內容評估報價</p>
              <p>• 完稿交付後若需大幅修改，將視情況另行報價</p>
              <p>• 作品可能會公開於作品集或社群分享，如需保密請提前告知，我會特別留意</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F8D7DA] mb-4">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-[#C67378]">常見問題</span>
            </div>
            <h2 className="text-3xl text-gray-800">FAQ</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                q: "費用如何計算？",
                a: "依據委託內容與複雜度報價，歡迎來信洽詢細節。",
              },
              {
                q: "製作時間需要多久？",
                a: "單項插圖、排版圖等，通常為3天至2週；大型委託如視覺主題、展場規劃等，通常為1~3個月，實際時間將依內容調整，可加急。",
              },
              {
                q: "可以修改嗎？",
                a: "可以。製作過程中提供1次修改機會。超出後依修改次數計價。",
              },
              {
                q: "可以商業使用嗎？",
                a: "可以。可依使用範圍提供相應之商業授權。如有商業用途需求，歡迎於委託來信時告知使用範圍與形式，將另行說明授權細項與費用。",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#F8D7DA] hover:border-[#E5A4A9] hover:shadow-[0_10px_30px_rgb(232,161,166,0.2)] transition-all duration-300"
              >
                <h3 className="text-gray-800 mb-3 flex items-start gap-2">
                  <span className="text-[#D88A8F] flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-600 text-sm flex items-start gap-2 leading-relaxed">
                  <span className="text-[#C67378] flex-shrink-0">A.</span>
                  <span>{faq.a}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Bottom Elements */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-[#D88A8F] opacity-60">
            <Heart className="w-5 h-5 fill-[#E5A4A9] animate-pulse" />
            <span className="text-sm">期待與您合作</span>
            <Heart className="w-5 h-5 fill-[#E5A4A9] animate-pulse" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}