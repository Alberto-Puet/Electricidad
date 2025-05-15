"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const detalles = [
  "Reemplazo de bobinas quemadas o desgastadas",
  "Diagnóstico y mantenimiento preventivo",
  "Cambio de rulemanes y limpieza interna",
  "Equilibrado y pruebas de funcionamiento",
  "Atención a talleres, comercios y particulares",
];

export default function Bobinados() {
  return (
    <section
      className="relative -mt-18 bg-cover bg-bottom min-h-screen text-white overflow-hidden"
      style={{ backgroundImage: "url('/bobinados-bg.webp')" }}
    >
      {/* Overlay responsivo */}
      <motion.div
        className="absolute inset-y-0 left-0 bg-black/70 h-full w-full md:w-[65%]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* Contenido */}
      <motion.div
        className="absolute inset-y-0 left-0 z-10 w-full md:w-[60%] flex items-center justify-center px-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-3xl w-full text-center md:text-left">
          <div className="mb-10">
            <FaBolt className="text-[#f09f0a] text-5xl mb-4 mx-auto md:mx-0" />
            <h1 className="text-3xl md:text-4xl font-bold">Bobinados de Motores</h1>
            <p className="mt-4 text-slate-300 text-base md:text-lg">
              Bobinado y reparación de motores eléctricos.
            </p>
          </div>

          <ul className="grid gap-5 justify-center sm:grid-cols-1 px-4 md:px-0 md:grid-cols-2 text-sm md:text-base">
            {detalles.map((item, i) => (
              <li
                key={i}
                className="flex sm:flex-row items-start justify-start sm:justify-start text-center sm:text-left gap-3 w-full"
              >
                <FaCheckCircle className="text-[#f09f0a] shrink-0 mt-0.5" />
                <span className="text-white">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center md:text-left mt-10">
            <Link
              target="_blank"
              href="https://wa.me/5493447448409?text=Hola%2C%20necesito%20bobinar%20un%20motor."
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
