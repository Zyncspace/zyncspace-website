/**
 * Enterprise homepage sections — real data where available, lorem ipsum placeholders elsewhere.
 * Replace placeholder blocks when stakeholder content is ready.
 */

export const valueProposition = {
  label: 'Business Impact',
  title: ['FROM LEGACY FRICTION', 'TO MEASURABLE OUTCOMES.'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. We help executives reduce operational cost, accelerate time-to-market, and de-risk digital transformation — not just ship more code.',
  pillars: [
    {
      stat: '40%',
      label: 'Avg. cost reduction',
      title: 'Operational efficiency',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Automate manual workflows and consolidate fragmented tooling into unified platforms.',
    },
    {
      stat: '3×',
      label: 'Faster delivery cycles',
      title: 'Engineering velocity',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dedicated squads, CI/CD, and AI-assisted development shorten release windows.',
    },
    {
      stat: '99.9%',
      label: 'Uptime targets',
      title: 'Platform reliability',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation. Cloud-native architecture with observability, security scanning, and SLA-backed operations.',
    },
  ],
  cta: { label: 'Book Discovery Call ↗', href: '/contact' },
};

export const mediaShowcase = {
  label: 'Platform Preview',
  title: 'See How Teams Work in ZyncSpace',
  description:
    'Lorem ipsum — unified chat, tasks, and AI in one workspace. Explore product screenshots and a walkthrough of the platform experience.',
  video: {
    poster: '/assets/images/hero-dashboard.png',
    /** Placeholder — replace with real demo URL */
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'ZyncSpace platform overview (placeholder video)',
    caption: 'Placeholder demo — replace with official product walkthrough.',
  },
  screenshots: [
    {
      src: '/assets/images/features-chat.png',
      alt: 'ZyncSpace team chat interface with channels and threads',
      title: 'Team Chat',
      description: 'Lorem ipsum — organized channels, threads, and searchable history.',
    },
    {
      src: '/assets/images/kanban-home.png',
      alt: 'Kanban board integrated per channel in ZyncSpace',
      title: 'Kanban Boards',
      description: 'Dolor sit amet — turn messages into tasks with one click.',
    },
    {
      src: '/assets/images/huddle-home.png',
      alt: 'Instant huddles and voice collaboration in ZyncSpace',
      title: 'Huddles',
      description: 'Consectetur adipiscing — instant voice rooms without leaving chat.',
    },
    {
      src: '/assets/images/airewrite-home.png',
      alt: 'Built-in AI assistant rewriting messages in ZyncSpace',
      title: 'AI Assistant',
      description: 'Sed do eiusmod — summarize threads and rewrite tone in context.',
    },
  ],
};

export const customerJourney = {
  label: 'How We Engage',
  title: 'Your Path From Problem to Proof',
  steps: [
    { num: '01', title: 'Problem', description: 'Lorem ipsum — audit legacy systems, bottlenecks, and business impact.', icon: '◎' },
    { num: '02', title: 'Impact', description: 'Quantify cost, risk, and opportunity with executive-ready metrics.', icon: '◈' },
    { num: '03', title: 'Solution', description: 'Architecture, AI integration, and delivery roadmap aligned to ROI.', icon: '◆' },
    { num: '04', title: 'Proof', description: 'Case studies, pilots, and measurable outcomes before full scale.', icon: '◉' },
    { num: '05', title: 'Process', description: 'Eight-phase framework with documented gates and SLA guarantees.', icon: '▣' },
    { num: '06', title: 'Contact', description: 'Discovery call, proposal, and dedicated engagement team.', icon: '→' },
  ],
};

export const portfolio = {
  label: 'Portfolio Preview',
  title: 'Selected Engagements',
  description:
    'Lorem ipsum dolor sit amet — representative project snapshots. Client names anonymized until approved for publication.',
  items: [
    {
      title: 'FinTech Core Replatform',
      category: 'Platform Engineering',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
      metric: '+62%',
      metricLabel: 'Transaction throughput',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Legacy monolith to microservices on AWS.',
      tags: ['Next.js', 'Kubernetes', 'PostgreSQL'],
    },
    {
      title: 'Healthcare AI Triage',
      category: 'AI Consulting',
      image: 'https://images.unsplash.com/photo-1576091160550-2173ff94031d?q=80&w=800',
      metric: '-48%',
      metricLabel: 'Triage wait time',
      description: 'Sed do eiusmod tempor incididunt. HIPAA-aware RAG pipeline for clinical intake.',
      tags: ['Python', 'RAG', 'FastAPI'],
    },
    {
      title: 'Retail Checkout Optimization',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800',
      metric: '+340%',
      metricLabel: 'Conversion rate',
      description: 'Ut labore et dolore magna aliqua. Edge-cached APIs and UX conversion engineering.',
      tags: ['React', 'Edge', 'Stripe'],
    },
    {
      title: 'Enterprise Workspace Rollout',
      category: 'Product + Services',
      image: '/assets/images/home-hero-section.png',
      metric: '12K+',
      metricLabel: 'Active seats',
      description: 'Duis aute irure dolor. ZyncSpace deployment with SSO and custom integrations.',
      tags: ['ZyncSpace', 'SSO', 'Integrations'],
    },
  ],
  cta: { label: 'View All Case Studies ↗', href: '/services/case-studies' },
};

export const testimonials = {
  label: 'Client Perspectives',
  title: 'What Partners Say',
  disclaimer: 'Placeholder testimonials — replace with verified client quotes before publication.',
  items: [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ZyncSpace reduced our toolchain sprawl and cut onboarding time dramatically.',
      name: 'Jordan Ellis',
      role: 'VP Engineering',
      company: '[Placeholder Corp]',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop',
    },
    {
      quote:
        'Sed do eiusmod tempor incididunt ut labore. The consulting team delivered a production AI pipeline in weeks, not quarters.',
      name: 'Priya Sharma',
      role: 'Chief Digital Officer',
      company: '[Placeholder Ltd]',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop',
    },
    {
      quote:
        'Ut enim ad minim veniam, quis nostrud exercitation. Their framework gave our board confidence in every phase of migration.',
      name: 'Marcus Chen',
      role: 'CTO',
      company: '[Placeholder Global]',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop',
    },
  ],
};

export const trustCompliance = {
  label: 'Trust & Security',
  title: 'Built for Enterprise Expectations',
  description:
    'Lorem ipsum — security-first development practices. We do not claim certifications we have not earned; see our privacy policy for data handling.',
  badges: [
    { title: 'Secure SDLC', description: 'Semgrep, CodeQL, and gitleaks in every pipeline.' },
    { title: 'Privacy by Design', description: 'GDPR-aligned data minimization and consent flows.' },
    { title: 'Accessibility', description: 'WCAG 2.2 AA targets on all client deliverables.' },
    { title: 'Uptime SLA', description: '99.9%+ architecture availability on Scale engagements.' },
    { title: 'Vulnerability Scanning', description: 'Trivy container and dependency scanning in CI.' },
    { title: 'Audit-Ready Docs', description: 'Runbooks, architecture diagrams, and change logs.' },
  ],
  partnersNote: 'Technology partners and certifications displayed only when formally verified.',
};

export const team = {
  label: 'Leadership',
  title: 'The Team Behind the Work',
  disclaimer: 'Placeholder profiles — replace with verified team bios and photos.',
  members: [
    {
      name: 'Alex Morgan',
      role: 'Principal Architect',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 15+ years in platform engineering and cloud architecture.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&fit=crop',
    },
    {
      name: 'Sarah Okonkwo',
      role: 'Head of AI Practice',
      bio: 'Sed do eiusmod tempor incididunt. Leads multi-agent systems, RAG pipelines, and MLOps for enterprise clients.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop',
    },
    {
      name: 'David Park',
      role: 'Creative Director',
      bio: 'Ut labore et dolore magna aliqua. Design systems, motion, and conversion-focused UX for global brands.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&fit=crop',
    },
    {
      name: 'Elena Vasquez',
      role: 'Client Success Director',
      bio: 'Duis aute irure dolor in reprehenderit. Account strategy, SLA governance, and long-term partnership delivery.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&fit=crop',
    },
  ],
  cta: { label: 'Meet the Full Team ↗', href: '/about' },
};

export const faq = {
  label: 'FAQ',
  title: 'Common Questions',
  items: [
    {
      question: 'How do consulting services differ from the ZyncSpace product?',
      answer:
        'Services cover custom engineering, AI consulting, and digital transformation. ZyncSpace is our SaaS team workspace — chat, tasks, calendar, and AI. Many clients use both: we build on services, then run teams on the product.',
    },
    {
      question: 'What is a typical engagement timeline?',
      answer:
        'Lorem ipsum — discovery takes 2–4 weeks; full transformation programs run 12–26+ weeks depending on scope. Retainer models available for ongoing innovation.',
    },
    {
      question: 'Do you work with startups or only enterprise?',
      answer:
        'Sed do eiusmod tempor. We serve mid-market and enterprise clients; Growth tier starts at $10k/month for teams establishing modern digital operations.',
    },
    {
      question: 'Where is your team located?',
      answer:
        'We are remote-first with presence in India and global delivery capability. Contact us for timezone-aligned squad options.',
    },
    {
      question: 'How do you handle security and compliance?',
      answer:
        'Security-first SDLC with automated scanning in CI. We implement compliance controls as required by your industry — we only claim certifications that are formally achieved.',
    },
    {
      question: 'Can we start with a pilot before a full contract?',
      answer:
        'Ut enim ad minim veniam. Yes — discovery audits and proof-of-concept sprints are available before Scale or Enterprise engagements.',
    },
  ],
};

export const resources = {
  label: 'Resources',
  title: 'Insights & Downloads',
  description: 'Lorem ipsum — webinars, whitepapers, and engineering reports.',
  items: [
    {
      type: 'Whitepaper',
      title: 'Enterprise RAG Playbook',
      description: 'Lorem ipsum dolor sit amet — indexing strategies for legal and ops documents.',
      href: '/blogs',
      image: 'https://images.unsplash.com/photo-1456324507049-3fe979c873fb?q=80&w=600',
    },
    {
      type: 'Webinar',
      title: 'AI in Operations: 2026 Outlook',
      description: 'Sed do eiusmod — multi-agent workflows for back-office automation.',
      href: '/blogs',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600',
    },
    {
      type: 'Report',
      title: 'Core Web Vitals for B2B Sites',
      description: 'Ut labore et dolore — performance budgets that improve conversion.',
      href: '/blogs',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
    },
  ],
};
