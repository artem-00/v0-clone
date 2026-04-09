"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface AppHeaderProps {
  onOpenWallet: () => void
}

export function AppHeader({ onOpenWallet }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#0d0e1a]">
      {/* Logo - TonPlay style */}
      <div className="flex items-center">
        <svg viewBox="0 0 80 24" className="h-6 w-20">
          <text x="0" y="18" fill="white" fontFamily="serif" fontStyle="italic" fontSize="18">
            <tspan fontWeight="bold">Ton</tspan>
            <tspan fontWeight="normal">play</tspan>
          </text>
        </svg>
      </div>

      {/* Balance */}
      <div className="flex items-center gap-0.5">
        <span className="text-white text-sm">USD</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#6b7280]" />
        <span className="text-white text-sm ml-1">0,00$</span>
      </div>

      {/* Deposit Button */}
      <button 
        onClick={onOpenWallet}
        className="bg-[#3b82f6] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2563eb] transition-colors"
      >
        Пополнить
      </button>

      {/* Avatar - Duck mascot */}
      <div className="relative">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ynw3M6pkeJrzNzYc9NpJZTDDlKmGvq.png"
            alt="Avatar"
            width={40}
            height={40}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#22c55e] rounded-full border-2 border-[#0d0e1a]" />
      </div>
    </header>
  )
}
