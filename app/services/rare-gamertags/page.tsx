"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Percent } from "lucide-react"
import Link from "next/link"

export default function RareGamertagsPage() {
  const packages = [
    {
      type: "4-Character (with digit)",
      example: "j4km",
      originalPrice: 25.0,
      price: 19.99,
      popular: false,
      discount: 20,
    },
    {
      type: "4-Letter (letters only)",
      example: "jiks",
      originalPrice: 70.0,
      price: 57.99,
      popular: true,
      discount: 17,
    },
    {
      type: "3-Character (with digit)",
      example: "f4l",
      originalPrice: 230.0,
      price: 195.99,
      popular: false,
      discount: 15,
    },
    {
      type: "3-Letter (letters only)",
      example: "dzd",
      originalPrice: 290.0,
      price: 245.99,
      popular: false,
      discount: 15,
    },
    {
      type: "Pronounceable Word",
      example: "infect",
      originalPrice: 530.0,
      price: 425.99,
      popular: false,
      discount: 20,
    },
    {
      type: "2-Letter (letters only)",
      example: "cr",
      originalPrice: 6500.0,
      price: 4225.99,
      popular: false,
      discount: 35,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Premium Gamertags</Badge>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                    <span className="gradient-text">Rare Gamertags</span>
                    <br />
                    <span className="text-white">Claim Service</span>
                  </h1>
                  <p className="text-xl text-white/80 text-balance">
                    Secure exclusive and rare Xbox gamertags that stand out from the crowd.
                  </p>
                </div>
              </div>

              <div className="lg:pl-8">
                <img
                  src="/rare-gamertag-premium.png"
                  alt="Rare Gamertags Service"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-white">Choose Your Rare Gamertag Type</h2>
              <p className="text-white/80">Select the perfect rare gamertag category for your Xbox profile</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`p-6 text-center space-y-4 transition-all duration-200 ${
                    pkg.popular
                      ? "border-primary bg-primary/10"
                      : "border-primary/20 bg-card/50 hover:border-primary/40"
                  }`}
                >
                  {pkg.popular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Crown className="h-8 w-8 text-primary" />
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <Percent className="h-3 w-3 mr-1" />
                      {pkg.discount}% OFF
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{pkg.type}</h3>
                    <p className="text-white/60 text-sm">Example: {pkg.example}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-white/60 line-through text-lg">${pkg.originalPrice.toFixed(2)}</div>
                    <div className="text-2xl font-bold text-primary">${pkg.price.toFixed(2)}</div>
                    <div className="text-green-400 text-sm font-medium">
                      Save ${(pkg.originalPrice - pkg.price).toFixed(2)}
                    </div>
                  </div>
                  <Link
                    href={`/order-summary?service=rare-gamertags&amount=1&type=${encodeURIComponent(pkg.type)}&price=${pkg.price.toFixed(2)}`}
                  >
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      Order Now
                    </Button>
                  </Link>
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
