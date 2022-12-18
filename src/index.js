import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// // aws amplify setting start
// import Amplify from "aws-amplify";
// import config from "./aws-exports";

// // checker whether I am on localhost or not.
// const isLocalhost = !!(window.location.hostname === "localhost");

// // split redirect signin & signout strings into correct URIs
// const [productionRedirectSignIn, localRedirectSignIn] =
//   config.oauth.redirectSignIn.split(",");
// const [productionRedirectSignOut, localRedirectSignOut] =
//   config.oauth.redirectSignOut.split(",");

// // use correct URI in the right env
// const updatedAwsConfig = {
//   ...config,
//   oauth: {
//     ...config.oauth,
//     redirectSignIn: isLocalhost
//       ? localRedirectSignIn
//       : productionRedirectSignIn,
//     redirectSignOut: isLocalhost
//       ? localRedirectSignOut
//       : productionRedirectSignOut,
//   },
// };

// Amplify.configure(updatedAwsConfig);
// // end of aws amplify config

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
