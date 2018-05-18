// @flow
import React from "react";
import ReactDOM from "react-dom";
const Application = () => {
  return <h1>Hello world!</h1>;
};
const element = document.getElementById("app");
element && ReactDOM.render(<Application />, element);