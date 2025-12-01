'use client'

import { Code2, Globe, Shield, Rocket, Cpu, Users } from 'lucide-react'

export default function About() {
  const sections = [
    {
      title: "Who We Are",
      icon: Users,
      desc: "VORONIX Solutions is a modern web engineering studio focused on building fast, scalable, and secure digital experiences.",
    },
    {
      title: "Our Mission",
      icon: Rocket,
      desc: "Ignite innovation through code. We transform complex ideas into powerful, user-centric web applications.",
    },
    {
      title: "Our Vision",
      icon: Globe,
      desc: "To become a next-generation tech studio delivering world-class products for startups and enterprises worldwide.",
    },
  ]

  const capabilities = [
    { name: "Full Stack Development", icon: Code2 },
    { name: "Cloud Architecture", icon: Cpu },
    { name: "Security Best Practices", icon: Shield },
    { name: "Performance Optimization", icon: Rocket },
  ]

  return (
    <section id="about" className="py-20 bg-linear-to-b from-[#020617]/80 to-[#040B16]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          About{" "}
          <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
            VORONIX
          </span>
        </h2>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {sections.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 
              rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_35px_#009DFF40]"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#00A8FF]/10 to-[#005DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10 text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-400 drop-shadow-[0_0_10px_#00A8FF80]" />
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <h3 className="text-3xl font-bold text-center mb-10">
          What{" "}
          <span className="bg-linear-to-r from-[#00A8FF] to-[#005DFF] bg-clip-text text-transparent">
            We Do
          </span>
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-colors"
            >
              <cap.icon className="w-10 h-10 mx-auto mb-3 text-blue-300" />
              <p className="text-slate-300 font-medium">{cap.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
