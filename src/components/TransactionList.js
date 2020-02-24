import React, { Component } from "react";
import TransactionForm from "./TransactionForm";

class TransactionList extends Component {
  state = {
    //list: []
    list: this.returnList()
  };
  //addOrEdit function from transactionList
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };
  //from array change it to normal func, to avoid error
  returnList() {
    if (localStorage.getItem("transactions") == null)
      localStorage.setItem("transactions", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("transactions"));
  }
  //function on add & edit linked to transactionForm
  onAddOrEdit = data => {
    let list = this.returnList();
    list.push(data);
    localStorage.setItem("transactions", JSON.stringify(list));
    this.setState({ list: list });
  };

  render() {
    return (
      <div>
        <TransactionForm onAddOrEdit={this.onAddOrEdit} />
        <hr />
        <p>List of Transactions:</p>
        <table>
          <tbody>
            {this.state.list.map((item, a) => {
              return (
                <tr key={a}>
                  <td>{item.benAcctNo}</td>
                  <td>{item.iFSCode}</td>
                  <td>{item.benName}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TransactionList;
