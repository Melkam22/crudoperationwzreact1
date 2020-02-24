import React, { Component } from "react";
import "./App.css";
import TransactionList from "./components/TransactionList";
//import TransactionForm from "./components/TransactionForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Hello React.</h3>
        <TransactionList />
      </div>
    );
  }
}

export default App;
