import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
