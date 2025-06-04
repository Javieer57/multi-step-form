import { Formik, Form } from "formik";
import { PersonalInfo } from "./PersonalInfo";
import { Resume } from "./Resume";
import { SelectPlan } from "./SelectPlan";
import { SelectAddon } from "./SelectAddon";
import { useFormContext } from "./hooks/useFormContext";
import type { FormInitialValues } from "./types/form";
import { Success } from "./Success";

export const MultiStepForm = () => {
  const { step } = useFormContext();

  const initialValues: FormInitialValues = {
    name: "",
    address: "",
    phone: "",
    plan: "",
    billing: "monthly",
    addOn: [],
  };

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

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            {step === 1 && <PersonalInfo />}
            {step === 2 && <SelectPlan />}
            {step === 3 && <SelectAddon />}
            {step === 4 && <Resume />}
            {step === 5 && <Success />}
          </Form>
        )}
      </Formik>

      {/* <div className="attribution">
              Challenge by
              <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                Frontend Mentor
              </a>
              . Coded by <a href="#">Your Name Here</a>.
            </div> */}
    </>
  );
};
