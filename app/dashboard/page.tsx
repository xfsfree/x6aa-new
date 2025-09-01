import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Clock, CheckCircle, Bot, DollarSign, Settings, Download, RefreshCw } from "lucide-react"
import Link from "next/link"

const recentOrders = [
  {
    id: "X6AA-ABC123",
    service: "Xbox Followers",
    tier: "5K",
    status: "completed",
    price: 12.99,
    date: "2024-01-15",
    deliveryTime: "8 minutes",
  },
  {
    id: "X6AA-DEF456",
    service: "Rare Gamertag",
    tier: "4-Letter Only",
    status: "processing",
    price: 57.99,
    date: "2024-01-14",
    deliveryTime: "Pending",
  },
  {
    id: "X6AA-GHI789",
    service: "GTA 5 Cash",
    tier: "100M",
    status: "completed",
    price: 24.99,
    date: "2024-01-12",
    deliveryTime: "12 minutes",
  },
]

const activeServices = [
  {
    name: "Follower Boost Manager",
    type: "Discord Bot",
    plan: "Lifetime",
    status: "active",
    expiresAt: "Never",
    usage: "2,450 followers sent this month",
  },
  {
    name: "LFG Post Spammer",
    type: "Discord Bot",
    plan: "Monthly",
    status: "active",
    expiresAt: "2024-02-15",
    usage: "156 posts sent this month",
  },
]

const accountStats = [
  { label: "Total Orders", value: "23", icon: ShoppingBag },
  { label: "Active Services", value: "2", icon: Bot },
  { label: "Total Spent", value: "$342.87", icon: DollarSign },
  { label: "Member Since", value: "Dec 2023", icon: Clock },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Header */}
        <section className="py-12 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Welcome back, <span className="gradient-text">John</span>
                </h1>
                <p className="text-muted-foreground mt-2">Manage your Xbox optimization services and orders</p>
              </div>
              <Link href="/pricing">
                <Button className="glow-effect">Order New Service</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accountStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      </div>
                      <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main Dashboard Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="orders" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 max-w-md">
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
              </TabsList>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Recent Orders</h2>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <Card key={order.id} className="p-6 bg-card/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold">{order.service}</h3>
                            <Badge
                              variant={order.status === "completed" ? "default" : "secondary"}
                              className={
                                order.status === "completed"
                                  ? "bg-green-500/10 text-green-400"
                                  : "bg-yellow-500/10 text-yellow-400"
                              }
                            >
                              {order.status === "completed" ? (
                                <CheckCircle className="h-3 w-3 mr-1" />
                              ) : (
                                <Clock className="h-3 w-3 mr-1" />
                              )}
                              {order.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Order #{order.id}</span>
                            <span>•</span>
                            <span>{order.tier}</span>
                            <span>•</span>
                            <span>{order.date}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">Delivery time: {order.deliveryTime}</div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="text-2xl font-bold text-primary">${order.price}</div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Receipt
                            </Button>
                            {order.status === "processing" && (
                              <Button variant="outline" size="sm">
                                Track Order
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Services Tab */}
              <TabsContent value="services" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Active Services</h2>
                  <Link href="/pricing">
                    <Button>Add New Service</Button>
                  </Link>
                </div>

                <div className="space-y-4">
                  {activeServices.map((service, index) => (
                    <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold">{service.name}</h3>
                            <Badge className="bg-green-500/10 text-green-400">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {service.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{service.type}</span>
                            <span>•</span>
                            <span>{service.plan} Plan</span>
                            <span>•</span>
                            <span>Expires: {service.expiresAt}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{service.usage}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4 mr-2" />
                            Manage
                          </Button>
                          <Button variant="outline" size="sm">
                            Extend
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Account Tab */}
              <TabsContent value="account" className="space-y-6">
                <h2 className="text-2xl font-bold">Account Settings</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6 bg-card/50 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Name</label>
                        <p className="text-foreground">John Doe</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <p className="text-foreground">john.doe@example.com</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                        <p className="text-foreground">December 2023</p>
                      </div>
                      <Button variant="outline">Edit Profile</Button>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Security</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Password</label>
                        <p className="text-foreground">••••••••</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Two-Factor Authentication</label>
                        <p className="text-muted-foreground">Not enabled</p>
                      </div>
                      <div className="space-y-2">
                        <Button variant="outline">Change Password</Button>
                        <Button variant="outline">Enable 2FA</Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Billing</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Payment Method</label>
                        <p className="text-foreground">•••• •••• •••• 4242</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Billing Address</label>
                        <p className="text-foreground">123 Main St, City, State 12345</p>
                      </div>
                      <Button variant="outline">Update Billing</Button>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4">Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Email Notifications</label>
                        <p className="text-foreground">Order updates, promotions</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Theme</label>
                        <p className="text-foreground">Dark mode</p>
                      </div>
                      <Button variant="outline">Manage Preferences</Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
