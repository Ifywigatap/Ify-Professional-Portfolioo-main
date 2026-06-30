import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { TIERS, trustIndicators, pricingFaqs } from '../data/pricing';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing - IFYWIGATECHZ Global Services</title>
        <meta name="description" content="Flexible pricing tiers for web development, e-commerce, and custom application services." />
      </Helmet>
      <motion.section 
        className="section" 
        aria-labelledby="pricing-heading"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-4xl font-bold mb-4 bg-clip-text text-transparent brand-accent">
            Flexible Pricing for Your Needs
          </h2>
          <p className="text-lg text-gray">
            Choose a plan that fits your project, or contact me for a custom quote on a unique build.
          </p>
          <p className="text-sm text-gray mt-3">
            All packages include consultation, responsive design, deployment assistance, and post-launch support.
          </p>
        </header>

        {/* Trust Indicators */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" variants={containerVariants}>
          {trustIndicators.map((indicator) => (
            <Card key={indicator.title}>
              <h3 className="font-semibold text-lg text-white">{indicator.title}</h3>
              <p className="text-sm text-gray mt-1">{indicator.description}</p>
            </Card>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((tier) => {
            const hasBadge = tier.badge;
            const id = tier.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
            return (
              <div key={id} className="relative">
                <Card as="article" aria-labelledby={`tier-${id}`} className={`flex flex-col h-full ${hasBadge ? 'border-primary border-2' : ''}`}>
                  <header>
                    <div className="flex justify-between items-center">
                    <h3 id={`tier-${id}`} className="text-xl font-semibold">
                      {tier.name}
                    </h3>
                      {tier.delivery && <span className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">{tier.delivery}</span>}
                    </div>
                    <p className="text-primary text-2xl font-bold mt-2">
                      {tier.price}
                    </p>
                  </header>

                  <div className="mt-6 flex-grow" aria-label={`${tier.name} features`}>
                    <ul className="space-y-2">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          <span className="text-gray">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm mt-4 text-gray">
                      Built with modern technologies like React & Node.js for speed and reliability.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link to={`/contact?service=${encodeURIComponent(tier.name)}`} className="btn btn-primary w-full text-center" aria-label={`Start project with ${tier.name}`}>
                      Start Project
                    </Link>
                  </div>
                </Card>
                {hasBadge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                    {tier.badge}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <motion.section className="mt-20 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-gray mb-6 max-w-xl mx-auto">
            Every project is unique. Let's discuss your requirements and create a tailored solution.
          </p>
          <Button to="/contact">
            Request a Quote
          </Button>
        </motion.section>

        <motion.section className="mt-20" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {pricingFaqs.map((faq) => (
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

        <motion.section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/30 p-10 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">Ready to Bring Your Idea to Life?</h2>
          <p className="text-gray mb-6 max-w-xl mx-auto">
            Let's build a modern website, web application, or digital solution tailored to your goals.
          </p>
          <Button to="/contact" className="px-8 py-3 text-lg">
            Contact Me
          </Button>
        </motion.section>
      </motion.section>
    </>
  )
}
