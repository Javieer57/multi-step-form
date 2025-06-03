import { useFormContext } from "./hooks/useFormContext";
import { useFormikContext } from "formik";

export const Resume = () => {
  const { plansInfo, addonsInfo, billingAbbr, jumpToStep, prevStep, step } =
    useFormContext();
  const { values } = useFormikContext();
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
