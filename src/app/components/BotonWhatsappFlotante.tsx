import { FaWhatsapp } from "react-icons/fa";

export default function BotonWhatsappFlotante() {
  return (
    <a
      href="https://wa.me/5493447448409"
      target="_blank"
      className="md:hidden fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-xl" />
    </a>
  );
}
