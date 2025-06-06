import React, {
  createContext,
  useCallback,
  useState,
  type PropsWithChildren,
} from "react";
import { PLANS } from "../data/plans";
import { ADDONS } from "../data/addons";
import type { Form, FormContextType, Step } from "../types/form";
import type { SubmitHandler } from "react-hook-form";

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const FormContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // const nextStep = useCallback(() => {
  //   setStep((prev) => {
  //     if (prev < 4) return (prev + 1) as Step;
  //     return prev;
  //   });
  // }, []);

  // const prevStep = useCallback(() => {
  //   setStep((prev) => {
  //     if (prev > 1) return (prev - 1) as Step;
  //     return prev;
  //   });
  // }, []);

  // const jumpToStep = useCallback((step: number) => {
  //   if (step >= 1 && step <= 4) {
  //     setStep(step as Step);
  //   }
  // }, []);

  const billingAbbr = {
    monthly: "mo",
    yearly: "yr",
  };

  const stepFields: Record<Step, (keyof Form)[]> = {
    1: ["name", "address", "phone"],
    2: ["plan", "billing"],
    3: ["addOn"],
    4: [],
  };

  const currentStepFields = stepFields[step];

  const onSubmit: SubmitHandler<Form> = useCallback((data) => {
    console.log("🚀 ~ handleSubmit ~ data:", data);
    setIsSubmitted(true);
  }, []);

  return (
    <FormContext.Provider
      value={{
        step,
        plansInfo: PLANS,
        addonsInfo: ADDONS,
        billingAbbr,
        currentStepFields,
        isSubmitted,
        setStep,
        onSubmit,
        // nextStep,
        // prevStep,
        // jumpToStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
