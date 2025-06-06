import { useFormContext } from "react-hook-form";
import { useMultiStepFormContext } from "./useMultiStepFormContext";
import type { Form, Step } from "../types/form";
import { useCallback } from "react";

export const useStepNavigation = () => {
  const { trigger } = useFormContext<Form>();
  const { currentStepFields, setStep } = useMultiStepFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger(currentStepFields);
    if (isValid) nextStep();
  };

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

  return { handleNextStep, prevStep, jumpToStep };
};
