import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: "heart" | "sparkle" | "star";
  opacity: number;
}

export default function CursorEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      // 隨機產生粒子效果
      if (Math.random() > 0.85) {
        const icons: Array<"heart" | "sparkle" | "star"> = [
          "heart",
          "sparkle",
          "star",
        ];
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          icon: icons[Math.floor(Math.random() * icons.length)],
          opacity: 1,
        };

        setParticles((prev) => [...prev, newParticle]);

        // 移除粒子
        setTimeout(() => {
          setParticles((prev) =>
            prev.filter((p) => p.id !== newParticle.id),
          );
        }, 1000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* 自定義游標 */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
      </div>

      {/* 粒子效果 */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] animate-float-up"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: particle.opacity,
            animation: "floatUp 1s ease-out forwards",
          }}
        >
          {particle.icon === "heart" && (
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
          )}
          {particle.icon === "sparkle" && (
            <Sparkles className="w-4 h-4 text-yellow-400" />
          )}
          {particle.icon === "star" && (
            <Star className="w-4 h-4 text-pink-300 fill-pink-300" />
          )}
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(-30px) scale(0.5);
          }
        }
      `}</style>
    </>
  );
}