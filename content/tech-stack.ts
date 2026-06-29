type TechStackCard = {
  name: string;
  category: string;
  description: string;
  featured?: boolean;
  outcome?: string;
};

const C = {
  platform: 'Platform & Cloud',
  backend: 'Backend Engineering',
  database: 'Database Engineering',
  cloud: 'Cloud Services',
  devops: 'DevOps',
  security: 'Security',
  ai: 'AI Engineering',
  saas: 'SaaS Development',
  performance: 'Performance',
  integrations: 'Integrations',
  frontend: 'Frontend Engineering',
  uiux: 'UI/UX & 3D',
  gtm: 'GTM & Marketing',
  services: 'Services',
} as const;

function t(
  name: string,
  category: string,
  description: string,
  opts?: { featured?: boolean; outcome?: string },
): TechStackCard {
  return { name, category, description, ...opts };
}

const cards: TechStackCard[] = [
  // Platform & Cloud
  t(
    'AWS',
    C.platform,
    'Enterprise cloud - compute, storage, networking, and managed services at scale.',
    {
      featured: true,
      outcome: 'Multi-region, high-availability architectures with predictable cost controls.',
    },
  ),
  t(
    'Microsoft Azure',
    C.platform,
    'Enterprise cloud for hybrid workloads, identity, and Microsoft ecosystem integration.',
  ),
  t(
    'Google Cloud',
    C.platform,
    'GCP infrastructure for data-heavy workloads, ML pipelines, and global edge delivery.',
  ),
  t(
    'Cloud Architecture',
    C.platform,
    'Reference architectures for secure, scalable, and cost-aware production systems.',
  ),
  t(
    'Infrastructure as Code',
    C.platform,
    'Version-controlled, reviewable infrastructure provisioning across environments.',
  ),
  t(
    'Platform Engineering',
    C.platform,
    'Internal developer platforms, golden paths, and self-service infrastructure.',
    {
      featured: true,
      outcome: 'Engineering teams ship faster with standardized, governed platform abstractions.',
    },
  ),
  t(
    'DevOps',
    C.platform,
    'Culture and tooling that unifies development and operations for continuous delivery.',
  ),
  t(
    'Site Reliability Engineering',
    C.platform,
    'SLO-driven reliability, incident response, and error-budget governance.',
  ),
  t(
    'Cloud Migration',
    C.platform,
    'Lift-and-shift, re-platform, and refactor strategies with phased cutover plans.',
  ),
  t(
    'Multi-Cloud Architecture',
    C.platform,
    'Vendor-neutral designs across AWS, Azure, and GCP where business requires it.',
  ),
  t(
    'Cost Optimization',
    C.platform,
    'FinOps - right-sizing, reserved capacity, and waste elimination.',
  ),
  t(
    'High Availability',
    C.platform,
    'Multi-AZ, active-active, and failover patterns for mission-critical uptime.',
  ),
  t(
    'Disaster Recovery',
    C.platform,
    'RTO/RPO-aligned backup, replication, and runbook-tested recovery.',
  ),
  t(
    'Auto Scaling',
    C.platform,
    'Demand-responsive compute scaling without manual capacity planning.',
  ),
  t(
    'Load Balancing',
    C.platform,
    'Traffic distribution across healthy instances with health checks and SSL termination.',
  ),

  // Backend Engineering
  t(
    'Node.js',
    C.backend,
    'Event-driven JavaScript runtime for APIs, microservices, and real-time systems.',
    {
      featured: true,
      outcome: 'High-throughput backend services with a unified language across the stack.',
    },
  ),
  t(
    'TypeScript',
    C.backend,
    'Typed JavaScript for safer APIs, shared contracts, and maintainable services.',
  ),
  t(
    'JavaScript',
    C.backend,
    'Full-stack JavaScript for rapid prototyping and production services.',
  ),
  t(
    'PHP',
    C.backend,
    'Server-side language for CMS, legacy modernization, and Laravel applications.',
  ),
  t('Laravel', C.backend, 'PHP framework for rapid API and web application development.'),
  t(
    'Express.js',
    C.backend,
    'Minimal Node.js framework for REST APIs and middleware-driven services.',
  ),
  t(
    'NestJS',
    C.backend,
    'Structured Node.js framework with dependency injection and enterprise patterns.',
  ),
  t(
    'REST APIs',
    C.backend,
    'Resource-oriented HTTP APIs with versioning, pagination, and OpenAPI documentation.',
  ),
  t('GraphQL', C.backend, 'Flexible query layer for clients that need precise data fetching.'),
  t(
    'Webhooks',
    C.backend,
    'Event-driven integrations with signature verification and retry logic.',
  ),
  t('SDK Development', C.backend, 'Client libraries and developer tooling for your platform APIs.'),
  t(
    'Authentication',
    C.backend,
    'Login flows, session management, and identity provider integration.',
  ),
  t(
    'Authorization',
    C.backend,
    'Role-based and attribute-based access control for multi-tenant systems.',
  ),
  t('JWT', C.backend, 'Stateless token-based auth for APIs and microservice boundaries.'),
  t(
    'OAuth 2.0',
    C.backend,
    'Standard authorization framework for third-party and SSO integrations.',
  ),
  t('SAML', C.backend, 'Enterprise single sign-on for B2B and regulated industry clients.'),
  t('SSO', C.backend, 'Unified identity across applications with centralized access management.'),

  // Database Engineering
  t(
    'PostgreSQL',
    C.database,
    'Primary relational database for transactional workloads and pgvector AI search.',
    {
      featured: true,
      outcome:
        'ACID-compliant data with extensions for full-text search, JSON, and vector embeddings.',
    },
  ),
  t('MySQL', C.database, 'Widely deployed relational database for web applications and reporting.'),
  t(
    'MariaDB',
    C.database,
    'MySQL-compatible database with open-source governance and performance tuning.',
  ),
  t('MongoDB', C.database, 'Document database for flexible schemas and horizontal scaling.'),
  t('Redis', C.database, 'In-memory cache, session store, pub/sub, and job queue backend.'),
  t('Elasticsearch', C.database, 'Full-text search, log analytics, and observability indexing.'),
  t(
    'Database Optimization',
    C.database,
    'Index strategy, connection pooling, and query plan analysis.',
  ),
  t(
    'Query Optimization',
    C.database,
    'Slow-query remediation and execution plan tuning for production loads.',
  ),
  t('Replication', C.database, 'Primary-replica setups for read scaling and failover readiness.'),
  t(
    'Data Migration',
    C.database,
    'Zero-downtime schema changes and cross-database migration pipelines.',
  ),

  // Cloud Services
  t(
    'Amazon EC2',
    C.cloud,
    'Virtual compute instances for custom workloads and legacy application hosting.',
  ),
  t(
    'Amazon ECS',
    C.cloud,
    'Container orchestration on AWS without managing control plane complexity.',
  ),
  t('AWS Lambda', C.cloud, 'Serverless functions for event-driven processing and API backends.'),
  t('Amazon S3', C.cloud, 'Object storage for assets, backups, and static site delivery origins.'),
  t(
    'Amazon CloudFront',
    C.cloud,
    'Global CDN for low-latency static and dynamic content delivery.',
  ),
  t('Amazon RDS', C.cloud, 'Managed relational databases with automated backups and patching.'),
  t('Amazon ElastiCache', C.cloud, 'Managed Redis and Memcached for caching and session layers.'),
  t(
    'Amazon SES',
    C.cloud,
    'Transactional and bulk email delivery with bounce and complaint handling.',
  ),
  t(
    'Amazon SQS',
    C.cloud,
    'Managed message queues for decoupled, resilient microservice communication.',
  ),
  t(
    'Amazon Route 53',
    C.cloud,
    'DNS routing, health checks, and failover for global traffic management.',
  ),
  t('AWS IAM', C.cloud, 'Identity and access policies with least-privilege role design.'),
  t('Amazon VPC', C.cloud, 'Isolated network segments with public/private subnet architecture.'),
  t('AWS CloudFormation', C.cloud, 'Declarative AWS resource provisioning and stack management.'),
  t(
    'Amazon CloudWatch',
    C.cloud,
    'Metrics, alarms, logs, and dashboards for operational visibility.',
  ),
  t('AWS WAF', C.cloud, 'Web application firewall rules for OWASP and bot protection at the edge.'),
  t(
    'Microsoft Azure Services',
    C.cloud,
    'Azure compute, storage, networking, and PaaS for enterprise workloads.',
  ),
  t(
    'Google Cloud Services',
    C.cloud,
    'GCP compute, BigQuery, Cloud Run, and AI platform services.',
  ),

  // DevOps
  t('Docker', C.devops, 'Container packaging for consistent deployments across environments.'),
  t(
    'GitHub Actions',
    C.devops,
    'CI/CD pipelines with security gates, artifact caching, and deployment automation.',
  ),
  t('Jenkins', C.devops, 'Self-hosted CI/CD for complex enterprise pipeline requirements.'),
  t(
    'CI/CD',
    C.devops,
    'Automated build, test, and deploy pipelines with rollback and approval gates.',
  ),
  t(
    'Kubernetes',
    C.devops,
    'Production container orchestration with auto-healing and horizontal scaling.',
    {
      featured: true,
      outcome: 'Workloads stay online and scale automatically during traffic spikes.',
    },
  ),
  t(
    'Nginx',
    C.devops,
    'Reverse proxy, load balancer, and static file server for production edge layers.',
  ),
  t('Linux', C.devops, 'Production server administration, hardening, and performance tuning.'),
  t('Bash', C.devops, 'Automation scripts for deployment, backup, and operational runbooks.'),
  t(
    'Monitoring',
    C.devops,
    'Uptime, latency, and error-rate observability with actionable alerting.',
  ),
  t('Logging', C.devops, 'Centralized log aggregation, retention policies, and search.'),
  t(
    'Infrastructure Automation',
    C.devops,
    'Terraform, Ansible, and scripted provisioning for repeatable environments.',
  ),

  // Security
  t(
    'Secure API Development',
    C.security,
    'Input validation, rate limiting, and threat-modeled API design.',
  ),
  t(
    'IAM',
    C.security,
    'Identity and access management with least-privilege policies and MFA enforcement.',
  ),
  t('WAF', C.security, 'Web application firewall at the edge and application layer.'),
  t('OWASP', C.security, 'Top-10 aligned secure coding practices and vulnerability remediation.'),
  t('VAPT Fixes', C.security, 'Remediation of penetration test and security assessment findings.'),
  t('Security Headers', C.security, 'CSP, HSTS, and frame protection for browser-level defense.'),
  t(
    'Secrets Management',
    C.security,
    'Vault, parameter stores, and rotation for credentials and API keys.',
  ),

  // AI Engineering
  t('OpenAI', C.ai, 'GPT models for chat, completion, embeddings, and agent orchestration.', {
    featured: true,
    outcome: 'Production LLM features with zero-retention pipelines and cost controls.',
  }),
  t(
    'Google Gemini',
    C.ai,
    'Multimodal Gemini models for reasoning, vision, and enterprise AI workloads.',
  ),
  t('Hugging Face', C.ai, 'Open-source model hub, transformers, and custom fine-tuning pipelines.'),
  t('AI Agents', C.ai, 'Autonomous agents with tool use, memory, and multi-step task execution.'),
  t(
    'LLM Integration',
    C.ai,
    'API integration, streaming, fallback models, and token budget management.',
  ),
  t('RAG', C.ai, 'Retrieval-augmented generation with vector search and document chunking.'),
  t(
    'Prompt Engineering',
    C.ai,
    'System prompts, few-shot templates, and evaluation-driven iteration.',
  ),
  t(
    'Resume Matching',
    C.ai,
    'AI-powered candidate–role matching for HR and recruitment platforms.',
  ),
  t(
    'AI Workflow Automation',
    C.ai,
    'LLM-driven process automation across CRM, support, and operations.',
  ),
  t('AI Chatbots', C.ai, 'Context-aware conversational interfaces with guardrails and escalation.'),
  t(
    'AI SaaS Development',
    C.ai,
    'Full-stack AI product builds - from MVP to multi-tenant production.',
  ),

  // SaaS Development
  t('LMS', C.saas, 'Learning management systems with courses, assessments, and progress tracking.'),
  t('CRM', C.saas, 'Customer relationship management with pipelines, automation, and reporting.'),
  t('HRMS', C.saas, 'Human resource management - payroll, attendance, and employee lifecycle.'),
  t(
    'Internal Tools',
    C.saas,
    'Custom admin panels and ops dashboards for engineering and business teams.',
  ),
  t('Admin Dashboards', C.saas, 'Data-rich control panels with role-based views and audit trails.'),
  t(
    'Enterprise Applications',
    C.saas,
    'Large-scale B2B software with compliance and integration requirements.',
  ),
  t(
    'Multi-Tenant SaaS',
    C.saas,
    'Tenant isolation, billing per seat, and shared infrastructure efficiency.',
  ),
  t(
    'Subscription Systems',
    C.saas,
    'Recurring billing, plan tiers, trials, and usage-based pricing.',
  ),

  // Performance
  t(
    'Image Optimization',
    C.performance,
    'Compression, responsive formats, and CDN delivery for fast page loads.',
  ),
  t(
    'CDN',
    C.performance,
    'Edge caching for static assets and accelerated global content delivery.',
  ),
  t(
    'Caching',
    C.performance,
    'Application, database, and CDN cache layers for sub-second responses.',
  ),
  t(
    'Queue Systems',
    C.performance,
    'Async job processing for email, webhooks, and background workloads.',
  ),
  t(
    'Performance Optimization',
    C.performance,
    'Profiling, bottleneck analysis, and Core Web Vitals improvement.',
  ),

  // Integrations
  t(
    'Razorpay',
    C.integrations,
    'Payment gateway integration for Indian market checkout and subscriptions.',
  ),
  t(
    'Vimeo',
    C.integrations,
    'Video hosting, playback, and privacy controls for LMS and media platforms.',
  ),
  t('Slack', C.integrations, 'Team notifications, bot integrations, and workflow triggers.'),
  t(
    'Email Systems',
    C.integrations,
    'Transactional email, templates, and deliverability monitoring.',
  ),
  t('Payment Gateways', C.integrations, 'Stripe, Razorpay, and custom payment flow integration.'),
  t(
    'Third-Party APIs',
    C.integrations,
    'REST, GraphQL, and webhook integrations with retry and idempotency.',
  ),

  // Frontend Engineering
  t('React.js', C.frontend, 'Component-based UI library for interactive web applications.'),
  t(
    'Next.js',
    C.frontend,
    'React framework for SSR, static export, and SEO-ready production sites.',
    {
      featured: true,
      outcome: 'Fast page loads and search visibility for marketing and product surfaces.',
    },
  ),
  t('Tailwind CSS', C.frontend, 'Utility-first CSS with design tokens and responsive layouts.'),
  t('GSAP', C.frontend, 'High-performance timeline animations for hero and scroll experiences.'),
  t('Three.js', C.frontend, 'WebGL 3D rendering for interactive product and data visualizations.'),
  t('WebGL', C.frontend, 'GPU-accelerated graphics for browsers and immersive experiences.'),
  t('WebRTC', C.frontend, 'Real-time voice and video for huddles, calls, and live collaboration.'),
  t('WebSockets', C.frontend, 'Persistent connections for chat, live updates, and notifications.'),
  t('Framer Motion', C.frontend, 'Declarative React animations for polished UI transitions.'),
  t('shadcn/ui', C.frontend, 'Accessible, composable component primitives built on Radix UI.'),
  t(
    'Responsive Design',
    C.frontend,
    'Mobile-first layouts that work across devices and screen sizes.',
  ),
  t('Progressive Web Apps', C.frontend, 'Installable, offline-capable web applications.'),

  // UI/UX & 3D
  t(
    'Landing Pages',
    C.uiux,
    'Conversion-focused marketing pages with clear CTAs and social proof.',
  ),
  t('SaaS Dashboards', C.uiux, 'Data-dense interfaces for operators, admins, and end users.'),
  t('Design Systems', C.uiux, 'Reusable tokens, components, and documentation for consistent UI.'),
  t(
    'Interactive Experiences',
    C.uiux,
    'Scroll-driven narratives, tabs, and product preview patterns.',
  ),
  t(
    '3D Experiences',
    C.uiux,
    'Immersive WebGL scenes for product showcase and brand storytelling.',
  ),
  t('Motion Design', C.uiux, 'Micro-interactions and page transitions that guide user attention.'),
  t(
    'Enterprise UI',
    C.uiux,
    'Accessible, professional interfaces for B2B and regulated industries.',
  ),
  t(
    'React Three Fiber',
    C.uiux,
    'React renderer for Three.js - declarative 3D in component trees.',
  ),
  t(
    'Blender Assets Integration',
    C.uiux,
    'Import and optimize 3D models for web-based configurators.',
  ),
  t(
    'Interactive Product Showcase',
    C.uiux,
    '3D and motion-driven product demos for sales and marketing.',
  ),
  t('3D Configurators', C.uiux, 'Real-time product customization with WebGL preview.'),

  // GTM & Marketing
  t('GTM Strategy', C.gtm, 'Go-to-market planning - ICP, positioning, and launch sequencing.'),
  t('Product Positioning', C.gtm, 'Differentiated messaging that maps features to buyer outcomes.'),
  t('Sales Enablement', C.gtm, 'Decks, battlecards, and demo scripts for revenue teams.'),
  t('B2B Sales', C.gtm, 'Enterprise sales motions with long-cycle deal support.'),
  t('Lead Generation', C.gtm, 'Inbound and outbound pipelines for qualified pipeline growth.'),
  t('Sales Funnel Design', C.gtm, 'Stage definitions, conversion metrics, and handoff workflows.'),
  t('Sales Operations', C.gtm, 'CRM hygiene, forecasting, and process automation for sales teams.'),
  t('CRM Strategy', C.gtm, 'HubSpot, Salesforce, and custom CRM architecture for B2B growth.'),
  t('Customer Journey', C.gtm, 'Touchpoint analysis from awareness to renewal.'),
  t('Demand Generation', C.gtm, 'Campaigns, content, and channels that drive qualified interest.'),
  t('Product Marketing', C.gtm, 'Launch plans, competitive intel, and persona-driven messaging.'),
  t('Growth Marketing', C.gtm, 'Experimentation loops for acquisition, activation, and retention.'),
  t('Content Strategy', C.gtm, 'Editorial calendars aligned to SEO and sales enablement goals.'),
  t('Brand Positioning', C.gtm, 'Visual identity and narrative consistency across channels.'),
  t('Performance Marketing', C.gtm, 'Paid acquisition with ROAS tracking and creative iteration.'),
  t('Marketing Automation', C.gtm, 'Email sequences, scoring, and nurture workflows.'),
  t('SEO Strategy', C.gtm, 'Technical SEO, content clusters, and search visibility programs.'),
  t(
    'Conversion Optimization',
    C.gtm,
    'A/B testing and UX improvements for higher conversion rates.',
  ),
  t(
    'Enterprise Sales',
    C.gtm,
    'Multi-stakeholder deals with security review and procurement support.',
  ),
  t('Sales Pipeline', C.gtm, 'Stage tracking, velocity metrics, and forecast accuracy.'),
  t('CRM Setup', C.gtm, 'CRM configuration, integrations, and team onboarding.'),
  t('Customer Success', C.gtm, 'Onboarding, health scores, and expansion revenue programs.'),
  t(
    'Revenue Operations',
    C.gtm,
    'RevOps tooling and data alignment across marketing, sales, and CS.',
  ),
  t(
    'Account Management',
    C.gtm,
    'Relationship management and upsell for existing enterprise accounts.',
  ),
  t('Business Development', C.gtm, 'Partnerships, alliances, and strategic channel growth.'),

  // Services
  t('AI Strategy', C.services, 'Roadmaps for adopting AI with clear ROI and risk boundaries.'),
  t('AI Automation', C.services, 'Workflow automation powered by LLMs and integration pipelines.'),
  t(
    'AI Integration',
    C.services,
    'Embedding AI capabilities into existing products and operations.',
  ),
  t('AI Consulting', C.services, 'Advisory on model selection, architecture, and compliance.'),
  t(
    'AI Product Development',
    C.services,
    'End-to-end AI product builds from prototype to production.',
  ),
  t(
    'Product Engineering',
    C.services,
    'Full-cycle software design, build, and scale for web and SaaS.',
  ),
  t(
    'Backend Development',
    C.services,
    'APIs, microservices, and data layers built for production load.',
  ),
  t(
    'Frontend Development',
    C.services,
    'Modern React/Next.js interfaces with performance and accessibility.',
  ),
  t(
    'Full Stack Development',
    C.services,
    'Unified delivery across frontend, backend, and cloud infrastructure.',
  ),
  t(
    'Enterprise Software',
    C.services,
    'B2B platforms with security, compliance, and integration requirements.',
  ),
  t(
    'AWS Consulting',
    C.services,
    'Architecture reviews, migrations, and managed AWS implementations.',
  ),
  t(
    'Cloud Migration',
    C.services,
    'Phased migration from on-prem or legacy cloud with minimal downtime.',
  ),
  t(
    'Digital Transformation',
    C.services,
    'Modernize legacy systems and automate manual business processes.',
  ),
  t(
    'Technology Consulting',
    C.services,
    'Executive-level technology advisory aligned to business outcomes.',
  ),
  t('Product Strategy', C.services, 'Roadmaps, prioritization, and build-vs-buy decisions.'),
  t(
    'GTM Consulting',
    C.services,
    'Launch strategy, positioning, and sales enablement for B2B products.',
  ),
  t('UI/UX Design', C.services, 'Research-driven interfaces focused on usability and conversion.'),
  t(
    'Website Development',
    C.services,
    'Marketing sites and product landing pages built for speed and SEO.',
  ),
  t('Motion Design', C.services, 'Animation and interaction design for premium brand experiences.'),
  t('3D Experiences', C.services, 'WebGL product showcases and interactive configurators.'),
];

export const techStackContent = {
  label: 'Production Engineering',
  title: 'Our Production Technology Stack',
  description:
    'Cloud, backend, AI, SaaS, frontend, and go-to-market - a production-grade stack we use to design, build, and scale enterprise software for ambitious teams.',
  cta: {
    label: 'Explore Full Technology Stack ↗',
    href: '/services/technology',
  },
  filters: [
    'All Technologies',
    C.platform,
    C.backend,
    C.database,
    C.cloud,
    C.devops,
    C.security,
    C.ai,
    C.saas,
    C.performance,
    C.integrations,
    C.frontend,
    C.uiux,
    C.gtm,
    C.services,
  ],
  previewPillars: ['AWS', 'Platform Engineering', 'Node.js'],
  /** Homepage - informative overview (no tool listing) */
  homepage: {
    intro:
      'We standardize on proven cloud, backend, AI, and frontend technologies - chosen for uptime, security, and speed to production. Every engagement maps tools to business outcomes, not buzzwords.',
    highlights: [
      {
        title: 'Platform & Cloud',
        description:
          'AWS, Azure, and GCP architectures with Kubernetes, Terraform, and SRE practices for high availability and cost control.',
      },
      {
        title: 'Backend & Data',
        description:
          'Node.js, TypeScript, PostgreSQL, Redis, and API-first design - REST, GraphQL, OAuth, and enterprise SSO built in.',
      },
      {
        title: 'AI & SaaS',
        description:
          'OpenAI, Gemini, RAG pipelines, and multi-tenant SaaS patterns for LMS, CRM, HRMS, and internal platforms.',
      },
      {
        title: 'Frontend & Delivery',
        description:
          'React, Next.js, design systems, and CI/CD with security gates - from landing pages to enterprise dashboards.',
      },
    ],
    stats: [
      { value: '175+', label: 'Production technologies' },
      { value: '14', label: 'Engineering layers' },
      { value: 'CI', label: 'Security-gated delivery' },
    ],
  },
  cards,
};
