/** Shared company info synced from product pages */
export const siteContact = {
  email: 'atul.zync@gmail.com',
  supportEmail: 'support@zyncspace.com',
  formAction: 'https://eovbhnii1d0xrft.m.pipedream.net',
  salesFormUrl: 'https://forms.gle/QVfnCHigc7NS3Z2K6',
  signupUrl: 'https://chat.zyncspace.com/signup',
  responseTime: 'We typically respond within 24–48 hours during business days.',
  location: {
    city: 'India',
    address: 'Remote-first team based in India',
    phone: null as string | null,
  },
  subjectOptions: [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'sales', label: 'Sales Inquiry' },
    { value: 'consulting', label: 'Consulting & Custom Build' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ],
  consultingObjectives: [
    'Build Custom SaaS Platform',
    'Integrate Multi-Agent AI Agents',
    'Configure Vector RAG Knowledge Base',
    'Scale Customer Acquisition Marketing',
    'Deploy Security Compliant Servers (SOC2)',
    'Product Support & Workspace Setup',
  ],
} as const;

export const siteCompany = {
  tagline: 'AI-driven technology consulting & unified team workspace',
  mission:
    'ZyncSpace brings together chat, tasks, and scheduling into one seamless workspace — and helps teams modernize with AI-driven consulting when they need to build beyond the platform.',
  productDescription:
    'Unified collaboration where chat, Kanban boards, calendar sync, and built-in AI converge — so your teams stop switching apps and start shipping.',
} as const;

export const serviceRoutes = {
  home: '/',
  services: '/services',
  framework: '/services/framework',
  technology: '/services/technology',
  industries: '/services/industries',
  caseStudies: '/services/case-studies',
  pricing: '/services/pricing',
  contact: '/contact',
  product: {
    features: '/features',
    useCases: '/use-cases',
    pricing: '/pricing',
    blogs: '/blogs',
    about: '/about',
    careers: '/careers',
    trustCenter: '/trust-center',
  },
} as const;
