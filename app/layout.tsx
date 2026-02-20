import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: { default: "GymFit | Stronger Every Day", template: "%s | GymFit" },
  description:
    "GymFit is a modern fitness gym with classes, coaching, and personal training.",
  metadataBase: new URL("https://gymfit.example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
