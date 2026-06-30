import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <>
      <Helmet>
        <title>Showcase - IFYWIGATECHZ Global Services</title>
        <meta name="description" content="A showcase of my best work and case studies." />
      </Helmet>
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">My Showcase</h2>
        <p className="text-white">This is your new showcase page. You can add case studies, featured projects, or anything else you want to highlight here!</p>
      </motion.section>
    </>
  );
}