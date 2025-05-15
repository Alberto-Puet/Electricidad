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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CTAFinal() {
  return (
    <section
      id="contacto"
      className="py-28 px-6 bg-slate-200 text-center text-black"
    >
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={itemVariants}
        >
          ¿Tenés un problema eléctrico?
        </motion.h2>

        <motion.p
          className="text-black max-w-xl mx-auto mb-8 text-lg"
          variants={itemVariants}
        >
          Escribime por WhatsApp y contame qué necesitás. Estoy para darte una
          mano con instalaciones, arreglos o lo que surja.
        </motion.p>

        <motion.a
          target="_blank"
          href="https://wa.me/5493447448409"
          className="inline-block bg-[#f09f0a] text-black font-semibold px-8 py-3 rounded shadow-lg hover:bg-[#ddba78] transition-all"
          variants={itemVariants}
        >
          Enviar mensaje
        </motion.a>
      </motion.div>
    </section>
  );
}
