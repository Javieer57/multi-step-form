import { PersonalInfo } from "./PersonalInfo";
import { Resume } from "./Resume";
import { SelectPlan } from "./SelectPlan";
import { SelectAddon } from "./SelectAddon";
import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import type { Form } from "./types/form";
import { Success } from "./Success";
import { FormProvider, useForm } from "react-hook-form";

export const MultiStepForm = () => {
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
  const { step, isSubmitted, onSubmit } = useMultiStepFormContext();

  return (
    <>
      <ul>
        <li
          style={{
            textDecoration: step === 1 ? "underline" : "none",
          }}
        >
          Step 1 Your info{" "}
        </li>
        <li style={{ textDecoration: step === 2 ? "underline" : "none" }}>
          Step 2 Select plan
        </li>
        <li style={{ textDecoration: step === 3 ? "underline" : "none" }}>
          Step 3 Add-ons
        </li>
        <li style={{ textDecoration: step === 4 ? "underline" : "none" }}>
          Step 4 Summary
        </li>
      </ul>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {step === 1 && <PersonalInfo />}
          {step === 2 && <SelectPlan />}
          {step === 3 && <SelectAddon />}
          {step === 4 && <Resume />}
          {isSubmitted && <Success />}
        </form>
      </FormProvider>
    </>
  );
};
