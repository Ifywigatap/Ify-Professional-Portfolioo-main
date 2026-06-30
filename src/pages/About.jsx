<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const TECH_STACK = [
  { title: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Zustand'] },
  { title: 'Backend & AI', items: ['Node.js (MERN)', 'Python LLMs', 'Vercel Serverless APIs'] },
  { title: 'Mobile', items: ['React Native'] },
  { title: 'Payments & Tools', items: ['Paystack', 'Git', 'Figma', 'WSL 2'] },
];

const STATS = [
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '100%', label: 'Responsive Design' },
  { value: '24/7', label: 'Support & Maintenance' },
];

const SERVICES = [
  'Business Websites',
  'E-commerce Stores',
  'Portfolio Websites',
  'Real Estate Platforms',
  'POS Systems',
  'Learning Management Systems',
  'Admin Dashboards',
  'AI-Powered Applications',
];

const CERTIFICATIONS = [
  'Udemy Full Stack Web Development',
  'MERN Stack Training',
  'UI/UX Design Training',
  'Google Analytics',
];

const EDUCATION = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'National Open University of Nigeria',
    period: '2020 – 2024',
    description: 'Specialized in software engineering and database management.',
  },
  {
    degree: 'Diploma in Software Engineering',
    institution: 'Aptech Computer Education',
    period: '2018 – 2020',
    description: 'Gained foundational skills in programming and web development.',
  },
];

const WORK_EXPERIENCE = [
  {
    role: 'Founder & Lead Developer',
    company: 'IFYWIGATECHZ Global Services',
    period: '2025 – Present',
    description: 'Led the development of various client projects, including e-commerce platforms and real estate websites. Founded and managed the IFYWIGATECHZ Academy to train aspiring developers.',
  },
  {
    role: 'Full-Stack MERN Developer',
    company: 'Freelance',
    period: '2024 – 2025',
    description: 'Collaborated with clients to build and deploy modern, responsive web applications. Specialized in creating custom solutions tailored to business needs.',
  },
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

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
  </svg>
);

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/ifywigatap', icon: <GithubIcon /> },
  { name: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1MbgZWskdZ/', icon: <FacebookIcon /> },
  { name: 'YouTube', href: 'https://youtube.com/@ifywigatechz-k3n?si=o45r4h68cUDskllB', icon: <YouTubeIcon /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          About Ify Wigatechz | Full Stack Developer
        </title>
        <meta
          name="description"
          content="Learn more about Ifeanyichukwu Oko Isu (Ify Wigatechz), Full Stack MERN Developer, UI/UX Designer, Tech Educator, and Founder of IFYWIGATECHZ Academy."
        />
      </Helmet>
      <section className="section py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-3 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <article className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-6"
            >
              About Me
            </motion.h2>

            <motion.p variants={itemVariants}>
              My name is Ifeanyichukwu Oko Isu — professionally known as <strong className="text-white font-semibold">Ify Wigatechz</strong>. I am a passionate and versatile Full-Stack Web Developer, UI/UX Designer, and Digital Skills Trainer based in Port Harcourt, Nigeria. My work is guided by a single vision: create modern digital solutions that empower individuals, businesses, and communities to thrive in the digital age.
            </motion.p>

            <motion.p variants={itemVariants}>
              I specialize in both front-end and back-end development with a strong focus on technologies such as React, Vite, Tailwind CSS, the MERN stack, and serverless architectures. My projects emphasize performance, security, and exceptional user experience — whether building corporate sites, point-of-sale systems, e-commerce platforms, or educational portals.
            </motion.p>

            <motion.p variants={itemVariants}>
              As the founder of <Link to="/learn" className="text-white font-semibold underline hover:text-primary transition-colors">Ifywigatechz Academy</Link>, I am committed to teaching and mentoring learners and entrepreneurs with practical, hands-on skills in web development, UI/UX design, and digital content creation.
            </motion.p>

            <motion.p variants={itemVariants}>
              Over the years, I have collaborated with clients across industries — from real estate and construction to branding platforms and personal blogs — delivering solutions that reflect professionalism, creativity, and measurable impact. Beyond coding, I advocate for community growth and knowledge sharing, aiming to create more access to global opportunities for young people in Africa through education and mentorship.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-700 p-4 text-center"
                >
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">What I Can Build</h3>
              <div className="flex flex-wrap gap-3">
                {SERVICES.map((service) => (
                  <span key={service} className="brand-chip">{service}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
              <div className="relative border-l-2 border-slate-700 pl-8 space-y-10">
                {WORK_EXPERIENCE.map((job) => (
                  <div key={job.role} className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-accent rounded-full border-4 border-slate-900"></div>
                    <p className="text-sm text-slate-400">{job.period}</p>
                    <h4 className="text-lg font-semibold text-white mt-1">{job.role}</h4>
                    <p className="text-indigo-400">{job.company}</p>
                    <p className="mt-2 text-slate-300">{job.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="relative border-l-2 border-slate-700 pl-8 space-y-10">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="relative">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-accent rounded-full border-4 border-slate-900"></div>
                    <p className="text-sm text-slate-400">{edu.period}</p>
                    <h4 className="text-lg font-semibold text-white mt-1">{edu.degree}</h4>
                    <p className="text-indigo-400">{edu.institution}</p>
                    <p className="mt-2 text-slate-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-slate-300">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mt-8">
              <p className="text-lg text-white font-medium italic">
                "Learn fast. Build fast. Tech to success."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6 flex gap-4">
              <Button to="/contact">
                Work With Me
              </Button>
              <Button
                href="/Ifeanyichukwu Oko Isu (Ify Wigatap) – Resume.pdf"
                variant="outline"
                download
              >
                Download CV
              </Button>
            </motion.div>
          </article>

          <motion.aside 
            variants={itemVariants}
            className="bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-800 sticky top-24"
            aria-labelledby="tech-stack-heading"
          >
            <img src="/replacelogo.jpeg" alt="A photo of Isu Ifeanyichukwu Oko" className="rounded-2xl w-full h-auto object-cover shadow-lg mb-6" />
            <h3 id="tech-stack-heading" className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
              Tech Stack
            </h3>
            <div className="space-y-5">
              {TECH_STACK.map((group) => (
                <div key={group.title}>
                  <h4 className="text-indigo-400 font-semibold mb-2">{group.title}</h4>
                  <ul className="space-y-1.5">
                    {group.items.map((it) => (
                      <li key={it} className="flex items-center text-slate-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2.5"></span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Connect with Me
              </h3>
              <div className="flex flex-col space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-link text-sm flex items-center gap-3"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </section>
    </>
  );
}
=======
const TECH_STACK = [
  { title: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS'] },
  { title: 'Backend', items: ['MERN', 'Vercel Serverless APIs'] },
  { title: 'Payments', items: ['Paystack'] },
  { title: 'Tools', items: ['Git', 'Vercel', 'Figma', 'Postman'] },
]

export default function About() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <article className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent brand-accent">About Me</h2>

          <p className="text-white">
            My name is Ifeanyichukwu Oko Isu — professionally known as <strong>Ify Wigatechz</strong>. I am a passionate and versatile Full-Stack Web
            Developer, UI/UX Designer, and Digital Skills Trainer based in Port Harcourt, Nigeria. My work is guided by a single vision: create modern
            digital solutions that empower individuals, businesses, and communities to thrive in the digital age.
          </p>

          <p className="text-white">
            I specialize in both front-end and back-end development with a strong focus on technologies such as React, Vite, Tailwind CSS, MERN,
            and serverless backends deployed on Vercel. My projects emphasize performance, security, and great user experience — whether building
            corporate sites, e-commerce platforms, or educational portals.
          </p>

          <p className="text-white">
            As the founder of Ifywigatechz Academy, I am committed to teaching and mentoring learners and entrepreneurs with practical,
            hands-on skills in web development, UI/UX design, and digital marketing. I follow the mantra: <em>“Learn fast. Build fast. Tech to success.”</em>
          </p>

          <p className="text-white">
            Over the years, I have collaborated with clients across industries — from real estate and construction to branding platforms and
            personal blogs — delivering solutions that reflect professionalism, creativity, and measurable impact.
          </p>

          <p className="text-white">
            Beyond coding, I advocate for community growth and knowledge sharing. Technology is a powerful tool for empowerment, especially
            for young people in Africa, and I aim to create more access to global opportunities through education and mentorship.
          </p>

          <p className="text-white">
            Looking ahead, I will continue evolving as a developer, educator, and entrepreneur — building platforms that serve businesses and
            inspire the next generation of digital creators. I bring excellence, innovation, and integrity to every project.
          </p>

          <p className="text-white">
            <strong>Mantra:</strong> <span className="text-primary">Learn fast. Build fast. Tech to success.</span>
          </p>

          <div className="mt-4">
            <a href="/contact" className="btn btn-primary">Work with me / Contact</a>
          </div>
        </article>

        <aside className="card" aria-labelledby="tech-stack-heading">
          <h3 id="tech-stack-heading" className="font-semibold text-lg mb-3">Tech Stack</h3>
          <div className="text-gray space-y-3">
            {TECH_STACK.map((group) => (
              <div key={group.title}>
                <div className="font-medium">{group.title}:</div>
                <ul className="list-disc list-inside ml-4 text-slate-300">
                  {group.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
>>>>>>> dee18ed8b9ae3064845e1b6b013169e740f619ef
