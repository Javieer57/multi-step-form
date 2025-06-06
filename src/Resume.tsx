import { useMultiStepFormContext } from "./hooks/useMultiStepFormContext";
import { useResumeSummary } from "./hooks/useResumeSummary";
import { useStepNavigation } from "./hooks/useStepNavigation";

export const Resume = () => {
  const { step } = useMultiStepFormContext();
  const { jumpToStep, prevStep } = useStepNavigation();
  const {
    selectedPlan,
    selectedAddons,
    billing,
    billingAbbr,
    planPrice,
    resumeTotal,
  } = useResumeSummary();

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
            <strong>${planPrice}</strong>
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
