import { useFormContext, useWatch } from "react-hook-form";
import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import type { FormInitialValues } from "./types/form";

export function SelectPlan() {
  const { plansInfo, billingAbbr, nextStep, prevStep } =
    useMultiStepFormContext();
  const { register, control } = useFormContext<FormInitialValues>();

  const billing = useWatch({
    control,
    name: "billing",
  });

  return (
    <fieldset>
      <legend>Select your plan</legend>

      <p>You have the option of monthly or yearly billing.</p>

      {plansInfo.map((plan: any) => (
        <div key={plan.id}>
          <label htmlFor={plan.id}>
            {plan.name} ${plan.price[billing]}/{billingAbbr[billing]}
          </label>
          <input
            type="radio"
            value={plan.id}
            id={plan.id}
            {...register("plan")}
          />
        </div>
      ))}

      <div>
        <label htmlFor="monthly">Monthly</label>
        <input
          type="radio"
          id="monthly"
          value="monthly"
          {...register("billing")}
        />

        <label htmlFor="yearly">Yearly</label>
        <input
          type="radio"
          id="yearly"
          value="yearly"
          {...register("billing")}
        />
      </div>

      <button type="button" onClick={prevStep}>
        Go Back
      </button>
      <button type="button" onClick={nextStep}>
        Next Step
      </button>
    </fieldset>
  );
}
