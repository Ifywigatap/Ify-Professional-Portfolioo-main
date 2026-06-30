import { useState } from 'react';
import Button from './Button';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // This assumes you have an API endpoint at /api/newsletter
    // similar to your contact form's endpoint.
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage('Success! Thanks for subscribing.');
        setEmail('');
      } else {
        const data = await res.json();
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Join the IFYWIGATECHZ Newsletter</h2>
      <p className="text-slate-400 mb-6">Receive web development tutorials, AI insights, and career tips directly in your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-grow bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
        <Button type="submit" disabled={loading}>{loading ? 'Subscribing...' : 'Subscribe'}</Button>
      </form>
      {message && <p className="mt-4 text-sm text-slate-400">{message}</p>}
    </div>
  );
}