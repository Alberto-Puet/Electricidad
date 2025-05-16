"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen -mt-18 flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Imagen de fondo fija sin animación costosa */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero1.webp')" }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Contenido animado como bloque */}
      <motion.div
        className="relative z-10 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-4xl md:text-5xl font-bold mb-4 text-white">Raúl Puet</p>

        <h1 className="my-6 text-xl md:text-3xl font-semibold text-[#f09f0a]">
          Electricista en Colón, Entre Ríos
        </h1>

        <h2 className="text-slate-200 text-lg">
          Instalaciones eléctricas, reparaciones y bobinados.
        </h2>

        <a
          target="_blank"
          href="https://wa.me/5493447448409"
          className="mt-6 inline-block bg-[#f09f0a] text-black px-5 py-2 rounded shadow-lg shadow-black hover:bg-[#ddba78] transition-all"
        >
          Contactame
        </a>
      </motion.div>
    </section>
  );
}
