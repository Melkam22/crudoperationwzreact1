import React, { Component } from "react";

class TransactionForm extends Component {
  /* state = {
    benAcctNo: "",
    iFSCode: "",
    benName: "",
    amount: ""
  }; */
  //replace the previous state with the below and use spread function
  state = {
    ...this.EditStateFunction()
  };
  //EditStateFunction in relation to transactionForm in trans-list page, change the state structure
  EditStateFunction() {
    if (this.props.currentIndex === -1)
      return {
        benAcctNo: "",
        iFSCode: "",
        benName: "",
        amount: ""
      };
    else return this.props.list[this.props.currentIndex];
  }
  //to update elements if there is only changes in the input fields
  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex != this.props.currentIndex ||
      prevProps.list.length != this.props.list.length
    )
      this.setState({
        ...this.EditStateFunction()
      });
  }

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
        <form onSubmit={this.handleSubmit} autoComplete="off" className="form">
          <h2>Order Form:</h2>
          <input
            className="input"
            name="benAcctNo"
            placeholder="Account Number"
            value={this.state.benAcctNo}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          {/*  */}
          <input
            className="input"
            name="iFSCode"
            placeholder="iFSCode"
            value={this.state.iFSCode}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          {/*  */}
          <input
            className="input"
            name="benName"
            placeholder="Clients Name"
            value={this.state.benName}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          {/*  */}
          <input
            className="input"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          {/*  */}
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default TransactionForm;
