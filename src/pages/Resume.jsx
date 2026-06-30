import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Mail, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

// Data for the page
const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',
  'Tailwind CSS', 'Git', 'GitHub', 'Figma', 'Paystack', 'Vercel', 'Python'
];

const TIMELINE = [
  { year: '2025', title: 'Founder & Lead Developer', company: 'IFYWIGATECHZ Global Services' },
  { year: '2024', title: 'Full-Stack MERN Developer', company: 'Freelance' },
  { year: '2020', title: 'B.Sc. Computer Science', company: 'National Open University' },
  { year: '2018', title: 'Diploma in Software Engineering', company: 'Aptech Computer Education' },
];

const PROJECT_HIGHLIGHTS = [
  { name: 'Kinglaw Paradise Builders', link: '/projects' },
  { name: 'Pharmacy Store Mockup', link: '/projects' },
  { name: 'Real Estate Platform', link: '/projects' },
  { name: 'WigaTechz Academy LMS', link: '/projects' },
];

const CERTIFICATIONS = [
  'Udemy Full Stack Web Development',
  'MERN Stack Training',
  'UI/UX Design Training',
  'Google Analytics',
];

const HIGHLIGHTS = [
  'Full-Stack MERN Development',
  'Responsive Web Design',
  'UI/UX Design (Figma)',
  'Paystack Integration',
  'Vercel Deployment & Serverless APIs',
  'Git & GitHub Collaboration',
];

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const CONTACT_INFO = [
    { name: 'Email', value: 'wigatech9@gmail.com', href: 'mailto:wigatech9@gmail.com', icon: Mail },
    { name: 'LinkedIn', value: 'LinkedIn Profile', href: '#', icon: LinkedInIcon },
    { name: 'GitHub', value: 'github.com/ifywigatap', href: 'https://github.com/ifywigatap', icon: GithubIcon },
    { name: 'WhatsApp', value: '+234 811 372 2088', href: 'https://wa.me/2348113722088', icon: MessageSquare },
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

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume | IFYWIGATECHZ Global Services</title>
        <meta
          name="description"
          content="View or download the professional resume of Ifeanyichukwu Oko Isu (IfyWigaTechz), Full-Stack MERN Developer and UI/UX Designer."
        />
      </Helmet>
      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div className="max-w-3xl mb-12" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent brand-accent">
            Resume & Professional Profile
          </h1>
          <p className="text-slate-400 text-lg">
            Full-Stack MERN Developer, UI/UX Designer, and Founder of IFYWIGATECHZ Academy. Passionate about building modern web applications and helping others learn digital skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Sidebar */}
          <motion.aside className="lg:col-span-1 lg:sticky top-24 space-y-8" variants={itemVariants}>
            <Card className="text-center">
              <img
                src="/replacelogo.jpeg"
                alt="IfyWigaTechz"
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-2xl font-bold">Ifeanyichukwu Oko Isu</h2>
              <p className="text-primary">Full-Stack Developer</p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                {CONTACT_INFO.map(info => {
                  const Icon = info.icon;
                  return (
                    <a key={info.name} href={info.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 brand-link">
                      <Icon className="w-5 h-5" />
                      <span>{info.value}</span>
                    </a>
                  )
                })}
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(skill => (
                  <span key={skill} className="brand-chip text-sm">{skill}</span>
                ))}
              </div>
            </Card>
          </motion.aside>

          {/* Right Content */}
          <motion.div className="lg:col-span-2 space-y-12" variants={containerVariants}>
            {/* Professional Summary */}
            <motion.div variants={itemVariants}>
              <Card>
                <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
                <p className="text-gray">
                  Full-Stack Developer with experience building modern web applications using React, Node.js, MongoDB, Tailwind CSS, and Vercel. Proven ability to deliver high-quality, responsive, and scalable solutions for clients across various industries. Passionate about teaching and mentoring through IFYWIGATECHZ Academy.
                </p>
              </Card>
            </motion.div>

            {/* Download Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <Button href="/resume.pdf" download>Download as PDF</Button>
              <Button href="/resume.pdf" variant="outline" target="_blank" rel="noreferrer">Open in new tab</Button>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {HIGHLIGHTS.map(highlight => (
                  <div key={highlight} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1.5 w-0.5 bg-slate-700" aria-hidden="true"></div>
                {TIMELINE.map((item) => (
                  <div key={item.title} className="relative pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-1 w-4 h-4 bg-accent rounded-full border-4 border-dark"></div>
                    <p className="text-sm text-slate-400">{item.year}</p>
                    <h4 className="text-lg font-semibold text-white mt-1">{item.title}</h4>
                    <p className="text-indigo-400 text-sm">{item.company}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Highlights */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Project Highlights</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {PROJECT_HIGHLIGHTS.map(project => (
                  <Link to={project.link} key={project.name}>
                    <Card className="hover:border-primary transition-colors h-full">
                      <p className="font-semibold">{project.name} →</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-2">
                {CERTIFICATIONS.map(cert => (
                  <li key={cert} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-slate-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Embedded PDF */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">View Resume</h3>
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0"
                title="Resume of Isu Ifeanyichukwu Oko"
                className="w-full h-[900px] rounded-xl border border-slate-700"
              />
            </motion.div>

            {/* CTA */}
            <motion.section className="text-center pt-8" variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
              <Button to="/contact" className="px-8 py-3 text-lg">Contact Me</Button>
            </motion.section>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
