import type { Plan } from "../types/plan";

export const PLANS: Plan[] = [
  {
    id: "P1",
    name: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
    yearlyBenefit: "2 months free",
    icon: "/img/arcade-plan-icon.png",
  },
  {
    id: "P2",
    name: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
    yearlyBenefit: "2 months free",
    icon: "/img/advanced-plan-icon.png",
  },
  {
    id: "P3",
    name: "Pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
    yearlyBenefit: "2 months free",
    icon: "/img/pro-plan-icon.png",
  },
];
