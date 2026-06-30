<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import PaystackButton from '../components/PaystackButton';
import Card from '../components/Card';

const SERVICE_OPTIONS = ['Web Development', 'UI/UX Design', 'E-Commerce', 'AI Solutions', 'Training', 'Other'];

const PAYMENT_OPTIONS = [
  { id: 'consult', name: 'Consultation Fee - ₦25,000', amount: 25000 },
  { id: 'deposit', name: 'Project Deposit - ₦50,000', amount: 50000 },
  { id: 'frontend', name: 'Frontend Training - ₦50,000', amount: 50000 },
  { id: 'mern', name: 'MERN Training - ₦100,000', amount: 100000 },
];

const CONTACT_FAQS = [
    { question: 'How much does a website cost?', answer: 'The cost varies depending on the project scope. A starter website begins at around ₦100,000, while custom applications are quoted individually. Please check the Pricing page for more details or request a custom quote.' },
    { question: 'How long does development take?', answer: 'A typical business website takes 2-4 weeks. More complex projects can take longer. We will agree on a clear timeline before we begin.' },
    { question: 'Do you provide maintenance?', answer: 'Yes, I offer ongoing maintenance and support packages to ensure your website remains secure and up-to-date.' },
    { question: 'Can I pay in installments?', answer: 'Yes, for larger projects, we can agree on a payment plan, which typically involves an upfront deposit and milestone-based payments.' },
];

const TRUST_INDICATORS = [
  '✓ Secure Payments',
  '✓ Fast Delivery',
  '✓ Professional Support',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  // State for contact form
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', service: SERVICE_OPTIONS[0], message: '' })
  const [searchParams] = useSearchParams();

  // State for payment form
  const [paymentEmail, setPaymentEmail] = useState('');
  const [selectedPaymentId, setSelectedPaymentId] = useState(PAYMENT_OPTIONS[0].id);

  const selectedPayment = useMemo(() => PAYMENT_OPTIONS.find(p => p.id === selectedPaymentId), [selectedPaymentId]);
  const paymentAmount = selectedPayment?.amount || 0;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      const matchingService = SERVICE_OPTIONS.find(opt => opt.toLowerCase().includes(service.toLowerCase()));
      setForm(prevForm => ({
        ...prevForm,
        service: matchingService || service,
        message: `I'm interested in the "${service}" package. Please provide more details.`
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setOk(!!data.ok);
      if (data.ok) {
        setForm({ name: '', email: '', service: SERVICE_OPTIONS[0], message: '' });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  // Sync payment email with contact form email
  useEffect(() => {
    setPaymentEmail(form.email);
  }, [form.email]);

  return (
    <>
      <Helmet>
        <title>Contact | IFYWIGATECHZ Global Services</title>
        <meta name="description" content="Get in touch for project inquiries, consultations, or to make a payment for services. Learn about web development, UI/UX, and AI solutions." />
        <meta property="og:title" content="Contact IFYWIGATECHZ Global Services" />
        <meta property="og:image" content="/Ifylogo.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <motion.section 
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center max-w-2xl mx-auto mb-12" variants={itemVariants}>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent brand-accent">Get In Touch</h1>
          <p className="text-lg text-gray">Have a project in mind or want to book a session? Send me a message or use the payment form below.</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-4 mb-12" variants={containerVariants}>
          {TRUST_INDICATORS.map(text => (
            <Card key={text} className="text-center font-semibold">{text}</Card>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <Card className="space-y-3">
              <h3 className="font-semibold text-lg">Contact Information</h3>
              <p>📧 wigatech9@gmail.com</p>
              <p>📱 +234 811 372 2088</p>
              <p>📍 Port Harcourt, Rivers State, Nigeria</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-lg mb-2">Availability</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
            </Card>
          </motion.div>

          {/* Middle Column: Contact Form */}
          <motion.div className="md:col-span-2 space-y-6" variants={itemVariants}>
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="card space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">Full Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" required />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm mb-1">Service of Interest</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800">
                  {SERVICE_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-1">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" rows="5" required></textarea>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Button type="submit" disabled={loading} className="w-full md:w-auto">{loading ? 'Sending…' : 'Send Message'}</Button>
                <p className="text-sm text-gray">Average response time: within 24 hours.</p>
              </div>
              {ok===true && <p className="text-green-600">Message sent. I’ll get back to you shortly.</p>}
              {ok===false && <p className="text-red-600">Failed to send. Please try again later.</p>}
            </form>
            <Button href="https://wa.me/2348113722088" target="_blank" rel="noreferrer" className="w-full justify-center text-lg">
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>

        {/* Payment Section */}
        <motion.section className="mt-20" variants={itemVariants}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Make a Payment</h2>
            <p className="text-gray mb-6">For consultations, course fees, or project deposits.</p>
            <div className="card space-y-4 text-left">
              <div>
                <label htmlFor="payment-option" className="block text-sm mb-1">Select Payment Reason</label>
                <select id="payment-option" value={selectedPaymentId} onChange={e => setSelectedPaymentId(e.target.value)} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800">
                  {PAYMENT_OPTIONS.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="payment-email" className="block text-sm mb-1">Your Email</label>
                <input id="payment-email" type="email" value={paymentEmail} onChange={e => setPaymentEmail(e.target.value)} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" placeholder="you@example.com" required />
              </div>
              <div className="text-center">
                <p className="text-gray mb-2">Amount: <span className="font-bold text-slate-600">₦{paymentAmount.toLocaleString()}</span></p>
                <PaystackButton email={paymentEmail} amount={paymentAmount} disabled={!paymentEmail.includes('@') || paymentAmount <= 0} />
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section className="mt-20" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {CONTACT_FAQS.map((faq) => (
              <details key={faq.question} className="card p-0 overflow-hidden">
                <summary className="p-6 font-semibold text-lg cursor-pointer flex justify-between items-center">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </summary>
                <div className="px-6 pb-6 border-t border-slate-800">
                  <p className="text-gray mt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </motion.section>
      </motion.section>
    </>
=======
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
>>>>>>> dee18ed8b9ae3064845e1b6b013169e740f619ef
  )
}
