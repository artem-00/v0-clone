"use client"

import { useState } from "react"
import { X, Plus, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

const cryptoOptionsDeposit = [
  { 
    id: "ton", 
    name: "TON",
    subname: "(Toncoin)",
    bonus: "+7%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-edFePiHEWJ0nlJNbv0LzfsqteGTGKy.png",
    logo: "/ton-logo.png"
  },
  { 
    id: "usdt-ton", 
    name: "USDT",
    subname: "(Toncoin)",
    bonus: "+7%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZzmwHaWt0AO754iRE63vJ5qfWb27OA.png",
  },
  { 
    id: "usdt-trc20", 
    name: "USDT",
    subname: "(TRC20)",
    bonus: "+5%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XVVVTpnaro6BRNdpTtEf65rss7pPyW.png",
  },
  { 
    id: "usdt-bep20", 
    name: "USDT (BEP20)",
    bonus: "+5%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Oe2JcqsbJVCaoBeOJH0PSY0KYQsMuc.png",
  },
  { 
    id: "trx", 
    name: "TRX (Tron)",
    bonus: "+5%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-502jvfKhvS7K8nVb0Q4McOGL580sPW.png",
  },
  { 
    id: "eth", 
    name: "ETH",
    subname: "(Ethereum)",
    bonus: "+5%",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-502jvfKhvS7K8nVb0Q4McOGL580sPW.png",
  },
]

const cryptoOptionsWithdraw = [
  { 
    id: "ton", 
    name: "TON",
    subname: "(Toncoin)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-canX0ACZ6jloAFdei59DBPMqed8E5e.png",
  },
  { 
    id: "usdt-ton", 
    name: "USDT",
    subname: "(Toncoin)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AgGJqTLaFatIO1hB3vfYXnZwjZRVcX.png",
  },
  { 
    id: "usdt-trc20", 
    name: "USDT",
    subname: "(TRC20)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t0lpV9TIRNHT5ie5ii0lUfuWddVWan.png",
  },
  { 
    id: "trx", 
    name: "TRX (Tron)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-502jvfKhvS7K8nVb0Q4McOGL580sPW.png",
  },
  { 
    id: "eth", 
    name: "ETH",
    subname: "(Ethereum)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-502jvfKhvS7K8nVb0Q4McOGL580sPW.png",
  },
  { 
    id: "usdt-erc20", 
    name: "USDT",
    subname: "(ERC20)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-502jvfKhvS7K8nVb0Q4McOGL580sPW.png",
  },
]

const transactions = [
  { id: 1, type: "withdraw", label: "Вывод", time: "19:45", amount: "97.41", currency: "TON", status: "success", date: "27 March" },
  { id: 2, type: "deposit", label: "Пополнение", time: "19:45", amount: "80.87", currency: "TON", status: "refund", date: "27 March" },
  { id: 3, type: "withdraw", label: "Вывод", time: "19:43", amount: "80.87", currency: "TON", status: "rejected", date: "27 March" },
  { id: 4, type: "deposit", label: "Пополнение", time: "19:26", amount: "1.4", currency: "TON", status: "refund", date: "27 March" },
  { id: 5, type: "deposit", label: "Пополнение", time: "19:26", amount: "20", currency: "TON", status: "success", date: "27 March" },
  { id: 6, type: "withdraw", label: "Вывод", time: "15:53", amount: "81.84", currency: "TON", status: "success", date: "27 March" },
  { id: 7, type: "deposit", label: "Пополнение", time: "15:00", amount: "93.26", currency: "$", status: "refund", date: "27 March" },
  { id: 8, type: "deposit", label: "Пополнение", time: "10:30", amount: "3.5", currency: "TON", status: "refund", date: "24 March" },
  { id: 9, type: "deposit", label: "Пополнение", time: "10:30", amount: "50.07", currency: "TON", status: "success", date: "24 March" },
  { id: 10, type: "deposit", label: "Пополнение", time: "04:31", amount: "69.17", currency: "TON", status: "success", date: "23 March" },
  { id: 11, type: "deposit", label: "Пополнение", time: "04:12", amount: "300.25", currency: "TON", status: "success", date: "23 March" },
  { id: 12, type: "deposit", label: "Пополнение", time: "00:36", amount: "7.21", currency: "TON", status: "refund", date: "23 March" },
  { id: 13, type: "deposit", label: "Пополнение", time: "00:36", amount: "103", currency: "TON", status: "success", date: "23 March" },
]

type TabType = "deposit" | "withdraw" | "history"

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("deposit")

  if (!isOpen) return null

  const tabs: { id: TabType; label: string }[] = [
    { id: "deposit", label: "Депозит" },
    { id: "withdraw", label: "Вывод" },
    { id: "history", label: "История" },
  ]

  const groupedTransactions = transactions.reduce((acc, tx) => {
    if (!acc[tx.date]) acc[tx.date] = []
    acc[tx.date].push(tx)
    return acc
  }, {} as Record<string, typeof transactions>)

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#0d0e1a] rounded-t-3xl max-h-[85vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-6 pb-4">
          <h2 className="text-[22px] font-bold text-white">Кошелек</h2>
          <button onClick={onClose} className="w-10 h-10 rounded-full border border-[#374151] flex items-center justify-center text-white/80 hover:text-white transition-colors">
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-5 mb-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 py-3 rounded-full text-sm font-medium transition-all",
                activeTab === tab.id
                  ? "bg-[#1f2937] text-white"
                  : "text-[#6b7280] hover:text-white/80"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 pb-10">
          {activeTab === "deposit" && <DepositContent />}
          {activeTab === "withdraw" && <WithdrawContent />}
          {activeTab === "history" && <HistoryContent groupedTransactions={groupedTransactions} />}
        </div>
      </div>
    </div>
  )
}

function DepositContent() {
  return (
    <div className="space-y-5">
      {/* Promo Banner */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tibbFfkx4z4Lws3tsGvxYYbiGIlDic.png"
          alt="До +7% на первое крипто-пополнение"
          width={400}
          height={100}
          className="w-full object-cover"
          unoptimized
        />
      </div>

      {/* Region selector */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#6b7280] text-[15px]">Регион оплаты</span>
          <div className="w-5 h-5 rounded-full bg-[#374151] flex items-center justify-center">
            <span className="text-[#6b7280] text-xs">?</span>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-[#1f2937] px-4 py-2.5 rounded-xl">
          <span className="text-base">🇺🇸</span>
          <span className="text-white text-[15px]">USD</span>
          <ChevronUp className="w-4 h-4 text-[#6b7280]" />
        </button>
      </div>

      {/* Crypto Section */}
      <div>
        <h3 className="text-white text-[17px] font-semibold mb-4">Криптовалюта</h3>
        <div className="grid grid-cols-2 gap-3">
          {cryptoOptionsDeposit.map((crypto) => (
            <button key={crypto.id} className="bg-[#1f2937] rounded-2xl p-4 flex flex-col relative overflow-hidden">
              <div className="flex flex-col items-start">
                <span className="text-white text-[15px] font-medium">{crypto.name}</span>
                {crypto.subname && <span className="text-[#6b7280] text-[13px]">{crypto.subname}</span>}
              </div>
              {crypto.bonus && (
                <div className="flex items-center gap-1 mt-2 bg-[#374151] rounded-lg px-2 py-1 w-fit">
                  <GiftBoxIcon />
                  <span className="text-white text-xs font-medium">{crypto.bonus}</span>
                </div>
              )}
              <div className="absolute right-2 bottom-2 w-16 h-16 opacity-90">
                <CryptoIcon type={crypto.id} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function WithdrawContent() {
  return (
    <div className="space-y-5">
      {/* Promo Banner */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tibbFfkx4z4Lws3tsGvxYYbiGIlDic.png"
          alt="До +7% на первое крипто-пополнение"
          width={400}
          height={100}
          className="w-full object-cover"
          unoptimized
        />
      </div>

      {/* Balance */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#6b7280] text-sm">Ваш баланс</p>
          <p className="text-white text-xl font-bold">0,00$</p>
        </div>
        <button className="flex items-center gap-2 bg-[#1f2937] px-4 py-2.5 rounded-xl">
          <span className="text-base">🇺🇸</span>
          <span className="text-white text-[15px]">USD</span>
          <ChevronUp className="w-4 h-4 text-[#6b7280]" />
        </button>
      </div>

      {/* Crypto Section */}
      <div>
        <h3 className="text-white text-[17px] font-semibold mb-4">Криптовалюта</h3>
        <div className="grid grid-cols-2 gap-3">
          {cryptoOptionsWithdraw.map((crypto) => (
            <button key={crypto.id} className="bg-[#1f2937] rounded-2xl p-4 flex flex-col relative overflow-hidden min-h-[100px]">
              <div className="flex flex-col items-start">
                <span className="text-white text-[15px] font-medium">{crypto.name}</span>
                {crypto.subname && <span className="text-[#6b7280] text-[13px]">{crypto.subname}</span>}
              </div>
              <div className="absolute right-2 bottom-2 w-16 h-16 opacity-90">
                <CryptoIcon type={crypto.id} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function HistoryContent({ groupedTransactions }: { groupedTransactions: Record<string, typeof transactions> }) {
  return (
    <div className="space-y-5">
      {/* Support Card */}
      <div className="bg-[#1f2937] rounded-2xl p-4 flex items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-semibold text-[15px]">Поддержка</span>
            <span className="bg-[#3b82f6] text-white text-[11px] px-2 py-0.5 rounded-full font-medium">24/7</span>
          </div>
          <p className="text-[#6b7280] text-[13px] leading-snug mb-3">
            Обратись к нам,<br/>если есть вопросы
          </p>
          <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2.5 rounded-xl text-sm font-medium w-full transition-colors">
            Обратиться в поддержку
          </button>
        </div>
        <div className="w-[72px] h-[72px] flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2WnR2w2wFXA1rxJlamwLMwXUxKH2UY.png"
            alt="Support Duck"
            width={72}
            height={72}
            className="w-full h-full object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Transactions */}
      {Object.entries(groupedTransactions).map(([date, txs]) => (
        <div key={date}>
          <h3 className="text-white font-bold text-[15px] mb-3">{date}</h3>
          <div className="space-y-0">
            {txs.map((tx) => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

interface TransactionItemProps {
  transaction: typeof transactions[0]
}

function TransactionItem({ transaction }: TransactionItemProps) {
  const statusColors = {
    success: "text-[#22c55e]",
    rejected: "text-[#ef4444]",
    refund: "text-[#6b7280]",
  }

  const statusLabels = {
    success: "Успешно",
    rejected: "Отклонено",
    refund: "Возврат",
  }

  return (
    <div className="flex items-center py-3">
      <div className="w-10 h-10 rounded-full bg-[#0d0e1a] border border-[#374151] flex items-center justify-center mr-3">
        {transaction.type === "deposit" ? (
          <Plus className="w-5 h-5 text-white" strokeWidth={1.5} />
        ) : (
          <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium text-[15px]">{transaction.label}</p>
        <p className="text-[#6b7280] text-[13px]">{transaction.time}</p>
      </div>
      <div className="text-right">
        <p className="text-white font-medium text-[15px]">
          {transaction.amount} {transaction.currency}
        </p>
        <p className={cn("text-[13px]", statusColors[transaction.status as keyof typeof statusColors])}>
          {statusLabels[transaction.status as keyof typeof statusLabels]}
        </p>
      </div>
    </div>
  )
}

function GiftBoxIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#f59e0b]">
      <path d="M3 4.5A1.5 1.5 0 014.5 3h7A1.5 1.5 0 0113 4.5V6H3V4.5zM3 7v5.5A1.5 1.5 0 004.5 14h7a1.5 1.5 0 001.5-1.5V7H3z" />
    </svg>
  )
}

function CryptoIcon({ type }: { type: string }) {
  // TON icon
  if (type === "ton") {
    return (
      <div className="w-full h-full rounded-full bg-[#0098ea] flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-10 h-10">
          <path d="M20 8L32 20L20 32L8 20L20 8Z" fill="white" />
        </svg>
      </div>
    )
  }
  
  // USDT Toncoin
  if (type === "usdt-ton") {
    return (
      <div className="relative w-full h-full">
        <div className="w-full h-full rounded-full bg-[#26a17b] flex items-center justify-center">
          <span className="text-white text-2xl font-bold">₮</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0098ea] border-2 border-[#1f2937] flex items-center justify-center">
          <svg viewBox="0 0 20 20" className="w-3 h-3">
            <path d="M10 4L16 10L10 16L4 10L10 4Z" fill="white" />
          </svg>
        </div>
      </div>
    )
  }
  
  // USDT TRC20
  if (type === "usdt-trc20") {
    return (
      <div className="relative w-full h-full">
        <div className="w-full h-full rounded-full bg-[#26a17b] flex items-center justify-center">
          <span className="text-white text-2xl font-bold">₮</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#eb0029] border-2 border-[#1f2937] flex items-center justify-center">
          <span className="text-white text-xs font-bold">T</span>
        </div>
      </div>
    )
  }
  
  // USDT BEP20
  if (type === "usdt-bep20") {
    return (
      <div className="relative w-full h-full">
        <div className="w-full h-full rounded-full bg-[#26a17b] flex items-center justify-center">
          <span className="text-white text-2xl font-bold">₮</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#f0b90b] border-2 border-[#1f2937] flex items-center justify-center">
          <span className="text-[#1e2026] text-xs font-bold">B</span>
        </div>
      </div>
    )
  }
  
  // TRX
  if (type === "trx") {
    return (
      <div className="w-full h-full rounded-full bg-[#eb0029] flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-10 h-10">
          <path d="M20 8L32 20L20 32L20 20L8 20L20 8Z" fill="white" />
        </svg>
      </div>
    )
  }
  
  // ETH
  if (type === "eth") {
    return (
      <div className="w-full h-full rounded-full bg-[#627eea] flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-8 h-8">
          <path d="M20 6L20 16L28 20L20 6Z" fill="white" fillOpacity="0.6" />
          <path d="M20 6L12 20L20 16L20 6Z" fill="white" />
          <path d="M20 26L20 34L28 22L20 26Z" fill="white" fillOpacity="0.6" />
          <path d="M20 34L20 26L12 22L20 34Z" fill="white" />
          <path d="M20 24L28 20L20 16L20 24Z" fill="white" fillOpacity="0.2" />
          <path d="M12 20L20 24L20 16L12 20Z" fill="white" fillOpacity="0.6" />
        </svg>
      </div>
    )
  }
  
  // USDT ERC20
  if (type === "usdt-erc20") {
    return (
      <div className="relative w-full h-full">
        <div className="w-full h-full rounded-full bg-[#26a17b] flex items-center justify-center">
          <span className="text-white text-2xl font-bold">₮</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#627eea] border-2 border-[#1f2937] flex items-center justify-center">
          <span className="text-white text-xs font-bold">E</span>
        </div>
      </div>
    )
  }
  
  return null
}
