import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import "./globals.css";


export const metadata: Metadata = {
  title: "The Car",
  description: "The best cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
