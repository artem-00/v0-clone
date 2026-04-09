"use client"

import { cn } from "@/lib/utils"

interface BottomNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0d0e1a] border-t border-[#1f2937] z-50 max-w-md mx-auto">
      <div className="flex items-center justify-around px-2 pt-2 pb-1">
        {/* Касса */}
        <NavButton
          id="cashier"
          label="Касса"
          isActive={activeTab === "cashier"}
          onClick={() => onTabChange("cashier")}
          icon={<WalletIcon />}
        />
        
        {/* Спорт */}
        <NavButton
          id="sport"
          label="Спорт"
          isActive={activeTab === "sport"}
          onClick={() => onTabChange("sport")}
          icon={<SoccerIcon />}
        />
        
        {/* Бонусы */}
        <NavButton
          id="bonuses"
          label="Бонусы"
          isActive={activeTab === "bonuses"}
          onClick={() => onTabChange("bonuses")}
          icon={<GiftIcon />}
          badge={1}
        />
        
        {/* Казино */}
        <NavButton
          id="casino"
          label="Казино"
          isActive={activeTab === "casino"}
          onClick={() => onTabChange("casino")}
          icon={<CasinoIcon />}
        />
        
        {/* Меню */}
        <NavButton
          id="menu"
          label="Меню"
          isActive={activeTab === "menu"}
          onClick={() => onTabChange("menu")}
          icon={<MenuIcon />}
        />
      </div>
      
      {/* Home indicator bar */}
      <div className="flex justify-center pb-2 pt-1">
        <div className="w-32 h-1 bg-white/20 rounded-full" />
      </div>
    </nav>
  )
}

interface NavButtonProps {
  id: string
  label: string
  isActive: boolean
  onClick: () => void
  icon: React.ReactNode
  badge?: number
}

function NavButton({ label, isActive, onClick, icon, badge }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1 px-3 py-2 transition-all relative min-w-[56px] rounded-xl",
        isActive && "bg-[#1f2937]"
      )}
    >
      <div className="relative">
        <div className={cn(
          "w-6 h-6 flex items-center justify-center",
          isActive ? "text-white" : "text-[#6b7280]"
        )}>
          {icon}
        </div>
        {badge !== undefined && (
          <span className="absolute -top-1.5 -right-2.5 bg-[#ef4444] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
            {badge}
          </span>
        )}
      </div>
      <span className={cn(
        "text-[11px] font-medium",
        isActive ? "text-white" : "text-[#6b7280]"
      )}>
        {label}
      </span>
    </button>
  )
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" />
      <path d="M16 12a1 1 0 100-2 1 1 0 000 2z" fill="currentColor" />
      <path d="M2 7h20" />
    </svg>
  )
}

function SoccerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 110-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z" />
    </svg>
  )
}

function CasinoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="16" cy="16" r="1" fill="currentColor" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  )
}
