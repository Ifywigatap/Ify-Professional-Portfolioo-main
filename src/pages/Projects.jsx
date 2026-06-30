<<<<<<< HEAD
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { projectItems } from '../data/projects';
import Card from '../components/Card';
import Button from '../components/Button';

// Dynamically generate categories from project data
const categories = ['All', ...new Set(projectItems.map((p) => p.category))];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectItems
      : projectItems.filter((p) => p.category === activeFilter);
  return (
    <>
      <Helmet>
        <title>
          Projects | IFYWIGATECHZ Global Services
        </title>
        <meta
          name="description"
          content="Explore web development, MERN stack, UI/UX, e-commerce, real estate, and AI-powered projects built by IfyWigaTechz."
        />
      </Helmet>
      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent brand-accent">My Work</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm md:text-base rounded-lg transition-colors ${
                  activeFilter === category ? 'btn btn-primary' : 'btn btn-outline'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </header>
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={p.title}>
                <Card className="h-full overflow-hidden hover:border-primary transition p-0 flex flex-col">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <div className="flex-grow">
                      <p className="text-gray">{p.desc}</p>
                      {p.metrics && (
                        <ul className="mt-4 space-y-2">
                          {p.metrics.map((metric) => (
                            <li key={metric} className="flex items-center gap-2 text-sm text-slate-300">
                              <svg className="w-4 h-4 text-green-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {p.tech.map((item) => (
                          <span key={item} className="px-2 py-1 rounded-md text-xs bg-slate-800">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4 pt-4 border-t border-slate-800">
                      <Button href={p.demo} target="_blank" rel="noopener noreferrer" className="text-sm flex-1 text-center justify-center">Live Demo</Button>
                      <Button href={p.github} target="_blank" rel="noopener noreferrer" variant="outline" className="text-sm flex-1 text-center justify-center">GitHub</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Need a Similar Project?</h2>
          <p className="text-slate-400 mb-6">Let's build something amazing together.</p>
          <Button to="/contact">
            Start Your Project
          </Button>
        </motion.div>
      </motion.section>
    </>
=======
const Card = ({ title, desc, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="card hover:border-primary transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray">{desc}</p>
  </a>
)
export default function Projects() {
  const items = [
    { title: "WigaTechz Academy", desc: "Educational platform and landing pages.", link: "https://ifywigatechz-academy.vercel.app/" },
    { title: "KingLaw Paradise Builders", desc: "Construction company site on Live Production.", link: "https://www.kinglawparadisebuilders.com/" },
    { title: "De Prince Plumbers", desc: "Plumbing construction site with gallery and CTA.", link: "https://nwabest-plumbers.vercel.app/" },
    { title: "Fidel Technology Concept LTD", desc: "Tiling site with gallery and CTA.", link: "https://fidel-technology-concept-ltd.vercel.app/" },
    { title: "Mock Restaurant Ready for Real Project", desc: "Restaurant Site.", link: "https://restaurant-landing-page-sand-six.vercel.app/" },
    { title: "SmartFix Computer Repairs", desc: "Landing site.", link: "https://smart-fix-computer-repairs.vercel.app/" },
    { title: "Mock Professional site On Carpentry", desc: "Professional site with gallery and CTA.", link: "https://professional-carpenter.vercel.app/" },
    { title: "Vibe Coding Making a quote generator", desc: "Quote Generator.", link: "https://random-quote-generator-gamma.vercel.app/" },
    { title: "Mock couches Store Website And Ready for Production", desc: "Couches Store site with gallery and CTA.", link: "https://couches-store.vercel.app/" },
    { title: "Mock Sand Dumps ready for production", desc: "SandDumps site with gallery and CTA.", link: "https://sand-dumps.vercel.app/" },
  
  ]
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{items.map((p,i)=><Card key={i} {...p} />)}</div>
    </section>
>>>>>>> dee18ed8b9ae3064845e1b6b013169e740f619ef
  )
}
