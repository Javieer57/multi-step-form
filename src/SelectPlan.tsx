import { useFormikContext, Field } from "formik";
import { useFormContext } from "./hooks/useFormContext";
import type { FormInitialValues } from "./types/form";

export function SelectPlan() {
  const { plansInfo, step, billingAbbr, nextStep, prevStep } = useFormContext();
  const { values } = useFormikContext<FormInitialValues>();

  return (
    <fieldset
      // style={{ display: step === 2 ? "block" : "none" }}
      disabled={step !== 2}
    >
      <legend>Select your plan</legend>

      <p>You have the option of monthly or yearly billing.</p>

      {plansInfo.map((plan: any) => (
        <div key={plan.id}>
          <label htmlFor={plan.id}>
            {plan.name} ${plan.price[values.billing]}/
            {billingAbbr[values.billing]}
          </label>
          <Field type="radio" name="plan" value={plan.id} id={plan.id} />
        </div>
      ))}

      <div>
        <label htmlFor="monthly">Monthly</label>
        <Field type="radio" name="billing" id="monthly" value="monthly" />

        <label htmlFor="yearly">Yearly</label>
        <Field type="radio" name="billing" id="yearly" value="yearly" />
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
