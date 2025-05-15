"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaTools } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Zona() {
  return (
    <section
      className="relative py-28 px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/mapa.webp')" }}
    >
      {/* Capa de fondo */}
      <div className="absolute inset-0 backdrop-blur-xs bg-black/70 grayscale-75" />

      <motion.div
        className="relative text-white text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold mb-16"
          variants={childVariants}
        >
          Trabajos Domiciliarios y Reparaciones
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Card 1 */}
          <motion.div
            className="bg-slate-900 p-6 rounded-lg shadow-md shadow-black"
            variants={childVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <MdOutlineElectricBolt className="text-[#f09f0a] text-xl" />
              <h3 className="text-xl font-semibold">Trabajos Domiciliarios</h3>
            </div>
            <ul className="text-slate-300 space-y-2 list-disc list-inside">
              <li>Colón (zona urbana y rural)</li>
              <li>San José</li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-slate-900 p-6 rounded-lg shadow-md shadow-black"
            variants={childVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaTools className="text-[#f09f0a] text-xl" />
              <h3 className="text-xl font-semibold">Reparaciones y Bobinados</h3>
            </div>
            <ul className="text-slate-300 space-y-2 list-disc list-inside">
              <li>Reparaciones de artefactos eléctricos</li>
              <li>Bobinados y mantenimiento de motores eléctricos</li>
            </ul>
            <div className="flex items-center gap-2 mt-8 font-bold text-slate-200">
              <FaMapMarkerAlt className="text-[#f09f0a]" />
              <span>Alvear 421</span>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="mt-12 text-white max-w-2xl mx-auto"
          variants={childVariants}
        >
          Contactanos por WhatsApp para confirmar disponibilidad o consultar por zonas específicas.
        </motion.p>
      </motion.div>
    </section>
  );
}
