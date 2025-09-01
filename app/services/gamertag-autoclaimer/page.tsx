import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function GamertagAutoclaimerPage() {
  const features = [
    { icon: Shield, title: "Auto Detection", description: "Monitors gamertag availability 24/7" },
    { icon: Zap, title: "Instant Claiming", description: "Claims gamertags within seconds" },
    { icon: CheckCircle, title: "Custom Lists", description: "Monitor your desired gamertags" },
    { icon: Star, title: "Success Rate", description: "High success rate for claims" },
  ]

  const packages = [
    {
      duration: "1 Day",
      originalPrice: 14.99,
      price: 9.99,
      popular: false,
      discount: 33,
    },
    {
      duration: "3 Days",
      originalPrice: 37.99,
      price: 24.99,
      popular: true,
      discount: 34,
    },
    {
      duration: "1 Week",
      originalPrice: 74.99,
      price: 49.99,
      popular: false,
      discount: 33,
    },
    {
      duration: "1 Month",
      originalPrice: 114.99,
      price: 75.99,
      popular: false,
      discount: 34,
    },
    {
      duration: "Lifetime",
      originalPrice: 224.99,
      price: 149.99,
      popular: false,
      discount: 33,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Advanced Automation</Badge>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                    <span className="gradient-text">Gamertag</span>
                    <br />
                    <span className="text-foreground">Autoclaimer Bot</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-balance">
                    Automatically claim rare gamertags the moment they become available. Never miss out on premium
                    gamertags again with 24/7 monitoring.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="lg:pl-8">
                <img
                  src="/gamertag-autoclaimer-bot.png"
                  alt="Gamertag Autoclaimer Bot"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Choose Your Duration</h2>
              <p className="text-muted-foreground">Select monitoring period for gamertag autoclaiming</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`p-6 text-center space-y-4 relative ${pkg.popular ? "ring-2 ring-primary" : ""}`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <div>
                    <h3 className="text-xl font-bold">{pkg.duration}</h3>
                    <p className="text-muted-foreground text-sm">Bot Access</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">${pkg.price}</div>
                    <p className="text-sm text-green-500">
                      Save ${(pkg.originalPrice - pkg.price).toFixed(2)} ({pkg.discount}% OFF)
                    </p>
                  </div>
                  <Link href={`/checkout?service=gamertag-autoclaimer&duration=${pkg.duration}&price=${pkg.price}`}>
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      Order Now
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Bot Capabilities</h2>
              <p className="text-muted-foreground">Advanced gamertag monitoring and claiming features</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">24/7 Monitoring</h3>
                <p className="text-muted-foreground">Continuous monitoring of gamertag availability</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Instant Claiming</h3>
                <p className="text-muted-foreground">Claims gamertags within seconds of availability</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Custom Watchlists</h3>
                <p className="text-muted-foreground">Monitor specific gamertags you want to claim</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Success Notifications</h3>
                <p className="text-muted-foreground">Instant alerts when gamertags are successfully claimed</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground">Automated gamertag claiming process</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Setup Watchlist</h3>
                <p className="text-muted-foreground">Add desired gamertags to monitoring list</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">24/7 Monitoring</h3>
                <p className="text-muted-foreground">Bot continuously checks gamertag availability</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Auto Claim</h3>
                <p className="text-muted-foreground">Instantly claims gamertags when they become available</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
