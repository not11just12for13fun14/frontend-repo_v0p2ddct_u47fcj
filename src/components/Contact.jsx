import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_0%,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">
          <h2 className="text-3xl font-bold text-white">Work With Me</h2>
          <p className="mt-2 text-slate-300/85">Have an idea or need a custom design for your Merch by Amazon listings? Send a message.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input name="name" placeholder="Your name" required className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-300/60" />
            <input name="email" type="email" placeholder="Email" required className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-300/60" />
            <textarea name="message" placeholder="Tell me about your project" rows={5} required className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-300/60" />
            <div className="flex items-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-cyan-500/30 hover:scale-[1.02] active:scale-95 transition">Send</button>
              {status === 'sent' && <span className="text-cyan-300">Thanks! I will reply shortly.</span>}
              {status === 'error' && <span className="text-red-300">Could not send. Try again.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
