"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  HelpCircle,
  MessageSquare,
  Shield,
  Users,
  Crown,
  Gamepad2,
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState, useMemo, useRef, useEffect } from "react"

const documentationData = [
  {
    id: "followers-delivery",
    title: "Xbox Followers Not Received - What to Do",
    content:
      "Complete troubleshooting guide for Xbox followers delivery issues, including common causes and step-by-step solutions.",
    category: "Xbox Services",
    url: "/docs/followers-not-received",
    keywords: [
      "followers",
      "delivery",
      "instant",
      "delay",
      "didnt receive",
      "not received",
      "missing",
      "xbox followers",
    ],
  },
  {
    id: "friend-requests-delivery",
    title: "Friend Requests Not Received - Help Guide",
    content: "Friend requests delivery troubleshooting for Xbox profiles with instant delivery information.",
    category: "Xbox Services",
    url: "/docs/friend-requests-not-received",
    keywords: ["friend requests", "delivery", "instant", "delay", "xbox", "friends", "not received"],
  },
  {
    id: "gamerscore-delivery",
    title: "Xbox Gamerscore Not Received - Troubleshooting Guide",
    content: "Instant gamerscore boost troubleshooting with profile refresh steps and verification methods.",
    category: "Xbox Services",
    url: "/docs/gamerscore-not-received",
    keywords: ["gamerscore", "boost", "instant", "xbox", "achievements", "score", "not received", "missing"],
  },
  {
    id: "gta-cash-delivery",
    title: "GTA 5 Cash Not Received - What to Do",
    content: "GTA 5 cash delivery issues, Rockstar server problems, and account verification troubleshooting.",
    category: "Game Currency",
    url: "/docs/gta-cash-not-received",
    keywords: ["gta 5", "gta", "cash", "money", "delivery", "delay", "rockstar", "didnt receive", "not received"],
  },
  {
    id: "forza-credits-delivery",
    title: "Forza 5 Credits Delivery",
    content:
      "Forza Horizon 5 credits are delivered instantly to your game account. Any delays up to 24 hours are typically due to Xbox Live server maintenance or game update processes.",
    category: "Game Currency",
    keywords: ["forza", "forza 5", "credits", "delivery", "xbox", "horizon", "didnt receive"],
  },
  {
    id: "rare-gamertags-delivery",
    title: "Rare Gamertag Email Not Received",
    content: "Troubleshooting rare gamertag account delivery via email, including spam folder checks.",
    category: "Premium Services",
    url: "/docs/rare-gamertags-email",
    keywords: [
      "rare gamertags",
      "account",
      "email",
      "delivery",
      "premium",
      "didnt receive",
      "spam folder",
      "not received",
    ],
  },
  {
    id: "discord-bots-access",
    title: "Discord Bot Access Issues",
    content: "Discord bot access troubleshooting for LFG Spammer, Follower Manager, and Message Spammer bots.",
    category: "Discord Bots",
    url: "/docs/discord-bot-access",
    keywords: [
      "discord",
      "bots",
      "access",
      "slash commands",
      "mobile",
      "pc",
      "lfg",
      "follower manager",
      "message spammer",
      "not working",
    ],
  },
  {
    id: "follower-manager-limits",
    title: "Follower Manager Daily Limits",
    content:
      "The Follower Manager bot can send 5,000 followers to any Xbox gamertag on weekdays and 10,000 followers on weekends. There are no usage limits during your subscription period.",
    category: "Discord Bots",
    keywords: ["follower manager", "limits", "daily", "weekdays", "weekends", "5k", "10k", "unlimited"],
  },
  {
    id: "payment-methods",
    title: "Accepted Payment Methods",
    content:
      "We accept Credit/Debit Cards, Cash App, and other payment methods through our secure Stripe integration. All payments are processed securely with industry-standard encryption.",
    category: "Payment",
    keywords: ["payment", "credit card", "cash app", "stripe", "secure", "methods"],
  },
  {
    id: "refund-policy",
    title: "Refund Policy & Satisfaction Guarantee",
    content: "Complete refund policy with 7-day satisfaction guarantee and service-specific refund information.",
    category: "Support",
    url: "/docs/refund-policy",
    keywords: ["refund", "money back", "guarantee", "satisfaction", "support", "not satisfied", "policy"],
  },
  {
    id: "service-safety",
    title: "Service Safety & Security",
    content:
      "All our services use legitimate methods and comply with platform terms of service. We have served over 15,000+ customers safely without any account issues or bans.",
    category: "Safety",
    keywords: ["safe", "security", "legitimate", "ban", "account safety", "terms of service", "customers"],
  },
  {
    id: "account-requirements",
    title: "Account Requirements",
    content:
      "For Xbox services, ensure your profile is public and your gamertag is correct. For game currency services, make sure you provide the correct platform (Xbox/PlayStation) and gamertag.",
    category: "Requirements",
    keywords: ["account", "requirements", "public profile", "gamertag", "platform", "xbox", "playstation"],
  },
  {
    id: "payment-failed",
    title: "Payment Failed or Declined - Solutions",
    content: "Payment processing issues, bank declines, and alternative payment method solutions.",
    category: "Payment",
    url: "/docs/payment-failed",
    keywords: ["payment", "failed", "declined", "credit card", "cash app", "stripe", "bank", "error"],
  },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeCategory, setActiveCategory] = useState("Articles")
  const searchInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredDocs = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    return documentationData
      .filter(
        (doc) =>
          doc.title.toLowerCase().includes(query) ||
          doc.content.toLowerCase().includes(query) ||
          doc.keywords.some((keyword) => keyword.toLowerCase().includes(query)),
      )
      .slice(0, 8)
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !searchInputRef.current?.contains(event.target as Node)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    setShowDropdown(value.trim().length > 0)
  }

  const closeDropdown = () => {
    setShowDropdown(false)
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text-animated text-glow">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about X6AA services, from getting started to troubleshooting.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  placeholder="Search documentation..."
                  className="pl-12 pr-4 py-4 text-lg glass-effect border-glow rounded-full"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                />
                {searchQuery && (
                  <button
                    onClick={closeDropdown}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                )}
              </div>

              {showDropdown && filteredDocs.length > 0 && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-primary/20 rounded-2xl shadow-2xl z-50 max-h-[500px] overflow-hidden"
                >
                  <div className="flex items-center justify-between p-4 border-b border-primary/10">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-muted-foreground mr-3">Search in</span>
                      <button
                        onClick={() => setActiveCategory("Articles")}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                          activeCategory === "Articles"
                            ? "bg-primary text-white"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Articles
                      </button>
                      <button
                        onClick={() => setActiveCategory("Discussions")}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                          activeCategory === "Discussions"
                            ? "bg-primary text-white"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Discussions
                      </button>
                      <button
                        onClick={() => setActiveCategory("Videos")}
                        className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                          activeCategory === "Videos"
                            ? "bg-primary text-white"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Videos
                      </button>
                    </div>
                    <button
                      onClick={closeDropdown}
                      className="h-6 w-6 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>

                  <div className="max-h-80 overflow-y-auto">
                    {filteredDocs.map((doc, index) => (
                      <Link
                        key={doc.id}
                        href={doc.url}
                        className="block p-4 border-b border-primary/5 last:border-b-0 hover:bg-primary/5 cursor-pointer transition-colors"
                        onClick={closeDropdown}
                      >
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground hover:text-primary transition-colors underline">
                            {doc.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Articles &gt; Help and FAQs &gt; {doc.category} &gt; {doc.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="p-4 border-t border-primary/10">
                    <button
                      onClick={closeDropdown}
                      className="text-sm text-primary hover:text-primary/80 font-medium transition-colors underline"
                    >
                      View all results
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Quick Start Guide</h2>
            <p className="text-muted-foreground">Get up and running with X6AA in minutes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="text-center space-y-4">
                <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto pulse-glow">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold gradient-text">Choose Service</h3>
                <p className="text-sm text-muted-foreground">
                  Browse our Xbox enhancement services and select what you need
                </p>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="text-center space-y-4">
                <div
                  className="h-12 w-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto pulse-glow"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold gradient-text">Select Amount</h3>
                <p className="text-sm text-muted-foreground">Choose from preset packages or enter custom amounts</p>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="text-center space-y-4">
                <div
                  className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto pulse-glow"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold gradient-text">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">Complete checkout with our secure Stripe integration</p>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="text-center space-y-4">
                <div
                  className="h-12 w-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto pulse-glow"
                  style={{ animationDelay: "1.5s" }}
                >
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold gradient-text">Instant Results</h3>
                <p className="text-sm text-muted-foreground">Watch your Xbox profile enhance within minutes</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Service Delivery & Troubleshooting</h2>
            <p className="text-muted-foreground">Detailed information about delivery times and common issues</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Xbox Profile Services */}
            <Card className="p-8 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Xbox Profile Services</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold text-primary">Xbox Followers & Friend Requests</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Normal Delivery:</strong> Instantly added after payment confirmation
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Possible Delays:</strong> Up to 24 hours if under review by bank or payment processor
                    </p>
                    <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium text-amber-600">Didn't receive your followers?</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Check if your Xbox profile is public and wait up to 24 hours. Contact support if still missing.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <h4 className="font-semibold text-accent">Xbox Gamerscore</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Delivery:</strong> Added instantly with no expected delays
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Verification:</strong> Check your Xbox dashboard or profile to see the boost
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Game Currency Services */}
            <Card className="p-8 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Game Currency</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold text-primary">GTA 5 Cash & Forza 5 Credits</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Normal Delivery:</strong> Usually added instantly to your game account
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Possible Delays:</strong> Up to 24 hours due to:
                    </p>
                    <ul className="text-xs text-muted-foreground ml-4 space-y-1">
                      <li>• Game server maintenance periods</li>
                      <li>• Account verification processes</li>
                      <li>• High demand periods</li>
                      <li>• Platform-specific server issues</li>
                    </ul>
                    <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-medium text-amber-600">Currency not received?</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Restart your game and check your in-game wallet. Contact support with your order details if
                        still missing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Rare Gamertags */}
            <Card className="p-8 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Rare Gamertags</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-accent" />
                      <h4 className="font-semibold text-accent">Account Delivery via Email</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Delivery Method:</strong> Complete Xbox account details sent to your email
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Timeframe:</strong> Within 1-24 hours after payment confirmation
                    </p>
                    <div className="mt-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-blue-600">Email not received?</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Check your spam/junk folder. Add our email to your contacts to ensure delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Discord Bots */}
            <Card className="p-8 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                    <Gamepad2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Discord Bots</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold text-primary">LFG Spammer, Follower Manager, Message Spammer</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Platform Compatibility:</strong> Works on both mobile and PC Discord apps
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Usage:</strong> Simple slash commands (/) for all bot functions
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Access:</strong> Granted immediately after payment confirmation
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">Follower Manager Daily Limits</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        • <strong>Weekdays:</strong> Send up to 5,000 followers per day
                      </p>
                      <p>
                        • <strong>Weekends:</strong> Send up to 10,000 followers per day
                      </p>
                      <p>
                        • <strong>Usage:</strong> Unlimited commands during subscription
                      </p>
                      <p>
                        • <strong>Target:</strong> Any Xbox gamertag
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Xbox Services */}
            <Card className="p-8 gradient-bg-intense glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Xbox Services</h3>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/docs/xbox-followers"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:text-primary transition-colors">Xbox Followers Guide</span>
                      <Badge variant="secondary" className="text-xs">
                        Popular
                      </Badge>
                    </div>
                  </Link>
                  <Link
                    href="/docs/friend-requests"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <span className="group-hover:text-primary transition-colors">Friend Requests Setup</span>
                  </Link>
                  <Link
                    href="/docs/gamerscore"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <span className="group-hover:text-primary transition-colors">Gamerscore Boosting</span>
                  </Link>
                  <Link
                    href="/docs/profile-pictures"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <span className="group-hover:text-primary transition-colors">Classic Profile Pictures</span>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Gamertags & Premium */}
            <Card className="p-8 gradient-bg-intense glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Premium Services</h3>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/docs/rare-gamertags"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:text-primary transition-colors">Rare Gamertags Guide</span>
                      <Badge variant="secondary" className="text-xs">
                        Premium
                      </Badge>
                    </div>
                  </Link>
                  <Link
                    href="/docs/gamertag-autoclaimer"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <span className="group-hover:text-primary transition-colors">Gamertag Autoclaimer</span>
                  </Link>
                  <Link
                    href="/docs/game-currency"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <span className="group-hover:text-primary transition-colors">Game Currency (GTA/Forza)</span>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Discord Bots */}
            <Card className="p-8 gradient-bg-intense glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 bg-gradient-to-br from-primary via-accent to-primary rounded-lg flex items-center justify-center pulse-glow"
                    style={{ animationDelay: "1s" }}
                  >
                    <Gamepad2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Discord Bots</h3>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/docs/lfg-spammer"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:text-primary transition-colors">LFG Post Spammer</span>
                      <Badge variant="secondary" className="text-xs">
                        Bot
                      </Badge>
                    </div>
                  </Link>
                  <Link
                    href="/docs/follower-boost-manager"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <span className="group-hover:text-primary transition-colors">Follower Boost Manager</span>
                  </Link>
                  <Link
                    href="/docs/message-spammer"
                    className="block p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <span className="group-hover:text-primary transition-colors">Message Spammer</span>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Comprehensive answers to common questions and issues</p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 gradient-bg glass-effect border-glow hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">I didn't receive my followers/service - what should I do?</h3>
                  <p className="text-muted-foreground mb-2">
                    Most services are delivered instantly, but can take up to 24 hours due to payment verification or
                    server maintenance.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>Steps to take:</strong> 1) Wait 24 hours, 2) Check your profile is public, 3) Refresh your page, 4) Contact support with your order details.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Are your services safe for my Xbox account?</h3>
                  <p className="text-muted-foreground mb-2">
                    Our tools are designed to enhance your Xbox profile securely and in alignment with platform guidelines. We prioritize user safety and employ advanced techniques to ensure a seamless experience. Users are responsible for adhering to Xbox’s Community Standards.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    For most services, we only require your gamertag. Certain services, like gamertag reservations, may require additional information, but we never store sensitive data and use secure processes to protect your account.rtag reservations, may require additional information, but we never store sensitive data and use secure processes to protect your account.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <DollarSign className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground mb-2">
                    We accept Credit/Debit Cards, Cash App, and other payment methods through our secure Stripe
                    integration.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    All payments are encrypted and processed securely. We never store your payment information.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Gamepad2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">How do Discord bots work?</h3>
                  <p className="text-muted-foreground mb-2">
                    Our Discord bots work with simple slash commands (/) and are compatible with both mobile and PC
                    Discord apps.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    After purchase, you'll receive bot access instantly. Type "/" in Discord to see available commands.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Do you offer refunds if I'm not satisfied?</h3>
                  <p className="text-muted-foreground mb-2">
                    We offer a satisfaction guarantee on all services. Contact our support team within 7 days if you're
                    not satisfied.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Our support team will work with you to resolve any issues or process a refund if necessary.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Crown className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">I didn't receive my rare gamertag account details</h3>
                  <p className="text-muted-foreground mb-2">
                    Rare gamertag account details are sent via email within 1-24 hours. Check your spam/junk folder
                    first.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Add our email to your contacts to ensure future deliveries reach your inbox.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12 gradient-bg-intense glass-effect border-glow">
            <div className="space-y-6">
              <div className="h-16 w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto pulse-glow">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold gradient-text">Still Need Help?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is available 24/7 to help you with any questions,
                issues, or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="pulse-glow neon-glow">
                    Contact Support
                    <MessageSquare className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="glass-effect border-glow bg-transparent">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
