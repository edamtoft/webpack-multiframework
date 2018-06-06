import { h, Component }from "preact";

export default class Menu extends Component {
  render() {
    return <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="https://edamtoft.github.io/webpack-multiframework">Multi-Framework Sample</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><a className="nav-link" href="../sample-vue-app/index.html">Vue</a></li>
          <li className="nav-item"><a className="nav-link" href="../sample-react-app/index.html">React</a></li>
          <li className="nav-item active"><a className="nav-link" href="../sample-preact-app/index.html">Preact</a></li>
        </ul>
      </div>
    </nav>;
  }
}