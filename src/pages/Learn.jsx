<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import {
  featuredCourses,
  learningPaths,
  webDevRoadmap,
  lessons,
  studentBenefits,
  latestVideos,
} from '../data/learn';

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

export default function Learn() {
  const [activeLessonFilter, setActiveLessonFilter] = useState('All');

  const lessonCategories = useMemo(
    () => ['All', ...new Set(lessons.map((l) => l.category))],
    []
  );

  const filteredLessons = useMemo(() => {
    if (activeLessonFilter === 'All') {
      return lessons;
    }
    return lessons.filter((l) => l.category === activeLessonFilter);
  }, [activeLessonFilter]);

  return (
    <>
      <Helmet>
        <title>Learn Tech Skills | IFYWIGATECHZ Academy</title>
        <meta name="description" content="Learn web development, MERN stack, UI/UX design, AI tools, and digital skills through free lessons from IFYWIGATECHZ Academy." />
        <meta property="og:title" content="IFYWIGATECHZ Academy Learning Hub" />
        <meta property="og:description" content="Free technology lessons, coding tutorials, UI/UX resources, and career guides." />
        <meta property="og:image" content="/Ifylogo.png" />
      </Helmet>
      <motion.div className="section" variants={containerVariants} initial="hidden" animate="visible">
        {/* Hero Section */}
        <motion.div className="max-w-4xl mb-16 text-center mx-auto" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent brand-accent">
            Learn Technology Skills That Create Opportunities
          </h1>
          <p className="text-slate-400 text-lg">
            Explore free lessons, tutorials, coding roadmaps, UI/UX resources, and digital skills training from IFYWIGATECHZ Academy.
          </p>
        </motion.div>

        {/* Featured Courses */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Learning Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <Link to={`/blog/${course.slug}`} key={course.slug}>
                <Card className="p-0 overflow-hidden group h-full">
                  <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <span className="text-xs px-2 py-1 rounded bg-slate-800 mb-2 inline-block">{course.category}</span>
                    <h3 className="font-semibold text-lg">{course.title}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Learning Paths */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Learning Paths</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <Card key={path.title} className="flex flex-col">
                <h3 className="text-xl font-bold mb-3">{path.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {path.skills.map(skill => <span key={skill} className="brand-chip text-sm">{skill}</span>)}
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Roadmap */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Web Development Roadmap</h2>
          <div className="relative flex flex-col">
            {/* The vertical line, responsive */}
            <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-slate-700 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>
            {webDevRoadmap.map((step, index) => (
              <div key={step} className="relative flex items-center my-4">
                {/* The circular marker, responsive */}
                <div className="absolute left-4 top-1 w-4 h-4 bg-primary rounded-full border-4 border-dark z-10 md:left-1/2 md:-translate-x-1/2"></div>
                {/* Mobile content (single column) */}
                <div className="w-full pl-12 md:hidden">
                  <p className="font-semibold text-lg">{step}</p>
                </div>
                {/* Desktop content (zigzag) */}
                <div className="hidden md:flex w-full items-center">
                  <div className="w-1/2 text-right pr-8">{index % 2 === 0 && <p className="font-semibold text-lg">{step}</p>}</div>
                  <div className="w-1/2 text-left pl-8">{index % 2 !== 0 && <p className="font-semibold text-lg">{step}</p>}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Lesson Library */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Lesson Library</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {lessonCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveLessonFilter(category)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  activeLessonFilter === category
                    ? 'btn btn-primary'
                    : 'btn btn-outline'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredLessons.map((lesson) => (
              <Link key={lesson.slug} to={`/learn/${lesson.slug}`}>
                <Card className="p-0 overflow-hidden group h-full">
                  <img src={lesson.image} alt={lesson.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs px-2 py-1 rounded bg-slate-800">{lesson.category}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-semibold">{lesson.level}</span>
                    </div>
                    <h3 className="font-semibold">{lesson.title}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Student Benefits */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">What You'll Learn</h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
            {studentBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Latest Videos */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Videos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestVideos.map((video) => (
              <a key={video.title} href={video.url} target="_blank" rel="noreferrer">
                <Card className="p-0 overflow-hidden group">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{video.title}</h3>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Coming Soon */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
            <p className="text-gray">Course Completion Certificates • Student Projects • Community Support • Mentorship Sessions</p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section className="text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Learn practical skills through guided lessons, projects, and mentorship.
          </p>
          <Button to="/contact">Join IFYWIGATECHZ Academy</Button>
        </motion.section>
      </motion.div>
    </>
=======
import { Helmet } from 'react-helmet-async'
export default function Learn() {
  const lessons = [
    { title: "HTML & CSS Basics", level: "Beginner", duration: "2h", url: "https://www.youtube.com/watch?v=G6D9cBaLViA" },
    { title: "JavaScript Essentials", level: "Beginner → Intermediate", duration: "3h", url: "#" },
    { title: "React with Vite + Tailwind", level: "Intermediate", duration: "3h", url: "#" },
    { title: "Deploying to Vercel + Domains", level: "Intermediate", duration: "1.5h", url: "#" },
  ]
  return (
    <section className="section">
      <Helmet><title>Isu Ifeanyichukwu Oko — Learn</title><meta name='description' content='Free mini-lessons from Wigatech Academy.'/><meta property='og:image' content='/logo.jpg'/></Helmet>
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Learn</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((l,i)=>(
          <a key={i} href={l.url} className="card hover:border-primary transition">
            <h3 className="text-xl font-semibold">{l.title}</h3>
            <p className="text-gray text-sm mt-1">{l.level} • {l.duration}</p>
            <p className="text-gray mt-3">Watch / Read →</p>
          </a>
        ))}
      </div>
    </section>
>>>>>>> dee18ed8b9ae3064845e1b6b013169e740f619ef
  )
}
