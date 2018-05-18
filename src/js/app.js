// @flow
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";

const element = document.getElementById("app");
element && ReactDOM.render(<Main />, element);