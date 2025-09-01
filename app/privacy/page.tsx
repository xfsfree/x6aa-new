import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Database, UserCheck, Users, MessageSquare } from "lucide-react"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text-animated text-glow">Privacy Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <Badge className="bg-primary/20 text-primary border-primary/30">Last Updated: April 24, 2025</Badge>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Introduction</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  X6AA ("we," "us," or "our") is committed to safeguarding your privacy. This Privacy Policy explains
                  how we collect, use, disclose, and protect your information when you use our website and Xbox profile
                  optimization tools.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                  <Eye className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We may collect the following types of information:</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Personal Information</h4>
                      <p>Xbox gamertag provided during service purchases.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Usage Data</h4>
                      <p>
                        Information about your interactions with our website, such as IP address, browser type, and
                        pages visited.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Communication Data</h4>
                      <p>Information you provide when contacting us via email, Discord, or other channels.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Deliver our Xbox profile optimization tools, such as profile visibility enhancements and gamertag
                    reservations.
                  </li>
                  <li>Process payments and manage your account.</li>
                  <li>Respond to your inquiries or provide customer support.</li>
                  <li>Analyze usage data to improve our website and services.</li>
                  <li>Comply with applicable legal obligations.</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-primary via-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Data Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement industry-standard security measures, including encryption, to protect your information.
                  However, no method of transmission over the internet is completely secure, and we cannot guarantee
                  absolute security.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-sm">SSL Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Secure Payment Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Regular Security Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Access Controls</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Sharing Your Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>We do not sell or share your personal information with third parties, except:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    With trusted service providers (e.g., payment processors) who operate under strict confidentiality
                    agreements.
                  </li>
                  <li>When required by law or to protect our legal rights.</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center pulse-glow">
                  <UserCheck className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Your Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access or request a copy of the data we hold about you.</li>
                  <li>Request correction or deletion of your personal information.</li>
                  <li>Opt out of marketing communications at any time.</li>
                  <li>Object to or restrict certain types of data processing.</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us via our Contact Us page.</p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg glass-effect border-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center pulse-glow">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Changes to This Policy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                  updated "Last updated" date, and we will notify you of significant changes where required.
                </p>
              </div>
            </Card>

            <Card className="p-8 gradient-bg-intense glass-effect border-glow">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold gradient-text">Privacy Questions?</h3>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us.
                </p>
                <Badge className="bg-primary/20 text-primary border-primary/30">privacy@x6aa.com</Badge>
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
