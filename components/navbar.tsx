"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Plane, Map, Globe, Hotel, Compass, Phone, Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center outfit3 justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center outfit3 gap-2">
            <Plane className={`h-8 w-8 ${isScrolled ? "text-teal-500" : "text-white"} `} />
            <span className={`text-xl ${isScrolled ? "bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent" : "text-white"} regular2 font-bold `}>
              WanderLuxe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center outfit3 space-x-1">
            <Link
              href="/destinations"
              className={`${isScrolled ? "text-gray-700" : "text-white"} text-sm px-4 py-2 outfit3  hover:text-teal-600 font-medium transition-colors`}
            >
              Destinations
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`px-4  py-2 text-sm outfit3 ${isScrolled ? "text-gray-700" : "text-white"} hover:text-teal-600 font-medium transition-colors flex items-center outfit3 gap-1`}>
                  Services <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className={`w-48 outfit3 text-gray-700`}>
                <DropdownMenuItem>
                  <Plane className="mr-2 h-4 w-4 " /> Flights
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Hotel className="mr-2 h-4 w-4" /> Hotels
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Map className="mr-2 h-4 w-4" /> Tours
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Compass className="mr-2 h-4 w-4" /> Adventures
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/deals" className={` px-4 py-2 ${isScrolled ? "text-gray-700" : "text-white"} text-sm hover:text-teal-600 font-medium transition-colors`}>
              Special Deals
            </Link>

            <Link href="/about" className={` px-4 py-2 ${isScrolled ? "text-gray-700" : "text-white"} text-sm hover:text-teal-600 font-medium transition-colors`}>
              About Us
            </Link>

            <Link href="/contact" className={` px-4 py-2 ${isScrolled ? "text-gray-700" : "text-white"} text-sm hover:text-teal-600 font-medium transition-colors`}>
              Contact
            </Link>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center outfit3 space-x-4">
            {isSearchOpen ? (
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-64 pr-8"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <X
                  className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 cursor-pointer"
                  onClick={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-700 hover:text-teal-600 transition-colors"
              >
                <Search className={`${isScrolled ? "text-gray-700" : "text-white"} h-5 w-5`} />
              </button>
            )}

            <Button variant="ghost" size="sm" className={`${isScrolled ? "text-gray-700" : "text-white"}  hover:text-teal-600`}>
              <Phone className="h-4 w-4 mr-2" />
              +1 (555) 123-4567
            </Button>

            <Button className="bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-700 hover:to-blue-600 text-white border-0">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <div className="relative mb-4">
              <Input type="text" placeholder="Search destinations..." className="w-full pr-8" />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-gray-500" />
            </div>

            <Link
              href="/destinations"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
            >
              Destinations
            </Link>

            <div className="px-4 py-2">
              <div className="flex justify-between items-center text-gray-700 font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="mt-2 ml-4 space-y-2">
                <Link href="/flights" className="flex items-center outfit3 py-1 text-gray-600">
                  <Plane className="mr-2 h-4 w-4" /> Flights
                </Link>
                <Link href="/hotels" className="flex items-center outfit3 py-1 text-gray-600">
                  <Hotel className="mr-2 h-4 w-4" /> Hotels
                </Link>
                <Link href="/tours" className="flex items-center outfit3 py-1 text-gray-600">
                  <Map className="mr-2 h-4 w-4" /> Tours
                </Link>
                <Link href="/adventures" className="flex items-center outfit3 py-1 text-gray-600">
                  <Compass className="mr-2 h-4 w-4" /> Adventures
                </Link>
              </div>
            </div>

            <Link href="/deals" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Special Deals
            </Link>

            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              About Us
            </Link>

            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
              Contact
            </Link>

            <div className="pt-2 flex flex-col space-y-3">
              <div className="px-4 flex items-center outfit3 text-gray-700">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>

              <Button className="bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-700 hover:to-blue-600 text-white border-0 w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
