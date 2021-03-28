import "./App.css";

import Header from "./Header";
import Calendar from "./Calendar";
import Trr from "./Trr";
import Kg from "./Kg";
import Graph from "./Graph";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div id="stats">
            <Calendar />
            <Trr />
            <Kg />
          </div>
          <Graph />
        </div>
      </div>
    );
  }
}

export default App;
