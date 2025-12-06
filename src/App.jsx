import { Outlet, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Central list of top-level navigation items used in header and mobile menu
const NAV_ITEMS = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/learn', label: 'Learn' },
  { to: '/enroll', label: 'Enroll' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

/**
 * MobileMenu
 * - Re-uses `NAV_ITEMS` to keep desktop/mobile navigation consistent
 * - Adds a backdrop click and Escape key to close the menu for accessibility
 */
function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // close on Escape key
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="md:hidden">
      {/* Open button */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="p-2 rounded-xl border brand-border hover:bg-slate-900"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex"
          style={{
            backgroundImage: "url('/big techz.jpeg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* Clickable overlay to close */}
          <div className="absolute inset-50 bg-primary/30" onClick={() => setOpen(false)} />

          {/* Slide-in panel */}
          <aside className="relative z-20 w-20 h-full border-l brand-border shadow-soft p-1 flex flex-col gap-1 bg-purple" aria-label="Mobile navigation">
            <div className="flex items-center justify-between mb-1">
              <div className="text-lg font-semibold">Menu</div>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-xl hover:bg-white/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col text-lg" aria-label="Primary">
            <a class="py-1 hover:text bg-indigo-600" href="/about">About</a>
            <a aria-current="page" class="py-1 hover:text bg-indigo-800 active" href="/projects">Projects</a>
            <a class="py-1 hover:text bg-indigo-600" href="/services">Services</a><a class="py-1 hover:text bg-indigo-800" href="/blog">Blog</a>
            <a class="py-1 hover:text bg-indigo-600" href="/learn">Learn</a><a class="py-1 hover:text bg-indigo-800" href="/enroll">Enroll</a>
            <a class="py-1 hover:text bg-indigo-600" href="/pricing">Pricing</a><a class="py-1 hover:text bg-indigo-800" href="/testimonials">Testimonials</a>
            <a class="py-1 hover:text bg-indigo-600" href="/resume">Resume</a><a class="py-1 hover:text bg-indigo-800" href="/contact">Contact</a>
            </nav>
          </aside>
        </div>
      )}
    </div>
  )
}

/**
 * App - main application shell
 * - Keeps same routes and visual pieces, but simplifies navigation markup
 * - Footer markup cleaned up and small copy fixes
 */
export default function App() {
  return (
    <div
      className="min-h-screen text-slate-100"
      style={{ backgroundImage: "url('/big tech illustration.jpeg')", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <header className="sticky top-0 backdrop-blur bg-dark/80 border-b border-line/10 z-50">
        <nav className="section py-4" aria-label="Main navigation">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="text-xl font-semibold flex items-center gap-2">
              <img src="/Ifylogo.png" alt="IfyWigaTechz Academy Logo" className="h-10 w-10 rounded-sm object-contain" />
              <span className="text-primary">IFYWIGATECHZ GLOBAL SERVICES</span>
            </NavLink>

            <div className="hidden md:flex items-center gap-4 brand-link">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.to} to={item.to} className="hover:text-primary">
                  {item.label}
                </NavLink>
              ))}
            </div>

            <MobileMenu />
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <a
        href="https://wa.me/2348113722088"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 btn btn-primary shadow-soft"
      >
        Chat on WhatsApp
      </a>

      <footer className="section text-sm text-white border-t border-line pt-6 max-w-6xl mx-auto px-6 md:px-6 py-10">
        <div className="container py-8 grid md:grid-cols-5 gap-6 text-sm">
          <div>
            <div className="font-bold text-lg">IFYWIGATECHZ - <span className="text-brand">Global Services</span></div>
            <p className="mt-2">Unlocking potentials through technology and innovation.</p>
          </div>

          <div>
            <div className="font-bold text-lg">LEARN</div>
            <ul className="space-y-1 text-slate-300">
              <li>Full-Stack Development</li>
              <li>AI LongChain + OpenAI</li>
              <li>Payment & Subscription System</li>
              <li>Headless E-Commerce Shopify + Next.js</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-lg">SUPPORTED</div>
            <ul className="space-y-1 text-slate-300">
              <li>Freelancing</li>
              <li>LinkedIn</li>
              <li>Remote4me</li>
              <li>Flexjobs</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-lg">ADDRESS</div>
            <ul className="space-y-1 text-slate-300">
              <li>No. 2 Waterside Road</li>
              <li>Ayama, Ndoki</li>
              <li>Oyigbo, Rivers</li>
              <li>+234 811 372 2088</li>
              <li>wigatech9@gmail.com</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-lg">JOIN US ON</div>
            <ul className="space-y-1 text-slate-300 flex flex-col">
              <li>
                <a href="https://www.facebook.com/share/1MbgZWskdZ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  {/* keep SVGs as-is but fixed rel and a11y */}
                  <svg className="w-[30px] h-[20px] text-gray-800 dark:text-white" aria-hidden xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/></svg>
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348113722088" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg className="w-[30px] h-[20px] text-gray-800 dark:text-white" aria-hidden xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/><path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://x.com/OkIfeanyichukwu?t=n4WO_2qiCskTtWXO6dEqmA&s=08" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <svg className="w-[30px] h-[20px] text-gray-800 dark:text-white" aria-hidden xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@ifywigatechz-k3n?si=o45r4h68cUDskllB" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg className="w-[30px] h-[20px] text-gray-800 dark:text-white" aria-hidden xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section text-sm text-white pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src="/Ifylogo.png" alt="IFYWIGATECHZ Logo" className="h-14 w-12 rounded-sm object-cover" />
          <p>IFYWIGATECHZ — unlocking potentials through technology and innovation</p>
          <div className="font-semibold text-lg">IFYWIGATECHZ</div>
          <img src="/replacelogo.jpeg" alt="IFYWIGATECHZ Logo" className="h-14 w-12 rounded-sm object-cover" />
          <p>
            Developer: <a href="https://wa.me/message/JKHFXN4MYKABJ1">Isu Ifeanyichukwu Oko</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} IFYWIGATECHZ Global Services. All rights reserved.
            <br />
            <span className="bg-indigo-500 px-2 py-0.5 rounded text-white">Business Reg: 8850471</span>
          </p>
          <p>
            <a className="brand-link" href="/privacy">
              Privacy
            </a>{' '}
            •{' '}
            <a className="brand-link" href="/terms">
              Terms
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
