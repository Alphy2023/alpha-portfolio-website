import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter =Inter({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    template: "%s | Alphy Portfolio", 
    absolute: "Alphy Portfolio",
  },
  description: "My portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-bodyColor`}
      >
        {children}
      </body>
    </html>
  );
}
