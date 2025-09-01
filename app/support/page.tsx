import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Clock, CheckCircle, AlertCircle, Headphones, Zap, Crown } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text-animated text-glow">Support Center</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get help when you need it. Our expert support team is here 24/7 to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 gradient-bg-intense glass-effect border-glow hover:neon-glow transition-all duration-500 text-center">
              <div className="space-y-4">
                <div className="h-16 w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto pulse-glow">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Live Chat</h3>
                <p className="text-muted-foreground">Get instant help from our support team</p>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 pulse-glow"></div>
                  Online Now
                </Badge>
                <Button className="w-full pulse-glow">Start Chat</Button>
              </div>
            </Card>

            <Card className="p-8 gradient-bg-intense glass-effect border-glow hover:neon-glow transition-all duration-500 text-center">
              <div className="space-y-4">
                <div
                  className="h-16 w-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto pulse-glow"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Email Support</h3>
                <p className="text-muted-foreground">Send us a detailed message</p>
                <Badge variant="secondary">
                  <Clock className="w-3 h-3 mr-1" />
                  24h Response
                </Badge>
                <Button variant="outline" className="w-full glass-effect border-glow bg-transparent">
                  Send Email
                </Button>
              </div>
            </Card>

            <Card className="p-8 gradient-bg-intense glass-effect border-glow hover:neon-glow transition-all duration-500 text-center">
              <div className="space-y-4">
                <div
                  className="h-16 w-16 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center mx-auto pulse-glow"
                  style={{ animationDelay: "1s" }}
                >
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold gradient-text">Priority Support</h3>
                <p className="text-muted-foreground">Premium customers get priority</p>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  <Crown className="w-3 h-3 mr-1" />
                  VIP Access
                </Badge>
                <Button variant="outline" className="w-full glass-effect border-glow bg-transparent">
                  Upgrade
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold gradient-text">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input placeholder="Your name" className="glass-effect border-glow" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your@email.com" className="glass-effect border-glow" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="How can we help?" className="glass-effect border-glow" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Describe your issue or question in detail..."
                      rows={6}
                      className="glass-effect border-glow"
                    />
                  </div>
                  <Button className="w-full pulse-glow neon-glow">
                    Send Message
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>

            {/* Support Stats & Info */}
            <div className="space-y-6">
              <Card className="p-6 gradient-bg-intense glass-effect border-glow">
                <h3 className="text-lg font-semibold gradient-text mb-4">Support Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Average Response Time</span>
                    <Badge className="bg-green-500/20 text-green-400">
                      <Zap className="w-3 h-3 mr-1" />2 minutes
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Customer Satisfaction</span>
                    <Badge className="bg-blue-500/20 text-blue-400">98.5%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Issues Resolved</span>
                    <Badge className="bg-purple-500/20 text-purple-400">99.2%</Badge>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-bg glass-effect border-glow">
                <h3 className="text-lg font-semibold gradient-text mb-4">Before You Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Check our documentation for quick answers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Have your order number ready if applicable</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Include screenshots if reporting an issue</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-bg glass-effect border-glow">
                <h3 className="text-lg font-semibold gradient-text mb-4">Emergency Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent issues affecting your services, use our priority support channel.
                </p>
                <Button variant="destructive" className="w-full pulse-glow">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Emergency Contact
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
