import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/gallery";
// const App = () => (

// );

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_CONSUMER_KEY);
    return (
      <div className="row mt-5">
        <h1>500 px Demo</h1>
        <Gallery />
      </div>
    );
  }
}
export default App;
