import "./globals.css";
import "./eventura.css";
import React from "react";

export const metadata = {
  title: "Eventura",
  description: "Eventura — Full Event Planning in Gujarat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
