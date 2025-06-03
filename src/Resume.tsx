import { useContext } from "react";
import type { Addon } from "./types/addon";
import type { Form } from "./types/form";
import type { Plan } from "./types/plan";
import { FormContext } from "./context/FormContext";

interface props {
  values: Form;
  step: number;
  jumpToStep: (step: number) => void;
  billingAbbr: { monthly: string; yearly: string };
  addonsInfo: Addon[];
  prevStep: () => void;
}

export const Resume = ({
  addonsInfo,
  billingAbbr,
  jumpToStep,
  prevStep,
  step,
  values,
}: props) => {
  const { plansInfo } = useContext(FormContext);
  const selectedPlan = plansInfo.find((plan) => plan.id === values.plan);
  const selectedAddons = addonsInfo.filter((addon) =>
    values.addOn.includes(addon.id)
  );

  return (
    <section>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <article>
        <header>
          <div>
            <h3>
              {selectedPlan?.name} ({values.billing})
            </h3>
            <button
              type="button"
              disabled={step !== 4}
              onClick={() => jumpToStep(2)}
            >
              Change
            </button>
          </div>
          <div>
            <strong>
              ${selectedPlan?.price[values.billing]}/
              {billingAbbr[values.billing]}
            </strong>
          </div>
        </header>

        <hr />

        <ul>
          {selectedAddons.map((addon) => (
            <li key={addon.id}>
              <span>{addon.name}</span>{" "}
              <span>
                +$
                {addon.price[values.billing]}/{billingAbbr[values.billing]}
              </span>
            </li>
          ))}
        </ul>
      </article>

      <div>
        <span>Total (per month)</span>
        <span>+$12/{billingAbbr[values.billing]}</span>
      </div>

      <button type="button" disabled={step !== 4} onClick={prevStep}>
        Go Back
      </button>
      <button type="submit" disabled={step !== 4}>
        Confirm
      </button>
    </section>
  );
};
