'use client'

import { ArrowRight } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A scalable online store with real-time inventory, secure checkout, and seamless user experience.",
      tech: ["Next.js", "Stripe", "MongoDB"],
      gradient: "from-[#00A8FF] to-[#005DFF]"
    },
    {
      title: "Design System Library",
      desc: "A reusable and consistent design system powering enterprise-grade user interfaces.",
      tech: ["React", "Storybook", "Tailwind"],
      gradient: "from-[#24C9FF] to-[#0099FF]"
    },
    {
      title: "Analytics Dashboard",
      desc: "Interactive dashboards delivering real-time insights and performance analytics.",
      tech: ["Python", "FastAPI", "Redis"],
      gradient: "from-[#005DFF] to-[#00C9FF]"
    },
    {
      title: "Social Media App",
      desc: "A dynamic digital community with real-time updates, messaging, and global connectivity.",
      tech: ["React Native", "Firebase", "TypeScript"],
      gradient: "from-[#008CFF] to-[#00E0FF]"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-linear-to-b from-[#020617]/80 to-[#040B16]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our{" "}
          <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-900/60 rounded-2xl border border-slate-800 
              hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
            >

              {/* Glowing Background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-10 
                group-hover:opacity-20 transition-opacity`}
              />

              {/* Card Content */}
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.desc}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm text-white bg-linear-to-r ${project.gradient}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Built By */}
                <p className="text-sm text-blue-300 mb-4 font-medium">
                  Built by the VORONIX Engineering Team
                </p>

                {/* Button */}
                <button
                  className={`px-6 py-2 rounded-full bg-slate-800 
                  hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center gap-2`}
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}