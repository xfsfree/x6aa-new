import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Shield, Zap, Trophy, Crown, Gamepad2, Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text-animated text-glow">About X6AA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The leading Xbox optimization platform trusted by over 15,000+ gamers worldwide. We're revolutionizing how
              gamers enhance their Xbox experience.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-6 gradient-bg-intense glass-effect border-glow text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text-animated">15K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </Card>
            <Card className="p-6 gradient-bg-intense glass-effect border-glow text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text-animated">5M+</div>
                <div className="text-sm text-muted-foreground">Services Delivered</div>
              </div>
            </Card>
            <Card className="p-6 gradient-bg-intense glass-effect border-glow text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text-animated">99.8%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </Card>
            <Card className="p-6 gradient-bg-intense glass-effect border-glow text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text-animated">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold gradient-text">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower every Xbox gamer with professional-grade optimization tools that enhance their gaming
                  experience. We believe every gamer deserves to stand out in the Xbox community with a profile that
                  reflects their passion and dedication.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary border-primary/30">Innovation</Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30">Quality</Badge>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Trust</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold gradient-text">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the global standard for Xbox profile optimization, setting new benchmarks in service
                  quality, security, and customer satisfaction. We envision a gaming world where every player has access
                  to premium tools that elevate their Xbox experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/20 text-accent border-accent/30">Global Leader</Badge>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Premium Service</Badge>
                  <Badge className="bg-accent/20 text-accent border-accent/30">Excellence</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Why Choose X6AA?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another service provider. We're Xbox gaming enthusiasts who understand what gamers need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent flex items-center justify-center pulse-glow">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">100% Secure</h3>
                <p className="text-muted-foreground">
                  All our services use legitimate methods that comply with Xbox Terms of Service. Your account safety is
                  our top priority.
                </p>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-to-br from-accent to-primary flex items-center justify-center pulse-glow">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Most services are delivered instantly or within 24 hours. No waiting weeks for results - see changes
                  immediately.
                </p>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center pulse-glow">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We don't compromise on quality. Every service is delivered with the highest standards and attention to
                  detail.
                </p>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-to-br from-accent to-primary flex items-center justify-center pulse-glow">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our 24/7 support team consists of Xbox gaming experts who understand your needs and provide real
                  solutions.
                </p>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent flex items-center justify-center pulse-glow">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Over 15,000+ satisfied customers and 5 million services delivered with a 99.8% success rate speaks for
                  itself.
                </p>
              </div>
            </Card>

            <Card className="p-6 gradient-bg glass-effect border-glow hover:neon-glow transition-all duration-500 group">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center pulse-glow">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Gamer-Focused</h3>
                <p className="text-muted-foreground">
                  Built by gamers, for gamers. We understand the Xbox ecosystem and what it takes to stand out in the
                  community.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12 gradient-bg-intense glass-effect border-glow">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text-animated text-glow">Ready to Enhance Your Xbox?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join over 15,000+ gamers who trust X6AA to enhance their Xbox experience. Start your journey to Xbox
                greatness today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button size="lg" className="pulse-glow neon-glow">
                    Explore Services
                    <Gamepad2 className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="glass-effect border-glow bg-transparent">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
