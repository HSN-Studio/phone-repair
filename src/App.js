import { useState } from "react";
import "./App.css";
import SelectDevice from "./components/SelectDevice";
import StepProvider from "./Store/StepProvider";
function App() {
  // States

  // Regular Methods
  // JSX
  return (
    <div className="App">
      <header className="App-header"></header>
      <StepProvider>
        <SelectDevice />
      </StepProvider>
    </div>
  );
}

export default App;
