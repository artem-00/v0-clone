"use client"

import { ArrowLeft, Copy, Calendar, ChevronDown, Lock, Check, Phone, Headphones, ArrowUp, ChevronUp } from "lucide-react"
import Image from "next/image"

interface ProfileContentProps {
  onBack: () => void
}

export function ProfileContent({ onBack }: ProfileContentProps) {
  return (
    <div className="pb-24 bg-[#0d0e1a]">
      {/* Black bar for Telegram padding */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f8RGakPyGb5iH90tmHQQKOSqPBEHyI.png"
        alt=""
        width={400}
        height={24}
        className="w-full h-6 object-cover"
        unoptimized
      />



      {/* App Header Row - with cleaner logo and avatar without online indicator */}
      <div className="flex items-center justify-between px-4 py-2 mb-2">
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
        <div className="flex items-center gap-2 ml-auto mr-2">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-0.5">
              <span className="text-white text-sm font-medium">USD</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#6b7280]" />
            </div>
            <span className="text-white text-sm">0,00$</span>
          </div>
          <button className="bg-[#3b82f6] text-white px-5 py-2.5 rounded-lg text-[15px] font-semibold">
            Пополнить
          </button>
        </div>
        <div className="flex-shrink-0 ml-2">
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
        </div>
      </div>

      {/* Page Title */}
      <div className="flex items-center gap-3 px-4 mb-5">
        <button onClick={onBack} className="text-white">
          <ArrowLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <h1 className="text-white text-xl font-bold">Личный профиль</h1>
      </div>

      {/* Copy ID Section - without online indicator */}
      <div className="px-4 mb-6">
        <div className="bg-[#1f2937] rounded-2xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl overflow-hidden">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A7EEptKyFtHLvY81Wiao0eygmTUdWg.png"
              alt="Avatar"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white text-[15px]">Копировать мой ID</span>
            <Copy className="w-4 h-4 text-[#6b7280]" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Personal Data Section */}
      <div className="px-4 mb-5">
        <h2 className="text-white text-[17px] font-semibold mb-4">Персональные данные</h2>
        
        <div className="space-y-3">
          {/* Name Input */}
          <div className="bg-[#1f2937] rounded-xl p-4">
            <span className="text-[#6b7280] text-[15px]">Имя</span>
          </div>
          
          {/* Surname Input */}
          <div className="bg-[#1f2937] rounded-xl p-4">
            <span className="text-[#6b7280] text-[15px]">Фамилия</span>
          </div>
          
          {/* Birth Date */}
          <div className="bg-[#1f2937] rounded-xl p-4 flex items-center justify-between">
            <span className="text-[#6b7280] text-[15px]">Дата рождения</span>
            <Calendar className="w-5 h-5 text-[#6b7280]" strokeWidth={1.5} />
          </div>
          
          {/* Gender */}
          <div className="bg-[#1f2937] rounded-xl p-4 flex items-center justify-between">
            <span className="text-[#6b7280] text-[15px]">Пол</span>
            <ChevronUp className="w-5 h-5 text-[#6b7280]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full bg-[#3b82f6]/30 text-[#3b82f6] py-3.5 rounded-xl text-[15px] font-semibold mt-4">
          Сохранить
        </button>
      </div>

      {/* Contact Data */}
      <div className="px-4 mb-5">
        <h2 className="text-white text-[17px] font-semibold mb-4">Контактные данные</h2>
        
        <div className="space-y-3">
          {/* Telegram - Connected */}
          <div className="bg-[#1f2937] rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#0088cc] flex items-center justify-center">
              <TelegramIcon />
            </div>
            <div className="flex-1">
              <p className="text-white text-[15px]">Telegram</p>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-[#22c55e]" strokeWidth={2.5} />
                <span className="text-[#22c55e] text-[13px]">Подключен</span>
              </div>
            </div>
          </div>

          {/* Phone - Unavailable */}
          <div className="bg-[#1f2937] rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#374151] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#6b7280]" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-[#6b7280] text-[15px]">Номер телефона</p>
              <span className="text-[#6b7280] text-[13px]">Недоступно</span>
            </div>
            <Lock className="w-5 h-5 text-[#6b7280]" strokeWidth={1.5} />
          </div>

          {/* Email - Unavailable */}
          <div className="bg-[#1f2937] rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#374151] flex items-center justify-center">
              <MailIcon />
            </div>
            <div className="flex-1">
              <p className="text-[#6b7280] text-[15px]">E-mail</p>
              <span className="text-[#6b7280] text-[13px]">Недоступно</span>
            </div>
            <Lock className="w-5 h-5 text-[#6b7280]" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1f2937] mx-4 my-6" />

      {/* Footer */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qTQXzAnIDMAzoBNUlFCSwmkQbSc1S5.png"
            alt="TonPlay"
            width={80}
            height={32}
            className="h-8 w-20 object-contain"
            unoptimized
          />
          <button className="flex items-center gap-2 bg-[#1f2937] px-4 py-2.5 rounded-xl">
            <span className="text-base">🇷🇺</span>
            <span className="text-white text-[14px]">Русский</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CasinoIcon />
              <h3 className="text-white font-semibold text-[15px]">Казино</h3>
            </div>
            <ul className="space-y-2.5 text-[#6b7280] text-[14px]">
              <li>Игры</li>
              <li>Все казино</li>
              <li>Провайдеры</li>
              <li>Быстрые игры</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Headphones className="w-5 h-5 text-white" strokeWidth={1.5} />
              <h3 className="text-white font-semibold text-[15px]">Поддержка</h3>
            </div>
            <ul className="space-y-2.5 text-[#6b7280] text-[14px]">
              <li>Техническая поддержка</li>
              <li>Служба безопасности</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button className="fixed bottom-24 left-4 w-10 h-10 rounded-full bg-[#1f2937] flex items-center justify-center z-40">
        <ArrowUp className="w-5 h-5 text-white" strokeWidth={1.5} />
      </button>

      {/* Support FAB */}
      <button className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-lg shadow-blue-500/30 z-40">
        <Headphones className="w-6 h-6 text-white" strokeWidth={1.5} />
      </button>
    </div>
  )
}

function TelegramIcon() {
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 text-[#6b7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function CasinoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}
