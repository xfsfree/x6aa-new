import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function MessageSpammerPage() {
  const features = [
    { icon: Shield, title: "Rate Limited", description: "Smart delays to avoid detection" },
    { icon: Zap, title: "Fast Messaging", description: "Efficient message delivery" },
    { icon: CheckCircle, title: "Custom Content", description: "Personalized message templates" },
    { icon: Star, title: "Multi-Target", description: "Message multiple users" },
  ]

  const packages = [
    { duration: "1 Day", originalPrice: 14.99, price: 9.99, popular: false, discount: 33 },
    { duration: "3 Days", originalPrice: 37.99, price: 24.99, popular: false, discount: 34 },
    { duration: "1 Week", originalPrice: 44.99, price: 29.99, popular: true, discount: 33 },
    { duration: "1 Month", originalPrice: 59.99, price: 39.99, popular: false, discount: 33 },
    { duration: "Lifetime", originalPrice: 89.99, price: 59.99, popular: false, discount: 33 },
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
                  <Badge className="bg-primary/10 text-primary border-primary/20">Communication Tool</Badge>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                    <span className="gradient-text">Message</span>
                    <br />
                    <span className="text-foreground">Automation Bot</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-balance">
                    Automate your Discord messaging with our intelligent bot. Send bulk messages efficiently with smart
                    rate limiting.
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
                  src="/message-spammer-discord.png"
                  alt="Message Spammer Bot"
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
              <p className="text-muted-foreground">Select the perfect timeframe for message automation</p>
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
                  <Link href={`/checkout?service=message-spammer&duration=${pkg.duration}&price=${pkg.price}`}>
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
              <h2 className="text-3xl font-bold">Bot Features</h2>
              <p className="text-muted-foreground">Advanced messaging automation capabilities</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Smart Rate Limiting</h3>
                <p className="text-muted-foreground">Intelligent delays between messages to avoid Discord limits</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Template System</h3>
                <p className="text-muted-foreground">Create and save custom message templates for reuse</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Bulk Messaging</h3>
                <p className="text-muted-foreground">Send messages to multiple users or channels at once</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Scheduling</h3>
                <p className="text-muted-foreground">Schedule messages to be sent at specific times</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground">Simple setup for Discord message automation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Purchase Access</h3>
                <p className="text-muted-foreground">Choose duration and get Discord bot invite</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Configure Messages</h3>
                <p className="text-muted-foreground">Set up message templates and target lists</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Auto Send</h3>
                <p className="text-muted-foreground">Bot automatically sends messages per your settings</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
