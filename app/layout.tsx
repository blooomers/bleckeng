import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const larsseit = localFont({
  src: [
    { path: "../public/font/LarsseitThin.otf", weight: "100", style: "normal" },
    {
      path: "../public/font/LarsseitThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/font/LarsseitLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/LarsseitLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/LarsseitItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/Larsseit.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/LarsseitMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/LarsseitMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    { path: "../public/font/LarsseitBold.otf", weight: "700", style: "normal" },
    {
      path: "../public/font/LarsseitBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/LarsseitExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/font/LarsseitExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-larsseit",
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bleck Engineering",
  description:
    "Bleck Engineering provides civil engineering and land surveying services in Lake Forest, Illinois.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${larsseit.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
