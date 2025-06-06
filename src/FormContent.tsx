import { useForm, FormProvider } from "react-hook-form";
import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import { PersonalInfo } from "./PersonalInfo";
import { Resume } from "./Resume";
import { SelectAddon } from "./SelectAddon";
import { SelectPlan } from "./SelectPlan";
import { Success } from "./Success";
import type { Form } from "./types/form";

export const FormContent = () => {
  const { step, isSubmitted, onSubmit } = useMultiStepFormContext();

  const methods = useForm<Form>({
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      plan: "",
      billing: "monthly",
      addOn: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <PersonalInfo />}
        {step === 2 && <SelectPlan />}
        {step === 3 && <SelectAddon />}
        {step === 4 && <Resume />}
        {isSubmitted && <Success />}
      </form>
    </FormProvider>
  );
};
