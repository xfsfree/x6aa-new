"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertCircle, CheckCircle, Trophy, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GamerscoreNotReceivedPage() {
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
            <span>Gamerscore not received</span>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Xbox Gamerscore Not Received - Troubleshooting Guide
          </h1>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">Xbox Services</Badge>
            <Badge variant="outline">Troubleshooting</Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>4 min read</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="p-8 gradient-bg glass-effect border-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">Xbox Gamerscore Boost Delivery</h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold text-green-600">Instant Delivery</h3>
                </div>
                <p className="text-muted-foreground">
                  Xbox Gamerscore boosts are delivered <strong>instantly</strong> with no expected delays. The boost is
                  permanent and should appear immediately on your Xbox profile and dashboard.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold text-blue-600">How to Verify Your Gamerscore</h3>
                </div>
                <p className="text-muted-foreground mb-3">Check your gamerscore in multiple locations:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Xbox Dashboard (main profile display)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Xbox Profile page (detailed view)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Xbox mobile app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Xbox.com profile page</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-bg glass-effect border-glow">
            <h2 className="text-2xl font-semibold gradient-text mb-6">Troubleshooting Steps</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hard Refresh Your Profile</h3>
                  <p className="text-muted-foreground mb-2">Force your Xbox to update your profile data:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Sign out completely from your Xbox account</li>
                    <li>• Restart your Xbox console or close Xbox app</li>
                    <li>• Sign back in and check your profile</li>
                    <li>• Wait 2-3 minutes for profile sync</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Check Multiple Devices</h3>
                  <p className="text-muted-foreground">
                    Sometimes gamerscore updates appear on one device before others. Check your gamerscore on different
                    devices (Xbox console, mobile app, web browser) to see if it's updated anywhere.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Verify Your Gamertag</h3>
                  <p className="text-muted-foreground mb-2">Ensure the boost was applied to the correct account:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Double-check the gamertag spelling in your order</li>
                    <li>• Make sure you're signed into the correct Xbox account</li>
                    <li>• Verify you don't have multiple Xbox accounts</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Clear Xbox Cache</h3>
                  <p className="text-muted-foreground mb-2">Clear your Xbox cache to force a profile refresh:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Hold Xbox button for 10 seconds to fully shut down</li>
                    <li>• Unplug power cable for 30 seconds</li>
                    <li>• Plug back in and restart console</li>
                    <li>• Sign in and check your gamerscore</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-bg glass-effect border-glow">
            <h2 className="text-2xl font-semibold gradient-text mb-6">Still Not Showing?</h2>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                If your gamerscore still isn't showing after trying all troubleshooting steps, contact our support team
                immediately with:
              </p>

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h3 className="font-semibold text-blue-600 mb-2">Required Information for Support</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Your order confirmation number</li>
                  <li>• Xbox gamertag used in the order</li>
                  <li>• Current gamerscore (screenshot preferred)</li>
                  <li>• Expected gamerscore after boost</li>
                  <li>• Date and time of purchase</li>
                  <li>• Which troubleshooting steps you've tried</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold text-green-600">Our Guarantee</h3>
                </div>
                <p className="text-muted-foreground">
                  Gamerscore boosts are permanent and guaranteed. If there's any issue with your boost, we'll resolve it
                  immediately or provide a full refund.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-bg-intense glass-effect border-glow text-center">
            <h2 className="text-2xl font-semibold gradient-text mb-4">Need Immediate Help?</h2>
            <p className="text-muted-foreground mb-6">
              Gamerscore issues are rare but we're here to help resolve them quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="pulse-glow">
                  Contact Support Now
                </Button>
              </Link>
              <Link href="/services/xbox-gamerscore">
                <Button size="lg" variant="outline" className="glass-effect border-glow bg-transparent">
                  Order More Gamerscore
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
