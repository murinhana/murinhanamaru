import { Link, useNavigate } from "react-router";
import { Sparkles, Heart, Star, ArrowRight, Check, Zap, Award, PartyPopper, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import bunny1 from "figma:asset/f4a95076a8397556c02ba1df02103531d4449829.png";
import bunny2 from "figma:asset/1a352419324a771babccd676f4ff7dd66d88bb0b.png";
import bunny3 from "figma:asset/0dd34769a560c914f6208684cff3954b27afaef9.png";
import cornCharacter from "figma:asset/33a7dc1a49eafe1c9b10779ff2226eca224ed696.png";
import brandVisual from "figma:asset/d692258efb7a5a0c6ae5438a8037b8ff7873d74d.png";
import merchandiseDesign from "figma:asset/b0a801715687b5e2ccb05560f587e9b4e56b5fe3.png";

interface Particle {
  id: number;
  x: number;
  y: number;
  type: 'heart' | 'star' | 'sparkle';
  velocity?: { x: number; y: number };
}

interface Achievement {
  id: number;
  title: string;
  count: number;
  unlocked: boolean;
}

export default function Home() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [currentBunny, setCurrentBunny] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isJumping, setIsJumping] = useState(false);
  const [combo, setCombo] = useState(0);
  const [showCombo, setShowCombo] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: 1, title: "初次相遇", count: 1, unlocked: false },
    { id: 2, title: "紅豆愛好者", count: 10, unlocked: false },
    { id: 3, title: "連擊大師", count: 5, unlocked: false },
    { id: 4, title: "真愛粉絲", count: 50, unlocked: false },
  ]);
  const [showAchievement, setShowAchievement] = useState<Achievement | null>(null);
  
  const bunnyImages = [bunny1, bunny2, bunny3];
  const bunnyMessages = ["喝紅豆湯囉！", "好開心～", "害羞啦>///<"];

  const handleCopyEmail = () => {
    // Fallback method for copying text
    const textArea = document.createElement("textarea");
    textArea.value = "murinhanamaru@gmail.com";
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
  };

  // Check for combo
  useEffect(() => {
    const comboTimer = setTimeout(() => {
      if (combo > 0) {
        setCombo(0);
        setShowCombo(false);
      }
    }, 1500);
    
    return () => clearTimeout(comboTimer);
  }, [lastClickTime, combo]);

  const handleBunnyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    const newClickCount = clickCount + 1;
    
    // Switch to next bunny
    setCurrentBunny((prev) => (prev + 1) % 3);
    setClickCount(newClickCount);
    
    // Combo system
    if (now - lastClickTime < 1000) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      setShowCombo(true);
      
      // Check combo achievement
      if (newCombo >= 5) {
        checkAchievement(3);
      }
    } else {
      setCombo(1);
      setShowCombo(true);
    }
    setLastClickTime(now);
    
    // Trigger jump animation
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 600);
    
    // Create particles (more particles for combo)
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const particleTypes: Array<'heart' | 'star' | 'sparkle'> = ['heart', 'star', 'sparkle'];
    const newParticles: Particle[] = [];
    const particleCount = combo > 3 ? 10 : 5;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = {
        x: Math.cos(angle) * 3,
        y: Math.sin(angle) * 3
      };
      
      newParticles.push({
        id: Date.now() + i,
        x: x,
        y: y,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
        velocity
      });
    }
    
    setParticles((prev) => [...prev, ...newParticles]);
    
    // Remove particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1500);
    
    // Check achievements
    checkAchievement(1); // First click
    if (newClickCount >= 10) checkAchievement(2);
    if (newClickCount >= 50) {
      checkAchievement(4);
      // Navigate to secret guestbook with random name
      setTimeout(() => {
        const randomNames = [
          "小紅豆", "粉紅兔", "甜心兔", "蜜桃兔", "櫻花兔",
          "草莓兔", "棉花糖", "奶油兔", "布丁兔", "雲朵兔",
          "星星兔", "月亮兔", "夢幻兔", "彩虹兔", "蝴蝶兔",
          "花瓣兔", "糖果兔", "馬卡龍", "泡泡兔", "天使兔"
        ];
        const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
        navigate(`/secret-guestbook?name=${encodeURIComponent(randomName)}`);
      }, 2000);
    }
  };

  const checkAchievement = (achievementId: number) => {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement && !achievement.unlocked) {
      const shouldUnlock =
        (achievementId === 1 && clickCount >= achievement.count - 1) ||
        (achievementId === 2 && clickCount >= achievement.count - 1) ||
        (achievementId === 3 && combo >= achievement.count - 1) ||
        (achievementId === 4 && clickCount >= achievement.count - 1);

      if (shouldUnlock) {
        setAchievements(prev =>
          prev.map(a =>
            a.id === achievementId ? { ...a, unlocked: true } : a
          )
        );
        setShowAchievement(achievement);
        setTimeout(() => setShowAchievement(null), 3000);
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Cute Badge */}
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F8D7DA]">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-[#C67378]">插畫創作 / 視覺設計</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-tight">
                松花沐玲
                <br />
                <span className="text-[#D88A8F] inline-flex items-center gap-2">
                  Murin Matsuhana
                  <Heart className="w-10 h-10 fill-[#E5A4A9] text-[#E5A4A9] inline-block animate-pulse" />
                </span>
              </h1>

              <div className="inline-flex items-center gap-2 group relative">
                <span className="text-sm text-[#E5A4A9] font-light">
                  @murinhanamaru
                </span>
                <span className="text-sm inline-block group-hover:rotate-12 transition-transform duration-300">
                  🌸
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-sm text-[#E5A4A9] font-light hover:text-[#D88A8F] transition-colors cursor-pointer relative group"
                >
                  murinhanamaru@gmail.com
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D88A8F] group-hover:w-full transition-all duration-300"></span>
                </button>
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#D88A8F] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 animate-bounce shadow-[0_4px_20px_rgb(216,138,143,0.5)]">
                    <Check className="w-3 h-3" />
                    已複製！
                  </span>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2 bg-[#D88A8F] text-white px-6 py-3 rounded-full hover:bg-[#C67378] transition-all hover:scale-105"
                >
                  查看作品
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-[#C67378] px-6 py-3 rounded-full border border-[#F8D7DA] hover:bg-white transition-all"
                >
                  聯絡我
                </Link>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span>角色插畫</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Sparkles className="w-5 h-5 text-[#D88A8F]" />
                  <span>品牌視覺</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Heart className="w-5 h-5 fill-[#E5A4A9] text-[#E5A4A9]" />
                  <span>商品設計</span>
                </div>
              </div>
            </div>

            {/* Interactive Bunny Game */}
            <div className="relative">
              {/* Score Badge */}
              <div className="absolute -top-3 -right-3 z-20 bg-white rounded-full px-4 py-2 shadow-[0_8px_30px_rgb(232,161,166,0.3)] border-2 border-[#F8D7DA] flex items-center gap-2">
                <Heart className="w-4 h-4 fill-[#E5A4A9] text-[#E5A4A9]" />
                <span className="text-sm font-medium text-[#D88A8F]">{clickCount}</span>
              </div>

              {/* Combo Counter */}
              {showCombo && combo > 1 && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-[#F8D7DA] via-[#E5A4A9] to-[#D88A8F] text-white px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(232,161,166,0.6)] animate-bounce flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-white animate-pulse" />
                  <span className="font-bold text-lg">{combo}x COMBO!</span>
                  <Heart className="w-5 h-5 fill-white animate-pulse" />
                </div>
              )}

              {/* Achievement Notification */}
              {showAchievement && (
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-30 bg-gradient-to-r from-[#E5A4A9] to-[#D88A8F] text-white px-6 py-3 rounded-2xl shadow-[0_8px_30px_rgb(232,161,166,0.6)] animate-bounce flex items-center gap-3">
                  <Award className="w-6 h-6 animate-spin" />
                  <div>
                    <div className="text-xs opacity-90">成就解鎖！</div>
                    <div className="font-bold">{showAchievement.title}</div>
                  </div>
                  <PartyPopper className="w-6 h-6" />
                </div>
              )}

              <div 
                className={`relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgb(232,161,166,0.4)] bg-gradient-to-br from-[#FFF5F6] via-[#F8D7DA] to-[#F5E6E8] cursor-pointer select-none transition-all duration-300 ${
                  combo > 3 ? 'ring-4 ring-[#FFD700] ring-opacity-60 scale-[1.02]' : ''
                }`}
                onClick={handleBunnyClick}
              >
                {/* Bunny Character */}
                <div className="relative w-full aspect-square flex items-center justify-center p-4">
                  <img
                    src={bunnyImages[currentBunny]}
                    alt="紅豆兔"
                    className={`w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(232,161,166,0.6)] transition-all duration-300 ${
                      isJumping ? 'animate-bounce scale-110' : 'hover:scale-105'
                    } ${combo > 5 ? 'animate-pulse' : ''}`}
                    draggable={false}
                  />
                  
                  {/* Particles */}
                  {particles.map((particle) => (
                    <div
                      key={particle.id}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${particle.x}px`,
                        top: `${particle.y}px`,
                        animation: 'particle-float 1.5s ease-out forwards',
                      }}
                    >
                      {particle.type === 'heart' && (
                        <Heart className="w-6 h-6 fill-[#E5A4A9] text-[#E5A4A9] drop-shadow-lg" />
                      )}
                      {particle.type === 'star' && (
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-lg animate-spin" />
                      )}
                      {particle.type === 'sparkle' && (
                        <Sparkles className="w-6 h-6 text-[#D88A8F] drop-shadow-lg animate-ping" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Bubble */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-[0_4px_20px_rgb(232,161,166,0.3)] border border-[#F8D7DA] opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-sm text-[#D88A8F] font-medium">{bunnyMessages[currentBunny]}</span>
                </div>

                {/* Click Hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-[#D88A8F] text-xs px-3 py-1.5 rounded-full flex items-center gap-1 opacity-60 hover:opacity-100 transition-all shadow-[0_4px_15px_rgb(232,161,166,0.2)]">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  點擊與紅豆兔互動
                </div>
              </div>

              {/* Bunny Selector */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentBunny(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentBunny === index
                        ? "bg-[#D88A8F] w-6 shadow-[0_2px_10px_rgb(216,138,143,0.5)]"
                        : "bg-[#F8D7DA] hover:bg-[#E5A4A9]"
                    }`}
                  />
                ))}
              </div>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/redbean.rabbit/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute -bottom-3 -right-3 z-20 bg-gradient-to-br from-[#E5A4A9] to-[#D88A8F] hover:from-[#D88A8F] hover:to-[#C67378] text-white p-3 rounded-full shadow-[0_8px_30px_rgb(232,161,166,0.4)] hover:shadow-[0_12px_40px_rgb(232,161,166,0.6)] transition-all duration-300 hover:scale-110 group"
                title="Follow 紅豆兔 on Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-[#D88A8F] text-xs px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-[0_4px_15px_rgb(232,161,166,0.2)]">
                  Follow 紅豆兔
                </div>
              </a>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-60 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-60 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Decorative Stars */}
        <Star className="absolute top-20 right-20 w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse" />
        <Heart className="absolute bottom-40 left-20 w-5 h-5 text-pink-300 fill-pink-300 animate-pulse" />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-800 mb-4">
              提供服務
            </h2>
            <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full border border-[#F8D7DA]/60 shadow-[0_4px_20px_rgb(232,161,166,0.15)]">
              <p className="text-base text-[#C67378] font-light">
                🍡為您提供的設計小點🍡
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "角色插畫",
                description: "原創角色設計與插畫創作",
                icon: "🌷",
                image: cornCharacter,
                linkTo: "/portfolio#illustration",
              },
              {
                title: "品牌視覺設計",
                description: "品牌形象設計與視覺規劃",
                icon: "🌱",
                image: brandVisual,
                linkTo: "/portfolio#exhibition",
              },
              {
                title: "商品設計開發",
                description: "週邊商品與展覽視覺設計",
                icon: "🪷",
                image: merchandiseDesign,
                linkTo: "/portfolio#merchandise",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-[#F8D7DA] hover:shadow-[0_20px_50px_rgb(232,161,166,0.3)] transition-all hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={service.linkTo}
                    className="inline-flex items-center gap-2 text-[#D88A8F] hover:text-[#C67378] transition-colors group/link"
                  >
                    <span className="text-sm font-medium">查看作品</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Commission CTA Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F8D7DA] to-[#E5A4A9] hover:from-[#E5A4A9] hover:to-[#D88A8F] text-white px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_10px_30px_rgb(232,161,166,0.3)] hover:shadow-[0_15px_40px_rgb(232,161,166,0.4)]"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">我想委託聯絡</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#E5A4A9] via-[#D88A8F] to-[#C98A8F] rounded-3xl p-12 shadow-[0_25px_60px_rgb(232,161,166,0.5)]">
            <Heart className="w-12 h-12 text-white fill-white mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              誠邀品牌合作與展覽專案邀約
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              角色插畫×品牌視覺×商品設計×各式視覺委託洽詢！
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#D88A8F] px-8 py-4 rounded-full hover:bg-[#F8D7DA] transition-all hover:scale-105"
            >
              歡迎與我聯絡
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}