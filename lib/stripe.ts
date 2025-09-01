// Stripe configuration and utilities
export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || ""

// Service pricing configuration
export const PRICING_CONFIG = {
  "xbox-followers": {
    "1K": { price: 299, currency: "usd" }, // $2.99 in cents
    "5K": { price: 1299, currency: "usd" },
    "10K": { price: 2499, currency: "usd" },
    "50K": { price: 11999, currency: "usd" },
    "100K": { price: 22999, currency: "usd" },
    "1M": { price: 199999, currency: "usd" },
  },
  "friend-requests": {
    "1K": { price: 299, currency: "usd" },
    "5K": { price: 1299, currency: "usd" },
    "10K": { price: 2499, currency: "usd" },
    "50K": { price: 11999, currency: "usd" },
    "100K": { price: 22999, currency: "usd" },
    "1M": { price: 199999, currency: "usd" },
  },
  "xbox-gamerscore": {
    "50K": { price: 999, currency: "usd" },
    "100K": { price: 1899, currency: "usd" },
    "250K": { price: 4499, currency: "usd" },
    "500K": { price: 8499, currency: "usd" },
    "1M": { price: 15999, currency: "usd" },
  },
  "rare-gamertags": {
    "4-char-digit": { price: 1999, currency: "usd" },
    "4-letter": { price: 5799, currency: "usd" },
    "3-char-digit": { price: 19599, currency: "usd" },
    "3-letter": { price: 24599, currency: "usd" },
    "2-letter": { price: 244599, currency: "usd" },
    pronounceable: { price: 42599, currency: "usd" },
  },
  "discord-bots": {
    "lfg-day": { price: 999, currency: "usd" },
    "lfg-week": { price: 1999, currency: "usd" },
    "lfg-month": { price: 3999, currency: "usd" },
    "lfg-lifetime": { price: 9999, currency: "usd" },
    "follower-manager-day": { price: 999, currency: "usd" },
    "follower-manager-week": { price: 1999, currency: "usd" },
    "follower-manager-month": { price: 2999, currency: "usd" },
    "follower-manager-lifetime": { price: 7599, currency: "usd" },
  },
  "game-currency": {
    "gta-10m": { price: 1499, currency: "usd" },
    "gta-100m": { price: 2499, currency: "usd" },
    "gta-500m": { price: 5399, currency: "usd" },
    "forza-10m": { price: 999, currency: "usd" },
    "forza-100m": { price: 1599, currency: "usd" },
    "forza-1b": { price: 3999, currency: "usd" },
  },
  extras: {
    "classic-picture": { price: 499, currency: "usd" },
  },
}

// Utility function to format price for display
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

// Utility function to get service price
export function getServicePrice(category: string, tier: string): number | null {
  const categoryPricing = PRICING_CONFIG[category as keyof typeof PRICING_CONFIG]
  if (!categoryPricing) return null

  const tierPricing = categoryPricing[tier as keyof typeof categoryPricing]
  return tierPricing?.price || null
}
