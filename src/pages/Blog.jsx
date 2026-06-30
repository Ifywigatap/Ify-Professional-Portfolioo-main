import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import Card from '../components/Card';
import NewsletterForm from '../components/NewsletterForm';

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

const popularTopics = ['React', 'MERN', 'JavaScript', 'UI/UX', 'AI', 'Career', 'Freelancing'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const filteredPosts = useMemo(() => {
    let filtered = otherPosts;

    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.excerpt.toLowerCase().includes(lowerCaseQuery)
      );
    }

    return filtered;
  }, [searchQuery, activeCategory, otherPosts]);

  const authorName = "Ifeanyichukwu Oko Isu";
  const authorTitle = "Founder, IFYWIGATECHZ Academy";

  return (
    <>
      <Helmet>
        <title>Blog | IFYWIGATECHZ Global Services</title>
        <meta name="description" content="Learn web development, MERN stack, React, UI/UX design, freelancing, AI tools, and digital skills with IFYWIGATECHZ." />
        <meta property="og:title" content="IFYWIGATECHZ Blog" />
        <meta property="og:description" content="Practical tutorials, guides, and insights on web development, UI/UX, AI, and digital careers." />
        <meta property="og:image" content="/Ifylogo.png" />
      </Helmet>
      <motion.section className="section" variants={containerVariants} initial="hidden" animate="visible">
        {/* 1. Blog Hero */}
        <motion.div className="max-w-4xl mb-12 text-center mx-auto" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent brand-accent">Learn. Build. Grow.</h1>
          <p className="text-slate-400 text-lg">
            Explore tutorials, project breakdowns, career advice, UI/UX insights, MERN stack guides, and AI-powered development resources.
          </p>
        </motion.div>

        {/* 2. Featured Article */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6">Featured Post</h2>
          <Link to={`/blog/${featuredPost.slug}`}>
            <Card className="grid md:grid-cols-2 gap-0 md:gap-8 items-center p-0 overflow-hidden group">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-64 md:h-full object-cover" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold mb-3">{featuredPost.title}</h3>
                <p className="text-gray mb-4">{featuredPost.excerpt}</p>
                <p className="text-sm text-slate-400">
                  By {authorName} <br />
                  <span className="text-xs">{authorTitle}</span>
                </p>
                <p className="text-xs text-slate-500 mt-2">Published {new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
              </div>
            </Card>
          </Link>
        </motion.div>

        {/* 3. Categories (Filter) & 4. Search Bar */}
        <motion.div className="mb-12" variants={itemVariants}>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-4 pr-10 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {['All', ...new Set(posts.map(p => p.category))].map(category => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`text-sm px-3 py-1 rounded-full transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'bg-slate-800 hover:bg-slate-700'}`}>
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 5. Latest Articles */}
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
          {filteredPosts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`}>
              <Card className="h-full overflow-hidden p-0 flex flex-col group">
                <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{p.category}</span>
                    <span>•</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex-grow">{p.title}</h3>
                  <p className="text-sm text-slate-500">Published {new Date(p.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                </div>
              </Card>
            </Link>
          ))}
        </motion.div>

        {/* 6. Popular Topics */}
        <motion.section className="mt-20" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Topics</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {popularTopics.map(topic => (
                    <button key={topic} onClick={() => setActiveCategory(topic)} className="brand-chip text-base hover:bg-accent/20 cursor-pointer">
                        {topic}
                    </button>
                ))}
            </div>
        </motion.section>

        {/* 7. Newsletter */}
        <motion.section className="mt-20" variants={itemVariants}>
          <NewsletterForm />
        </motion.section>
      </motion.section>
    </>
  )
}
