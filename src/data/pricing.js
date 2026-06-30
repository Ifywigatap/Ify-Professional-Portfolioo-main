/**
 * Pricing tiers for services.
 */
export const TIERS = [
  {
    name: 'Starter Website',
    price: '₦100k – ₦150k',
    delivery: '2-3 Weeks',
    features: ['1-3 Pages', 'Responsive Design', 'Contact Form', 'Basic SEO Setup'],
  },
  {
    name: 'Business Website',
    price: '₦200k – ₦350k',
    delivery: '3-5 Weeks',
    badge: 'Recommended',
    features: ['Up to 8 Pages', 'Custom Design', 'CMS Integration', 'Advanced SEO', 'Social Media Integration'],
  },
  {
    name: 'E-commerce Store',
    price: '₦350k – ₦700k',
    delivery: '5-8 Weeks',
    features: ['Full E-commerce Setup', 'Paystack/Flutterwave', 'Product Management', 'Admin Dashboard', 'User Accounts'],
  },
  {
    name: 'Custom Web App',
    price: 'Custom Quote',
    delivery: 'Varies',
    features: ['Tailored Functionality', 'Scalable Architecture', 'User Authentication', 'API Integrations', 'Ongoing Support'],
  },
  {
    name: 'AI Solutions',
    price: 'Custom Quote',
    delivery: 'Varies',
    features: ['AI Chatbot Integration', 'Workflow Automation', 'Personalized Content', 'LLM-Powered Features', 'Consultation'],
  },
];

export const trustIndicators = [
  { title: 'Fast Delivery', description: 'Efficient workflows to launch your project on time.' },
  { title: 'Modern Design', description: 'Clean, intuitive, and engaging user interfaces.' },
  { title: 'SEO Friendly', description: 'Built with best practices for better search visibility.' },
  { title: 'Support Included', description: 'Post-launch assistance to ensure smooth operation.' },
];

export const pricingFaqs = [
  {
    question: 'How long does a project typically take?',
    answer: 'A starter website usually takes 2-3 weeks. More complex projects like e-commerce stores or custom web apps can take 5-8 weeks or more. We will establish a clear timeline during our initial consultation.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes, absolutely. I can give your current site a modern redesign, improve its performance and SEO, or migrate it to a new technology stack if needed.'
  },
  {
    question: 'Can I request features not listed in a package?',
    answer: 'Of course. The packages are a starting point. I encourage you to request a custom quote so we can build a solution that is perfectly tailored to your unique requirements.'
  },
  {
    question: 'Do you provide maintenance and support after the project is launched?',
    answer: 'Yes, all packages come with a period of post-launch support. I also offer ongoing maintenance plans to keep your site secure, updated, and running smoothly.'
  }
];