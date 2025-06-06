import { Fragment } from "react";
import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import type { Form } from "./types/form";
import { useFormContext, useWatch } from "react-hook-form";
import { useStepNavigation } from "./hooks/useStepNavigation";

export function SelectAddon() {
  const { handleNextStep } = useStepNavigation();
  const { addonsInfo, billingAbbr, prevStep } = useMultiStepFormContext();
  const { register, control } = useFormContext<Form>();
  const billing = useWatch({
    control,
    name: "billing",
  });

  return (
    <fieldset>
      <legend>Pick add-ons</legend>
      <p>Add-ons help enhance your gaming experience.</p>

      {addonsInfo.map((addon: any) => (
        <Fragment key={addon.id}>
          <label htmlFor={addon.id} key={addon.id}>
            <span>{addon.name}</span> <span>{addon.description}</span>{" "}
            <span>
              +${addon.price[billing]}/{billingAbbr[billing]}
            </span>
            <input
              type="checkbox"
              id={addon.id}
              value={addon.id}
              {...register("addOn")}
            />
          </label>
          <br />
        </Fragment>
      ))}

      <button type="button" onClick={prevStep}>
        Go Back
      </button>
      <button type="button" onClick={handleNextStep}>
        Next Step
      </button>
    </fieldset>
  );
}
