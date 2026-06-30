import {
  Code2,
  Palette,
  GraduationCap,
  Bot,
  Briefcase,
  ShoppingCart,
} from 'lucide-react';

export const serviceCategories = [
  {
    category: 'Web Development',
    services: [
      {
        name: 'Business Websites',
        icon: Briefcase,
        desc: 'Responsive websites designed to attract customers, improve credibility, and grow your business online.',
        features: ['Responsive Design', 'SEO Optimization', 'Fast Performance', 'Contact Forms', 'Deployment Support'],
      },
      {
        name: 'Web Applications',
        icon: Code2,
        desc: 'Custom web applications with dynamic functionality, user authentication, and robust backends to solve unique business challenges.',
        features: ['Custom Backend APIs', 'User Authentication', 'Database Integration', 'Scalable Architecture', 'Admin Dashboards'],
      },
      {
        name: 'E-commerce Platforms',
        icon: ShoppingCart,
        desc: 'Secure and scalable online stores with integrated payment gateways to sell your products and services effectively.',
        features: ['Paystack Integration', 'Product Management', 'Shopping Cart & Checkout', 'Order Tracking', 'Secure Payments'],
      },
    ],
  },
  {
    category: 'Design',
    services: [
      {
        name: 'UI/UX Design',
        icon: Palette,
        desc: 'Intuitive and beautiful user interfaces that provide an exceptional user experience and drive engagement.',
        features: ['Wireframing & Prototyping', 'User Flow Mapping', 'High-Fidelity Mockups', 'Design Systems', 'Usability Testing'],
      },
    ],
  },
  {
    category: 'Digital Training',
    services: [
      {
        name: 'MERN Stack Training',
        icon: GraduationCap,
        desc: 'Comprehensive, project-based training covering MongoDB, Express, React, and Node.js to build full-stack applications.',
        features: ['Hands-On Projects', 'Code Reviews', 'Career Guidance', 'Freelancing Tips', 'Certificate of Completion'],
      },
    ],
  },
  {
    category: 'AI Solutions',
    services: [
      {
        name: 'AI-Powered Applications',
        icon: Bot,
        desc: 'Integrating artificial intelligence and large language models (LLMs) to create smart, automated, and personalized user experiences.',
        features: ['AI Chatbot Integration', 'Content Generation', 'Workflow Automation', 'Personalized Recommendations', 'OpenAI API'],
      },
    ],
  },
];

export const processSteps = [
    { title: '1. Discovery', description: 'We start by understanding your goals, audience, and project requirements through a detailed consultation.' },
    { title: '2. Design', description: 'I create wireframes and high-fidelity mockups to visualize the user experience and interface.' },
    { title: '3. Development', description: 'Using modern technologies, I build a fast, scalable, and secure application based on the approved design.' },
    { title: '4. Launch', description: 'After thorough testing, I deploy the project and provide support to ensure a smooth launch.' },
];

export const techStack = ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Paystack', 'Figma', 'Vercel'];

export const faqs = [
    {
        question: 'How long does a website take to build?',
        answer: 'A typical business website takes 2-4 weeks, depending on the complexity and features required. E-commerce platforms and web applications may take longer. We will agree on a timeline during the discovery phase.'
    },
    {
        question: 'Can you redesign an existing website?',
        answer: 'Absolutely. I can work with your existing platform to improve its design, performance, and user experience, or migrate it to a more modern technology stack.'
    },
    {
        question: 'Do you provide maintenance and support after launch?',
        answer: 'Yes, I offer ongoing support and maintenance packages to ensure your website remains secure, up-to-date, and performs optimally.'
    },
    {
        question: 'Can you integrate Paystack for payments?',
        answer: 'Yes, I have extensive experience integrating Paystack and other payment gateways to enable secure online transactions for your business.'
    }
];