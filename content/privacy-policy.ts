/** ZyncSpace product privacy policy - synced with zyncspace.com/privacy-policy */

import type { LegalPageContent } from '@/content/legal-page';

export const privacyPolicyContent: LegalPageContent = {
  label: 'Legal',
  title: 'Privacy Policy',
  description:
    'Your privacy matters to us. Learn how we collect, use, and protect your information.',
  lastUpdated: 'December 19, 2025',
  intro:
    'At ZyncSpace, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully to understand our views and practices regarding your personal data.',
  sections: [
    {
      id: 'information-we-collect',
      title: '1. Information We Collect',
      paragraphs: [
        'We collect information that you provide directly to us, as well as information collected automatically when you use our platform:',
      ],
      list: [
        {
          label: 'Personal Information',
          text: 'Name, email address, contact details, and other information you provide when creating an account.',
        },
        {
          label: 'Usage Data',
          text: 'Information about how you interact with our platform, including features used, time spent, and navigation patterns.',
        },
        {
          label: 'Device Data',
          text: 'IP address, browser type, operating system, and device information.',
        },
        {
          label: 'Content',
          text: 'Messages, files, and other content you share on the platform.',
        },
      ],
    },
    {
      id: 'how-we-use',
      title: '2. How We Use Your Information',
      paragraphs: ['We use the information we collect to:'],
      list: [
        'Create and manage your account',
        'Provide and maintain our service',
        'Communicate with you, including for support and updates',
        'Improve our platform and personalize your experience',
        'Detect, prevent, and address technical issues',
        'Comply with legal obligations',
      ],
    },
    {
      id: 'sharing',
      title: '3. Sharing Your Information',
      paragraphs: [
        "We believe in protecting your privacy. Here's our stance on sharing your data:",
      ],
      list: [
        {
          label: 'We do not sell your personal data',
          text: 'Your information is never sold to third parties for marketing purposes.',
        },
        'We may share information with trusted third-party service providers who perform services for us (e.g., hosting, analytics).',
        'We may disclose information if required by law or in connection with legal proceedings.',
        'In case of a business transfer (merger, acquisition, or sale), your information may be transferred as part of that transaction.',
      ],
    },
    {
      id: 'data-security',
      title: '4. Data Security',
      paragraphs: [
        'We take security seriously. We use industry-standard security measures to protect your information, including encryption, secure servers, and regular security assessments. While we strive to protect your data, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      id: 'data-retention',
      title: '5. Data Retention',
      paragraphs: [
        'We retain your personal information for as long as your account is active or as needed to provide services. We may retain certain information for longer periods as required by law or for legitimate business purposes.',
      ],
    },
    {
      id: 'your-rights',
      title: '6. Your Rights',
      paragraphs: ['You have control over your data. You have the right to:'],
      list: [
        'Access your personal information',
        'Correct inaccurate or incomplete data',
        'Delete your personal information',
        'Export your data in a portable format',
        'Opt-out of marketing communications at any time',
        'Restrict processing of your data in certain circumstances',
      ],
      closing: 'To exercise any of these rights, please contact us using the information below.',
    },
    {
      id: 'cookies',
      title: '7. Cookies and Tracking Technologies',
      paragraphs: [
        'We use cookies and similar tracking technologies to enhance your experience on our platform. These help us understand how you use our service and allow us to remember your preferences. You can control cookies through your browser settings.',
      ],
    },
    {
      id: 'children',
      title: "8. Children's Privacy",
      paragraphs: [
        'Our service is not intended for users under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.',
      ],
    },
    {
      id: 'changes',
      title: '9. Changes to This Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.',
      ],
    },
    {
      id: 'contact',
      title: '10. Contact Us',
      contact: {
        intro:
          "If you have any questions about this Privacy Policy or our data practices, please don't hesitate to reach out:",
        email: 'atul@zyncspace.com',
      },
    },
  ],
};
