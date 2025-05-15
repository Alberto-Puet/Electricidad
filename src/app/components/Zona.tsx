"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaTools } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";

export default function Zona() {
  return (
    <section
      className="relative py-28 px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/mapa.webp')" }}
    >
      {/* Fondo blur oscuro */}
      <div className="absolute inset-0 backdrop-blur-xs bg-black/70 grayscale-75" />

      <div className="relative text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trabajos Domiciliarios y Reparaciones
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-6 rounded-lg shadow-md shadow-black text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 p-6 rounded-lg shadow-md shadow-black text-center md:text-left"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
              <FaTools className="text-[#f09f0a] text-xl" />
              <h3 className="text-xl font-semibold">Reparaciones y Bobinados</h3>
            </div>
            <ul className="text-slate-300 space-y-2 list-disc list-inside">
              <li>Reparaciones de artefactos eléctricos</li>
              <li>Bobinados y mantenimiento de motores eléctricos</li>
            </ul>
            <div className="flex justify-center md:justify-start items-center gap-2 mt-8 font-bold text-slate-200">
              <FaMapMarkerAlt className="text-[#f09f0a]" />
              <span>Alvear 421</span>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="mt-12 text-white max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Contactanos por WhatsApp para confirmar disponibilidad o consultar por zonas específicas.
        </motion.p>
      </div>
    </section>
  );
}
