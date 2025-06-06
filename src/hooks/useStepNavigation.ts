import { useFormContext } from "react-hook-form";
import { useMultiStepFormContext } from "./useMultiStepFormContext";
import type { Form } from "../types/form";

export const useStepNavigation = () => {
  const { trigger } = useFormContext<Form>();
  const { currentStepFields, nextStep } = useMultiStepFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger(currentStepFields);
    if (isValid) nextStep();
  };

  return { handleNextStep };
};
