/** ZyncSpace product terms of service - synced with zyncspace.com/terms-of-service */

import type { LegalPageContent } from '@/content/legal-page';

export const termsOfServiceContent: LegalPageContent = {
  label: 'Legal',
  title: 'Terms of Service',
  description: 'These Terms and Conditions govern your use of the ZyncSpace platform.',
  lastUpdated: 'December 19, 2025',
  intro:
    'These Terms and Conditions ("Terms") govern your use of the ZyncSpace platform. By using our platform, you agree to these Terms. If you do not agree, please do not use the service.',
  sections: [
    {
      id: 'account-registration',
      title: '1. Account Registration',
      list: [
        'You must provide accurate and complete information during registration.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
      ],
    },
    {
      id: 'use-of-platform',
      title: '2. Use of the Platform',
      list: [
        'You may not use the platform for any unlawful or unauthorized purpose.',
        'You agree not to harass, abuse, or harm other users.',
      ],
    },
    {
      id: 'content',
      title: '3. Content',
      list: [
        'You retain ownership of content you submit.',
        'You grant us a license to use, host, and display your content as needed to operate the service.',
      ],
    },
    {
      id: 'termination',
      title: '4. Termination',
      paragraphs: [
        'We reserve the right to suspend or terminate accounts that violate these Terms.',
      ],
    },
    {
      id: 'intellectual-property',
      title: '5. Intellectual Property',
      paragraphs: [
        'All content on the platform, excluding user-submitted content, is our intellectual property.',
      ],
    },
    {
      id: 'limitation-of-liability',
      title: '6. Limitation of Liability',
      paragraphs: [
        'ZyncSpace is not liable for any indirect, incidental, or consequential damages.',
      ],
    },
    {
      id: 'governing-law',
      title: '7. Governing Law',
      paragraphs: ['These Terms are governed by the laws of India.'],
    },
    {
      id: 'contact',
      title: '8. Contact Us',
      contact: {
        intro: 'For questions, please contact us:',
        email: 'atul@zyncspace.com',
      },
    },
  ],
};
