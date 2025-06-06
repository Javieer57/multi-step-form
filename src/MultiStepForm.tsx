import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import { StepTracker } from "./StepTracker";
import { FormContent } from "./FormContent";

export const MultiStepForm = () => {
  const { step } = useMultiStepFormContext();

  return (
    <>
      <StepTracker step={step} />

      <FormContent />
    </>
  );
};
