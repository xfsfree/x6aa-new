"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, Smartphone, MoreHorizontal, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useSearchParams } from "next/navigation"

export default function OrderSummaryPage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [gamertag, setGamertag] = useState("")
  const [specialInstructions, setSpecialInstructions] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const service = searchParams.get("service") || ""
  const amount = searchParams.get("amount") || "0"
  const price = searchParams.get("price") || "0"
  const type = searchParams.get("type") || ""
  const platform = searchParams.get("platform") || ""

  console.log("[v0] Service:", service, "Type:", type, "Amount:", amount, "Price:", price)

  const paymentMethods = [
    { id: "card", name: "Card", icon: CreditCard },
    { id: "cashapp", name: "Cash App", icon: Smartphone },
    { id: "other", name: "Other", icon: MoreHorizontal },
  ]

  const getServiceName = (service: string) => {
    if (service === "rare-gamertags") {
      const type = searchParams.get("type") || ""
      console.log("[v0] Rare gamertags type:", type)
      switch (type) {
        case "4-character":
          return "4-Character Gamertag"
        case "4-letter":
          return "4-Letter Gamertag"
        case "3-character":
          return "3-Character Gamertag"
        case "3-letter":
          return "3-Letter Gamertag"
        case "pronounceable":
          return "Pronounceable Word Gamertag"
        case "2-letter":
          return "2-Letter Gamertag"
        default:
          return "Rare Gamertag"
      }
    }

    switch (service) {
      case "xbox-followers":
        return "Xbox Followers"
      case "friend-requests":
        return "Friend Requests"
      case "gta-5-cash":
        return "GTA 5 Cash"
      case "forza-5-credits":
        return "Forza 5 Credits"
      case "follower-boost-manager":
        return "Follower Boost Manager"
      case "xbox-gamerscore":
        return "Xbox Gamerscore"
      default:
        return "Service"
    }
  }

  const getServiceUnit = (service: string) => {
    switch (service) {
      case "xbox-followers":
        return "followers"
      case "friend-requests":
        return "friend requests"
      case "gta-5-cash":
        return Number(amount) === 1 ? "cash" : "cash"
      case "forza-5-credits":
        return "credits"
      case "rare-gamertags":
        return Number(amount) === 1 ? "gamertag" : "gamertags"
      case "follower-boost-manager":
        return "boosts"
      case "xbox-gamerscore":
        return "gamerscore"
      default:
        return "items"
    }
  }

  const subtotal = Number.parseFloat(price)
  const taxRate = 0.08
  const taxAmount = subtotal * taxRate
  const totalWithTax = subtotal + taxAmount

  const handleCompleteOrder = () => {
    const requiresGamertag =
      service === "gta-5-cash" ||
      service === "forza-5-credits" ||
      service === "follower-boost-manager" ||
      service === "xbox-followers" ||
      service === "friend-requests" ||
      service === "xbox-gamerscore"
    const isFormValid = email && paymentMethod && (!requiresGamertag || gamertag)

    if (isFormValid) {
      const baseUrl = `/api/create-checkout-session?service=${service}&quantity=${amount}&price=${totalWithTax.toFixed(2)}&email=${encodeURIComponent(email)}&instructions=${encodeURIComponent(specialInstructions)}&payment_method=${paymentMethod}`
      const platformParam = service === "gta-5-cash" && platform ? `&platform=${platform}` : ""
      const checkoutUrl = requiresGamertag
        ? `${baseUrl}&gamertag=${encodeURIComponent(gamertag)}${platformParam}`
        : baseUrl
      window.location.href = checkoutUrl
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                href={`/services/${service}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to service
              </Link>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">
                <span className="gradient-text">Order Summary</span>
              </h1>
              <p className="text-white/80 mt-2">Complete your order details</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left side - Order Details */}
              <div>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 sticky top-24">
                  <h2 className="text-xl font-bold text-white mb-4">Order Details</h2>
                  <div className="bg-primary/10 p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Service:</span>
                      <span className="text-white font-medium">{getServiceName(service)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Quantity:</span>
                      <span className="text-white font-medium">
                        {Number(amount).toLocaleString()} {getServiceUnit(service)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Subtotal:</span>
                      <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Tax (8%):</span>
                      <span className="text-white font-medium">${taxAmount.toFixed(2)}</span>
                    </div>
                    <hr className="border-primary/20" />
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-lg">Total:</span>
                      <span className="text-primary font-bold text-2xl">${totalWithTax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center text-sm text-white/60">
                    <p>✓ Secure checkout ✓ Instant delivery ✓ 24/7 support</p>
                  </div>
                </Card>
              </div>

              {/* Right side - Customer Information Form */}
              <div>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                  <h2 className="text-xl font-bold text-white mb-6">Customer Information</h2>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    {service === "gta-5-cash" && (
                      <div>
                        <Label htmlFor="gamertag" className="text-white">
                          {platform === "xbox" ? "Xbox Gamertag" : "PSN ID"} *
                        </Label>
                        <Input
                          id="gamertag"
                          type="text"
                          placeholder={platform === "xbox" ? "Your Xbox gamertag" : "Your PSN ID"}
                          value={gamertag}
                          onChange={(e) => setGamertag(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    )}

                    {service === "forza-5-credits" && (
                      <div>
                        <Label htmlFor="gamertag" className="text-white">
                          Xbox Gamertag *
                        </Label>
                        <Input
                          id="gamertag"
                          type="text"
                          placeholder="Your Xbox gamertag"
                          value={gamertag}
                          onChange={(e) => setGamertag(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    )}

                    {service === "follower-boost-manager" && (
                      <div>
                        <Label htmlFor="gamertag" className="text-white">
                          Discord Username *
                        </Label>
                        <Input
                          id="gamertag"
                          type="text"
                          placeholder="Your Discord username"
                          value={gamertag}
                          onChange={(e) => setGamertag(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    )}

                    {service === "xbox-followers" && (
                      <div>
                        <Label htmlFor="gamertag" className="text-white">
                          Xbox Gamertag *
                        </Label>
                        <Input
                          id="gamertag"
                          type="text"
                          placeholder="Your Xbox gamertag"
                          value={gamertag}
                          onChange={(e) => setGamertag(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    )}

                    {service === "friend-requests" && (
                      <div>
                        <Label htmlFor="gamertag" className="text-white">
                          Xbox Gamertag *
                        </Label>
                        <Input
                          id="gamertag"
                          type="text"
                          placeholder="Your Xbox gamertag"
                          value={gamertag}
                          onChange={(e) => setGamertag(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    )}

                    {service === "xbox-gamerscore" && (
                      <div>
                        <Label htmlFor="gamertag" className="text-white">
                          Xbox Gamertag *
                        </Label>
                        <Input
                          id="gamertag"
                          type="text"
                          placeholder="Your Xbox gamertag"
                          value={gamertag}
                          onChange={(e) => setGamertag(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="instructions" className="text-white">
                        Special Instructions (Optional)
                      </Label>
                      <Textarea
                        id="instructions"
                        placeholder="Any special requests or instructions..."
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label className="text-white mb-3 block">Payment Method *</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {paymentMethods.map((method) => {
                          const IconComponent = method.icon
                          return (
                            <Card
                              key={method.id}
                              className={`p-4 cursor-pointer transition-all duration-200 ${
                                paymentMethod === method.id
                                  ? "border-primary bg-primary/10 scale-105"
                                  : "border-primary/20 bg-card/30 hover:border-primary/40"
                              }`}
                              onClick={() => setPaymentMethod(method.id)}
                            >
                              <div className="text-center">
                                <IconComponent className="h-6 w-6 mx-auto mb-2 text-primary" />
                                <p className="text-sm text-white font-medium">{method.name}</p>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </div>

                    <Button
                      className="w-full glow-effect"
                      size="lg"
                      disabled={
                        !email ||
                        !paymentMethod ||
                        ((service === "gta-5-cash" ||
                          service === "forza-5-credits" ||
                          service === "follower-boost-manager" ||
                          service === "xbox-followers" ||
                          service === "friend-requests" ||
                          service === "xbox-gamerscore") &&
                          !gamertag)
                      }
                      onClick={handleCompleteOrder}
                    >
                      Complete Order - ${totalWithTax.toFixed(2)}
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
