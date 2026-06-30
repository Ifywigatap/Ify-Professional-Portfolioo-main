import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projectItems } from '../data/projects';
import { posts } from '../data/posts';
import Card from '../components/Card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const projectResults = query
    ? projectItems.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.desc.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.tech.some((t) => t.toLowerCase().includes(query))
      )
    : [];

  const blogResults = query
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.content.toLowerCase().includes(query)
      )
    : [];

  const hasResults = projectResults.length > 0 || blogResults.length > 0;

  return (
    <>
      <Helmet>
        <title>{query ? `Search results for "${query}"` : 'Search'}</title>
      </Helmet>
      <motion.section
        className="section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold mb-4">
          Search Results
        </h1>
        <p className="text-lg text-gray mb-8">
          {query ? `Showing results for: "${query}"` : 'Please enter a search term.'}
        </p>

        {query && !hasResults && (
          <p className="text-center text-gray text-lg py-12">
            No results found. Try a different search term.
          </p>
        )}

        {projectResults.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectResults.map((p) => (
                <Link key={p.title} to={p.demo} target="_blank" rel="noreferrer">
                  <Card className="h-full hover:border-primary transition">
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray">{p.desc}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {blogResults.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Blog Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogResults.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`}>
                  <Card className="h-full hover:border-primary transition" as="article">
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray text-sm mb-2">{new Date(p.date).toDateString()}</p>
                    <p className="text-gray">{p.excerpt}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.section>
    </>
  );
}