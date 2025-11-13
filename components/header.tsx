"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    product: false,
    solutions: false,
    company: false
  })

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleSection = (section: 'product' | 'solutions' | 'company') => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    })
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.4 14.2L16 2L7.6 14.2L16 26.4L24.4 14.2Z" 
              fill="currentColor" 
              className="text-[#00E699]"/>
          </svg>
          <span className="text-xl font-semibold text-white">SaaS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/products" className="text-sm text-neutral-300 hover:text-[#00E699] transition-colors">
            Products
          </Link>
          <Link href="/solutions" className="text-sm text-neutral-300 hover:text-[#00E699] transition-colors">
            Solutions
          </Link>
          <Link href="/docs" className="text-sm text-neutral-300 hover:text-[#00E699] transition-colors">
            Docs
          </Link>
          <Link href="/pricing" className="text-sm text-neutral-300 hover:text-[#00E699] transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm text-neutral-300 hover:text-[#00E699] transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-sm text-neutral-300 hover:text-[#00E699] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm text-neutral-300 hover:text-[#00E699] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop login buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button className="bg-[#ffffff] hover:bg-[#00cc88]" variant="ghost" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button className="bg-[#00E699] hover:bg-[#ffffff] text-black font-medium" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          
          {/* Mobile menu toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-white" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black border-t border-neutral-800 z-50 overflow-hidden transition-all duration-300 ease-in-out">
          <div className="container py-4 flex flex-col gap-4">
            {/* Navigation Links */}
            <div className="border-b border-neutral-800 pb-4 flex flex-col gap-2">
              <Link href="/products" className="text-white py-2 hover:text-[#00E699] transition-colors">
                Products
              </Link>
              <Link href="/solutions" className="text-white py-2 hover:text-[#00E699] transition-colors">
                Solutions
              </Link>
              <Link href="/docs" className="text-white py-2 hover:text-[#00E699] transition-colors">
                Docs
              </Link>
              <Link href="/pricing" className="text-white py-2 hover:text-[#00E699] transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-white py-2 hover:text-[#00E699] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-white py-2 hover:text-[#00E699] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-white py-2 hover:text-[#00E699] transition-colors">
                Contact
              </Link>
            </div>

            {/* Auth buttons on mobile */}
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex gap-2">
                <Button className="flex-1 bg-[#ffffff] hover:bg-[#00cc88]" variant="ghost" asChild>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button className="flex-1 bg-[#00E699] hover:bg-[#ffffff] text-black font-medium" asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
