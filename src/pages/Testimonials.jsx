export default function Testimonials(){
  const items = [
    { name: "Kingsley, Builder", text: "Ify delivered a clean, fast site for our construction brand. Clear comms, great results." },
    { name: "Oluma, Concrete", text: "Professional design and deployment. Our leads improved." },
    { name: "Student, Academy", text: "I learned React faster than I expected. Practical lessons." }
  ]
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t,i)=>(
          <div key={i} className="card">
            <p className="text-slate-800">“{t.text}”</p>
            <p className="text-primary mt-3 font-medium">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
