import { useState } from 'react'
export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setOk(null);
    try{
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
      const data = await res.json(); setOk(!!data.ok); if(data.ok) setForm({name:'',email:'',message:''})
    }catch{ setOk(false) } finally{ setLoading(false) }
  }
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Contact</h2>
      <form onSubmit={handleSubmit} className="card max-w-xl space-y-4">
        <div><label className="block text-sm mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" required/></div>
        <div><label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" required/></div>
        <div><label className="block text-sm mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" rows="5" required></textarea></div>
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send'}</button>
        {ok===true && <p className="text-green-600">Message sent. I’ll get back to you shortly.</p>}
        {ok===false && <p className="text-red-600">Failed to send. Please try again later.</p>}
      </form>
    </section>
  )
}
