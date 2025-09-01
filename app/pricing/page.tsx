import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Hash, Bot, DollarSign, ImageIcon, Check, Star, Shield, Zap } from "lucide-react"
import Link from "next/link"

const pricingData = {
  "xbox-profile": {
    title: "Xbox Profile Services",
    icon: Users,
    services: [
      {
        name: "Xbox Followers",
        description: "Authentic followers from 1K to 1M",
        basePrice: 2.99,
        unit: "per 1K",
        popular: true,
        tiers: [
          { amount: "1K", price: 2.99, originalPrice: 3.99, savings: "25%" },
          { amount: "5K", price: 12.99, originalPrice: 17.99, savings: "28%" },
          { amount: "10K", price: 24.99, originalPrice: 34.99, savings: "29%" },
          { amount: "50K", price: 119.99, originalPrice: 164.99, savings: "27%" },
          { amount: "100K", price: 229.99, originalPrice: 319.99, savings: "28%" },
          { amount: "1M", price: 1999.99, originalPrice: 2799.99, savings: "29%" },
        ],
      },
      {
        name: "Friend Requests",
        description: "Expand your Xbox network rapidly",
        basePrice: 2.99,
        unit: "per 1K",
        popular: true,
        tiers: [
          { amount: "1K", price: 2.99, originalPrice: 3.99, savings: "25%" },
          { amount: "5K", price: 12.99, originalPrice: 17.99, savings: "28%" },
          { amount: "10K", price: 24.99, originalPrice: 34.99, savings: "29%" },
          { amount: "50K", price: 119.99, originalPrice: 164.99, savings: "27%" },
          { amount: "100K", price: 229.99, originalPrice: 319.99, savings: "28%" },
          { amount: "1M", price: 1999.99, originalPrice: 2799.99, savings: "29%" },
        ],
      },
      {
        name: "Xbox Gamerscore",
        description: "Boost your gaming achievements",
        basePrice: 9.99,
        unit: "per 50K",
        popular: false,
        tiers: [
          { amount: "50K", price: 9.99, originalPrice: 13.99, savings: "29%" },
          { amount: "100K", price: 18.99, originalPrice: 26.99, savings: "30%" },
          { amount: "250K", price: 44.99, originalPrice: 64.99, savings: "31%" },
          { amount: "500K", price: 84.99, originalPrice: 124.99, savings: "32%" },
        ],
      },
    ],
  },
  gamertags: {
    title: "Rare Gamertags",
    icon: Hash,
    services: [
      {
        name: "Rare Gamertags",
        description: "Premium exclusive gamertags",
        basePrice: 19.99,
        unit: "each",
        popular: true,
        tiers: [
          { amount: "4-Character (with digit)", price: 19.99, originalPrice: 25.0, savings: "20%" },
          { amount: "4-Letter Only", price: 57.99, originalPrice: 70.0, savings: "17%" },
          { amount: "3-Character (with digit)", price: 195.99, originalPrice: 230.0, savings: "15%" },
          { amount: "3-Letter Only", price: 245.99, originalPrice: 290.0, savings: "15%" },
          { amount: "Pronounceable Word", price: 425.99, originalPrice: 530.0, savings: "20%" },
          { amount: "2-Letter Premium", price: 4225.99, originalPrice: 6500.0, savings: "35%" },
        ],
      },
    ],
  },
  "discord-bots": {
    title: "Discord Automation Bots",
    icon: Bot,
    services: [
      {
        name: "LFG Post Spammer",
        description: "Automated LFG posting bot",
        basePrice: 9.99,
        unit: "per day",
        popular: false,
        tiers: [
          { amount: "1 Day", price: 9.99, originalPrice: 14.99, savings: "33%" },
          { amount: "3 Days", price: 24.99, originalPrice: 37.99, savings: "34%" },
          { amount: "1 Week", price: 29.99, originalPrice: 44.99, savings: "33%" },
          { amount: "1 Month", price: 39.99, originalPrice: 59.99, savings: "33%" },
          { amount: "Lifetime", price: 145.99, originalPrice: 219.99, savings: "34%" },
        ],
      },
      {
        name: "Follower Boost Manager",
        description: "Send followers to any gamertag",
        basePrice: 9.99,
        unit: "per day",
        popular: true,
        tiers: [
          { amount: "1 Day", price: 9.99, originalPrice: 14.99, savings: "33%" },
          { amount: "3 Days", price: 19.99, originalPrice: 29.99, savings: "33%" },
          { amount: "1 Week", price: 29.99, originalPrice: 44.99, savings: "33%" },
          { amount: "1 Month", price: 39.99, originalPrice: 59.99, savings: "33%" },
          { amount: "Lifetime", price: 99.99, originalPrice: 149.99, savings: "33%" },
        ],
      },
      {
        name: "Gamertag Autoclaimer",
        description: "Auto-claim rare gamertags",
        basePrice: 9.99,
        unit: "per day",
        popular: false,
        tiers: [
          { amount: "1 Day", price: 9.99, originalPrice: 14.99, savings: "33%" },
          { amount: "3 Days", price: 24.99, originalPrice: 37.99, savings: "34%" },
          { amount: "1 Week", price: 39.99, originalPrice: 59.99, savings: "33%" },
          { amount: "1 Month", price: 75.99, originalPrice: 114.99, savings: "34%" },
          { amount: "Lifetime", price: 149.99, originalPrice: 224.99, savings: "33%" },
        ],
      },
      {
        name: "Message Spammer",
        description: "Automated messaging tool",
        basePrice: 9.99,
        unit: "per day",
        popular: false,
        tiers: [
          { amount: "1 Day", price: 9.99, originalPrice: 14.99, savings: "33%" },
          { amount: "3 Days", price: 24.99, originalPrice: 37.99, savings: "34%" },
          { amount: "1 Week", price: 29.99, originalPrice: 44.99, savings: "33%" },
          { amount: "1 Month", price: 39.99, originalPrice: 59.99, savings: "33%" },
          { amount: "Lifetime", price: 59.99, originalPrice: 89.99, savings: "33%" },
        ],
      },
    ],
  },
  "game-currency": {
    title: "Game Currency",
    icon: DollarSign,
    services: [
      {
        name: "GTA 5 Cash",
        description: "Xbox & PlayStation money",
        basePrice: 24.99,
        unit: "per 100M",
        popular: true,
        tiers: [
          { amount: "100M", price: 24.99, originalPrice: 32.99, savings: "24%" },
          { amount: "200M", price: 29.99, originalPrice: 39.99, savings: "25%" },
          { amount: "300M", price: 35.99, originalPrice: 47.99, savings: "25%" },
          { amount: "500M", price: 53.99, originalPrice: 71.99, savings: "25%" },
        ],
      },
      {
        name: "Forza 5 Credits",
        description: "Forza Horizon 5 credits",
        basePrice: 15.99,
        unit: "per 100M",
        popular: false,
        tiers: [
          { amount: "100M", price: 15.99, originalPrice: 21.99, savings: "27%" },
          { amount: "200M", price: 17.99, originalPrice: 24.99, savings: "28%" },
          { amount: "300M", price: 19.99, originalPrice: 27.99, savings: "29%" },
          { amount: "500M", price: 23.99, originalPrice: 33.99, savings: "29%" },
        ],
      },
    ],
  },
  extras: {
    title: "Premium Extras",
    icon: ImageIcon,
    services: [
      {
        name: "Classic Xbox Profile Picture",
        description: "Rare Xbox 360-style pictures",
        basePrice: 4.99,
        unit: "each",
        popular: false,
        tiers: [
          { amount: "Random Classic", price: 4.99, originalPrice: 6.99, savings: "29%" },
          { amount: "Choose Your Own", price: 7.99, originalPrice: 10.99, savings: "27%" },
        ],
      },
    ],
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="gradient-text">Transparent</span>
                <br />
                <span className="text-foreground">Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                No hidden fees, no surprises. Choose from our comprehensive range of Xbox optimization services with
                clear, upfront pricing and attractive discounts.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Instant Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="xbox-profile" className="space-y-12">
              <TabsList className="grid w-full grid-cols-5 max-w-4xl mx-auto">
                <TabsTrigger value="xbox-profile">Xbox Profile</TabsTrigger>
                <TabsTrigger value="gamertags">Gamertags</TabsTrigger>
                <TabsTrigger value="discord-bots">Discord Bots</TabsTrigger>
                <TabsTrigger value="game-currency">Game Currency</TabsTrigger>
                <TabsTrigger value="extras">Extras</TabsTrigger>
              </TabsList>

              {Object.entries(pricingData).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <TabsContent key={key} value={key} className="space-y-12">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold">{category.title}</h2>
                    </div>

                    <div className="space-y-16">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="space-y-8">
                          <div className="text-center space-y-2">
                            <div className="flex items-center justify-center gap-4">
                              <h3 className="text-2xl font-bold">{service.name}</h3>
                              {service.popular && (
                                <Badge className="bg-primary text-primary-foreground">
                                  <Star className="h-3 w-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground">{service.description}</p>
                            <div className="text-sm text-muted-foreground">
                              Starting at ${service.basePrice} {service.unit}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                            {service.tiers.map((tier, tierIndex) => (
                              <Card
                                key={tierIndex}
                                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
                              >
                                <div className="text-center space-y-4">
                                  <div className="space-y-2">
                                    <div className="font-semibold">{tier.amount}</div>
                                    {tier.savings && (
                                      <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-400">
                                        Save {tier.savings}
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="space-y-1">
                                    {tier.originalPrice && (
                                      <div className="text-sm text-muted-foreground line-through">
                                        ${tier.originalPrice}
                                      </div>
                                    )}
                                    <div className="text-2xl font-bold text-primary">${tier.price}</div>
                                    {tier.savings && (
                                      <div className="text-xs text-green-400">
                                        Save ${(tier.originalPrice - tier.price).toFixed(2)}
                                      </div>
                                    )}
                                  </div>
                                  <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`}>
                                    <Button className="w-full" size="sm">
                                      Order Now
                                    </Button>
                                  </Link>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                )
              })}
            </Tabs>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                <span className="gradient-text">Secure Payment</span> Methods
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                We accept all major payment methods through our secure Stripe integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Credit & Debit Cards</h3>
                  <p className="text-muted-foreground">
                    Visa, Mastercard, American Express, and Discover accepted with full buyer protection.
                  </p>
                </div>
              </Card>

              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Digital Wallets</h3>
                  <p className="text-muted-foreground">
                    Apple Pay, Google Pay, and other digital wallet options for quick checkout.
                  </p>
                </div>
              </Card>

              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Bank Transfers</h3>
                  <p className="text-muted-foreground">
                    Direct bank transfers and ACH payments for larger orders with additional discounts.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                Pricing <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="font-semibold">Do you offer bulk discounts?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! Our pricing automatically includes bulk discounts. The more you order, the more you save - up
                    to 33% off for larger packages.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="font-semibold">Are there any hidden fees?</h3>
                  <p className="text-muted-foreground text-sm">
                    No hidden fees ever. The price you see is exactly what you pay. All taxes and processing fees are
                    included in the displayed price.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="font-semibold">What's your refund policy?</h3>
                  <p className="text-muted-foreground text-sm">
                    We offer a 100% money-back guarantee if we can't deliver your order. Most services also include
                    lifetime replacement guarantees.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <h3 className="font-semibold">How fast is delivery?</h3>
                  <p className="text-muted-foreground text-sm">
                    Most services start delivery within 5-15 minutes of payment confirmation. Larger orders may take up
                    to 24 hours to complete.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Choose your service above or contact our team for custom pricing on large orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" className="glow-effect">
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
