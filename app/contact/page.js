'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
  }

  return (
    <main className="pt-20 pb-16">
      <section className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-center">Schedule Your Demo</h1>
        <p className="text-lg text-gray-600 text-center mb-12">Let us show you how OCTR can save your building 15-30% on energy costs.</p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg">
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded" placeholder="Your name" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded" placeholder="your@email.com" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Company</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-2 border rounded" placeholder="Your company" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded" placeholder="+1 (555) 000-0000" />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-2 border rounded" placeholder="Tell us about your building and energy goals..."></textarea>
          </div>

          <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded font-bold hover:bg-teal-700">
            Send Demo Request
          </button>
        </form>
      </section>
    </main>
  )
}
