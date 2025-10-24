import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartContextProvider from "@/store/cart-context-provider";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furni",
  description: "Your ecommerce furniture shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartContextProvider>
        <body
          className={`${inter.variable} antialiased`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </CartContextProvider>
    </html>
  );
}
