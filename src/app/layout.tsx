import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { JsonLd, ORGANIZATION } from "@/lib/structured-data";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "AI Exhibition Booth Design & Build | Amaze Expo",
    template: "%s | Amaze Expo",
  },
  description:
    "Design your exhibition booth with AI in minutes, then have it built by a team with 850+ booths delivered.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "AI Exhibition Booth Design & Build | Amaze Expo",
    description:
      "AMAZE plans, designs, costs and checks your booth in minutes — then our team builds it.",
    url: `${SITE.url}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Exhibition Booth Design & Build | Amaze Expo",
    description:
      "AMAZE plans, designs, costs and checks your booth in minutes — then our team builds it.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={ORGANIZATION} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-3 focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
