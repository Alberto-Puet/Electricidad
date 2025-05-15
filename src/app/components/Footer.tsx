"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 text-center md:text-center">
        {/* Columna 1 - Info breve */}
        <div className="space-y-2">
          <h3 className="text-[#f09f0a] font-bold text-lg">Electricista en Colón</h3>
          <p>Más de 30 años de experiencia en instalaciones, reparaciones y mantenimiento eléctrico en hogares y obras.</p>
        </div>

        {/* Columna 2 - Contacto */}
        <div className="space-y-2">
          <h3 className="text-[#f09f0a] font-bold text-lg">Contacto</h3>
          <p>
            WhatsApp:{" "}
            <a target="_blank" href="https://wa.me/5493447448409" className="text-green-400">
              +54 3447 448409
            </a>
          </p>
          <p>Dirección: <span className="font-bold">Alvear 421</span> - Colón, Entre Ríos</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Electricista en Colón. Todos los derechos reservados.
      </div>
    </footer>
  );
}
