import type { Metadata } from "next";
import "./globals.css";
import "../styles/animations.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL("https://valenteevents.com"),

  title: {
    default: "ValenteEvents | Luxury Event Management Company in Kerala",
    template: "%s | ValenteEvents",
  },

  description:
    "ValenteEvents is a premium event management company in Kerala specializing in luxury weddings, corporate events, destination celebrations, photography, stage productions, luxury car rentals, and bespoke event experiences.",

  keywords: [
    "ValenteEvents",
    "Valente Events",
    "Event Management Kerala",
    "Wedding Planner Kerala",
    "Luxury Wedding Kerala",
    "Destination Wedding Kerala",
    "Corporate Events Kerala",
    "Birthday Decoration Kerala",
    "Photography Kerala",
    "Luxury Car Rental Kerala",
    "Stage Lighting Kerala",
    "Premium Event Management",
    "Event Company Kochi",
  ],

  authors: [
    {
      name: "ValenteEvents",
      url: "https://valenteevents.com",
    },
  ],

  creator: "VALENTEEVENTS PRIVATE LIMITED",

  publisher: "VALENTEEVENTS PRIVATE LIMITED",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://valenteevents.com",
  },

  openGraph: {
    title: "ValenteEvents | Where Every Moment Matters",

    description:
      "Luxury Event Management Company in Kerala specializing in weddings, corporate events, birthdays and premium celebrations.",

    url: "https://valenteevents.com",

    siteName: "ValenteEvents",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png", // Replace later with /og-image.jpg
        width: 1200,
        height: 630,
        alt: "ValenteEvents",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ValenteEvents",

    description:
      "Luxury Event Management Company in Kerala.",

    images: ["/logo.png"],

    creator: "@eventsvalente",
  },

  category: "Event Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",

    "@type": "EventOrganizer",

    name: "ValenteEvents",

    legalName: "VALENTEEVENTS PRIVATE LIMITED",

    url: "https://valenteevents.com",

    logo: "https://valenteevents.com/logo.png",

    image: "https://valenteevents.com/logo.png",

    description:
      "Luxury event management company specializing in weddings, corporate events, birthdays, photography, stage productions and premium celebrations across Kerala.",

    slogan: "Where Every Moment Matters",

    foundingDate: "2026-07-24",

    email: "info@valenteevents.com",

    telephone: "+91 9074570751", // Replace with your company number

    areaServed: "Kerala, India",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi, Kerala",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },

    sameAs: [
      "https://www.instagram.com/eventsvalente/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />

          {children}
        </ThemeProvider>

        <GoogleAnalytics gaId="G-0728FNCV88" />
      </body>
    </html>
  );
}
