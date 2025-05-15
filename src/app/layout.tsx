import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonWhatsappFlotante from "./components/BotonWhatsappFlotante";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  
  title: "Raúl Puet – Electricista en Colón, Entre Ríos",
  description: "Servicios de electricos en Colón, Entre Ríos. Instalaciones, reparaciones de artefactos, bobinados de motores. +30 años de experiencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <BotonWhatsappFlotante />
        <Footer />
      </body>
    </html>
  );
}
