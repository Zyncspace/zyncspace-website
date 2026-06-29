/** ZyncSpace Chat — industry use cases and vertical solutions */

type UseCaseHighlight = {
  title: string;
  description: string;
};

type UseCaseWorkflowStep = {
  title: string;
  description: string;
};

export type UseCaseVertical = {
  id: string;
  num: string;
  label: string;
  title: string;
  description: string;
  highlights?: UseCaseHighlight[];
  checklist?: string[];
  workflow?: { title: string; steps: UseCaseWorkflowStep[] };
  stats?: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string }[];
  };
  featureCards?: UseCaseHighlight[];
  cta: { label: string; href: string };
};

export const useCasesContent = {
  hero: {
    label: 'Industry Solutions',
    title: ['Built for', 'Every Industry'],
    description:
      'ZyncSpace Chat adapts to how your team works — whether you are a lean startup, a classroom, an agency, or a growing enterprise.',
    primaryCta: { label: 'Get Started Free ↗', href: 'https://chat.zyncspace.com/signup' },
    secondaryCta: { label: 'Explore Solutions', href: '#startups' },
  },

  verticals: [
    {
      id: 'startups',
      num: '01',
      label: 'For Startups',
      title: 'Move Fast, Stay Connected',
      description:
        'A clutter-free workspace built for lean teams to plan, execute, and communicate — all in one place. Perfect for startups that need to move fast without sacrificing collaboration.',
      highlights: [
        {
          title: 'Rapid Team Onboarding',
          description: 'Import entire teams with bulk CSV upload in minutes, not hours.',
        },
        {
          title: 'Real-Time Collaboration',
          description: 'Work together on tasks and projects without the back-and-forth of email.',
        },
        {
          title: 'Built-In AI',
          description:
            'Let AI handle summarization and rewriting so you can focus on what matters.',
        },
      ],
      stats: {
        primary: { value: '56%', label: 'Higher Productivity' },
        secondary: [
          { value: '3x', label: 'Faster Planning' },
          { value: '60%', label: 'Less Tool Switching' },
        ],
      },
      workflow: {
        title: 'Startup Workflow',
        steps: [
          {
            title: 'Create Your Workspace',
            description: 'Set up your team workspace in under 2 minutes',
          },
          {
            title: 'Import Team Members',
            description: 'Bulk upload with CSV or invite individually',
          },
          {
            title: 'Set Up Channels',
            description: 'Create channels for teams, projects, and topics',
          },
          { title: 'Start Collaborating', description: 'Dive in and start getting things done' },
        ],
      },
      checklist: [
        'Free during beta — no credit card required',
        'Up to 10 users on free plan',
        'Real-time task tracking with Kanban boards',
        'Built-in video conferencing',
        'AI-powered writing assistance',
      ],
      cta: { label: 'Get Started Free ↗', href: 'https://chat.zyncspace.com/signup' },
    },
    {
      id: 'education',
      num: '02',
      label: 'For Education',
      title: 'Better Learning Through Collaboration',
      description:
        'All-in-one space for structured lesson plans, smooth student teamwork, and clear communication. Built for classrooms, training programs, and online courses.',
      highlights: [
        {
          title: 'Lesson Plan Channels',
          description: 'Structured channels for each course module and topic.',
        },
        {
          title: 'Student Collaboration',
          description: 'Group projects with threaded discussions and file sharing.',
        },
        {
          title: 'Assignment Tracking',
          description: 'Visual Kanban boards for homework and deadline management.',
        },
      ],
      featureCards: [
        { title: 'Bulk Student Enrollment', description: 'Import entire classes with CSV files' },
        { title: 'Resource Library', description: 'Share files and documents easily' },
        { title: 'Direct Messaging', description: 'Private student-teacher communication' },
        { title: 'Calendar Integration', description: 'Sync schedules and deadlines' },
      ],
      cta: { label: 'Get Started Free ↗', href: 'https://chat.zyncspace.com/signup' },
    },
    {
      id: 'agencies',
      num: '03',
      label: 'For Agencies',
      title: 'Client Communication Simplified',
      description:
        'ZyncSpace delivers secure, real-time communication for internal teams and external clients. Keep everyone aligned without the email chaos.',
      workflow: {
        title: 'Agency Workflow',
        steps: [
          {
            title: 'Create Client Workspace',
            description: 'Dedicated space for each client project',
          },
          {
            title: 'Invite Team & Clients',
            description: 'Guest access for seamless collaboration',
          },
          {
            title: 'Organize by Project',
            description: 'Channels and boards for every deliverable',
          },
          { title: 'Track & Deliver', description: 'Kanban boards for project visibility' },
        ],
      },
      checklist: [
        'Guest access for client collaboration',
        'Project-specific workspaces and channels',
        'File sharing with version control',
        'Role-based permissions for security',
        'Built-in video calls for client meetings',
      ],
      cta: { label: 'Get Started Free ↗', href: 'https://chat.zyncspace.com/signup' },
    },
  ] as UseCaseVertical[],

  industries: {
    label: 'More Industries',
    title: 'Built for Every Team',
    description: "ZyncSpace adapts to your industry's unique needs.",
    items: [
      {
        title: 'Healthcare',
        description:
          'Secure messaging for medical teams, care coordination, and patient communication with HIPAA-aligned features.',
      },
      {
        title: 'Real Estate',
        description:
          'Coordinate property showings, client updates, and team communications all in one place.',
      },
      {
        title: 'Media & Entertainment',
        description:
          'Creative collaboration, content planning, and production workflow management.',
      },
      {
        title: 'Financial Services',
        description:
          'Secure internal communications with audit trails and compliance-ready features.',
      },
      {
        title: 'Consulting',
        description:
          'Manage multiple client engagements with dedicated workspaces and project tracking.',
      },
      {
        title: 'Nonprofits',
        description: 'Coordinate volunteers, manage campaigns, and improve donor communications.',
      },
    ],
  },

  testimonials: {
    title: 'What Our Customers Say',
    description: 'Real feedback from teams using ZyncSpace Chat.',
    items: [
      {
        initials: 'SK',
        name: 'Sarah Kim',
        role: 'Product Manager, TechStart',
        quote:
          "ZyncSpace completely transformed how our remote team communicates. We've eliminated endless email chains and finally have everything in one place.",
      },
      {
        initials: 'MR',
        name: 'Michael Rodriguez',
        role: 'Founder, Digital Agency Pro',
        quote:
          'Managing multiple client projects used to be chaos. Now with ZyncSpace, our team stays organized and clients love the transparency.',
      },
      {
        initials: 'EJ',
        name: 'Emily Johnson',
        role: 'Operations Lead, ScaleUp',
        quote:
          "We switched from Slack and never looked back. ZyncSpace's Kanban integration means we don't need a separate task management tool anymore.",
      },
    ],
  },

  results: {
    title: 'Results That Matter',
    description: 'Real results from real teams using ZyncSpace Chat.',
    items: [
      {
        value: '56%',
        label: 'Higher Productivity',
        detail: 'Teams report significant productivity gains',
      },
      {
        value: '42%',
        label: 'Faster Task Completion',
        detail: 'Projects completed faster on average',
      },
      {
        value: '3x',
        label: 'Better Scheduling',
        detail: 'Calendar sync reduces scheduling conflicts',
      },
      { value: '60%', label: 'Fewer Tools Needed', detail: 'Consolidate your software stack' },
    ],
  },

  cta: {
    title: 'Ready to Transform Your Team?',
    description:
      'Join teams already using ZyncSpace Chat. Free during beta — no credit card required.',
    primary: { label: 'Get Started Free ↗', href: 'https://chat.zyncspace.com/signup' },
    secondary: { label: 'Book a Demo', href: 'https://forms.gle/QVfnCHigc7NS3Z2K6' },
  },
};
