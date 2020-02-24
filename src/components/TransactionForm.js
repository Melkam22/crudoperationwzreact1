import React, { Component } from "react";

class TransactionForm extends Component {
  state = {
    benAcctNo: "",
    iFSCode: "",
    benName: "",
    amount: ""
  };
  //handle function for each input content
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //addOrEdit function from transactionList
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };
  render() {
    return (
      <div>
        <h3>TransactionForm</h3>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            name="benAcctNo"
            placeholder="benAcctNo"
            value={this.state.benAcctNo}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          {/*  */}
          <input
            name="iFSCode"
            placeholder="iFSCode"
            value={this.state.iFSCode}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          {/*  */}
          <input
            name="benName"
            placeholder="benName"
            value={this.state.benName}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          {/*  */}
          <input
            name="amount"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          {/*  */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default TransactionForm;
