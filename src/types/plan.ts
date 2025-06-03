export interface Plan {
  id: string;
  name: string;
  price: { monthly: number; yearly: number };
  yearlyBenefit: string;
  icon: string;
}
