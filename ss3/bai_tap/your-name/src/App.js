import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      item: ""
    }
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({
      item: event.target.value
    })
  }
  handleAddItem = () => {
    let item = this.state.item;
    if (item !== "") {
      let list = this.state.list;
      list.push(item);
      let newItem = {
        list,
        item: ""
      }
      this.setState(newItem)
      console.log(list);
    }
  }
  render() {
    return (
      <div style={{ textAlign: "center", padding: 30 }}>
        <div>
          <h3>Todo list</h3>
          <input type="text" value={this.state.item} onChange={this.handleChange} id="id"></input>
          <button onClick={this.handleAddItem}>Add
          </button>
        </div>
        <div>
          <h3>Note Todo List</h3>
          <ul>
            {this.state.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

}

export default App;
