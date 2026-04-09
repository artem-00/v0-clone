"use client"

import { cn } from "@/lib/utils"

interface BottomNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0d0e1a] z-50 max-w-md mx-auto">
      <div className="flex items-end justify-around px-2 pt-2 pb-1">
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
          icon={<CardsIcon />}
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
        "flex flex-col items-center gap-1 px-4 py-2 transition-all relative min-w-[60px]",
        isActive && "bg-[#1f2937] rounded-xl"
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
          <span className="absolute -top-1 -right-2 bg-[#ef4444] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
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
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M21 7H3V5a2 2 0 012-2h14a2 2 0 012 2v2zm0 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9h18zm-5 4a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>
  )
}

function SoccerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M20 7h-1.26A4 4 0 0012 2.26 4 4 0 005.26 7H4a2 2 0 00-2 2v2a1 1 0 001 1h1v7a2 2 0 002 2h12a2 2 0 002-2v-7h1a1 1 0 001-1V9a2 2 0 00-2-2zm-8-3a2 2 0 011.72 3H12V4zM10 7H8.28A2 2 0 1112 4v3h-2zm1 12H6v-7h5v7zm0-8H4V9h7v2zm2 8v-7h5v7h-5zm5-8h-5V9h7v2h-2z"/>
    </svg>
  )
}

function CardsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.2 3H6.8A3.8 3.8 0 003 6.8v10.4A3.8 3.8 0 006.8 21h10.4a3.8 3.8 0 003.8-3.8V6.8A3.8 3.8 0 0017.2 3zM8 9a1 1 0 11-2 0 1 1 0 012 0zm2 6a1 1 0 11-2 0 1 1 0 012 0zm2-3a1 1 0 11-2 0 1 1 0 012 0zm2 3a1 1 0 11-2 0 1 1 0 012 0zm2-6a1 1 0 11-2 0 1 1 0 012 0z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  )
}
