import "./App.css";
import { Component } from "react";
import Counter from "./components/counter";
import CounterSettings from "./components/counterSettings";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      step: 0,
      maxVal: 0,
      minVal: 0,
      isSet: false,
    };
  }

  componentDidMount = () => {
    if (localStorage.state) {
      this.setState({
        ...JSON.parse(localStorage.state),
      });
    }
  };

  handleSettings = (step, maxVal, minVal) => {
    this.setState(
      {
        step: Number(step),
        count: Number(step),
        maxVal: Number(maxVal),
        minVal: Number(minVal),
        isSet: true,
      },
      () => this.setLocal(this.state)
    );
  };

  handleAdd = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1,
    });

    console.log(this.state);
  };

  handleSub = () => {
    const { count } = this.state;

    this.setState({
      count: count - 1,
    });
  };

  handleReset = () => {
    this.setState({
      count: this.state.step,
    });
  };

  setLocal = () => {
    localStorage.setItem("state", JSON.stringify(this.state));
  };

  render() {
    const { isSet } = this.state;
    return (
      <div className="App">
        <CounterSettings handleSettings={this.handleSettings} />
        {isSet ? (
          <Counter
            counter={this.state}
            handleAdd={this.handleAdd}
            handleSub={this.handleSub}
            handleReset={this.handleReset}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
