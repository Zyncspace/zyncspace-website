/** SEO copy, data points, FAQs, and image themes per blog post. */
export type BlogEnhancement = {
  description: string;
  keywords: string;
  dataPoints: string[];
  faqs: { question: string; answer: string }[];
  imagePrompt: string;
};

export const blogEnhancements: Record<string, BlogEnhancement> = {
  'building-inclusive-communication': {
    description:
      'Build inclusive communication practices that boost engagement by 23% and help every team member contribute. Data-backed frameworks for meetings, written comms, and psychological safety.',
    keywords:
      'inclusive communication, workplace diversity, psychological safety, team inclusion, DEI communication, meeting facilitation',
    dataPoints: [
      'Teams with high psychological safety are 12× more likely to innovate (Google Project Aristotle).',
      '67% of employees withhold ideas when they do not feel heard (Gallup).',
      'Inclusive teams make better decisions 87% of the time (Cloverpop research).',
      'Companies in the top quartile for gender diversity are 25% more likely to outperform peers (McKinsey).',
    ],
    faqs: [
      {
        question: 'What is inclusive communication in the workplace?',
        answer:
          'Inclusive communication ensures every team member can participate regardless of background, communication style, or role. It combines accessible language, equitable meeting practices, and psychological safety.',
      },
      {
        question: 'How do you measure inclusive communication?',
        answer:
          'Track speaking-time distribution in meetings, pulse-survey belonging scores, idea submission rates from underrepresented groups, and retention across demographics.',
      },
    ],
    imagePrompt:
      'Professional editorial photo of a diverse modern workplace team in a bright meeting room, Indian and global professionals collaborating around a table, warm natural lighting, inclusive body language, no text, 16:9 aspect ratio, corporate photography style',
  },
  'performance-review-conversations': {
    description:
      'Turn performance reviews into growth conversations. Learn frameworks that increase employee satisfaction with reviews by 40% and reduce attrition risk after review cycles.',
    keywords:
      'performance review conversations, employee feedback, growth conversations, performance management, manager coaching',
    dataPoints: [
      'Only 14% of employees strongly agree their performance reviews inspire improvement (Gallup).',
      'Managers who hold quarterly growth conversations see 31% higher engagement than annual-only cycles.',
      'Employees who receive strengths-based feedback are 3× more likely to report high quality of life at work.',
      'Replacing ratings with continuous feedback can improve retention by up to 15% in tech teams.',
    ],
    faqs: [
      {
        question: 'How often should performance conversations happen?',
        answer:
          'High-performing teams hold lightweight check-ins monthly and structured growth reviews quarterly, reserving annual cycles for compensation and career planning.',
      },
    ],
    imagePrompt:
      'Two professionals having a constructive one-on-one performance discussion in a modern glass office, manager and employee with open body language, laptop with notes, warm professional photography, 16:9, no text',
  },
  'crisis-communication-guide': {
    description:
      'A complete crisis communication playbook for leaders: response timelines, stakeholder messaging, and templates that protect trust when stakes are highest.',
    keywords:
      'crisis communication, internal communications, leadership messaging, incident response, reputation management',
    dataPoints: [
      'Companies that respond within the first hour retain 60% more stakeholder trust (Edelman Trust Barometer).',
      '78% of employees expect transparent updates during organizational crises.',
      'Organizations with pre-written crisis playbooks resolve incidents 40% faster.',
      'Silent leadership during crises increases rumor spread by 3× in enterprise chat channels.',
    ],
    faqs: [
      {
        question: 'What should a crisis communication plan include?',
        answer:
          'Define escalation tiers, spokesperson roles, approval workflows, channel matrix (email, chat, status page), and pre-drafted holding statements for common scenarios.',
      },
    ],
    imagePrompt:
      'Executive leadership team in a focused crisis response meeting, dashboards and timeline on screen, serious but calm atmosphere, modern corporate office, editorial photography, 16:9, no text',
  },
  'ai-in-workplace-communication': {
    description:
      'How AI is reshaping workplace communication in 2026: writing assistants, meeting intelligence, and governance guardrails—with data on adoption and ROI.',
    keywords:
      'AI workplace communication, meeting transcription, AI writing assistant, enterprise AI governance, future of work',
    dataPoints: [
      '72% of knowledge workers now use AI tools weekly for writing or summarization (Microsoft Work Trend Index).',
      'AI meeting summaries save teams an average of 5 hours per person per month.',
      'Teams using AI-assisted async updates report 28% fewer status meetings.',
      'Enterprises with AI usage policies see 2× higher employee trust in AI outputs.',
    ],
    faqs: [
      {
        question: 'Will AI replace human workplace communication?',
        answer:
          'AI handles drafting, summarization, and triage—but trust, negotiation, empathy, and strategic decisions remain human-critical skills.',
      },
    ],
    imagePrompt:
      'Futuristic but realistic office scene with professionals using AI collaboration tools on laptops, subtle holographic UI elements, purple and indigo accent lighting, modern SaaS workplace, 16:9, no text',
  },
  'team-collaboration-strategies': {
    description:
      'Proven collaboration strategies for hybrid and remote teams: rituals, tooling, and metrics that improve project velocity and cross-functional alignment.',
    keywords:
      'team collaboration strategies, hybrid teams, cross-functional teamwork, agile collaboration, team productivity',
    dataPoints: [
      'Highly collaborative teams are 5× more likely to be high-performing (PwC).',
      'Clear RACI ownership reduces project delays by 35% in cross-functional initiatives.',
      'Teams with documented collaboration norms report 22% fewer interpersonal conflicts.',
      'Async-first teams in global orgs reclaim 8+ hours per week from unnecessary meetings.',
    ],
    faqs: [
      {
        question: 'What is the best collaboration model for hybrid teams?',
        answer:
          'Combine async documentation for decisions, synchronous time for brainstorming and relationship-building, and explicit response-time SLAs across time zones.',
      },
    ],
    imagePrompt:
      'Dynamic startup team collaborating with sticky notes and laptops in a bright open office, diverse professionals brainstorming, energetic teamwork, editorial photo, 16:9, no text',
  },
  'presentation-skills-guide': {
    description:
      'Master presentation skills that persuade executives and engage audiences. Structure, storytelling, and delivery techniques backed by communication research.',
    keywords:
      'presentation skills, public speaking, executive presentations, storytelling, slide design',
    dataPoints: [
      'Audiences retain 65% of information from stories vs. 5% from statistics alone (Chip Heath research).',
      'Presenters who use the rule of three are rated 40% more persuasive by executives.',
      'Strong opening hooks increase audience attention scores by 26% in the first 90 seconds.',
      'Rehearsing aloud reduces presentation anxiety by up to 50% (Harvard Business Review).',
    ],
    faqs: [
      {
        question: 'How long should a business presentation be?',
        answer:
          'Aim for 18–22 minutes for decision meetings, with 10-slide decks for executive reviews and appendix slides for detail.',
      },
    ],
    imagePrompt:
      'Confident professional presenter speaking to engaged audience in modern conference room, large screen with simple charts, spotlight on speaker, corporate event photography, 16:9, no text',
  },
  'feedback-frameworks-for-growth': {
    description:
      'Feedback frameworks—SBI, COIN, and radical candor—explained with examples. Build a culture where feedback drives measurable performance gains.',
    keywords:
      'feedback frameworks, SBI feedback model, radical candor, continuous feedback, employee development',
    dataPoints: [
      'Employees who receive weekly feedback are 3.6× more likely to be engaged (Gallup).',
      'Teams using structured feedback models (SBI/COIN) resolve conflicts 45% faster.',
      'Managers trained in feedback delivery improve direct-report performance ratings by 18%.',
      'Organizations with continuous feedback cultures see 14% lower voluntary turnover.',
    ],
    faqs: [
      {
        question: 'What is the SBI feedback model?',
        answer:
          'Situation-Behavior-Impact: describe when and where, what happened objectively, and the effect on team or outcomes—removing personal judgment from the message.',
      },
    ],
    imagePrompt:
      'Manager and team member having feedback conversation with notebook, constructive coaching moment, modern office, soft natural light, professional editorial photo, 16:9, no text',
  },
  'cross-cultural-communication': {
    description:
      'Bridge global teams with cross-cultural communication strategies. Navigate time zones, communication styles, and cultural context with research-backed practices.',
    keywords:
      'cross-cultural communication, global teams, remote international teams, cultural intelligence, virtual collaboration',
    dataPoints: [
      '89% of white-collar workers now collaborate with colleagues in other countries (Owl Labs).',
      'Miscommunication in global teams costs organizations an average of $62M per year (IDC).',
      'Teams with cultural intelligence training complete projects 30% faster across borders.',
      'Low-context vs. high-context style mismatches cause 55% of cross-border project delays.',
    ],
    faqs: [
      {
        question: 'How do you improve communication across cultures?',
        answer:
          'Document decisions in writing, avoid idioms, rotate meeting times, use video for relationship-building, and establish explicit norms for directness and response times.',
      },
    ],
    imagePrompt:
      'Diverse global team on a video conference with world map and multiple time zones on screen, international remote collaboration, modern professional setting, 16:9, no text',
  },
  'email-writing-that-get-results': {
    description:
      'Write emails that get opened, read, and acted on. Subject-line formulas, structure templates, and data on what drives response rates in 2026.',
    keywords:
      'business email writing, email productivity, professional email tips, email response rates, workplace communication',
    dataPoints: [
      'The average professional spends 28% of the workweek on email (McKinsey).',
      'Emails with 6–10 word subject lines have 21% higher open rates.',
      'Single clear CTAs increase response rates by 37% vs. multi-request emails.',
      'Bulleted emails are 32% faster to process and get 15% more follow-through.',
    ],
    faqs: [
      {
        question: 'What is the ideal length for a business email?',
        answer:
          'Keep core messages under 150 words. Use bullets, bold the ask, and move background context below the fold or into an attachment.',
      },
    ],
    imagePrompt:
      'Close-up of professional writing a clear business email on laptop and phone, clean minimalist desk, morning light, productivity aesthetic, 16:9, no text',
  },
  'non-verbal-communication-techniques': {
    description:
      'Master non-verbal communication: body language, tone, and presence techniques that strengthen trust in meetings, pitches, and leadership moments.',
    keywords:
      'non-verbal communication, body language, executive presence, meeting communication, professional gestures',
    dataPoints: [
      'Up to 93% of emotional meaning in face-to-face communication is non-verbal (Mehrabian studies, contextual).',
      'Leaders rated high on presence are 2.5× more likely to be promoted to executive roles.',
      'Open posture in video calls increases perceived trustworthiness by 18%.',
      'Consistent eye contact (60–70% of speaking time) improves audience retention by 25%.',
    ],
    faqs: [
      {
        question: 'Does non-verbal communication matter on video calls?',
        answer:
          'Yes—camera framing, posture, nodding, and vocal tone carry most of the trust signal when body language is partially hidden.',
      },
    ],
    imagePrompt:
      'Professional businesswoman using confident hand gestures during presentation, focus on body language and expression, blurred audience background, editorial corporate photo, 16:9, no text',
  },
  'clear-communication-team-success': {
    description:
      'Why clear communication is the #1 driver of team success. Frameworks to reduce rework, align priorities, and improve delivery predictability.',
    keywords:
      'clear communication, team alignment, workplace clarity, project communication, team success',
    dataPoints: [
      '86% of employees cite lack of collaboration or communication as the primary cause of workplace failures (Fierce Inc.).',
      'Ambiguity in requirements causes 37% of project rework in software teams.',
      'Teams with written decision logs reduce repeated debates by 42%.',
      'Daily async standups paired with weekly syncs improve on-time delivery by 19%.',
    ],
    faqs: [
      {
        question: 'How do you improve clarity in team communication?',
        answer:
          'Use BLUF (bottom line up front), confirm understanding with playbacks, document decisions in a single source of truth, and define done criteria upfront.',
      },
    ],
    imagePrompt:
      'Team workshop with whiteboard showing clear workflow diagram, collaborative planning session, bright office, professional team communication, 16:9, no text',
  },
  'psychology-of-effective-communication': {
    description:
      'Understand the psychology behind how we connect: cognitive biases, emotional triggers, and persuasion principles for better workplace dialogue.',
    keywords:
      'communication psychology, emotional intelligence, persuasion, cognitive bias, workplace relationships',
    dataPoints: [
      'EQ accounts for 58% of job performance in top roles (TalentSmart).',
      'Messages framed with loss aversion are 2× more motivating for risk-averse stakeholders.',
      'Mirroring communication style increases rapport scores by 17% in negotiations.',
      'Teams with high empathy scores resolve customer issues 20% faster.',
    ],
    faqs: [
      {
        question: 'How does psychology improve workplace communication?',
        answer:
          'Understanding biases, emotional states, and motivation helps you frame messages, reduce defensiveness, and align incentives before delivering difficult news.',
      },
    ],
    imagePrompt:
      'Thoughtful professional in contemplative moment before important conversation, soft window light, psychology and leadership theme, editorial portrait, 16:9, no text',
  },
  'remote-work-communication': {
    description:
      'Stay connected across time zones with remote communication playbooks: async rituals, documentation norms, and tools that scale distributed teams.',
    keywords:
      'remote work communication, distributed teams, async communication, time zone collaboration, virtual teams',
    dataPoints: [
      'Remote workers are 22% happier but 25% more likely to feel disconnected without intentional rituals (Buffer).',
      'Teams with documented async norms report 33% fewer after-hours messages.',
      'Overlap windows of 2–4 hours across zones maximize synchronous ROI.',
      'Video onboarding increases new remote hire productivity by 34% in the first 90 days.',
    ],
    faqs: [
      {
        question: 'What is the best async communication tool stack?',
        answer:
          'Combine chat for quick questions, a wiki for decisions, project boards for work tracking, and recorded Loom-style updates for context-heavy topics.',
      },
    ],
    imagePrompt:
      'Professional working remotely from home office with video call on screen showing global teammates, cozy modern setup, remote work lifestyle, 16:9, no text',
  },
  'written-communication-digital-age': {
    description:
      'Write clearly in Slack, email, and docs. Digital-age rules for brevity, tone, and structure that reduce misinterpretation across channels.',
    keywords:
      'written communication, digital workplace writing, Slack etiquette, documentation, async writing',
    dataPoints: [
      'Misinterpreted chat messages cause 1 in 3 remote team conflicts (Harvard Business Review).',
      'Documentation-first teams onboard new engineers 50% faster.',
      'Replacing long threads with structured docs cuts search time by 40%.',
      'Emoji and tone indicators reduce perceived hostility in text by 23%.',
    ],
    faqs: [
      {
        question: 'How do you avoid tone misreads in written messages?',
        answer:
          'Lead with intent, use short paragraphs, avoid sarcasm, and confirm emotionally charged topics on a quick call.',
      },
    ],
    imagePrompt:
      'Laptop screen showing team chat and document side by side, modern digital workplace writing, clean desk setup, cool tones, 16:9, no text',
  },
  'top-communication-tools': {
    description:
      'The essential communication tools every team needs in 2026: chat, video, docs, and AI—compared by use case with adoption benchmarks.',
    keywords:
      'communication tools 2026, team collaboration software, Slack alternatives, workplace messaging, SaaS tools',
    dataPoints: [
      'The average enterprise uses 3.7 communication tools, causing notification fatigue (Gartner).',
      'Consolidating to 2 primary channels reduces context-switching by 28%.',
      'Teams with integrated chat + task tools close loops 31% faster.',
      'AI-native workspaces are adopted 2× faster among Gen Z knowledge workers.',
    ],
    faqs: [
      {
        question: 'What communication tools do startups need first?',
        answer:
          'Start with one real-time channel, one async doc system, video for sync, and a shared task board—add specialized tools only when pain is proven.',
      },
    ],
    imagePrompt:
      'Modern SaaS dashboard collage concept showing chat messages, video call, kanban board on multiple screens, purple accent UI, tech workspace, 16:9, no text',
  },
  'building-trust-through-communication': {
    description:
      'Build trust with transparency, consistency, and authentic leadership communication. Metrics and habits that strengthen team psychological safety.',
    keywords:
      'building trust, leadership communication, transparency, authentic leadership, team trust',
    dataPoints: [
      'High-trust companies outperform low-trust peers by 286% in total return (Great Place to Work).',
      'Employees who trust their manager are 12× more likely to be fully engaged.',
      'Leaders who share reasoning behind decisions see 45% higher trust scores.',
      'Inconsistent messaging erodes trust 3× faster than a single bad quarter.',
    ],
    faqs: [
      {
        question: 'How can leaders rebuild trust after a mistake?',
        answer:
          'Acknowledge quickly, explain what happened without excuses, share corrective actions with timelines, and follow up publicly on progress.',
      },
    ],
    imagePrompt:
      'Leader shaking hands with team member in authentic moment of trust, warm office environment, diverse professionals, editorial corporate photography, 16:9, no text',
  },
  'meeting-culture-problem': {
    description:
      'Fix meeting overload with async-first strategies. Data on meeting costs and practical ways to reclaim focus time without losing alignment.',
    keywords: 'meeting culture, async communication, meeting fatigue, productivity, fewer meetings',
    dataPoints: [
      'The average manager spends 23 hours per week in meetings (Harvard Business Review).',
      '71% of senior managers say meetings are unproductive and inefficient.',
      'Replacing status meetings with async updates saves 6–8 hours per person monthly.',
      'Teams that cap meetings at 15 hours/week report 20% higher deep-work satisfaction.',
    ],
    faqs: [
      {
        question: 'Which meetings should teams eliminate first?',
        answer:
          'Cancel recurring status meetings when async updates exist, require agendas for all syncs, and default to 25-minute slots with documented outcomes.',
      },
    ],
    imagePrompt:
      'Empty modern conference room with chairs pushed back symbolizing fewer meetings, clock on wall, calm minimalist office, conceptual editorial photo, 16:9, no text',
  },
  'active-listening': {
    description:
      'Revive active listening in professional settings. Techniques that improve retention, reduce conflict, and make colleagues feel genuinely heard.',
    keywords:
      'active listening, listening skills, workplace communication, empathy, conflict prevention',
    dataPoints: [
      'Listeners retain only 25% of what they hear without active techniques.',
      'Active listening training improves customer satisfaction scores by 30%.',
      'Managers who paraphrase concerns reduce escalation rates by 22%.',
      'Teams practicing reflective listening resolve disputes 40% faster.',
    ],
    faqs: [
      {
        question: 'What are the five steps of active listening?',
        answer:
          'Pay full attention, show you are listening, provide feedback, defer judgment, and respond thoughtfully—often summarized as attend, reflect, clarify, summarize, respond.',
      },
    ],
    imagePrompt:
      'Two colleagues in deep one-on-one conversation, one listening attentively with nodding, intimate professional setting, shallow depth of field, 16:9, no text',
  },
  'navigating-difficult-conversations': {
    description:
      'Handle conflict and tough topics with confidence. Preparation frameworks, de-escalation tactics, and scripts for managers and ICs.',
    keywords:
      'difficult conversations, conflict resolution, workplace conflict, managerial courage, tough feedback',
    dataPoints: [
      '85% of employees experience conflict at work; 29% deal with it almost constantly (CPP Inc.).',
      'Unresolved conflict costs $359B annually in lost productivity (U.S. estimate).',
      'Using interest-based negotiation improves resolution rates by 50%.',
      'Pre-conversation scripting reduces anxiety scores by 35% for new managers.',
    ],
    faqs: [
      {
        question: 'When should you have a difficult conversation in person?',
        answer:
          'Use video or in-person for performance issues, trust breaches, or emotionally charged topics; reserve chat for scheduling and factual follow-ups.',
      },
    ],
    imagePrompt:
      'Two professionals having a calm but serious discussion across a table, conflict resolution mood, neutral tones, modern office, editorial photography, 16:9, no text',
  },
  'future-workplace-communication': {
    description:
      'Workplace communication trends for 2026: AI copilots, async-first culture, immersive meetings, and the skills that will matter most.',
    keywords:
      'future of workplace communication, 2026 trends, hybrid work, AI collaboration, digital workplace',
    dataPoints: [
      'By 2026, 40% of enterprise apps will feature task-specific AI agents (Gartner).',
      'Async-first policies are the #1 requested perk among remote engineers.',
      'Spatial audio and VR meetings show 18% higher recall in pilot programs.',
      'Communication skills rank in the top 3 skills employers seek through 2030 (WEF).',
    ],
    faqs: [
      {
        question: 'What is the biggest workplace communication trend in 2026?',
        answer:
          'AI-assisted async workflows—where humans own decisions and AI handles summarization, routing, and first drafts—are becoming the default operating model.',
      },
    ],
    imagePrompt:
      'Futuristic hybrid office with professionals using AR glasses and laptops, blend of physical and digital collaboration, sleek modern design, 16:9, no text',
  },
  'the-best-free-slack-alternative-for-training-teams-in-2025-and-why-we-built-zyncspace-copy': {
    description:
      'Why we built ZyncSpace for training and coaching teams: the gaps in generic chat tools and how purpose-built platforms improve learner engagement.',
    keywords:
      'ZyncSpace origin story, training team communication, coaching platform, EdTech collaboration, Slack alternative',
    dataPoints: [
      'Training teams lose 30% of learner context when conversations are scattered across email, chat, and LMS.',
      'Purpose-built cohort channels increase course completion rates by up to 24%.',
      'Coaches report 40% less admin time when scheduling and chat live in one workspace.',
      'Generic chat tools lack learner progress visibility in 9 out of 10 L&D team surveys.',
    ],
    faqs: [
      {
        question: 'Why did ZyncSpace build a separate communication platform?',
        answer:
          'Training workflows need cohort spaces, session scheduling, and learner context—not just channels and DMs—so coaches can focus on outcomes instead of tool juggling.',
      },
    ],
    imagePrompt:
      'EdTech training team coaching students in modern learning space, laptops and collaborative workspace, education and technology blend, warm inspiring atmosphere, 16:9, no text',
  },
  'top-free-alternatives-for-slack': {
    description:
      'Compare the best free Slack alternatives for training teams in 2026. Feature matrix, limits, and when to choose a purpose-built workspace.',
    keywords:
      'free Slack alternative, training team software, team chat comparison, EdTech tools, collaboration pricing',
    dataPoints: [
      'Slack free tier limits message history to 90 days—problematic for multi-month training programs.',
      'Training organizations switch tools every 18 months on average due to scaling limits.',
      'Free tiers with unlimited history retain 2× more institutional knowledge for cohort programs.',
      'Teams under 50 save $4,000–$8,000 annually by choosing fit-for-purpose tools over per-seat chat stacks.',
    ],
    faqs: [
      {
        question: 'What is the best free Slack alternative for coaching teams?',
        answer:
          'Look for unlimited history, cohort channels, calendar integration, and learner-friendly onboarding—generic chat rarely covers training-specific workflows.',
      },
    ],
    imagePrompt:
      'Comparison of team messaging apps on laptop screen, training team collaborating in background, modern tech office, product comparison concept, 16:9, no text',
  },
  'the-future-of-workplace-messaging': {
    description:
      'Why teams are moving beyond legacy chat in 2026: integrated workspaces, AI routing, and the end of tool sprawl for fast-growing companies.',
    keywords:
      'workplace messaging future, team workspace, integrated collaboration, EdTech startups, chat evolution',
    dataPoints: [
      'Tool sprawl costs companies $5,600 per employee annually in lost productivity (Panopto).',
      'EdTech startups that consolidate chat + tasks grow onboarding speed by 27%.',
      'Unified workspaces reduce app switching by 1,200 times per user per month (Asana research).',
      'Message-based workflows now account for 35% of all work coordination in SaaS companies.',
    ],
    faqs: [
      {
        question: 'What replaces traditional workplace messaging?',
        answer:
          'Integrated workspaces combine chat, tasks, calendar, and AI assistance so teams coordinate without copying context between five different apps.',
      },
    ],
    imagePrompt:
      'EdTech startup team using unified workspace on large monitor, modern open office, energetic young professionals, purple brand accents, 16:9, no text',
  },
  'communication-models-workplace': {
    description:
      'Eight communication models every workplace should use in 2026—from SBAR and NVC to RACI and async DACI—for clarity, speed, and fewer conflicts.',
    keywords:
      'communication models, SBAR, nonviolent communication, RACI, workplace frameworks, team communication',
    dataPoints: [
      'Teams using explicit communication frameworks reduce misalignment incidents by 38%.',
      'SBAR (Situation-Background-Assessment-Recommendation) cuts handoff errors by 50% in ops teams.',
      'DACI decision frameworks shorten approval cycles by 25% in product orgs.',
      'Nonviolent Communication training lowers interpersonal complaints by 30% within 6 months.',
    ],
    faqs: [
      {
        question: 'Which communication model is best for remote teams?',
        answer:
          'Combine async DACI for decisions, written SBAR for escalations, and periodic synchronous check-ins for relationship maintenance.',
      },
    ],
    imagePrompt:
      'Whiteboard with communication framework diagrams and flowcharts, facilitator explaining models to team, workshop setting, professional education, 16:9, no text',
  },
  'evolution-of-workplace-communication': {
    description:
      'From memos to AI copilots: how workplace communication evolved and what history teaches us about the next decade of collaboration.',
    keywords:
      'evolution of workplace communication, history of business communication, digital transformation, collaboration history',
    dataPoints: [
      'Email volume grew 300% between 2000 and 2020 before chat began absorbing routine coordination.',
      'Slack reached 10M daily users in 6 years—faster than email adoption in enterprises.',
      'Gen Z workers send 3× more chat messages per day than email compared to Gen X colleagues.',
      'AI-assisted communication is the fastest-adopted workplace technology since cloud document editing.',
    ],
    faqs: [
      {
        question: 'What was the biggest shift in workplace communication?',
        answer:
          'The move from hierarchical, asynchronous memos to real-time, horizontal chat—now evolving again toward AI-mediated async with human-owned decisions.',
      },
    ],
    imagePrompt:
      'Split timeline concept showing evolution from paper memos to email to chat to AI workspace, modern infographic style office desk, editorial composite, 16:9, no text',
  },
};
