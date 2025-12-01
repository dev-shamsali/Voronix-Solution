'use client'

import { Code, Palette, Rocket, Database, Globe, ShieldCheck } from 'lucide-react'

export default function Services() {
  const services = [
    { 
      icon: Code, 
      title: "Full Stack Development", 
      desc: "High-performance, scalable, and modern web applications built using cutting-edge technologies." 
    },
    { 
      icon: Database, 
      title: "Backend Engineering", 
      desc: "Secure, optimized, and cloud-ready backend systems designed for reliability and speed." 
    },
    { 
      icon: Palette, 
      title: "UI / UX Design", 
      desc: "Intuitive, user-centered interfaces designed with precision, accessibility, and aesthetics in mind." 
    },
    { 
      icon: Globe, 
      title: "API Development", 
      desc: "REST and GraphQL APIs engineered for performance, flexibility, and seamless third-party integration." 
    },
    { 
      icon: ShieldCheck, 
      title: "Security & Compliance", 
      desc: "Enterprise-level security practices, authentication systems, and data protection implementations." 
    },
    { 
      icon: Rocket, 
      title: "Performance Optimization", 
      desc: "Speed tuning, SEO enhancements, and architecture improvements for mission-critical applications." 
    }
  ]

  return (
    <section id="services" className="py-24 bg-linear-to-b from-[#020617] to-[#040B16] relative overflow-hidden">

      {/* Floating Glow Orbs (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#00A8FF]/20 blur-3xl rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#005DFF]/20 blur-3xl rounded-full animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our{" "}
          <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon

            return (
              <div
                key={idx}
                className="
                group relative p-8 rounded-2xl bg-slate-900/70 border border-slate-800
                transition-all duration-500 hover:scale-[1.03]
                hover:shadow-[0_0_35px_#009DFF50] hover:border-blue-500/40
                backdrop-blur-xl
              "
              >

                {/* Hologram Glow Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-[#00A8FF]/10 to-[#005DFF]/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">

                  {/* Icon Container */}
                  <div className="
                    w-20 h-20 mx-auto mb-6 rounded-2xl 
                    bg-linear-to-tr from-[#00A8FF] to-[#005DFF] 
                    flex items-center justify-center
                    shadow-[0_0_18px_#00A8FF80]
                    transition-transform duration-500 group-hover:scale-110
                  ">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
