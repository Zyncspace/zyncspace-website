/** ZyncSpace chat product pricing — not consulting services. */
export const productPricingContent = {
  hero: {
    label: 'ZyncSpace Chat — Product Pricing',
    title: ['Simple, Transparent', 'Workspace Pricing'],
    description:
      'Pricing for the ZyncSpace chat application — team messaging, Kanban boards, calendar sync, and AI in one workspace. Not consulting or custom development.',
    badge: 'ZyncSpace Chat app · No credit card required',
  },

  productNotice: {
    title: 'This page is for the ZyncSpace Chat product',
    description:
      'Plans below cover seats for our team collaboration app at chat.zyncspace.com. For technology consulting, AI builds, or custom software development, see consulting pricing instead.',
    consultingLabel: 'View consulting & development pricing',
    consultingHref: '/services/pricing',
  },

  tiers: [
    {
      id: 'free',
      name: 'Free',
      priceValue: '0',
      period: 'free forever during beta',
      description: 'Everything you need to run a small team in the ZyncSpace Chat workspace.',
      featured: true,
      cta: { label: 'Get Started Free ↗', href: 'https://chat.zyncspace.com/signup' },
      features: [
        'Up to 10 users',
        'Unlimited chat history',
        'Task management boards',
        'Calendar sync',
        'Multi-workspace setup',
        'Bulk CSV upload',
        'App integrations',
        'Audio & video (coming soon)',
      ],
    },
    {
      id: 'paid',
      name: 'Paid',
      priceValue: '1',
      period: '/user/month',
      description: 'For growing teams that need unlimited seats on ZyncSpace Chat.',
      featured: false,
      comingSoon: true,
      cta: { label: 'Join Waitlist', href: 'https://forms.gle/QVfnCHigc7NS3Z2K6' },
      features: [
        'Everything in Free',
        'Unlimited users',
        'Audio & video conferencing',
        'Priority support',
        'Advanced integrations',
        'Custom branding',
        'Enhanced security',
        'Dedicated account manager',
      ],
    },
  ],

  comparison: {
    title: 'Compare ZyncSpace Chat vs Other Tools',
    description:
      'How the ZyncSpace Chat app stacks up against separate chat, task, and calendar subscriptions.',
    columns: ['ZyncSpace', 'Slack', 'Teams', 'Trello', 'Jira', 'WhatsApp'],
    rows: [
      { feature: 'Team chat', values: ['full', 'full', 'basic', 'none', 'none', 'basic'] },
      { feature: 'Task management', values: ['full', 'limited', 'basic', 'full', 'full', 'none'] },
      { feature: 'Calendar sync', values: ['full', 'paid', 'addon', 'none', 'none', 'none'] },
      { feature: 'Video calls', values: ['soon', 'paid', 'full', 'none', 'none', 'full'] },
      { feature: 'AI assistant', values: ['full', 'addon', 'copilot', 'addon', 'none', 'none'] },
      { feature: 'File sharing', values: ['full', 'full', 'full', 'full', 'full', 'full'] },
      { feature: 'Multi-workspace', values: ['full', 'limited', 'none', 'none', 'none', 'none'] },
      { feature: 'End-to-end encryption', values: ['full', 'business', 'full', 'none', 'none', 'full'] },
      { feature: 'Free plan', values: ['full', 'limited', 'limited', 'limited', 'limited', 'full'] },
      {
        feature: 'Starting price (pro)',
        values: ['$1/user', '$7.25/user', '$5/user', '$5/user', '$4.10/user', 'Free'],
        highlight: true,
      },
    ],
  },

  calculator: {
    title: 'Estimate Your Chat App Monthly Cost',
    description:
      'Based on ZyncSpace Chat seat pricing — slide to your team size and compare with buying Slack, Teams, or Trello separately.',
    presets: [5, 10, 25, 50, 100],
    minUsers: 1,
    maxUsers: 250,
    defaultUsers: 25,
    footnote:
      'Calculator reflects ZyncSpace Chat app pricing only (not consulting or development services). Estimates use published list prices for Slack Pro, Microsoft Teams, Trello Premium, and a typical Slack + Trello stack. Free tier covers up to 10 users during beta; paid tier is $1/user/month.',
  },

  valueProps: [
    { value: '3-in-1', label: 'Chat + tasks + calendar in one app' },
    { value: '60%', label: 'Potential savings vs. separate tools' },
    { value: '1', label: 'App — less context switching' },
  ],

  cta: {
    title: 'Start Free on ZyncSpace Chat',
    description:
      'Sign up for the team workspace app — free during beta for up to 10 users. No credit card required.',
    primary: { label: 'Get Started Free ↗', href: 'https://chat.zyncspace.com/signup' },
    secondary: { label: 'Book a Product Demo', href: 'https://forms.gle/QVfnCHigc7NS3Z2K6' },
  },
};

export type ComparisonCell = 'full' | 'basic' | 'limited' | 'paid' | 'addon' | 'soon' | 'copilot' | 'business' | 'none';
