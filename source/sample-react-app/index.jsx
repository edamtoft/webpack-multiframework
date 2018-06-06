import * as React from "react";
import * as ReactDOM from "react-dom";
import Menu from "./Menu";
import strings from "shared/strings";

const root = document.getElementById("app");

ReactDOM.render(
  <div>
    <Menu />
    <main className="container mt-4">
      <h1>{strings.HELLO_WORLD} From React</h1>
    </main>
  </div>, root);