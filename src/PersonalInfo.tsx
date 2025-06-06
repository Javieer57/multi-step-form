import { useFormContext } from "react-hook-form";
import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import type { FormInitialValues } from "./types/form";

export const PersonalInfo = () => {
  const { nextStep } = useMultiStepFormContext();
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<FormInitialValues>();

  const handleNextStep = async () => {
    const isStepValid = await trigger(["name", "address", "phone"]);
    if (isStepValid) nextStep();
  };

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
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("address", {
            required: "Name is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          {...register("phone", {
            required: "Phone is required",
            minLength: {
              value: 10,
              message: "Phone number must be at least 10 characters",
            },
            pattern: {
              value: /^[0-9()+\s-]+$/,
              message: "Invalid phone number format",
            },
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <button type="button" onClick={handleNextStep}>
        Next Step
      </button>
    </fieldset>
  );
};
