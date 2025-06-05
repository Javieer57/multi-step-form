import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import type { FormInitialValues } from "./types/form";
import { useFormContext } from "react-hook-form";

export const Resume = () => {
  const { plansInfo, addonsInfo, billingAbbr, jumpToStep, prevStep, step } =
    useMultiStepFormContext();
  const { getValues } = useFormContext<FormInitialValues>();
  const [plan, addOns, billing] = getValues(["plan", "addOn", "billing"]);

  const selectedPlan = plansInfo.find((item) => item.id === plan);
  const selectedAddons = addonsInfo.filter((item) => addOns.includes(item.id));
  const planPrice = selectedPlan?.price[billing] ?? 0;
  const addonsTotal = selectedAddons.reduce(
    (total, item) => total + (item.price[billing] ?? 0),
    0
  );
  const resumeTotal = planPrice + addonsTotal;

  return (
    <section>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <article>
        <header>
          <div>
            <h3>
              {selectedPlan?.name} ({billing})
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
              ${selectedPlan?.price[billing]}/{billingAbbr[billing]}
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
                {addon.price[billing]}/{billingAbbr[billing]}
              </span>
            </li>
          ))}
        </ul>
      </article>

      <div>
        <span>Total (per month)</span>
        <span>
          +${resumeTotal}/{billingAbbr[billing]}
        </span>
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
