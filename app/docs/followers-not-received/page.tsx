"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertCircle, CheckCircle, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FollowersNotReceivedPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/docs"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>Articles</span>
            <span>&gt;</span>
            <span>Help and FAQs</span>
            <span>&gt;</span>
            <span>Xbox Services</span>
            <span>&gt;</span>
            <span>Followers not received</span>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Xbox Followers Not Received - What to Do</h1>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">Xbox Services</Badge>
            <Badge variant="outline">Troubleshooting</Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="p-8 gradient-bg glass-effect border-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">Understanding Xbox Followers Delivery</h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold text-green-600">Normal Delivery Process</h3>
                </div>
                <p className="text-muted-foreground">
                  Xbox followers are typically delivered <strong>instantly</strong> after your payment is confirmed. You
                  should see the followers appear on your Xbox profile within minutes of completing your purchase.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <h3 className="font-semibold text-amber-600">Why Delays Can Occur</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Sometimes delivery can take up to <strong>24 hours</strong> due to security measures and verification
                  processes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>
                      <strong>Bank Review:</strong> Your bank may flag the transaction for security review
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>
                      <strong>Payment Processor Review:</strong> Stripe may hold the payment for verification
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>
                      <strong>Xbox Server Issues:</strong> Temporary Xbox Live service disruptions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>
                      <strong>High Demand:</strong> During peak times, processing may be slower
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-bg glass-effect border-glow">
            <h2 className="text-2xl font-semibold gradient-text mb-6">Step-by-Step Troubleshooting</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Check Your Xbox Profile Settings</h3>
                  <p className="text-muted-foreground mb-2">
                    Ensure your Xbox profile is set to <strong>Public</strong>:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Go to Xbox Settings → Privacy & Online Safety</li>
                    <li>• Select "View details & customize"</li>
                    <li>
                      • Set "Others can see your profile" to <strong>Everyone</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wait the Full 24 Hours</h3>
                  <p className="text-muted-foreground">
                    Even if delivery is usually instant, security reviews can take up to 24 hours. Please wait the full
                    time period before contacting support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Refresh Your Profile</h3>
                  <p className="text-muted-foreground mb-2">Try these steps to refresh your follower count:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Sign out and back into your Xbox account</li>
                    <li>• Restart your Xbox console or Xbox app</li>
                    <li>• Check your profile from a different device</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Verify Your Order Details</h3>
                  <p className="text-muted-foreground mb-2">Double-check that you provided the correct information:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Xbox gamertag spelling is exactly correct</li>
                    <li>• Payment was successfully processed</li>
                    <li>• You received an order confirmation email</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-bg glass-effect border-glow">
            <h2 className="text-2xl font-semibold gradient-text mb-6">When to Contact Support</h2>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Contact our support team if you still haven't received your followers after:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <h3 className="font-semibold text-red-600 mb-2">Immediate Contact Required</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Payment was charged but no confirmation email received</li>
                    <li>• Error message during checkout process</li>
                    <li>• Incorrect gamertag was processed</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-600 mb-2">Wait 24 Hours First</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Payment successful but followers not delivered</li>
                    <li>• Profile is public but count hasn't updated</li>
                    <li>• Partial delivery (some but not all followers)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h3 className="font-semibold text-blue-600 mb-2">Information to Include When Contacting Support</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Your order confirmation number</li>
                  <li>• Xbox gamertag used in the order</li>
                  <li>• Date and time of purchase</li>
                  <li>• Screenshot of your current follower count</li>
                  <li>• Any error messages you received</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-bg-intense glass-effect border-glow text-center">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Need More Help?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to help resolve any issues with your Xbox followers order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="pulse-glow">
                  Contact Support
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="glass-effect border-glow bg-transparent">
                  Back to Documentation
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
