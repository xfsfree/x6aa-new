import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle,
  Globe,
  Users,
  CreditCard,
  Scale,
  UserX,
  Gavel,
} from "lucide-react"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text-animated text-glow">Terms of Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using X6AA services.
            </p>
            <Badge className="bg-primary/20 text-primary border-primary/30">Last Updated: April 25, 2025</Badge>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">1. Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing or using X6AA ("Service"), you agree to be bound by these Terms of Service ("Terms"). If
                  you do not agree with any part of these Terms, you must not use the Service. X6AA reserves the right
                  to update these Terms at any time, with changes effective upon posting on this page. Your continued
                  use of the Service constitutes acceptance of the updated Terms.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">2. Eligibility</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You must be at least 18 years old or have the consent of a parent or legal guardian to use the
                  Service. By using the Service, you represent and warrant that you meet these eligibility requirements
                  and have the legal capacity to enter into these Terms.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">3. Service Description</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  X6AA provides premium Xbox profile optimization tools, including but not limited to profile visibility
                  enhancement, achievement enhancement, gamertag reservation, and profile picture customization. These
                  services are provided "as-is" by X6AA, an independent third-party provider not affiliated with,
                  endorsed by, or sponsored by Microsoft or Xbox. We do not guarantee specific outcomes, uninterrupted
                  access, or compatibility with Xbox platform updates.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Xbox Profile Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Discord Bot Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Game Currency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Premium Gamertags</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center pulse-glow">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">4. Restricted Countries and Regions</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  "Forbidden Territory" means any jurisdiction where our Services are not available including but not
                  limited to: Cuba, Iran, North Korea, Syria, Crimea, Donetsk, Luhansk, Afghanistan, Burundi, Central
                  African Republic, Congo Republic, Democratic Republic of Congo, Eritrea, Guinea, Guinea-Bissau, Iraq,
                  Israel, Laos, Lebanon, Liberia, Libya, Myanmar, Palestinian Territory, Papua New Guinea, South Sudan,
                  Sudan, Somalia, Vanuatu, Venezuela, and Yemen.
                </p>
                <p>
                  Due to restrictions imposed by our payment processor, Stripe, and compliance with international
                  regulations, individuals or entities located in these Forbidden Territories are prohibited from
                  purchasing or using the Service. Any attempt to access or purchase the Service from these regions is
                  strictly prohibited and may result in immediate termination of access without refund.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center pulse-glow">
                  <Scale className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">5. Fair Use Policy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  X6AA are intended for personal, non-commercial use in accordance with their intended purpose. To
                  ensure a fair and equitable experience for all users, the following activities are prohibited:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Engaging in fraudulent, deceptive, or malicious activities, including misrepresentation of identity
                    or intent
                  </li>
                  <li>Attempting to disrupt, overload, or bypass our systems, security measures, or rate limits</li>
                  <li>Reselling, redistributing, or sharing access to our tools without express written permission</li>
                  <li>
                    Using the Service to violate Xbox Community Standards, including but not limited to spamming,
                    harassment, or unauthorized account manipulation
                  </li>
                  <li>
                    Engaging in excessive or abusive use of tools, such as mass messaging or automated actions, that may
                    negatively impact other users or the Xbox platform
                  </li>
                </ul>
                <p>
                  Violations of this Fair Use Policy may result in immediate suspension or termination of your access to
                  the Service without refund. X6AA reserves the right to monitor usage to enforce this policy.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center pulse-glow">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">6. User Responsibilities</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Providing accurate and complete information, such as your Xbox gamertag, email, or other required
                    details, to enable service delivery
                  </li>
                  <li>
                    Ensuring your use of the Service complies with Xbox Community Standards and all applicable local,
                    national, and international laws
                  </li>
                  <li>
                    Maintaining the confidentiality of any account information, access codes, or tools provided by X6AA
                  </li>
                  <li>Notifying us immediately of any unauthorized use of your account or tools</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center pulse-glow">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">7. Risk Acknowledgment</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Use of third-party services, including those provided by X6AA, may violate Xbox's Community Standards
                  and carries a risk of account restrictions, suspensions, or bans by Microsoft. By using the Service,
                  you acknowledge and accept full responsibility for any actions taken by Microsoft or Xbox against your
                  account. X6AA is not liable for any such consequences, including loss of account access, data, or
                  purchased services.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center pulse-glow">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">8. Payments and Refunds</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All payments are processed securely through encrypted channels via third-party payment processors,
                  including Stripe. By purchasing a service, you agree to our Refund Policy. Prices are subject to
                  change without notice, and you are responsible for any additional fees, such as taxes or currency
                  conversion charges, imposed by your payment provider.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center pulse-glow">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">9. Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content, tools, and materials provided by X6AA, including but not limited to text, graphics, code,
                  and software, are the property of X6AA or its licensors and are protected by copyright, trademark, and
                  other intellectual property laws. You may not reproduce, distribute, modify, or create derivative
                  works from our content without prior written permission.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center pulse-glow">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">10. Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, X6AA shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages arising from your use of the Service, including but not
                  limited to loss of account access, data, or profits. Our total liability for any claim shall not
                  exceed the amount paid by you for the Service. The Service is provided "as-is" without warranties of
                  any kind, express or implied.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center pulse-glow">
                  <UserX className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">11. Termination</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to suspend or terminate your access to the Service at our sole discretion, with
                  or without notice, for any reason, including but not limited to violation of these Terms, the Fair Use
                  Policy, or Xbox Community Standards. Upon termination, you will lose access to any purchased tools or
                  services, and no refunds will be provided unless specified in our Refund Policy.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center pulse-glow">
                  <Gavel className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">12. Governing Law & Dispute Resolution</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These Terms are governed by and construed in accordance with the laws of the State of Delaware, United
                  States, without regard to its conflict of law principles. Any disputes arising from these Terms shall
                  be resolved exclusively in the state or federal courts located in Delaware.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of the Service shall be resolved through good-faith
                  negotiation. If negotiation fails, disputes shall be submitted to binding arbitration in Delaware
                  under the rules of the American Arbitration Association. You waive any right to participate in a class
                  action lawsuit or class-wide arbitration.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg-intense glass-effect border-glow">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold gradient-text">Questions About These Terms?</h3>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact our support team.
                </p>
                <Badge className="bg-primary/20 text-primary border-primary/30">support@x6aa.com</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
