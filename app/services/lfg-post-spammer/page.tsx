import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function LFGPostSpammerPage() {
  const features = [
    { icon: Shield, title: "Discord Safe", description: "Compliant with Discord ToS" },
    { icon: Zap, title: "Auto Posting", description: "Automated LFG message posting" },
    { icon: CheckCircle, title: "Customizable", description: "Custom messages and timing" },
    { icon: Star, title: "24/7 Active", description: "Continuous operation" },
  ]

  const packages = [
    { duration: "1 Day", price: 9.99, popular: false },
    { duration: "3 Days", price: 24.99, popular: false },
    { duration: "1 Week", price: 29.99, popular: true, savings: "17%" },
    { duration: "1 Month", price: 39.99, popular: false, savings: "46%" },
    { duration: "Lifetime", price: 145.99, popular: false, savings: "75%" },
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
                  <Badge className="bg-primary/10 text-primary border-primary/20">Discord Automation</Badge>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                    <span className="gradient-text">LFG Post</span>
                    <br />
                    <span className="text-foreground">Automation Bot</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-balance">
                    Automate your Discord LFG posting with our intelligent bot. Find gaming partners efficiently with
                    automated message posting.
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
                  src="/discord-bot-lfg.png"
                  alt="LFG Post Spammer Bot"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video Demonstration Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">See It In Action</h2>
              <p className="text-muted-foreground">Watch how our LFG automation bot works in real Discord servers</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted/20">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="LFG Post Spammer Bot Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Live demonstration of the bot posting LFG messages across multiple Discord servers
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Choose Your Duration</h2>
              <p className="text-muted-foreground">Select the perfect timeframe for your LFG automation</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <Card key={index} className={`p-6 text-center space-y-4 ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                  {pkg.popular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
                  <div>
                    <h3 className="text-2xl font-bold">{pkg.duration}</h3>
                    <p className="text-muted-foreground">Bot Access</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold">${pkg.price}</span>
                    {pkg.savings && <p className="text-sm text-green-500">Save {pkg.savings}</p>}
                  </div>
                  <Link href={`/checkout?service=lfg-post-spammer&duration=${pkg.duration}&price=${pkg.price}`}>
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
              <p className="text-muted-foreground">Everything you need for effective LFG automation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Custom Messages</h3>
                <p className="text-muted-foreground">
                  Create personalized LFG messages for different games and activities
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Smart Timing</h3>
                <p className="text-muted-foreground">Intelligent posting intervals to avoid spam detection</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Multi-Server</h3>
                <p className="text-muted-foreground">Post across multiple Discord servers simultaneously</p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Game Detection</h3>
                <p className="text-muted-foreground">
                  Automatically detect what game you're playing and post accordingly
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground">Simple setup process for Discord LFG automation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Purchase Access</h3>
                <p className="text-muted-foreground">Choose your duration and complete payment</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Setup Bot</h3>
                <p className="text-muted-foreground">Configure messages and Discord server settings</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Auto Posting</h3>
                <p className="text-muted-foreground">Bot automatically posts LFG messages for you</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
