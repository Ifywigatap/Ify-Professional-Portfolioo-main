<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Card from '../components/Card';
import Button from '../components/Button';
import { serviceCategories, processSteps, techStack, faqs } from '../data/services';
import { testimonialItems } from '../data';

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

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Digital Services | IFYWIGATECHZ Global Services</title>
        <meta name="description" content="Comprehensive digital services including web development, UI/UX design, AI solutions, and tech training to help your business grow." />
      </Helmet>
      <motion.section 
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-3xl mb-16 text-center mx-auto" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent brand-accent">
            Digital Services for Businesses & Individuals
          </h1>
          <p className="text-slate-400 text-lg">
            From modern websites and web applications to UI/UX design,
            digital training, and AI-powered solutions, I help businesses
            build a strong digital presence and achieve their goals.
          </p>
        </motion.div>

        {serviceCategories.map((category) => (
          <div key={category.category} className="mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">{category.category}</motion.h2>
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
              {category.services.map((s) => {
                const Icon = s.icon;
                return (
                  <Card key={s.name} as="article" className="flex flex-col">
                    <Icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                    <p className="text-gray flex-grow">{s.desc}</p>
                    <div className="mt-6 pt-4 border-t border-slate-800">
                      <h4 className="font-semibold mb-2 text-white">What's Included:</h4>
                      <ul className="space-y-2">
                        {s.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </motion.div>
          </div>
        ))}
      </motion.section>

      <motion.section className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        <h2 className="text-3xl font-bold mb-8 text-center">My Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <Card key={step.title}>
              <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-gray">{step.description}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        <h2 className="text-3xl font-bold mb-8 text-center">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <span key={tech} className="brand-chip text-lg">{tech}</span>
          ))}
        </div>
      </motion.section>

      <motion.section className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        <h2 className="text-3xl font-bold mb-8 text-center">Client Feedback</h2>
        <div className="max-w-2xl mx-auto">
          <Card as="blockquote">
            <p className="text-slate-200 text-lg italic">“{testimonialItems[0].text}”</p>
            <p className="text-primary mt-4 font-medium text-right">— {testimonialItems[0].name}</p>
          </Card>
        </div>
      </motion.section>

      <motion.section className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
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

      <motion.section
        className="section mt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Let's discuss your goals and build a solution tailored to your needs.
        </p>
        <Button to="/contact" className="px-8 py-3 text-lg">
          Get a Free Consultation
        </Button>
      </motion.section>
    </>
=======
export default function Services() {
  const list = [
    { name: "Web Development (React)", desc: "Responsive, fast, SEO-ready websites and web apps." },
    { name: "UI/UX Design", desc: "Wireframes, prototypes, high-fidelity designs." },
    { name: "SEO & Optimization", desc: "On-page SEO, performance, and analytics." },
    { name: "NAPPMED", desc: "General OTC, First Aid, and Patent Medicine." },
    { name: "Real E-State Agent", desc: "Buying/Selling of Lands, Renting of Houses, and Houses for Sale." },
    { name: "Ifywigatechz Academy", desc: "Tech Education, Project-Based, and Freelance Consultant." },
  ]
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {list.map((s,i)=>(
          <div key={i} className="card">
            <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
            <p className="text-gray">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
>>>>>>> dee18ed8b9ae3064845e1b6b013169e740f619ef
  )
}
