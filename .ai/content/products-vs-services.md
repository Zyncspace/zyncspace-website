# Products vs Services

## Products (ZyncSpace platform)

**Routes:** `/features`, `/use-cases`, `/pricing`, `/about`, `/careers`, `/blogs`

**What we sell:** SaaS team workspace - chat, tasks, calendar, AI.

**Messaging focus:**

- Team productivity
- Reduced tool sprawl
- Faster collaboration
- Free trial / signup (`chat.zyncspace.com/signup`)

**Navbar label:** Product dropdown

---

## Services (Consulting & engineering)

**Routes:** `/services`, `/services/framework`, `/services/technology`, `/services/industries`, `/services/case-studies`, `/services/pricing`

**What we sell:**

- AI Consulting
- Product / Platform Engineering
- Cloud & DevOps
- UX/UI systems
- Digital transformation

**Messaging focus:**

- Business outcomes and ROI
- Delivery framework and proof
- Enterprise engagement models

**Navbar label:** Services dropdown

---

## How they connect

The **homepage** bridges both:

1. Consulting credibility first (hero, capabilities, framework)
2. Product showcase later (workspace platform)
3. Single contact funnel (`/contact`)

Copy pattern: *"We help you build [services]. When you're ready to run your team on one platform, [product] accelerates adoption."*

---

## Content ownership

| Area | Primary file |
|------|--------------|
| Consulting sections | `content/services.ts` |
| Service page body | `content/service-pages.ts` |
| Product page metadata | `content/product/*.json` |
| Shared contact/company | `content/site.ts` |

---

## Do not

- Mix product pricing with consulting pricing on the same page without clear labels
- Use product signup CTAs on pure consulting case study pages without context
- Refer to consulting offerings as "features" of the SaaS product
