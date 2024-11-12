import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const featherBold = localFont({
  src: "./fonts/Feather Bold.woff",
  variable: "--font-feather-bold",
  weight: "100 900",
});

const dinNextRounded = localFont({
  src: "./fonts/DIN Next Rounded.woff",
  variable: "--font-din-next-rounded",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PetReady - Teaching pet care for all families",
  description:
    "Our free mobile app helps parents, kids, and future pet owners get ready for any pet. Learn pet care for 1000+ breeds, from a Golden Retriever to a Box Turtle with daily tasks and bite-size lessons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dinNextRounded.variable} ${featherBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
