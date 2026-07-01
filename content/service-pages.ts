/** Extended copy for dedicated service pages - distinct from homepage summaries */

export type ServicePageExtendedSection = {
  title: string;
  paragraphs: string[];
};

export const servicePageExtended: Record<string, ServicePageExtendedSection[]> = {
  services: [
    {
      title: 'End-to-End Digital Capability',
      paragraphs: [
        'ZyncSpace combines AI solutions, product engineering, cloud infrastructure, and UX design into one accountable delivery model. Instead of handing off between vendors, you get squads that own architecture, implementation, and production operations.',
        'Whether you need a greenfield SaaS platform, an AI copilot on private data, or a legacy system migrated to the cloud, our teams work from documented reference architectures - not ad-hoc scripts.',
      ],
    },
    {
      title: 'How We Engage Enterprise Clients',
      paragraphs: [
        'Every engagement starts with discovery: we audit your systems, quantify business impact, and align stakeholders on ROI before writing production code. Proof-of-concept sprints are available for AI and platform work when you need validation before scale.',
        'Dedicated squads provide daily visibility through CI/CD pipelines, sprint demos, and written architecture decisions. Security reviews and compliance alignment are built into the delivery path - not bolted on at the end.',
      ],
    },
    {
      title: 'Capability Delivery Model',
      paragraphs: [
        'Our eight-stage framework moves from strategy and architecture through design, development, testing, deployment, and continuous optimization. Each phase has quality gates, documentation deliverables, and clear handoff criteria.',
        'Post-launch, managed services cover monitoring, patching, cost optimization, and quarterly innovation sprints so your platform keeps improving after go-live.',
      ],
    },
  ],
  framework: [
    {
      title: 'Beyond the Eight-Stage Model',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum.',
        'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.',
      ],
    },
    {
      title: 'Governance & Quality Gates',
      paragraphs: [
        'Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.',
        'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      ],
    },
    {
      title: 'Post-Launch Optimization Cycles',
      paragraphs: [
        'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.',
      ],
    },
  ],
  technology: [
    {
      title: 'Architecture Standards & Review',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        'Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.',
      ],
    },
    {
      title: 'Security & Compliance Posture',
      paragraphs: [
        'Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.',
      ],
    },
    {
      title: 'Platform Selection Criteria',
      paragraphs: [
        'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.',
      ],
    },
  ],
  industries: [
    {
      title: 'Regulatory & Compliance Expertise',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus.',
      ],
    },
    {
      title: 'Sector-Specific Delivery Playbooks',
      paragraphs: [
        'Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.',
      ],
    },
    {
      title: 'Cross-Industry Innovation Patterns',
      paragraphs: [
        'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
      ],
    },
  ],
  caseStudies: [
    {
      title: 'Additional Client Engagements',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.',
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      ],
    },
    {
      title: 'Measurable Outcomes Framework',
      paragraphs: [
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
      ],
    },
    {
      title: 'Request a Confidential Briefing',
      paragraphs: [
        'Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Contact our team for detailed case study documentation under NDA.',
      ],
    },
  ],
  contact: [
    {
      title: 'Global Infrastructure',
      paragraphs: [
        'Built for speed, reliability, and scale.',
        'ZyncSpace is powered by a globally distributed cloud infrastructure to deliver fast, secure, and reliable collaboration for teams worldwide. With high availability, intelligent content delivery, and enterprise-grade security, your workspace remains accessible whenever your team needs it.',
      ],
    },
    {
      title: 'Customer Support & Response',
      paragraphs: [
        "We're here whenever your team needs us.",
        'Our support team is committed to resolving issues quickly and efficiently. Standard customers receive timely assistance during business hours, while Enterprise customers benefit from priority support, dedicated account management, and accelerated response times for critical business needs.',
      ],
    },
    {
      title: 'Partner & Enterprise Programs',
      paragraphs: [
        "Let's build the future of collaboration together.",
        "Whether you're a technology partner, reseller, system integrator, or enterprise customer, ZyncSpace offers flexible partnership opportunities, custom deployments, API integrations, and dedicated onboarding to help you deliver exceptional collaboration experiences.",
      ],
    },
  ],
};
