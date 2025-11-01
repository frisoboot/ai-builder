import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Builders - Websites & Apps met AI binnen 48 uur | No Cure No Pay",
  description:
    "Wij bouwen jouw website of app met AI binnen 48 uur een MVP. Betaal pas als je tevreden bent. No Cure, No Pay.",
  keywords: [
    "AI websites",
    "AI apps",
    "MVP binnen 48 uur",
    "No Cure No Pay",
    "websites met AI",
    "apps met AI",
    "AI development",
    "snel website bouwen",
  ],
  openGraph: {
    title: "AI Builders - Websites & Apps met AI binnen 48 uur",
    description:
      "Betaal pas als je tevreden bent. No Cure, No Pay. Binnen 48 uur een werkend MVP.",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Builders - Websites & Apps met AI binnen 48 uur",
    description:
      "Betaal pas als je tevreden bent. No Cure, No Pay. Binnen 48 uur een werkend MVP.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AI Builders",
              description:
                "AI Builders bouwt websites en apps met kunstmatige intelligentie. Binnen 48 uur een MVP. No Cure, No Pay.",
              url: "https://aibuilders.nl",
              email: "info@aibuilders.nl",
              sameAs: [
                "https://www.linkedin.com/company/aibuilders",
                "https://twitter.com/aibuilders",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}

