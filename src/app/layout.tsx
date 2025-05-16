import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BotonWhatsappFlotante from "./components/BotonWhatsappFlotante";
import { Roboto,  } from 'next/font/google'



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"]
});


export const metadata: Metadata = {
  title: "Raúl Puet – Electricista en Colón, Entre Ríos",
  description:
    "Servicios de electricos en Colón, Entre Ríos. Instalaciones, reparaciones de artefactos, bobinados de motores. +30 años de experiencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"  className={` ${roboto.className} `}>
      <body >
        <Navbar />
        {children}
        <BotonWhatsappFlotante />
        <Footer />
      </body>
    </html>
  );
}
