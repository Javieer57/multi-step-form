import { useState } from "react";
import "./App.css";

function App() {
  const [billing, setBilling] = useState("mo");
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const jumpToStep = (step: number) => {
    setStep(step);
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

      <fieldset
        style={{ display: step === 1 ? "block" : "none" }}
        disabled={step !== 1}
      >
        <legend>Personal info</legend>

        <p>Please provide your name, email address, and phone number.</p>

        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="e.g. Stephen King Email" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" placeholder="e.g. +1 234 567 890" />
        </div>

        <button type="button" onClick={nextStep}>
          Next Step
        </button>
      </fieldset>

      <fieldset
        style={{ display: step === 2 ? "block" : "none" }}
        disabled={step !== 2}
      >
        <legend>Select your plan</legend>

        <p>You have the option of monthly or yearly billing.</p>

        <div>
          <label htmlFor="arcade">Arcade $9/{billing}</label>
          <input type="radio" name="plan" id="arcade" />
        </div>
        <div>
          <label htmlFor="arcade">Advanced $12/{billing}</label>
          <input type="radio" name="plan" id="arcade" />
        </div>
        <div>
          <label htmlFor="arcade">Pro $15/{billing}</label>
          <input type="radio" name="plan" id="arcade" />
        </div>

        <div>
          <label htmlFor="monthly">Monthly</label>
          <input
            type="radio"
            name="billing"
            id="monthly"
            defaultChecked
            onClick={() => setBilling("mo")}
          />

          <label htmlFor="yearly">Yearly</label>
          <input
            type="radio"
            name="billing"
            id="yearly"
            onClick={() => setBilling("yr")}
          />
        </div>

        <button type="button" onClick={prevStep}>
          Go Back
        </button>
        <button type="button" onClick={nextStep}>
          Next Step
        </button>
      </fieldset>

      <fieldset
        style={{ display: step === 3 ? "block" : "none" }}
        disabled={step !== 3}
      >
        <legend>Pick add-ons</legend>
        <p>Add-ons help enhance your gaming experience.</p>

        <label htmlFor="online-service">
          <span>Online service</span>
          <span>Access to multiplayer games</span>
          <span>+$1/{billing}</span>

          <input
            type="checkbox"
            name="add-on"
            id="oline-service"
            value="oline-service"
          />
        </label>

        <br />

        <label htmlFor="storage">
          <span>Larger storage</span>
          <span>Extra 1TB of cloud save</span>
          <span>+$2/{billing}</span>
          <input type="checkbox" name="add-on" id="storage" value="storage" />
        </label>

        <br />

        <label htmlFor="customizable-profile">
          <span>Customizable Profile</span>
          <span>Custom theme on your profile</span>
          <span>+$2/{billing}</span>
          <input
            type="checkbox"
            name="add-on"
            value="customizable-profile"
            id="customizable-profile"
          />
        </label>

        <br />

        <button type="button" onClick={prevStep}>
          Go Back
        </button>
        <button type="button" onClick={nextStep}>
          Next Step
        </button>
      </fieldset>

      <section style={{ display: step === 4 ? "block" : "none" }}>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <article>
          <header>
            <div>
              <h3>Arcade ({billing === "mo" ? "Monthly" : "Yearly"})</h3>
              <button
                type="button"
                disabled={step !== 4}
                onClick={() => jumpToStep(2)}
              >
                Change
              </button>
            </div>
            <div>
              <strong>$9/{billing}</strong>
            </div>
          </header>

          <hr />

          <ul>
            <li>
              <span>Online service</span>
              <span>+$1/{billing}</span>
            </li>
            <li>
              <span>Larger storage</span>
              <span>+$2/{billing}</span>
            </li>
          </ul>
        </article>

        <div>
          <span>Total (per month)</span>
          <span>+$12/{billing}</span>
        </div>

        <button type="button" disabled={step !== 4} onClick={prevStep}>
          Go Back
        </button>
        <button type="submit" disabled={step !== 4}>
          Confirm
        </button>
      </section>

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
}

export default App;
