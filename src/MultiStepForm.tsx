import { Formik, Form } from "formik";
import { useContext } from "react";
import { FormContext } from "./context/FormContext";
import { PersonalInfo } from "./PersonalInfo";
import { Resume } from "./Resume";
import { SelectPlan } from "./SelectPlan";
import { SelectAddon } from "./SelectAddon";

export const MultiStepForm = () => {
  const { addonsInfo, billingAbbr, prevStep, jumpToStep, step } =
    useContext(FormContext);

  const initialValues: {
    name: string;
    address: string;
    phone: string;
    plan: string;
    billing: "monthly" | "yearly";
    addOn: string[];
  } = {
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
        {({ values }) => (
          <Form>
            <PersonalInfo />

            <SelectPlan />

            <SelectAddon />

            {step === 4 && (
              <Resume
                values={values}
                step={step}
                jumpToStep={jumpToStep}
                billingAbbr={billingAbbr}
                addonsInfo={addonsInfo}
                prevStep={prevStep}
              />
            )}
          </Form>
        )}
      </Formik>

      {/* <!-- Step 5 start --> */}
      {/* Thank you! Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com. */}
      {/* <!-- Step 5 end --> */}
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
