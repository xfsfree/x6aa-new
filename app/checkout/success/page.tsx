import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="h-24 w-24 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-balance">
                  <span className="gradient-text">Order Confirmed!</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                  Thank you for your purchase! Your order has been received and is being processed.
                </p>
              </div>

              <Card className="p-8 bg-card/50 backdrop-blur-sm text-left max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Order Details</h2>
                    <Badge className="bg-green-500/10 text-green-500">Processing</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order ID:</span>
                      <span className="font-mono">#X6AA-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span>Xbox Followers - 5K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Paid:</span>
                      <span className="font-semibold text-primary">$13.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Delivery:</span>
                      <span>5-15 minutes</span>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 bg-card/50 backdrop-blur-sm text-center">
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Processing Started</h3>
                    <p className="text-muted-foreground text-sm">
                      Your order is now in our processing queue and will begin delivery shortly.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm text-center">
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Email Confirmation</h3>
                    <p className="text-muted-foreground text-sm">
                      A confirmation email with your order details has been sent to your inbox.
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm text-center">
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">24/7 Support</h3>
                    <p className="text-muted-foreground text-sm">
                      Our support team is available if you have any questions about your order.
                    </p>
                  </div>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What Happens Next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <span>Order processing begins immediately</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <span>Delivery starts within 5-15 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <span>You'll receive completion notification</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button size="lg" className="glow-effect">
                    View Order Status
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
