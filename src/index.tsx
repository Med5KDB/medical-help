import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmRCekx0QHxbf1x0ZFxMZFxbRXFPIiBoS35RckVgW3lccXBVQmlaWE1y"
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
