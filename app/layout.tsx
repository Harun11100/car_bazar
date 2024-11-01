import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";

export const metadata: Metadata = {
  title: "CarBazar",
  description: "A Online platform for selling and renting cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
