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
  )
}
