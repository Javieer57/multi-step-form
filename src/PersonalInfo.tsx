import { Field } from "formik";
import { useFormContext } from "./hooks/useFormContext";

export const PersonalInfo = () => {
  const { step, nextStep } = useFormContext();

  return (
    <fieldset
      // style={{ display: step === 1 ? "block" : "none" }}
      disabled={step !== 1}
    >
      <legend>Personal info</legend>

      <p>Please provide your name, email address, and phone number.</p>

      <div>
        <label htmlFor="name">Name</label>
        <Field
          id="name"
          type="text"
          name="name"
          placeholder="e.g. Stephen King Email"
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <Field
          id="address"
          name="address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <Field
          id="phone"
          name="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </div>

      <button type="button" onClick={nextStep}>
        Next Step
      </button>
    </fieldset>
  );
};
