/**
 * Pricing tiers for services — kept content intact but improved markup
 * for accessibility and maintainability.
 */
const TIERS = [
  {
    name: 'Professional Portfolio Website',
    price: '₦90k–₦100k',
    features: ['1–3 pages', 'Responsive design', 'Basic SEO', '1 round of revisions'],
  },
  {
    name: 'Landing Pages Website',
    price: '₦100k–₦150k',
    features: ['1–4 pages', 'Responsive design', 'Basic SEO', '1 round of revisions'],
  },
  {
    name: 'Construction Website',
    price: '₦180k–₦250k',
    features: ['1–5 pages', 'Responsive design', 'Basic SEO', '1 round of revisions'],
  },
  {
    name: 'Real Estate Website',
    price: '₦250k–₦280k',
    features: ['1–7 pages', 'Responsive design', 'Basic SEO', '1 round of revisions'],
  },
  {
    name: 'Business/E-Commerce Website',
    price: '₦250k–₦400k',
    features: ['5–14 pages', 'Contact/Lead forms', 'SEO setup', '2–3 revisions'],
  },
  {
    name: 'Web App (Serverless)',
    price: 'Custom Quote',
    features: ['Auth, API endpoints', 'Admin panel', 'Paystack integration', 'Ongoing support'],
  },
  {
    name: 'Banking Web App (Serverless, DataBase management)',
    price: 'Custom Quote',
    features: ['Auth, API endpoints', 'Admin panel', 'Paystack integration', 'Ongoing support'],
  },
]

export default function Pricing() {
  return (
    <section className="section" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading" className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">
        Pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {TIERS.map((tier) => {
          const id = tier.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()
          return (
            <article key={id} className="card" aria-labelledby={`tier-${id}`}>
              <header>
                <h3 id={`tier-${id}`} className="text-xl font-semibold">
                  {tier.name}
                </h3>
                <p className="text-primary text-lg mt-1" aria-hidden>
                  {tier.price}
                </p>
              </header>

              <div className="mt-4" aria-label={`${tier.name} features`}>
                <ul className="list-disc list-inside text-gray space-y-2">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <a href="/enroll" className="btn btn-primary" aria-label={`Get started with ${tier.name}`}>
                  Get Started
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
