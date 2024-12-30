import type { Metadata } from "next";
import localFont from "next/font/local";
import { Pacifico, Joti_One, Audiowide, Lobster, Lexend_Zetta } from "next/font/google"
import "./globals.css";
import Head from "next/head";

const pacifico_init = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font--pacifico'
})

const Lexend_Zetta_inti = Lexend_Zetta({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font--Lexend-Zetta'
})

const lobster_init = Lobster({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font--lobster'
})

const joti_one = Joti_One({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font--joti-one'
})

const audiowide_init = Audiowide({
  subsets: ['latin'],
  weight: ["400"],
  variable: "--font--audiowide"
})

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
  title: "Soltrek",
  description: "Soltrek is a secure, Solana-based web wallet that generates secret phrases and multiple key pairs. Multi-chain support coming soon."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${Lexend_Zetta_inti.variable} ${lobster_init.variable} ${geistMono.variable} ${pacifico_init.variable} ${joti_one.variable} ${audiowide_init.variable} antialiased w-3/4 flex mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
