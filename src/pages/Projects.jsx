const Card = ({ title, desc, link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="card hover:border-primary transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray">{desc}</p>
  </a>
)
export default function Projects() {
  const items = [
    { title: "WigaTechz Academy", desc: "Educational platform and landing pages.", link: "https://ifywigatechz-academy.vercel.app/" },
    { title: "KingLaw Paradise Builders", desc: "Construction company site on Live Production.", link: "https://www.kinglawparadisebuilders.com/" },
    { title: "De Prince Plumbers", desc: "Plumbing construction site with gallery and CTA.", link: "https://nwabest-plumbers.vercel.app/" },
    { title: "Fidel Technology Concept LTD", desc: "Tiling site with gallery and CTA.", link: "https://fidel-technology-concept-ltd.vercel.app/" },
    { title: "Mock Restaurant Ready for Real Project", desc: "Restaurant Site.", link: "https://restaurant-landing-page-sand-six.vercel.app/" },
    { title: "SmartFix Computer Repairs", desc: "Landing site.", link: "https://smart-fix-computer-repairs.vercel.app/" },
    { title: "Mock Professional site On Carpentry", desc: "Professional site with gallery and CTA.", link: "https://professional-carpenter.vercel.app/" },
    { title: "Vibe Coding Making a quote generator", desc: "Quote Generator.", link: "https://random-quote-generator-gamma.vercel.app/" },
    { title: "Mock couches Store Website And Ready for Production", desc: "Couches Store site with gallery and CTA.", link: "https://couches-store.vercel.app/" },
    { title: "Mock Sand Dumps ready for production", desc: "SandDumps site with gallery and CTA.", link: "https://sand-dumps.vercel.app/" },
  
  ]
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{items.map((p,i)=><Card key={i} {...p} />)}</div>
    </section>
  )
}
