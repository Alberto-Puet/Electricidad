"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen -mt-18 flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Imagen de fondo animada con zoom suave */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.webp')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl">
        <motion.p
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Raúl Puet
        </motion.p>

        <motion.h1
  className="my-6 text-xl md:text-3xl font-semibold text-[#f09f0a]"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1 }}
>
  Electricista en Colón, Entre Ríos
</motion.h1>


        <motion.h2
          className="text-slate-200 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Instalaciones eléctricas, reparaciones y bobinados.
        </motion.h2>

        <motion.a
        target="_blank"
          href="https://wa.me/5493447448409"
          className="mt-6 inline-block bg-[#f09f0a] text-black px-5 py-2 rounded shadow-lg shadow-black hover:bg-[#ddba78] transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Contactame
        </motion.a>
      </div>
    </section>
  );
}
