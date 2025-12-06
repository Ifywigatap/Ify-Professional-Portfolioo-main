export default function Resume() {
  return (
    <section className="section space-y-6">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent brand-accent">Resume</h2>
      <p className="text-white">Download my current resume as PDF or view it online.</p>
      <div className="flex gap-4">
        <a className="btn btn-primary" href="/Ifeanyichukwu Oko Isu (Ify Wigatap) – Resume.pdf" download>Download as PDF</a>
        <a className="btn btn-outline" href="/Ifeanyichukwu Oko Isu (Ify Wigatap) – Resume.pdf" target="_blank" rel="noreferrer">Open in new tab</a>
      </div>
      <div className="card">
        <h3 className="text-xl font-semibold mb-3">Highlights</h3>
        <ul className="list-disc list-inside text-gray space-y-2">
          <li>React, Vite, Tailwind</li>
          <li>Serverless APIs on Vercel</li>
          <li>Paystack integration</li>
        </ul>
      </div>
    </section>
  )
}
