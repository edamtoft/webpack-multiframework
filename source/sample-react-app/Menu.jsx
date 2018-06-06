import * as React from "react";

export default class Menu extends React.Component {
  render() {
    return <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="https://edamtoft.github.io/webpack-multiframework">Multi-Framework Sample</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a className="nav-link" href="../sample-vue-app/index.html">Vue</a></li>
          <li className="nav-item active"><a className="nav-link mr-auto" href="../sample-react-app/index.html">React</a></li>
        </ul>
      </div>
    </nav>;
  }
}