import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Gamepad2, Check, Shield, Zap, Trophy } from "lucide-react"
import Link from "next/link"

const gameCurrencyServices = [
  {
    title: "GTA 5 Cash",
    description: "Get instant GTA 5 money for both Xbox and PlayStation platforms. Safe, fast, and reliable delivery.",
    icon: DollarSign,
    platforms: ["Xbox (Next Gen)", "Xbox (Old Gen)", "PlayStation"],
    popular: true,
    features: [
      "Available for Xbox and PlayStation",
      "Next-gen and old-gen console support",
      "100% safe delivery method",
      "Instant transfer process",
      "24/7 customer support",
      "Money-back guarantee",
    ],
    pricing: [
      { amount: "10M", price: "$14.99", popular: false },
      { amount: "20M", price: "$17.99", popular: false },
      { amount: "30M", price: "$20.99", popular: false },
      { amount: "50M", price: "$22.99", popular: false },
      { amount: "100M", price: "$24.99", popular: true },
      { amount: "200M", price: "$29.99", popular: false },
      { amount: "300M", price: "$43.99", popular: false },
      { amount: "500M", price: "$53.99", popular: false },
    ],
    deliveryTime: "5-15 minutes",
    requirements: ["Active GTA Online character", "Level 10+ recommended", "Available for trade"],
  },
  {
    title: "Forza 5 Credits",
    description: "Boost your Forza Horizon 5 credits instantly. Buy the cars you want and dominate the racing scene.",
    icon: Trophy,
    platforms: ["Xbox Series X/S", "Xbox One", "PC (Steam/Microsoft Store)"],
    popular: false,
    features: [
      "Instant credit delivery",
      "Up to 1 billion credits available",
      "Safe transfer methods",
      "Compatible with all platforms",
      "Professional service guarantee",
      "Bulk discount pricing",
    ],
    pricing: [
      { amount: "10M", price: "$9.99", popular: false },
      { amount: "25M", price: "$12.99", popular: false },
      { amount: "50M", price: "$14.99", popular: false },
      { amount: "100M", price: "$15.99", popular: true },
      { amount: "200M", price: "$17.99", popular: false },
      { amount: "300M", price: "$19.99", popular: false },
      { amount: "500M", price: "$23.99", popular: false },
      { amount: "1B", price: "$39.99", popular: false },
    ],
    deliveryTime: "10-30 minutes",
    requirements: ["Forza Horizon 5 game", "Xbox Live/Steam account", "Available for online session"],
  },
]

export default function GameCurrencyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="gradient-text">Game Currency</span>
                <br />
                <span className="text-foreground">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Boost your in-game wealth instantly. Get GTA 5 cash and Forza 5 credits delivered safely to your
                account.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>100% Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Instant Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gamepad2 className="h-4 w-4 text-primary" />
                  <span>All Platforms</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Currency Services */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {gameCurrencyServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="space-y-12">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
                        {service.popular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
                      </div>
                      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{service.description}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {service.platforms.map((platform, platformIndex) => (
                          <Badge key={platformIndex} variant="secondary" className="bg-muted text-muted-foreground">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Features */}
                      <Card className="p-8 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-6">What's Included</h3>
                        <div className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-border space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Delivery Time:</span>
                            <span className="font-semibold text-primary">{service.deliveryTime}</span>
                          </div>
                        </div>
                      </Card>

                      {/* Pricing */}
                      <Card className="p-8 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-6">Pricing Options</h3>
                        <div className="space-y-3 max-h-80 overflow-y-auto">
                          {service.pricing.map((tier, tierIndex) => (
                            <div
                              key={tierIndex}
                              className={`p-4 rounded-lg border transition-all ${
                                tier.popular
                                  ? "border-primary/50 bg-primary/5"
                                  : "border-border bg-muted/30 hover:bg-muted/50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold">{tier.amount}</span>
                                  {tier.popular && (
                                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                                <span className="font-bold text-primary">{tier.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Link href="/pricing">
                            <Button className="w-full glow-effect">Order Now</Button>
                          </Link>
                        </div>
                      </Card>

                      {/* Requirements */}
                      <Card className="p-8 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-6">Requirements</h3>
                        <div className="space-y-4">
                          {service.requirements.map((requirement, reqIndex) => (
                            <div key={reqIndex} className="flex items-start gap-3">
                              <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground text-sm">{requirement}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                          <div className="text-center">
                            <p className="text-sm text-muted-foreground mb-4">Need help with requirements?</p>
                            <Link href="/contact">
                              <Button variant="outline" size="sm">
                                Contact Support
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Safety Information */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                <span className="gradient-text">Safe & Secure</span> Delivery
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Our proven delivery methods ensure your account stays safe while receiving your game currency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Account Safety</h3>
                  <p className="text-muted-foreground">
                    We use proven methods that have never resulted in account bans or restrictions.
                  </p>
                </div>
              </Card>

              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Most orders are completed within 15-30 minutes of purchase confirmation.
                  </p>
                </div>
              </Card>

              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Money-Back Guarantee</h3>
                  <p className="text-muted-foreground">
                    If we can't deliver your order, you get a full refund. No questions asked.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Ready to <span className="gradient-text">Boost Your Wealth</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Join thousands of gamers who have enhanced their gaming experience with our safe currency services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="glow-effect">
                  Order Game Currency
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Ask Questions
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
