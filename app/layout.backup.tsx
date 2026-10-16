import type { Metadata } from "next";
import Header from "../src/components/layout/Header";
import Navigation from "../src/components/layout/Navigation";
import Footer from "../src/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "T-Fitness Tracker",
  description: "Track workouts, fitness goals, nutrition, and progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-50">
        <Header />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}