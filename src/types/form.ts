import type { Addon } from "./addon";
import type { Plan } from "./plan";

export interface Form {
  name: string;
  address: string;
  phone: string;
  plan: string;
  billing: "monthly" | "yearly";
  addOn: string[];
}

export interface FormContextType {
  plansInfo: Plan[];
  step: Step;
  addonsInfo: Addon[];
  billingAbbr: {
    monthly: string;
    yearly: string;
  };
  nextStep: () => void;
  prevStep: () => void;
  jumpToStep: (step: number) => void;
}

export type Step = 1 | 2 | 3 | 4 | 5;

export interface FormInitialValues {
  name: string;
  address: string;
  phone: string;
  plan: string;
  billing: "monthly" | "yearly";
  addOn: string[];
}
