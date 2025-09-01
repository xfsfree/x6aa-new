import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Target, Hash, Check, Shield, Zap, Smartphone, Monitor } from "lucide-react"
import Link from "next/link"

const discordBots = [
  {
    icon: MessageSquare,
    title: "LFG Post Spammer",
    description:
      "Automated Discord bot for posting LFG (Looking For Group) messages across multiple servers and channels.",
    features: [
      "Works on both mobile and PC",
      "Multi-server posting capability",
      "Customizable message templates",
      "Automated scheduling",
      "Anti-spam detection bypass",
    ],
    pricing: [
      { duration: "1 Day", price: "$9.99" },
      { duration: "1 Week", price: "$19.99", popular: false },
      { duration: "1 Month", price: "$39.99", popular: true },
      { duration: "Lifetime", price: "$99.99", popular: false },
    ],
    useCases: [
      "Find gaming teammates quickly",
      "Promote your gaming community",
      "Recruit for competitive teams",
      "Organize gaming events",
    ],
  },
  {
    icon: Target,
    title: "Follower Boost Manager",
    description:
      "Send Xbox followers to any gamertag using simple Discord slash commands. Perfect for boosting profiles on demand.",
    features: [
      "Send 5K followers on weekdays",
      "Send 10K followers on weekends",
      "Target any Xbox gamertag",
      "Simple slash command interface",
      "Real-time delivery tracking",
    ],
    pricing: [
      { duration: "1 Day", price: "$9.99" },
      { duration: "1 Week", price: "$19.99", popular: false },
      { duration: "1 Month", price: "$29.99", popular: true },
      { duration: "Lifetime", price: "$75.99", popular: false },
    ],
    useCases: [
      "Boost client profiles instantly",
      "Manage multiple Xbox accounts",
      "Provide follower services",
      "Test follower delivery systems",
    ],
  },
  {
    icon: Hash,
    title: "Gamertag Autoclaimer",
    description:
      "Advanced tool that automatically claims rare gamertags the moment they become available on Xbox Live.",
    features: [
      "24/7 automated monitoring",
      "Instant claiming capability",
      "Custom gamertag watchlists",
      "Priority claiming queue",
      "Success rate tracking",
    ],
    pricing: [
      { duration: "1 Day", price: "$9.99" },
      { duration: "1 Week", price: "$19.99", popular: false },
      { duration: "1 Month", price: "$39.99", popular: true },
      { duration: "Lifetime", price: "$149.99", popular: false },
    ],
    useCases: [
      "Claim rare gamertags automatically",
      "Monitor gamertag availability",
      "Build gamertag inventory",
      "Secure premium usernames",
    ],
  },
  {
    icon: MessageSquare,
    title: "Message Spammer",
    description:
      "Versatile Discord bot for sending custom messages to users with full control over content and frequency.",
    features: [
      "Custom message content",
      "Unlimited message quantity",
      "Target specific users",
      "Delay and timing controls",
      "Multi-platform compatibility",
    ],
    pricing: [
      { duration: "1 Day", price: "$9.99" },
      { duration: "1 Week", price: "$19.99", popular: false },
      { duration: "1 Month", price: "$29.99", popular: true },
      { duration: "Lifetime", price: "$59.99", popular: false },
    ],
    useCases: ["Automated customer outreach", "Event notifications", "Community announcements", "Marketing campaigns"],
  },
]

export default function DiscordBotsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="gradient-text">Discord Automation</span>
                <br />
                <span className="text-foreground">Bots</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Powerful Discord bots that work on both mobile and PC to automate your gaming workflows and boost your
                Xbox presence.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-primary" />
                  <span>Mobile Compatible</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-primary" />
                  <span>PC Compatible</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discord Bots */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {discordBots.map((bot, index) => {
                const Icon = bot.icon
                const popularPlan = bot.pricing.find((plan) => plan.popular)
                return (
                  <div key={index} className="space-y-12">
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold">{bot.title}</h2>
                      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{bot.description}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Features */}
                      <Card className="p-8 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                        <div className="space-y-4">
                          {bot.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </Card>

                      {/* Pricing */}
                      <Card className="p-8 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-6">Pricing Options</h3>
                        <div className="space-y-3">
                          {bot.pricing.map((plan, planIndex) => (
                            <div
                              key={planIndex}
                              className={`p-4 rounded-lg border transition-all ${
                                plan.popular
                                  ? "border-primary/50 bg-primary/5"
                                  : "border-border bg-muted/30 hover:bg-muted/50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold">{plan.duration}</span>
                                  {plan.popular && (
                                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                                <span className="font-bold text-primary">{plan.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Link href="/pricing">
                            <Button className="w-full">Get Started</Button>
                          </Link>
                        </div>
                      </Card>

                      {/* Use Cases */}
                      <Card className="p-8 bg-card/50 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-6">Perfect For</h3>
                        <div className="space-y-4">
                          {bot.useCases.map((useCase, useCaseIndex) => (
                            <div key={useCaseIndex} className="flex items-start gap-3">
                              <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Zap className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground text-sm">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>
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
                How Our <span className="gradient-text">Discord Bots</span> Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Simple setup process gets you automated in minutes, not hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold">Choose Your Bot</h3>
                  <p className="text-muted-foreground text-sm">
                    Select the Discord bot that fits your automation needs.
                  </p>
                </div>
              </Card>

              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold">Select Duration</h3>
                  <p className="text-muted-foreground text-sm">Pick from daily, weekly, monthly, or lifetime access.</p>
                </div>
              </Card>

              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold">Instant Access</h3>
                  <p className="text-muted-foreground text-sm">Get immediate access to your bot after payment.</p>
                </div>
              </Card>

              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-primary">4</span>
                  </div>
                  <h3 className="font-semibold">Start Automating</h3>
                  <p className="text-muted-foreground text-sm">Begin using powerful automation on mobile or PC.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Ready to <span className="gradient-text">Automate</span> Your Gaming?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Join thousands of gamers using our Discord bots to streamline their Xbox optimization workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="glow-effect">
                  Get Your Bot Now
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline">
                  View Documentation
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
