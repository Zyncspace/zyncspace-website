# AI Content Rules

## Never fabricate

Do **not** generate or imply fake:

- Customer names or logos (unless in `content/services.ts` partners list as aspirational — mark clearly)
- Client testimonials or quotes
- Review scores
- Certifications (SOC 2, ISO 27001) unless confirmed
- Awards or press mentions
- Revenue, headcount, or funding figures
- Team member names or photos
- Project counts beyond what's in approved content
- Partnership agreements (Microsoft, etc. in marquee are **design placeholders** until legal approval)

## Placeholder pattern

When real data is missing:

```
[Client name] — pending approval
Metric — to be confirmed with leadership
Testimonial — placeholder until client sign-off
```

Or use clearly generic copy:

- "Enterprise clients across finance, healthcare, and technology"
- NOT "We serve 500+ Fortune 500 companies" unless verified

## Approved metrics (hero stats)

From `content/services.ts` — only use these unless updated by stakeholder:

- 250+ Projects Delivered
- 98% Client Satisfaction
- 40+ Expert Consultants
- 12+ Global Markets

If changing metrics, require explicit user approval.

## Partner marquee

Current partner names in marquee are **visual placeholders** for enterprise feel. Do not claim official partnership in legal copy without verification.

## Blog content

- Technical blogs: OK to write educational content without fake case studies
- Case-style blogs: must be labeled hypothetical or use real anonymized data only when approved

## Certifications & compliance

Only mention on site if:

1. Certification is active, AND
2. User explicitly confirms

Otherwise use: "Security-first development practices" without naming SOC 2/ISO.

## When using AI to write

1. Read existing content in `content/` first
2. Match tone from `messaging.md`
3. Flag any new statistical claim for human review
4. Never copy competitor testimonials or logos
