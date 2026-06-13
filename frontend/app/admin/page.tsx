/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { toast } from "sonner"
import { motion, AnimatePresence } from "motion/react"
import { Users, ShoppingBag, Search, ShieldCheck, CheckCircle2, AlertCircle, RefreshCw, KeyRound, Wrench, LogOut } from "lucide-react"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { DashedH } from "@/components/landing/dashed-h"
import { RAIL_V_STYLE } from "@/components/landing/rail-styles"

const CONTENT_WIDTH =
  "mx-auto max-w-[76rem] w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] xl:w-full"

export default function AdminPage() {
  const [secret, setSecret] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const [activeTab, setActiveTab] = useState<"users" | "purchases" | "fix">("purchases")
  const [users, setUsers] = useState<any[]>([])
  const [purchases, setPurchases] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Fix Purchase Form State
  const [fixEmail, setFixEmail] = useState("")
  const [fixComponentId, setFixComponentId] = useState("")
  const [fixOrderId, setFixOrderId] = useState("")
  const [fixPaymentId, setFixPaymentId] = useState("")

  useEffect(() => {
    const savedSecret = localStorage.getItem("adminSecret")
    if (savedSecret) {
      setSecret(savedSecret)
      setIsAuthenticated(true)
      fetchData(savedSecret)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("adminSecret", secret)
    setIsAuthenticated(true)
    fetchData(secret)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminSecret")
    setSecret("")
    setIsAuthenticated(false)
    setUsers([])
    setPurchases([])
  }

  const fetchData = async (currentSecret: string) => {
    setIsLoading(true)
    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
    
    try {
      const usersRes = await fetch(`${API_URL}/api/admin/users`, {
        headers: { "x-admin-secret": currentSecret }
      })
      
      const contentType = usersRes.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned non-JSON response. Check your BACKEND_URL.")
      }

      const usersData: any = await usersRes.json()
      
      if (!usersRes.ok) {
        if (usersRes.status === 401) {
          handleLogout()
          toast.error("Invalid admin secret")
        }
        return
      }
      setUsers(usersData.data || [])

      const purchRes = await fetch(`${API_URL}/api/admin/all-purchases`, {
        headers: { "x-admin-secret": currentSecret }
      })
      const purchData: any = await purchRes.json()
      setPurchases(purchData.data || [])
      
    } catch (err) {
      console.error(err)
      toast.error("Failed to fetch admin data")
    } finally {
      setIsLoading(false)
    }
  }

  const handleFixPurchase = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fixEmail || !fixComponentId) {
      toast.error("Email and Component ID are required")
      return
    }

    const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
    const promise = fetch(`${API_URL}/api/admin/fix-purchase`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "x-admin-secret": secret
      },
      body: JSON.stringify({
        email: fixEmail,
        componentId: fixComponentId,
        razorpayOrderId: fixOrderId || undefined,
        razorpayPaymentId: fixPaymentId || undefined
      })
    }).then(async (res) => {
      const data: any = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to fix purchase")
      return data
    })

    toast.promise(promise, {
      loading: 'Granting access...',
      success: (data) => {
        setFixEmail("")
        setFixComponentId("")
        setFixOrderId("")
        setFixPaymentId("")
        fetchData(secret)
        return data.message || "Purchase fixed successfully!"
      },
      error: (err) => err.message
    })
  }

  const filteredPurchases = purchases.filter(p => 
    p.userId?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.componentId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.razorpayOrderId?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredUsers = users.filter(u =>
    u.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (!isAuthenticated) {
    return (
      <main
        className="dark relative isolate flex min-h-svh flex-col items-center justify-center bg-background text-foreground"
        style={
          {
            "--rail": "color-mix(in oklch, var(--foreground) 20%, transparent)",
          } as React.CSSProperties
        }
      >
        <div 
          className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-screen" 
          style={{ backgroundImage: "url('/image.png')" }} 
        />
        <div className="pointer-events-none fixed inset-0 z-0">
          <FlickeringGrid
            color="rgb(255,255,255)"
            maxOpacity={0.035}
            flickerChance={0.08}
            squareSize={3}
            gridGap={8}
            className="h-full w-full"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-md p-6"
        >
          <div className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--rail)] bg-background/50 shadow-sm backdrop-blur-md">
              <ShieldCheck className="h-8 w-8 text-foreground" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">Admin Portal</h1>
            <p className="mt-3 text-sm text-muted-foreground">Authorized personnel only.</p>
          </div>

          <div className="rounded-3xl border border-[var(--rail)] bg-background/50 p-8 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <KeyRound className="h-3.5 w-3.5" />
                  Master Secret
                </label>
                <input
                  type="password"
                  value={secret}
                  onChange={(e) => setSecret(e.target.value)}
                  className="w-full rounded-xl border border-[var(--rail)] bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-foreground focus:ring-1 focus:ring-foreground"
                  placeholder="••••••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                Authenticate
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    )
  }

  return (
    <main
      className="dark relative isolate min-h-svh bg-background text-foreground pb-20"
      style={
        {
          "--rail": "color-mix(in oklch, var(--foreground) 20%, transparent)",
        } as React.CSSProperties
      }
    >
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-screen" 
        style={{ backgroundImage: "url('/image.png')" }} 
      />
      <div className="pointer-events-none fixed inset-0 z-0">
        <FlickeringGrid
          color="rgb(255,255,255)"
          maxOpacity={0.035}
          flickerChance={0.08}
          squareSize={3}
          gridGap={8}
          className="h-full w-full"
        />
      </div>

      <div className={`sticky top-0 z-50 ${CONTENT_WIDTH}`}>
        <div className="flex h-16 items-center justify-between border-b border-[var(--rail)] bg-background/80 backdrop-blur-xl px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5" />
            <h1 className="text-sm font-medium tracking-wide">Admin Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => fetchData(secret)} 
              disabled={isLoading}
              className="flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh Data</span>
            </button>
            <div className="h-4 w-px bg-[var(--rail)]" />
            <button 
              onClick={handleLogout} 
              className="flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-12">
        <DashedH />
        <div className={`relative ${CONTENT_WIDTH}`} style={RAIL_V_STYLE}>
          <div className="px-4 py-12 sm:px-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--rail)] bg-background/40 p-6 backdrop-blur-sm transition-colors hover:bg-background/60">
                <div className="flex items-center gap-3 text-muted-foreground mb-4">
                  <Users className="h-4 w-4" />
                  <p className="text-xs font-medium uppercase tracking-wider">Total Users</p>
                </div>
                <h2 className="text-4xl font-semibold tracking-tight">{users.length}</h2>
              </div>
              <div className="rounded-2xl border border-[var(--rail)] bg-background/40 p-6 backdrop-blur-sm transition-colors hover:bg-background/60">
                <div className="flex items-center gap-3 text-muted-foreground mb-4">
                  <ShoppingBag className="h-4 w-4" />
                  <p className="text-xs font-medium uppercase tracking-wider">Total Purchases</p>
                </div>
                <h2 className="text-4xl font-semibold tracking-tight">{purchases.length}</h2>
              </div>
              <div className="rounded-2xl border border-[var(--rail)] bg-background/40 p-6 backdrop-blur-sm transition-colors hover:bg-background/60">
                <div className="flex items-center gap-3 text-muted-foreground mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <p className="text-xs font-medium uppercase tracking-wider">Pending Access</p>
                </div>
                <h2 className="text-4xl font-semibold tracking-tight text-yellow-500">
                  {purchases.filter(p => p.status === "PENDING").length}
                </h2>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="mt-12 rounded-3xl border border-[var(--rail)] bg-background/50 backdrop-blur-xl overflow-hidden">
              {/* Tabs */}
              <div className="flex flex-wrap items-center gap-2 border-b border-[var(--rail)] p-4 sm:px-6">
                {[
                  { id: "purchases", label: "Purchases", icon: ShoppingBag },
                  { id: "users", label: "Users", icon: Users },
                  { id: "fix", label: "Fix Purchase", icon: Wrench },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                      activeTab === tab.id 
                        ? "text-foreground bg-foreground/5" 
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6 min-h-[500px]">
                <AnimatePresence mode="wait">
                  {/* USERS TAB */}
                  {activeTab === "users" && (
                    <motion.div
                      key="users"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-6 flex items-center gap-4">
                        <div className="relative w-full max-w-sm">
                          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Search users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-xl border border-[var(--rail)] bg-background/50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-foreground"
                          />
                        </div>
                      </div>
                      
                      <div className="overflow-x-auto rounded-xl border border-[var(--rail)] bg-background/20">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                          <thead className="border-b border-[var(--rail)] bg-background/40">
                            <tr>
                              <th className="px-6 py-4 font-medium text-muted-foreground">User</th>
                              <th className="px-6 py-4 font-medium text-muted-foreground">Email</th>
                              <th className="px-6 py-4 font-medium text-muted-foreground">Joined</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--rail)]">
                            {filteredUsers.map((u) => (
                              <tr key={u._id} className="transition-colors hover:bg-foreground/5">
                                <td className="px-6 py-4 font-medium">{u.name}</td>
                                <td className="px-6 py-4 text-muted-foreground">{u.email}</td>
                                <td className="px-6 py-4 text-muted-foreground">
                                  {new Date(u.createdAt).toLocaleDateString()}
                                </td>
                              </tr>
                            ))}
                            {filteredUsers.length === 0 && (
                              <tr>
                                <td colSpan={3} className="py-12 text-center text-muted-foreground">
                                  No users found.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {/* PURCHASES TAB */}
                  {activeTab === "purchases" && (
                    <motion.div
                      key="purchases"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-6 flex items-center gap-4">
                        <div className="relative w-full max-w-sm">
                          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Search purchases..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-xl border border-[var(--rail)] bg-background/50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-foreground"
                          />
                        </div>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-[var(--rail)] bg-background/20">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                          <thead className="border-b border-[var(--rail)] bg-background/40">
                            <tr>
                              <th className="px-6 py-4 font-medium text-muted-foreground">Customer</th>
                              <th className="px-6 py-4 font-medium text-muted-foreground">Type</th>
                              <th className="px-6 py-4 font-medium text-muted-foreground">Item</th>
                              <th className="px-6 py-4 font-medium text-muted-foreground">Order ID</th>
                              <th className="px-6 py-4 font-medium text-muted-foreground">Status</th>
                              <th className="px-6 py-4 font-medium text-muted-foreground">Date</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[var(--rail)]">
                            {filteredPurchases.map((p) => (
                              <tr key={p._id} className="transition-colors hover:bg-foreground/5">
                                <td className="px-6 py-4">
                                  <div className="font-medium">{p.userId?.name || "Unknown"}</div>
                                  <div className="text-xs text-muted-foreground mt-0.5">{p.userId?.email || "No email"}</div>
                                </td>
                                <td className="px-6 py-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">{p.type}</td>
                                <td className="px-6 py-4 font-mono text-sm">{p.componentId || "-"}</td>
                                <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{p.razorpayOrderId}</td>
                                <td className="px-6 py-4">
                                  {p.status === "COMPLETED" ? (
                                    <div className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-500">
                                      <CheckCircle2 className="h-3.5 w-3.5" />
                                      Completed
                                    </div>
                                  ) : (
                                    <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-500">
                                      <AlertCircle className="h-3.5 w-3.5" />
                                      Pending
                                    </div>
                                  )}
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">
                                  {new Date(p.createdAt).toLocaleString(undefined, {
                                    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                  })}
                                </td>
                              </tr>
                            ))}
                            {filteredPurchases.length === 0 && (
                              <tr>
                                <td colSpan={6} className="py-12 text-center text-muted-foreground">
                                  No purchases found.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {/* FIX PURCHASE TAB */}
                  {activeTab === "fix" && (
                    <motion.div
                      key="fix"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mx-auto max-w-xl py-6"
                    >
                      <div className="mb-8">
                        <h2 className="text-2xl font-semibold tracking-tight">Manual Override</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Force-grant access to a component for any user.
                        </p>
                      </div>

                      <form onSubmit={handleFixPurchase} className="space-y-6">
                        <div className="space-y-3">
                          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            User Email <span className="text-foreground">*</span>
                          </label>
                          <input
                            type="email"
                            value={fixEmail}
                            onChange={(e) => setFixEmail(e.target.value)}
                            className="w-full rounded-xl border border-[var(--rail)] bg-background/50 px-4 py-3.5 text-sm outline-none transition-all focus:border-foreground"
                            placeholder="customer@example.com"
                            required
                          />
                        </div>

                        <div className="space-y-3">
                          <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                            Component ID <span className="text-foreground">*</span>
                          </label>
                          <input
                            type="text"
                            value={fixComponentId}
                            onChange={(e) => setFixComponentId(e.target.value)}
                            className="w-full rounded-xl border border-[var(--rail)] bg-background/50 px-4 py-3.5 font-mono text-sm outline-none transition-all focus:border-foreground"
                            placeholder="btn-8"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div className="space-y-3">
                            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Order ID (Optional)</label>
                            <input
                              type="text"
                              value={fixOrderId}
                              onChange={(e) => setFixOrderId(e.target.value)}
                              className="w-full rounded-xl border border-[var(--rail)] bg-background/20 px-4 py-3 font-mono text-sm outline-none transition-all focus:border-foreground"
                              placeholder="order_xxx"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Payment ID (Optional)</label>
                            <input
                              type="text"
                              value={fixPaymentId}
                              onChange={(e) => setFixPaymentId(e.target.value)}
                              className="w-full rounded-xl border border-[var(--rail)] bg-background/20 px-4 py-3 font-mono text-sm outline-none transition-all focus:border-foreground"
                              placeholder="pay_xxx"
                            />
                          </div>
                        </div>

                        <div className="pt-4">
                          <button
                            type="submit"
                            className="w-full rounded-xl bg-foreground px-4 py-4 font-semibold text-background transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
                          >
                            Grant Access
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <DashedH />
      </div>
    </main>
  )
}
