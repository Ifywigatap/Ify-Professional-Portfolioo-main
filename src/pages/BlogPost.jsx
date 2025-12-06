import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { posts } from '../data/posts'
export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if(!post){
    return <section className="section"><p className="text-gray">Post not found.</p><Link to="/blog" className="brand-link underline">Back to Blog</Link></section>
  }
  return (
    <section className="section max-w-3xl">
      <Helmet><title>{post.title} — Ify Wigatap</title><meta name='description' content={post.excerpt}/><meta property='og:image' content='/logo.jpg'/></Helmet>
      <Link to="/blog" className="brand-link underline">← Back to Blog</Link>
      <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray mt-1">{new Date(post.date).toDateString()}</p>
      <article className="prose prose-invert mt-6 max-w-none"><p>{post.content}</p></article>
    </section>
  )
}
