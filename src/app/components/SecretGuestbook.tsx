import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Heart, Sparkles, Star, ArrowLeft, Send } from "lucide-react";

interface Message {
  id: number;
  name: string;
  content: string;
  timestamp: Date;
}

export default function SecretGuestbook() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti on mount
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);

    // Get auto-message from URL params
    const autoName = searchParams.get("name") || "匿名粉絲";
    const autoMessage = "紅豆兔珍愛粉報到！";

    // Add auto message
    const autoMsg: Message = {
      id: Date.now(),
      name: autoName,
      content: autoMessage,
      timestamp: new Date(),
    };
    setMessages([autoMsg]);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now(),
      name: newName.trim() || "匿名粉絲",
      content: newMessage.trim(),
      timestamp: new Date(),
    };

    setMessages([message, ...messages]);
    setNewName("");
    setNewMessage("");
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) return "剛剛";
    if (minutes < 60) return `${minutes} 分鐘前`;
    if (hours < 24) return `${hours} 小時前`;
    return date.toLocaleDateString("zh-TW");
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-down"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              {i % 3 === 0 && <Heart className="w-6 h-6 fill-[#E5A4A9] text-[#E5A4A9] opacity-70" />}
              {i % 3 === 1 && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 opacity-70" />}
              {i % 3 === 2 && <Sparkles className="w-5 h-5 text-[#D88A8F] opacity-70" />}
            </div>
          ))}
        </div>
      )}

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#F8D7DA] rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#E5A4A9] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#D88A8F] rounded-full opacity-20 blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-[#D88A8F] hover:text-[#C67378] transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>返回首頁</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F8D7DA] to-[#E5A4A9] px-6 py-3 rounded-full mb-6 shadow-[0_8px_30px_rgb(232,161,166,0.4)]">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-medium">恭喜你發現隱藏頁面！</span>
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Heart className="w-10 h-10 text-[#E5A4A9] fill-[#E5A4A9] animate-bounce" />
            紅豆兔珍愛粉留言板
            <Heart className="w-10 h-10 text-[#E5A4A9] fill-[#E5A4A9] animate-bounce" />
          </h1>

          <p className="text-gray-600 text-lg">
            歡迎所有紅豆兔的真愛粉！留下你的足跡吧 🫘✨
          </p>
        </div>

        {/* Message Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 mb-8 border-2 border-[#F8D7DA] shadow-[0_20px_60px_rgb(232,161,166,0.2)]">
          <h2 className="text-xl text-[#D88A8F] mb-4 flex items-center gap-2">
            <Send className="w-5 h-5" />
            留下你的訊息
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                暱稱（選填）
              </label>
              <input
                id="name"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="匿名粉絲"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F8D7DA] focus:border-[#D88A8F] focus:outline-none transition-colors"
                maxLength={20}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                留言內容
              </label>
              <textarea
                id="message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="寫下你對紅豆兔的愛..."
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F8D7DA] focus:border-[#D88A8F] focus:outline-none transition-colors resize-none"
                rows={4}
                maxLength={200}
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {newMessage.length}/200
              </div>
            </div>

            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="w-full bg-gradient-to-r from-[#E5A4A9] to-[#D88A8F] text-white px-6 py-3 rounded-xl hover:shadow-[0_8px_30px_rgb(232,161,166,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              送出留言
            </button>
          </form>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-800 mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            粉絲留言牆
            <span className="text-sm text-gray-500">({messages.length})</span>
          </h2>

          {messages.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              還沒有留言，快來當第一個吧！
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className="bg-white rounded-2xl p-6 border-2 border-[#F8D7DA] hover:border-[#E5A4A9] hover:shadow-[0_10px_40px_rgb(232,161,166,0.2)] transition-all group"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-[#D88A8F]">{message.name}</span>
                      <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed break-words">{message.content}</p>
                  </div>

                  {/* Decorative */}
                  <Sparkles className="w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 fill-[#E5A4A9] text-[#E5A4A9]" />
            你是第 {messages.length} 位真愛粉！
          </p>
          <p className="text-xs opacity-70">
            繼續點擊紅豆兔，還有更多驚喜等著你 ✨
          </p>
        </div>
      </div>

      {/* CSS for confetti animation */}
      <style>{`
        @keyframes float-down {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-down {
          animation: float-down linear forwards;
        }
      `}</style>
    </div>
  );
}
