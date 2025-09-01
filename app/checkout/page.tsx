"use client"

import type React from "react"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, CreditCard, Lock, Check, Smartphone, MoreHorizontal } from "lucide-react"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState({
    service: "",
    tier: "",
    price: 0,
    package: "",
  })
  const [customerInfo, setCustomerInfo] = useState({
    email: "",
    gamertag: "",
    notes: "",
    profilePictureLink: "",
  })
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const memoizedParams = useMemo(
    () => ({
      service: searchParams.get("service") || "",
      tier: searchParams.get("tier") || "",
      price: Number.parseFloat(searchParams.get("price") || "0"),
      package: searchParams.get("package") || "",
    }),
    [searchParams.get("service"), searchParams.get("tier"), searchParams.get("price"), searchParams.get("package")],
  )

  useEffect(() => {
    setOrderDetails(memoizedParams)
  }, [memoizedParams])

  const shouldShowGamertag = () => {
    return orderDetails.service !== "gamertag-autoclaimer"
  }

  const shouldShowProfilePictureLink = () => {
    return orderDetails.service === "classic-xbox-profile-picture" && orderDetails.package === "Choose Your Own"
  }

  const getGamertagLabel = () => {
    switch (orderDetails.service) {
      case "lfg-post-spammer":
      case "follower-boost-manager":
      case "message-spammer":
        return "Discord Username"
      case "gta-5-cash":
        return "Xbox Gamertag"
      default:
        return "Xbox Gamertag"
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page
      window.location.href = "/checkout/success"
    }, 3000)
  }

  const tax = orderDetails.price * 0.08 // 8% tax
  const total = orderDetails.price + tax

  const paymentMethods = [
    { id: "card", name: "Card", icon: CreditCard },
    { id: "cashapp", name: "Cash App", icon: Smartphone },
    { id: "other", name: "Other", icon: MoreHorizontal },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-balance">
                <span className="gradient-text">Secure</span> Checkout
              </h1>
              <p className="text-muted-foreground">Complete your order with our secure payment system</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Order Summary */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm h-fit">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{orderDetails.service}</h3>
                        <p className="text-muted-foreground text-sm">{orderDetails.tier || orderDetails.package}</p>
                      </div>
                      <Badge className="bg-primary/10 text-primary">Popular</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Service Price</span>
                      <span>${orderDetails.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <h3 className="font-semibold">What's Included:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Instant delivery (5-15 minutes)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>24/7 customer support</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Lifetime guarantee</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Money-back guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Payment Form */}
              <Card className="p-8 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Customer Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                          required
                        />
                      </div>
                      {shouldShowGamertag() && (
                        <div>
                          <Label htmlFor="gamertag">{getGamertagLabel()}</Label>
                          <Input
                            id="gamertag"
                            type="text"
                            placeholder={
                              getGamertagLabel() === "Discord Username" ? "Your Discord username" : "Your Xbox gamertag"
                            }
                            value={customerInfo.gamertag}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, gamertag: e.target.value })}
                            required
                          />
                        </div>
                      )}
                      {shouldShowProfilePictureLink() && (
                        <div>
                          <Label htmlFor="profilePictureLink">Profile Picture Link</Label>
                          <Input
                            id="profilePictureLink"
                            type="url"
                            placeholder="https://xboxgamer.pics/..."
                            value={customerInfo.profilePictureLink}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, profilePictureLink: e.target.value })}
                            required
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            Go to{" "}
                            <a
                              href="https://xboxgamer.pics/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              https://xboxgamer.pics/
                            </a>
                            , hold on the picture you want, copy its link and paste here.
                          </p>
                        </div>
                      )}
                      <div>
                        <Label htmlFor="notes">Special Instructions (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any special requests or notes..."
                          value={customerInfo.notes}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Payment Method</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {paymentMethods.map((method) => {
                        const IconComponent = method.icon
                        return (
                          <Card
                            key={method.id}
                            className={`p-4 cursor-pointer transition-all duration-200 ${
                              selectedPaymentMethod === method.id
                                ? "border-primary bg-primary/10 scale-105"
                                : "border-primary/20 bg-card/30 hover:border-primary/40"
                            }`}
                            onClick={() => setSelectedPaymentMethod(method.id)}
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

                  {/* Security Notice */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Secure Payment</h4>
                        <p className="text-muted-foreground text-sm">
                          Your payment information is encrypted and processed securely through Stripe. We never store
                          your card details.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full glow-effect"
                    size="lg"
                    disabled={
                      isProcessing ||
                      !selectedPaymentMethod ||
                      (shouldShowProfilePictureLink() && !customerInfo.profilePictureLink)
                    }
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Processing Payment...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Complete Order - ${total.toFixed(2)}
                      </div>
                    )}
                  </Button>

                  <p className="text-center text-muted-foreground text-sm">
                    By completing this purchase, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
