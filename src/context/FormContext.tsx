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

  const billingAbbr = {
    monthly: "mo",
    yearly: "yr",
  };

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
        isSubmitted,
        setStep,
        onSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
