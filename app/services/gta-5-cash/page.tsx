"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Zap, CheckCircle, DollarSign } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function GTA5CashPage() {
  const [platform, setPlatform] = useState("")
  const router = useRouter()

  const packages = [
    { amount: 100000000, price: 24.99, originalPrice: 32.99, label: "100M Cash", popular: false, discount: 24 },
    { amount: 200000000, price: 29.99, originalPrice: 39.99, label: "200M Cash", popular: true, discount: 25 },
    { amount: 300000000, price: 35.99, originalPrice: 47.99, label: "300M Cash", popular: false, discount: 25 },
    { amount: 500000000, price: 53.99, originalPrice: 71.99, label: "500M Cash", popular: false, discount: 25 },
  ]

  const handleOrderNow = (packageAmount: number, packagePrice: number) => {
    if (platform) {
      const params = new URLSearchParams({
        service: "gta-5-cash",
        amount: packageAmount.toString(),
        price: packagePrice.toFixed(2),
        platform: platform,
      })
      router.push(`/order-summary?${params.toString()}`)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-12 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <img src="/gta-5-money-cash.png" alt="GTA 5 Cash" className="w-20 h-20 rounded-xl" />
              </div>
              <h1 className="text-3xl font-bold">
                <span className="gradient-text">GTA 5 Cash</span>
              </h1>
              <p className="text-base text-white/80 max-w-2xl mx-auto">
                Get unlimited GTA 5 money for Xbox and PlayStation. Buy everything you want in Los Santos.
              </p>

              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-white">Safe Transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-white">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-white">All Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center mb-6 text-white">Select Platform</h2>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <Card
                  className={`p-4 cursor-pointer transition-all duration-200 ${
                    platform === "xbox"
                      ? "border-primary bg-primary/10 scale-105"
                      : "border-primary/20 bg-card/30 hover:border-primary/40"
                  }`}
                  onClick={() => setPlatform("xbox")}
                >
                  <div className="text-center">
                    <p className="font-bold text-white">Xbox</p>
                  </div>
                </Card>
                <Card
                  className={`p-4 cursor-pointer transition-all duration-200 ${
                    platform === "playstation"
                      ? "border-primary bg-primary/10 scale-105"
                      : "border-primary/20 bg-card/30 hover:border-primary/40"
                  }`}
                  onClick={() => setPlatform("playstation")}
                >
                  <div className="text-center">
                    <p className="font-bold text-white">PlayStation</p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-center mb-6 text-white">Choose Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {packages.map((pkg, index) => (
                  <Card
                    key={index}
                    className="relative p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-200"
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <DollarSign className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{pkg.label}</h3>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-sm text-white/50 line-through">${pkg.originalPrice}</span>
                          <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                        </div>
                        <p className="text-xs text-green-400">
                          Save ${(pkg.originalPrice - pkg.price).toFixed(2)} ({pkg.discount}% OFF)
                        </p>
                      </div>
                      <Button
                        className="w-full"
                        variant={pkg.popular ? "default" : "outline"}
                        disabled={!platform}
                        onClick={() => handleOrderNow(pkg.amount, pkg.price)}
                      >
                        {!platform ? "Select Platform First" : "Order Now"}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center text-sm text-white/60">
              <p>✓ Secure checkout ✓ Safe delivery ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
