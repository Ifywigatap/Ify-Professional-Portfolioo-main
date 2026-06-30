import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { posts } from '../data/posts';
import Card from '../components/Card';
import NewsletterForm from '../components/NewsletterForm';

const ShareButtons = ({ post }) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const text = `Check out this article: "${post.title}" by IFYWIGATECHZ`;

  const shareLinks = [
    { name: 'Twitter', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, icon: <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" /> },
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, icon: <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" /> },
    { name: 'LinkedIn', href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`, icon: <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" /> },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="font-semibold text-slate-300">Share this post:</span>
      <div className="flex gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray mb-6">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn btn-primary">
          ← Back to Blog
        </Link>
      </section>
    );
  }

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | IFYWIGATECHZ Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      <motion.article className="section max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <header className="mb-8">
          <Link to="/blog" className="brand-link underline mb-6 inline-block">← Back to Blog</Link>
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
            <span className="font-semibold text-primary">{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
          <p className="text-gray mt-4">Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by {post.author}</p>
        </header>

        <img src={post.image} alt={post.title} className="w-full h-auto rounded-2xl shadow-lg mb-8" />

        <div className="prose prose-invert prose-lg max-w-none">
          <p>{post.content}</p>
          {/* For real markdown content, you would use a library like 'react-markdown' here */}
        </div>

        <div className="mt-12">
          <ShareButtons post={post} />
        </div>

        <section className="mt-16 pt-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold mb-6 text-center">Read Next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`}>
                <Card className="h-full hover:border-primary transition">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray text-sm">{p.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <NewsletterForm />
        </section>
      </motion.article>
    </>
  );
}
