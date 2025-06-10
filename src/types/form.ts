import type { Dispatch, SetStateAction } from "react";
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
  isSubmitted: boolean;
  onSubmit: (data: Form) => void;
  setStep: Dispatch<SetStateAction<Step>>;
}

export type Step = 1 | 2 | 3 | 4;
