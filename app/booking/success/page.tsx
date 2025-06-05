import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Mail, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Success Icon */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-xl text-gray-600">
            Your adventure awaits! We've sent a confirmation email with all the details.
          </p>
        </div>

        {/* Booking Details Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              Booking Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Booking Reference</p>
                  <p className="font-bold text-lg">WL-ABC123XYZ</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Destination</p>
                  <p className="font-semibold">Santorini, Greece</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Travel Dates</p>
                  <p className="font-semibold">Dec 15 - Dec 22, 2024</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Guests</p>
                  <p className="font-semibold">2 Adults</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="font-bold text-xl text-green-600">$2,598.00</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payment Status</p>
                  <p className="font-semibold text-green-600">Paid</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Check Your Email</p>
                  <p className="text-sm text-gray-600">
                    We've sent detailed confirmation and travel documents to your email address.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">Prepare for Travel</p>
                  <p className="text-sm text-gray-600">
                    Check passport validity, travel insurance, and any visa requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold">24/7 Support</p>
                  <p className="text-sm text-gray-600">
                    Our travel experts are available anytime for questions or assistance.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="h-4 w-4 mr-2" />
            Download Confirmation
          </Button>
          <Button variant="outline">
            <Mail className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Need help? Contact us at <strong>+1 (555) 123-4567</strong> or <strong>support@wanderlust.com</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
