"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Experiencia() {
  return (
    <section id="sobremi" className="py-24 px-6 bg-slate-900 text-center">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-3xl font-bold mb-10 border-b-2 border-[#f09f0a] inline-block"
          variants={childVariants}
        >
          Años de Trayectoria
        </motion.p>

        <motion.p
          className="text-slate-300 text-lg leading-relaxed"
          variants={childVariants}
        >
          Soy electricista con más de{" "}
          <strong>30 años de experiencia</strong> en instalaciones eléctricas,
          reparaciones domiciliarias y obras de gran escala. Trabajo en{" "}
          <strong className="text-[#f09f0a]">Colón, Entre Ríos</strong> y zonas
          cercanas, ofreciendo un servicio rápido, seguro y con materiales de
          calidad.
        </motion.p>

        <motion.p className="text-[#f09f0a] mt-6" variants={childVariants}>
          Mi prioridad es brindar soluciones confiables, cumpliendo con las
          normativas vigentes y respetando siempre los tiempos y necesidades de
          cada cliente.
        </motion.p>
      </motion.div>
    </section>
  );
}
