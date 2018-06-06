import * as React from "react";
import * as ReactDOM from "react-dom";
import strings from "shared/strings";

const root = document.getElementById("app");

ReactDOM.render(
  <div className="container">
    <h1>{strings.HELLO_WORLD} From React</h1>
  </div>, root);