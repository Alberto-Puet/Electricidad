"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPlug,
  FaTools,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import Image from "next/image";

const servicios = [
  {
    icon: <FaPlug />,
    titulo: "Instalaciones",
    desc: "Instalaciones eléctricas seguras y certificadas para hogares, comercios y obras.",
    imagen: "/instalaciones.jpg",
    ruta: "instalaciones",
    incluye: [
      "Instalación de tomas y llaves",
      "Tableros eléctricos",
      "Líneas nuevas",
      "Iluminación interior y exterior",
    ],
  },
  {
    icon: <FaTools />,
    titulo: "Reparaciones",
    desc: "Reparación de artefactos, térmicas, cortocircuitos y problemas eléctricos comunes.",
    imagen: "/reparaciones.jpg",
    ruta: "reparaciones",
    incluye: [
      "Artefactos eléctricos",
      "Térmicas y disyuntores",
      "Interruptores",
      "Tableros desbalanceados",
    ],
  },
  {
    icon: <FaBolt />,
    titulo: "Bobinados",
    desc: "Bobinado profesional de motores eléctricos y mantenimiento preventivo.",
    imagen: "/bobinados.jpg",
    ruta: "bobinados",
    incluye: [
      "Bobinado de motores",
      "Diagnóstico técnico",
      "Cambio de rodamientos",
      "Balanceo general",
    ],
  },
//   {
//     icon: <FaWrench />,
//     titulo: "Mantenimiento",
//     desc: "Servicio de mantenimiento eléctrico general preventivo y correctivo.",
//     imagen: "/mantenimiento.jpg",
//     ruta: "mantenimiento",
//     incluye: [
//       "Verificación de circuitos",
//       "Revisión de instalaciones antiguas",
//       "Actualización de tableros",
//       "Control de sobrecargas",
//     ],
//   },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-28 px-6 bg-slate-200">
      <motion.h2
        className="text-3xl font-bold mb-16 text-center text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Servicios
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((serv, indx) => (
          <motion.div
            key={indx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: indx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 text-white shadow-black rounded-xl shadow-lg overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={serv.imagen}
                alt={serv.titulo}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute bottom-2 left-4 bg-slate-800 text-[#f09f0a] w-14 h-14 rounded-full flex flex-col items-center justify-center text-2xl font-bold shadow-md z-10">
                <span>{serv.icon}</span>
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="text-lg font-bold mb-2">{serv.titulo}</h3>
              <p className="text-sm text-white mb-4">{serv.desc}</p>

                <ul className="space-y-2 text-sm text-white">
                {serv.incluye.map((item, i)=>(
                    <li className=" flex items-center justify-start gap-2" key={i}>
                     <FaCheckCircle className="text-[#f09f0a]"/>{item}  
                    </li>
                ))}
              </ul>
              <Link
                href={serv.ruta}
                className="text-sm font-medium text-[#f09f0a] hover:underline flex items-center gap-1 mt-7"
              >
                Leer más <span>➔</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
