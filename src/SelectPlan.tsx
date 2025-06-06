import { useFormContext, useWatch } from "react-hook-form";
import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import type { Form } from "./types/form";

export function SelectPlan() {
  const { plansInfo, billingAbbr, nextStep, prevStep } =
    useMultiStepFormContext();
  const {
    register,
    trigger,
    control,
    formState: { errors },
  } = useFormContext<Form>();

  const billing = useWatch({
    control,
    name: "billing",
  });

  const handleNextStep = async () => {
    const isStepValid = await trigger(["plan", "billing"]);
    if (isStepValid) nextStep();
  };

  return (
    <fieldset>
      <legend>Select your plan</legend>

      <p>You have the option of monthly or yearly billing.</p>

      {plansInfo.map((plan) => (
        <div key={plan.id}>
          <label htmlFor={plan.id}>
            {plan.name} ${plan.price[billing]}/{billingAbbr[billing]}{" "}
            {billing === "yearly" && plan.yearlyBenefit}
          </label>
          <input
            type="radio"
            value={plan.id}
            id={plan.id}
            {...register("plan", {
              required: "Select a plan",
            })}
          />
        </div>
      ))}

      {errors.plan && <p>{errors.plan.message}</p>}

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
      <button type="button" onClick={handleNextStep}>
        Next Step
      </button>
    </fieldset>
  );
}
