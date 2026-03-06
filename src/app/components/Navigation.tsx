import { Link, useLocation } from "react-router";
import { Heart, Sparkles } from "lucide-react";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "首頁" },
    { path: "/portfolio", label: "作品集" },
    { path: "/about", label: "關於我" },
    { path: "/contact", label: "我要委託" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F8D7DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Heart className="w-6 h-6 text-[#E5A4A9] fill-[#E5A4A9] group-hover:scale-110 transition-transform" />
              <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-medium text-[#D88A8F]">松花沐玲</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-0.5 sm:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2 sm:px-3 py-2 rounded-full text-xs sm:text-sm transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-[#F8D7DA] text-[#C67378]"
                      : "text-gray-600 hover:bg-[#F8D7DA]/50 hover:text-[#D88A8F]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}