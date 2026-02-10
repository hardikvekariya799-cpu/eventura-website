import "./globals.css";
import React from "react";

export const metadata = {
  title: "Eventura — Events that speak your style",
  description: "Premium event planning in Gujarat. Weddings, venues, decor & full planning by Eventura.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-5FSZKJE0N4";

  return (
    <html lang="en">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
