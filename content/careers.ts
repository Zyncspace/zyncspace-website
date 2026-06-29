/** ZyncSpace careers - synced with zyncspace.com/careers */

export type JobListing = {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  details?: string[];
  requirements: string[];
  applyUrl: string;
};

export const careersContent = {
  label: 'Company',
  title: 'Careers',
  description: 'Join our team and help build the future of team collaboration.',
  intro:
    "At ZyncSpace, we're building tools that help teams work better together. We're looking for passionate, curious individuals who want to make an impact. If you're ready to grow your skills while working on meaningful projects, we'd love to meet you.",
  openingsLabel: 'Open roles',
  jobs: [
    {
      id: 'founder-office-intern',
      title: 'Founder Office Intern (Sales & Growth)',
      type: 'Internship',
      location: 'Remote (India)',
      department: 'Sales & Growth',
      description:
        "Work directly with the founders on outbound growth, customer acquisition, product demos, and user onboarding for ZyncSpace's modern team communication and collaboration platform.",
      details: [
        'Open positions: 3',
        'Stipend: Rs. 10,000/month (Rs. 7,000 fixed + Rs. 3,000 performance-based)',
        'Experience: 0–2 years',
        'Opportunity for a full-time role based on performance',
      ],
      requirements: [
        'Strong communication skills and an interest in talking to founders and users',
        'Self-driven, proactive mindset with an interest in startups, SaaS, sales, or business growth',
        'Ability to reach out through LinkedIn, email, and other outbound channels',
        'Willingness to maintain lead pipelines and support GTM initiatives',
      ],
      applyUrl: 'https://forms.gle/UakJmGKaWcxTvzm16',
    },
    {
      id: 'frontend-intern',
      title: 'Frontend Intern - React.js',
      type: 'Internship',
      location: 'Remote',
      department: 'Development',
      description:
        "Join our frontend team to build beautiful, responsive user interfaces using React.js. You'll work closely with senior developers and contribute to real projects that make a difference.",
      requirements: [
        'Basic understanding of HTML, CSS, and JavaScript',
        'Familiarity with React.js or willingness to learn',
        'Interest in building modern web applications',
        'Good communication skills',
      ],
      applyUrl: 'https://forms.gle/BkgCjKmeDGi6258X7',
    },
    {
      id: 'backend-intern',
      title: 'Backend Intern - Node.js',
      type: 'Internship',
      location: 'Remote',
      department: 'Development',
      description:
        "Help us build robust backend services and APIs using Node.js. You'll learn about server-side development, database management, and scalable architecture while working on real features.",
      requirements: [
        'Basic understanding of JavaScript and Node.js',
        'Familiarity with REST APIs or willingness to learn',
        'Interest in backend development and databases',
        'Problem-solving mindset',
      ],
      applyUrl: 'https://forms.gle/BkgCjKmeDGi6258X7',
    },
    {
      id: 'designer-intern',
      title: 'Website Designer Intern',
      type: 'Internship',
      location: 'Remote',
      department: 'Design',
      description:
        "Join our design team to create stunning web designs and improve user experiences. You'll work on landing pages, marketing materials, and UI components that represent our brand.",
      requirements: [
        'Proficiency in Figma, Adobe XD, or similar design tools',
        'Understanding of web design principles',
        'Eye for typography, color, and layout',
        'Portfolio or samples of previous work',
      ],
      applyUrl: 'https://forms.gle/BkgCjKmeDGi6258X7',
    },
  ] satisfies JobListing[],

  benefits: {
    title: 'Why Join ZyncSpace?',
    items: [
      {
        title: 'Mentorship',
        description:
          'Learn from experienced developers and designers who are invested in your growth.',
      },
      {
        title: 'Real Projects',
        description: 'Work on actual features used by real users, not just tutorials or exercises.',
      },
      {
        title: 'Flexible Work',
        description: 'Enjoy remote work flexibility and a comfortable work-from-home setup.',
      },
      {
        title: 'Career Growth',
        description: 'Strong performers may be considered for full-time positions.',
      },
    ],
  },

  openApplication: {
    title: "Interested but don't see a perfect fit?",
    description:
      "If you're excited about ZyncSpace and think you'd be a great fit, we'd still love to hear from you. Send us your resume and tell us how you'd like to contribute.",
    email: 'atul@zyncspace.com',
  },
};
