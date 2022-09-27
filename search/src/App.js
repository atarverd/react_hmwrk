import { Component } from "react";
import Recomendation from "./components/recomendation";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      data: {},
    };
  }
  componentDidMount() {
    fetch("https://api.generadordni.es/v2/holidays/countries")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleSearch(e)} className="search" />
        {this.state.search && (
          <div className="recomendations">
            {Object.values(this.state.data)
              .filter((country) =>
                country.toLowerCase().includes(this.state.search?.toLowerCase())
              )
              .map((country, index) => (
                <Recomendation country={country} key={index} />
              ))}
          </div>
        )}
      </div>
    );
  }
}
