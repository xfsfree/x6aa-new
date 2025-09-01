import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function FollowerBoostManagerPage() {
  const features = [
    { icon: Shield, title: "Safe Operation", description: "No account risks involved" },
    { icon: Zap, title: "Instant Sending", description: "Send followers immediately" },
    { icon: CheckCircle, title: "Any Gamertag", description: "Target any Xbox gamertag" },
    { icon: Star, title: "Bulk Support", description: "Send to multiple accounts" },
  ]

  const packages = [
    { duration: "1 Day", originalPrice: 14.99, price: 9.99, popular: false, discount: 33 },
    { duration: "3 Days", originalPrice: 29.99, price: 19.99, popular: false, discount: 33 },
    { duration: "1 Week", originalPrice: 44.99, price: 29.99, popular: false, discount: 33 },
    { duration: "1 Month", originalPrice: 59.99, price: 39.99, popular: true, discount: 33 },
    { duration: "Lifetime", originalPrice: 149.99, price: 99.99, popular: false, discount: 33 },
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
                  <Badge className="bg-primary/10 text-primary border-primary/20">Most Popular Bot</Badge>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                    <span className="gradient-text">Follower Boost</span>
                    <br />
                    <span className="text-foreground">Manager Bot</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-balance">
                    Send Xbox followers to any gamertag instantly with our powerful Discord bot. Perfect for boosting
                    friends or managing multiple accounts.
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
                  src="/follower-boost-manager.png"
                  alt="Follower Boost Manager Bot"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Choose Your Duration</h2>
              <p className="text-muted-foreground">Select the perfect timeframe for follower management</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {packages.map((pkg, index) => (
                <Card key={index} className={`p-6 text-center space-y-4 ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                  {pkg.popular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
                  <div>
                    <h3 className="text-2xl font-bold">{pkg.duration}</h3>
                    <p className="text-muted-foreground">Bot Access</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                      <span className="text-3xl font-bold text-primary">${pkg.price}</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      Save ${(pkg.originalPrice - pkg.price).toFixed(2)} ({pkg.discount}% OFF)
                    </p>
                  </div>
                  <Link href={`/checkout?service=follower-boost-manager&duration=${pkg.duration}&price=${pkg.price}`}>
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
              <p className="text-muted-foreground">Powerful features for follower management</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Cross-Platform Access</h3>
                <p className="text-muted-foreground">Use on both mobile and PC - Discord bot works everywhere</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Daily Limits</h3>
                <p className="text-muted-foreground">Send 5K followers on weekdays, 10K on weekends</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Unlimited Usage</h3>
                <p className="text-muted-foreground">No restrictions on how often you can use the bot</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Any Xbox Gamertag</h3>
                <p className="text-muted-foreground">Target any Xbox gamertag - no limitations</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Bulk Operations</h3>
                <p className="text-muted-foreground">Send followers to multiple gamertags simultaneously</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Queue System</h3>
                <p className="text-muted-foreground">Queue multiple boost requests for automated processing</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground">Simple Discord bot setup and usage</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Get Bot Access</h3>
                <p className="text-muted-foreground">Purchase bot access and receive Discord invite</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Use Commands</h3>
                <p className="text-muted-foreground">Simple Discord commands to send followers</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Instant Results</h3>
                <p className="text-muted-foreground">Followers delivered to target gamertags immediately</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
