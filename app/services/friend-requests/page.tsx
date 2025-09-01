"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Zap, Star, UserPlus } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FriendRequestsPage() {
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState<string | number>(1000)
  const [isCustom, setIsCustom] = useState(false)
  const router = useRouter()

  const packages = [
    { amount: 1000, originalPrice: 3.99, price: 2.99, popular: false, discount: 25 },
    { amount: 2500, originalPrice: 9.99, price: 6.99, popular: true, discount: 30 },
    { amount: 5000, originalPrice: 17.99, price: 12.99, popular: false, discount: 28 },
    { amount: 10000, originalPrice: 34.99, price: 24.99, popular: false, discount: 29 },
  ]

  const currentAmount = isCustom
    ? typeof customAmount === "string"
      ? customAmount === ""
        ? 0
        : Number(customAmount)
      : customAmount
    : selectedAmount
  const originalPricePerK = 3.99
  const discountedPricePerK = 2.99
  const customDiscount = 25
  const totalPrice = isCustom
    ? (currentAmount / 1000) * discountedPricePerK
    : packages.find((p) => p.amount === selectedAmount)?.price || 0

  const isAmountValid = currentAmount >= 1000

  const handleContinue = () => {
    if (isAmountValid) {
      const params = new URLSearchParams({
        service: "friend-requests",
        amount: currentAmount.toString(),
        price: totalPrice.toFixed(2),
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
                <img src="/friend-requests-gaming-icon.png" alt="Friend Requests" className="w-20 h-20 rounded-xl" />
              </div>
              <h1 className="text-3xl font-bold">
                <span className="gradient-text">Xbox Friend Requests</span>
              </h1>
              <p className="text-base text-white/80 max-w-2xl mx-auto">
                Expand your Xbox gaming network with authentic friend requests from real players.
              </p>

              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-white">100% Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-white">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-white">Real Gamers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-center mb-6 text-white">Choose Your Package</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {packages.map((pkg) => (
                  <Card
                    key={pkg.amount}
                    className={`p-4 cursor-pointer transition-all duration-200 relative ${
                      selectedAmount === pkg.amount && !isCustom
                        ? "border-primary bg-primary/10 scale-105"
                        : "border-primary/20 bg-card/30 hover:border-primary/40"
                    }`}
                    onClick={() => {
                      setSelectedAmount(pkg.amount)
                      setIsCustom(false)
                    }}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <UserPlus className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <p className="font-bold text-white">{pkg.amount.toLocaleString()}</p>
                      <p className="text-xs text-white/60 mb-2">Friend Requests</p>
                      <div className="space-y-1">
                        <p className="text-sm text-white/60 line-through">${pkg.originalPrice}</p>
                        <p className="text-lg font-bold text-primary">${pkg.price}</p>
                        <p className="text-xs text-green-400">
                          Save ${(pkg.originalPrice - pkg.price).toFixed(2)} ({pkg.discount}% OFF)
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Card
                className={`p-4 cursor-pointer transition-all duration-200 ${
                  isCustom ? "border-primary bg-primary/10" : "border-primary/20 bg-card/30 hover:border-primary/40"
                }`}
                onClick={() => setIsCustom(true)}
              >
                <div className="text-center">
                  <h3 className="font-bold text-white mb-2">Custom Amount</h3>
                  <div className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full mb-2">
                    {customDiscount}% OFF Custom Orders
                  </div>
                  <p className="text-sm text-white/60 mb-3">Choose your own amount (minimum 1,000)</p>
                  {isCustom && (
                    <div className="max-w-xs mx-auto">
                      <Input
                        type="number"
                        step="100"
                        value={customAmount}
                        onChange={(e) => {
                          const value = e.target.value
                          setCustomAmount(value === "" ? "" : Number(value))
                        }}
                        className="text-center"
                        placeholder="Enter amount"
                      />
                      {(customAmount === "" || currentAmount < 1000) && (
                        <p className="text-red-400 text-sm mt-1">Minimum amount is 1,000 friend requests</p>
                      )}
                      {currentAmount >= 1000 && (
                        <div className="mt-2 space-y-1">
                          <p className="text-sm text-white/60 line-through">
                            ${((currentAmount / 1000) * originalPricePerK).toFixed(2)}
                          </p>
                          <p className="text-lg font-bold text-primary">
                            ${((currentAmount / 1000) * discountedPricePerK).toFixed(2)}
                          </p>
                          <p className="text-xs text-green-400">
                            Save $
                            {(
                              (currentAmount / 1000) * originalPricePerK -
                              (currentAmount / 1000) * discountedPricePerK
                            ).toFixed(2)}{" "}
                            ({customDiscount}% OFF)
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {!isCustom && (
                    <div className="space-y-1">
                      <p className="text-sm text-white/60 line-through">${originalPricePerK} per 1K</p>
                      <p className="text-primary font-bold">${discountedPricePerK} per 1K</p>
                      <p className="text-xs text-green-400">{customDiscount}% OFF</p>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="space-y-6">
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <p className="text-sm text-white/60">Selected: {currentAmount.toLocaleString()} friend requests</p>
                  <p className="text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</p>
                </div>

                {!isAmountValid && (
                  <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg text-center">
                    <p className="text-red-400 text-sm">Minimum amount is 1,000 friend requests</p>
                  </div>
                )}

                <Button className="w-full glow-effect" size="lg" disabled={!isAmountValid} onClick={handleContinue}>
                  Continue
                </Button>

                <div className="text-center text-sm text-white/60">
                  <p>✓ Secure checkout ✓ Instant delivery ✓ 24/7 support</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
