/** ZyncSpace Trust Center - security, privacy, and compliance posture */

type TrustControlCategory = 'Baseline' | 'Feature-Specific';

export type TrustControl = {
  id: string;
  category: TrustControlCategory;
  securityPolicy: string;
  techStandard: string;
  description: string;
};

export const trustCenterContent = {
  label: 'Trust & Security',
  title: 'Trust Center',
  description:
    'How ZyncSpace protects your data - infrastructure, privacy, encryption, and AI practices for the chat product and our consulting delivery.',
  lastUpdated: 'March 2026',
  intro:
    'Trust is earned through transparency. As a startup building ZyncSpace Chat and enterprise consulting services, we publish our security posture openly - what we implement today, the standards we align with, and how we handle your data.',
  startupNote:
    'We inherit physical and infrastructure controls from AWS-certified data centers. Product-level controls below apply to ZyncSpace Chat and client engagements. Formal third-party audits (SOC 2 Type II for ZyncSpace) are on our roadmap as we scale.',
  pillars: [
    {
      title: 'Infrastructure you can verify',
      description:
        'Hosted on AWS with ISO 27001 and SOC 2 Type II certified facilities for physical security and redundancy.',
    },
    {
      title: 'Privacy by design',
      description:
        'GDPR and India DPDP-aligned practices with Standard Contractual Clauses for cross-border data handling.',
    },
    {
      title: 'Your data stays yours',
      description:
        'Zero training on customer content for LLMs, encryption in transit and at rest, and E2EE for real-time communication.',
    },
  ],
  controls: [
    {
      id: 'aws-infrastructure',
      category: 'Baseline',
      securityPolicy: 'AWS Cloud Infrastructure',
      techStandard: 'ISO 27001 / SOC 2 Type II Data Centers',
      description: 'Physical security and infrastructure redundancy provided by AWS.',
    },
    {
      id: 'gdpr-dpdp',
      category: 'Baseline',
      securityPolicy: 'GDPR / DPDP Compliance',
      techStandard: 'Standard Contractual Clauses (SCCs)',
      description: 'End-to-end data privacy framework for global operations.',
    },
    {
      id: 'zero-training',
      category: 'Feature-Specific',
      securityPolicy: 'Zero Data Training Policy',
      techStandard: 'Model Isolation & Opt-out',
      description: 'Customer data is never used to train global LLM parameters.',
    },
    {
      id: 'e2ee',
      category: 'Feature-Specific',
      securityPolicy: 'End-to-End Encryption (E2EE)',
      techStandard: 'Signal / WebRTC Protocol',
      description: 'Keys are generated on-device; provider cannot access stream content.',
    },
    {
      id: 'encryption-rest-transit',
      category: 'Feature-Specific',
      securityPolicy: 'Encryption at Rest & Transit',
      techStandard: 'AES-256 / TLS 1.3',
      description: 'All objects encrypted before being written to disk.',
    },
  ] satisfies TrustControl[],
  commitments: [
    'We do not sell customer data to third parties.',
    'We contractually prohibit using client prompts or documents to train public foundation models.',
    'Security reviews and dependency scanning run in our CI/CD pipeline.',
    'Data retention and deletion requests are honored per our Privacy Policy.',
  ],
  related: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Contact security team', href: '/contact' },
  ],
  contact: {
    title: 'Security questions or responsible disclosure?',
    description: 'Reach out for security questionnaires, DPA requests, or vulnerability reports.',
    email: 'atul@zyncspace.com',
  },
};
