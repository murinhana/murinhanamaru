import { useState, useEffect } from "react";
import { Heart, Eye, FileText, Sparkles, ChevronLeft, ChevronRight, ChevronUp, Menu, Star } from "lucide-react";
import { useLocation } from "react-router";

// Import artwork images using figma:asset
import artwork1 from "figma:asset/7c70fb896e69797e2e160f8d41fce7a061cfb907.png";
import artwork2 from "figma:asset/b74fd0b76062bb40f095e5fd683e78c110bc4de6.png";
import artwork3 from "figma:asset/c1d413c6b437e882a225d3f9788803090eb1d602.png";
import artwork4 from "figma:asset/001b2f03ef008d4f95bb8baa0157c62b284d5f8c.png";
import artwork5 from "figma:asset/3abbb229bd79c7ca7e9a457e3352d6b3c9cac7d9.png";
import artwork6 from "figma:asset/f5fd37c8e46b2fc0ca7003e801d545e82d401ea4.png";
import artwork7 from "figma:asset/84ce595c0deb2dae603be5c1d4f252dbcd4f0375.png";
import minecraft1 from "figma:asset/689c9f659b428d8c2d0d4ef08c3b6c854d717526.png";
import minecraft2 from "figma:asset/2382ab66d52f696d18f8e8840e83bf59ef5c85b9.png";
import minecraft3 from "figma:asset/5ea8274a072ac002d148d8576317f671473c4cdc.png";
import minecraft4 from "figma:asset/03fc73db8799b6ade6a4c7d96921cf98488add05.png";
import minecraft5 from "figma:asset/b269845cfd28efe5ce8d34c8931375b88f040c11.png";
import japaneseIllust from "figma:asset/fb2c4ecf55cd4a2ca441e7f3df127bef744a7023.png";
import redBeanRabbit1 from "figma:asset/5e7158ee53be3e1b126a35ea0c82c6f5eb124189.png";
import redBeanRabbit2 from "figma:asset/5bb19afe0ccff4a733d4145eb23628b18fd67b93.png";
import redBeanRabbit3 from "figma:asset/f766e859a02f3373b607c85867f22a41ca8c91e4.png";
import cornCharacter from "figma:asset/33a7dc1a49eafe1c9b10779ff2226eca224ed696.png";
import milkLoveProject from "figma:asset/15ec3c6aea6460951ce8082be18757c3a60f914a.png";
import milkLoveBanner1 from "figma:asset/d692258efb7a5a0c6ae5438a8037b8ff7873d74d.png";
import milkLoveBanner2 from "figma:asset/f526223411489779f57b3cfb80133db38ac24575.png";
import milkLoveAnnounce1 from "figma:asset/89da1f7d5e2438ac6f8eba89c48adb96aa0ab4c0.png";
import milkLoveAnnounce2 from "figma:asset/8bb54b068225ca16dd97eb316bd22900459015c1.png";
import milkLoveAnnounce3 from "figma:asset/43fc208e6a820197fa814a04dd5e082731e6aa0e.png";
import milkLoveStaffPass1 from "figma:asset/697c2f460f1f2a7473b66d3f3bdfc0b14a00cb1b.png";
import milkLoveStaffPass2 from "figma:asset/8fad3df93bde2b8718a13416d9062730a3ccfe36.png";
import milkLoveStaffPass3 from "figma:asset/9bf7399d32534e249d838a7d4298df40c7742924.png";
import milkLoveSeatMap from "figma:asset/8bb54b068225ca16dd97eb316bd22900459015c1.png";
import milkLoveTeamAnnounce from "figma:asset/43fc208e6a820197fa814a04dd5e082731e6aa0e.png";
import milkLoveFanPoster from "figma:asset/05c114ed1012f740ddea7b89001893fb7536b99e.png";
import milkLoveFanVisual from "figma:asset/ec3b188dfa3e4e787f06c5f43e7d1634a2adc37e.png";
import milkLoveFanPostcard from "figma:asset/135af6d5f886094c5cccf5be7bac97f9bafa884f.png";
import layoutDesign1 from "figma:asset/d3f085b8763bcf7ecfa7334ec1d2da3c89f70b8e.png";
import layoutDesign2 from "figma:asset/d5f6eb3c80a651f70215e0994a81c9831637cb7a.png";
import layoutDesign3 from "figma:asset/b02ae9f3a1b4bf976ec8ac020b8519725dcdbccb.png";
import layoutDesign4 from "figma:asset/6a500d9ea8b73fa8c0188f65a3e0e43e3addf1f7.png";
import layoutDesign5 from "figma:asset/8415bb66738fb8e2a9ceff4f36bb40cd9d967ae1.png";
import merchandiseLayout1 from "figma:asset/4e9eee291bef0e2cb7f5d06288155b47080c2b51.png";
import merchandiseLayout2 from "figma:asset/b0a801715687b5e2ccb05560f587e9b4e56b5fe3.png";
import merchandiseLayout3 from "figma:asset/797988845fab0a2ae5929f16496b09f04dfee7dc.png";
import merchandiseLayout4 from "figma:asset/9d70610150fd5a8ba3609e79bb33206e057390ad.png";
import merchandiseLayout5 from "figma:asset/e5206ad98ab93d445d26b296b5c58447c98eefdc.png";
import portfolioCover from "figma:asset/87f648e089ec7847e9285b11fbe22a436e9d781f.png";
import portfolioPreview1 from "figma:asset/bbc38937eba4af5cde90bc59e7a4604995b2c484.png";
import portfolioPreview2 from "figma:asset/ac77f49c0562886636e355907f450732a171ed94.png";
import portfolioPreview3 from "figma:asset/06c2436e3fb27c464d6d2a2211de446c88748611.png";
import portfolioPreview4 from "figma:asset/b00e9bb4f0588b29d4efb8fbde146ad835efcd43.png";
import portfolioPreview5 from "figma:asset/8d986e3fdf08bc637d8e74848655818810ce8021.png";
import milkLoveFanMeetingBg from "figma:asset/49bf40787085744a47f6829af1f5f4ff110ebd60.png";
import limnosPromo1 from "figma:asset/807866191ed8fe25b849d35d7059bc5401146e09.png";
import limnosPromo2 from "figma:asset/94d553331140c6445ffe112b7b3d5f9096add5c4.png";
import limnosPromo3 from "figma:asset/5a4eb694157ac89b49d75a782f013b57443bd7cc.png";
import limnosPromo4 from "figma:asset/7dbf4cf1a71b131913a93edb59b7db4264554fd7.png";
import karasuOutfitAnnounce from "figma:asset/d0c27e3fbfb51c146e7cc2b93304ca4dc4e8f765.png";
import limnosMerchandiseDisplay from "figma:asset/41c5e301eaa871b47cf9d5aab339c854af6a8225.png";
import limnosPostcard1 from "figma:asset/20f9ac3c3ce9cb78437a8cf34bf612e1919c2958.png";
import limnosPostcard2 from "figma:asset/26083e4bbd984c36cea6aa66c084f2e4a8dcaff2.png";
import limnosPostcard3 from "figma:asset/4b59e2c628ab125c280add09f6bda872704dcc8f.png";
import limnosCountdown from "figma:asset/6f2635a97ee3355a80361094aad2b0f5e74eb017.png";

const categories = ["全部", "插畫", "角色設計", "周邊商品", "排版設計", "菜單", "宣傳圖", "Minecraft Skin"];

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  tags?: string[];
  image: string;
  likes: number;
  views: number;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Q版插畫🌽",
    category: "插畫",
    tags: ["插畫", "角色設計"],
    image: cornCharacter,
    likes: 567,
    views: 2834,
    description: "可愛玉米造型Q版角色插畫，黃綠配色清新活潑",
  },
  {
    id: 2,
    title: "Q版🍎蘋果狗貝",
    category: "插畫",
    image: artwork1,
    likes: 456,
    views: 2345,
    description: "可愛的紅髮公主角色設計，帶有皇冠與蝴蝶結元素",
  },
  {
    id: 3,
    title: "Q版🍓莓莓夜烏",
    category: "插畫",
    image: artwork2,
    likes: 389,
    views: 1987,
    description: "紫色雙馬尾少女，粉色格紋裙可愛風格",
  },
  {
    id: 4,
    title: "Q版🍒櫻桃黑兔",
    category: "插畫",
    image: artwork3,
    likes: 512,
    views: 2890,
    description: "銀白色頭髮配貓耳與紫色服飾的Q版角色",
  },
  {
    id: 5,
    title: "Q版🍊橘松鼠路",
    category: "插畫",
    image: artwork4,
    likes: 423,
    views: 2134,
    description: "橘色頭髮戴眼鏡的可愛角色設計",
  },
  {
    id: 6,
    title: "Q版🫐藍莓蕾貓",
    category: "插畫",
    image: artwork5,
    likes: 634,
    views: 3456,
    description: "紫灰色頭髮和風造型，帶有花朵裝飾",
  },
  {
    id: 7,
    title: "Q版立繪🐦‍⬛",
    category: "插畫",
    image: artwork6,
    likes: 578,
    views: 3123,
    description: "深色系洛麗塔風格，兔耳與蝴蝶結設計",
  },
  {
    id: 8,
    title: "Q版立繪🐰",
    category: "插畫",
    image: artwork7,
    likes: 489,
    views: 2678,
    description: "深色系哥德蘿莉塔服裝設計",
  },
  {
    id: 9,
    title: "Minecraft Skin",
    category: "插畫",
    tags: ["插畫", "Minecraft Skin"],
    image: minecraft1,
    likes: 325,
    views: 1890,
    description: "Minecraft 角色皮膚設計",
  },
  {
    id: 10,
    title: "Minecraft Skin",
    category: "插畫",
    tags: ["插畫", "Minecraft Skin"],
    image: minecraft2,
    likes: 298,
    views: 1756,
    description: "Minecraft 角色皮膚設計",
  },
  {
    id: 11,
    title: "Minecraft Skin",
    category: "插畫",
    tags: ["插畫", "Minecraft Skin"],
    image: minecraft3,
    likes: 356,
    views: 2013,
    description: "Minecraft 角色皮膚設計",
  },
  {
    id: 12,
    title: "Minecraft Skin",
    category: "插畫",
    tags: ["插畫", "Minecraft Skin"],
    image: minecraft4,
    likes: 312,
    views: 1845,
    description: "Minecraft 角色皮膚設計",
  },
  {
    id: 13,
    title: "Minecraft Skin",
    category: "插畫",
    tags: ["插畫", "Minecraft Skin"],
    image: minecraft5,
    likes: 341,
    views: 1921,
    description: "Minecraft 角色皮膚設計",
  },
  {
    id: 14,
    title: "日系人物插畫",
    category: "插畫",
    tags: ["插畫", "角色設計"],
    image: japaneseIllust,
    likes: 687,
    views: 3892,
    description: "粉色系日式可愛風格人物插畫設計",
  },
  {
    id: 15,
    title: "可愛插畫🫘紅豆兔",
    category: "插畫",
    tags: ["插畫", "角色設計"],
    image: redBeanRabbit1,
    likes: 892,
    views: 4521,
    description: "超萌紅豆兔角色插畫，溫柔粉色系",
  },
  {
    id: 16,
    title: "可愛插畫🫘紅豆兔",
    category: "插畫",
    tags: ["插畫", "角色設計"],
    image: redBeanRabbit2,
    likes: 856,
    views: 4289,
    description: "紅豆兔日常表情包系列",
  },
  {
    id: 17,
    title: "可愛插畫🫘紅豆兔",
    category: "插畫",
    tags: ["插畫", "角色設計"],
    image: redBeanRabbit3,
    likes: 923,
    views: 4756,
    description: "紅豆兔喝紅豆湯的可愛造型",
  },
  {
    id: 18,
    title: "聯名餐廳菜單設計",
    category: "排版設計",
    tags: ["排版設計", "菜單"],
    image: layoutDesign1,
    likes: 745,
    views: 3567,
    description: "主題活動餐點菜單排版設計，復古典雅風格",
  },
  {
    id: 19,
    title: "活動公告設計",
    category: "排版設計",
    tags: ["排版設計", "宣傳圖"],
    image: layoutDesign2,
    likes: 689,
    views: 3234,
    description: "等身立牌競標活動公告，金框裝飾設計",
  },
  {
    id: 20,
    title: "珍品菜單設計",
    category: "排版設計",
    tags: ["排版設計", "菜單"],
    image: layoutDesign3,
    likes: 812,
    views: 4012,
    description: "粉絲見面會展覽商品宣傳圖，三屏展示設計",
  },
  {
    id: 21,
    title: "商品總覽菜單設計",
    category: "排版設計",
    tags: ["排版設計", "菜單"],
    image: layoutDesign4,
    likes: 734,
    views: 3456,
    description: "科婭誌斯系列商品案單，紅白配色設計",
  },
  {
    id: 22,
    title: "展覽菜單背板",
    category: "排版設計",
    tags: ["排版設計"],
    image: layoutDesign5,
    likes: 698,
    views: 3289,
    description: "釣海之辰珍品菜單，中國風設計元素",
  },
  {
    id: 23,
    title: "周邊商品展示｜神社",
    category: "排版設計",
    tags: ["排版設計", "周邊商品"],
    image: merchandiseLayout1,
    likes: 856,
    views: 4123,
    description: "中國風角色周邊商品設計展示，紅色主題視覺呈現",
  },
  {
    id: 24,
    title: "周邊商品展示｜武俠",
    category: "排版設計",
    tags: ["排版設計", "周邊商品"],
    image: merchandiseLayout2,
    likes: 823,
    views: 3987,
    description: "藍白配色角色周邊商品設計展示，清新優雅風格",
  },
  {
    id: 25,
    title: "周邊商品展示｜生日週邊",
    category: "排版設計",
    tags: ["排版設計", "周邊商品"],
    image: merchandiseLayout3,
    likes: 789,
    views: 3756,
    description: "拍立拍照片與壓克力展板商品設計展示",
  },
  {
    id: 26,
    title: "聯名商品｜Unicorn半固態電池",
    category: "排版設計",
    tags: ["排版設計", "周邊商品"],
    image: merchandiseLayout4,
    likes: 912,
    views: 4345,
    description: "Unicorn聯名半固態電池商品設計，雙色款式展示",
  },
  {
    id: 27,
    title: "聯名商品｜DEVILCASE 手機殼",
    category: "排版設計",
    tags: ["排版設計", "周邊商品"],
    image: merchandiseLayout5,
    likes: 867,
    views: 4198,
    description: "DEVILCASE x Limnos 聯名手機殼系列設計展示",
  },
  {
    id: 28,
    title: "活動宣傳圖 | 寶可夢速通挑戰賽",
    category: "宣傳圖",
    tags: ["宣傳圖", "排版設計"],
    image: limnosPromo1,
    likes: 945,
    views: 4567,
    description: "寶可夢速通挑戰賽主視覺宣傳圖，動態爆炸效果設計",
  },
  {
    id: 29,
    title: "活動宣傳圖 | 獎品介紹",
    category: "宣傳圖",
    tags: ["宣傳圖", "排版設計"],
    image: limnosPromo2,
    likes: 876,
    views: 4234,
    description: "速通挑戰賽獎品展示圖，爆肝獎與SR獎說明設計",
  },
  {
    id: 30,
    title: "活動宣傳圖 | 參賽者分組",
    category: "宣傳圖",
    tags: ["宣傳圖", "排版設計"],
    image: limnosPromo3,
    likes: 823,
    views: 3987,
    description: "Minecraft風格參賽者分組圖，像素藝術設計",
  },
  {
    id: 31,
    title: "活動宣傳圖 | 鑽石遠征軍",
    category: "宣傳圖",
    tags: ["宣傳圖", "排版設計"],
    image: limnosPromo4,
    likes: 891,
    views: 4123,
    description: "刺蝟語錄系列鑽石遠征主題，Minecraft像素風格設計",
  },
  {
    id: 32,
    title: "明信片 | 夏蘿",
    category: "排版設計",
    tags: ["排版設計", "周邊商品"],
    image: limnosPostcard1,
    likes: 934,
    views: 4567,
    description: "Onerio 角色夏蘿明信片設計，粉紅色系主視覺",
  },
  {
    id: 33,
    title: "明信片 | 艾提",
    category: "排版設計",
    tags: ["排版設計", "周邊商品"],
    image: limnosPostcard2,
    likes: 912,
    views: 4421,
    description: "Lizy 角色艾提明信片設計，清新藍色系主視覺",
  },
  {
    id: 34,
    title: "明信片 | 奇露琪露",
    category: "排版設計",
    tags: ["排版設計", "周邊商品"],
    image: limnosPostcard3,
    likes: 887,
    views: 4298,
    description: "Knuki 角色奇露琪露明信片設計，活潑粉色系主視覺",
  },
  {
    id: 35,
    title: "初配信倒數宣傳圖",
    category: "宣傳圖",
    tags: ["宣傳圖","排版設計"],
    image: limnosCountdown,
    likes: 1024,
    views: 5234,
    description: "Limnos 三位角色初配信倒數宣傳圖，淺藍色系主視覺",
  },
  {
    id: 36,
    title: "新衣裝預測｜黑銀夜烏",
    category: "宣傳圖",
    tags: ["宣傳圖", "排版設計"],
    image: karasuOutfitAnnounce,
    likes: 1156,
    views: 5678,
    description: "Kurogane Karasu 新衣裝發表預告宣傳圖，粉紅色系主視覺",
  },
  {
    id: 37,
    title: "Limnos 周邊商品｜星座展示",
    category: "商品設計",
    tags: ["商品設計", "排版設計"],
    image: limnosMerchandiseDisplay,
    likes: 1289,
    views: 6234,
    description: "Limnos 星座主題周邊商品展示，包含圓扇、立牌、收藏海報、壓克力流沙票卡套與徽章設計",
  },
];

export default function Portfolio() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [milkLovePage, setMilkLovePage] = useState<'signing' | 'fanmeeting'>('fanmeeting');
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [displayCount, setDisplayCount] = useState(12); // 初始顯示 12 個作品
  
  const banners = [milkLoveBanner1, milkLoveBanner2];
  const portfolioPreviews = [
    portfolioCover,
    portfolioPreview1,
    portfolioPreview2,
    portfolioPreview3,
    portfolioPreview4,
    portfolioPreview5,
  ];
  
  // Handle hash navigation and set category
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    
    if (hash === 'illustration') {
      setSelectedCategory('插畫');
    } else if (hash === 'merchandise') {
      setSelectedCategory('周邊商品');
    }
    // For exhibition, we don't need to change category as it's a specific section
  }, [location.hash]);
  
  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, [banners.length]);
  
  // Auto-rotate portfolio previews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPortfolioIndex((prev) => (prev + 1) % portfolioPreviews.length);
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval);
  }, [portfolioPreviews.length]);
  
  // Handle scroll for showing scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll functions
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowQuickNav(false);
    }
  };

  const filteredItems =
    selectedCategory === "全部"
      ? portfolioItems
      : portfolioItems.filter((item) => {
          // Check if item has tags and if the selected category is in the tags
          if (item.tags) {
            return item.tags.includes(selectedCategory);
          }
          // Otherwise use category
          return item.category === selectedCategory;
        });
  
  const displayedItems = filteredItems.slice(0, displayCount);
  const hasMore = displayCount < filteredItems.length;
  
  const loadMore = () => {
    setDisplayCount(prev => prev + 12);
  };
  
  // Reset display count when category changes
  useEffect(() => {
    setDisplayCount(12);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-800 mb-6">作品集</h1>
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full border border-[#F8D7DA]/60 shadow-[0_4px_20px_rgb(232,161,166,0.15)]">
            <span className="text-sm text-[#D88A8F] font-light">🌸</span>
            <p className="text-base text-[#C67378] font-light">
              歷年作品展示🌸
            </p>
          </div>
        </div>

        {/* PDF Portfolio Showcase */}
        <div id="pdf-portfolio" className="mb-12">
          <div className="rounded-3xl p-8 sm:p-12 border-2 border-[#E5A4A9] relative overflow-hidden">
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${portfolioCover})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8D7DA]/95 via-[#F5E6E8]/92 to-[#F0DFE1]/90"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E5A4A9] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D88A8F] rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Info */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F8D7DA]">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-[#C67378]">完整作品集</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl text-gray-800 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#D88A8F]" />
                  作品集 PDF
                </h2>
                
                <p className="text-gray-700 leading-relaxed">
                  精心整理了所有作品的完整版作品集，敬請閱覽！
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://drive.google.com/file/d/1m0QY5-qsn19nAD4xj4g1J1NvKePgGMYJ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/80 text-[#C67378] px-6 py-3 rounded-full border border-[#F8D7DA] hover:bg-white transition-all"
                  >
                    <Eye className="w-5 h-5" />
                    線上閱覽
                  </a>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 pt-2">
                  <span className="flex items-center gap-1">
                    📄 60+ 頁
                  </span>
                  <span className="flex items-center gap-1">
                    💾 90 MB
                  </span>
                </div>
              </div>
              
              {/* Right side - Visual */}
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_rgb(232,161,166,0.4)] p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <a
                    href="https://drive.google.com/file/d/1m0QY5-qsn19nAD4xj4g1J1NvKePgGMYJ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-[3/4] bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] rounded-xl flex items-center justify-center relative overflow-hidden cursor-pointer group"
                  >
                    {portfolioPreviews.map((preview, index) => (
                      <img
                        key={index}
                        src={preview}
                        alt={`作品集預覽 ${index + 1}`}
                        className={`w-full h-full object-cover rounded-lg absolute inset-0 transition-all duration-1000 ${
                          index === currentPortfolioIndex ? 'opacity-100' : 'opacity-0'
                        } group-hover:scale-105`}
                      />
                    ))}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#E5A4A9]/0 group-hover:bg-[#E5A4A9]/10 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full text-[#C67378] font-medium">
                        點擊查看完整作品集
                      </div>
                    </div>
                  </a>
                  <div className="mt-4 text-center">
                    <p className="text-gray-700 font-medium">設計與插畫作品集</p>
                    <p className="text-sm text-gray-500">Portfolio Collection</p>
                    {/* Pagination dots */}
                    <div className="flex justify-center gap-1.5 mt-3">
                      {portfolioPreviews.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPortfolioIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentPortfolioIndex
                              ? 'bg-[#E5A4A9] w-6'
                              : 'bg-[#F8D7DA] hover:bg-[#E5A4A9]/50'
                          }`}
                          aria-label={`查看第 ${index + 1} 頁`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative heart */}
                <Heart className="absolute -top-3 -right-3 w-12 h-12 text-[#E5A4A9] fill-[#E5A4A9] animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Showcase - Milk Love */}
        <div id="exhibition" className="mb-12">
          <div className="rounded-3xl p-6 sm:p-10 border-2 border-[#E5A4A9] relative overflow-hidden">
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url(${milkLoveProject})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8D7DA]/70 via-[#F5E6E8]/65 to-[#F0DFE1]/60"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E5A4A9] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D88A8F] rounded-full opacity-20 blur-3xl"></div>
            
            {/* Header Section */}
            <div className="relative z-10 mb-6 text-center">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F8D7DA] mb-4">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-[#C67378]">專案展示</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl text-gray-800 flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-[#D88A8F] fill-[#D88A8F]" />
                展覽視覺專案
              </h2>
              
              {/* Page Toggle Tabs */}
              <div className="flex justify-center gap-3 mb-6">
                <button
                  onClick={() => setMilkLovePage('fanmeeting')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    milkLovePage === 'fanmeeting'
                      ? 'bg-white text-[#D88A8F] shadow-lg scale-105'
                      : 'bg-white/50 text-gray-600 hover:bg-white/70'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💚</span>
                    <div className="text-left">
                      <div className="text-sm sm:text-base">Milk Love Fan Meeting</div>
                      <div className="text-xs opacity-70">Milk Love 粉絲見面會</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setMilkLovePage('signing')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    milkLovePage === 'signing'
                      ? 'bg-white text-[#D88A8F] shadow-lg scale-105'
                      : 'bg-white/50 text-gray-600 hover:bg-white/70'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🩷</span>
                    <div className="text-left">
                      <div className="text-sm sm:text-base">Love Signal 💌 In Taipei</div>
                      <div className="text-xs opacity-70">Milk Love 粉絲見面會</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Content based on selected page */}
            {milkLovePage === 'signing' ? (
              <>
                {/* Signing Event Content */}
                <div className="relative z-10 mb-4">
                  <div className="text-center mb-6">
                    <h3 className="text-xl text-[#D88A8F] mb-2">主題展覽視覺規劃</h3>
                    <p className="text-gray-700 text-sm max-w-2xl mx-auto">
                      主題展覽視覺規劃、主視覺設計、展場海報設計與延伸應用製作。
                    </p>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-800 flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-[#D88A8F] rounded-full"></span>
                    主視覺看板
                  </h4>
                  
                  <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_rgb(232,161,166,0.4)] p-6 group">
                    <div className="aspect-[5/2] bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] rounded-xl overflow-hidden relative">
                      {/* Banner Images with Fade Transition */}
                      {banners.map((banner, index) => (
                        <img
                          key={index}
                          src={banner}
                          alt={`Milk Love 看板設計 ${index + 1}`}
                          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                            index === currentBannerIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => setCurrentBannerIndex((prev) => (prev - 1 + banners.length) % banners.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#D88A8F] p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => setCurrentBannerIndex((prev) => (prev + 1) % banners.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#D88A8F] p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      
                      {/* Indicator Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {banners.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentBannerIndex(index)}
                            className={`h-2.5 rounded-full transition-all shadow-md ${
                              index === currentBannerIndex 
                                ? 'bg-white w-8' 
                                : 'bg-white/60 hover:bg-white/90 w-2.5'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Small Items Grid */}
                <div className="relative z-10 grid md:grid-cols-2 gap-6">
                  {/* Announcement Images */}
                  <div>
                    <h4 className="text-base font-medium text-gray-800 flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 bg-[#D88A8F] rounded-full"></span>
                      公告圖設計
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {[milkLoveAnnounce1, milkLoveAnnounce2, milkLoveAnnounce3].map((img, index) => (
                        <div key={index} className="relative bg-white rounded-lg shadow-[0_8px_20px_rgb(232,161,166,0.2)] p-1.5 hover:scale-105 transition-transform duration-300">
                          <div className="aspect-square bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] rounded-md overflow-hidden">
                            <img
                              src={img}
                              alt={`公告圖 ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Staff Passes */}
                  <div>
                    <h4 className="text-base font-medium text-gray-800 flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 bg-[#D88A8F] rounded-full"></span>
                      工作證設計
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {[milkLoveStaffPass1, milkLoveStaffPass2, milkLoveStaffPass3].map((pass, index) => (
                        <div key={index} className="relative bg-white rounded-lg shadow-[0_8px_20px_rgb(232,161,166,0.2)] p-1.5 hover:scale-105 transition-transform duration-300">
                          <div className="aspect-square bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] rounded-md overflow-hidden">
                            <img
                              src={pass}
                              alt={`工作證設計 ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Fan Meeting Background Layer */}
                <div className="absolute inset-0 bg-cover bg-center opacity-15 rounded-2xl" style={{ backgroundImage: `url(${milkLoveFanMeetingBg})` }}></div>
                
                {/* Fan Meeting Content */}
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl text-[#D88A8F] mb-2">粉絲見面會視覺設計</h3>
                    <p className="text-gray-700 text-sm max-w-2xl mx-auto">
                      Milk Love Fan Meeting 2025 in Taipei - 視覺設計、海報與明信片製作。
                    </p>
                  </div>
                  
                  {/* Main Poster - Large */}
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-800 flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 bg-[#D88A8F] rounded-full"></span>
                      視覺圖橫幅
                    </h4>
                    
                    <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_rgb(232,161,166,0.4)] p-6">
                      <div className="aspect-[5/2] bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] rounded-xl overflow-hidden">
                        <img
                          src={milkLoveFanPoster}
                          alt="Milk Love Fan Meeting 海報設計"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 2x2 Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Visual Design */}
                    <div>
                      <h4 className="text-base font-medium text-gray-800 flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 bg-[#D88A8F] rounded-full"></span>
                        主視覺海報
                      </h4>
                      
                      <div className="relative bg-white rounded-lg shadow-[0_8px_20px_rgb(232,161,166,0.2)] p-2 hover:scale-105 transition-transform duration-300">
                        <div className="aspect-square bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] rounded-md overflow-hidden">
                          <img
                            src={milkLoveFanPostcard}
                            alt="主視覺海報"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Postcard */}
                    <div>
                      <h4 className="text-base font-medium text-gray-800 flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 bg-[#D88A8F] rounded-full"></span>
                        明信片設計
                      </h4>
                      
                      <div className="relative bg-white rounded-lg shadow-[0_8px_20px_rgb(232,161,166,0.2)] p-2 hover:scale-105 transition-transform duration-300">
                        <div className="aspect-square bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] rounded-md overflow-hidden">
                          <img
                            src={milkLoveFanVisual}
                            alt="明信片設計"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {/* Decorative sparkle */}
            <Sparkles className="absolute -top-3 -right-3 w-10 h-10 text-yellow-400 animate-pulse z-20" />
          </div>
        </div>

        {/* Category Filter */}
        <div id="illustration" className="scroll-mt-20"></div>
        <div id="merchandise" className="scroll-mt-20"></div>
        <div id="portfolio-grid" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-[#D88A8F] text-white shadow-[0_8px_25px_rgb(216,138,143,0.4)] scale-105"
                  : "bg-white text-gray-600 hover:bg-[#F8D7DA] hover:text-[#C67378] border border-[#F8D7DA]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#F8D7DA] hover:shadow-[0_20px_50px_rgb(232,161,166,0.35)] transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 fill-white" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{item.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg text-gray-800 mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags ? (
                    item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-[#F8D7DA] text-[#C67378] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="inline-block px-3 py-1 bg-[#F8D7DA] text-[#C67378] text-xs rounded-full">
                      {item.category}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMore}
              className="group px-8 py-3 bg-white text-[#C67378] border-2 border-[#F8D7DA] rounded-full hover:bg-[#F8D7DA] hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgb(232,161,166,0.2)] hover:shadow-[0_8px_30px_rgb(232,161,166,0.4)] flex items-center gap-2 mx-auto"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              載入更多作品
              <span className="text-sm opacity-60">({filteredItems.length - displayCount} 項)</span>
            </button>
          </div>
        )}
        {!hasMore && filteredItems.length > 12 && (
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <Star className="w-4 h-4 fill-[#E5A4A9] text-[#E5A4A9]" />
              已顯示全部 {filteredItems.length} 項作品
              <Star className="w-4 h-4 fill-[#E5A4A9] text-[#E5A4A9]" />
            </p>
          </div>
        )}
      </div>
      
      {/* Floating Quick Navigation */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {/* Quick Nav Menu */}
        {showQuickNav && (
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(216,138,143,0.3)] p-3 border-2 border-[#F8D7DA] mb-2 animate-in fade-in slide-in-from-bottom-5 duration-300">
            <div className="flex flex-col gap-2 min-w-[160px]">
              <button
                onClick={() => scrollToSection('pdf-portfolio')}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F8D7DA] hover:text-[#C67378] rounded-lg transition-all group"
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>作品集 PDF</span>
              </button>
              <button
                onClick={() => scrollToSection('exhibition')}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F8D7DA] hover:text-[#C67378] rounded-lg transition-all group"
              >
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>展覽視覺專案</span>
              </button>
              <button
                onClick={() => scrollToSection('portfolio-grid')}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F8D7DA] hover:text-[#C67378] rounded-lg transition-all group"
              >
                <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>作品展示</span>
              </button>
            </div>
          </div>
        )}
        
        {/* Navigation Toggle Button */}
        <button
          onClick={() => setShowQuickNav(!showQuickNav)}
          className="w-14 h-14 bg-gradient-to-br from-[#F8D7DA] to-[#E5A4A9] text-white rounded-full shadow-[0_8px_30px_rgba(216,138,143,0.4)] hover:shadow-[0_12px_40px_rgba(216,138,143,0.5)] hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
          aria-label="快速導航"
        >
          <Menu className={`w-6 h-6 transition-transform duration-300 ${showQuickNav ? 'rotate-90' : ''}`} />
          
          {/* Cute decorative hearts */}
          <Heart className="absolute -top-1 -right-1 w-4 h-4 text-[#E5A4A9] fill-[#E5A4A9] animate-pulse" />
        </button>
        
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-white text-[#D88A8F] rounded-full shadow-[0_8px_30px_rgba(216,138,143,0.3)] hover:shadow-[0_12px_40px_rgba(216,138,143,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-[#F8D7DA] group animate-in fade-in slide-in-from-bottom-5"
            aria-label="回到頂部"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Sparkle effect */}
            <Sparkles className="absolute -top-1 -left-1 w-4 h-4 text-yellow-400 animate-pulse" />
          </button>
        )}
      </div>
    </div>
  );
}