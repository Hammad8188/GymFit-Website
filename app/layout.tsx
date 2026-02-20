import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "GymFit | Stronger Every Day", template: "%s | GymFit" },
  description: "GymFit is a modern fitness gym with classes, coaching, and personal training.",
  metadataBase: new URL("https://gymfit.example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
