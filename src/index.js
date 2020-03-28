import React from "react";
import ReactDOM from "react-dom";
import { registerObserver } from "react-perf-devtool"; // mode dev

import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
registerObserver(); // mode dev
