'use client'

import { IoLogoWhatsapp } from "react-icons/io";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"   // ← your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-lg
        transition-all
        flex
        items-center
        justify-center
        md:bottom-8
        md:right-8
      "
    >
      <IoLogoWhatsapp className="w-6 h-6" />
    </a>
  )
}
