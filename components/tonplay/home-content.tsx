"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Headphones } from "lucide-react"
import { cn } from "@/lib/utils"

const bonusCards = [
  { 
    id: 1, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9CTQND0fnJWJwdgt2gpuEvasnaZT3R.png",
    badge: 1
  },
  { 
    id: 2, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6h9L2pN5dFreZKTaQuiw0y5j2tfxve.png"
  },
  { 
    id: 3, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WvtgtizRfqSfamgzyHRgLM8KMLTYh4.png"
  },
]

const gameCategories = [
  { id: "all", label: "Все игры" },
  { id: "slots", label: "Слоты" },
  { id: "live", label: "Live-игры" },
]

const recentGames = [
  { 
    id: 1, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zU3IxIW8yBvRZGrfEwmvILEwMViai4.png"
  },
  { 
    id: 2, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ApvLUS5bC7AFw7tyO7LPAaROm3zDsX.png"
  },
  { 
    id: 3, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZGzocdNuCda173j0LkTcVpdNNUMMVn.png"
  },
]

export function HomeContent() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="pb-24">
      {/* Bonus Cards Row */}
      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {bonusCards.map((card) => (
            <button
              key={card.id}
              className="flex-shrink-0 relative"
            >
              <img
                src={card.image}
                alt=""
                className="w-[110px] h-[64px] rounded-lg object-cover"
              />
              {card.badge && (
                <span className="absolute top-1 left-1 bg-[#a855f7] text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                  {card.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Promo Banner */}
      <div className="px-4 mb-4">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yVfEnCdP6NBoobex0LhMwKG1o1MhMm.png"
            alt="375% +200FS FOR NEW PLAYERS"
            className="w-full h-auto object-cover"
          />
          {/* Carousel dots */}
          <div className="absolute bottom-3 left-4 flex gap-1.5">
            <div className="w-5 h-1.5 bg-white rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-2">
          {/* Category Buttons */}
          {gameCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 transition-all",
                  isActive ? "border-b-2 border-[#3b82f6]" : ""
                )}
              >
                <span className={cn(
                  "text-[15px] font-medium whitespace-nowrap",
                  isActive ? "text-white" : "text-[#6b7280]"
                )}>
                  {cat.label}
                </span>
              </button>
            )
          })}
          
          {/* Right side controls */}
          <div className="ml-auto flex items-center gap-2">
            <button className="bg-[#3b82f6] text-white text-sm font-medium px-4 py-1.5 rounded-lg">
              Все
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#1f2937] flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-[#6b7280]" />
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#1f2937] flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Recent Games Section */}
      <div className="px-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {recentGames.map((game) => (
            <button
              key={game.id}
              className="flex-shrink-0"
            >
              <img
                src={game.image}
                alt=""
                className="w-[100px] h-[140px] rounded-lg object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Ducky Wheel FAB */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Uxtm17bIlkUnjSRUjYdWlzBuirNdAQ.png"
          alt="Ducky Wheel"
          className="w-[100px] h-auto object-contain"
        />
      </div>

      {/* Support FAB */}
      <button className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-lg shadow-blue-500/30 z-40">
        <Headphones className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
