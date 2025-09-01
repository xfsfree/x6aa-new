import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, UserPlus, Trophy, Check, Star, Shield, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Xbox Followers",
    description: "Boost your Xbox profile with authentic, high-quality followers that enhance your gaming presence.",
    price: "$2.99",
    unit: "per 1K",
    range: "1K - 1M available",
    popular: true,
    features: [
      "Instant delivery within minutes",
      "100% authentic followers",
      "Bulk discounts for larger orders",
      "24/7 customer support",
      "Lifetime guarantee",
    ],
    pricing: [
      { amount: "1K", price: "$2.99" },
      { amount: "5K", price: "$12.99", discount: "13% off" },
      { amount: "10K", price: "$24.99", discount: "17% off" },
      { amount: "50K", price: "$119.99", discount: "20% off" },
      { amount: "100K", price: "$229.99", discount: "23% off" },
    ],
  },
  {
    icon: UserPlus,
    title: "Xbox Friend Requests",
    description: "Expand your Xbox network rapidly with genuine friend requests from active gaming accounts.",
    price: "$2.99",
    unit: "per 1K",
    range: "1K - 1M available",
    popular: true,
    features: [
      "Same competitive pricing as followers",
      "Real gaming accounts",
      "Bulk discount tiers available",
      "Fast processing time",
      "Secure delivery method",
    ],
    pricing: [
      { amount: "1K", price: "$2.99" },
      { amount: "5K", price: "$12.99", discount: "13% off" },
      { amount: "10K", price: "$24.99", discount: "17% off" },
      { amount: "50K", price: "$119.99", discount: "20% off" },
      { amount: "100K", price: "$229.99", discount: "23% off" },
    ],
  },
  {
    icon: Trophy,
    title: "Xbox Gamerscore",
    description: "Boost your gamerscore to showcase your gaming achievements and unlock exclusive Xbox rewards.",
    price: "$9.99",
    unit: "per 50K",
    range: "50K - 1M available",
    popular: false,
    features: [
      "Minimum 50K gamerscore boost",
      "Fair pricing tiers for all amounts",
      "Secure and safe delivery",
      "Permanent gamerscore increase",
      "Professional service guarantee",
    ],
    pricing: [
      { amount: "50K", price: "$9.99" },
      { amount: "100K", price: "$18.99", discount: "5% off" },
      { amount: "250K", price: "$44.99", discount: "10% off" },
      { amount: "500K", price: "$84.99", discount: "15% off" },
      { amount: "1M", price: "$159.99", discount: "20% off" },
    ],
  },
]

export default function XboxProfilePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="gradient-text">Xbox Profile</span>
                <br />
                <span className="text-foreground">Optimization</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Transform your Xbox presence with our premium profile enhancement services. Trusted by thousands of
                gamers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => {
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
                        {service.popular && (
                          <Badge className="bg-primary text-primary-foreground">
                            <Star className="h-3 w-3 mr-1" />
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <span>{service.range}</span>
                        <span>•</span>
                        <span>
                          Starting at {service.price} {service.unit}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                      {/* Features */}
                      <Card className="p-8 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
                        <div className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-primary" />
                              <span>100% Secure</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span>Instant Delivery</span>
                            </div>
                          </div>
                        </div>
                      </Card>

                      {/* Pricing */}
                      <Card className="p-8 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold mb-6">Pricing Tiers</h3>
                        <div className="space-y-4">
                          {service.pricing.map((tier, tierIndex) => (
                            <div
                              key={tierIndex}
                              className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-semibold">{tier.amount}</span>
                                {tier.discount && (
                                  <Badge variant="secondary" className="text-xs">
                                    {tier.discount}
                                  </Badge>
                                )}
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-primary">{tier.price}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Link href="/pricing">
                            <Button className="w-full glow-effect">Get Started Now</Button>
                          </Link>
                        </div>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Trusted by <span className="gradient-text">100,000+</span> Gamers
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Join the thousands of satisfied customers who have transformed their Xbox presence with our professional
              services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="glow-effect">
                  View All Pricing
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Support
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
