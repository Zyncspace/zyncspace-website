/** Extended copy for dedicated service pages — distinct from homepage summaries */

export type ServicePageExtendedSection = {
  title: string;
  paragraphs: string[];
};

export const servicePageExtended: Record<string, ServicePageExtendedSection[]> = {
  services: [
    {
      title: 'End-to-End Digital Capability',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    {
      title: 'How We Engage Enterprise Clients',
      paragraphs: [
        'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
        'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.',
      ],
    },
    {
      title: 'Capability Delivery Model',
      paragraphs: [
        'Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Sed vel lectus. Donec facilisis laoreet ipsum. Aliquam erat volutpat.',
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
  pricing: [
    {
      title: 'Investment Philosophy',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.',
        'Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod.',
      ],
    },
    {
      title: 'Custom Enterprise Scoping',
      paragraphs: [
        'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo.',
      ],
    },
    {
      title: 'SLA & Support Tiers',
      paragraphs: [
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam.',
      ],
    },
  ],
  contact: [
    {
      title: 'Global Delivery Network',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our distributed team operates across multiple time zones to provide continuous coverage for enterprise engagements.',
      ],
    },
    {
      title: 'Response & Escalation Policy',
      paragraphs: [
        'Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Standard inquiries receive a response within one business day; critical production issues are escalated immediately.',
      ],
    },
    {
      title: 'Partnership Opportunities',
      paragraphs: [
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. We welcome technology partnerships, referral arrangements, and co-delivery models with aligned agencies.',
      ],
    },
  ],
};
