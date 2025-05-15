"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section id="contacto" className="py-28 px-6 bg-slate-200 text-center text-black">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ¿Tenés un problema eléctrico?
      </motion.h2>

      <motion.p
        className="text-black max-w-xl mx-auto mb-8 text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Escribime por WhatsApp y contame qué necesitás. Estoy para darte una mano con instalaciones, arreglos o lo que surja.
      </motion.p>

      <motion.a
       target="_blank"
        href="https://wa.me/5493447448409"
        className="inline-block bg-[#f09f0a] text-black font-semibold px-8 py-3 rounded shadow-lg hover:bg-[#ddba78] transition-all"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Enviar mensaje
      </motion.a>
    </section>
  );
}
