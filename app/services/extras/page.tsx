import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Check, Shield, Zap, Star, Search, Download } from "lucide-react"
import Link from "next/link"

export default function ExtrasPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                <span className="gradient-text">Premium Xbox</span>
                <br />
                <span className="text-foreground">Extras</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Exclusive Xbox customization options that are no longer available through official channels.
              </p>
            </div>
          </div>
        </section>

        {/* Classic Xbox Profile Pictures */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <h2 className="text-3xl sm:text-4xl font-bold">Classic Xbox Profile Pictures</h2>
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Exclusive
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Get rare square Xbox 360-style profile pictures that are no longer obtainable through Xbox Live. These
                  classic profile pictures give your account a unique, nostalgic look that stands out from modern
                  circular avatars.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Features */}
                <Card className="p-8 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-6">What Makes Them Special</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        Original Xbox 360 square format - impossible to get officially
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">Over 32,000+ unique pictures to choose from</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">
                        Nostalgic appeal that makes your profile stand out
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">Permanent addition to your Xbox profile</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">Safe and secure application process</span>
                    </div>
                  </div>
                </Card>

                {/* Pricing */}
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 ring-2 ring-primary/10">
                  <div className="text-center space-y-6">
                    <h3 className="text-xl font-semibold">Simple Pricing</h3>
                    <div className="space-y-2">
                      <div className="text-5xl font-bold text-primary">$4.99</div>
                      <div className="text-muted-foreground">per picture</div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <div className="text-sm font-semibold mb-2">What's Included:</div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>• Access to 32,000+ pictures</div>
                          <div>• Professional application</div>
                          <div>• Lifetime ownership</div>
                          <div>• Customer support</div>
                        </div>
                      </div>
                    </div>
                    <Link href="/pricing">
                      <Button className="w-full glow-effect">Choose Your Picture</Button>
                    </Link>
                  </div>
                </Card>

                {/* How It Works */}
                <Card className="p-8 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-6">How It Works</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Browse Collection</div>
                        <div className="text-muted-foreground text-sm">
                          Access our database of 32,000+ classic Xbox 360 profile pictures
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">2</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Select Picture</div>
                        <div className="text-muted-foreground text-sm">
                          Choose your favorite from our curated collection
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">3</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Secure Payment</div>
                        <div className="text-muted-foreground text-sm">Complete your $4.99 purchase securely</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">4</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Professional Application</div>
                        <div className="text-muted-foreground text-sm">
                          We apply the picture to your Xbox profile safely
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Picture Categories */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                <span className="gradient-text">Picture Categories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Browse through our extensive collection organized by themes and styles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Gaming Themes</h3>
                  <p className="text-muted-foreground text-sm">
                    Classic gaming characters, logos, and iconic imagery from the Xbox 360 era.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Abstract Art</h3>
                  <p className="text-muted-foreground text-sm">
                    Unique abstract designs and patterns that give your profile a distinctive look.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Retro Styles</h3>
                  <p className="text-muted-foreground text-sm">
                    Nostalgic designs that capture the essence of classic Xbox gaming culture.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Custom Options</h3>
                  <p className="text-muted-foreground text-sm">
                    Special requests and custom picture applications for unique preferences.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Classic Pictures */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                Why Choose <span className="gradient-text">Classic Pictures</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Exclusive Rarity</h3>
                  <p className="text-muted-foreground">
                    These square profile pictures are impossible to obtain through official Xbox channels anymore.
                  </p>
                </div>
              </Card>

              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Stand Out</h3>
                  <p className="text-muted-foreground">
                    Make your Xbox profile unique with a classic look that differentiates you from other gamers.
                  </p>
                </div>
              </Card>

              <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Instant Nostalgia</h3>
                  <p className="text-muted-foreground">
                    Bring back the golden age of Xbox 360 gaming with authentic retro profile aesthetics.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Ready to Get Your <span className="gradient-text">Classic Picture</span>?
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Join the exclusive club of gamers with rare Xbox 360-style profile pictures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" className="glow-effect">
                  Browse Pictures ($4.99)
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Custom Request
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
