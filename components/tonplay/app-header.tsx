"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface AppHeaderProps {
  onOpenWallet: () => void
  onOpenProfile?: () => void
}

export function AppHeader({ onOpenWallet, onOpenProfile }: AppHeaderProps) {
  return (
    <>
      {/* Black bar for Telegram padding */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f8RGakPyGb5iH90tmHQQKOSqPBEHyI.png"
        alt=""
        width={400}
        height={24}
        className="w-full h-6 object-cover"
        unoptimized
      />
      
      <header className="flex items-center justify-between px-4 py-3 bg-[#0d0e1a]">
        {/* Logo - TonPlay using provided image */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qTQXzAnIDMAzoBNUlFCSwmkQbSc1S5.png"
            alt="TonPlay"
            width={56}
            height={32}
            className="h-8 w-14 object-contain"
            unoptimized
          />
        </div>

        {/* Balance - USD stacked above amount, centered with button next to it */}
        <div className="flex items-center gap-2 ml-auto mr-2">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5">
              <span className="text-white text-sm font-medium">USD</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#6b7280]" />
            </div>
            <span className="text-white text-sm">0,00$</span>
          </div>

          {/* Deposit Button - More square with rounded corners */}
          <button 
            onClick={onOpenWallet}
            className="bg-[#3b82f6] text-white px-5 py-2.5 rounded-lg text-[15px] font-semibold hover:bg-[#2563eb] transition-colors"
          >
            Пополнить
          </button>
        </div>

        {/* Avatar - Duck mascot without online indicator */}
        <button onClick={onOpenProfile} className="flex-shrink-0 ml-2">
          <div className="w-11 h-11 rounded-xl overflow-hidden">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A7EEptKyFtHLvY81Wiao0eygmTUdWg.png"
              alt="Avatar"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </button>
      </header>
    </>
  )
}
