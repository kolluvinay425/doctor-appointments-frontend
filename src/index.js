import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <script
      data-id="xenioo"
      data-node="app02"
      src="https://static.xenioo.com/webchat/xenioowebchat.js"
    ></script>
    <script>
      xenioowebchat.Start("de802693-7cfe-4454-852e-56dcd8d3fe66");
    </script>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
