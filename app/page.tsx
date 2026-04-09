"use client"

import { useState } from "react"
import { AppHeader } from "@/components/tonplay/app-header"
import { BottomNav } from "@/components/tonplay/bottom-nav"
import { WalletModal } from "@/components/tonplay/wallet-modal"
import { HomeContent } from "@/components/tonplay/home-content"
import { ProfileContent } from "@/components/tonplay/profile-content"

export default function TonPlayApp() {
  const [activeTab, setActiveTab] = useState("casino")
  const [isWalletOpen, setIsWalletOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "cashier") {
      setIsWalletOpen(true)
    } else if (tab === "menu") {
      setShowProfile(true)
    } else {
      setShowProfile(false)
    }
  }

  const handleOpenProfile = () => {
    setShowProfile(true)
    setActiveTab("menu")
  }

  return (
    <div className="min-h-screen bg-[#0d0e1a] max-w-md mx-auto relative">
      {!showProfile && (
        <AppHeader 
          onOpenWallet={() => setIsWalletOpen(true)} 
          onOpenProfile={handleOpenProfile}
        />
      )}
      
      <main>
        {showProfile ? (
          <ProfileContent onBack={() => {
            setShowProfile(false)
            setActiveTab("casino")
          }} />
        ) : (
          <HomeContent />
        )}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
      
      <WalletModal 
        isOpen={isWalletOpen} 
        onClose={() => setIsWalletOpen(false)} 
      />
    </div>
  )
}
