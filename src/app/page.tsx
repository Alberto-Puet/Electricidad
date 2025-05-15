// pages/index.tsx (Home)
"use client";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Beneficios from "./components/Beneficios";
import Zona from "./components/Zona";
import CTAFinal from "./components/CTAFinal";



export default function HomePage() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Beneficios />
      <Zona />
      <CTAFinal />
    </main>
  );
}
