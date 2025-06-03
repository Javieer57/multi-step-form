import React, { createContext, useState, type PropsWithChildren } from "react";
import type { Plan } from "../types/plan";
import type { Addon } from "../types/addon";
import { PLANS } from "../data/plans";
import { ADDONS } from "../data/addons";

interface FormContextType {
  plansInfo: Plan[];
  step: number;
  addonsInfo: Addon[];
  billingAbbr: {
    monthly: string;
    yearly: string;
  };
  nextStep: () => void;
  prevStep: () => void;
  jumpToStep: (step: number) => void;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const FormContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const jumpToStep = (step: number) => {
    setStep(step);
  };

  const billingAbbr = {
    monthly: "mo",
    yearly: "yr",
  };

  return (
    <FormContext.Provider
      value={{
        step,
        plansInfo: PLANS,
        addonsInfo: ADDONS,
        billingAbbr,
        nextStep,
        prevStep,
        jumpToStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
