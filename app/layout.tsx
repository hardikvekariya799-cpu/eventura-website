// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Eventura — Events that speak your style",
    template: "%s | Eventura",
  },
  description:
    "Eventura is a full-service event planning company in Gujarat. Weddings, receptions, corporate events — venues, vendors, decor and full coordination.",
  metadataBase: new URL("https://eventura-website-27a4-git-main-hardikvekariya799-cpus-projects.vercel.app"),
  openGraph: {
    title: "Eventura — Events that speak your style",
    description:
      "Full-service event planning in Gujarat — venues, vendors, decor, timelines and flawless execution.",
    url: "https://eventura-website-27a4-git-main-hardikvekariya799-cpus-projects.vercel.app",
    siteName: "Eventura",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Eventura — Events that speak your style",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventura — Events that speak your style",
    description:
      "Full-service event planning in Gujarat — venues, vendors, decor, timelines and flawless execution.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
