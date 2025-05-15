"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/instalaciones", label: "Instalaciones" },
  { href: "/reparaciones", label: "Reparaciones" },
  { href: "/bobinados", label: "Bobinados" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-18 py-4 px-6  sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-slate-950" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto relative flex items-center justify-between">
  {/* LOGO oculto completamente */}
  <div className="hidden" />

  {/* Enlaces desktop centrados absolutamente */}
  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
    <ul className="flex gap-8 text-center">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="hover:text-[#f09f0a] transition">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Botón WhatsApp siempre alineado a la derecha (desktop) */}
  <Link
    target="_blank"
    href="https://wa.me/5493447448409"
    className="hidden md:inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition ml-auto"
  >
    <FaWhatsapp /> WhatsApp
  </Link>

  {/* Botón menú hamburguesa (solo mobile) */}
  <button
    onClick={() => setOpen(!open)}
    className="md:hidden text-white relative z-50 text-2xl ml-auto"
  >
    {open ? <FaTimes /> : <FaBars />}
  </button>
</div>




      {/* Menú Mobile animado */}
      <AnimatePresence>
  {open && (
    <motion.ul
      className="fixed top-0 right-0 h-screen w-[70%] bg-slate-900/80 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 text-white"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.4 }}
    >
      {links.map((link) => (
        <li className="my-2 " key={link.href}>
          <Link
            href={link.href}
            className="text-2xl hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>


    </nav>
  );
}
