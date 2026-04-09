"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Headphones, Search, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const bonusCards = [
  { 
    id: 1, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9CTQND0fnJWJwdgt2gpuEvasnaZT3R.png",
    label: "Мои бонусы",
  },
  { 
    id: 2, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6h9L2pN5dFreZKTaQuiw0y5j2tfxve.png",
    label: "Кешбэк",
    badge: "до 6%",
  },
  { 
    id: 3, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WvtgtizRfqSfamgzyHRgLM8KMLTYh4.png",
    label: "VIP",
  },
  { 
    id: 4, 
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9CTQND0fnJWJwdgt2gpuEvasnaZT3R.png",
    label: "Крипт...",
  },
]

const gameCategories = [
  { id: "all", label: "Все игры", icon: "grid" },
  { id: "slots", label: "Слоты", icon: "slots" },
  { id: "live", label: "Live-игры", icon: "live" },
]

const recentGames = [
  { id: 1, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NmNRCHpEflny7frRbNz7RvkNc5JLC8.png" },
  { id: 2, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fhvr6vRmKbO20WeRjBfbQAygiY4vmx.png" },
  { id: 3, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wDMfxFvmna86zvPq7XOkfN3YmlfBHl.png" },
  { id: 4, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KZ00MkTacOWcNeI6dshmQhY1Ftu2hw.png" },
  { id: 5, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-es3qIAe5WHs8sqRMrNgwv8Vs5nytkf.png" },
  { id: 6, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4t09Cbb3BtNKpT1Jl0xBw6RmShwi2z.png" },
]

const popularGames = [
  { id: 1, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1AqUFPqlTq431zKMGMN6jw1O5d81t4.png" },
  { id: 2, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GD8Tpr6e9ZdiyFDJXuUYZSBux8POrC.png" },
  { id: 3, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qWH7IK9Xumjbfc7shA1pvvKCfCmXvV.png" },
  { id: 4, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HWH03GF3qVhbKCmM27YL4LKI8GExig.png" },
  { id: 5, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4PAgHK2Z0ZQFXl32DVUiCEkmLyGoNx.png" },
  { id: 6, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LzjNdfDw2oKZ8zLcaFVDjYuhOnQFWZ.png" },
]

const liveGames = [
  { id: 1, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gsl0ikx5oAXofqzYdzG5YgblZXmeuH.png" },
  { id: 2, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bJ2qSSeIrKZx5QTvgsTVuvaqVGXHUl.png" },
  { id: 3, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NmNRCHpEflny7frRbNz7RvkNc5JLC8.png" },
  { id: 4, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fhvr6vRmKbO20WeRjBfbQAygiY4vmx.png" },
  { id: 5, image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wDMfxFvmna86zvPq7XOkfN3YmlfBHl.png" },
]

export function HomeContent() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="pb-24">
      {/* Bonus Cards Row with Labels */}
      <div className="px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {bonusCards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 flex flex-col items-center"
            >
              <button className="relative mb-2">
                <Image
                  src={card.image}
                  alt={card.label}
                  width={110}
                  height={72}
                  className="w-[110px] h-[72px] rounded-2xl object-cover"
                  unoptimized
                />
                {card.badge && (
                  <span className="absolute top-2 right-2 bg-[#f97316] text-white text-[10px] font-bold rounded-full px-2 py-0.5 flex items-center gap-0.5">
                    <span className="w-2 h-2 bg-white rounded-full inline-block" />
                    {card.badge}
                  </span>
                )}
              </button>
              <span className="text-white text-xs font-medium text-center">{card.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Promo Banner */}
      <div className="px-4 mb-4">
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LesXovGic9DVHwxMbn4O2bEOqyE3CA.png"
            alt="375% +200FS FOR NEW PLAYERS"
            width={400}
            height={180}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Category Tabs with Search */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-1">
          {/* Search Button */}
          <button className="w-11 h-11 rounded-xl bg-[#1f2937] flex items-center justify-center flex-shrink-0">
            <Search className="w-5 h-5 text-white" strokeWidth={2} />
          </button>
          
          {/* Category Buttons */}
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {gameCategories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 transition-all whitespace-nowrap",
                    isActive ? "border-b-2 border-[#3b82f6]" : ""
                  )}
                >
                  {cat.icon === "grid" && <GridIcon className={isActive ? "text-[#3b82f6]" : "text-[#6b7280]"} />}
                  {cat.icon === "slots" && <SlotsIcon className={isActive ? "text-[#3b82f6]" : "text-[#6b7280]"} />}
                  {cat.icon === "live" && <LiveIcon className={isActive ? "text-[#3b82f6]" : "text-[#6b7280]"} />}
                  <span className={cn(
                    "text-[14px] font-medium",
                    isActive ? "text-white" : "text-[#6b7280]"
                  )}>
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Game History Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-white" strokeWidth={2} />
            <h2 className="text-white text-[17px] font-semibold">История игр</h2>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-9 h-9 rounded-xl bg-[#1f2937] flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-[#6b7280]" />
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#1f2937] flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {recentGames.map((game) => (
            <button
              key={game.id}
              className="flex-shrink-0"
            >
              <Image
                src={game.image}
                alt=""
                width={120}
                height={160}
                className="w-[120px] h-[160px] rounded-xl object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>

      {/* Popular Games Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white text-[17px] font-semibold">Популярные</h2>
          <div className="flex items-center gap-1">
            <button className="px-4 py-2 rounded-xl bg-[#1f2937] text-white text-sm font-medium">
              Все
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#1f2937] flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-[#6b7280]" />
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#1f2937] flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {popularGames.map((game) => (
            <button
              key={game.id}
              className="flex-shrink-0"
            >
              <Image
                src={game.image}
                alt=""
                width={120}
                height={160}
                className="w-[120px] h-[160px] rounded-xl object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>

      {/* Live Games Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white text-[17px] font-semibold">Live-игры</h2>
          <div className="flex items-center gap-1">
            <button className="px-4 py-2 rounded-xl bg-[#1f2937] text-white text-sm font-medium">
              Все
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#1f2937] flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-[#6b7280]" />
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#1f2937] flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {liveGames.map((game) => (
            <button
              key={game.id}
              className="flex-shrink-0"
            >
              <Image
                src={game.image}
                alt=""
                width={120}
                height={160}
                className="w-[120px] h-[160px] rounded-xl object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      </div>

      {/* Support FAB */}
      <button className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-lg shadow-blue-500/30 z-40">
        <Headphones className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={cn("w-5 h-5", className)}>
      <rect x="2" y="2" width="7" height="7" rx="1.5" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" />
    </svg>
  )
}

function SlotsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={cn("w-5 h-5", className)}>
      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z"/>
    </svg>
  )
}

function LiveIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-5 h-5", className)}>
      <rect x="3" y="4" width="14" height="10" rx="2" />
      <path d="M7 16h6" />
      <circle cx="10" cy="9" r="2" fill="currentColor" />
    </svg>
  )
}
