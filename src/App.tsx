import "./App.css";
import { FormContextProvider } from "./context/FormContext";
import { MultiStepForm } from "./MultiStepForm";

function App() {
  return (
    <FormContextProvider>
      <MultiStepForm />
    </FormContextProvider>
  );
}

export default App;
