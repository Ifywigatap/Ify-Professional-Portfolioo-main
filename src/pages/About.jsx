const TECH_STACK = [
  { title: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS'] },
  { title: 'Backend', items: ['MERN', 'Vercel Serverless APIs'] },
  { title: 'Payments', items: ['Paystack'] },
  { title: 'Tools', items: ['Git', 'Vercel', 'Figma', 'Postman'] },
]

export default function About() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <article className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent brand-accent">About Me</h2>

          <p className="text-white">
            My name is Ifeanyichukwu Oko Isu — professionally known as <strong>Ify Wigatechz</strong>. I am a passionate and versatile Full-Stack Web
            Developer, UI/UX Designer, and Digital Skills Trainer based in Port Harcourt, Nigeria. My work is guided by a single vision: create modern
            digital solutions that empower individuals, businesses, and communities to thrive in the digital age.
          </p>

          <p className="text-white">
            I specialize in both front-end and back-end development with a strong focus on technologies such as React, Vite, Tailwind CSS, MERN,
            and serverless backends deployed on Vercel. My projects emphasize performance, security, and great user experience — whether building
            corporate sites, e-commerce platforms, or educational portals.
          </p>

          <p className="text-white">
            As the founder of Ifywigatechz Academy, I am committed to teaching and mentoring learners and entrepreneurs with practical,
            hands-on skills in web development, UI/UX design, and digital marketing. I follow the mantra: <em>“Learn fast. Build fast. Tech to success.”</em>
          </p>

          <p className="text-white">
            Over the years, I have collaborated with clients across industries — from real estate and construction to branding platforms and
            personal blogs — delivering solutions that reflect professionalism, creativity, and measurable impact.
          </p>

          <p className="text-white">
            Beyond coding, I advocate for community growth and knowledge sharing. Technology is a powerful tool for empowerment, especially
            for young people in Africa, and I aim to create more access to global opportunities through education and mentorship.
          </p>

          <p className="text-white">
            Looking ahead, I will continue evolving as a developer, educator, and entrepreneur — building platforms that serve businesses and
            inspire the next generation of digital creators. I bring excellence, innovation, and integrity to every project.
          </p>

          <p className="text-white">
            <strong>Mantra:</strong> <span className="text-primary">Learn fast. Build fast. Tech to success.</span>
          </p>

          <div className="mt-4">
            <a href="/contact" className="btn btn-primary">Work with me / Contact</a>
          </div>
        </article>

        <aside className="card" aria-labelledby="tech-stack-heading">
          <h3 id="tech-stack-heading" className="font-semibold text-lg mb-3">Tech Stack</h3>
          <div className="text-gray space-y-3">
            {TECH_STACK.map((group) => (
              <div key={group.title}>
                <div className="font-medium">{group.title}:</div>
                <ul className="list-disc list-inside ml-4 text-slate-300">
                  {group.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
