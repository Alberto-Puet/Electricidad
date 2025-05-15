"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPlug, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const detalles = [
  "Instalación completa en hogares y comercios",
  "Tableros eléctricos nuevos o refacciones",
  "Tendido de líneas eléctricas y cableado interno",
  "Colocación de tomacorrientes, llaves y luminarias",
  "Cumplimiento de normativas",
  "Presupuesto sin cargo y atención personalizada",
];

export default function Instalaciones() {
  return (
    <section
      className="relative -mt-18 bg-cover bg-top md:bg-start min-h-screen text-white overflow-hidden"
      style={{ backgroundImage: "url('/instalaciones-bg.webp')" }}
    >
      {/* Overlay sin animación */}
      <div className="absolute inset-0 bg-black/70 h-full w-full" />

      {/* Contenido centrado */}
      <motion.div
        className="absolute inset-y-0 left-0 z-10 w-full flex items-center justify-center px-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-3xl w-full text-center flex flex-col items-center">
          <div className="mb-10">
            <FaPlug className="text-[#f09f0a] text-5xl mb-4 mx-auto" />
            <h1 className="text-3xl md:text-4xl font-bold">Instalaciones Eléctricas</h1>
            <p className="mt-4 text-slate-300 text-base md:text-lg">
              Realizo instalaciones eléctricas completas o parciales para viviendas y negocios en Colón y alrededores. Trabajo seguro, limpio y garantizado.
            </p>
          </div>

          <ul className="grid gap-5 justify-center sm:grid-cols-1 px-4 md:px-0 md:grid-cols-2 text-sm md:text-base">
  {detalles.map((item, i) => (
    <li
      key={i}
      className="flex items-center gap-3 justify-start text-left w-full md:my-2 max-w-xs whitespace-nowrap overflow-hidden text-ellipsis"
    >
      <FaCheckCircle className="text-[#f09f0a] shrink-0 mt-0.5" />
      <span className="text-white">{item}</span>
    </li>
  ))}
</ul>

          <div className="text-center mt-10">
            <Link
              target="_blank"
              href="https://wa.me/5493447448409?text=Hola%2C%20estoy%20necesitando%20una%20instalaci%C3%B3n%20el%C3%A9ctrica."
              className="inline-block bg-[#f09f0a] text-black font-semibold px-6 py-3 rounded hover:bg-[#ddba78] transition-all"
            >
              Consultar por este servicio
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
