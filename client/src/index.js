import React from "react";
import { render } from "react-dom";
import App from "./app";
import "./style.css";
import { Provider } from "react-redux";
import store from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
