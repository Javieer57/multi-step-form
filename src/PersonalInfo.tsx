import { useFormContext } from "react-hook-form";
import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import type { FormInitialValues } from "./types/form";

export const PersonalInfo = () => {
  const { nextStep } = useMultiStepFormContext();
  const { register } = useFormContext<FormInitialValues>();

  return (
    <fieldset>
      <legend>Personal info</legend>

      <p>Please provide your name, email address, and phone number.</p>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Stephen King Email"
          {...register("name")}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("address")}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          {...register("phone")}
        />
      </div>

      <button type="button" onClick={nextStep}>
        Next Step
      </button>
    </fieldset>
  );
};
