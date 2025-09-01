"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Gamepad2 } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">X6AA</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/services" className="hover-text-fix transition-colors">
                Services
              </Link>
              <Link href="/pricing" className="hover-text-fix transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="hover-text-fix transition-colors">
                Documentation
              </Link>
              <Link href="/about" className="hover-text-fix transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover-text-fix transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button className="glow-effect">Get Started</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-b border-border">
            <Link href="/services" className="block px-3 py-2 hover-text-fix">
              Services
            </Link>
            <Link href="/pricing" className="block px-3 py-2 hover-text-fix">
              Pricing
            </Link>
            <Link href="/docs" className="block px-3 py-2 hover-text-fix">
              Documentation
            </Link>
            <Link href="/about" className="block px-3 py-2 hover-text-fix">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 hover-text-fix">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <Link href="/login">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
