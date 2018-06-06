import { h, render } from "preact";
import Menu from "./Menu";
import strings from "shared/strings";

const root = document.getElementById("app");

render(
  <div>
    <Menu />
    <main className="container mt-4">
      <h1>{strings.HELLO_WORLD} From Preact</h1>
    </main>
  </div>, root);