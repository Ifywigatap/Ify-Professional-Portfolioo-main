import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialItems } from '../data';
import Card from '../components/Card';
import Button from '../components/Button';
import TestimonialForm from '../components/TestimonialForm';

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

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
    ))}
  </div>
);

export default function Testimonials(){
  const featuredTestimonial = testimonialItems[0];
  const clientTestimonials = testimonialItems.filter(t => t.type === 'Client' && t.name !== featuredTestimonial.name);
  const studentTestimonials = testimonialItems.filter(t => t.type === 'Student');

  return (
    <>
      <Helmet>
        <title>Testimonials | IFYWIGATECHZ Global Services</title>
        <meta name="description" content="See what clients and students are saying about IFYWIGATECHZ Global Services and Academy." />
      </Helmet>
      <motion.div className="section" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent brand-accent">
            What Clients & Students Say
          </h1>
          <p className="text-slate-400 text-lg">
            Feedback from clients, students, and collaborators who have worked with IFYWIGATECHZ Global Services.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-4 gap-4 mb-16" variants={containerVariants}>
          <Card className="text-center"><h3 className="text-3xl font-bold">10+</h3><p>Projects Completed</p></Card>
          <Card className="text-center"><h3 className="text-3xl font-bold">100%</h3><p>Client Satisfaction</p></Card>
          <Card className="text-center"><h3 className="text-3xl font-bold">5+</h3><p>Technologies</p></Card>
          <Card className="text-center"><h3 className="text-3xl font-bold">24/7</h3><p>Support</p></Card>
        </motion.div>

        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Testimonial</h2>
          <Card as="blockquote" className="max-w-3xl mx-auto text-center">
            <StarRating rating={featuredTestimonial.rating} />
            <p className="text-xl text-slate-300 italic">“{featuredTestimonial.text}”</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <img src={featuredTestimonial.image} alt={featuredTestimonial.name} className="w-14 h-14 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-white">{featuredTestimonial.name}</p>
                <p className="text-sm text-gray">{featuredTestimonial.role}</p>
              </div>
            </div>
          </Card>
        </motion.section>

        {clientTestimonials.length > 0 && (
          <motion.section className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientTestimonials.map((t) => (
                <Card key={t.name} as="blockquote" className="flex flex-col">
                  <StarRating rating={t.rating} />
                  <p className="text-slate-300 flex-grow">“{t.text}”</p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-800">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-gray">{t.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {studentTestimonials.length > 0 && (
          <motion.section className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center">Student Testimonials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentTestimonials.map((t) => (
                <Card key={t.name} as="blockquote" className="flex flex-col">
                  <StarRating rating={t.rating} />
                  <p className="text-slate-300 flex-grow">“{t.text}”</p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-800">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-gray">{t.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section className="mt-20 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Let's discuss your project and create something amazing.
          </p>
          <Button to="/contact">Contact Me</Button>
        </motion.section>
      </motion.div>

      <motion.section className="section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={itemVariants}>
        <TestimonialForm />
      </motion.section>
    </>
  )
}
