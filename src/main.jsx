import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Learn from './pages/Learn.jsx'
import Enroll from './pages/Enroll.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Pricing from './pages/Pricing.jsx'

const router = createBrowserRouter([
  { element: <App />, children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/services", element: <Services /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <BlogPost /> },
      { path: "/learn", element: <Learn /> },
      { path: "/enroll", element: <Enroll /> },
      { path: "/resume", element: <Resume /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/terms", element: <Terms /> },
      { path: "/contact", element: <Contact /> },
  ]}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)
