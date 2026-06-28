import { techStackContent } from './tech-stack';

export const servicesContent = {
  hero: {
    label: "Technology Consulting & Product Engineering",
    title: ["ENGINEERING THE FUTURE", "OF DIGITAL BUSINESS."],
    description:
      "We help ambitious businesses build scalable software, AI-powered automation, cloud infrastructure, and digital platforms that accelerate growth, reduce operational costs, and deliver measurable business outcomes.",
    stats: [
      { value: "99.9%", label: "Platform Availability Target" },
      { value: "150+", label: "Technologies in Production" },
      { value: "AI", label: "Powered Delivery" },
      { value: "Cloud", label: "Native Architecture" },
    ],
    cta: [
      { label: "Start Your Transformation ↗", href: "/contact", variant: "primary" },
      { label: "Explore Our Solutions", href: "/services", variant: "outline" },
    ],
  },

  /** Technology platforms we build on — not unverified client logos */
  partners: {
    label: "Powered by Industry-Leading Platforms",
    items: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "OpenAI",
      "Anthropic",
      "Google Gemini",
      "Hugging Face",
      "NVIDIA",
      "Meta AI",
      "Mistral AI",
      "GitHub",
      "Docker",
      "Kubernetes",
      "HashiCorp",
      "Cloudflare",
      "Vercel",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Datadog",
      "Grafana",
      "Figma",
      "Atlassian",
      "Slack",
      "Zoho",
      "HubSpot",
      "Stripe",
      "Twilio",
      "Salesforce",
    ],
  },

  capabilities: {
    label: "Services",
    title: "OUTCOMES-DRIVEN CAPABILITIES",
    description:
      "Every service line maps to a business outcome — reduced cost, faster delivery, lower risk, or new revenue — not just a technology deliverable.",
    items: [
      {
        num: "01",
        title: "AI Solutions",
        description:
          "Build intelligent systems using Generative AI, LLMs, AI agents, RAG, and workflow automation — with zero-retention data handling by default.",
      },
      {
        num: "02",
        title: "Product Engineering",
        description:
          "Design, develop, and scale web platforms, SaaS applications, and enterprise software with modern engineering practices and documented architecture.",
      },
      {
        num: "03",
        title: "Cloud & DevOps",
        description:
          "AWS, Azure, GCP, Kubernetes, CI/CD, observability, and infrastructure automation — so your application stays online during traffic spikes.",
      },
      {
        num: "04",
        title: "Digital Transformation",
        description:
          "Modernize legacy systems, automate business processes, and improve operational efficiency using incremental migration — not risky big-bang cutovers.",
      },
      {
        num: "05",
        title: "UI/UX Design",
        description:
          "Intuitive, accessible digital experiences focused on usability, conversion, and business outcomes — not decoration.",
      },
      {
        num: "06",
        title: "Managed Services",
        description:
          "Continuous monitoring, maintenance, optimization, security patching, and support for mission-critical applications after launch.",
      },
    ],
  },

  capabilityMatrix: {
    label: "ACTIVE NODE",
    title: "Enterprise Capability Matrix",
    description:
      "Harness next-generation LLM pipelines, RAG frameworks, and multi-agent systems to supercharge decision-making and automate complex operational workflows.",
    modules: [
      "Autonomous AI Agents",
      "Cognitive Chatbots",
      "Workflow Hyper-Automation",
      "Internal Enterprise Knowledge Systems",
      "Contextual RAG & Vector Database Pipelines",
      "AI-Powered Predictive Analytics",
    ],
    sla: {
      label: "SLA Guarantee",
      value: "99.99%",
      description: "Architecture Availability & Global Delivery",
      cta: { label: "Inquire For This Capability", href: "#contact" },
    },
  },

  framework: {
    label: "Strategic Methodology",
    title: "Our Digital Transformation Framework",
    description:
      "We do not guess. We follow a strict, highly documented, engineering-grade corporate delivery system that guarantees legacy extraction, seamless AI execution, and exponential customer growth.",
    metrics: [
      { value: "8", label: "Documented Phases" },
      { value: "12+", label: "Week Engagements" },
      { value: "99.9%", label: "Delivery SLA" },
    ],
    stages: [
      {
        num: "01",
        title: "Discover",
        tagline: "Audit & baseline your stack",
        headline: "Enterprise Auditing & Gap Identification",
        timeline: "Weeks 1 – 2",
        description:
          "We initiate with an immersive deep-dive audit of your entire technology architecture, legacy codebase constraints, pipeline choke points, marketing attribution streams, and team bandwidth.",
        leadRole: "Lead Strategic Architect & Business Consultant",
        deliverables: [
          "Infrastructure and Data Bottleneck Audit Report",
          "Legacy Code & Technical Debt Gap Analysis",
          "Operational Inefficiency Mapping Diagram",
          "Vetted Engineering Standards",
        ],
      },
      {
        num: "02",
        title: "Strategy",
        tagline: "Define the transformation roadmap",
        headline: "Strategic Architecture & Prioritization",
        timeline: "Weeks 3 – 4",
        description:
          "We translate audit findings into a prioritized transformation roadmap — sequencing AI integrations, platform migrations, and growth initiatives by ROI, risk, and time-to-value.",
        leadRole: "Principal Solution Architect & Strategy Lead",
        deliverables: [
          "Executive Transformation Roadmap",
          "Phased Investment & TCO Model",
          "Risk Matrix & Compliance Checklist",
          "Stakeholder Alignment Workshop Deck",
        ],
      },
      {
        num: "03",
        title: "Design",
        tagline: "Blueprint systems & experiences",
        headline: "UX/UI Systems & Technical Architecture",
        timeline: "Weeks 5 – 8",
        description:
          "Our design and engineering leads co-create system architecture diagrams, API contracts, Figma design systems, and data models — ensuring every build decision is validated before code is written.",
        leadRole: "Creative Director & Systems Architect",
        deliverables: [
          "Full Figma Design System & Component Library",
          "Microservices / API Architecture Diagram",
          "Database Schema & Data Flow Blueprints",
          "Interactive Prototype for Stakeholder Sign-off",
        ],
      },
      {
        num: "04",
        title: "Build",
        tagline: "Engineer with precision sprints",
        headline: "Agile Engineering & AI Integration",
        timeline: "Weeks 9 – 16",
        description:
          "Dedicated engineering squads execute in two-week sprints — shipping production-grade code, integrating LLM pipelines, configuring CI/CD, and maintaining full test coverage with daily standups.",
        leadRole: "Engineering Lead & MLOps Specialist",
        deliverables: [
          "Production-Ready Codebase with CI/CD Pipeline",
          "Multi-Agent AI System Integration",
          "Automated Test Suite & QA Reports",
          "Sprint Demos & Technical Documentation",
        ],
      },
      {
        num: "05",
        title: "Launch",
        tagline: "Deploy, validate, go live",
        headline: "Controlled Rollout & Validation",
        timeline: "Weeks 17 – 18",
        description:
          "We orchestrate staged rollouts with canary deployments, load testing, security hardening, and real-user validation — ensuring zero-downtime migration from legacy systems.",
        leadRole: "DevOps Lead & Release Manager",
        deliverables: [
          "Production Deployment Runbook",
          "Load & Stress Test Results",
          "Security Penetration Test Report",
          "Go-Live Checklist & Rollback Plan",
        ],
      },
      {
        num: "06",
        title: "Scale",
        tagline: "Expand reach & throughput",
        headline: "Infrastructure Scaling & Growth Systems",
        timeline: "Weeks 19 – 22",
        description:
          "Post-launch, we scale cloud infrastructure, optimize auto-scaling policies, integrate CRM and marketing automation, and configure analytics dashboards for real-time business intelligence.",
        leadRole: "Cloud Architect & Growth Engineer",
        deliverables: [
          "Auto-Scaling Kubernetes Configuration",
          "CRM & Marketing Funnel Integration",
          "Real-Time Analytics Dashboard",
          "Capacity Planning & Cost Optimization Report",
        ],
      },
      {
        num: "07",
        title: "Optimize",
        tagline: "Tune performance & conversion",
        headline: "Performance Engineering & Conversion Optimization",
        timeline: "Weeks 23 – 26",
        description:
          "We analyze production metrics, A/B test UX flows, optimize database queries, refine AI model accuracy, and eliminate conversion friction — driving measurable ROI improvements.",
        leadRole: "Performance Engineer & Data Analyst",
        deliverables: [
          "Performance Audit & Optimization Report",
          "A/B Test Results & UX Recommendations",
          "AI Model Accuracy Benchmarks",
          "Conversion Rate Improvement Analysis",
        ],
      },
      {
        num: "08",
        title: "Innovate",
        tagline: "Evolve with continuous delivery",
        headline: "Continuous Innovation & Iteration",
        timeline: "Ongoing Retainer",
        description:
          "Our retainer model ensures your platform never stagnates — quarterly innovation sprints, emerging tech evaluations, feature roadmaps, and dedicated engineering hours keep you ahead of the market.",
        leadRole: "Innovation Lead & Account Director",
        deliverables: [
          "Quarterly Innovation Roadmap",
          "Emerging Tech Evaluation Reports",
          "Dedicated Engineering Retainer Hours",
          "Board-Level Progress & ROI Reviews",
        ],
      },
    ],
  },

  techStack: techStackContent,

  industries: {
    label: "Industries We Serve",
    title: ["Built for High-Growth", "B2B Verticals"],
    description:
      "We adapt platform engineering, AI, and SaaS delivery to the compliance, scale, and go-to-market constraints of your industry.",
    items: [
      {
        title: "SaaS & B2B Platforms",
        description:
          "Multi-tenant architecture, subscription billing, and product-led growth infrastructure for software companies.",
        metric: "Multi-tenant",
        metricLabel: "SaaS-ready architecture",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
      },
      {
        title: "FinTech & AI Startups",
        description:
          "Secure APIs, payment integrations, LLM pipelines, and rapid MVP-to-production delivery for regulated and AI-native products.",
        metric: "Secure APIs",
        metricLabel: "Compliance-aware design",
        imageUrl:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800",
      },
      {
        title: "EdTech & HealthTech",
        description:
          "LMS platforms, HIPAA-aligned data handling, video integrations, and scalable learning and care delivery systems.",
        metric: "Data isolation",
        metricLabel: "Privacy-first patterns",
        imageUrl:
          "https://images.unsplash.com/photo-1576091160550-2173ff94031d?q=80&w=800",
      },
      {
        title: "Logistics, Retail & E-Commerce",
        description:
          "High-performance checkout, inventory systems, CDN delivery, and real-time tracking for operational scale.",
        metric: "Edge + CDN",
        metricLabel: "Performance at scale",
        imageUrl:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
      },
      {
        title: "Manufacturing & Enterprise Software",
        description:
          "Internal tools, ERP integrations, legacy modernization, and enterprise-grade platforms for complex organizations.",
        metric: "Enterprise",
        metricLabel: "Integration-ready delivery",
        imageUrl:
          "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800",
      },
      {
        title: "MarTech & Growth Platforms",
        description:
          "Attribution pipelines, CRM integrations, conversion analytics, and experimentation infrastructure for demand-gen and product-led growth teams.",
        metric: "Attribution",
        metricLabel: "Growth-engine delivery",
        imageUrl:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
      },
    ],
  },

  caseStudy: {
    label: "Case Study • Supply Chain (Anonymized)",
    client: "Global Logistics Client",
    metricLabel: "Routing processing time",
    before: { value: "22 Hours", strikethrough: true },
    after: { value: "1.4 Hours" },
    challenge: {
      title: "The Legacy Challenge",
      description:
        "Manual warehouse routing relied on spreadsheets and batch jobs — 22-hour latency caused missed SLAs and penalty fees. Network segmentation was flat; no audit trail for routing decisions.",
    },
    solution: {
      title: "The Architecture Response",
      description:
        "Strangler migration: edge containers on AWS EKS ingesting IoT conveyor events via private API gateway. Multi-agent orchestration for route optimization, Terraform-managed infra, IAM roles per microservice, and CloudWatch + distributed tracing. Pre-launch penetration test closed three critical network exposure findings.",
    },
  },

  consultingPricing: {
    label: "Clear Corporate TCO",
    title: "Flexible, Scalable Investment Plans",
    description:
      "We operate with transparent pricing structures aligned with your engineering workload and computing targets. Configure standard preset options or customize your exact engineering demands.",
    tiers: [
      {
        name: "Growth Tier",
        price: "$10,000",
        period: "/ month",
        description:
          "For mid-market operations aiming to establish a dedicated digital presence and introduce modern technology automations.",
        features: [
          "Dedicated UI/UX Figma Design System",
          "Next.js Frontend & API Gateway",
          "Standard Cloud Architecture (AWS / GCP)",
          "40 hours monthly engineering support",
          "Basic search optimization setup",
        ],
        recommended: false,
        cta: { label: "Select Portfolio Tier", href: "#contact", variant: "outline" },
      },
      {
        name: "Scale Tier",
        price: "$25,000",
        period: "/ month",
        description:
          "Highly recommended. Complete custom software engineering, proprietary multi-agent AI systems, and automated growth funnels.",
        features: [
          "Advanced Multi-Agent AI System",
          "SaaS Re-architecture & Microservices",
          "Continuous Cloud DevOps monitoring",
          "120 hours monthly dedicated engineering",
          "Integrated CRM sales funnels",
          "Standard SLA Availability agreements",
        ],
        recommended: true,
        cta: { label: "Select Portfolio Tier", href: "#contact", variant: "primary" },
      },
      {
        name: "Enterprise",
        price: "Custom Contract",
        period: null,
        description:
          "Comprehensive transformation programs for regulated industries and complex multi-system environments.",
        features: [
          "Full infrastructure and legacy diagnostic auditing",
          "SOC 2– and HIPAA-aligned security hardening",
          "Kubernetes platform engineering at scale",
          "Custom AI agent systems with zero-retention pipelines",
          "Executive architecture workshops",
          "99.9% availability target with documented runbooks",
        ],
        recommended: false,
        cta: { label: "Inquire For This Build", href: "#contact", variant: "outline" },
      },
    ],
  },

  insights: {
    label: "Corporate Research",
    title: "Latest Insights & Technology Analyses",
    viewAllCta: { label: "View All Reports ↗", href: "/blogs" },
    items: [
      {
        category: "Cybersecurity",
        date: "June 24, 2026",
        title: "Hardening Enterprise Microservices for SOC2 Compliance",
        description:
          "A comprehensive deep dive into configuring multi-tenant Kubernetes clusters, designing zero-trust mesh layers, and auditing serverless API gateways.",
        author: "ZyncSpace Engineering",
        readTime: "7 min read",
      },
      {
        category: "AI",
        date: "June 18, 2026",
        title:
          "Enterprise RAG: High-Performance Indexing with pgvector and Gemini Models",
        description:
          "We outline the exact mathematical strategies used to chunk semi-structured legal documents, index them into pgvector Cloud databases, and orchestrate LLMs.",
        author: "ZyncSpace Engineering",
        readTime: "11 min read",
      },
      {
        category: "Growth",
        date: "May 29, 2026",
        title: "Conversion Engineering: Checkout Performance Patterns",
        description:
          "Edge cache API routing, payment gateway integration, and UX patterns that reduce checkout friction for B2B and retail platforms.",
        author: "ZyncSpace Engineering",
        readTime: "5 min read",
      },
    ],
  },

  productShowcase: {
    title: "Your Team's Digital Command Center",
    description:
      "ZyncSpace delivers unified collaboration platforms where chat, Kanban boards, calendar sync, and built-in AI converge — so your teams stop switching apps and start shipping.",
    features: [
      {
        title: "Team Chat, Reimagined",
        description:
          "Organized channels, threads, and instant huddles. Conversations that stay searchable and actionable — never lost in the scroll.",
      },
      {
        title: "Built-in AI Assistant",
        description:
          "Summarize long threads, rewrite messages with the right tone, and draft updates in seconds — right where you work.",
      },
      {
        title: "Kanban Per Channel",
        description:
          "Every channel gets its own board. Turn any message into a task with one click and track it from idea to done.",
      },
      {
        title: "Calendar Sync",
        description:
          "Deadlines, events, and meetings flow into one shared calendar. Your team always knows what's next, without asking.",
      },
    ],
    ctas: [
      { label: "Explore the Platform ↗", href: "/features", variant: "primary" },
      { label: "Start for Free", href: "https://chat.zyncspace.com/signup", variant: "outline" },
    ],
  },

  contact: {
    label: "Partner With Us",
    title: ["Let's Modernize", "Your Business."],
    description:
      "Connect directly with our principal strategic consultants and technologists. We analyze your requirements to formulate custom software, database, and AI pipeline proposals.",
    techStrip: {
      label: "Technologies we build with",
    },
    form: {
      step: "Step 1 of 3",
      title: "What are your primary technical objectives?",
      description: "Select all modules that apply to your business roadmap.",
      submitLabel: "Continue to Details ↗",
    },
    formOptions: [
      "Build Custom SaaS Platform",
      "Integrate Multi-Agent AI Agents",
      "Configure Vector RAG Knowledge Base",
      "Scale Customer Acquisition Marketing",
      "Deploy Security Compliant Servers (SOC2)",
    ],
  },

  footer: {
    brand: {
      name: "ZyncSpace",
      description:
        "We combine advanced artificial intelligence pipelines, robust backend engineering, pixel-perfect UX/UI design systems, and hyper-targeted conversion funnels to scale businesses globally.",
    },
    columns: [
      {
        title: "Capabilities",
        links: [
          { label: "AI & Cognitive Automation", href: "#services" },
          { label: "Core Technology & Cloud", href: "#services" },
          { label: "UX/UI Design Systems", href: "#services" },
          { label: "Performance Marketing", href: "#services" },
          { label: "Enterprise Sales Automation", href: "#services" },
        ],
      },
      {
        title: "Modernization",
        links: [
          { label: "Our Methodology", href: "#framework" },
          { label: "Tech Stack Standards", href: "#tech" },
          { label: "Case Studies Portfolio", href: "#case-study" },
          { label: "Enterprise Pricing Plans", href: "#pricing" },
          { label: "Inquire / Book Consult", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Latest Insights", href: "#insights" },
          { label: "Compliance & Security", href: "/privacy-policy" },
          { label: "Corporate FAQ Accordion", href: "/contact" },
          { label: "Terms of Service", href: "/terms-of-service" },
          { label: "Privacy Policy Guidelines", href: "/privacy-policy" },
        ],
      },
    ],
    newsletter: {
      title: "SUBSCRIBE TO INTEL REPORTS",
      placeholder: "Corporate Email",
      submitLabel: "Subscribe",
    },
    copyright: "© 2026 ZyncSpace AI-Driven Technology Consulting.",
    social: [
      { label: "LinkedIn", href: "https://linkedin.com/company/zyncspace" },
      { label: "Twitter (X)", href: "https://twitter.com/zyncspace" },
      { label: "YouTube", href: "https://www.youtube.com/@zyncspace" },
      { label: "GitHub", href: "https://github.com/zyncspace" },
    ],
  },
} as const;
