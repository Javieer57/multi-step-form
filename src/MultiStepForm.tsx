import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import { StepTracker } from "./StepTracker";
import { FormContent } from "./FormContent";
import { Success } from "./Success";

export const MultiStepForm = () => {
  const { isSubmitted } = useMultiStepFormContext();

  return (
    <>
      <StepTracker />

      {!isSubmitted ? <FormContent /> : <Success />}
    </>
  );
};
