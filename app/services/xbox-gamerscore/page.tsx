"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, CheckCircle, Star, Trophy, Percent } from "lucide-react"

export default function XboxGamerscorePage() {
  const packages = [
    { amount: 50000, originalPrice: 13.99, price: 9.99, label: "50K", popular: false, discount: 29 },
    { amount: 100000, originalPrice: 24.99, price: 18.99, label: "100K", popular: true, discount: 24 },
    { amount: 250000, originalPrice: 59.99, price: 44.99, label: "250K", popular: false, discount: 25 },
    { amount: 500000, originalPrice: 109.99, price: 84.99, label: "500K", popular: false, discount: 23 },
  ]

  const handleOrderNow = (packageIndex: number) => {
    const pkg = packages[packageIndex]
    const url = `/order-summary?service=xbox-gamerscore&amount=${pkg.amount}&price=${pkg.price.toFixed(2)}`
    window.location.href = url
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Achievement Boost</Badge>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                    <span className="gradient-text">Xbox Gamerscore</span>
                    <br />
                    <span className="text-white">Boost Service</span>
                  </h1>
                  <p className="text-xl text-white/80 text-balance">
                    Enhance your gaming reputation with legitimate gamerscore increases. Show off your gaming prowess
                    with impressive achievement scores.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white">Safe Method</h3>
                      <p className="text-xs text-white/60">Legitimate achievement unlocking</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white">Quick Boost</h3>
                      <p className="text-xs text-white/60">Rapid gamerscore increase</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white">Real Achievements</h3>
                      <p className="text-xs text-white/60">Actual game completions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-white">Permanent</h3>
                      <p className="text-xs text-white/60">Gamerscore stays forever</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <img
                  src="/xbox-gamerscore-trophy.png"
                  alt="Xbox Gamerscore Service"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-white">Choose Your Package</h2>
              <p className="text-white/80">Select the perfect gamerscore boost for your Xbox profile</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className="p-6 text-center space-y-4 border-primary/20 bg-card/50 hover:border-primary/40 transition-all duration-200"
                >
                  {pkg.popular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                    {pkg.discount > 0 && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <Percent className="h-3 w-3 mr-1" />
                        {pkg.discount}% OFF
                      </Badge>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{pkg.label}</h3>
                    <p className="text-white/60">Gamerscore</p>
                  </div>
                  <div className="space-y-1">
                    {pkg.discount > 0 ? (
                      <>
                        <div className="text-white/60 line-through text-lg">${pkg.originalPrice}</div>
                        <div className="text-3xl font-bold text-primary">${pkg.price}</div>
                        <div className="text-green-400 text-sm font-medium">
                          Save ${(pkg.originalPrice - pkg.price).toFixed(2)}
                        </div>
                      </>
                    ) : (
                      <div className="text-3xl font-bold text-primary">${pkg.price}</div>
                    )}
                  </div>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => handleOrderNow(index)}
                  >
                    Order Now
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
