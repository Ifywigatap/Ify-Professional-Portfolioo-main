import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { lessons } from '../data/learn';
import Card from '../components/Card';
import Button from '../components/Button';

export default function LearnDetails() {
  const { slug } = useParams();
  const lesson = lessons.find((l) => l.slug === slug);

  if (!lesson) {
    return (
      <section className="section text-center">
        <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
        <p className="text-gray mb-6">The lesson you're looking for doesn't exist or has been moved.</p>
        <Link to="/learn" className="btn btn-primary">
          ← Back to All Lessons
        </Link>
      </section>
    );
  }

  const relatedLessons = lessons.filter((l) => l.slug !== slug && l.category === lesson.category).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{lesson.title} | IFYWIGATECHZ Academy</title>
        <meta name="description" content={`Learn about ${lesson.title} with this free lesson from IFYWIGATECHZ Academy.`} />
        <meta property="og:title" content={lesson.title} />
        <meta property="og:image" content={lesson.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      <motion.article className="section max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <header className="mb-8">
          <Link to="/learn" className="brand-link underline mb-6 inline-block">← Back to Learning Hub</Link>
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-2">
            <span className="px-2 py-1 rounded-full bg-primary/20 text-primary font-semibold">{lesson.level}</span>
            <span className="font-semibold">{lesson.category}</span>
            <span>•</span>
            <span>{lesson.duration}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{lesson.title}</h1>
        </header>

        <img src={lesson.image} alt={lesson.title} className="w-full h-auto rounded-2xl shadow-lg mb-8" />

        <div className="prose prose-invert prose-lg max-w-none">
          <p>{lesson.content || 'Full lesson content coming soon.'}</p>
        </div>

        {relatedLessons.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Lessons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedLessons.map((l) => (
                <Link key={l.slug} to={`/learn/${l.slug}`}>
                  <Card className="h-full hover:border-primary transition">
                    <h3 className="text-xl font-semibold mb-2">{l.title}</h3>
                    <p className="text-gray text-sm">{l.level}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dive Deeper?</h2>
          <Button to="/contact">Join the Academy</Button>
        </section>
      </motion.article>
    </>
  );
}