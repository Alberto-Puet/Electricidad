"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const beneficios = [
  "Más de 30 años de experiencia",
  "Atención en Colón y alrededores",
  "Servicios certificados y seguros",
  "Materiales de calidad garantizada",
  "Asistencia rápida y personalizada",
];

export default function Beneficios() {
  return (
    <section id="sobremi" className="py-24 px-6 bg-slate-900 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.p
          className="text-3xl font-bold mb-10 border-b-2 border-[#f09f0a] inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Años de Trayectoria
        </motion.p>

        <motion.p
          className="text-slate-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Soy electricista con más de{" "}
          <strong>30 años de experiencia</strong> en instalaciones eléctricas,
          reparaciones domiciliarias y obras de gran escala. Trabajo en{" "}
          <strong className="text-[#f09f0a]">Colón, Entre Ríos</strong> y zonas
          cercanas, ofreciendo un servicio rápido, seguro y con materiales de
          calidad.
        </motion.p>

        <motion.p
          className="text-[#f09f0a] mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Mi prioridad es brindar soluciones confiables, cumpliendo con las
          normativas vigentes y respetando siempre los tiempos y necesidades de
          cada cliente.
        </motion.p>
      </div>
    </section>
  );
}
