import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/reset.scss";
import "./styles/globalStyles.scss";
import "./styles/index.scss";
import "./styles/buttons.scss";
import "./styles/texts.scss";
import "./styles/inputs.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
