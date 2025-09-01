import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Shield, Zap, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function ClassicXboxProfilePicturePage() {
  const features = [
    { icon: Shield, title: "Authentic", description: "Original Xbox 360 style pictures" },
    { icon: Zap, title: "Instant Setup", description: "Applied to your profile immediately" },
    { icon: CheckCircle, title: "Rare Collection", description: "Exclusive vintage designs" },
    { icon: Star, title: "Permanent", description: "Keep forever once applied" },
  ]

  const packages = [
    {
      name: "Random Classic",
      originalPrice: 7.99,
      price: 4.99,
      popular: false,
      description: "Get a random Xbox 360 style profile picture",
      discount: 38,
    },
    {
      name: "Choose Your Own",
      originalPrice: 11.99,
      price: 7.99,
      popular: true,
      description: "Select from our collection of classic designs",
      discount: 33,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Nostalgic Collection</Badge>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                    <span className="gradient-text">Classic Xbox</span>
                    <br />
                    <span className="text-foreground">Profile Pictures</span>
                  </h1>
                  <p className="text-xl text-muted-foreground text-balance">
                    Get rare square Xbox 360-style profile pictures that are no longer available. Stand out with
                    authentic vintage Xbox designs.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="lg:pl-8">
                <img
                  src="/xbox-360-profile-picture.png"
                  alt="Classic Xbox Profile Picture"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Choose Your Package</h2>
              <p className="text-muted-foreground">Select the perfect classic profile picture option</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`p-6 text-center space-y-4 relative ${pkg.popular ? "ring-2 ring-primary" : ""}`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-muted-foreground line-through">${pkg.originalPrice}</span>
                    </div>
                    <div className="text-3xl font-bold text-primary">${pkg.price}</div>
                    <p className="text-sm text-green-500">
                      Save ${(pkg.originalPrice - pkg.price).toFixed(2)} ({pkg.discount}% OFF)
                    </p>
                  </div>
                  <Link href={`/checkout?service=classic-xbox-profile-picture&package=${pkg.name}&price=${pkg.price}`}>
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      Order Now
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Classic Designs</h2>
              <p className="text-muted-foreground">Examples of authentic Xbox 360 style profile pictures</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item} className="p-4 text-center">
                  <div className="aspect-square bg-muted rounded-lg mb-2 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">Classic Design {item}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="text-muted-foreground">Simple process to get your classic Xbox profile picture</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Choose Package</h3>
                <p className="text-muted-foreground">Select random or custom option</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Provide Gamertag</h3>
                <p className="text-muted-foreground">Share your Xbox gamertag for picture application</p>
              </div>

              <div className="text-center space-y-4">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Get Picture</h3>
                <p className="text-muted-foreground">Classic profile picture applied to your Xbox account</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
