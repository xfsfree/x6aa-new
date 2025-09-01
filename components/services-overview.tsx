"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, UserPlus, Trophy, Hash, Bot, DollarSign, Zap, MessageSquare, Target, ImageIcon } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Xbox Followers",
    description: "Boost your Xbox profile with authentic followers",
    basePrice: 2.99,
    unit: "1K",
    minimum: 1000,
    popular: true,
    image: "/xbox-followers-icon.png",
  },
  {
    icon: UserPlus,
    title: "Friend Requests",
    description: "Increase your Xbox friend network rapidly",
    basePrice: 2.99,
    unit: "1K",
    minimum: 1000,
    popular: true,
    image: "/friend-requests-gaming-icon.png",
  },
  {
    icon: Trophy,
    title: "Xbox Gamerscore",
    description: "Boost your gamerscore to show your gaming prowess",
    basePrice: 9.99,
    unit: "1K",
    minimum: 50000,
    popular: false,
    image: "/xbox-gamerscore-trophy.png",
  },
  {
    icon: Hash,
    title: "Rare Gamertags",
    description: "Secure exclusive 2-4 character premium gamertags",
    basePrice: 19.99,
    unit: "tag",
    minimum: 1,
    popular: true,
    image: "/rare-gamertag-premium.png",
  },
  {
    icon: Bot,
    title: "LFG Post Spammer",
    description: "Discord bot for automated LFG posting",
    basePrice: 9.99,
    unit: "day",
    minimum: 1,
    popular: false,
    image: "/discord-bot-lfg.png",
  },
  {
    icon: DollarSign,
    title: "GTA 5 Cash",
    description: "Get GTA 5 money for Xbox and PlayStation",
    basePrice: 24.99,
    unit: "100M",
    minimum: 100000000,
    popular: true,
    image: "/gta-5-money-cash.png",
  },
  {
    icon: Zap,
    title: "Forza 5 Credits",
    description: "Boost your Forza Horizon 5 credits instantly",
    basePrice: 15.99,
    unit: "50M",
    minimum: 50000000,
    popular: false,
    image: "/forza-horizon-5-credits.png",
  },
  {
    icon: Target,
    title: "Follower Boost Manager",
    description: "Discord bot to send followers to any gamertag",
    basePrice: 9.99,
    unit: "day",
    minimum: 1,
    popular: true,
    image: "/follower-boost-manager.png",
  },
  {
    icon: Bot,
    title: "Gamertag Autoclaimer",
    description: "Automatically claim rare gamertags as they become available",
    basePrice: 9.99,
    unit: "day",
    minimum: 1,
    popular: false,
    image: "/gamertag-autoclaimer-bot.png",
  },
  {
    icon: MessageSquare,
    title: "Message Spammer",
    description: "Discord bot for automated messaging",
    basePrice: 9.99,
    unit: "day",
    minimum: 1,
    popular: false,
    image: "/message-spammer-discord.png",
  },
  {
    icon: ImageIcon,
    title: "Classic Xbox Profile Picture",
    description: "Get rare square Xbox 360-style profile pictures",
    basePrice: 4.99,
    unit: "picture",
    minimum: 1,
    popular: false,
    image: "/xbox-360-profile-picture.png",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-white">
            <span className="gradient-text">Complete Xbox</span> Enhancement Suite
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance">
            Everything you need to enhance your Xbox gaming experience. From followers and rare gamertags to powerful
            Discord bots and game currency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Card
                key={index}
                className="service-card p-4 space-y-4 hover:scale-105 transition-transform duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-8 h-8 rounded-lg" />
                    {service.popular && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="text-muted-foreground text-sm text-white/80 line-clamp-2">{service.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Starting from</span>
                  <span className="price-display text-lg font-bold">${service.basePrice}</span>
                </div>

                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button className="w-full btn-outline-fixed bg-transparent" variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="glow-effect">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
