'use client'

import { useState } from 'react'
import { Send, Mail, PhoneCall, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-linear-to-b from-[#040B16] to-[#020617]">

      {/* Flame Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00A8FF]/15 blur-3xl rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#005DFF]/20 blur-3xl rounded-full animate-float" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In{" "}
          <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        {/* Contact Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(0,168,255,0.15)]">

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 text-center">
            <div>
              <Mail className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-slate-300">contact@voronix.com</p>
            </div>
            <div>
              <PhoneCall className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-slate-300">+91 98765 43210</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-slate-300">India · Remote</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white 
                focus:outline-none focus:ring-2 focus:ring-[#00A8FF] focus:border-[#00A8FF] transition-all"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white
                focus:outline-none focus:ring-2 focus:ring-[#00A8FF] focus:border-[#00A8FF] transition-all"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white
              focus:outline-none focus:ring-2 focus:ring-[#00A8FF] focus:border-[#00A8FF] transition-all"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white 
              focus:outline-none focus:ring-2 focus:ring-[#00A8FF] focus:border-[#00A8FF] transition-all resize-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-linear-to-r from-[#00A8FF] to-[#005DFF] rounded-lg font-semibold text-white
              hover:shadow-[0_0_20px_#009DFF80] hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
