import { Outlet, NavLink, useNavigation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Button from './Button';
import Navbar from './Navbar';

const footerLinks = [
  {
    title: 'Learn',
    links: [
      { label: 'Full-Stack Development', to: '/learn' },
      { label: 'AI & LangChain', to: '/learn' },
      { label: 'Payment Systems', to: '/learn' },
      { label: 'E-Commerce', to: '/learn' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1MbgZWskdZ/',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348113722088',
    icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
            <path fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
            <path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
        </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/OkIfeanyichukwu?t=n4WO_2qiCskTtWXO6dEqmA&s=08',
    icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
        </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@ifywigatechz-k3n?si=o45r4h68cUDskllB',
    icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
            <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
        </svg>
    ),
  },
];

export default function Layout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="min-h-screen font-sans text-slate-100 bg-dark bg-pattern">
            {/* Show a custom loading animation with the logo during navigation */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                        >
                            <img src="/Ifylogo.png" alt="Loading..." className="h-10 w-10" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Button href="https://wa.me/2348113722088" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40">
                Chat on WhatsApp
            </Button>

            <footer className="bg-dark/90 border-t border-line/20 mt-16">
                <div className="section">
                    <div className="grid md:grid-cols-12 gap-8">
                        <div className="md:col-span-4">
                            <h3 className="text-lg font-bold text-white">IFYWIGATECHZ Global Services</h3>
                            <p className="mt-2 text-gray text-sm">Unlocking potentials through technology and innovation.</p>
                            <p className="mt-4 text-gray text-sm">
                                Business Reg: <span className="bg-indigo-500/50 px-2 py-0.5 rounded text-white">8850471</span>
                            </p>
                        </div>
                        {footerLinks.map((column) => (
                            <div key={column.title} className="md:col-span-2">
                                <h4 className="font-semibold text-white">{column.title}</h4>
                                <ul className="mt-4 space-y-2">
                                    {column.links.map((link) => (
                                        <li key={link.label}>
                                            <NavLink to={link.to} className="text-gray hover:text-primary transition-colors text-sm">
                                                {link.label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="md:col-span-2">
                            <h4 className="font-semibold text-white">Address</h4>
                            <ul className="mt-4 space-y-2 text-sm text-gray">
                                <li>No. 2 Waterside Road</li>
                                <li>Ayama, Ndoki, Oyigbo</li>
                                <li>Rivers, Nigeria</li>
                                <li>wigatech9@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-line/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray text-center sm:text-left">
                            &copy; {new Date().getFullYear()} IFYWIGATECHZ Global Services. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-gray hover:text-primary transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}