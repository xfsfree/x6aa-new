import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Trophy, Zap, Shield, Gamepad2, Star, Crown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(96,165,250,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.05),transparent_70%)]" />

      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-glow"></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-full pulse-glow"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4 slide-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              <span className="gradient-text-animated text-glow">Enhance Your Xbox</span>
              <br />
              <span className="text-foreground">Gaming Experience</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Professional Xbox enhancement services trusted by over{" "}
              <span className="gradient-text font-semibold">15,000+ gamers</span> worldwide. Improve your profile,
              access rare gamertags, and elevate your gaming presence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="/services">
              <Button size="lg" className="text-lg px-8 py-6 pulse-glow neon-glow relative overflow-hidden group">
                <span className="relative z-10">Explore Services</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 glass-effect border-glow hover:bg-primary/10 transition-all bg-transparent"
              >
                View Pricing
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap justify-center items-center gap-8 pt-8 text-muted-foreground slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <div className="h-6 w-6 bg-transparent flex items-center justify-center">
                <Users className="h-5 w-5 text-primary pulse-glow" />
              </div>
              <span className="font-medium">15,000+ Customers</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <div className="h-6 w-6 bg-transparent flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary pulse-glow" style={{ animationDelay: "0.5s" }} />
              </div>
              <span className="font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <div className="h-6 w-6 bg-transparent flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary pulse-glow" style={{ animationDelay: "1s" }} />
              </div>
              <span className="font-medium">Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <div className="h-6 w-6 bg-transparent flex items-center justify-center">
                <Trophy className="h-5 w-5 text-primary pulse-glow" style={{ animationDelay: "1.5s" }} />
              </div>
              <span className="font-medium">Premium Quality</span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 float-effect group cursor-pointer">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent flex items-center justify-center pulse-glow">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold gradient-text">Xbox Followers</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Grow your Xbox profile with authentic followers from 1K to 1M. Starting at just{" "}
                <span className="text-primary font-semibold">$2.99 per 1K</span>.
              </p>
              <div className="flex items-center gap-1 text-primary">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm text-muted-foreground ml-2">Most Popular</span>
              </div>
            </div>
          </Card>

          <Card
            className="p-6 gradient-bg-intense glass-effect border-glow hover:neon-glow transition-all duration-500 float-effect group cursor-pointer"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="space-y-4">
              <div
                className="h-12 w-12 bg-gradient-to-br from-accent to-primary flex items-center justify-center pulse-glow"
                style={{ animationDelay: "0.5s" }}
              >
                <Crown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold gradient-text">Rare Gamertags</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Access exclusive 2-4 character gamertags. From{" "}
                <span className="text-primary font-semibold">$19.99</span> for 4-digit to{" "}
                <span className="text-accent font-semibold">$2,445.99</span> for 2-letter premium tags.
              </p>
              <div className="flex items-center gap-1 text-accent">
                <Crown className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">Premium Exclusive</span>
              </div>
            </div>
          </Card>

          <Card
            className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 float-effect group cursor-pointer"
            style={{ animationDelay: "1s" }}
          >
            <div className="space-y-4">
              <div
                className="h-12 w-12 bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center pulse-glow"
                style={{ animationDelay: "1s" }}
              >
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold gradient-text">Discord Tools</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Helpful automation tools including LFG assistants, follower growth managers, and messaging tools.
                <span className="text-primary font-semibold"> Mobile & PC compatible</span>.
              </p>
              <div className="flex items-center gap-1 text-primary">
                <Zap className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">Instant Access</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
