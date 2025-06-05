"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Calendar,
  Users,
  Search,
  Star,
  Wifi,
  Car,
  Coffee,
  FishIcon as Swimming,
  Utensils,
  Shield,
  Award,
  TrendingUp,
  Heart,
  Filter,
} from "lucide-react"

export default function SearchInterface() {
  const [isSearching, setIsSearching] = useState(false)
  const [activeTab, setActiveTab] = useState("stays")

  const handleSearch = async () => {
    setIsSearching(true)
    // Simulate search delay
    setTimeout(() => setIsSearching(false), 2000)
  }

  const popularDestinations = [
    { name: "Bali, Indonesia", image: "https://media.istockphoto.com/id/653953140/photo/hindu-temple-in-bali.jpg?b=1&s=612x612&w=0&k=20&c=omvqfHEWSwYf400InYZWkCpjL_zVOQhqVHvYad2rZwY=", rating: 4.8, price: "$89" },
    { name: "Tokyo, Japan", image: "https://wallpapercat.com/w/full/7/b/f/717538-1920x1080-desktop-1080p-tokyo-japan-background-photo.jpg", rating: 4.9, price: "$156" },
    { name: "Paris, France", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWU9gusrsTEFYCwDWc7H8hLg_bHA1gnNJHQ&s", rating: 4.7, price: "$134" },
    { name: "New York, USA", image: "https://wp-s.ru/wallpapers/2/8/379792061853877/lights-of-the-big-city-of-new-york.jpg", rating: 4.6, price: "$198" },
  ]

  const quickFilters = ["Beachfront", "City Center", "Pet Friendly", "Free WiFi", "Pool", "Parking"]

  return (
    <div className="min-h-screen  bg-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-md border rounded-full p-2">
            {["stays", "experiences", "flights"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full border ml-2 outfit3 text-sm font-medium transition-all duration-300 capitalize ${
                  activeTab === tab ? "bg-white text-gray-900 shadow-lg" : "text-black hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Search Form */}
        <section className="max-w-6xl mx-auto px-4">
        <Card className="bg-white/10  border rounded-2xl max-w-6xl mx-auto mb-12">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <label className="block outfit3 text-sm font-medium mb-2">Destination</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                  <Input
                    placeholder="Where to?"
                    className="pl-12 h-14 bg-white/20 outline-none border outfit placeholder:text-gray-300 rounded-xl text-lg font-medium hover:bg-white/25 focus:bg-white/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm font-medium mb-2 outfit3">Check-in</label>
                <div className="relative group">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                  <Input
                    type="date"
                    className="pl-12 h-14 bg-white/20 border text-gray-500 rounded-xl outfit text-lg font-medium hover:bg-white/25 focus:bg-white/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-sm font-medium mb-2 outfit3">Guests</label>
                <div className="relative group">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                  <Input
                    placeholder="Add guests"
                    className="pl-12 h-14 bg-white/20 border outfit placeholder:text-gray-300 rounded-xl text-lg font-medium hover:bg-white/25 focus:bg-white/30 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col justify-end">
                <Button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="h-14 bg-gradient-to-r from-orange-500 lexend to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-lg rounded-xl shadow-lg"
                >
                  {isSearching ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Searching...
                    </div>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Search
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-500 text-sm font-medium mr-4 outfit">Quick filters:</span>
                {quickFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant="secondary"
                    className="bg-rwhite text-gray-500 outfit3 border border-gray-200 cursor-pointer transition-all duration-200"
                  >
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Shield, label: "Verified Properties", value: "10K+" },
            { icon: Award, label: "5-Star Reviews", value: "50K+" },
            { icon: TrendingUp, label: "Happy Guests", value: "1M+" },
            { icon: Heart, label: "Saved Favorites", value: "500K+" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border text-center p-6 hover:bg-white/15 transition-all duration-300"
            >
              <stat.icon className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-500 mb-1 outfit">{stat.value}</div>
              <div className="text-gray-500 text-sm outfit3">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Popular Destinations */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-green-400 text-center regular2">Popular Destinations</h2>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Filter className="mr-2 h-4 w-4" />
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border overflow-hidden hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white border-0">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 outfit text-yellow-400" />
                      {destination.rating}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-gray-600 font-semibold text-lg outfit mb-2">{destination.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm outfit3">Starting from</span>
                    <span className="text-orange-400 font-bold text-xl outfit3">{destination.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: Wifi, label: "Free WiFi" },
            { icon: Car, label: "Free Parking" },
            { icon: Coffee, label: "Breakfast" },
            { icon: Swimming, label: "Pool Access" },
            { icon: Utensils, label: "Restaurant" },
            { icon: Shield, label: "24/7 Security" },
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <feature.icon className="h-8 w-8 text-gray-400 group-hover:text-orange-400 mx-auto mb-3 transition-colors" />
              <span className="text-gray-500 outfit3 text-sm font-medium">{feature.label}</span>
            </Card>
          ))}
        </div>
        </section>
      </div>
    </div>
  )
}
