"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  CalendarIcon,
  MapPin,
  Clock,
  CreditCard,
  Shield,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Plane,
  Info,
  Plus,
  Minus,
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface BookingData {
  destination: string
  package: string
  checkIn: Date | undefined
  checkOut: Date | undefined
  adults: number
  children: number
  rooms: number
  price: number
  duration: string
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    country: string
    zipCode: string
  }
  specialRequests: string
  newsletter: boolean
  terms: boolean
}

const STEPS = [
  { id: 1, title: "Trip Details", description: "Select dates and guests" },
  { id: 2, title: "Personal Info", description: "Your contact details" },
  { id: 3, title: "Payment", description: "Secure checkout" },
  { id: 4, title: "Confirmation", description: "Booking complete" },
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [bookingData, setBookingData] = useState<BookingData>({
    destination: searchParams.get("destination") || "",
    package: searchParams.get("package") || "",
    checkIn: undefined,
    checkOut: undefined,
    adults: 2,
    children: 0,
    rooms: 1,
    price: Number.parseInt(searchParams.get("price") || "1299"),
    duration: searchParams.get("duration") || "7 Days",
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      zipCode: "",
    },
    specialRequests: "",
    newsletter: false,
    terms: false,
  })

  const totalPrice = bookingData.price * bookingData.adults + bookingData.price * 0.5 * bookingData.children
  const taxes = totalPrice * 0.12
  const finalTotal = totalPrice + taxes

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePayment = async () => {
    setIsLoading(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    handleNext()
  }

  const updatePersonalInfo = (field: string, value: string) => {
    setBookingData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }))
  }

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {STEPS.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors",
              currentStep >= step.id ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 text-gray-500",
            )}
          >
            {currentStep > step.id ? (
              <CheckCircle className="h-6 w-6" />
            ) : (
              <span className="text-sm font-medium">{step.id}</span>
            )}
          </div>
          <div className="ml-3 hidden sm:block">
            <p className={cn("text-sm font-medium", currentStep >= step.id ? "text-blue-600" : "text-gray-500")}>
              {step.title}
            </p>
            <p className="text-xs text-gray-500">{step.description}</p>
          </div>
          {index < STEPS.length - 1 && <div className="w-8 sm:w-16 h-0.5 bg-gray-300 mx-4 sm:mx-8"></div>}
        </div>
      ))}
    </div>
  )

  const TripDetailsStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            Trip Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Destination</Label>
              <p className="text-lg font-semibold">{bookingData.destination || bookingData.package}</p>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Duration</Label>
              <p className="text-lg font-semibold flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {bookingData.duration}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Travel Dates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Check-in Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !bookingData.checkIn && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {bookingData.checkIn ? format(bookingData.checkIn, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={bookingData.checkIn}
                    onSelect={(date) => setBookingData((prev) => ({ ...prev, checkIn: date }))}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>Check-out Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !bookingData.checkOut && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {bookingData.checkOut ? format(bookingData.checkOut, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={bookingData.checkOut}
                    onSelect={(date) => setBookingData((prev) => ({ ...prev, checkOut: date }))}
                    disabled={(date) => date < new Date() || (bookingData.checkIn && date <= bookingData.checkIn)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Guests & Rooms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Adults</Label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setBookingData((prev) => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{bookingData.adults}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setBookingData((prev) => ({ ...prev, adults: prev.adults + 1 }))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label>Children</Label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setBookingData((prev) => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{bookingData.children}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setBookingData((prev) => ({ ...prev, children: prev.children + 1 }))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label>Rooms</Label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setBookingData((prev) => ({ ...prev, rooms: Math.max(1, prev.rooms - 1) }))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{bookingData.rooms}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setBookingData((prev) => ({ ...prev, rooms: prev.rooms + 1 }))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Special Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Any special requests or requirements? (dietary restrictions, accessibility needs, etc.)"
            value={bookingData.specialRequests}
            onChange={(e) => setBookingData((prev) => ({ ...prev, specialRequests: e.target.value }))}
            className="min-h-[100px]"
          />
        </CardContent>
      </Card>
    </div>
  )

  const PersonalInfoStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={bookingData.personalInfo.firstName}
                onChange={(e) => updatePersonalInfo("firstName", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={bookingData.personalInfo.lastName}
                onChange={(e) => updatePersonalInfo("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={bookingData.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={bookingData.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="address">Street Address *</Label>
            <Input
              id="address"
              value={bookingData.personalInfo.address}
              onChange={(e) => updatePersonalInfo("address", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                value={bookingData.personalInfo.city}
                onChange={(e) => updatePersonalInfo("city", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="country">Country *</Label>
              <Select onValueChange={(value) => updatePersonalInfo("country", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
              <Input
                id="zipCode"
                value={bookingData.personalInfo.zipCode}
                onChange={(e) => updatePersonalInfo("zipCode", e.target.value)}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={bookingData.newsletter}
              onCheckedChange={(checked) => setBookingData((prev) => ({ ...prev, newsletter: !!checked }))}
            />
            <Label htmlFor="newsletter" className="text-sm">
              Subscribe to our newsletter for exclusive deals and travel tips
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const PaymentStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
            Payment Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Card Number *</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="expiryMonth">Expiry Month *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="expiryYear">Expiry Year *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem key={i} value={String(new Date().getFullYear() + i)}>
                      {new Date().getFullYear() + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="cvv">CVV *</Label>
              <Input id="cvv" placeholder="123" maxLength={4} />
            </div>
          </div>

          <div>
            <Label htmlFor="cardName">Name on Card *</Label>
            <Input id="cardName" placeholder="John Doe" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security & Trust</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Shield className="h-5 w-5 text-green-600" />
            <span>Your payment information is encrypted and secure</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600 mt-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>SSL Certificate protected checkout</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={bookingData.terms}
              onCheckedChange={(checked) => setBookingData((prev) => ({ ...prev, terms: !!checked }))}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ConfirmationStep = () => (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-lg text-gray-600">
          Thank you for choosing WanderLust. Your booking has been confirmed and you'll receive a confirmation email
          shortly.
        </p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-left">
          <div className="flex justify-between">
            <span className="text-gray-600">Booking ID:</span>
            <span className="font-medium">WL-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Destination:</span>
            <span className="font-medium">{bookingData.destination || bookingData.package}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Guests:</span>
            <span className="font-medium">{bookingData.adults + bookingData.children} guests</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Paid:</span>
            <span className="font-bold text-blue-600">${finalTotal.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Download Confirmation
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )

  const PricingSummary = () => (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>{bookingData.destination || bookingData.package}</span>
            <span>${bookingData.price}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Adults ({bookingData.adults})</span>
            <span>${(bookingData.price * bookingData.adults).toFixed(2)}</span>
          </div>
          {bookingData.children > 0 && (
            <div className="flex justify-between text-sm text-gray-600">
              <span>Children ({bookingData.children})</span>
              <span>${(bookingData.price * 0.5 * bookingData.children).toFixed(2)}</span>
            </div>
          )}
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Taxes & Fees</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-blue-600">${finalTotal.toFixed(2)}</span>
        </div>

        {bookingData.checkIn && bookingData.checkOut && (
          <div className="text-sm text-gray-600 space-y-1">
            <div className="flex justify-between">
              <span>Check-in:</span>
              <span>{format(bookingData.checkIn, "MMM dd, yyyy")}</span>
            </div>
            <div className="flex justify-between">
              <span>Check-out:</span>
              <span>{format(bookingData.checkOut, "MMM dd, yyyy")}</span>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Info className="h-4 w-4" />
          <span>Free cancellation up to 24 hours before check-in</span>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WanderLust
              </span>
            </Link>
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              Secure Booking
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <StepIndicator />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                {currentStep === 1 && <TripDetailsStep />}
                {currentStep === 2 && <PersonalInfoStep />}
                {currentStep === 3 && <PaymentStep />}
                {currentStep === 4 && <ConfirmationStep />}

                {currentStep < 4 && (
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentStep === 1}
                      className="flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>

                    {currentStep === 3 ? (
                      <Button
                        onClick={handlePayment}
                        disabled={!bookingData.terms || isLoading}
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 flex items-center"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Shield className="h-4 w-4 mr-2" />
                            Pay ${finalTotal.toFixed(2)}
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && (!bookingData.checkIn || !bookingData.checkOut)) ||
                          (currentStep === 2 &&
                            (!bookingData.personalInfo.firstName ||
                              !bookingData.personalInfo.lastName ||
                              !bookingData.personalInfo.email ||
                              !bookingData.personalInfo.phone))
                        }
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {currentStep < 4 && (
            <div className="lg:col-span-1">
              <PricingSummary />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
