import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseContext, Firebase } from "./firebase";

// Cresting the root for making the document
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React StrictMode encapsulates a portion of your full application as a component.
  // FirebaseContext initializes the firebase implemented in the program
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
