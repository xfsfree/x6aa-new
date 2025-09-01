import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text-animated text-glow">Contact Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team. We're here to help you dominate Xbox like never before.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 gradient-bg glass-effect border-glow">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold gradient-text">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input placeholder="John" className="glass-effect border-glow" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input placeholder="Doe" className="glass-effect border-glow" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="john@example.com" className="glass-effect border-glow" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input placeholder="How can we help you?" className="glass-effect border-glow" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        placeholder="Tell us about your Xbox optimization needs..."
                        rows={6}
                        className="glass-effect border-glow"
                      />
                    </div>
                    <Button className="w-full pulse-glow neon-glow">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 gradient-bg-intense glass-effect border-glow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold gradient-text">Email</h3>
                      <p className="text-sm text-muted-foreground">support@x6aa.com</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-bg-intense glass-effect border-glow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold gradient-text">Live Chat</h3>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 pulse-glow"></div>
                        Available 24/7
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-bg-intense glass-effect border-glow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary via-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold gradient-text">Response Time</h3>
                      <p className="text-sm text-muted-foreground">Usually within 2 minutes</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-bg glass-effect border-glow">
                <div className="space-y-4">
                  <h3 className="font-semibold gradient-text">Business Hours</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>24/7</span>
                    </div>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">Always Available</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
