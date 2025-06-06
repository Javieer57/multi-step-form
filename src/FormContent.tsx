import { useForm, FormProvider } from "react-hook-form";
import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import { PersonalInfo } from "./PersonalInfo";
import { Resume } from "./Resume";
import { SelectAddon } from "./SelectAddon";
import { SelectPlan } from "./SelectPlan";
import type { Form } from "./types/form";

export const FormContent = () => {
  const { step, onSubmit } = useMultiStepFormContext();

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

  const stepComponents = {
    1: <PersonalInfo />,
    2: <SelectPlan />,
    3: <SelectAddon />,
    4: <Resume />,
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {stepComponents[step]}
      </form>
    </FormProvider>
  );
};
