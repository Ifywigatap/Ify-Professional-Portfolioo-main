import { Helmet } from 'react-helmet-async'
export default function Home() {
  return (
    <>
      <Helmet>
        <title>IFYWIGATECHZ Global Services</title>
        <meta name='description' content='Portfolio, blog, and learning hub by Isu Ifeanyichukwu Oko (Ifywigatech Academy).'/>
        <meta property='og:title' content='Ifwigatechz Global Services — Portfolio'/>
        <meta property='og:image' content='/Ifylogo.png'/>
      </Helmet>
      <section className="section grid md:grid-cols-1 gap-2 items-center">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-2xl font-bold leading-tight bg-clip-text text-transparent brand-accent">
            Full-STACK DEVELOPER, UI/UX DESIGNER, NAPPMED, TECH INSTRUCTOR, REAL E-STATE AGENT &
            DIGITAL CREATOR
          </h1>
          <p className="text-white text-lg">
            Based in Port Harcourt, Nigeria. I build fast, clean, modern web apps (FULL-STACKS),
            and teach practical tech skills through Ify Wigatechz Academy.
          </p>
          <div className="flex gap-4">
            <a href="/projects" className="btn btn-primary">View Projects</a>
            <a href="/contact" className="btn btn-outline">Hire Me</a>
          </div>
        </div>
        <div className="card">
          <ul className="grid grid-cols-2 gap-10">
            <li className="p-6 rounded-xl border brand-border">
              <p className="text-3xl font-bold">2000+</p><p className="text-gray text-sm">Projects on IFYWIGATECHZ Academy</p>
            </li>
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">Full-Stack</p><p className="text-gray text-sm">Frontend and Backend</p>
            </li>
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">UI/UX</p><p className="text-gray text-sm">Design</p>
            </li>
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">Payments</p><p className="text-gray text-sm">Paystack</p>
            </li>
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">Patent Medicine Store</p><p className="text-gray text-sm">Over The Counter(meds)</p>
            </li>
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">Real E-State Agent</p><p className="text-gray text-sm">Purchase/sales of lands, Renting/selling of houses, Within Asa/Ndoki</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
