import { Helmet } from 'react-helmet-async';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { featuredProjects, services } from '../data/home';
import { testimonialItems } from '../data';
import { posts } from '../data/posts';
import { useEffect } from 'react';

// Animation variants for the container and its items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function AnimatedCounter({ to, suffix = '' }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    const animation = animate(count, to, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [to, count]);

  return <motion.span>{rounded}</motion.span>;
}

const ReactIcon = () => (
  <svg className="w-5 h-5" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m11.733 21.066-5.9-3.408V6.408l5.9-3.408 5.9 3.408v11.25l-5.9 3.408ZM7.067 16.41V7.657l4.666-2.694v8.753L7.067 16.41Z" fill="#8CC84B"/>
  </svg>
);

const MongoDbIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.23.3c-1.2-.3-4.8.2-5.6 3.2-1.2 4.2.4 4.8.4 4.8s-2.5-2.3-3.1-4.1C3.3 2.4 4.3 0 7.5 0c2.2 0 3.6.3 4.73.3Zm-.46 8.2c0-.1.3-2.2 0-3.5-.5-2.2-4.1-2.5-5.1-1.2-.9 1.2-.2 3.1-.2 3.1s2.9-1.3 5.3 1.6Z" fill="#4DB33D"/>
    <path d="M11.77 8.5c-2.4-2.9-5.3-1.6-5.3-1.6s-.7-1.9.2-3.1c1-1.3 4.6-1 5.1 1.2.3 1.3 0 3.5 0 3.5Z" fill="#3FA037"/>
    <path d="M12.23 23.7c-1.2.3-4.8-.2-5.6-3.2 1.1 2.3 4.8 2.9 5.6 3.2Z" fill="#4DB33D"/>
    <path d="M11.77 15.5c-2.4 2.9-5.3 1.6-5.3 1.6s-.7 1.9.2 3.1c1 1.3 4.6 1 5.1-1.2.3-1.3 0-3.5 0-3.5Z" fill="#3FA037"/>
    <path d="M12.23 23.7c1.2.3 4.8-.2 5.6-3.2-1.1 2.3-4.8-2.9-5.6-3.2Z" fill="#4DB33D"/>
    <path d="M12.23.3c1.2-.3 4.8.2 5.6 3.2-1.1-2.3-4.8-2.9-5.6-3.2Z" fill="#4DB33D"/>
    <path d="M12 14.2c-1.7 0-3-1.8-3-4s1.3-4 3-4 3 1.8 3 4-1.3 4-3 4Z" fill="#4DB33D"/>
    <path d="M12 6.2c-1.7 0-3 1.8-3 4s1.3 4 3 4v-8Z" fill="#3FA037"/>
    <path d="M11.77 15.5c0 .1.3 2.2 0 3.5.5 2.2 4.1 2.5 5.1 1.2.9-1.2.2-3.1.2-3.1s-2.9 1.3-5.3-1.6Z" fill="#4DB33D"/>
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 12a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-3.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" fill="#38BDF8"/>
    <path d="M12.001 24a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-3.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" fill="#38BDF8"/>
  </svg>
);

const GitIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m21.5 11.5-6-6c-.2-.2-.5-.2-.7 0l-2.1 2.1c-.2.2-.2.5 0 .7l2.8 2.8-3.1 3.1-3.9-3.9c-.2-.2-.5-.2-.7 0l-2.1 2.1c-.2.2-.2.5 0 .7l6 6c.2.2.5.2.7 0l2.1-2.1c.2-.2.2-.5 0-.7l-2.8-2.8 3.1-3.1 3.9 3.9c.2.2.5.2.7 0l2.1-2.1c.2-.2.2-.5 0-.7Z" fill="#F05033"/>
    <path d="M8.5 14.6c-.3 0-.5-.1-.7-.3l-2.1-2.1c-.4-.4-.4-1 0-1.4l2.1-2.1c.4-.4 1-.4 1.4 0l2.1 2.1c.4.4.4 1 0 1.4l-2.1 2.1c-.2.2-.4.3-.7.3Zm0-5c-.1 0-.2 0-.3.1l-2.1 2.1c-.2.2-.2.5 0 .7l2.1 2.1c.2.2.5.2.7 0l2.1-2.1c.2-.2.2-.5 0-.7l-2.1-2.1c-.1-.1-.2-.1-.4-.1Z" fill="#F05033"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const VercelIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2z"/>
  </svg>
);

const FigmaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#F24E1E"/>
    <path d="M9 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#FF7262"/>
    <path d="M6 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="#A259FF"/>
    <path d="M15 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="#1ABCFE"/>
    <path d="M12 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="#0ACF83"/>
  </svg>
);

const techStack = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Express', icon: <span className="font-bold text-sm">Ex</span> },
  { name: 'MongoDB', icon: <MongoDbIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'GitHub', icon: <GithubIcon /> },
  { name: 'Vercel', icon: <VercelIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
];

const animatedStats = [
  { to: 20, suffix: '+', label: 'Projects Completed' },
  { to: 5, suffix: '+', label: 'Core Technologies' },
  { to: 100, suffix: '%', label: 'Responsive Websites' },
];

export default function Home() {
  return (
    <>

    <Helmet>
  <title>IFYWIGATECHZ Global Services | Full-Stack Developer & Tech Academy</title>

  <meta
    name="description"
    content="Official portfolio of Isu Ifeanyichukwu Oko (IfyWigaTechz). Full-Stack MERN Developer, UI/UX Designer, Tech Educator, and Founder of IFYWIGATECHZ Academy."
  />

  <meta
    name="keywords"
    content="IfyWigaTechz, MERN Stack Developer, React Developer, UI UX Designer, Web Developer Nigeria, Full Stack Developer, Tech Academy, Port Harcourt"
  />

  <meta name="author" content="Isu Ifeanyichukwu Oko" />

  <meta
    property="og:title"
    content="IFYWIGATECHZ Global Services"
  />

  <meta
    property="og:description"
    content="Building modern websites, web applications, UI/UX designs, and empowering learners through technology."
  />

  <meta
    property="og:image"
    content="/Ifylogo.png"
  />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="IFYWIGATECHZ Global Services" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="IFYWIGATECHZ Global Services"
  />
  <meta
    name="twitter:description"
    content="Full-Stack Developer, UI/UX Designer, Tech Educator, and Digital Creator."
  />
  <meta
    name="twitter:image"
    content="/Ifylogo.png"
  />
</Helmet>
      <motion.section 
        className="section grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent brand-accent"
          >
            Building Modern Websites, Digital Solutions & Tech Skills for the Future
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-white text-lg"
          >
            I'm Isu Ifeanyichukwu Oko (IfyWigaTechz), a Full-Stack MERN Developer, UI/UX Designer, 
            and Tech Educator helping businesses, startups, and individuals build their
             digital presence and grow through technology.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex gap-4"
          >
            <Button to="/projects">View Projects</Button>
            <Button to="/contact" variant="outline">Hire Me</Button>
          </motion.div>
        </div>
        <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
          {/* Animated Logo/Photo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div 
                  className="absolute inset-0 border-4 border-primary/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
              />
              <motion.div 
                  className="absolute inset-2 border-2 border-accent/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
              />
              <div className="relative w-full h-full">
                  <img 
                      src="/replacelogo.jpeg" 
                      alt="A photo of Isu Ifeanyichukwu Oko" 
                      className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
              </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 text-center w-full">
              <h3 className="font-semibold text-white mb-4">Core Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                  {techStack.map(tech => (
                    <span key={tech.name} className="brand-chip gap-2">
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
              </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Animated Counters Section */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {animatedStats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="flex flex-col items-center p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter to={stat.to} suffix={stat.suffix} />
              </p>
              <p className="text-lg text-gray mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent brand-accent">
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link to={project.link} key={project.title}>
              <Card className="p-0 overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.metrics && (
                    <ul className="mt-4 space-y-2">
                      {project.metrics.map((metric) => (
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
                </div>
              </Card>
            </Link>
          ))}
        </div>
      <motion.div variants={itemVariants} className="mt-8 text-center">
        <Button to="/projects" variant="outline">View All Projects</Button>
      </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent brand-accent">
          Key Features of My Work
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(service => (
            <Card key={service.title} className="h-full" as="article">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray">{service.description}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent brand-accent">
          What My Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonialItems.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.name} className="h-full flex flex-col" as="blockquote">
              <p className="text-slate-200 flex-grow">“{testimonial.text}”</p>
              <footer className="mt-4">
                <p className="font-semibold text-primary">— {testimonial.name}</p>
              </footer>
            </Card>
          ))}
        </div>
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <Button to="/testimonials" variant="outline">Read More Testimonials</Button>
        </motion.div>
      </motion.section>

      {/* Blog Posts Section */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent brand-accent">
          From the Blog
        </motion.h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="h-full hover:border-primary transition flex flex-col" as="article">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray text-sm mb-2">{new Date(post.date).toDateString()}</p>
                <p className="text-gray flex-grow">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <Button to="/blog" variant="outline">
            Read More Posts
          </Button>
        </motion.div>
      </motion.section>

      {/* Personal Brand Section */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent brand-accent">
            Meet IfyWigaTechz
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-300 mb-4">
            I'm Isu Ifeanyichukwu Oko, a Full-Stack MERN Developer and founder of IFYWIGATECHZ Academy.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray">
            I help businesses create modern websites, web applications, and digital solutions while
            training the next generation of tech professionals.
          </motion.p>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="section text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent brand-accent">
            Ready to Build Your Next Project?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray mb-8 max-w-xl mx-auto">
            Let's create a modern website or web application that helps your business grow.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button to="/contact" className="px-8 py-4 text-lg">
              Start a Project
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
