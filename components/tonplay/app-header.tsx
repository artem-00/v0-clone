"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface AppHeaderProps {
  onOpenWallet: () => void
  onOpenProfile?: () => void
}

export function AppHeader({ onOpenWallet, onOpenProfile }: AppHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#0d0e1a]">
      {/* Logo - TonPlay style */}
      <div className="flex items-center flex-shrink-0">
        <svg viewBox="0 0 60 32" className="h-8 w-14">
          <text x="0" y="14" fill="white" fontFamily="serif" fontStyle="italic" fontSize="14" fontWeight="bold">Ton</text>
          <text x="0" y="28" fill="white" fontFamily="serif" fontStyle="italic" fontSize="14" fontWeight="normal">play</text>
        </svg>
      </div>

      {/* Balance - USD stacked above amount */}
      <div className="flex flex-col items-start ml-2">
        <div className="flex items-center gap-0.5">
          <span className="text-white text-sm font-medium">USD</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#6b7280]" />
        </div>
        <span className="text-white text-sm">0,00$</span>
      </div>

      {/* Deposit Button - More square with rounded corners */}
      <button 
        onClick={onOpenWallet}
        className="bg-[#3b82f6] text-white px-6 py-2.5 rounded-xl text-[15px] font-semibold hover:bg-[#2563eb] transition-colors ml-auto mr-3"
      >
        Пополнить
      </button>

      {/* Avatar - Duck mascot */}
      <button onClick={onOpenProfile} className="relative flex-shrink-0">
        <div className="w-11 h-11 rounded-xl overflow-hidden">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2WnR2w2wFXA1rxJlamwLMwXUxKH2UY.png"
            alt="Avatar"
            width={44}
            height={44}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#22c55e] rounded-full border-2 border-[#0d0e1a]" />
      </button>
    </header>
  )
}
