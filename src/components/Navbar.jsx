import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, Code2, ShoppingCart, Palette, GraduationCap, Bot,
  Monitor, Database, Layers, Map, Atom, PenTool
} from 'lucide-react';

const navLinks = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/services", label: "Services", hasMegaMenu: true },
    { to: "/blog", label: "Blog" },
    { to: "/learn", label: "Learn", hasMegaMenu: true },
    { to: "/enroll", label: "Enroll" },
    { to: "/pricing", label: "Pricing" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
];

const megaMenuContent = {
  Services: {
    description: "A range of digital solutions to help your business grow.",
    links: [
      {
        title: 'Web Development',
        items: [
          { label: 'Business Websites', to: '/services', icon: <Briefcase className="w-4 h-4" /> },
          { label: 'Web Applications', to: '/services', icon: <Code2 className="w-4 h-4" /> },
          { label: 'E-commerce Platforms', to: '/services', icon: <ShoppingCart className="w-4 h-4" /> },
        ],
      },
      {
        title: 'Design & Training',
        items: [
          { label: 'UI/UX Design', to: '/services', icon: <Palette className="w-4 h-4" /> },
          { label: 'MERN Stack Training', to: '/services', icon: <GraduationCap className="w-4 h-4" /> },
          { label: 'AI-Powered Applications', to: '/services', icon: <Bot className="w-4 h-4" /> },
        ],
      },
    ],
  },
  Learn: {
    description: 'Free resources to help you start your tech journey.',
    links: [
      {
        title: 'Learning Paths',
        items: [
          { label: 'Frontend Development', to: '/learn', icon: <Monitor className="w-4 h-4" /> },
          { label: 'Backend Development', to: '/learn', icon: <Database className="w-4 h-4" /> },
          { label: 'Full-Stack MERN', to: '/learn', icon: <Layers className="w-4 h-4" /> },
        ],
      },
      {
        title: 'Featured Content',
        items: [
          { label: 'Complete MERN Roadmap', to: '/blog/mern-stack-roadmap', icon: <Map className="w-4 h-4" /> },
          { label: 'React Fundamentals', to: '/blog/react-beginner-guide', icon: <Atom className="w-4 h-4" /> },
          { label: 'UI/UX Essentials', to: '/learn', icon: <PenTool className="w-4 h-4" /> },
        ],
      },
    ],
    featured: {
      image: '/learn/mern.png',
      title: 'Complete MERN Stack Roadmap',
      description: 'A step-by-step guide to becoming a full-stack developer.',
      to: '/blog/mern-stack-roadmap',
    },
  },
};

const SearchIcon = () => (
    <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            // Navigate to a search results page
            navigate(`/search?q=${encodeURIComponent(query)}`);
            // Reset query and close menu
            setQuery('');
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <button
                aria-label="Open menu"
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-xl border brand-border hover:bg-slate-900"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
                    <aside className="relative z-10 w-64 h-full border-l brand-border shadow-lg p-6 flex flex-col gap-4 bg-dark" aria-label="Mobile navigation">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-lg font-semibold">Menu</div>
                            <button
                                aria-label="Close menu"
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-xl hover:bg-white/10"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <form onSubmit={handleSearchSubmit} className="relative mb-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-4 pr-10 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2" aria-label="Search">
                                <SearchIcon />
                            </button>
                        </form>
                        <nav className="flex flex-col text-lg" aria-label="Primary">
                            {navLinks.map(link => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `py-2 hover:text-primary transition-colors ${isActive ? 'text-primary font-semibold' : ''}`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                    </aside>
                </div>
            )}
        </div>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(null);
    const navRef = useRef(null);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setQuery('');
        }
    };

    const handleMenuToggle = (menuLabel) => {
        setActiveMenu(prev => (prev === menuLabel ? null : menuLabel));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header 
            ref={navRef}
            className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'backdrop-blur bg-dark/80 border-b border-line/10' : 'bg-transparent'}`}
        >
            <nav className="section py-4" aria-label="Main navigation">
                <div className="flex items-center justify-between">
                    <NavLink to="/" className="text-xl font-semibold flex items-center gap-2">
                        <img src="/Ifylogo.png" alt="IfyWigaTechz Academy Logo" className="h-10 w-10 rounded-sm object-contain" />
                        <span className="hidden sm:inline text-primary">IFYWIGATECHZ</span>
                    </NavLink>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="hidden md:flex items-center gap-4 brand-link">
                            {navLinks.map(link => (
                                <div
                                    key={link.to}
                                    className="relative py-2"
                                >
                                    <NavLink 
                                        to={link.to} 
                                        className={({ isActive }) => `hover:text-primary transition-colors ${isActive ? 'text-primary font-semibold' : ''}`}
                                        onClick={(e) => {
                                            if (link.hasMegaMenu) {
                                                e.preventDefault();
                                                handleMenuToggle(link.label);
                                            } else {
                                                setActiveMenu(null);
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSearchSubmit} className="hidden md:block relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="bg-slate-800/50 border border-slate-700 rounded-lg pl-4 pr-8 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all w-32 focus:w-48"
                            />
                            <button type="submit" className="absolute right-2.5 top-1/2 -translate-y-1/2" aria-label="Search">
                                <SearchIcon />
                            </button>
                        </form>
                        <MobileNav />
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {activeMenu && megaMenuContent[activeMenu] && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 right-0 bg-dark/90 backdrop-blur-lg border-b border-slate-800 shadow-lg"
                    >
                        {(menu => (
                            <div className="section grid grid-cols-12 gap-8">
                                <div className="col-span-4">
                                    <h3 className="font-bold text-lg text-white">{activeMenu}</h3>
                                    <p className="text-sm text-gray mt-1">{menu.description}</p>
                                </div>
                                <div className={`col-span-8 grid ${menu.featured ? 'grid-cols-3' : 'grid-cols-2'} gap-8`}>
                                    {menu.links.map(column => (
                                        <div key={column.title}>
                                            <h4 className="font-semibold text-primary mb-3">{column.title}</h4>
                                            <ul className="space-y-2">
                                                {column.items.map(item => (
                                                    <li key={item.label}>
                                                    <Link to={item.to} className="flex items-center gap-3 text-gray hover:text-white transition-colors text-sm group" onClick={() => setActiveMenu(null)}>
                                                        <span className="text-accent group-hover:text-primary transition-colors">{item.icon}</span>
                                                            <span>{item.label}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    {menu.featured && (
                                        <Link to={menu.featured.to} className="col-span-1 group" onClick={() => setActiveMenu(null)}>
                                            <div className="bg-slate-800/50 p-4 rounded-lg h-full flex flex-col hover:bg-slate-800 transition-colors">
                                                <img src={menu.featured.image} alt={menu.featured.title} className="rounded-md mb-3 w-full h-24 object-cover" />
                                                <h4 className="font-semibold text-white group-hover:text-primary transition-colors">{menu.featured.title}</h4>
                                                <p className="text-xs text-gray mt-1">{menu.featured.description}</p>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))(megaMenuContent[activeMenu])}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
