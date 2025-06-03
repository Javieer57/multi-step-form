import { useFormikContext, Field } from "formik";
import { Fragment } from "react";
import { useFormContext } from "./hooks/useFormContext";

export function SelectAddon() {
  const { addonsInfo, billingAbbr, nextStep, prevStep, step } =
    useFormContext();
  const { values } = useFormikContext();

  return (
    <fieldset
      // style={{ display: step === 3 ? "block" : "none" }}
      disabled={step !== 3}
    >
      <legend>Pick add-ons</legend>
      <p>Add-ons help enhance your gaming experience.</p>

      {addonsInfo.map((addon: any) => (
        <Fragment key={addon.id}>
          <label htmlFor={addon.id} key={addon.id}>
            <span>{addon.name}</span> <span>{addon.description}</span>{" "}
            <span>
              +${addon.price[values.billing]}/{billingAbbr[values.billing]}
            </span>
            <Field
              type="checkbox"
              name="addOn"
              id={addon.id}
              value={addon.id}
            />
          </label>
          <br />
        </Fragment>
      ))}

      <button type="button" onClick={prevStep}>
        Go Back
      </button>
      <button type="button" onClick={nextStep}>
        Next Step
      </button>
    </fieldset>
  );
}
