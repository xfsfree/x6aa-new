import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Hash, Bot, DollarSign, ImageIcon, ArrowRight } from "lucide-react"
import Link from "next/link"

const serviceCategories = [
  {
    title: "Xbox Profile Services",
    description: "Boost your Xbox presence with followers, friends, and gamerscore",
    icon: Users,
    services: [
      {
        name: "Xbox Followers",
        description: "Authentic followers from 1K to 1M",
        price: "From $2.99",
        popular: true,
      },
      {
        name: "Friend Requests",
        description: "Expand your Xbox network rapidly",
        price: "From $2.99",
        popular: true,
      },
      {
        name: "Xbox Gamerscore",
        description: "Boost your gaming achievements",
        price: "From $9.99",
        popular: false,
      },
    ],
    href: "/services/xbox-profile",
  },
  {
    title: "Rare Gamertags",
    description: "Secure exclusive 2-4 character premium gamertags",
    icon: Hash,
    services: [
      {
        name: "4-Character (with digit)",
        description: "Example: kd8d",
        price: "$19.99",
        popular: false,
      },
      {
        name: "4-Letter Only",
        description: "Example: jkdo",
        price: "$57.99",
        popular: true,
      },
      {
        name: "3-Character Premium",
        description: "Letters only",
        price: "$245.99",
        popular: false,
      },
      {
        name: "2-Letter Premium",
        description: "Ultimate exclusivity",
        price: "$2,445.99",
        popular: false,
      },
    ],
    href: "/services/gamertags",
  },
  {
    title: "Discord Automation Bots",
    description: "Powerful Discord bots for gaming automation",
    icon: Bot,
    services: [
      {
        name: "LFG Post Spammer",
        description: "Automated LFG posting",
        price: "From $9.99",
        popular: false,
      },
      {
        name: "Follower Boost Manager",
        description: "Send followers to any gamertag",
        price: "From $9.99",
        popular: true,
      },
      {
        name: "Message Spammer",
        description: "Automated messaging tool",
        price: "From $9.99",
        popular: false,
      },
      {
        name: "Gamertag Autoclaimer",
        description: "Auto-claim rare gamertags",
        price: "From $9.99",
        popular: false,
      },
    ],
    href: "/services/discord-bots",
  },
  {
    title: "Game Currency",
    description: "Boost your in-game wealth across popular titles",
    icon: DollarSign,
    services: [
      {
        name: "GTA 5 Cash",
        description: "Xbox & PlayStation money",
        price: "From $24.99",
        popular: true,
      },
      {
        name: "Forza 5 Credits",
        description: "Forza Horizon 5 credits",
        price: "From $15.99",
        popular: false,
      },
    ],
    href: "/services/game-currency",
  },
  {
    title: "Premium Extras",
    description: "Exclusive Xbox customization options",
    icon: ImageIcon,
    services: [
      {
        name: "Classic Xbox Profile Picture",
        description: "Rare Xbox 360-style pictures",
        price: "$4.99",
        popular: false,
      },
    ],
    href: "/services/extras",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="gradient-text">Complete Xbox</span>
                <br />
                <span className="text-foreground">Optimization Suite</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Everything you need to dominate Xbox gaming. Professional services trusted by over 100,000 gamers
                worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <div key={index} className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold">{category.title}</h2>
                          <p className="text-muted-foreground text-lg">{category.description}</p>
                        </div>
                      </div>
                      <Link href={category.href}>
                        <Button variant="outline" className="hidden sm:flex bg-transparent">
                          View All
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <Card
                          key={serviceIndex}
                          className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
                        >
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <h3 className="font-semibold text-lg">{service.name}</h3>
                              {service.popular && (
                                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                            <div className="text-2xl font-bold text-primary">{service.price}</div>
                          </div>
                        </Card>
                      ))}
                    </div>

                    <div className="text-center sm:hidden">
                      <Link href={category.href}>
                        <Button variant="outline">
                          View All {category.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Ready to <span className="gradient-text">Enhance Your Xbox</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Join over 15,000+ satisfied customers who trust X6AA for their Xbox optimization needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="glow-effect">
                  View Pricing
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Sales
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
