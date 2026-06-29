/**
 * Enterprise homepage sections — outcome-focused, trust-safe copy.
 * No unverified client logos, fake testimonials, or invented metrics.
 */

export const aboutSection = {
  label: 'About ZyncSpace',
  title: 'Your Strategic Technology Partner',
  description:
    'ZyncSpace is a technology consulting and product engineering company helping startups, SMBs, and enterprises modernize their digital ecosystem. We combine AI, cloud, software engineering, automation, and design to transform ideas into scalable digital products.',
  cta: { label: 'Learn About Our Practice ↗', href: '/about' },
};

export const valueProposition = {
  label: 'Business Impact',
  title: ['FROM LEGACY FRICTION', 'TO MEASURABLE OUTCOMES.'],
  description:
    'We translate engineering decisions into executive outcomes — reduced operational cost, faster time-to-market, and de-risked transformation. Every engagement ties technical work to business value.',
  pillars: [
    {
      stat: '40%',
      label: 'Target cost reduction',
      title: 'Operational efficiency',
      context:
        'Typical drivers: cloud resource right-sizing, legacy decommissioning, and workflow automation.',
      description:
        'Consolidate fragmented tooling and automate manual processes so teams ship faster with less overhead.',
    },
    {
      stat: '3×',
      label: 'Faster delivery cycles',
      title: 'Engineering velocity',
      context:
        'Achieved through dedicated squads, CI/CD pipelines, and incremental migration — not big-bang rewrites.',
      description:
        'Structured sprints, automated quality gates, and AI-assisted development shorten release windows.',
    },
    {
      stat: '99.9%',
      label: 'Availability target',
      title: 'Platform reliability',
      context:
        'Cloud-native architecture with observability, auto-scaling, and documented runbooks.',
      description:
        'Design for resilience so applications stay online during traffic spikes and infrastructure events.',
    },
  ],
  cta: { label: 'Schedule a Discovery Call ↗', href: '/contact' },
};

export const whyChoose = {
  label: 'Why Choose Us',
  title: 'Where Engineering Meets Business Outcomes',
  description:
    'We combine AI-first delivery, cloud-native architecture, and enterprise-grade security to remove delivery risk — and help you ship products your stakeholders can trust.',
  items: [
    {
      id: 'ai',
      title: 'AI-First Engineering',
      description:
        'Intelligent systems with zero-retention pipelines — your data never trains public models.',
    },
    {
      id: 'cloud',
      title: 'Cloud-Native Architecture',
      description:
        'AWS, GCP, Azure, and Kubernetes — built to scale without re-architecting every quarter.',
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      description:
        'IAM enforcement, isolated VPCs, and automated security scanning in every CI pipeline.',
    },
    {
      id: 'agile',
      title: 'Agile Delivery',
      description:
        'Two-week sprints, documented gates, and stakeholder demos — no black-box development.',
    },
    {
      id: 'scale',
      title: 'Scalable Solutions',
      description: 'Microservices and event-driven patterns that grow with your traffic and team.',
    },
    {
      id: 'partnership',
      title: 'Long-Term Partnership',
      description:
        'Retainer models, knowledge transfer, and runbooks so your team owns the outcome.',
    },
  ],
};

export const mediaShowcase = {
  label: 'Platform Preview',
  title: 'See How Teams Work in ZyncSpace',
  description:
    'One workspace for chat, tasks, voice, and AI — select a capability to preview how teams stay aligned without switching tools.',
  features: [
    {
      id: 'team-chat',
      title: 'Team Chat',
      description:
        'Organized channels and threads keep conversations searchable and actionable — context never gets lost in the scroll.',
      src: '/assets/images/platform-preview/platform-preview-team-chat.webp',
      alt: 'Team collaborating around ZyncSpace team chat with channels and threads',
    },
    {
      id: 'kanban',
      title: 'Kanban Boards',
      description:
        'Turn messages into tasks in one click and track work where your team already communicates.',
      src: '/assets/images/platform-preview/platform-preview-kanban.webp',
      alt: 'Team reviewing a Kanban board integrated in ZyncSpace',
    },
    {
      id: 'huddles',
      title: 'Huddles',
      description:
        'Start voice collaboration instantly without leaving the conversation — no separate meeting links.',
      src: '/assets/images/platform-preview/platform-preview-huddles.webp',
      alt: 'Remote team in an instant voice huddle inside ZyncSpace',
    },
    {
      id: 'ai-assistant',
      title: 'AI Assistant',
      description:
        'Summarize threads and refine tone in context — your data stays within your workspace.',
      src: '/assets/images/platform-preview/platform-preview-ai-assistant.webp',
      alt: 'Colleagues using the built-in AI assistant in ZyncSpace',
    },
  ],
};

export const deliveryProcess = {
  label: 'Our Process',
  title: 'How We Deliver',
  description:
    'A structured path from first conversation to production — with clear gates, documentation, and stakeholder visibility at every stage.',
  steps: [
    {
      num: '01',
      phase: 'Discover',
      title: 'Discovery & Strategy',
      description: 'Audit systems, quantify business impact, and align stakeholders on ROI.',
    },
    {
      num: '02',
      phase: 'Discover',
      title: 'Architecture & Planning',
      description: 'Reference architectures, risk matrix, and phased roadmap with TCO models.',
    },
    {
      num: '03',
      phase: 'Build',
      title: 'Design & Prototyping',
      description: 'Figma systems, API contracts, and interactive prototypes for sign-off.',
    },
    {
      num: '04',
      phase: 'Build',
      title: 'Development',
      description: 'Production-grade code, AI integration, and CI/CD with daily visibility.',
    },
    {
      num: '05',
      phase: 'Build',
      title: 'Testing & Security',
      description: 'Automated tests, penetration reviews, and compliance-aligned hardening.',
    },
    {
      num: '06',
      phase: 'Operate',
      title: 'Deployment',
      description: 'Canary rollouts, load testing, and zero-downtime migration runbooks.',
    },
    {
      num: '07',
      phase: 'Operate',
      title: 'Continuous Optimization',
      description: 'Performance tuning, cost optimization, and quarterly innovation sprints.',
    },
  ],
};

export const referenceArchitectures = {
  label: 'Reference Architectures',
  title: 'How We Build — Not Just What We Use',
  description:
    'High-level patterns we deploy for enterprise clients. Detailed diagrams and runbooks are shared during discovery and engagement.',
  items: [
    {
      title: 'Multi-Agent AI Pipeline',
      subtitle: 'RAG + orchestration layer',
      description:
        'Isolated VPC, vector store (pgvector or managed), API gateway with strict IAM, and agent workers that never persist client prompts to public model training.',
      layers: [
        'Client Apps',
        'API Gateway',
        'Agent Orchestrator',
        'Vector DB',
        'LLM Provider (zero-retention)',
      ],
    },
    {
      title: 'Cloud-Native SaaS Platform',
      subtitle: 'Kubernetes on AWS / GCP',
      description:
        'Microservices behind ingress, horizontal pod autoscaling for traffic spikes, Terraform-managed infra, and observability (metrics, traces, logs) from day one.',
      layers: ['CDN + WAF', 'EKS / GKE', 'Services + Jobs', 'RDS / Cloud SQL', 'S3 / GCS'],
    },
    {
      title: 'Legacy Migration Pattern',
      subtitle: 'Strangler fig incremental cutover',
      description:
        'Parallel run of legacy and new services, feature flags for routing, database sync with validation gates, and rollback plans documented before go-live.',
      layers: [
        'Legacy Monolith',
        'Anti-Corruption Layer',
        'New Services',
        'Event Bus',
        'Cutover Gate',
      ],
    },
  ],
};

export const portfolio = {
  label: 'Engagement Patterns',
  title: 'Representative Work — Anonymized',
  description:
    'Illustrative outcomes from consulting patterns we deliver. Client names withheld until approved for publication. Metrics vary by scope and baseline.',
  items: [
    {
      title: 'FinTech Core Replatform',
      category: 'Platform Engineering',
      image: '/assets/images/stock/analytics-dashboard.webp',
      metric: 'Microservices',
      metricLabel: 'Migration pattern',
      description:
        'Monolith decomposed into bounded contexts on AWS EKS — IAM roles per service, Terraform state locking, and blue-green deploys.',
      tags: ['EKS', 'Terraform', 'PostgreSQL'],
    },
    {
      title: 'Healthcare Intake Automation',
      category: 'AI Consulting',
      image: '/assets/images/stock/healthcare-team.webp',
      metric: 'RAG Pipeline',
      metricLabel: 'HIPAA-aligned design',
      description:
        'Private vector index, audit logging, and human-in-the-loop review — client data never used for public model training.',
      tags: ['FastAPI', 'RAG', 'Private VPC'],
    },
    {
      title: 'Retail Checkout Modernization',
      category: 'Digital Transformation',
      image: '/assets/images/stock/payment-retail.webp',
      metric: 'Edge + API',
      metricLabel: 'Performance focus',
      description:
        'Edge-cached checkout APIs, rigorous load testing before peak season, and CORS policies locked per environment.',
      tags: ['Next.js', 'CloudFront', 'Stripe'],
    },
    {
      title: 'Team Workspace Rollout',
      category: 'Product + Services',
      image: '/assets/images/home-hero-section.webp',
      metric: 'SSO + SCIM',
      metricLabel: 'Enterprise rollout',
      description:
        'ZyncSpace deployment with SSO integration, channel templates, and admin runbooks for IT teams.',
      tags: ['ZyncSpace', 'SSO', 'Integrations'],
    },
  ],
  cta: { label: 'Discuss Your Use Case ↗', href: '/contact' },
};

export const clientStories = {
  label: 'Client Perspectives',
  title: 'Verified Stories — Coming Soon',
  description:
    'We do not publish anonymous or fabricated testimonials. As client engagements conclude with approval, verified quotes with names, titles, and LinkedIn profiles will appear here.',
  cta: { label: 'View Case Studies ↗', href: '/services/case-studies' },
};

export const trustCompliance = {
  label: 'Trust & Security',
  title: 'Built for Enterprise Procurement',
  description:
    'We align with SOC 2 and ISO 27001 frameworks in our delivery practices. We do not display certification badges until formally audited and achieved.',
  aiPrivacy: {
    title: 'Zero-Retention AI Pipelines',
    description:
      'Your proprietary data never trains public models. Client prompts, documents, and embeddings stay in your isolated environment or approved private endpoints — with contractual data-handling terms.',
  },
  badges: [
    {
      title: 'IAM & Least Privilege',
      description:
        'Role-based access, MFA enforcement, and scoped service accounts across all environments.',
    },
    {
      title: 'Network Isolation',
      description:
        'VPC-isolated workloads, private subnets for data stores, and strict security group policies.',
    },
    {
      title: 'CORS & Environment Controls',
      description: 'Explicit allowlists per environment — no wildcard origins in production.',
    },
    {
      title: 'Secure SDLC',
      description: 'Semgrep, CodeQL, gitleaks, and Trivy in CI on every merge.',
    },
    {
      title: 'GDPR-Aligned Privacy',
      description: 'Data minimization, consent flows, and documented retention policies.',
    },
    {
      title: 'Audit-Ready Deliverables',
      description: 'Architecture diagrams, runbooks, change logs, and penetration test reports.',
    },
  ],
  frameworksNote:
    'SOC 2 Type II and ISO 27001: we implement controls aligned to these frameworks; formal certification is pursued per client and organizational roadmap.',
};

export const leadershipTeam = {
  label: 'Leadership',
  title: 'The Team Behind the Work',
  members: [
    {
      name: 'Atul Tiwari',
      role: 'CEO',
      bio: 'Leads company vision, client partnerships, and delivery strategy across consulting and product engineering.',
      image: '/assets/team/atul-tiwari.webp',
    },
    {
      name: 'Hemal Buha',
      role: 'Co-Founder',
      bio: 'Technical leadership across backend architecture, cloud scaling, AI pipelines, and platform engineering.',
      image: '/assets/team/hemal-buha.webp',
    },
    {
      name: 'L. Gouri Sankar',
      role: 'Co-Founder',
      bio: 'Drives product engineering, solution architecture, and end-to-end delivery for enterprise engagements.',
      image: '/assets/team/gouri-sankar.webp',
    },
    {
      name: 'Archita Hirapara',
      role: 'Human Resources',
      bio: 'Builds the people operations, hiring pipeline, and culture that support high-performing engineering teams.',
      image: '/assets/team/archita-hirapara.webp',
    },
  ],
};

export const engineeringPractice = {
  label: 'Who Builds With You',
  title: 'Engineering-Led Delivery',
  description:
    'Enterprises buy the people solving the problem — not just a logo. Our founders and engineers embed with your team: architects, AI engineers, platform engineers, and design systems specialists.',
  highlights: [
    {
      title: 'Backend & Platform',
      description:
        'Distributed systems, API design, database scaling, and cloud cost optimization.',
    },
    {
      title: 'AI & Data',
      description: 'RAG pipelines, agent orchestration, MLOps, and responsible AI governance.',
    },
    {
      title: 'Frontend & Design Systems',
      description: 'Next.js product surfaces, accessibility, and conversion-focused UX.',
    },
  ],
  links: [
    { label: 'Engineering Blog', href: '/blogs' },
    { label: 'Open Source (GitHub)', href: 'https://github.com/zyncspace' },
    { label: 'About Our Practice', href: '/about' },
  ],
};

export const productLines = {
  label: 'Products',
  title: 'Platforms That Accelerate Services',
  items: [
    {
      title: 'AI Business Automation',
      description:
        'Automate repetitive workflows using AI agents and intelligent integrations — scoped to your data boundary.',
    },
    {
      title: 'Enterprise Analytics',
      description:
        'Transform operational data into actionable insights with pipelines you control.',
    },
    {
      title: 'ZyncSpace Workspace',
      description:
        'Custom SaaS team platform — chat, tasks, calendar, and AI in one place. Accelerates adoption after we build.',
    },
  ],
};

export const faq = {
  label: 'FAQ',
  title: 'Common Questions',
  items: [
    {
      question: 'How do consulting services differ from the ZyncSpace product?',
      answer:
        'Services cover custom engineering, AI consulting, and digital transformation. ZyncSpace is our SaaS team workspace. Many clients use both: we build on services, then run teams on the product.',
    },
    {
      question: 'How is our data handled in AI engagements?',
      answer:
        'Zero-retention by default: your data stays in isolated environments or approved private endpoints. We contractually prohibit using client data to train public models. Details are documented in our SOW and privacy policy.',
    },
    {
      question: 'Do you have SOC 2 or ISO 27001 certification?',
      answer:
        'We implement controls aligned with SOC 2 and ISO 27001 frameworks. We do not claim formal certification until audits are complete. We provide architecture docs, security scan results, and compliance checklists during procurement.',
    },
    {
      question: 'What is a typical engagement timeline?',
      answer:
        'Discovery takes 2–4 weeks. Full programs run 12–26+ weeks depending on scope. Growth tier starts at $10k/month; Scale at $25k/month for dedicated engineering squads.',
    },
    {
      question: 'Can we start with a pilot before a full contract?',
      answer:
        'Yes — discovery audits and proof-of-concept sprints are available before Scale or Enterprise engagements.',
    },
    {
      question: 'Where is your team located?',
      answer:
        'Remote-first with engineering presence in India and global delivery capability. We align squads to your timezone and compliance requirements.',
    },
  ],
};

export const resources = {
  label: 'Resources',
  title: 'Insights & Engineering Reports',
  description:
    'Architecture guides, AI governance notes, and performance engineering — from our engineering blog.',
  items: [
    {
      type: 'Guide',
      title: 'Enterprise RAG Playbook',
      description: 'Indexing strategies, chunking, and zero-retention LLM integration patterns.',
      href: '/blogs',
      image: '/assets/images/stock/ai-technology.webp',
    },
    {
      type: 'Article',
      title: 'AI in Operations',
      description: 'Multi-agent workflows for back-office automation — with governance guardrails.',
      href: '/blogs/ai-in-workplace-communication',
      image: '/assets/images/stock/office-meeting.webp',
    },
    {
      type: 'Report',
      title: 'Core Web Vitals for B2B',
      description: 'Performance budgets that improve conversion and search visibility.',
      href: '/blogs',
      image: '/assets/images/stock/laptop-analytics.webp',
    },
  ],
};

export const finalCta = {
  title: 'Ready to Accelerate Your Digital Transformation?',
  description:
    'Whether you are building a new product, modernizing legacy systems, or adopting AI — we help you deliver secure, scalable, and future-ready technology solutions.',
  primary: { label: 'Schedule a Discovery Call ↗', href: '/contact' },
  secondary: { label: 'View Case Studies', href: '/services/case-studies' },
};
