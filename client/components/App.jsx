import React from "react";

import * as api from "../api";
import { getInfo } from "../api";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.printInfo = this.printInfo.bind(this);
  }

  componentDidMount() {
    getInfo(this.printInfo);
  }

  printInfo(err, name) {
    this.setState({
      name: name.name
    });
  }

  render() {
    return (
      <div>
        <h1>ISS</h1>
        <ul>
          <li>{this.state.name}</li>
        </ul>
      </div>
    );
  }
}
