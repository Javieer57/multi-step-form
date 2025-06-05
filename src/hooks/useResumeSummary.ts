import { useFormContext } from "react-hook-form";
import { useMultiStepFormContext } from "./useMultiStepFormContext";
import type { FormInitialValues } from "../types/form";

export function useResumeSummary() {
  const { getValues } = useFormContext<FormInitialValues>();
  const { plansInfo, addonsInfo, billingAbbr } = useMultiStepFormContext();

  const [planId, addOn, billing] = getValues(["plan", "addOn", "billing"]);

  const selectedPlan = plansInfo.find((item) => item.id === planId);

  const addOnSet = new Set(addOn);
  const selectedAddons = addonsInfo.filter((item) => addOnSet.has(item.id));

  const planPrice = selectedPlan?.price[billing] ?? 0;

  const addonsTotal = selectedAddons.reduce(
    (total, item) => total + (item.price[billing] ?? 0),
    0
  );

  const resumeTotal = planPrice + addonsTotal;

  return {
    selectedPlan,
    selectedAddons,
    billing,
    planPrice,
    resumeTotal,
    billingAbbr,
  };
}
