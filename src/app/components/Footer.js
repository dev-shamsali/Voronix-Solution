'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Voronix Solution
            </h3>
            <p className="text-slate-400">Building the future, one line of code at a time.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-slate-400 hover:text-purple-400 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-slate-400">
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>UI/UX Design</p>
              <p>Backend Systems</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <button className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Voronix Solution. All rights reserved. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}