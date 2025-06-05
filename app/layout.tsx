import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit, Lexend, Cookie, Parisienne, Merienda } from "next/font/google";
import { Hubot_Sans, Poppins, PT_Mono, Grand_Hotel, Space_Grotesk, Tangerine, Lavishly_Yours, Great_Vibes, Trocchi, Caveat } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  variable: "--font-Outfit",
  subsets: ["latin"],
});
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
});
const merienda = Merienda({
  variable: "--font-Merienda",
  subsets: ["latin"],
});
const cookie = Cookie({
  variable: "--font-Cookie",
  subsets: ["latin"],
  weight: "400",
});
const space_grotesk = Space_Grotesk({
  variable: "--font-Space_Grotesk",
  subsets: ["latin"],
  weight: "400",
});
const hubot_sans = Hubot_Sans({
  variable: "--font-Hubot_Sans",
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: "400",
});
const pt_mono = PT_Mono({
  variable: "--font-PT_Mono",
  subsets: ["latin"],
  weight: "400",
});
const parisienne = Parisienne({
  variable: "--font-Parisienne",
  subsets: ["latin"],
  weight: "400",
});
const caveat = Caveat({
  variable: "--font-Caveat",
  subsets: ["latin"],
  weight: "400",
});
const tangerine = Tangerine({
  variable: "--font-Tangerine",
  subsets: ["latin"],
  weight: "400",
});
const lavishly_yours = Lavishly_Yours({
  variable: "--font-Lavishly_Yours",
  subsets: ["latin"],
  weight: "400",
});
const great_vibes = Great_Vibes({
  variable: "--font-Great_Vibes",
  subsets: ["latin"],
  weight: "400",
});
const trocchi = Trocchi({
  variable: "--font-Trocchi",
  subsets: ["latin"],
  weight: "400",
});


const grand_hotel = Grand_Hotel({
  variable: "--font-Grand_Hotel",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WanderLuxe Travel Agency",
  description: "Explore the world with WanderWise! We offer personalized travel packages, flight bookings, hotel deals, and guided tours to make your dream vacation a reality.",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={` ${poppins.variable} ${trocchi.variable} ${hubot_sans.variable} ${space_grotesk.variable} ${outfit.variable} ${cookie.variable} ${lexend.variable} ${merienda.variable} ${pt_mono.variable} ${parisienne.variable} ${caveat.variable} ${tangerine.variable} ${lavishly_yours.variable} ${great_vibes.variable} ${grand_hotel.variable} antialiased`}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
    </html>
  );
}