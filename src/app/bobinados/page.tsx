"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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
    >
      <div className="absolute inset-0 -z-10">
              <Image
                src="/bobinados-bg.webp"
                alt="Fondo hero"
                fill
                className="object-cover object-bottom"
              />
            </div>
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
            <FaBolt className="text-[#f09f0a] text-5xl mb-4 mx-auto" />
            <h1 className="text-3xl md:text-4xl font-bold">Bobinados de Motores</h1>
            <p className="mt-4 text-slate-300 text-base md:text-lg">
              Bobinado y reparación de motores eléctricos.
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
              href="https://wa.me/5493447448409"
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
