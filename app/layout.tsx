import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://valenteevents.com"),

  title: "Valente Events | Luxury Event Management in Kerala",

  description:
    "Valente Events specializes in luxury weddings, corporate events, birthdays, stage productions, photography, luxury car rentals, and premium event planning across Kerala.",

  keywords: [
    "Valente Events",
    "Event Management Kerala",
    "Wedding Planner Kerala",
    "Luxury Wedding Kerala",
    "Corporate Events Kerala",
    "Birthday Decoration",
    "Luxury Events",
    "Photography Kerala",
    "Luxury Car Rental Kerala",
    "Stage Lighting",
    "Event Company Kochi",
  ],

  authors: [
    {
      name: "Valente Events",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Valente Events | Where Every Moment Matters",
    description:
      "Luxury Event Management Company in Kerala specializing in weddings, corporate events, birthdays and premium celebrations.",
    url: "https://valenteevents.com",
    siteName: "Valente Events",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Valente Events",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Valente Events",
    description: "Luxury Event Management Company in Kerala.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventOrganizer",
    name: "Valente Events",
    url: "https://valenteevents.com",
    logo: "https://valenteevents.com/logo.png",
    image: "https://valenteevents.com/logo.png",
    description:
      "Luxury event management company specializing in weddings, corporate events, birthdays, photography, stage productions and premium celebrations across Kerala.",
    email: "info@valenteevents.com",
    areaServed: "Kerala, India",
    sameAs: [
      "https://www.instagram.com/eventsvalente/",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
        
        <GoogleAnalytics gaId="G-HTYKLR2CMZ" />
      </body>

    </html>
  );
}
