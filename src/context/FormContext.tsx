import React, {
  createContext,
  useCallback,
  useState,
  type PropsWithChildren,
} from "react";
import { PLANS } from "../data/plans";
import { ADDONS } from "../data/addons";
import type { FormContextType, Step } from "../types/form";

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const FormContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [step, setStep] = useState<Step>(1);

  const nextStep = useCallback(() => {
    setStep((prev) => {
      if (prev < 4) return (prev + 1) as Step;
      return prev;
    });
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => {
      if (prev > 1) return (prev - 1) as Step;
      return prev;
    });
  }, []);

  const jumpToStep = useCallback((step: number) => {
    if (step >= 1 && step <= 4) {
      setStep(step as Step);
    }
  }, []);

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
