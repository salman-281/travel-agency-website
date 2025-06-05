import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Star,
  Shield,
  Clock,
  Award,
  Search,
  Menu,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
  Globe,
  Camera,
  Mountain,
  Waves,
  Building2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import AmazingStats from "@/components/amazing-stats"
import SearchInterface from "@/components/search-interface"

export default function TravelAgencyWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center ">
        <div className="absolute z-10 bg-black"></div>
        <Image
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Travel-Wallpaper-Free-Download.jpg"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 text-center top-28 text-white px-4 rounded-4xl sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl lexend  sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block regular2 text-white bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-xl outfit3 backdrop-blur sm:text-2xl mt-6 mb-8 text-gray-200 max-w-2xl mx-auto">
            Explore breathtaking destinations, create unforgettable memories, and embark on the journey of a lifetime
            with our expertly crafted travel experiences.
          </p>

          {/* Search Bar */}
          
        </div>
      </section>


      <SearchInterface/>

      {/* Featured Destinations */}
      <section id="destinations" className="py-32 mt-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold  mb-4 regular2 text-orange-500">Popular Destinations</h2>
            <p className="text-xl text-gray-600 outfit3 max-w-2xl mx-auto">
              Discover the world's most breathtaking locations, handpicked by our travel experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Santorini, Greece",
                image: "https://static.vecteezy.com/system/resources/thumbnails/054/311/652/small_2x/tranquil-tropical-paradise-scene-starfish-and-seashells-rest-on-a-white-sandy-beach-with-sea-gentle-turquoise-waves-summer-background-copy-space-for-your-text-video.jpg",
                price: "From $1,299",
                rating: 4.9,
                reviews: 2847,
                category: "Beach",
                icon: <Waves className="h-5 w-5" />,
              },
              {
                name: "Tokyo, Japan",
                image: "https://c4.wallpaperflare.com/wallpaper/516/98/347/skyscraper-tower-city-lights-purple-sky-wallpaper-preview.jpg",
                price: "From $1,899",
                rating: 4.8,
                reviews: 1923,
                category: "City",
                icon: <Building2 className="h-5 w-5" />,
              },
              {
                name: "Swiss Alps",
                image: "https://cdn.magicdecor.in/com/2023/02/29184751/image-1689490174-6594.jpg",
                price: "From $2,199",
                rating: 4.9,
                reviews: 1456,
                category: "Mountain",
                icon: <Mountain className="h-5 w-5" />,
              },
              {
                name: "Bali, Indonesia",
                image: "https://plus.unsplash.com/premium_photo-1723867356920-8e05009f3499?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
                price: "From $899",
                rating: 4.7,
                reviews: 3241,
                category: "Tropical",
                icon: <Waves className="h-5 w-5" />,
              },
              {
                name: "Paris, France",
                image: "https://m.media-amazon.com/images/I/814KmPnHazS._AC_UF894,1000_QL80_.jpg",
                price: "From $1,599",
                rating: 4.8,
                reviews: 2156,
                category: "City",
                icon: <Building2 className="h-5 w-5" />,
              },
              {
                name: "Machu Picchu, Peru",
                image: "https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?s=612x612&w=0&k=20&c=Yp-rzpmY_hbhpbTE38z6toouRKW-lAEN-ZvuWvH8kKE=",
                price: "From $1,799",
                rating: 4.9,
                reviews: 987,
                category: "Adventure",
                icon: <Mountain className="h-5 w-5" />,
              },
            ].map((destination, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                      {destination.icon}
                      <span className="ml-1 outfit">{destination.category}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 lexend">{destination.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium outfit3">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 outfit">{destination.reviews} reviews</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600 lexend">{destination.price}</span>
                    <Button className="bg-gradient-to-r outfit3 from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Link
                        href={`/booking?destination=${encodeURIComponent(destination.name)}&price=${destination.price.replace("From $", "")}`}
                      >
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Packages */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-cyan-500 mb-4 lexend">Exclusive Travel Packages</h2>
            <p className="text-xl outfit3 text-gray-600 max-w-2xl mx-auto">
              Carefully curated experiences that combine luxury, adventure, and unforgettable moments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "European Grand Tour",
                duration: "14 Days",
                countries: "5 Countries",
                price: "$3,999",
                originalPrice: "$4,999",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sSrpL3ygC_d1Y6f_OsYg0zuyMvHK2G8S0A&s",
                features: ["Luxury Hotels", "Private Tours", "All Meals", "Transportation"],
                popular: true,
              },
              {
                title: "Asian Adventure",
                duration: "10 Days",
                countries: "3 Countries",
                price: "$2,799",
                originalPrice: "$3,299",
                image: "https://wallpapers.com/images/hd/asian-background-5kb2a12yy5uojwgf.jpg",
                features: ["Cultural Tours", "Local Guides", "Traditional Cuisine", "Temples & Markets"],
              },
              {
                title: "African Safari",
                duration: "7 Days",
                countries: "2 Countries",
                price: "$4,599",
                originalPrice: "$5,199",
                image: "https://images.stockcake.com/public/2/b/e/2be6717b-72cc-4516-85a2-aff1865246b7_large/safari-sunset-elephants-stockcake.jpg",
                features: ["Game Drives", "Luxury Camps", "Wildlife Photography", "Conservation Tours"],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${pkg.popular ? "ring-2 ring-blue-500 transform scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 outfit to-red-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <div className="relative">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0  to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 lexend">{pkg.title}</h3>
                  <div className="flex items-center space-x-4 mb-4 text-gray-600 outfit3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {pkg.countries}
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex outfit items-center text-sm text-gray-600">
                        <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center outfit3 justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                      )}
                      <div className="text-sm text-gray-600">per person</div>
                    </div>
                  </div>
                  <Button className="w-full lexend bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link
                      href={`/booking?package=${encodeURIComponent(pkg.title)}&price=${pkg.price.replace("$", "")}&duration=${pkg.duration}`}
                    >
                      Book This Package
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4 regular2">Why Choose WanderLust?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto outfit3">
              We're not just a travel agency - we're your partners in creating extraordinary experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: "Safe & Secure",
                description: "Your safety is our priority with 24/7 support and comprehensive travel insurance",
              },
              {
                icon: <Award className="h-12 w-12 text-purple-600" />,
                title: "Award Winning",
                description: "Recognized globally for excellence in travel services and customer satisfaction",
              },
              {
                icon: <Users className="h-12 w-12 text-green-600" />,
                title: "Expert Guides",
                description: "Local experts who know every hidden gem and cultural secret of your destination",
              },
              {
                icon: <Clock className="h-12 w-12 text-orange-600" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance wherever you are in the world, whenever you need us",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 lexend">{feature.title}</h3>
                <p className="text-gray-600 outfit3">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-emerald-500 mb-4 regular2 ">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600 outfit3 max-w-2xl mx-auto">
              Real stories from real travelers who've experienced the magic of our journeys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                text: "WanderLust made our honeymoon in Santorini absolutely perfect. Every detail was taken care of, and the local experiences were incredible!",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Michael Chen",
                location: "Toronto, Canada",
                rating: 5,
                text: "The Japanese cultural tour exceeded all expectations. Our guide was knowledgeable and the hidden gems we discovered were amazing.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Emma Williams",
                location: "London, UK",
                rating: 5,
                text: "Best travel agency ever! The African safari was a once-in-a-lifetime experience. Professional, safe, and absolutely magical.",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 outfit">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 outfit2">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 regular2">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto outfit3">
            Subscribe to our newsletter and get exclusive deals, travel tips, and destination guides delivered to your
            inbox
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 outfit2 border-white/30 text-white placeholder:text-gray-300"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 outfit">Subscribe</Button>
          </div>

          <p className="text-sm text-blue-100 mt-4 outfit3">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold regular2">WanderLust</span>
              </div>
              <p className="text-gray-400 outfit3 mb-6 max-w-md">
                Creating extraordinary travel experiences since 2008. We're passionate about helping you discover the
                world's most beautiful destinations.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-black">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-black">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-black">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-black">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 outfit text-gray-400">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Travel Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Travel Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Travel Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="outfit"> 
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>info@wanderlust.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                  <span>
                    123 Travel Street
                    <br />
                    Adventure City, AC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row outfit3 justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} WanderLust Travel Agency. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white outfit3 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white outfit3 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white outfit3 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
