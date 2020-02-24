import React, { Component } from "react";
import TransactionForm from "./TransactionForm";

class TransactionList extends Component {
  state = {
    //list: []
    list: this.returnList(),
    currentIndex: -1
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
    if (this.state.currentIndex === -1) list.push(data);
    //to make the update func work
    else list[this.state.currentIndex] = data;
    localStorage.setItem("transactions", JSON.stringify(list)); //to make the update func work
    this.setState({
      list: list,
      currentIndex: -1 //after submit to return the placeholders
    });
  };
  //handle edit function
  handleEdit = a => {
    this.setState({
      currentIndex: a
    });
  };
  //handle delete function
  handleDelete = a => {
    let list = this.returnList();
    list.splice(a, 1);
    localStorage.setItem("transactions", JSON.stringify(list)); //to make the update func work
    this.setState({
      list: list,
      currentIndex: -1 //after submit to return the placeholders
    });
  };

  render() {
    return (
      <div>
        <TransactionForm
          onAddOrEdit={this.onAddOrEdit}
          currentIndex={this.state.currentIndex} //for edit purpose
          list={this.state.list} //for edit purpose to be exported to form
        />
        <hr />
        <table>
          <tbody>
            {this.state.list.map((item, a) => {
              return (
                <tr key={a}>
                  <td>{item.benAcctNo}</td>
                  <td>{item.iFSCode}</td>
                  <td>{item.benName}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button onClick={() => this.handleEdit(a)}>Edit</button>
                    <button onClick={() => this.handleDelete(a)}>Delete</button>
                  </td>
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
