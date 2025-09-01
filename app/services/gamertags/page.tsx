import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Hash, Crown, Diamond, Star, Check, Shield, Zap } from "lucide-react"
import Link from "next/link"

const gamertagTiers = [
  {
    title: "4-Character with Digit",
    description: "Premium 4-character gamertags containing at least one digit",
    price: "$19.99",
    example: "kd8d, x7m9, g4me",
    icon: Hash,
    popular: false,
    features: [
      "4 characters total",
      "Contains at least 1 digit",
      "Instant availability check",
      "Secure transfer process",
      "Lifetime ownership",
    ],
    rarity: "Common",
    rarityColor: "text-blue-400",
  },
  {
    title: "4-Letter Only",
    description: "Exclusive 4-letter gamertags with no numbers or special characters",
    price: "$57.99",
    example: "jkdo, kfjr, opfj",
    icon: Hash,
    popular: true,
    features: [
      "4 letters only",
      "No numbers or symbols",
      "Premium selection available",
      "Professional transfer service",
      "Guaranteed authenticity",
    ],
    rarity: "Rare",
    rarityColor: "text-purple-400",
  },
  {
    title: "3-Character with Digit",
    description: "Ultra-rare 3-character gamertags containing at least one digit",
    price: "$195.99",
    example: "x7m, g4m, k8d",
    icon: Diamond,
    popular: false,
    features: [
      "3 characters total",
      "Contains at least 1 digit",
      "Extremely limited availability",
      "Priority support included",
      "Certificate of authenticity",
    ],
    rarity: "Epic",
    rarityColor: "text-orange-400",
  },
  {
    title: "3-Letter Only",
    description: "Legendary 3-letter gamertags - the pinnacle of Xbox exclusivity",
    price: "$245.99",
    example: "lkf, dzd, ltf",
    icon: Crown,
    popular: false,
    features: [
      "3 letters only",
      "No numbers or symbols",
      "Ultimate exclusivity",
      "VIP transfer service",
      "Lifetime support guarantee",
    ],
    rarity: "Legendary",
    rarityColor: "text-yellow-400",
  },
  {
    title: "2-Letter Premium",
    description: "The ultimate in Xbox prestige - ultra-exclusive 2-letter gamertags",
    price: "$2,445.99",
    example: "ku, rb, va",
    icon: Crown,
    popular: false,
    features: [
      "2 letters only",
      "Maximum exclusivity",
      "Personal consultation included",
      "White-glove transfer service",
      "Exclusive customer status",
    ],
    rarity: "Mythic",
    rarityColor: "text-red-400",
  },
  {
    title: "Pronounceable Words",
    description: "Rare pronounceable word gamertags that are memorable and unique",
    price: "$425.99",
    example: "million, savage, subway",
    icon: Star,
    popular: true,
    features: [
      "Real English words",
      "Easy to remember",
      "Professional appearance",
      "Curated selection",
      "Premium support",
    ],
    rarity: "Epic",
    rarityColor: "text-orange-400",
  },
]

export default function GamertagsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="gradient-text">Rare Xbox</span>
                <br />
                <span className="text-foreground">Gamertags</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Secure the most exclusive Xbox gamertags available. From premium 4-character tags to ultra-rare 2-letter
                legends.
              </p>
            </div>
          </div>
        </section>

        {/* Gamertag Tiers */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gamertagTiers.map((tier, index) => {
                const Icon = tier.icon
                return (
                  <Card
                    key={index}
                    className={`p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 relative ${
                      tier.popular ? "ring-2 ring-primary/20" : ""
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <div className="space-y-6">
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{tier.title}</h3>
                          <p className="text-muted-foreground text-sm mt-2">{tier.description}</p>
                        </div>
                        <div className="space-y-2">
                          <div className="text-4xl font-bold text-primary">{tier.price}</div>
                          <div className={`text-sm font-semibold ${tier.rarityColor}`}>{tier.rarity}</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground mb-2">Examples:</div>
                          <div className="font-mono text-primary bg-primary/10 rounded-lg px-3 py-2 text-sm">
                            {tier.example}
                          </div>
                        </div>

                        <div className="space-y-3">
                          {tier.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Link href="/pricing">
                          <Button className="w-full">Secure This Gamertag</Button>
                        </Link>
                        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Shield className="h-3 w-3 text-primary" />
                            <span>Secure Transfer</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Zap className="h-3 w-3 text-primary" />
                            <span>Instant Check</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                How <span className="gradient-text">Gamertag Transfer</span> Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Our secure and professional process ensures you get your dream gamertag safely and quickly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Choose Your Gamertag</h3>
                  <p className="text-muted-foreground">
                    Select from our curated collection of rare and exclusive gamertags across all tiers.
                  </p>
                </div>
              </Card>

              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Secure Payment</h3>
                  <p className="text-muted-foreground">
                    Complete your purchase through our secure payment system with full buyer protection.
                  </p>
                </div>
              </Card>

              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Professional Transfer</h3>
                  <p className="text-muted-foreground">
                    Our team handles the secure transfer process, ensuring your new gamertag is ready to use.
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
              Ready to Claim Your <span className="gradient-text">Dream Gamertag</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Join thousands of gamers who have secured their perfect Xbox identity with our premium gamertag service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="glow-effect">
                  Browse Available Tags
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Custom Request
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
