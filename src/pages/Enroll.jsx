import { useState } from 'react'
import PaystackButton from '../components/PaystackButton'
export default function Enroll() {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState(100000)
  return (
    <section className="section max-w-xl">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Enroll / Book a Session</h2>
      <div className="card space-y-4">
        <div>
          <label className="block text-sm mb-1">Your Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)}
            className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" placeholder="you@example.com"/>
        </div>
        <div>
          <label className="block text-sm mb-1">Amount (NGN)</label>
          <input type="number" value={amount} onChange={e => setAmount(parseInt(e.target.value || '0', 10))}
            className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800"/>
        </div>
        <PaystackButton email={email} amount={amount} />
        <p className="text-gray text-sm">Payments are processed by Paystack. You’ll receive a confirmation after payment.</p>
      </div>
    </section>
  )
}
