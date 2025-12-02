'use client'

import { Code2, Globe, Shield, Rocket, Cpu, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 }
    }
  }

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
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          About{" "}
          <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
            VORONIX
          </span>
        </motion.h2>


        {/* New Paragraph Section */}
        <motion.p
          className="text-center text-slate-400 max-w-3xl mx-auto mb-16 text-lg leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          At VORONIX Solutions, we combine creativity, modern development, and industry best practices to craft digital products that not only work — but perform. Our team focuses on delivering seamless user experiences, scalable backend systems, and secure architectures. Every project we build is powered by strategy, innovation, and a passion for technology.
        </motion.p>


        {/* About Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sections.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 \
              rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_0_35px_#009DFF40]"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#00A8FF]/10 to-[#005DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10 text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-400 drop-shadow-[0_0_10px_#00A8FF80]" />
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities Title */}
        <motion.h3
          className="text-3xl font-bold text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          What{" "}
          <span className="bg-linear-to-r from-[#00A8FF] to-[#005DFF] bg-clip-text text-transparent">
            We Do
          </span>
        </motion.h3>

        {/* Capabilities Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-colors"
            >
              <cap.icon className="w-10 h-10 mx-auto mb-3 text-blue-300" />
              <p className="text-slate-300 font-medium">{cap.name}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
