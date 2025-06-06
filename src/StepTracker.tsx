import type { Step } from "./types/form";

export const StepTracker = ({ step }: { step: Step }) => {
  return (
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
  );
};
