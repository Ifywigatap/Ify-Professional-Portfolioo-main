import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { posts } from '../data/posts'
export default function Blog() {
  return (
    <section className="section">
      <Helmet><title>Ify Wigatap — Blog</title><meta name='description' content='Articles on web dev, UI/UX, and learning.'/><meta property='og:image' content='/logo.jpg'/></Helmet>
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="card hover:border-primary transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray text-sm mb-2">{new Date(p.date).toDateString()}</p>
            <p className="text-gray">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
