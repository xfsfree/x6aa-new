"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, CheckCircle, DollarSign, ArrowLeft, AlertTriangle, FileText, Users } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function RefundPolicyPage() {
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
            <span>Support</span>
            <span>&gt;</span>
            <span>Refund policy</span>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Refund Policy</h1>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">Support</Badge>
            <Badge variant="outline">Policy</Badge>
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
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">Our Commitment</h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                At X6AA, we are dedicated to providing high-quality Xbox profile optimization tools. If our services do
                not meet your expectations, we offer refunds under specific conditions outlined below. All refund
                requests must be submitted within 14 days of purchase to ensure a fair and timely review.
              </p>
            </div>
          </Card>

          <Card className="p-8 gradient-bg glass-effect border-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">Eligibility for Refunds</h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <h3 className="font-semibold text-green-600 mb-3">
                  You may be eligible for a refund under the following circumstances:
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Non-Delivery:</strong> The service was not delivered within the agreed timeframe due to
                      issues on our end.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Service Failure:</strong> The service did not perform as described (e.g., profile
                      visibility or achievement enhancements not applied).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Technical Issues:</strong> The service could not be applied due to technical limitations
                      on our end, provided accurate account details were submitted.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <h3 className="font-semibold text-red-600 mb-3">Refunds will not be granted for:</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      User errors, such as providing incorrect account details or failing to follow setup instructions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Change of mind after the service has been initiated or completed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Account restrictions, suspensions, or bans imposed by Microsoft, as outlined in our Terms of
                      Service.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-bg glass-effect border-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">Refund Process</h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                To request a refund, please submit your request via our Contact Us page. Include your order details,
                such as the transaction ID, and a brief explanation of the issue. Our support team will review your
                request within 48 hours and notify you of the outcome. Approved refunds will be processed within 5-7
                business days to the original payment method.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                    1
                  </div>
                  <h3 className="font-semibold text-blue-600 mb-2">Submit Request</h3>
                  <p className="text-sm text-muted-foreground">Contact us with order details and issue explanation</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                    2
                  </div>
                  <h3 className="font-semibold text-purple-600 mb-2">Review Process</h3>
                  <p className="text-sm text-muted-foreground">We review within 48 hours and notify you of outcome</p>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                    3
                  </div>
                  <h3 className="font-semibold text-green-600 mb-2">Refund Processing</h3>
                  <p className="text-sm text-muted-foreground">Approved refunds processed within 5-7 business days</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-bg glass-effect border-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">Partial Refunds</h2>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                If a service is partially delivered (e.g., partial profile visibility enhancement), we may, at our
                discretion, offer a partial refund proportional to the undelivered portion of the service.
              </p>
            </div>
          </Card>

          <Card className="p-8 gradient-bg glass-effect border-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">Chargebacks</h2>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                We encourage you to contact our support team before initiating a chargeback. Unauthorized chargebacks
                may result in suspension of your access to X6AA. Our team is here to resolve any issues promptly and
                fairly.
              </p>
            </div>
          </Card>

          <Card className="p-8 gradient-bg-intense glass-effect border-glow text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold gradient-text">Contact Us</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Have questions about our refund policy or need to request a refund? Our support team is here to help.
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

      <Footer />
    </div>
  )
}
