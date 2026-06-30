import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PaystackButton from '../components/PaystackButton';
import Card from '../components/Card';

// Data for the page
const COURSES = [
  {
    id: 'mern',
    name: 'Full MERN Stack',
    amount: 100000,
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    features: ['HTML & CSS', 'JavaScript', 'React', 'Node.js & Express', 'MongoDB', 'Deployment', 'Real Projects'],
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    amount: 50000,
    duration: '8 Weeks',
    level: 'Beginner to Intermediate',
    features: ['HTML & CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git & GitHub'],
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    amount: 60000,
    duration: '6 Weeks',
    level: 'Beginner',
    features: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    amount: 80000,
    duration: '10 Weeks',
    level: 'Intermediate',
    features: ['Python', 'LangChain', 'OpenAI API', 'Vector Databases', 'Automation Workflows'],
  },
];

const FAQS = [
    { question: 'How do I access classes?', answer: 'After successful payment, you will receive an email with your login details and a link to our learning portal.' },
    { question: 'Will I get recordings?', answer: 'Yes, all live sessions are recorded and will be available for you to watch anytime in your student dashboard.' },
    { question: 'Do I receive mentorship?', answer: 'Absolutely. You will have access to mentor support throughout the course to help you with challenges and code reviews.' },
    { question: 'Will I get projects to build?', answer: 'Yes, our training is heavily project-based. You will build several real-world projects to add to your portfolio.' },
    { question: 'Do I receive a certificate?', answer: 'Upon successful completion of the course and all projects, you will receive a verifiable certificate from IFYWIGATECHZ Academy.' },
];

const TRUST_INDICATORS = [
    'Secure Paystack Payments',
    'Instant Confirmation',
    'Practical Project-Based Learning',
    'Mentor Support',
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

export default function Enroll() {
  const [selectedCourseId, setSelectedCourseId] = useState(COURSES[0].id);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const selectedCourse = useMemo(() => COURSES.find(c => c.id === selectedCourseId), [selectedCourseId]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const isFormValid = form.name && form.email.includes('@') && form.phone;

  return (
    <>
      <Helmet>
        <title>Enroll | IFYWIGATECHZ Academy</title>
        <meta name="description" content="Enroll in web development, UI/UX design, AI, and digital skills training with IFYWIGATECHZ Academy." />
      </Helmet>
      <motion.section className="section" variants={containerVariants} initial="hidden" animate="visible">
        {/* 1. Hero Section */}
        <motion.div className="max-w-4xl mb-10 text-center mx-auto" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent brand-accent">Join IFYWIGATECHZ Academy</h1>
          <p className="text-slate-400 text-lg">
            Learn modern web development, UI/UX design, AI tools, and digital skills through practical, project-based training.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* 2. Course Selection */}
            <motion.div variants={itemVariants}>
              <label htmlFor="course-select" className="block text-lg font-semibold mb-2">Select a Course</label>
              <select
                id="course-select"
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800 text-lg"
              >
                {COURSES.map(course => (
                  <option key={course.id} value={course.id}>{course.name}</option>
                ))}
              </select>
            </motion.div>

            {/* 3. Course Details */}
            {selectedCourse && (
              <motion.div variants={itemVariants}>
                <Card>
                  <h2 className="text-2xl font-bold mb-4">{selectedCourse.name}</h2>
                  <div className="flex gap-4 text-slate-500 mb-4">
                    <span>Duration: {selectedCourse.duration}</span>
                    <span>Level: {selectedCourse.level}</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-slate-700">You'll Learn:</h3>
                  <ul className="grid grid-cols-2 gap-2 text-slate-600">
                    {selectedCourse.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">✓ {feature}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )}

            {/* 4. Student Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Your Information</h2>
              <form className="card space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">Full Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">Email Address</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm mb-1">Phone Number</label>
                  <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-xl bg-white border border-line px-4 py-3 text-slate-800" required />
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:sticky top-24 space-y-6">
            {/* 5. Order Summary */}
            {selectedCourse && (
              <motion.div variants={itemVariants}>
                <Card>
                  <h3 className="text-xl font-bold mb-4 border-b border-line pb-2">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray">Course:</span>
                      <span className="font-semibold">{selectedCourse.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray">Duration:</span>
                      <span className="font-semibold">{selectedCourse.duration}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-line mt-2">
                      <span>Total:</span>
                      <span>₦{selectedCourse.amount.toLocaleString()}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* 6. Payment Button & Trust Indicators */}
            <motion.div variants={itemVariants} className="card">
              <PaystackButton email={form.email} amount={selectedCourse?.amount || 0} disabled={!isFormValid} />
              <div className="mt-4 space-y-2">
                {TRUST_INDICATORS.map(indicator => (
                  <p key={indicator} className="flex items-center gap-2 text-sm text-gray">✓ {indicator}</p>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-line text-sm text-gray">
                <p className="font-semibold mb-1">After successful payment:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>You'll receive an email confirmation.</li>
                  <li>Course access details will be sent.</li>
                  <li>You'll get the training schedule and support contact.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 7. FAQ Section */}
        <motion.section className="mt-20" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq) => (
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

        {/* 8. WhatsApp Support */}
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <a href="https://wa.me/2348113722088" target="_blank" rel="noreferrer" className="brand-link underline">
            Need Help? Chat on WhatsApp
          </a>
        </motion.div>
      </motion.section>
    </>
  )
}
