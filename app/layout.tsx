import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = [
  "Corentis Shield helps teams explore policy-bound checkpoints, human review and evidence capture",
  "around AI-assisted regulated workflows.",
].join(" ");

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corentis.co.uk"),
  title: {
    default: "Corentis Shield | AI checkpoint for regulated workflows",
    template: "%s | Corentis Technologies",
  },
  description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Corentis Shield | AI checkpoint for regulated workflows",
    description,
    url: "https://www.corentis.co.uk",
    siteName: "Corentis Technologies",
    images: [
      {
        url: "/og-corentis-shield.svg",
        width: 1200,
        height: 630,
        alt: "Corentis Shield - AI checkpoint for regulated workflows",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corentis Shield | AI checkpoint for regulated workflows",
    description,
    images: ["/og-corentis-shield.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-ink/80">
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
