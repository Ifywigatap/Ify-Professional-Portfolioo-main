export default function Services() {
  const list = [
    { name: "Web Development (React)", desc: "Responsive, fast, SEO-ready websites and web apps." },
    { name: "UI/UX Design", desc: "Wireframes, prototypes, high-fidelity designs." },
    { name: "SEO & Optimization", desc: "On-page SEO, performance, and analytics." },
    { name: "NAPPMED", desc: "General OTC, First Aid, and Patent Medicine." },
    { name: "Real E-State Agent", desc: "Buying/Selling of Lands, Renting of Houses, and Houses for Sale." },
    { name: "Ifywigatechz Academy", desc: "Tech Education, Project-Based, and Freelance Consultant." },
  ]
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {list.map((s,i)=>(
          <div key={i} className="card">
            <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
            <p className="text-gray">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
