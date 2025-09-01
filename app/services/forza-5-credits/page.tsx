"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Zap, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Forza5CreditsPage() {
  const router = useRouter()

  const packages = [
    {
      amount: 100000000,
      title: "100M Credits",
      originalPrice: 19.99,
      price: 15.99,
      discount: 20,
      popular: false,
    },
    {
      amount: 200000000,
      title: "200M Credits",
      originalPrice: 23.99,
      price: 17.99,
      discount: 25,
      popular: true,
    },
    {
      amount: 300000000,
      title: "300M Credits",
      originalPrice: 26.99,
      price: 19.99,
      discount: 26,
      popular: false,
    },
    {
      amount: 500000000,
      title: "500M Credits",
      originalPrice: 31.99,
      price: 23.99,
      discount: 25,
      popular: false,
    },
  ]

  const handleOrderNow = (pkg: (typeof packages)[0]) => {
    const params = new URLSearchParams({
      service: "forza-5-credits",
      amount: pkg.amount.toString(),
      price: pkg.price.toString(),
    })
    router.push(`/order-summary?${params.toString()}`)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-12 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <img src="/forza-horizon-5-credits.png" alt="Forza 5 Credits" className="w-20 h-20 rounded-xl" />
              </div>
              <h1 className="text-3xl font-bold">
                <span className="gradient-text">Forza 5 Credits</span>
              </h1>
              <p className="text-base text-white/80 max-w-2xl mx-auto">
                Get unlimited Forza Horizon 5 credits to buy any car, upgrade, or customization.
              </p>

              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-white">Safe Method</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-white">Quick Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-white">Xbox Only</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">Choose Your Credits Package</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className="relative p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-bold text-white">{pkg.title}</h3>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-white/60 line-through">${pkg.originalPrice}</span>
                        <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                      </div>
                      <p className="text-sm text-green-400">
                        Save ${(pkg.originalPrice - pkg.price).toFixed(2)} ({pkg.discount}% OFF)
                      </p>
                    </div>

                    <Button
                      className="w-full"
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => handleOrderNow(pkg)}
                    >
                      Order Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 text-sm text-white/60">
              <p>✓ Secure checkout ✓ Safe delivery ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
