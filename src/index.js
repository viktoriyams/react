import React from "react";
import ReactDOM from "react-dom";
import School from "./components/Accordion/Accordion.js";

import "./styles.css";

class App extends React.Component {
  state = {
    showText: false
  };
  changeText = () => {
    this.setState({
      showText: !this.state.showText
    });
  };
  render() {
    return (
      <div class="App">
        <button onClick={this.changeText}>change</button>
        {this.state.showText ? <School name="Peter" /> : <School name="Jane" />}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
