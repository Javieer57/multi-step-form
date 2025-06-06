import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import { StepTracker } from "./StepTracker";
import { FormContent } from "./FormContent";
import { Success } from "./Success";

export const MultiStepForm = () => {
  const { step, isSubmitted } = useMultiStepFormContext();

  return (
    <>
      <StepTracker step={step} />

      {!isSubmitted ? <FormContent /> : <Success />}
    </>
  );
};
