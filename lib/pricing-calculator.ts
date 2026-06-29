/** ZyncSpace product pricing math — used by the interactive calculator. */

export const PRICING_CONSTANTS = {
  freeTierMaxUsers: 10,
  paidPerUserMonthly: 1,
  competitors: {
    slack: 7.25,
    teams: 5,
    trello: 5,
    jira: 4.1,
    /** Slack + Trello + calendar/video add-on estimate */
    typicalStack: 16.25,
  },
} as const;

export type CompetitorKey = keyof typeof PRICING_CONSTANTS.competitors;

export type PricingEstimate = {
  users: number;
  zyncspaceMonthly: number;
  zyncspaceAnnual: number;
  planLabel: string;
  competitors: Record<CompetitorKey, { monthly: number; annual: number; savingsMonthly: number; savingsAnnual: number }>;
  bestSavingsMonthly: number;
  bestSavingsAnnual: number;
  savingsVsStackPercent: number;
};

export function estimateZyncspaceMonthly(users: number): { monthly: number; planLabel: string } {
  const safeUsers = Math.max(1, Math.round(users));
  if (safeUsers <= PRICING_CONSTANTS.freeTierMaxUsers) {
    return { monthly: 0, planLabel: 'Free (beta)' };
  }
  return {
    monthly: safeUsers * PRICING_CONSTANTS.paidPerUserMonthly,
    planLabel: 'Paid',
  };
}

export function estimatePricing(users: number): PricingEstimate {
  const safeUsers = Math.max(1, Math.round(users));
  const { monthly: zyncspaceMonthly, planLabel } = estimateZyncspaceMonthly(safeUsers);
  const zyncspaceAnnual = zyncspaceMonthly * 12;

  const competitors = {} as PricingEstimate['competitors'];
  let bestSavingsMonthly = 0;

  for (const [key, rate] of Object.entries(PRICING_CONSTANTS.competitors) as [CompetitorKey, number][]) {
    const monthly = safeUsers * rate;
    const annual = monthly * 12;
    const savingsMonthly = monthly - zyncspaceMonthly;
    const savingsAnnual = savingsMonthly * 12;
    competitors[key] = { monthly, annual, savingsMonthly, savingsAnnual };
    if (savingsMonthly > bestSavingsMonthly) bestSavingsMonthly = savingsMonthly;
  }

  const stackMonthly = competitors.typicalStack.monthly;
  const savingsVsStackPercent =
    stackMonthly > 0 ? Math.round(((stackMonthly - zyncspaceMonthly) / stackMonthly) * 100) : 0;

  return {
    users: safeUsers,
    zyncspaceMonthly,
    zyncspaceAnnual,
    planLabel,
    competitors,
    bestSavingsMonthly,
    bestSavingsAnnual: bestSavingsMonthly * 12,
    savingsVsStackPercent,
  };
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
