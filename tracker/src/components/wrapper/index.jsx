import { Component } from "react";
import Card from "../card";
import Report from "../report";
import "./wrapper.css";

export default class Wrapper extends Component {
  constructor() {
    super();
    this.cards = [1, 2, 3, 4, 5];
    this.state = {
      report: {},
      isReported: false,
    };
  }
  handleClose = (id) => {
    const { report } = this.state;
    const prop = report[id] ? report[id] + 1 : 1;
    this.setState(
      {
        report:{ ...report, [id]: prop }
      },
      () => console.log(this.state)
    );
  };
  handleReport = () => {
    this.setState({
      isReported: true,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="cardWrapper">
          {this.cards.map((item,i) => (
            <Card item={item} handleClose={this.handleClose} key={i}/>
          ))}
        </div>
        {!this.state.isReported ? (
          <button onClick={this.handleReport}>Report</button>
        ) : (
          <div className="report">
            {Object.entries(this.state.report).map((item,i) => (
              <Report item={item} key={i}/>
            ))}
          </div>
        )}
      </div>
    );
  }
}
